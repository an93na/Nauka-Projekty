import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    oneZd: '',
    twoZd: '',
    threeZd: '',
    fourZd: '',
    form: false
}

export const zad3Slice = createSlice({
    name: 'zadanie3',
    initialState: initialState,
    reducers: {
        one: (state, action) => {state.oneZd = action.payload},
        two: (state, action) => {state.twoZd = action.payload},
        three: (state, action) => {state.threeZd = action.payload},
        four: (state, action) => {state.fourZd = action.payload},
        stateForm: (state) => {state.form = true}
    }
})

export const {one, two, three, four, stateForm} = zad3Slice.actions
export default zad3Slice.reducer