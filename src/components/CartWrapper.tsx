import Image from 'next/image'
import { toast } from 'react-toastify'

import { CartItem, CartWrapperProps } from '@/utils/interfaces'
import { useCartStore } from '@/utils/store'
import Divider from './Divider'

const CartWrapper = ({ products }: CartWrapperProps) => {
  const { removeFromCart, totalPrice } = useCartStore()

  const handleRemoveFromCartClick = (product: CartItem) => {
    removeFromCart(product)

    toast.warning("Producto removido del carro");
  }

  return (
    <section className="container mx-auto py-12 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <h2 className="uppercase text-black text-2xl">Carro de compras</h2>
        <Divider />
      </div>
      <table className="w-full md:w-3/4 my-10 border-separate border-spacing-y-10 border-b-2 border-black">
        <thead>
          <tr className="text-left">
            <th className="text-2xl">Productos</th>
            <th className="text-2xl">Precio</th>
            <th className="text-2xl">Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((product: CartItem) => (
              <tr key={product.id}>
                <td className="flex items-center gap-10">
                  <Image src={product.img} alt={product.title} className="object-contain" width={200} height={300}/>
                  <h2 className="font-semibold uppercasec text-xl">{product.title}</h2>
                </td>
                <td><h2>${product.price}</h2></td>
                <td><h2>${product.price}</h2></td>
                <td onClick={() => handleRemoveFromCartClick(product)} className="cursor-pointer">X</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div className="flex flex-col w-full md:w-3/4">
        <div className="flex gap-10 self-end">
          <h2 className="text-2xl text-black font-bold">SUBTOTAL:</h2>
          <h2 className="text-2xl text-black font-bold">${totalPrice}</h2>
        </div>
        <button className="bg-black text-white py-4 px-12 my-4 w-[250px] self-end">Realizar pedido</button>
      </div>
    </section>
  )
}

export default CartWrapper