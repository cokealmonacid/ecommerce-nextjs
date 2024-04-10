import type { Metadata } from "next";

import { Product } from "@/utils/interfaces";
import ProductsWrapper from "@/components/ecommerce/ProductsWrapper";
import { getData } from "@/utils/services";
import { getCategoryBySlug } from "@/models/category";
import { getAllProducts } from "@/models/product";

export const metadata: Metadata = {
  title: "Productos | Delakalle Skateshop 🛹",
  description: "Delakalle Skateshop 🛹",
};

const Categories = async ({ params }: { params: {slug: string} }) => {
  const category = await getCategoryBySlug(params.slug);
  /* REFACTOR THIS */
  const products = await getAllProducts();
  const productsByCategory = products.filter((product: Product) => product.category_id === category.id);

  return (
    <ProductsWrapper
      title={category.title}
      products={productsByCategory}
    />
  );
};

export default Categories;
