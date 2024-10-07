import axios from "axios";
import { useAuthStore } from "../store/authSore";

const api = axios.create({
  baseURL: "http://localhost/3000",
});
api.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
