import Image from "next/image"
import Link from "next/link"

import { SliderImages } from "@/utils/interfaces"
import { prisma } from "@/utils/connect"
import Actions from "@/components/dashboard/actions"

const Slider = async () => {
  const imageSliders = await prisma.imageSlider.findMany()

  return (
    <div className="p-4 h-[800px] overflow-scroll">
      <div className="flex justify-between">
        <h1 className="text-2xl text-stone-600 font-semibold">Imágenes</h1>
        <Link href="/dashboard/slider/add">
          <button className="text-sm py-2 px-4 bg-red-500 text-white font-semibold rounded-md">Agregar</button>
        </Link>
      </div>
      <div className="h-[2px] w-full bg-stone-100 my-4"></div>
      <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3">Imagen</th>
                    <th scope="col" className="px-6 py-3 flex items-center justify-center">Acciones</th>
                  </tr>
              </thead>
              <tbody>
                  {
                    imageSliders.map((slider: SliderImages) => (
                      <tr className="bg-white border-b hover:bg-gray-100 cursor-pointer" key={slider.id}>
                        <td className="px-6 py-4">
                          <Image src={slider.image} alt={slider.image} height={500} width={500} />
                        </td>
                        <td className="px-6 py-4 flex flex-col justify-center items-center"><Actions view/></td>
                      </tr>
                    ))
                  }
              </tbody>
          </table>
      </div>
    </div>
  )
}

export default Slider