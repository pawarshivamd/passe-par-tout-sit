import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../API";
import Notification from "../../utils/Notification";

export const fetchUserDetails = createAsyncThunk(
  "fetchUserDetails",
  async ({ values, navigate }, { rejectWithValue }) => {
    // console.log(navigate, "navigate");
    // console.log(values, "values");

    try {
      const {
        data: {
          authorization: { token }, // Extract the token directly
          response,
          message,
        },
        status,
      } = await API.post("/user_login", values);

      console.log(response, "response");

      if (status === 200) {
        localStorage.setItem("auth_token", token); // Store token in local storage
        console.log(token, response);
        Notification("success", message);
        setTimeout(() => {
          navigate("/");  
          // window.location.href = "/";
        }, 1000);
        return response;
      }
    } catch (error) {
      Notification("error", error.response.data.message);
      return rejectWithValue(error);
    }
  }
);
