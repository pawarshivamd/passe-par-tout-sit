import { createSlice } from "@reduxjs/toolkit";
import { fetchUserDetails, userLogout } from "../Thunks/userThunk";

const initialState = {
  userDetails: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // your other reducers...
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserDetails.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchUserDetails.fulfilled, (state, action) => {
      console.log(action.payload, "action.payload");
      state.loading = false;
      state.userDetails = action.payload;
    });
    builder.addCase(fetchUserDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(userLogout.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userLogout.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(userLogout.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export default userSlice.reducer;
