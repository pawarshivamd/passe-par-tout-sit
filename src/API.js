// import axios from "axios";

// // const baseURL = process.env.REACT_APP_BASE_URL;
// const baseURL = "https://ppt.thebizzbuddy.com/public/api";
// const token = localStorage.getItem("auth_token");

import axios from "axios";

// const baseURL = "https://api.pptthebrand.com/public/api";
const baseURL = process.env.REACT_APP_BASE_URL;

const API = axios.create({
  baseURL: baseURL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Adding a response interceptor
API.interceptors.response.use(
  (response) => {
    // If the request is successful, just return the response
    return response;
  },
  (error) => {
    // Check if the response status is 403
    if (error.response && error.response.status === 401) {
      // Clear local storage
      localStorage.clear();
      // Redirect to the root path
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

export default API;
