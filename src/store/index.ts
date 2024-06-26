import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categories/categoriesSlice";
import productsSlice from "./products/productsSlice";
import cartSlice from "./cart/cartSlice";


export const store = configureStore({
    reducer:{
        categoriesSlice,
        productsSlice,
        cartSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch