"use client";

import Image from "next/image";
import Link from "next/link";
import { QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { deleteData } from "@/utils/services";
import { responses } from "@/utils/language";
import LoadingDots from "../ecommerce/LoadingDots";

interface ActionsProps {
  url?: string;
  edit?: boolean;
  remove?: boolean;
  view?: boolean;
  queryKey?: QueryKey;
  id?: string;
  slug?: string;
}

const Actions = ({ edit, remove, view , id = "", url = "", slug = "", queryKey }: ActionsProps) => {
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
      { view && <Link href={`/products/${slug}`}><div className="cursor-pointer"><Image src="/eye.png" alt="Ver detalle" width={20} height={20}/></div></Link> }
      { edit && <div className="cursor-pointer"><Image src="/pencil.png" alt="Ver detalle" width={20} height={20}/></div> }
      { remove && <div className="cursor-pointer" onClick={handleRemove}><Image src="/trash.png" alt="Ver detalle" width={20} height={20}/></div>}
    </div>
  );
};

export default Actions;
