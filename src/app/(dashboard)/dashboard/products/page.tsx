"use client";
import { useQuery } from "@tanstack/react-query";

import { priceFormatter } from "@/utils/helpers";
import { ProductWithCategory } from "@/utils/interfaces";
import Wrapper from "@/components/dashboard/Wrapper";
import LoadingSpinner from "@/components/dashboard/LoadingSpinner";
import ToggleStatus from "@/components/dashboard/ToggleStatus";
import Actions from "@/components/dashboard/Actions";
import { queryKeys } from "@/utils/consts";
import { getData } from "@/utils/services";

const Dashboard = () => {
  const { isLoading, data} = useQuery({
    queryKey: [queryKeys.GET_PRODUCTS],
    queryFn: () => {
      return getData("products");
    }
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Wrapper title="Productos" url="/products/add">
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
            data.map((product: ProductWithCategory) => (
              <tr className="bg-white border-b hover:bg-gray-100 cursor-pointer" key={product.id}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{product.title}</th>
                <td className="px-6 py-4">{product.category.title}</td>
                <td className="px-6 py-4">{priceFormatter(product.price)}</td>
                <td className="px-6 py-4"><ToggleStatus status={product.active}/></td>
                <td className="px-6 py-4">
                  <Actions id={product.id.toString()} url="products/remove" queryKey={[queryKeys.GET_PRODUCTS]} view remove edit />
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </Wrapper>
  );
};

export default Dashboard;
