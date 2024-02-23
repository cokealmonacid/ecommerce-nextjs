import ProductForm from "@/components/dashboard/ProductForm";
import { prisma } from "@/utils/connect";
import { Category, Product } from "@/utils/interfaces";

const EditProductPage = async ({ params }: { params: {slug: string} }) => {
  const categories: Category[] = await prisma.category.findMany();
  const products: Product[] = await prisma.product.findMany();
  const product = products.filter((product: Product) => product.slug === params.slug )[0];
  
  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <h2 className="font-semibold text-stale-600 text-xl text-slate-700">{`Editar producto: ${product.title}`}</h2>
      <ProductForm categories={categories} product={product} />
    </div>
  );
};

export default EditProductPage;
