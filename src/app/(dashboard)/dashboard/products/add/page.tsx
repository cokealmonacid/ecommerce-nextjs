"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import ImageInput from "@/components/dashboard/ImageInput";
import ErrorAlert from "@/components/shared/ErrorAlert";
import LoadingDots from "@/components/ecommerce/LoadingDots";
import { postData } from "@/utils/services";
import { queryKeys } from "@/utils/consts";

const Add = () => {
  const [categoryName, setCategoryName] = useState<string | null>();
  const [file,] = useState<File | undefined>();
  const queryClient = useQueryClient();
  
  const mutation = useMutation({
    mutationFn: (data: {[key: string] : string}) => postData("categories", data),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: [queryKeys.GET_CATEGORIES] });
    }
  });

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {  
    setCategoryName(e.target.value);
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
  //   if (!categoryName) return

  //   const slug = slugify(categoryName)
  //   mutation.mutate({ title: categoryName, slug })
  // }

  // if (mutation.isSuccess) {
  //   toast.success(responses[mutation.data.message])
  //   mutation.reset()
  };

  return (
    <div className="p-4 h-[800px] overflow-scroll flex flex-col justify-center items-center">
      <h2 className="font-semibold text-stale-600 text-xl text-slate-700">Agregar un producto</h2>
      { mutation.error && (<ErrorAlert message={mutation.error.message} />)}
      <form className="p-4 w-[500px]" onSubmit={handleSubmit}>
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-product-name">Título</label>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded px-1 py-2 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-product-name" type="text" name="name" onChange={handleInputs}/>
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-product-category">Categoría</label>
        <select id="category" className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded px-1 py-2 mb-3 leading-tight focus:outline-none focus:bg-white">
          <option selected disabled>Selecciona una categoría</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-product-brand">Marca</label>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded px-1 py-2 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-product-brand" type="text" name="brand" onChange={handleInputs}/>
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-product-price">Precio</label>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded px-1 py-2 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-product-price" type="text" name="price" onChange={handleInputs}/>
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-product-description">Descripción</label>
        <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded px-1 py-2 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-product-description" name="description" rows={5} />
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-product-description">Imagen</label>
        <ImageInput file={file} handleRemoveImage={() =>{}} handleUploadedImage={() => {}} />
        <button className="bg-green-500 w-full rounded py-2 text-white font-semibold disabled:opacity-60 disabled:pb-3" disabled={!categoryName || mutation.isPending}>
          {
            mutation.isPending ? <LoadingDots color='#FFFFFF' /> : "Crear producto"
          }
        </button>
        </form>
    </div>
  );
};

export default Add;
