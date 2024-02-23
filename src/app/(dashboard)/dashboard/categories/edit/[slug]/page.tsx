import CategoryForm from "@/components/dashboard/CategoryForm";
import { getCategoryBySlug } from "@/models/category";

const EditCategoryPage = async ({ params }: { params: {slug: string} }) => {
  const category = await getCategoryBySlug(params.slug);

  return (
    <div className="p-4 h-[800px] overflow-scroll flex flex-col justify-center items-center">
      <h2 className="font-semibold text-xl text-slate-700">{`Editar categoría: ${category.title}`}</h2>
      <CategoryForm category={category}/>
    </div>
  );
};

export default EditCategoryPage;
