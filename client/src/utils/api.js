import axios from "axios";
import dayjs from "dayjs";
import { toast } from "react-toastify";

export const api = axios.create({
  baseURL: "https://urban-habitats-1.vercel.app/api",
});

export const getAllProperties = async () => {
  try {
    const response = await api.get("/residency/allResidencies", {
      timeout: 10 * 1000,
    });
    if (response.status === 400 || response.status === 500) throw response.data;
    return response.data;
  } catch (err) {
    toast.error("Something Went Wrong");
    throw err;
  }
};

export const getProperty = async (id) => {
  try {
    const response = await api.get(`/residency/${id}`, {
      timeout: 10 * 1000,
    });
    if (response.status === 400 || response.status === 500) throw response.data;
    return response.data;
  } catch (err) {
    toast.error("Something Went Wrong");
    throw err;
  }
};

export const createUser = async (email) => {
  try {
    await api.post(`/user/register`, { email });
  } catch (error) {
    toast.error("Something went wrong, Please try again");
    throw error;
  }
};

export const bookVisit = async (date, propertyId, email) => {
  try {
    await api.post(`/user/bookVisit/${propertyId}`, {
      email,
      id: propertyId,
      date: dayjs(date).format("DD/MM/YYYY"),
    });
  } catch (error) {
    toast.error("Something Went Wrong!");
    throw error;
  }
};

export const removeBooking = async (id, email) => {
  try {
    await api.post(`/user/cancelBooking/${id}`, { email });
  } catch (err) {
    // toast.error("Something Went Wrong!");
    throw err;
  }
};

export const toFav = async (id, email) => {
  try {
    await api.post(`/user/addToFavourite/${id}`, { email });
  } catch (err) {
    toast.error("Something Went Wrong!");
    throw err;
  }
};

export const getAllFav = async (email) => {
  try {
    const res = await api.post("/user/allFavourites", { email });
    console.log(res);
    return res.data["favResidenciesID"];
  } catch (err) {
    toast.error("Something went wrong while fetching favourites");
    throw err;
  }
};

export const getAllBookings = async (email) => {
  try {
    const res = await api.post(`/user/getAllBookings`, { email });
    console.log("res");
    return res.data["bookedVisits"];
  } catch (error) {
    toast.error("Something went wrong");
    throw error;
  }
};

export const createResidency = async (data) => {
  console.log(data);
  try {
    const res = await api.post(`/residency/create`, {
      data,
    });
  } catch (error) {
    throw error;
  }
};
