import Image from "next/image";
import type { Metadata } from "next";

import { priceFormatter } from "@/utils/helpers";
import ProductsWrapper from "@/components/ecommerce/ProductsWrapper";
import AddToCartButton from "@/components/ecommerce/AddToCartButton";
import Divider from "@/components/ecommerce/Divider";
import { getProductBySlug, getRelatedProducts } from "@/models/product";

export const metadata: Metadata = {
  title: "Productos | Delakalle Skateshop 🛹",
  description: "Delakalle Skateshop 🛹",
};

const ProductDetail = async ({ params }: { params: {slug: string} }) => {
  const productSelected = await getProductBySlug(params.slug);
  const relatedProducts = await getRelatedProducts(productSelected);

  return (
    <>
      <div className="w-11/12 mx-auto py-20">
        <div className="flex flex-wrap gap-10">
          <Image className="flex-1 max-h-[700px]" src={productSelected.img} alt={productSelected.title} width={300} height={300} />
          <div className="flex flex-1 flex-col justify-around">
            <div className="flex flex-col justify-center md:justify-start">
              <h1 className="text-stone-400 mb-4">{productSelected.brand}</h1>
              <h2 className="uppercase text-3xl font-weight text-stone-900 mb-8">{productSelected.title}</h2>
              <h3 className="text-stone-500 text-3xl">{priceFormatter(productSelected.price)}</h3>
              <Divider />
              <p className="my-10">{productSelected.description}</p>
            </div>
            <AddToCartButton product={productSelected} />
          </div>
        </div>
      </div>
      {
        relatedProducts.length ? (
          <ProductsWrapper
            title={"productos relacionados"}
            products={relatedProducts}
            showed_products={relatedProducts.length < 4 ? relatedProducts.length : 4}
          />
        ) : null
      }
    </>
  );
};

export default ProductDetail;
