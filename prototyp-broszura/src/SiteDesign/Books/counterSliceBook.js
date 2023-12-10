import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "book",
  initialState: {
    value: 0,
  },
  reducers: {},
});
export default bookSlice.reducer;
