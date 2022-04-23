import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movieslice";
 export const store = configureStore({
    reducer:{
        movies:moviesReducer,
    }
})