import { createSlice } from "@reduxjs/toolkit";
import {
  addToCart,
  fetchCartDetails,
  removeCartItem,
} from "../Thunks/cartThunk";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartData: {},
    isLoading: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addToCart.pending, (state) => {
      state.isLoading = true;
      state.isError = null;
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.isLoading = false;
      // state.cartItems.push(action.payload); // Assuming action.payload contains the new cart item
    });
    builder.addCase(addToCart.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload; // Assuming action.payload contains the isError message
    });
    builder.addCase(fetchCartDetails.pending, (state) => {
      state.isLoading = true;
      state.isError = null;
    });
    builder.addCase(fetchCartDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.cartData = action.payload;
    });
    builder.addCase(fetchCartDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });
    builder.addCase(removeCartItem.pending, (state) => {
      state.isLoading = true;
      state.isError = null;
    });
    builder.addCase(removeCartItem.fulfilled, (state, action) => {
      console.log("action.payload", action.payload);
      state.isLoading = false;
      // Remove the item from state.cartData based on action.payload
      state.cartData.cart_items = state.cartData.cart_items.filter(
        (item) => item.id !== action.payload
      );
    });
    builder.addCase(removeCartItem.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });
  },
});

export default cartSlice.reducer;
