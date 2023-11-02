import CategoryForm from "@/components/dashboard/CategoryForm";

const AddCategoryPage = () => {
  return (
    <div className="p-4 h-[800px] overflow-scroll flex flex-col justify-center items-center">
      <h2 className="font-semibold text-xl text-slate-700">Agregar una categoría</h2>
      <CategoryForm />
    </div>
  );
};

export default AddCategoryPage;
