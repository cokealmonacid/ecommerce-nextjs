import ProductForm from "@/components/dashboard/ProductForm";
import { Category, Product } from "@/utils/interfaces";
import { getData } from "@/utils/services";

const EditProductPage = async ({ params }: { params: {slug: string} }) => {
  const categories: Category[] = await getData("categories");
  const products: Product[] = await getData("products");
  const product = products.filter((product: Product) => product.slug === params.slug )[0];
  
  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <h2 className="font-semibold text-stale-600 text-xl text-slate-700">{`Editar producto: ${product.title}`}</h2>
      <ProductForm categories={categories} product={product} />
    </div>
  );
};

export default EditProductPage;
