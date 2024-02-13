import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../API";
import Notification from "../../utils/Notification";

const token =
  "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3BwdC50aGViaXp6YnVkZHkuY29tL3B1YmxpYy9hcGkvdXNlcl9sb2dpbiIsImlhdCI6MTcwNzgxNDU2MywiZXhwIjoxNzA3ODE4MTYzLCJuYmYiOjE3MDc4MTQ1NjMsImp0aSI6Im9ud2Z0UHVkVzgzU0NyMVAiLCJzdWIiOiIzIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.j_lbj9sQtRYEr0O5YImPC0AhNexBVWa3C_XGXzeQXKY";

export const addToCart = createAsyncThunk(
  "addToCart",
  async ({ productId, productColor, productSize }, { rejectWithValue }) => {
    console.log("add to cart clicked", productId, productColor, productSize);

    try {
      const formData = new FormData();
      formData.append("product_id", productId);
      formData.append("product_color", productColor);
      formData.append("product_size", productSize);

      const config = {
        headers: {
          Authorization: token,
        },
      };

      const {
        data: response,
        status,
        message,
      } = await API.post("/cart/add", formData, config);

      if (status === 200) {
        // Notification("success", message);
        console.log("SUccess");
      } else {
        // Notification("error", message);
        console.log("errro");
      }

      console.log(response);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchCartDetails = createAsyncThunk(
  "getCartDetails",
  async (arg, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          Authorization: token,
        },
      };
      console.log("called");
      const { data, status } = await API.get("/cart", config);

      console.log(data);

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
