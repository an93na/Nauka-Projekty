import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    one: '',
    two: '',
    three: '',
    four: '',
    submit: false,
}

export const Zad1Slice = createSlice({
    name: 'zad1',
    initialState: initialState,
    reducers: {
        odpOne: (state, action) => { state.one = action.payload },
        odpTwo: (state, action) => { state.two = action.payload },
        odpThree: (state, action) => { state.three = action.payload },
        odpFour: (state, action) => { state.four = action.payload },
        actionSubmit: (state) => { state.submit = true },
        resetState: () => { return initialState }
    }
})

export const { odpOne, odpTwo, odpThree, odpFour, actionSubmit, resetState } = Zad1Slice.actions
export default Zad1Slice.reducer