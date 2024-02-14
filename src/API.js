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
    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3BwdC50aGViaXp6YnVkZHkuY29tL3B1YmxpYy9hcGkvdXNlcl9sb2dpbiIsImlhdCI6MTcwNzkxMDcwNiwiZXhwIjoxNzA3OTE0MzA2LCJuYmYiOjE3MDc5MTA3MDYsImp0aSI6IlRqU1pWc1ZDMzNxcG5wT0IiLCJzdWIiOiI1IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.8YRX291Dc6d71RjNkN6znz1xAEnC9VugHhhkMS3pJEg`,
  },

  validateStatus: (status) => {
    if (status === 401) {
      // window.location.href = "/";
      localStorage.clear();
    }
    return status;
  },
});
