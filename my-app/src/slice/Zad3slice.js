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
    reducers: {
        actionOne: (state, action) => { state.one = action.payload },
        actionTwo: (state, action) => { state.two = action.payload },
        actionThree: (state, action) => { state.three = action.payload },
        actionFour: (state, action) => { state.four = action.payload },
        actionSubmit: (state) => { state.submit = true },
        actionRight: (state) => { state.right = true },
        resetState: () => { return initialState }
    }
})

export const { actionOne, actionTwo, actionThree, actionFour, actionRight, actionSubmit, resetState } = Zad3Slice.actions
export default Zad3Slice.reducer