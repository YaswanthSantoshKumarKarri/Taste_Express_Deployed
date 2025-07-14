import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartMenuHandles";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
