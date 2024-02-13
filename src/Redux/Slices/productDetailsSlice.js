import { createSlice } from "@reduxjs/toolkit";
import { fetchProductDetails } from "../Thunks/productDetailsThunk";

const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState: {
    product: null,
    productSize: [],
    productColor: [],
    productImage: [],
    relatedProducts: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetails.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload.product;
        state.productSize = action.payload.product_size;
        state.productColor = action.payload.product_color;
        state.productImage = action.payload.product_image;
        state.relatedProducts = action.payload.related_products;
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default productDetailsSlice.reducer;
