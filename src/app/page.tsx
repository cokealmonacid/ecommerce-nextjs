import ProductsWrapper from '@/components/ProductsWrapper'
import Slider from '@/components/Slider'
import { products } from '@/utils/data'
import { SliderImages } from '@/utils/interfaces'
import { getData } from '@/utils/services'

export default async function Home() {
  const imagesSlider: SliderImages[] = await getData('slider')

  return (
    <main>
      <Slider imagesSlider={imagesSlider}/>
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
