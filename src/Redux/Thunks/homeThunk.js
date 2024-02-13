import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../API";

export const fetchHomeProducts = createAsyncThunk(
  "fetchHomeProducts",
  async (arg, { rejectWithValue }) => {
    try {
      const {
        data: { trending_products },
        status,
      } = await API.get("/home");

      // console.log(status, trending_products);  

      if (status === 200) {
        return trending_products;
      } else {
        return rejectWithValue("Failed to fetch data");
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
