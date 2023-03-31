import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userId: null,
    login: null,
    email: null,
    password: null,
    stateChange: null,
  },
  reducer: {
    updateUserProfile: (state, { payload }) => ({
      ...state,
      userId: payload,
    }),
    authStateChange: (state, { payload }) => ({
      ...state,
      stateChange: payload,
    }),
  },
});
