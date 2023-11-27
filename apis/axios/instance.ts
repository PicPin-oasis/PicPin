import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.picpin.life",
  withCredentials: true,
});

export default axiosInstance;
