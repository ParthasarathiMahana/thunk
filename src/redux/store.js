import { configureStore } from "@reduxjs/toolkit";
import {userReducer} from '../redux/reducer'
import { thunk } from "redux-thunk";


export const myStore = configureStore({
    reducer:{
        userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})
