import { create } from "zustand"
import { persist } from "zustand/middleware"
import { Actions, Cart, CartItem } from "./interfaces"

const INITIAL_STATE = {
  products: [],
  totalItems: 0,
  totalPrice: 0
}

export const useCartStore = create(persist<Cart & Actions>((set, get) => ({
  ...INITIAL_STATE,
  addToCart(item) {
    set((state) => ({
      products: [...state.products, item],
      totalItems: state.totalItems + 1,
      totalPrice: state.totalPrice + item.price
    }))
  },
  removeFromCart(item) {
    const productsInCart = get().products
    const productsFiltered = productsInCart.filter((product) => product.id !== item.id)
    set((state) => ({
      products: productsFiltered,
      totalItems: state.totalItems - 1,
      totalPrice: state.totalPrice - item.price
    }))
  }
}), { name: "cart", skipHydration: true }))