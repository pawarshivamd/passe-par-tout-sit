import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../API";
import Notification from "../../utils/Notification";

export const fetchUserDetails = createAsyncThunk(
  "fetchUserDetails",
  async ({ values, navigate }, { rejectWithValue }) => {
    try {
      const {
        data: {
          authorization: { token }, // Extract the token directly
          response,
          message,
        },
        status,
      } = await API.post("/user_login", values);

      if (status === 200) {
        localStorage.setItem("auth_token", token); // Store token in local storage
        // localStorage.setItem("user_data", JSON.stringify(response));
        Notification("success", message);
        setTimeout(() => {
          navigate("/");
          // window.location.href = "/";
        }, 1000);
        return response;
      }
    } catch (error) {
      console.log("error fetch userDetails", error);
      Notification("error", error.response.data.message);
      return rejectWithValue(error);
    }
  }
);

export const userLogout = createAsyncThunk(
  "userLogout",
  async (navigate, { rejectWithValue }) => {
    try {
      console.log("Logout called");
      const {
        data: { message },
        status,
      } = await API.post("/logout");

      if (status === 200) {
        localStorage.removeItem("auth_token");
        Notification("success", message);
        setTimeout(() => {
          navigate("/login");
          window.location.reload();
        }, 1000);
      }
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
