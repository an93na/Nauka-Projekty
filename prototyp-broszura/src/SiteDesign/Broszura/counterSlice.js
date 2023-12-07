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
  },
});

export const selectCounterValue = (state) => state.punkty.value;
export const { addPoints } = counterSlice.actions;
export default counterSlice.reducer;
