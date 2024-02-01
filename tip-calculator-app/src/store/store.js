import { configureStore } from "@reduxjs/toolkit";
import zad1Reducer from '../komponenty/zad1Slice'
import zad2Reducer from '../komponenty/zad2Slice'

export const store = configureStore({
    reducer: {
        zad1: zad1Reducer,
        zad2: zad2Reducer
    }
})