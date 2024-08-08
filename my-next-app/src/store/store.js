import { configureStore } from "@reduxjs/toolkit";
import basketNumberReducer from '../slice/DessertSlice'

export const store = configureStore({
    reducer: {
        basketNumber: basketNumberReducer
    }
})