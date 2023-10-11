'use client'

import CartEmpty from '@/components/ecommerce/CartEmpty'
import CartWrapper from '@/components/ecommerce/CartWrapper'
import { useCartStore } from '@/utils/store'

const Cart = () => {
  const { products } = useCartStore()

  if (products.length) {
    return (
      <CartWrapper products={products}/>
    ) 
  }

  return (
    <CartEmpty />
  )
}

export default Cart