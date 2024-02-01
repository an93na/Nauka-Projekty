import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   'submit': false,
   'corect': false,
   'form': false
}

export const zad2Slice = createSlice(
    {
        name: 'zadanie2',
        initialState: initialState,
        reducers: {
        }
    }
)

export default zad2Slice.reducer