"use client";

import { CategoryWithProducts } from "@/utils/interfaces";
import { getData } from "@/utils/services";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/utils/consts";
import Wrapper from "@/components/dashboard/Wrapper";
import LoadingSpinner from "@/components/dashboard/LoadingSpinner";
import Actions from "@/components/dashboard/Actions";
import Empty from "@/components/dashboard/Empty";

const Categories = () => {
  const { isLoading, isSuccess, data } = useQuery({
    queryKey: [queryKeys.GET_CATEGORIES],
    queryFn: () => {
      return getData("categories");
    }
  });

  if (isSuccess && !data.length) {
    return (
      <Empty title="categorías" url="categories/add" />
    );
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Wrapper title="Categorías" url="/categories/add">
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
        data.map((category: CategoryWithProducts) => (
          <tr className="bg-white border-b hover:bg-gray-100 cursor-pointer" key={category.id}>
            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{category.title}</td>
            <td className="px-6 py-4">{category._count.products}</td>
            <td className="px-6 py-4">
              <Actions id={category.id.toString()} url="categories/remove" queryKey={[queryKeys.GET_CATEGORIES]} slug={category.slug} remove edit />
            </td>
          </tr>
        ))
        }
        </tbody>
      </table>
    </Wrapper>
  );
};

export default Categories;
