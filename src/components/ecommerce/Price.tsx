import { priceFormatter } from "@/utils/helpers";
import { ProductProps } from "@/utils/interfaces";


export const PriceProductDetail = ({ product }: ProductProps) => {
  const { price, sale } = product;
  if (!sale) {
    return <h3 className="text-stone-500 text-3xl">{priceFormatter(price)}</h3>;
  }

  return (
    <>
      <h2 className="text-stone-400 text-xl line-through">{priceFormatter(price)}</h2>
      <h3 className="text-stone-500 text-3xl">{priceFormatter(sale)}</h3>
    </>
  );
};

export const PriceProductWrapper = ({ product }: ProductProps) => {
  const { price, sale } = product;
  if (!sale) {
    return <p className="text-stone-400 mt-2">{priceFormatter(product.price)}</p>;
  }

  return (
    <>
      <p className="text-stone-300 text-md line-through">{priceFormatter(price)}</p>
      <p className="text-stone-400 mt-2">{priceFormatter(sale)}</p>
    </>
  );
};
