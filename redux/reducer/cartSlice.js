

import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data/products";

const initialState = {
  cartItems: [],
  items: products,
  isSettingsOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { id } = action.payload;
      const itemIndex = state.cartItems.findIndex(item => item.id === id);

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity++;
      } else {
        const item = state.items.find(item => item.id === id);
        const newItem = { ...item, quantity: 1 };
        state.cartItems.push(newItem);
      }
    },
    addToCartQuick(state, action) {
      const { id, quantity } = action.payload;
      if (quantity <= 0) return;

      const itemIndex = state.cartItems.findIndex(item => item.id === id);

      if (itemIndex >= 0) {
        // Item already in cart → increase quantity
        state.cartItems[itemIndex].quantity += quantity;
      } else {
        // New item → add to cart with specified quantity
        const item = state.items.find(item => item.id === id);
        if (item) {
          const newItem = { ...item, quantity };
          state.cartItems.push(newItem);
        }
      }
    },
    removeFromCart(state, action) {
      const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);

      if (itemIndex >= 0) {
        if (state.cartItems[itemIndex].quantity === 1) {
          state.cartItems.splice(itemIndex, 1);
        } else {
          state.cartItems[itemIndex].quantity--;
        }
      }
    },
    deleteFromCart(state, action) {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
    }
  },
});

export const { addToCart, removeFromCart, deleteFromCart, addToCartQuick } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.cartItems;
export const selectProducts = (state) => state.cart.items;
export const selectCartQuantity = (state) =>
  state.cart.cartItems.reduce((total, item) => total + item.quantity, 0);
export const selectIsSettingsOpen = (state) => state.cart.isSettingsOpen;

export default cartSlice.reducer;
