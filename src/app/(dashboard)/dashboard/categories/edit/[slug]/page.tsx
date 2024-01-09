import CategoryForm from "@/components/dashboard/CategoryForm";
import { Category } from "@/utils/interfaces";
import { getData } from "@/utils/services";

const EditCategoryPage = async ({ params }: { params: {slug: string} }) => {
  const categories: Category[] = await getData("categories");
  const category = categories.filter((category: Category) => category.slug === params.slug )[0];

  return (
    <div className="p-4 h-[800px] overflow-scroll flex flex-col justify-center items-center">
      <h2 className="font-semibold text-xl text-slate-700">{`Editar categoría: ${category.title}`}</h2>
      <CategoryForm category={category}/>
    </div>
  );
};

export default EditCategoryPage;
