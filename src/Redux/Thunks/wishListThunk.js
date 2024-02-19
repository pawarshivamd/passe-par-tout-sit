import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../API";

export const fetchWishList = createAsyncThunk(
  "fetchWishList",
  async (data, { rejectWithValue }) => {
    try {
      const response = await API.get("/wishlist");
      console.log(response.data);
      //   return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addToWishList = createAsyncThunk(
  "addToWishList",
  async (data, { rejectWithValue }) => {
    try {
      const response = await API.post("/wishlist", data);
      //   return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const removeFromWishList = createAsyncThunk(
  "removeFromWishList",
  async (data, { rejectWithValue }) => {
    try {
      const response = await API.delete("/wishlist", data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
