import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./store/users/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
