import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartProducts.find(
        (product) => product.id === action.payload.id
      );
      if (item) {
        item.quantity += 1;
      } else {
        state.cartProducts.push({ ...action.payload, quantity: 1 });
      }
    },
    deleteFromCart: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (product) => product.id !== action.payload.id
      );
    },
    increaseQuantity: (state, action) => {
      const item = state.cartProducts.find(
        (product) => product.id === action.payload.id
      );
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.cartProducts.find(
        (product) => product.id === action.payload.id
      );
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.cartProducts = state.cartProducts.filter(
            (product) => product.id !== action.payload.id
          );
        }
      }
    },
  },
});

export const { addToCart, deleteFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export const selectCartProducts = (state) => state.cart.cartProducts;

export const selectTotalQuantity = (state) =>
  state.cart.cartProducts.reduce(
    (total, product) => total + product.quantity,
    0
  );

export const selectTotalAmount = (state) =>
  state.cart.cartProducts.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

export default cartSlice.reducer;
