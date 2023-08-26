import ProductsWrapper from '@/components/ProductsWrapper';
import Slider from '@/components/Slider';
import { products } from '@/utils/data';

export default function Home() {
  return (
    <main>
      <Slider />
      <ProductsWrapper
        title={"ultimos productos"}
        button={{ title: 'Ver más productos', url: '/products' }}
        products={products}
        showed_products={4}
        show_button
      />
    </main>
  )
}
