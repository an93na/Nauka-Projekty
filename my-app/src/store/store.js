import { configureStore } from "@reduxjs/toolkit";
import zad1Reducer from '../slice/Zad1slice'

export const store = configureStore({
    reducer: {
        zad1: zad1Reducer
    }
})