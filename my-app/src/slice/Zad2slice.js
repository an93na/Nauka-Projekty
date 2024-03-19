import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    one: '',
    two: '',
    three: '',
    four: '',
    five: '',
    submit: false
}

export const zad2Slice = createSlice({
    name: 'zadanie2',
    initialState: initialState,
    reducers: {}
})

export default zad2Slice.reducer