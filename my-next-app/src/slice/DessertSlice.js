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
        notEmptyBasket: (state) => {
            state.isInBasket = true
        },
        showStateBasket: (state) => {
            state.showBasket = !state.showBasket
        },
        addProductsToBasket: (state, action) => {
            const product = action.payload;
            const existingProduct = state.productsInBasket.find(p => p.id === product.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.productsInBasket.push({ ...product, quantity: 1 });
            }
            state.basket = state.productsInBasket.length;
        },
        removeProduct: (state, action) => {
            const idToDelete = action.payload;
            const productToDelete = state.productsInBasket.find(p => p.id === idToDelete);
            if (productToDelete.quantity > 1) {
                productToDelete.quantity -= 1;
            } else {
                state.productsInBasket = state.productsInBasket.filter((p) => p.id !== idToDelete);
            }
            state.basket = state.productsInBasket.length
            state.isInBasket = state.productsInBasket.length > 0;
        },
    }
})

export const selectDessert = (state) => state.basketNumber.basket

export const selectIsAnyInBasket = (state) => state.basketNumber.isInBasket

export const selectShowStateBasket = (state) => state.basketNumber.showBasket

export const selectProductsInBasket = (state) => state.basketNumber.productsInBasket

export const { addToBasket, delateFromBasket, notEmptyBasket, showStateBasket, addProductsToBasket, deleteProductFromBasket, removeProduct } = DessertSlice.actions

export default DessertSlice.reducer