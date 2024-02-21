import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../API";
import Notification from "../../utils/Notification";

export const fetchWishList = createAsyncThunk(
  "fetchWishList",
  async (data, { rejectWithValue }) => {
    try {
      const response = await API.get("/wishlist");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addToWishList = createAsyncThunk(
  "addToWishList",
  async (product_id, { rejectWithValue }) => {
    console.log(product_id);

    try {
      const {
        data: { message },
        status,
      } = await API.post("/wishlist/add", product_id);
      // console.log(data);

      if (status === 200) {
        Notification("success", message);
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const removeFromWishList = createAsyncThunk(
  "removeFromWishList",
  async (product_id, { rejectWithValue }) => {
    try {
      const {
        data: { message },
        status,
      } = await API.post("/wishlist/remove", product_id);

      if (status === 200) {
        Notification("success", message);
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
