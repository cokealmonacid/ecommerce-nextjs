import Divider from "@/components/ecommerce/Divider";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="w-full h-[500px] flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold text-stone-900 text-center">404 PÁGINA NO ENCONTRADA</h1>
        <Divider />
        <h2 className="text-stone-900 ">La página solicitada no existe</h2>
        <Link href="/" className="p-2 mt-4 bg-stone-700 text-center text-white font-bold">Volver al inicio</Link>
      </div>
    </div>
  );
};

export default NotFound;
