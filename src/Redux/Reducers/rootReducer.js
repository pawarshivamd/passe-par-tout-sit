import { combineReducers } from "@reduxjs/toolkit";
import homeReducer from "../Slices/homeSlice";
import productReducer from "../Slices/productDetailsSlice";

const rootReducer = combineReducers({
  home: homeReducer,
  product: productReducer,
});

export default rootReducer;
