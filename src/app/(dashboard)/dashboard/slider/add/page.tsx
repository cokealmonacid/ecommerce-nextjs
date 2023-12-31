'use client'

import { useState } from "react"
import { toast } from 'react-toastify'
import { useMutation, useQueryClient } from "@tanstack/react-query"

import ErrorAlert from "@/components/shared/ErrorAlert"
import LoadingDots from "@/components/ecommerce/LoadingDots"
import ImageInput from "@/components/dashboard/ImageInput"
import { postFormData } from "@/utils/services"
import { responses } from "@/utils/language"
import { queryKeys } from "@/utils/consts"

const Add = () => {
  const [file, setFile] = useState<File | undefined>();
  const queryClient = useQueryClient();
  
  const mutation = useMutation({
    mutationFn: (data: FormData) => postFormData("slider", data),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: [queryKeys.GET_SLIDERS] })
    }
  })

  const handleRemoveImage = () => setFile(undefined)

  const handleUploadedImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return
    setFile(e.target.files?.[0])
  }

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (!file) return
    
    const data = new FormData()
    data.set('file', file)
    mutation.mutate(data)
  }

  if (mutation.isSuccess) {
    toast.success(responses[mutation.data.message])
    mutation.reset()
  }

  return (
    <div className="p-4 h-[800px] overflow-scroll flex flex-col justify-center items-center">
      <h2 className="font-semibold text-stale-600 text-xl text-slate-700">Agregar una imagen</h2>
      { mutation.error && (<ErrorAlert message={mutation.error.message} />)}
      <form className="p-4" onSubmit={handleSubmit}>
        <ImageInput file={file} handleUploadedImage={handleUploadedImage} handleRemoveImage={handleRemoveImage} />
        <button className="bg-green-500 w-full rounded py-2 text-white font-semibold disabled:opacity-60 disabled:pb-3" disabled={!file || mutation.isPending}>
          { mutation.isPending ? <LoadingDots color='#FFFFFF' /> : 'Subir imagen'}
        </button>
      </form>
    </div>
  )
}

export default Add