"use client";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";

import { SliderImages } from "@/utils/interfaces";
import { getData } from "@/utils/services";
import { queryKeys } from "@/utils/consts";
import Wrapper from "@/components/dashboard/Wrapper";
import LoadingSpinner from "@/components/dashboard/LoadingSpinner";
import Actions from "@/components/dashboard/Actions";

const Slider = () => {
  const { isLoading, data } = useQuery({
    queryKey: [queryKeys.GET_SLIDERS],
    queryFn: () => {
      return getData("slider");
    }
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Wrapper title="Imágenes" url="/slider/add">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">Imagen</th>
            <th scope="col" className="px-6 py-3 flex items-center justify-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
        {
          data.map((slider: SliderImages) => (
            <tr className="bg-white border-b hover:bg-gray-100 cursor-pointer" key={slider.id}>
              <td className="px-6 py-4"><Image src={slider.image} alt={slider.image} height={500} width={500} style={{ width: "auto", height: "auto" }} priority /></td>
              <td className="px-6 py-4 flex flex-col justify-center items-center"><Actions id={slider.id} url="slider" remove/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </Wrapper>
  );
};

export default Slider;
