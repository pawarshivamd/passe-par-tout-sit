import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAddresss,
  addAddress,
  fetchAddressByID,
  editAddress,
} from "../Thunks/addressThunk";

const addressSlice = createSlice({
  name: "addressSlice",
  initialState: {
    address: [],
    addressByID: "",
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addAddress.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addAddress.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(addAddress.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(fetchAddresss.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAddresss.fulfilled, (state, action) => {
      state.isLoading = false;
      state.address = action.payload;
    });
    builder.addCase(fetchAddresss.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(fetchAddressByID.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAddressByID.fulfilled, (state, action) => {
      state.isLoading = false;
      state.addressByID = action.payload;
    });
    builder.addCase(fetchAddressByID.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(editAddress.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(editAddress.fulfilled, (state, action) => {
      state.isLoading = false;
      state.addressByID = action.payload;
    });
    builder.addCase(editAddress.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default addressSlice.reducer;
