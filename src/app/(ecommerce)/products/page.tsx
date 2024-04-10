import type { Metadata } from "next";

import ProductsWrapper from "@/components/ecommerce/ProductsWrapper";
import { getAllProducts } from "@/models/product";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Productos | Delakalle Skateshop 🛹",
  description: "Delakalle Skateshop 🛹",
};

const Products = async () => {
  const products = await getAllProducts();

  return (
    <ProductsWrapper
      title={"ultimos productos"}
      products={products}
    />
  );
};

export default Products;
