import { configureStore } from "@reduxjs/toolkit";
import zad1Reducer from '../komponenty/zad1Slice'

export const store = configureStore({
    reducer: {
        zad1: zad1Reducer
    }
})