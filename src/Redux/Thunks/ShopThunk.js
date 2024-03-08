import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../API";
import Notification from "../../utils/Notification";

export const fetchShopProducts = createAsyncThunk(
  "fetchHomeProducts",
  async ({ category_id, start, count, search }, { rejectWithValue }) => {
    const requestedData = {
      category_id,
      start,
      count,
      search,
    };

    try {
      const {
        data: { products },
        status,
      } = await API.post("/shop_products", requestedData);

      if (status === 200) {
        // Notification("success", "Products fetched successfully");
        return products;
      } else {
        return rejectWithValue("Failed to fetch data");
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const productSearch = createAsyncThunk(
  "productSearch",
  async (arg, { rejectWithValue }) => {
    console.log(arg);
    try {
      const {
        data: { products },
      } = await API.get(`/products/search?search=${arg}`);
      return products;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
