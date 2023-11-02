"use client";

import { toast } from "react-toastify";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { slugify } from "@/utils/helpers";
import { CategoryFormInputs } from "@/utils/interfaces";
import { postData } from "@/utils/services";
import { queryKeys } from "@/utils/consts";
import { responses } from "@/utils/language";
import Button from "./Button";
import ErrorAlert from "../shared/ErrorAlert";

const CategoryForm = () => {
  const queryClient = useQueryClient();
  const { register, handleSubmit, formState: { errors } } = useForm<CategoryFormInputs>();
  
  const mutation = useMutation({
    mutationFn: (data: {[key: string] : string}) => postData("categories", data),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: [queryKeys.GET_CATEGORIES] });
    }
  });

  const onSubmit: SubmitHandler<CategoryFormInputs> = data => {
    const slug = slugify(data.categoryName);
    mutation.mutate({ title: data.categoryName, slug });
  };

  if (mutation.isSuccess) {
    toast.success(responses[mutation.data.message]);
    mutation.reset();
  }

  return (
    <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
      { mutation.error && (<ErrorAlert message={mutation.error.message} />)}
      <div className="mb-4">
        <label className="dashboard-label">Nombre</label>
        <input className="dashboard-input"  {...register("categoryName", { required: true })}/>
        { errors.categoryName && <p className="text-red-500 font-semibold text-xs">Debes agregar un nombre</p> }
      </div>
      <Button title="Crear categoría" isDisabled={mutation.isPending} isLoading={mutation.isPending} />
    </form>
  );
};

export default CategoryForm;
