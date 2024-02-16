import { createSlice } from "@reduxjs/toolkit";
import { fetchShopProducts } from "../Thunks/ShopThunk";

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    products: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchShopProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchShopProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchShopProducts.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default shopSlice.reducer;
