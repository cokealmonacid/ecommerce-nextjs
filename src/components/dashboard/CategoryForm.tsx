"use client";

import { toast } from "react-toastify";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { slugify } from "@/utils/helpers";
import { CategoryFormInputs, CategoryFormProps } from "@/utils/interfaces";
import { postData, putData } from "@/utils/services";
import { queryKeys } from "@/utils/consts";
import { responses } from "@/utils/language";
import Button from "./Button";

const CategoryForm = ({ category }: CategoryFormProps) => {
  const queryClient = useQueryClient();
  const { register, handleSubmit, formState: { errors } } = useForm<CategoryFormInputs>();
  const action = (data: {[key: string] : string}) =>  category ? putData("categories", data) : postData("categories", data);


  const mutation = useMutation({
    mutationFn: (data: {[key: string] : string}) => action( data),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: [queryKeys.GET_CATEGORIES] });
    }
  });

  const onSubmit: SubmitHandler<CategoryFormInputs> = data => {
    const slug = slugify(data.title);
    mutation.mutate(category ? {  id: category.id, title: data.title, slug } : { title: data.title, slug });
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
    <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label className="dashboard-label">Nombre</label>
        <input className="dashboard-input"  {...register("title", { required: true })} placeholder={category && category.title ? category.title : ""}/>
        { errors.title && <p className="text-red-500 font-semibold text-xs">Debes agregar un nombre</p> }
      </div>
      <Button title={category ? "Actualizar categoría" : "Crear categoría" } isDisabled={mutation.isPending} isLoading={mutation.isPending} />
    </form>
  );
};

export default CategoryForm;
