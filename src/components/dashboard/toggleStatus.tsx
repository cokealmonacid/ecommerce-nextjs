"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { updateStatus } from "@/utils/services";
import { responses } from "@/utils/language";
import { queryKeys } from "@/utils/consts";
import LoadingDots from "../ecommerce/LoadingDots";

interface Props {
  status: boolean;
  id: number;
}

const ToggleStatus = ({ status, id }: Props) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (id: string) => {
      const res = await updateStatus(id);

      return res;
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: [ queryKeys.GET_PRODUCTS ] });
    }
  });

  const handleUpdateStatus = () => {
    mutation.mutate(id.toString());
  };

  if (mutation.isError) {
    toast.error(responses[mutation.error.message]);
    mutation.reset();
  }

  if (mutation.isSuccess) {
    console.log("isSuccess: ", mutation.isSuccess, mutation.data.message);
    toast.success(responses[mutation.data.message]);
    mutation.reset();
  }

  if (mutation.isPending) {
    return <LoadingDots />;
  }


  return (
    <label className="relative inline-flex items-center mr-5 cursor-pointer">
      <input type="checkbox" value="" className="sr-only peer" defaultChecked={status}/>
      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-transparent peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600" onClick={handleUpdateStatus}></div>
    </label>
  );
};

export default ToggleStatus;
