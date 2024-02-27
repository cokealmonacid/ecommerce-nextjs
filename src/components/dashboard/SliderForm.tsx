"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { queryKeys } from "@/utils/consts";
import { postFormData } from "@/utils/services";
import { ImageInputValues } from "@/utils/interfaces";
import Button from "./Button";
import ImageInput from "./ImageInput";
import { responses } from "@/utils/language";
import { toast } from "react-toastify";
import ImageReveal from "./ImageReveal";

const SliderForm = () => {
  let image = "";
  const queryClient = useQueryClient();
  const { formState: { errors }, register, handleSubmit, resetField, getValues, watch } = useForm<ImageInputValues>();


  if (watch("Image")) {
    image = getValues("Image");
  }

  const handleReset = () => {
    resetField("Image");
  };

  const onSubmit: SubmitHandler<ImageInputValues> = values => {
    const data = new FormData();
    data.set("file", values.Image[0]);
    mutation.mutate(data);
  };
  
  const mutation = useMutation({
    mutationFn: (data: FormData) => postFormData("slider", data),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: [queryKeys.GET_SLIDERS] });
    }
  });

  if (mutation.isSuccess) {
    toast.success(responses[mutation.data.message]);
    mutation.reset();
  }

  if (mutation.isError) {
    toast.error(responses[mutation.error.message]);
    mutation.reset();
  }

  return(
    <form className="p-4 w-[300px] md:w-[500px]" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        {
         image && image.length ? <ImageReveal url={image} handleReset={handleReset}/> :
          <ImageInput label="Image" required register={register} />
        }
        <small className="text-gray-600">Para mejores resultados, subir imágenes de 1200x650 pixeles.</small>
        { errors.Image && <p className="text-red-500 font-semibold text-xs">Debes agregar una imagen</p> }
      </div>
      <Button title="Agregar imagen" isDisabled={mutation.isPending} isLoading={mutation.isPending} />
    </form>
  );

};

export default SliderForm;
