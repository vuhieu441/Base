import axios from 'axios';
import { BASEURL } from 'src/utils/constants';

const axiosClient = axios.create({
  baseURL: BASEURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// // Add a request interceptor
// axiosClient.interceptors.request.use(
//   function (config) {
//     // Do something before request is sent
//     const token = localStorage.getItem('access token');
//     // const token = process.env.TOKEN;
//     config.headers.Authorization = token ? `Bearer ${token}` : '';
//     return config;
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );

export default axiosClient;
