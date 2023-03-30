import { confogureStore, combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authReducer";

rootReducer = combineReducers({ [authSlice.name]: authSlice.reducer });

export const store = configureStore({ reducer: rootReducer });
