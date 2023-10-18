'use client'
import Image from "next/image"
import { useState } from "react"
import { toast } from 'react-toastify'
import { useMutation } from "@tanstack/react-query"

import ErrorAlert from "@/components/shared/ErrorAlert"
import LoadingDots from "@/components/ecommerce/LoadingDots"
import { postFormData } from "@/utils/services"
import { responses } from "@/utils/language"

const Add = () => {
  const [file, setFile] = useState<File | undefined>();
  const mutation = useMutation({
    mutationFn: (data: FormData) => postFormData("slider", data)
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
          {
            file ?
            (
              <div className="relative border-2 mb-4 m-1">
                <Image src={URL.createObjectURL(file)} alt="imagen subida" width={500} height={500} className="object-contain" />
                <button className="rounded-full bg-red-500 text-white font-bold px-3 py-1 absolute top-1 right-1" onClick={handleRemoveImage}>X</button>
              </div>
            )
            :
            (
              <label className="flex cursor-pointer flex-col w-full h-32 border-2 rounded-md border-dashed mb-4 hover:bg-gray-100 hover:border-gray-300">
              <div className="flex flex-col items-center justify-center pt-7">
                  <svg xmlns="http://www.w3.org/2000/svg"
                      className="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                      fill="currentColor">
                      <path fillRule="evenodd"
                          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                          clipRule="evenodd" />
                  </svg>
                  <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">Seleccionar una imagen</p>
              </div>
              <input type="file" className="opacity-0" accept="image/*" name="img" onChange={handleUploadedImage}/>
              </label>
            )
          }
          <button className="bg-green-500 w-full rounded py-2 text-white font-semibold disabled:opacity-60 disabled:pb-3" disabled={!file || mutation.isPending}>
            {
              mutation.isPending ? <LoadingDots color='#FFFFFF' /> : 'Subir imagen'
            }
          </button>
        </form>
    </div>
  )
}

export default Add