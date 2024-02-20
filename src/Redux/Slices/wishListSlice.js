import { createSlice } from "@reduxjs/toolkit";
import {
  fetchWishList,
  addToWishList,
  removeFromWishList,
} from "../Thunks/wishListThunk";

const wishListSlice = createSlice({
  name: "wishList",
  initialState: {
    wishList: [],
    isLoading: false,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchWishList.pending, (state) => {
      state.isLoading = true;
    })
    builder.addCase(fetchWishList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.wishList = action.payload;
    })
    builder.addCase(fetchWishList.rejected, (state) => {
      state.isLoading = false;
    })
  }

});

export default wishListSlice.reducer;
