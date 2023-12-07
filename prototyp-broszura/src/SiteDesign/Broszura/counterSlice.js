import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "punkty",
  initialState: {
    value: 0,
  },
  reducers: {},
});

export const selectCounterValue = (state) => state.punkty.value
export default counterSlice.reducer