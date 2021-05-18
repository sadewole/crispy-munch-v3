import axios from 'axios';

const axiosInstance = axios.create({
  // withCredentials: true,
  baseURL: 'https://crispy-munch-v3-backend.herokuapp.com/',
});

export default axiosInstance;