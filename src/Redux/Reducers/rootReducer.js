import { combineReducers } from "@reduxjs/toolkit";
import homeReducer from "../Slices/homeSlice";
import productReducer from "../Slices/productDetailsSlice";
import cartReducer from "../Slices/cartSlice";

const rootReducer = combineReducers({
  home: homeReducer,
  product: productReducer,
  cart: cartReducer,
});

export default rootReducer;
