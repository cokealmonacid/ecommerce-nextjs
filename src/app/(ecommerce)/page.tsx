import ProductsWrapper from "@/components/ecommerce/ProductsWrapper";
import Slider from "@/components/ecommerce/Slider";
import { Product, SliderImages } from "@/utils/interfaces";
import { getData } from "@/utils/services";

export const dynamic = "force-dynamic";

export default async function Home() {
  const imagesSlider: SliderImages[] = await getData("slider");
  const products: Product[] = await getData("products/latest");

  return (
    <main>
      { imagesSlider.length ? <Slider imagesSlider={imagesSlider} /> : null}
      <ProductsWrapper
        title={"ultimos productos"}
        button={{ title: "Ver más productos", url: "/products" }}
        products={products}
        showed_products={4}
        show_button
      />
    </main>
  );
}
