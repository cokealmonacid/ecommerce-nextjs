import ProductForm from "@/components/dashboard/ProductForm";
import { getAllCategories } from "@/models/category";
import { getProductBySlug } from "@/models/product";

const EditProductPage = async ({ params }: { params: {slug: string} }) => {
  const categories = await getAllCategories();
  const product = await getProductBySlug(params.slug);
  
  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <h2 className="font-semibold text-stale-600 text-xl text-slate-700">{`Editar producto: ${product.title}`}</h2>
      <ProductForm categories={categories} product={product} />
    </div>
  );
};

export default EditProductPage;
