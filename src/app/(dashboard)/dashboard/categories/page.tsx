import { CategoryWithProducts, Product } from "@/utils/interfaces"
import { prisma } from "@/utils/connect"
import Actions from "@/components/dashboard/Actions"
import Link from "next/link"

const Categories = async () => {
  const categories = await prisma.category.findMany() as unknown as CategoryWithProducts[]
  const products = await prisma.product.findMany() as unknown as Product[]

  const categoriesWithProducts = categories.map((category: CategoryWithProducts) => {
    let counter = 0
    products.map((product: Product) => {
      if (product.category_id === category.id) {
        counter++
      }
    })

    category.totalProducts = counter

    return category
  })

  return (
    <div className="p-4 h-[800px] overflow-scroll">
      <div className="flex justify-between">
        <h1 className="text-2xl text-stone-600 font-semibold">Categorías</h1>
        <Link href="/dashboard/categories/add">
          <button className="text-sm py-2 px-4 bg-red-500 text-white font-semibold rounded-md">Agregar</button>
        </Link>
      </div>
      <div className="h-[2px] w-full bg-stone-100 my-4"></div>
      <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3">Nombre</th>
                    <th scope="col" className="px-6 py-3">Total de productos</th>
                    <th scope="col" className="px-6 py-3">Acciones</th>
                  </tr>
              </thead>
              <tbody>
                  {
                    categoriesWithProducts.map((category: CategoryWithProducts) => (
                      <tr className="bg-white border-b hover:bg-gray-100 cursor-pointer" key={category.id}>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{category.title}</th>
                        <td className="px-6 py-4">{category.totalProducts}</td>
                        <td className="px-6 py-4">
                          <Actions
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

export default Categories