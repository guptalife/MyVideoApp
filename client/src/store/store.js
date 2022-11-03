import { configureStore } from "@reduxjs/toolkit";
import streamReucer from "./streamSlice";
import userReducer from './userSlice';
const store=configureStore({
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
    reducer:{
        stream:streamReucer,
        user:userReducer
    }
})

export default store