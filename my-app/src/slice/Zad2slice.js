import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    submit: false,
    submitted: false,
    nextTask: false,
    showNextTask: false,
}

export const zad2Slice = createSlice({
    name: 'zadanie2',
    initialState: initialState,
    reducers: {
        submit: (state) => { state.submit = true },
        actionSubmitted: (state) => { state.submitted = true },
        nextTask: (state) => { state.nextTask = true },
        showNextTask: (state) => { state.showNextTask = true },
        resetState: () => { return initialState }
    }
})

export const { submit, actionSubmitted, resetState, nextTask, showNextTask } = zad2Slice.actions
export default zad2Slice.reducer