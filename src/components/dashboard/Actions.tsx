"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { deleteData } from "@/utils/services";
import { responses } from "@/utils/language";
import { Edit, Remove, View } from "@/utils/icons";
import LoadingDots from "../ecommerce/LoadingDots";
import { ActionsProps } from "@/utils/interfaces";

const Actions = ({ edit, remove, view , id = "", url = "", slug = "", queryKey }: ActionsProps) => {
  const pathname = usePathname();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async () => {
      const res = await deleteData(url, id);

      return res.json();
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey });
    }
  });

  const handleRemove = () => mutation.mutate();

  if (mutation.isError) {
    toast.error(responses[mutation.error.message]);
    mutation.reset();
  }

  if (mutation.isSuccess) {
    toast.success(responses[mutation.data.message]);
    mutation.reset();
  }

  if (mutation.isPending) {
    return <LoadingDots />;
  }

  return (
    <div className="flex gap-2">
      { view && <Link className="cursor-pointer" href={`/products/${slug}`}><View /></Link> }
      { edit && <Link className="cursor-pointer" href={`${pathname}/edit/${slug}`}><Edit /></Link> }
      { remove && <div className="cursor-pointer" onClick={handleRemove}><Remove /></div>}
    </div>
  );
};

export default Actions;
