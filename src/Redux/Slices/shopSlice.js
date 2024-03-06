import { createSlice } from "@reduxjs/toolkit";
import { fetchShopProducts, productSearch } from "../Thunks/ShopThunk";

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    products: [],
    searchedProduct: [],
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
    builder.addCase(productSearch.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(productSearch.fulfilled, (state, action) => {
      state.isLoading = false;
      state.searchedProduct = action.payload;
    });
    builder.addCase(productSearch.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default shopSlice.reducer;
