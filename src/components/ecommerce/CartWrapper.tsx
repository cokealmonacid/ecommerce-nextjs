import Image from "next/image";
import { toast } from "react-toastify";

import { CartItem, CartWrapperProps } from "@/utils/interfaces";
import { encodeMessageToWsp, priceFormatter } from "@/utils/helpers";
import { useCartStore } from "@/utils/store";
import CounterCart from "./CounterCart";
import Divider from "./Divider";
import { Remove } from "@/utils/icons";


const CartWrapper = ({ products }: CartWrapperProps) => {
  const { deleteFromCart, totalPrice } = useCartStore();

  const handleDeleteFromCartClick = (product: CartItem) => {
    deleteFromCart(product);
    toast.warning("Producto removido del carro");
  };

  const handleClickOnConfirmation = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const message = encodeMessageToWsp(products, totalPrice);
    window.location.href=`https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="py-12 lg:w-3/4 lg:mx-auto">
      <div className="flex flex-col items-center">
        <h2 className="uppercase text-black text-2xl">Carro de compras</h2>
        <Divider />
      </div>
      <main className="mx-4 md:mx-8 border-b-2 border-black">
        <div className="hidden justify-between items-center md:flex mb-5">
          <h2 className="text-lg font-bold">Producto</h2>
          <h2 className="text-lg font-bold">Total</h2>
        </div>
        <div>
        {
            products.map((product: CartItem) => (
              <div className="flex flex-col items-center justify-center mb-10 md:flex-row md:justify-between" key={product.id}>
                <div className="flex items-center">
                  <Image src={product.img} alt={product.title} className="object-contain" width={200} height={300}/>
                  <div className="hidden md:block ml-4">
                    <h2 className="font-semibold uppercase text-xl">{product.title}</h2>
                    <h3 className="font-semibold uppercase text-xl text-stone-500">{priceFormatter(product.price)}</h3>
                    <div className="flex gap-5">
                      <CounterCart product={product} />
                      <button type="button" onClick={() => handleDeleteFromCartClick(product)} className="ml-2 cursor-pointer"><Remove /></button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center my-5 md:my-0 md:hidden">
                  <h2 className="font-semibold uppercase text-xl">{product.title}</h2>
                  <h3>{product.quantity} x ${product.price * product.quantity}</h3>
                  <CounterCart product={product} />
                  <div onClick={() => handleDeleteFromCartClick(product)} className="cursor-pointer md:hidden my-4"><Remove /></div>
                </div>
                <h3 className="hidden md:block">{product.quantity} x {priceFormatter(product.price * product.quantity)}</h3>
              </div>
            )
          )
        }
        </div>
      </main>
      <div className="m-4 py-10 md:mx-8">
        <div className="flex flex-1 justify-between">
          <h2 className="text-2xl text-black font-bold">TOTAL:</h2>
          <h2 className="text-2xl text-black font-bold">{priceFormatter(totalPrice)}</h2>
        </div>
        <div className="w-full flex justify-center md:justify-end">
          <button className="button w-full md:w-[250px]" onClick={(e) => handleClickOnConfirmation(e)}>Realizar pedido</button>
        </div>
      </div>
    </section>
  );
};

export default CartWrapper;
