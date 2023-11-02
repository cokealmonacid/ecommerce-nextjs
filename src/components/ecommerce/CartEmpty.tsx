import Link from "next/link";

import Divider from "./Divider";

const CartEmpty = () => {
  return (
    <section className="container mx-auto py-12 flex flex-col items-center justify-center px-12">
      <div className="flex flex-col items-center">
        <h2 className="uppercase text-black text-2xl">Carro de compras</h2>
        <Divider />
      </div>
      <div className="h-[400px] my-20 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-stone-900">No hay productos en el carro</h2>
        <p className="text-lg font-light text-stone-500 mb-10">Puedes revisar nuestro productos en el catálogo</p>
        <Link href="/products" className="button">Ver productos</Link>
      </div>
    </section>
  );
};

export default CartEmpty;
