import { auth } from "express-oauth2-jwt-bearer";
import dotenv from "dotenv";
dotenv.config();

const baseUrl = process.env.DOMAIN;
const jwtCheck = auth({
  audience: "http://localhost:8000",
  issuerBaseURL: `{${baseUrl}}`,
  tokenSigningAlg: "RS256",
});

export default jwtCheck;
