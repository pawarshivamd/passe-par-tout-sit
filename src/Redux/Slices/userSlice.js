import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    isLoading: false,
  },
  reducers: {},
  // extraReducers : (builder) =>{
  //     builder.addCase()
  // }
});

export default userSlice.reducer;
