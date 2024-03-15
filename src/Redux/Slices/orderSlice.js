import { createSlice } from "@reduxjs/toolkit";
import { fetchOrderProducts, trackOrder } from "../Thunks/orderThunk";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: {},
    trackorders: {},
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOrderProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchOrderProducts.fulfilled, (state, action) => {
      console.log(action.payload, "order Slice");
      state.isLoading = false;
      state.orders = action.payload;
    });
    builder.addCase(fetchOrderProducts.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(trackOrder.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(trackOrder.fulfilled, (state, action) => {
      console.log(action.payload, "order Slice");
      state.isLoading = false;
      state.trackorders = action.payload;
    });
    builder.addCase(trackOrder.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default orderSlice.reducer;
