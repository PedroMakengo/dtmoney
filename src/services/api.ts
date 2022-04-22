import axios from "axios";

export const api = axios.create({
  baseURL: "https://dtmoney-cyan-chi.vercel.app/api",
});
