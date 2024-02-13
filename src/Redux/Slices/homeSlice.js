import { createSlice } from "@reduxjs/toolkit";
import { fetchHomeProducts } from "../Thunks/homeThunk";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    products: [],
    isLoading: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHomeProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchHomeProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchHomeProducts.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default homeSlice.reducer;
