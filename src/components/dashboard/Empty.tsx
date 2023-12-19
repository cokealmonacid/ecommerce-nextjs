import Link from "next/link";

interface EmptyProps {
  title: string;
  url: string;
}

const Empty = ({ title, url }: EmptyProps) => (
  <div className="bg-white w-full min-h-[800px] flex flex-col justify-center items-center">
    <h1 className="text-2xl text-neutral-800 mb-4">No se han encontrado {title}</h1>
    <Link href={url}>
      <button className="text-sm py-2 px-4 bg-red-500 text-white font-semibold rounded-md">Agregar</button>
    </Link>
  </div>
);

export default Empty;
