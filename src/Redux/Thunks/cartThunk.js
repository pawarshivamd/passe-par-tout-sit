import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../API";
import Notification from "../../utils/Notification";

export const addToCart = createAsyncThunk(
  "addToCart",
  async ({ product_id, product_color, product_size }, { rejectWithValue }) => {
    try {
      const requestData = {
        product_id,
        product_color,
        product_size,
      };
      const response = await API.post("/cart/add", requestData);
      console.log(response.data);
      const { status, message } = response?.data || {};

      if (status === "success") {
        Notification("success", message);

        return response.data;
      } else if (status === "error") {
        console.log("Success", message);
        throw new Error(message);
      } else {
        Notification("error", "Unknown error occurred");
      }
    } catch (error) {
      // console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchCartDetails = createAsyncThunk(
  "getCartDetails",
  async (arg, { rejectWithValue }) => {
    try {
      const { data, status } = await API.get("/cart");

      // console.log(data);

      if (status === 200) {
        return data;
      } else {
        console.log("error");
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const removeCartItem = createAsyncThunk(
  "removeCartItem",
  async (product_id, { rejectWithValue }) => {
    try {
      const data = await API.post("/cart/remove", product_id);

      return product_id;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
