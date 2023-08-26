import Image from 'next/image'
import Link from 'next/link'

import { Product, ProductsWrapperProps } from '@/utils/interfaces'
import Divider from './Divider'


const ProductsWrapper = ({ title, products, showed_products, button }: ProductsWrapperProps) => {
  const formatted_products = showed_products ? products.slice(products.length - showed_products, products.length) : products

  return (
    <section className="container mx-auto py-12 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <h2 className="uppercase text-black text-2xl">{title}</h2>
        <Divider />
      </div>
      <div className="flex flex-wrap gap-10 justify-around">
        {
          formatted_products && formatted_products.map((product: Product) => (
            <Link href={`/products/${product.slug}`} key={product.id} className="cursor-pointer w-[300px] h-[500px] flex flex-col justify-center items-center overflow-hidden">
              <Image src={product.img} alt={product.title} className="object-contain" width={400} height={500}/>
              <h2 className="text-stone-800 mt-6">{product.title}</h2>
              <p className="text-stone-400">${`${product.price}`}</p>
            </Link>
          ))
        }
      </div>
      { button && <Link href={button.url} className="bg-black text-white py-4 px-12 my-4">{button.title}</Link>}
    </section>
  )
}

export default ProductsWrapper