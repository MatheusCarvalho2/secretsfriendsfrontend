import axios from "axios";

const token = localStorage.getItem('token');

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.request.use(config => {
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
    console.log("TEM TOKEN");

  }
  return config;
}, error => {
  return Promise.reject(error);
});

export default api;
