import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "punkty",
  initialState: {
    value: 0,
  },
  reducers: {
    addPoints: (state, action) => {
      state.value = state.value + action.payload;
    },
    resetState: (state) => {
      state.value = 0
    }
  },
});

export const selectCounterValue = (state) => state.punkty.value;
export const { addPoints, resetState } = counterSlice.actions;
export default counterSlice.reducer;
