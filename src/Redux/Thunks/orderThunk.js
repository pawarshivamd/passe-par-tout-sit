import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../API";
import Notification from "../../utils/Notification";

export const fetchOrderProducts = createAsyncThunk(
  "fetchOrderProducts",
  async (arg, { rejectWithValue }) => {
    try {
      const { data, status } = await API.get("/order-history");

      if (status === 200) {
        return data;
      }

      console.log(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const placeOrder = createAsyncThunk(
  "fetchOrderProducts",
  async (orderData, { rejectWithValue }) => {
    try {
      const {
        data: { message },
        status,
      } = await API.post("/checkout/place-order", orderData);

      if (status === 200) {
        Notification("success", message);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const trackOrder = createAsyncThunk(
  "trackOrder",
  async (orderData, { rejectWithValue }) => {
    try {
      const { data, status } = await API.post(
        `/order-details?order_id=${orderData}`
      );
      console.log(data, "data");

      if (status === 200) {
        Notification("success", data.message);
        return data;
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
