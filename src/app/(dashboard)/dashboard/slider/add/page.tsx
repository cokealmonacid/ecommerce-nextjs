import SliderForm from "@/components/dashboard/SliderForm";

const Add = () => {
  return (
    <div className="p-4 h-[800px] overflow-scroll flex flex-col justify-center items-center">
      <h2 className="font-semibold text-stale-600 text-xl text-slate-700">Agregar una imagen</h2>
       <SliderForm />
    </div>
  );
};

export default Add;
