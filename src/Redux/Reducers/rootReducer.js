import { combineReducers } from "@reduxjs/toolkit";
import homeReducer from "../Slices/homeSlice";
import productReducer from "../Slices/productDetailsSlice";
import cartReducer from "../Slices/cartSlice";
import userReducer from "../Slices/userSlice";
import shopReducer from "../Slices/shopSlice";
import wihsListReducer from "../Slices/wishListSlice";
import addressReducer from "../Slices/addressSlice";
import orderReducer from "../Slices/orderSlice";

const rootReducer = combineReducers({
  home: homeReducer,
  product: productReducer,
  cart: cartReducer,
  user: userReducer,
  shop: shopReducer,
  wishList: wihsListReducer,
  address: addressReducer,
  order: orderReducer,
});

export default rootReducer;
