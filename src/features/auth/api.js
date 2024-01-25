import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  "loginUser",
  async (arg, thunkAPI) => {
    try {
      //   const response = await fetch("https://your-api.com/endpoint");
      //   return await response.json();
      // localStorage.setItem("UserInfo", arg);
      return arg;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "logoutUser",
  async (arg, thunkAPI) => {
    try {
      const response = await fetch("https://your-api.com/endpoint");
      return await response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getUser = createAsyncThunk("getUser", async (arg, thunkAPI) => {
  try {
    const response = await fetch("https://your-api.com/endpoint");
    return await response.json();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
