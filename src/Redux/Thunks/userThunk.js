import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../API";
import Notification from "../../utils/Notification";
import { useNavigate } from "react-router-dom";

export const fetchUserDetails = createAsyncThunk(
  "fetchUserDetails",
  async ({ userData, navigate }, { rejectWithValue }) => {
    try {
      const {
        data: {
          authorization: { token }, // Extract the token directly
          response,
          message,
        },
        status,
      } = await API.post("/user_login", userData);
      // console.log(response);
      if (status === 200) {
        localStorage.setItem("auth_token", token); // Store token in local storage
        localStorage.setItem("user_data", JSON.stringify(response));
        Notification("success", message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
        return response; // Return serializable data
      }
    } catch (error) {
      console.log("error fetch userDetails", error);
      Notification("error", error.response.data.message);
      return rejectWithValue(error.response.data.message); // Return serializable error message
    }
  }
);

export const userLogout = createAsyncThunk(
  "userLogout",
  async ({ navigate, reason }, { rejectWithValue }) => {
    try {
      console.log("Logout called");
      const {
        data: { message },
        status,
      } = await API.post("/logout");

      if (status === 200) {
        localStorage.removeItem("auth_token");
        localStorage.removeItem("user_data");
        localStorage.removeItem("address_id");
        if (reason === "sessionTimeout") {
          Notification("info", "Your session has timed out.");
        } else {
          Notification("success", message);
        }
        setTimeout(() => {
          navigate("/login");
          window.location.reload();
        }, 1000);
      }
    } catch (error) {
      localStorage.removeItem("auth_token");
      localStorage.removeItem("user_data");
      localStorage.removeItem("address_id");
      setTimeout(() => {
        navigate("/login");
        window.location.reload();
      }, 1000);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  "registerUser",
  async (registerData, { rejectWithValue }) => {
    try {
      console.log("Register called");
      const {
        data: { message, response },
        status,
      } = await API.post("/register", registerData);

      if (status === 200) {
        Notification("success", message);
        return response;
        // setTimeout(() => {
        //   useNavigate("/login");
        // }, 1000);
      }
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const changeEmail = createAsyncThunk(
  "changeEmail",
  async (emailData, { rejectWithValue }) => {
    try {
      console.log("Change Email called");
      const {
        data: { message, response },
        status,
      } = await API.post("/change-email", emailData);

      if (status === 200) {
        Notification("success", message);
        return response;
      }
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const changeMobileNo = createAsyncThunk(
  "changeMobileNo",
  async (mobileData, { rejectWithValue }) => {
    try {
      console.log("Change Email called");
      const {
        data: { message, response },
        status,
      } = await API.post("/change-mobile", mobileData);

      if (status === 200) {
        Notification("success", message);
        return response;
      }
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const changePassword = createAsyncThunk(
  "changePassword",
  async (passwordData, { rejectWithValue }) => {
    try {
      console.log("changePassword called");
      const {
        data: { message, response },
        status,
      } = await API.post("/change-password", passwordData);

      if (status === 200) {
        Notification("success", message);
        return response;
      }
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "forgotPassword",
  async (passwordData, { rejectWithValue }) => {
    try {
      const {
        data: { message, response },
        status,
      } = await API.post("/user/forget-password", passwordData);

      if (status === 200) {
        Notification("success", message);
        return response;
      }
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteAccount = createAsyncThunk(
  "deleteAccount",
  async (deleteAccountData, { rejectWithValue }) => {
    try {
      console.log("deleteAccount called");
      const {
        data: { message, response },
        status,
      } = await API.post("/delete-account", deleteAccountData);

      if (status === 200) {
        Notification("success", message);
        return response;
      }
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
