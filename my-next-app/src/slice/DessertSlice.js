import { createSlice } from "@reduxjs/toolkit";

export const DessertSlice = createSlice({
    name: 'dessert',
    initialState: {
        basket: 0,
        isInBasket: false,
        showBasket: false,
        productsInBasket: [],
    },
    reducers: {
        addToBasket: (state) => {
            state.basket += 1
        },
        delateFromBasket: (state) => {
            state.basket -= 1
        },
        notEmptyBasket: (state) => {
            state.isInBasket = true
        },
        showStateBasket: (state) => {
            state.showBasket = !state.showBasket
        },
        addProductsToBasket: (state, action) => {
            state.productsInBasket.push(action.payload)
        }
    }
})

export const selectDessert = (state) => state.basketNumber.basket

export const selectIsAnyInBasket = (state) => state.basketNumber.isInBasket

export const selectShowStateBasket = (state) => state.basketNumber.showBasket

export const { addToBasket, delateFromBasket, notEmptyBasket, showStateBasket } = DessertSlice.actions

export default DessertSlice.reducer