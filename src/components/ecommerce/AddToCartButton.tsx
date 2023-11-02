"use client";

import { toast } from "react-toastify";

import { AddToCartButtonProps } from "@/utils/interfaces";
import { useCartStore } from "@/utils/store";

const AddToCartButton = ({ product }: AddToCartButtonProps) => {
  const { addToCart } = useCartStore();

  const handleAddToCartClick = () => {
    addToCart({
      id: product.id,
      title: product.title,
      img: product.img,
      category_id: product.category_id,
      brand: product.brand,
      price: product.price,
      quantity: 1
    });

    toast.success("El producto ha sido agregado");
  };

  return (
    <div className="w-[300px] flex justify-center md:justify-start self-center md:self-start">
      <button className="button" onClick={() => handleAddToCartClick()}>Agregar al carro</button>
    </div>
  );
};

export default AddToCartButton;
