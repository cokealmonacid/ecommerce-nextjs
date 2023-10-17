'use client'
import { usePathname, useRouter } from "next/navigation"

const Back = () => {
  const router = useRouter()
  const pathname = usePathname().split('/')

  if (pathname.length > 3) {
    return (
      <button className="text-md px-6 text-slate-700" onClick={router.back}>{`< Volver`}</button>
    )
  }

  return null
}

export default Back