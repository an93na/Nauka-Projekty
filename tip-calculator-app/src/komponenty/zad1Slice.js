import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    one: '',
    two: '',
    three: '',
    four: '',
    form: false,
    submit: false
}

export const zad1Slice = createSlice({
    name: 'zadanie1',
    initialState: initialState,
    reducers: {
        wartoscOne: (state, action) => { state.one = action.payload },
        wartoscTwo: (state, action) => { state.two = action.payload },
        wartoscThree: (state, action) => { state.three = action.payload },
        wartoscFour: (state, action) => { state.four = action.payload },
        stateForm: (state, action) => { state.form = action.payload },
        submittted: (state, action) => { state.submit = action.payload },
        resetState: () => { return initialState },
    }
})
export const { wartoscOne, wartoscTwo, wartoscThree, wartoscFour, stateForm, submittted, resetState } = zad1Slice.actions
export default zad1Slice.reducer