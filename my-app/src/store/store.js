import { configureStore } from "@reduxjs/toolkit";
import zad1Reducer from '../slice/Zad1slice'
import zad2Reducer from "../slice/Zad2slice"
import zad3Reducer from "../slice/Zad3slice"

export const store = configureStore({
    reducer: {
        zad1: zad1Reducer,
        zad2: zad2Reducer,
        zad3: zad3Reducer
    }
})