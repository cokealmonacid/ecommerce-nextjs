// @ts-nocheck
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Actions, Cart } from "./interfaces";

const INITIAL_STATE = {
  products: [],
  totalItems: 0,
  totalPrice: 0
};

export const useCartStore = create(persist<Cart & Actions>((set, get) => ({
  ...INITIAL_STATE,
  addToCart(item) {
    const productsInCart = get().products;
    const productFiltered = productsInCart.filter((product) => product.id === item.id);

    if (productFiltered.length) {
      const products = productsInCart.map((product) => {
        if (product.id === item.id) {
          product.quantity += 1;
        }

        return product;
      });
      set((state) => ({
        products: [...products],
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + item.price
      }));
    } else {
      set((state) => ({
        products: [...state.products, item],
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + item.price
      }));
    }
  },
  removeFromCart(item) {
    const productsInCart = get().products;
    const productsFiltered = productsInCart.filter((product) => product.id === item.id);

    if (productsFiltered.length) {
      const products = productsInCart.map((product) => {
        if (product.id === item.id) {
          product.quantity -= 1;
        }

        return product;
      });

      set((state) => ({
        products: [...products],
        totalItems: state.totalItems - 1,
        totalPrice: state.totalPrice - item.price
      }));
    } else {
      set((state) => ({
        products: productsFiltered,
        totalItems: state.totalItems - 1,
        totalPrice: state.totalPrice - item.price
      }));
    }
  },
  deleteFromCart(item) {
    const productsInCart = get().products;
    const productsFiltered = productsInCart.filter((product) => product.id !== item.id);

    set((state) => ({
      products: [...productsFiltered],
      totalItems: state.totalItems - item.quantity,
      totalPrice: state.totalPrice - item.price
    }));
  }
}), { name: "cart" }));


