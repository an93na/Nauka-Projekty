import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    one: '',
    two: '',
    three: '',
    four: '',
    submit: false,
    right: false
}

export const Zad3Slice = createSlice({
    name: 'zadanie3',
    initialState: initialState,
    reducers: {}
})

export default Zad3Slice.reducer