import type { Metadata } from "next";

import { Product } from "@/utils/interfaces";
import ProductsWrapper from "@/components/ecommerce/ProductsWrapper";
import { getData } from "@/utils/services";
import { getCategoryBySlug } from "@/models/category";

export const metadata: Metadata = {
  title: "Productos | Delakalle Skateshop 🛹",
  description: "Delakalle Skateshop 🛹",
};

export const revalidate = 0;

const Categories = async ({ params }: { params: {slug: string} }) => {
  const category = await getCategoryBySlug(params.slug);
  /* REFACTOR THIS */
  const products = await getData(`categories/${category.slug}`);
  const productsByCategory = products.filter((product: Product) => product.category_id === category.id);

  return (
    <ProductsWrapper
      title={category.title}
      products={productsByCategory}
    />
  );
};

export default Categories;
