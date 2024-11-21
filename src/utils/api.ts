import axios, { AxiosError } from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
  },
});

const handleError = (error: AxiosError) => {
  if ([404, 500].includes(error.response?.status as number)) {
    window.location.replace("/error");
  }
  return Promise.reject(error as Error);
};

api.interceptors.response.use((response) => response, handleError);
