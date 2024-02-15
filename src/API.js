// import axios from "axios";

// // const baseURL = process.env.REACT_APP_BASE_URL;
// const baseURL = "https://ppt.thebizzbuddy.com/public/api";
// const token = localStorage.getItem("auth_token");

// console.log(token, "token");

// export default axios.create({
//   baseURL: baseURL,
//   timeout: 30000,
//   headers: {
//     "Content-Type": "application/json",
//     "Access-Control-Allow-Origin": "*",
//     Authorization: `Bearer ${token}`,
//   },
// });

// Authorization: `Bearer ${token}`,

// export default axios.create({
//   baseURL: baseURL,
//   timeout: 30000, // 30 secs
//   headers: {
//     Authorization: `Bearer ${token}`,
//     // "ngrok-skip-browser-warning": "69420",
//   },
//   validateStatus: (status) => status,
// });

// import axios from "axios";

// const api = axios.create({
//   baseURL: "https://ppt.thebizzbuddy.com/public/api ",
//   headers: {
//     "Content-Type": "application/json",
//     "Access-Control-Allow-Origin": "*",
//   },
// });

// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("auth_token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default api;

import axios from "axios";

const baseURL = "https://ppt.thebizzbuddy.com/public/api";

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

export default API;
