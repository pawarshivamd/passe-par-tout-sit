import axios from "axios";

// const baseURL = process.env.REACT_APP_BASE_URL;
const baseURL = "https://ppt.thebizzbuddy.com/public/api";

export default axios.create({
  baseURL: baseURL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    // 'Content-Type': 'multipart/form-data',
    // Authorization : `Bearer ${localStorage.getItem('auth_token')}`
  },

  //   validateStatus: (status) => {
  //     if (status === 401) {
  //       window.location.href = "/";
  //       localStorage.clear();
  //     }
  //     return status;
  //   },
});
