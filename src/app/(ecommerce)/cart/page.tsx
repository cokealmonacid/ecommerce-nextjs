"use client";

import CartEmpty from "@/components/ecommerce/CartEmpty";
import CartWrapper from "@/components/ecommerce/CartWrapper";
import useFromStore from "@/utils/customHooks";
import { useCartStore } from "@/utils/store";

const Cart = () => {
  const products = useFromStore(useCartStore, state => state.products) ?? [];

  if (products.length) {
    return (
      <CartWrapper products={products}/>
    ); 
  }

  return (
    <CartEmpty />
  );
};

export default Cart;
