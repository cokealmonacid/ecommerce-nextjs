import Link from "next/link";

import { WrapperProps } from "@/utils/interfaces";

const Wrapper = ({ children, title, url }: WrapperProps) => {
  return (
    <div className="p-4 h-[800px] overflow-scroll">
      <div className="flex justify-between">
        <h1 className="text-2xl text-stone-600 font-semibold">{title}</h1>
        <Link href={`/dashboard/${url}`}>
          <button className="text-sm py-2 px-4 bg-red-500 text-white font-semibold rounded-md">Agregar</button>
        </Link>
      </div>
      <div className="h-[2px] w-full bg-stone-100 my-4"></div>
      <div className="relative overflow-x-auto">
        { children }
      </div>
    </div>
  );
};

export default Wrapper;
