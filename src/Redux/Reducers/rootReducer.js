import { combineReducers } from "@reduxjs/toolkit";
import homeReducer from "../Slices/homeSlice";
import productReducer from "../Slices/productDetailsSlice";
import cartReducer from "../Slices/cartSlice";
import userReducer from "../Slices/userSlice";
import shopReducer from "../Slices/shopSlice";

const rootReducer = combineReducers({
  home: homeReducer,
  product: productReducer,
  cart: cartReducer,
  user: userReducer,
  shop: shopReducer,
});

export default rootReducer;
