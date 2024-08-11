import { createSlice } from "@reduxjs/toolkit";

export const DessertSlice = createSlice({
    name: 'dessert',
    initialState: {
        basket: 0,
        isInBasket: false,
    },
    reducers: {
        addToBasket: (state) => {
            state.basket += 1
        },
        delateFromBasket: (state) => {
            state.basket -= 1
        },
        notEmptyBasket: (state) =>{
            state.isInBasket = true
        }
    }
})

export const selectDessert = (state) => state.basketNumber.basket

export const selectIsAnyInBasket = (state) => state.basketNumber.isInBasket

export const {addToBasket, delateFromBasket, notEmptyBasket} = DessertSlice.actions

export default DessertSlice.reducer