import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../API";
import Notification from "../../utils/Notification";

export const fetchUserDetails = createAsyncThunk(
  "fetchUserDetails",
  async ({ arg, navigate }, { rejectWithValue }) => {
    try {
      const {
        data: {
          authorization: { token }, // Extract the token directly
          response,
          message,
        },
        status,
      } = await API.post("/user_login", arg);

      if (status === 200) {
        localStorage.setItem("auth_token", token); // Store token in local storage
        console.log(token, response);
        Notification("success", message);
        setTimeout(() => {
          navigate("/");
        }, 500);
        return response;
      }
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
