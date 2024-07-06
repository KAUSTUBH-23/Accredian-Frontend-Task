import axios from "axios";

export const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const axiosInstance = axios.create({
  baseURL: SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
