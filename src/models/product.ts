import { cache } from "react";

import { prisma } from "@/utils/connect";
import { Product } from "@/utils/interfaces";

export const getAllProducts = cache(async () => await prisma.product.findMany());

export const getProductBySlug = cache(async (slug: string) => {
  const products = await prisma.product.findMany({ where: { slug }});
  const productSelected = products.filter((product) => product.slug === slug )[0];

  return productSelected;
});

export const getRelatedProducts = cache(async (productSelected: Product) => {
  const relatedProducts = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
    where: { 
      ...(productSelected.category_id && { category_id: productSelected.category_id }),
      id: { not: String(productSelected.id) },
      active: true,
     }
  });

  return relatedProducts;
});

export const getLastProducts = cache(async () => {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "asc" },
    where: { active: true }
  });  

  return products;
});

