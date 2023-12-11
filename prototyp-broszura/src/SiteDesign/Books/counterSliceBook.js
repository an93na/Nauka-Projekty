import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "book",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.value = state.value + action.payload;
    },
  },
});
export const {increment} = bookSlice.actions
export default bookSlice.reducer;
