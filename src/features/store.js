import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Auth/AuthSlice"
import ProductsReducer from "./Products/ProductsSlice"
import CardsReducer from "./Card/CardSlice"

const store = configureStore({
    reducer : {
Auth : AuthReducer,
Products : ProductsReducer,
Card : CardsReducer,
    }
})


export default store