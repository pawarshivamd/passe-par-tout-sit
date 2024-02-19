import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
  name: "wishList",
  initialState: {
    wishList: [],
    isLoading: false,
  },
  reducers: {
    // addToWishList: (state, action) => {
    //     state.wishList.push(action.payload);
    // },
    // removeFromWishList: (state, action) => {
    //     state.wishList = state.wishList.filter((item) => item.id !== action.payload);
    // },
  },
});

export default wishListSlice.reducer;
