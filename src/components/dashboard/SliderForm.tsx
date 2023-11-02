import { useState } from "react";
import { useForm } from "react-hook-form";

import { FormProps } from "@/utils/interfaces";
import Button from "./Button";

const SliderForm = ({ mutation }: FormProps) => {
  const [file,] = useState<File | undefined>();
  const { formState: {  } } = useForm();

  return(
    <form className="p-4">
      {/* <ImageInput /> */}
      <Button title="Subir imagen" isLoading={mutation.isPending} isDisabled={!file || mutation.isPending} />
    </form>
  );

};

export default SliderForm;
