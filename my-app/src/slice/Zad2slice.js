import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    one: '',
    two: '',
    three: '',
    four: '',
    five: '',
    submit: false,
    submitted: false
}

export const zad2Slice = createSlice({
    name: 'zadanie2',
    initialState: initialState,
    reducers: {
        one: (state, action) => { state.one = action.payload },
        two: (state, action) => { state.two = action.payload },
        three: (state, action) => { state.three = action.payload },
        four: (state, action) => { state.four = action.payload },
        five: (state, action) => { state.five = action.payload },
        submit: (state) => { state.submit = true },
        actionSubmitted: (state) => { state.submitted = true }
    }
})

export const { one, two, three, four, five, submit, actionSubmitted } = zad2Slice.actions
export default zad2Slice.reducer