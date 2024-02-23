import ProductsWrapper from "@/components/ecommerce/ProductsWrapper";
import Slider from "@/components/ecommerce/Slider";
import { prisma } from "@/utils/connect";
import { Product, SliderImages } from "@/utils/interfaces";

export default async function Home() {
  const imagesSlider: SliderImages[] = await prisma.imageSlider.findMany();
  const products: Product[] = await prisma.product.findMany({
    orderBy: { createdAt: "asc" },
    where: { active: true }
  });

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
