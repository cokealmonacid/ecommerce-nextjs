import Image from 'next/image'
import { toast } from 'react-toastify'

import { CartItem, CartWrapperProps } from '@/utils/interfaces'
import { useCartStore } from '@/utils/store'
import CounterCart from './CounterCart'
import Divider from './Divider'


const CartWrapper = ({ products }: CartWrapperProps) => {
  const { deleteFromCart, totalPrice } = useCartStore()

  const handleDeleteFromCartClick = (product: CartItem) => {
    deleteFromCart(product)
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
            <th className="text-2xl pl-10">Productos</th>
            <th className="text-2xl text-center">Precio</th>
            <th className="text-2xl text-center">Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((product: CartItem) => (
              <tr key={product.id}>
                <td className="flex items-center">
                  <Image src={product.img} alt={product.title} className="object-contain" width={200} height={300}/>
                  <div>
                    <h2 className="font-semibold uppercase text-xl">{product.title}</h2>
                    <CounterCart product={product} />
                  </div>
                </td>
                <td className="text-center"><h2>${product.price}</h2></td>
                <td  className="text-center"><h2>{product.quantity} x ${product.price * product.quantity}</h2></td>
                <td onClick={() => handleDeleteFromCartClick(product)} className="cursor-pointer"><Image src="/remove.png" width={25} height={25} alt="Remover producto" /></td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div className="flex flex-col w-full md:w-3/4">
        <div className="flex gap-10 self-end">
          <h2 className="text-2xl text-black font-bold">TOTAL:</h2>
          <h2 className="text-2xl text-black font-bold">${totalPrice}</h2>
        </div>
        <button className="button w-[250px] self-end">Realizar pedido</button>
      </div>
    </section>
  )
}

export default CartWrapper