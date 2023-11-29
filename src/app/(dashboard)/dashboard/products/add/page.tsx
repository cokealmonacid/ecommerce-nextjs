import ProductForm from "@/components/dashboard/ProductForm";
import { Category } from "@/utils/interfaces";
import { getData } from "@/utils/services";

const Add = async () => {
  const categories: Category[] = await getData("categories");
  
  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <h2 className="font-semibold text-stale-600 text-xl text-slate-700">Agregar un producto</h2>
      <ProductForm categories={categories} />
    </div>
  );
};

export default Add;
