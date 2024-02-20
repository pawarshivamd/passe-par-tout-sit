import { createSlice } from "@reduxjs/toolkit";
import { fetchOrderProducts } from "../Thunks/orderThunk";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOrderProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchOrderProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.orders = action.payload;
    });
    builder.addCase(fetchOrderProducts.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default orderSlice.reducer;
