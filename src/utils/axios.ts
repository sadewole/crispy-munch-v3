import axios from 'axios';

const axiosInstance = axios.create({
  // withCredentials: true,
  baseURL: 'https://crispy-munch-v3-backend.herokuapp.com/api/v1/',
  headers: { 'Content-Type': 'application/json' }
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;