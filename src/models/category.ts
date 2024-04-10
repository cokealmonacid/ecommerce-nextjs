import { prisma } from "@/utils/connect";

export const getAllCategories = async () => await prisma.category.findMany();

export const getCategoryBySlug = async (slug: string) => {
  const categories = await prisma.category.findMany();
  const category = categories.filter((category) => category.slug === slug )[0];

  return category;
};

export const getAllCategoriesWithProducts = async () => await prisma.category.findMany({
  where: {
    products: {
      some: {
        active: true
      }
    }
  }
});
