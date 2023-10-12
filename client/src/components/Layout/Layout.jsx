import React, { useContext, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import UserDetailContext from "../../context/UserDetailContext";
import { useMutation } from "react-query";
import { createUser } from "../../utils/api";
import useFavourites from "../../hooks/useFavourites";
import useBookings from "../../hooks/useBookings";

const Layout = () => {
  // setTimeout(() => {
    // useFavourites();
  // }, 5000);
  // useBookings();
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();
  const { setUserDetails } = useContext(UserDetailContext);
  const { mutate } = useMutation({
    mutationKey: [user?.email],
    mutationFn: () => createUser(user?.email),
  });

  useEffect(() => {
    // const getTokenAndRegsiter = async () => {
    //   try {
    //     const res = await getAccessTokenSilently({
    //       audience: "http://localhost:8000",
    //       scope: "openid profile email",
    //     });
    //     localStorage.setItem("access_token", res);
    //     setUserDetails((prev) => ({ ...prev, token: res }));
    //     mutate(res);
    //     console.log(res);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };

    isAuthenticated && mutate();
  }, [isAuthenticated]);

  return (
    <>
      <div style={{ background: "var(--black)", overflow: "hidden" }}>
        <Header />
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
