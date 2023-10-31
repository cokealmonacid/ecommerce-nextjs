'use client'
import { useQuery } from "@tanstack/react-query"

import { priceFormatter } from "@/utils/helpers"
import { ProductWithCategory } from "@/utils/interfaces"
import ToggleStatus from "@/components/dashboard/ToggleStatus"
import Actions from "@/components/dashboard/Actions"
import { queryKeys } from "@/utils/consts"
import { getData } from "@/utils/services"

const Dashboard = () => {
  const { isLoading, data: products} = useQuery({
    queryKey: [queryKeys.GET_PRODUCTS],
    queryFn: () => {
      return getData('products');
    }
  });

  // POR HACER: Mejorar loading
  if (isLoading) {
    return 'LOADING...'
  }

  return (
    <div className="p-4 h-[800px] overflow-scroll">
      <div className="flex justify-between">
        <h1 className="text-2xl text-stone-600 font-semibold">Productos</h1>
        <button className="text-sm py-2 px-4 bg-red-500 text-white font-semibold rounded-md">Agregar</button>
      </div>
      <div className="h-[2px] w-full bg-stone-100 my-4"></div>
      <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3">Nombre</th>
                    <th scope="col" className="px-6 py-3">Categoría</th>
                    <th scope="col" className="px-6 py-3">Precio</th>
                    <th scope="col" className="px-6 py-3">Estado</th>
                    <th scope="col" className="px-6 py-3">Acciones</th>
                  </tr>
              </thead>
              <tbody>
                  {
                    products.map((product: ProductWithCategory) => (
                      <tr className="bg-white border-b hover:bg-gray-100 cursor-pointer" key={product.id}>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{product.title}</th>
                        <td className="px-6 py-4">{product.category.title}</td>
                        <td className="px-6 py-4">{priceFormatter(product.price)}</td>
                        <td className="px-6 py-4"><ToggleStatus status={product.active}/></td>
                        <td className="px-6 py-4">
                          <Actions
                            view
                            remove
                            edit
                          />
                        </td>
                      </tr>
                    ))
                  }
              </tbody>
          </table>
      </div>

    </div>
  )
}

export default Dashboard