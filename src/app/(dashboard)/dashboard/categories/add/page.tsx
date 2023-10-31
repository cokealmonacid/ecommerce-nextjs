'use client'

import { useState } from "react"
import { toast } from 'react-toastify'
import { useMutation, useQueryClient } from "@tanstack/react-query"

import ErrorAlert from "@/components/shared/ErrorAlert"
import LoadingDots from "@/components/ecommerce/LoadingDots"
import { postData } from "@/utils/services"
import { responses } from "@/utils/language"
import { slugify } from "@/utils/helpers"
import { queryKeys } from "@/utils/consts"

const Add = () => {
  const [categoryName, setCategoryName] = useState<string | null>();
  const queryClient = useQueryClient();
  
  const mutation = useMutation({
    mutationFn: (data: {[key: string] : string}) => postData("categories", data),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: [queryKeys.GET_CATEGORIES] })
    }
  })

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {  
    setCategoryName(e.target.value)
  }

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (!categoryName) return

    const slug = slugify(categoryName)
    mutation.mutate({ title: categoryName, slug })
  }

  if (mutation.isSuccess) {
    toast.success(responses[mutation.data.message])
    mutation.reset()
  }

  return (
    <div className="p-4 h-[800px] overflow-scroll flex flex-col justify-center items-center">
      <h2 className="font-semibold text-stale-600 text-xl text-slate-700">Agregar una categoría</h2>
      { mutation.error && (<ErrorAlert message={mutation.error.message} />)}
      <form className="p-4" onSubmit={handleSubmit}>
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-category-name">
          Nombre
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-category-name" type="text" onChange={handleInputs}/>
        <button className="bg-green-500 w-full rounded py-2 text-white font-semibold disabled:opacity-60 disabled:pb-3" disabled={!categoryName || mutation.isPending}>
          {
            mutation.isPending ? <LoadingDots color='#FFFFFF' /> : 'Crear categoría'
          }
        </button>
        </form>
    </div>
  )
}

export default Add