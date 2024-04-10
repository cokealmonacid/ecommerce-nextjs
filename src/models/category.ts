import { cache } from "react";

import { prisma } from "@/utils/connect";

export const getAllCategories = cache(async () => await prisma.category.findMany());

export const getCategoryBySlug = cache(async (slug: string) => {
  const categories = await prisma.category.findMany();
  const category = categories.filter((category) => category.slug === slug )[0];

  return category;
});
