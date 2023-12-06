import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.picpin.life",
  withCredentials: true,
});

axios.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");
  config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : "";
  return config;
});

export default axiosInstance;
