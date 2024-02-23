import CategoryForm from "@/components/dashboard/CategoryForm";
import { prisma } from "@/utils/connect";
import { Category } from "@/utils/interfaces";

const EditCategoryPage = async ({ params }: { params: {slug: string} }) => {
  const categories: Category[] = await prisma.category.findMany();
  const category = categories.filter((category: Category) => category.slug === params.slug )[0];

  return (
    <div className="p-4 h-[800px] overflow-scroll flex flex-col justify-center items-center">
      <h2 className="font-semibold text-xl text-slate-700">{`Editar categoría: ${category.title}`}</h2>
      <CategoryForm category={category}/>
    </div>
  );
};

export default EditCategoryPage;
