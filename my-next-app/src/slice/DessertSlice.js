import { createSlice } from "@reduxjs/toolkit";

export const DessertSlice = createSlice({
    initialState: {
        basket: 0,
    },
    name: 'dessert',
    reducers: {
        addToBasket: (state, action) => {
            state.basket = state.basket + action.payload
        }
    }
})

export const selectDessert = (state) => state.basketNumber.basket

export default DessertSlice.reducer