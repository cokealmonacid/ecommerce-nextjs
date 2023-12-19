import Image from "next/image";
import type { Metadata } from "next";

import { Product } from "@/utils/interfaces";
import { getData } from "@/utils/services";
import { priceFormatter } from "@/utils/helpers";
import ProductsWrapper from "@/components/ecommerce/ProductsWrapper";
import AddToCartButton from "@/components/ecommerce/AddToCartButton";
import Divider from "@/components/ecommerce/Divider";

export const metadata: Metadata = {
  title: "Productos | Delakalle Skateshop 🛹",
  description: "Delakalle Skateshop 🛹",
};

const ProductDetail = async ({ params }: { params: {slug: string} }) => {
  const { slug } = params;
  const products = await getData(`products/${slug}`);
  const productSelected = products.filter((product: Product) => product.slug === params.slug )[0];
  const relatedProducts = await getData(`categories/related?cid=${productSelected.category_id}`);
  const filteredRelatedProducts = relatedProducts.filter((product: Product) => product.id !== productSelected.id);

  return (
    <>
      <div className="w-11/12 mx-auto py-20">
        <div className="flex flex-wrap gap-10">
          <Image className="flex-1" src={productSelected.img} alt={productSelected.title} width={300} height={300} />
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
        relatedProducts.length && (
          <ProductsWrapper
            title={"productos relacionados"}
            products={filteredRelatedProducts}
            showed_products={4}
          />
        )
      }
    </>
  );
};

export default ProductDetail;
