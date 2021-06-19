import axios from 'axios';

const axiosInstance = axios.create({
  // withCredentials: true,
  baseURL: process.env.REACT_APP_CRISPY_API,
  headers: { 'Content-Type': 'application/json' },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || 'Something went wrong'
    )
);

export default axiosInstance;
