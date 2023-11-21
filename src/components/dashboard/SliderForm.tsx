"use client";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";

import { SliderFormInputs } from "@/utils/interfaces";
import Button from "./Button";

const SliderForm = () => {
  const { register, handleSubmit, watch } = useForm<SliderFormInputs>();

  const onSubmit: SubmitHandler<SliderFormInputs> = data => {
    console.log("data: ", data);
  }; 

  return(
    <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        {
          watch("file") ?
          (
            <div className="relative border-2 mb-4 m-1">
              <Image src={""} alt="imagen subida" width={500} height={500} className="object-contain" />
              <button className="rounded-full bg-red-500 text-white font-bold px-3 py-1 absolute top-1 right-1">X</button>
            </div>
          ) : (
            <label className="flex cursor-pointer flex-col w-full h-32 border-2 rounded-md border-dashed mb-4 hover:bg-gray-100 hover:border-gray-300">
              <div className="flex flex-col items-center justify-center pt-7">
                <svg xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd" />
                </svg>
                <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">Seleccionar una imagen</p>
              </div>
              <input type="file" className="opacity-0" accept="image/*" {...register("file")} />
            </label>
          )
        }
      </div>
      <Button title="Agregar imagen" isDisabled={false} isLoading={false} />
    </form>
  );

};

export default SliderForm;
