import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    'submit': false,
    'corect': false,
    'form': false,
    'next': false
}

export const zad2Slice = createSlice(
    {
        name: 'zadanie2',
        initialState: initialState,
        reducers: {
            formAction: (state) => { state.form = true },
            submitAction: (state) => { state.submit = true },
            correctActionTrue: (state) => { state.corect = true },
            correctActionFalse: (state) => { state.corect = false },
            showNextTask: (state) => { state.next = true },
            restetState: () => { return initialState }
        }
    }
)
export const { correctActionTrue, correctActionFalse, formAction, submitAction, showNextTask,restetState } = zad2Slice.actions
export default zad2Slice.reducer