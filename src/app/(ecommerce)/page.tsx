import ProductsWrapper from "@/components/ecommerce/ProductsWrapper";
import Slider from "@/components/ecommerce/Slider";
import { getAllSliders } from "@/models/imageSlider";
import { getLastProducts } from "@/models/product";

export const revalidate = 0;

export default async function Home() {
  const imagesSlider = await getAllSliders();
  const products = await getLastProducts();

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
