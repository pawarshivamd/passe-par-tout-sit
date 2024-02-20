import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../API";
import Notification from "../../utils/Notification";

export const fetchOrderProducts = createAsyncThunk(
  "fetchOrderProducts",
  async (arg, { rejectWithValue }) => {
    try {
      const { data, status } = await API.get("/order-history");

      console.log(data);

      if (status === 200) {
        return data;
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
