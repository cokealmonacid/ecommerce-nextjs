"use client";

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";


import { ProductFormInputs, ProductFormProps } from "@/utils/interfaces";
import { postFormData, putFormData } from "@/utils/services";
import { slugify } from "@/utils/helpers";
import { responses } from "@/utils/language";
import { queryKeys } from "@/utils/consts";
import Button from "./Button";
import ImageInput from "./ImageInput";
import ImageReveal from "./ImageReveal";

const ProductForm = ({ categories, product }: ProductFormProps) => {
  const queryClient = useQueryClient();
  const [image, setImage] = useState(product ? product.img : null);
  const { handleSubmit, register, resetField, getValues, watch, formState: { errors } } = useForm<ProductFormInputs>();

  const mutation = useMutation({
    mutationFn: (data: FormData) => product ? putFormData("products", data) : postFormData("products", data),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: [queryKeys.GET_PRODUCTS] });
    }
  });

  if (watch("Image") && image === null) {
    setImage(getValues("Image"));
  }

  const handleReset = () => {
    setImage(null);
    resetField("Image");
  };

  const onSubmit: SubmitHandler<ProductFormInputs> = values => {
    const data = new FormData();
    data.set("file", values.Image ? values.Image[0] : "");
    data.set("title", values.title ?? "");
    data.set("category_id", values.category_id ?? "");
    data.set("brand", values.brand ?? "");
    data.set("price", String(values.price) ?? "");
    data.set("description", values.description ?? "");
    data.set("slug", slugify(values.title ?? ""));

    if (product) {
      data.set("id", String(product.id));
    }

    mutation.mutate(data);
  };

  if (mutation.isSuccess) {
    toast.success(responses[mutation.data.message]);
    mutation.reset();
  }

  if (mutation.isError) {
    toast.error(responses[mutation.error.message]);
    mutation.reset();
  }

  return (
    <form className="p-4 w-[300px] md:w-[500px]" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label className="dashboard-label">Título</label>
        <input className="dashboard-input"  {...register("title", { required: "Debes agregar un título" })} defaultValue={product && product.title ? product.title : ""}/>
        { errors.title && <p className="text-red-500 font-semibold text-xs">{errors.title.message}</p> }
      </div>
      <div className="mb-4">
        <label className="dashboard-label">Categoría</label>
        <select className="dashboard-input" defaultValue={product ? product.category_id : "DEFAULT"} {...register("category_id", { required: "Debes seleccionar una categoría" })}>
          { !product && <option value="DEFAULT" disabled>Selecciona una categoría</option> }
          {
            categories.map((category) => <option key={category.id} value={category.id}>{category.title}</option>)
          }
        </select>
        { errors.category_id && <p className="text-red-500 font-semibold text-xs">{errors.category_id.message}</p> }
      </div>
      <div className="mb-4">
        <label className="dashboard-label">Marca</label>
        <input className="dashboard-input"  {...register("brand", { required: "Debes agregar una marca" })} defaultValue={product && product.brand ? product.brand : ""}/>
        { errors.brand && <p className="text-red-500 font-semibold text-xs">{errors.brand.message}</p> }
      </div>
      <div className="mb-4">
        <label className="dashboard-label">Precio</label>
        <input className="dashboard-input"  type="number" {...register("price", { required: "Debes agregar un precio" })} defaultValue={product && product.price ? product.price.toString() : ""}/>
        { errors.price && <p className="text-red-500 font-semibold text-xs">{errors.price.message}</p> }
      </div>
      <div className="mb-4">
        <label className="dashboard-label">Descripción</label>
        <textarea className="dashboard-input" rows={5} {...register("description", { required: "Debes agregar una descripción" })} defaultValue={product && product.description ? product.description : ""}/>
        { errors.description && <p className="text-red-500 font-semibold text-xs">{errors.description.message}</p> }
      </div>
      <div className="mb-4">
        <label className="dashboard-label">Imagen</label>
        {
         image && image.length ? <ImageReveal url={image} handleReset={handleReset}/> :
          <ImageInput label="Image" required register={register} />
        }
        { errors.Image && <p className="text-red-500 font-semibold text-xs">{errors.Image.message}</p> }
      </div>
      <Button title="Agregar producto" isDisabled={mutation.isPending} isLoading={mutation.isPending} />
    </form>
  );
};

export default ProductForm;
