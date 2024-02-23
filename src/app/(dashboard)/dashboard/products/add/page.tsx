import ProductForm from "@/components/dashboard/ProductForm";
import { getAllCategories } from "@/models/category";

export const dynamic = "force-dynamic";

const Add = async () => {
  const categories = await getAllCategories();
  
  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <h2 className="font-semibold text-stale-600 text-xl text-slate-700">Agregar un producto</h2>
      <ProductForm categories={categories} />
    </div>
  );
};

export default Add;
