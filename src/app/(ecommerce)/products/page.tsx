import type { Metadata } from "next";

import ProductsWrapper from "@/components/ecommerce/ProductsWrapper";
import { Product } from "@/utils/interfaces";
import { prisma } from "@/utils/connect";

export const metadata: Metadata = {
  title: "Productos | Delakalle Skateshop 🛹",
  description: "Delakalle Skateshop 🛹",
};

const Products = async () => {
  const products: Product[] = await prisma.product.findMany();

  return (
    <ProductsWrapper
      title={"ultimos productos"}
      products={products}
    />
  );
};

export default Products;
