import type { Metadata } from "next";

import { Category, Product } from "@/utils/interfaces";
import ProductsWrapper from "@/components/ecommerce/ProductsWrapper";
import { getData } from "@/utils/services";

export const metadata: Metadata = {
  title: "Productos | Delakalle Skateshop 🛹",
  description: "Delakalle Skateshop 🛹",
};

export const dynamic = "force-dynamic";

const Categories = async ({ params }: { params: {slug: string} }) => {
  const categories: Category[] = await getData("categories");
  const category = categories.filter((category: Category) => category.slug === params.slug )[0];
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
