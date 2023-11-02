"use client";

import Image from "next/image";
import { toast } from "react-toastify";

import { deleteData } from "@/utils/services";
import { responses } from "@/utils/language";

interface ActionsProps {
  url?: string;
  id?: string;
  edit?: boolean;
  remove?: boolean;
  view?: boolean;
}

/** AGREGAR CARGANDO AL BORRAR **/

const Actions = ({ edit, remove, view , id = "", url = "" }: ActionsProps) => {
  const handleRemove = async () => {
    const res = await deleteData(url, id);
    const { ok } = res;
    const { message } = await res.json();
    if (ok) {
      toast.success(responses[message]);
    } else {
      toast.error(responses[message]);
    }
  };

  return (
    <div className="flex gap-2">
      { view && <div className="cursor-pointer"><Image src="/eye.png" alt="Ver detalle" width={20} height={20}/></div> }
      { edit && <div className="cursor-pointer"><Image src="/pencil.png" alt="Ver detalle" width={20} height={20}/></div> }
      { remove && <div className="cursor-pointer" onClick={handleRemove}><Image src="/trash.png" alt="Ver detalle" width={20} height={20}/></div>}
    </div>
  );
};

export default Actions;
