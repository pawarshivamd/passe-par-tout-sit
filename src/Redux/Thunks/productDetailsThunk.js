import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../API";

export const fetchProductDetails = createAsyncThunk(
  "fetchProductDetails",
  async (arg, { rejectWithValue }) => {
    try {
      const { data, status } = await API.get("/product_details/1");

      console.log(data);

      if (status === 200) {
        return data;
      } else {
        return rejectWithValue("Failed to fetch data");
      }
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
