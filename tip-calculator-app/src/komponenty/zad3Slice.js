import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    oneZd: '',
    twoZd: '',
    threeZd: '',
    fourZd: '',
    form: false,
    submit: false,
}

export const zad3Slice = createSlice({
    name: 'zadanie3',
    initialState: initialState,
    reducers: {
        one: (state, action) => {state.oneZd = action.payload},
        two: (state, action) => {state.twoZd = action.payload},
        three: (state, action) => {state.threeZd = action.payload},
        four: (state, action) => {state.fourZd = action.payload},
        formState: (state) => {state.form = true},
        submitAction: (state) => {state.submit = true},
        resetState: () => {return initialState}
    }
})

export const {one, two, three, four, formState, submitAction, resetState} = zad3Slice.actions
export default zad3Slice.reducer