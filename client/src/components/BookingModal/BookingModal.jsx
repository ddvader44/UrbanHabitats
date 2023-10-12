import { Button, Modal } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import React, { useContext, useState } from "react";
import { useMutation } from "react-query";
import { bookVisit } from "../../utils/api";
import { toast } from "react-toastify";
import UserDetailContext from "../../context/UserDetailContext";
import dayjs from "dayjs";

const BookingModal = ({ opened, setOpened, propertyId, email }) => {
  const [value, setValue] = useState(null);
  const { setUserDetails } = useContext(UserDetailContext);
  const handleBookingSuccess = () => {
    toast.success("You have booked the visit", { position: "bottom-right" });
    setUserDetails((prev) => ({
      ...prev,
      bookings: [
        ...prev.bookings,
        {
          id: propertyId,
          date: dayjs(value).format("DD/MM/YYYY"),
        },
      ],
    }));
  };
  const { mutate, isLoading } = useMutation({
    mutationFn: () => bookVisit(value, propertyId, email),
    onSuccess: () => handleBookingSuccess(),
    onError: ({ response }) => toast.error(response.data.message),
    onSettled: () => setOpened(false),
  });
  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Select Date"
      centered
    >
      <div className="flexCenter" style={{ gap: "1rem" }}>
        <DatePicker value={value} onChange={setValue} minDate={new Date()} />
        <Button disabled={!value || isLoading} onClick={() => mutate()}>
          Book Visit
        </Button>
      </div>
    </Modal>
  );
};

export default BookingModal;
