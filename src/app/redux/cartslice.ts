"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Interface for Cart Items
interface CartItems {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
  subtotal: number;
}

// Load cart from localStorage or use an empty array as the default
const loadCartFromLocalStorage = (): CartItems[] => {
  if (typeof window !== "undefined") {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  }
  return [];
};

// Save cart to localStorage
const saveCartToLocalStorage = (cart: CartItems[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

// Create Slice
const cartSlice = createSlice({
  name: "cart",
  initialState: loadCartFromLocalStorage(), // Load initial state from localStorage
  reducers: {
    addProduct: (state, action: PayloadAction<CartItems>) => {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
        existingItem.subtotal = existingItem.quantity * existingItem.price;
      } else {
        state.push(action.payload);
      }
      saveCartToLocalStorage(state); // Save updated state to localStorage
    },
    removeState: (state, action: PayloadAction<number>) => {
      const updatedState = state.filter((item) => item.id !== action.payload);
      saveCartToLocalStorage(updatedState); // Save updated state to localStorage
      return updatedState;
    },
    clearCart: () => {
      saveCartToLocalStorage([]); // Clear localStorage
      return [];
    },
  },
});

export const { addProduct, removeState, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
