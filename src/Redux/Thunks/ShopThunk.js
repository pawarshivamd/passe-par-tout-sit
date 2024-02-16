import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../API";
import Notification from "../../utils/Notification";

export const fetchShopProducts = createAsyncThunk(
  "fetchHomeProducts",
  async ({ category_id, start, count }, { rejectWithValue }) => {
    const requestedData = {
      category_id,
      start,
      count,
    };

    try {
      const {
        data: { products },
        status,
      } = await API.post("/shop_products", requestedData);

      console.log(products);

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
