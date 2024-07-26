import Image from "next/image";
import Link from "next/link";

import { Product, ProductsWrapperProps } from "@/utils/interfaces";
import { PriceProductWrapper } from "./Price";
import Divider from "./Divider";


const ProductsWrapper = ({ title, products, showed_products, button }: ProductsWrapperProps) => {
  const isArray = Array.isArray(products);
  const formatted_products = showed_products && isArray ? products.slice(0, showed_products) : products;

  return (
    <section className="container mx-auto py-12 flex flex-col items-center justify-center animate-fade-in">
      <div className="flex flex-col items-center">
        <h2 className="uppercase text-black text-2xl">{title}</h2>
        <Divider />
      </div>
      <div className="flex flex-wrap gap-10 justify-around  animation-fade-in">
        {
          isArray && formatted_products && formatted_products.map((product: Product) => (
            <Link href={`/products/${product.slug}`} key={product.id} className="cursor-pointer w-[300px] h-[500px] flex flex-col justify-center items-center overflow-hidden relative group transition duration-500 hover:scale-110">
              <Image src={product.img} alt={product.title} className="object-contain" width={400} height={500}/>
              <h2 className="text-stone-800 mt-6 relative">
                <span className="capitalize">{product.title}</span>
                <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-zinc-600 group-hover:w-1/2 group-hover:transition-all"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-zinc-600 group-hover:w-1/2 group-hover:transition-all"></span>
              </h2>
              <PriceProductWrapper product={product} />
            </Link>
          ))
        }
      </div>
      { button && <Link href={button.url} className="button">{button.title}</Link>}
    </section>
  );
};

export default ProductsWrapper;
