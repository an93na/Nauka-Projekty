import { createSlice } from "@reduxjs/toolkit";

export const DessertSlice = createSlice({
    initialState: {
        basket: 0,
    },
    name: 'dessert',
    reducers: {
        addToBasket: (state) => {
            state.basket = state.basket + 1
        },
        delateFromBasket: (state) => {
            state.basket = state.basket - 1
        }
    }
})

export const selectDessert = (state) => state.basketNumber.basket

export default DessertSlice.reducer