import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../API";
import Notification from "../../utils/Notification";

export const addAddress = createAsyncThunk(
  "addAddress",
  async (address, { rejectWithValue }) => {
    try {
      console.log(address, "First");

      const response = await API.post("/add-address", address);
      const { data } = response;
      return data;
      console.log(address, "second", response);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchAddresss = createAsyncThunk(
  "fetchAddresss",
  async (arg, { rejectWithValue }) => {
    try {
      const response = await API.get("/address");

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
