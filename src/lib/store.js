import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "@/lib/slices/cartSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartSlice,
    },
  });
};
