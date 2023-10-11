import { priceFormatter } from "@/utils/helpers"
import { Category, ProductWithCategory } from "@/utils/interfaces"
import { prisma } from "@/utils/connect"
import ToggleStatus from "@/components/dashboard/toggleStatus"
import Actions from "@/components/dashboard/actions"

const Dashboard = async () => {
  const products = await prisma.product.findMany() as unknown as ProductWithCategory[]
  const categories = await prisma.category.findMany() as unknown as Category[]

  const productsWithCategory = products.map((product: ProductWithCategory) => {
    const selectedCategory = categories.filter((category: Category) => category.id === product.category_id)[0]
    product.category = selectedCategory.title

    return product
  })

  return (
    <div className="p-4 h-[800px] overflow-scroll">
      <h1 className="text-2xl text-stone-600 font-semibold">Productos</h1>
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
                    productsWithCategory.map((product: ProductWithCategory) => (
                      <tr className="bg-white border-b hover:bg-gray-100 cursor-pointer" key={product.id}>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{product.title}</th>
                        <td className="px-6 py-4">{product.category}</td>
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