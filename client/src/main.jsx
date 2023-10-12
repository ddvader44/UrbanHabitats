import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import dotenv from "dotenv";
import { Auth0Provider } from "@auth0/auth0-react";

const DOMAIN = import.meta.env.VITE_DOMAIN;
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain={`${DOMAIN}`}
      clientId={`${CLIENT_ID}`}
      authorizationParams={{
        redirect_uri: "https://urban-habitats-1-nine.vercel.app",
      }}
      audience="http://localhost:8000"
      scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
