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
    let products = [...productsInCart, item];
    const productFiltered = productsInCart.filter((product) => product.id === item.id);
    const totalPrice = item.sale ? get().totalPrice + item.sale : get().totalPrice + item.price;
    const totalItems = get().totalItems + 1;

    if (productFiltered.length) {
      products = productsInCart.map((product) => {
        if (product.id === item.id) {
          product.quantity += 1;
        }

        return product;
      });
    }

    set(() => ({
      products: [...products],
      totalItems,
      totalPrice
    }));
  },
  removeFromCart(item) {
    const productsInCart = get().products;
    let products = productsInCart.filter((product) => product.id === item.id);
    let totalPrice = item.sale ? get().totalPrice - item.sale : get().totalPrice - item.price;
    const totalItems = get().totalItems - 1;

    if (products.length) {
      products = productsInCart.map((product) => {
        if (product.id === item.id) {
          product.quantity -= 1;
        }

        return product;
      });
    }

    if (!products.length) {
      totalPrice = 0;
    }

    set(() => ({
      products: [...products],
      totalItems,
      totalPrice
    }));
  },
  deleteFromCart(item) {
    const productsInCart = get().products;
    const products = productsInCart.filter((product) => product.id !== item.id);
    let totalPrice = item.sale ? get().totalPrice - item.sale : get().totalPrice - item.price;

    if (!products.length) {
      totalPrice = 0;
    }

    set((state) => ({
      products: [...products],
      totalItems: state.totalItems - item.quantity,
      totalPrice
    }));
  }
}), { name: "cart" }));


