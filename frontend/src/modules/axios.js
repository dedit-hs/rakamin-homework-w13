import axios from "axios";

const baseURL = "http://localhost:8000";
const instance = axios.create({ baseURL });

instance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("access_token");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

export { instance };
