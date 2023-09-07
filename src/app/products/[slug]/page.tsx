'use client'
import Image from 'next/image'
import { toast } from 'react-toastify'

import { useCartStore } from '@/utils/store'
import { products } from '@/utils/data'
import { Product } from '@/utils/interfaces'
import Divider from '@/components/Divider'
import ProductsWrapper from '@/components/ProductsWrapper'

/* 
POR AGREGAR:
- Efecto ripple en botón agregar al carro
*/
const ProductDetail = ({ params }: { params: {slug: string} }) => {
  const product = products.filter((product: Product) => product.slug === params.slug )[0]
  const relatedProducts = products.filter((item: Product) =>  item.category_id === product.category_id && item.id !== product.id)
  const { addToCart } = useCartStore()

  const handleAddToCartClick = () => {
    addToCart({
      id: product.id,
      title: product.title,
      img: product.img,
      category_id: product.category_id,
      brand: product.brand,
      price: product.price,
      quantity: 1
    })

    toast.success("El producto ha sido agregado");
  }

  return (
    <>
      <div className="w-2/3 mx-auto py-20">
        <div className="flex flex-wrap gap-10">
          <Image className="flex-1" src={product.img} alt={product.title} width={500} height={500} />
          <div className="flex flex-1 flex-col justify-around">
            <div>
              <h1 className="text-stone-400 mb-4">{product.brand}</h1>
              <h2 className="uppercase text-3xl font-weight text-stone-900 mb-8">{product.title}</h2>
              <h3 className="text-stone-500 text-3xl">${product.price}</h3>
              <Divider />
              <p className="my-10">{product.description}</p>
            </div>
            <div className="w-[300px]">
              <button className="bg-black text-white py-4 px-12 my-4 text-center cursor-pointer" onClick={() => handleAddToCartClick()}>Agregar al carro</button>
            </div>
          </div>
        </div>
      </div>
      {
        relatedProducts.length && (
          <ProductsWrapper
            title={"productos relacionados"}
            products={relatedProducts}
            showed_products={4}
          />
        )
      }
    </>
  )
}

export default ProductDetail