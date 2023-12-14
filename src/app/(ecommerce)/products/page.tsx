import type { Metadata } from "next";

import ProductsWrapper from "@/components/ecommerce/ProductsWrapper";
import { Product } from "@/utils/interfaces";
import { getData } from "@/utils/services";

export const metadata: Metadata = {
  title: "Productos | Delakalle Skateshop 🛹",
  description: "Delakalle Skateshop 🛹",
};

const Products = async () => {
  const products: Product[] = await getData("products");

  return (
    <ProductsWrapper
      title={"ultimos productos"}
      products={products}
    />
  );
};

export default Products;
