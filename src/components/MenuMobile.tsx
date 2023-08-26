import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { MenuMobileProps as props } from '@/utils/interfaces'

const MenuMobile = ({ handleMobileMenu }: props) => {
  const [showCategories, setShowCategories] = useState(false)
  const router = useRouter()

  const handleClick = (route: string) => {
    handleMobileMenu()
    router.push(route)
  }

  const handleShowCategories = () => {
    setShowCategories(!showCategories)
  }

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-stone-900/80">
      <div className="bg-white w-4/5 h-screen px-4 py-6">
          <div className="md:hidden flex-1 mb-6" onClick={() => handleMobileMenu()}>
            <Image src="/close.png" alt="Close menu" width={20} height={20}/>
          </div>
          <div className="pt-4" onClick={() => handleClick('/')}>
            <h1 className="text-lg">HOME</h1>
            <div className="h-[1px] bg-slate-300 mt-4"></div>
          </div>
          <div className="pt-4" onClick={() => handleShowCategories()}>
            <div className="flex justify-between">
            <h1 className="text-lg">PRODUCTOS</h1>
            <h1 className="text-xl">{showCategories ? '-' : '+'}</h1>
            </div>
            {
              showCategories && (
                <div className="pl-12 py-2">
                  <div className="pt-8 pb-4"><h2 className="text-gray-400">TABLAS</h2></div>
                  <div className="py-4"><h2 className="text-gray-400">TABLAS COMPLETAS</h2></div>
                  <div className="py-4"><h2 className="text-gray-400">TRUCKS</h2></div>
                  <div className="py-4"><h2 className="text-gray-400">RUEDAS</h2></div>
                  <div className="py-4"><h2 className="text-gray-400">RODAMIENTOS</h2></div>
                  <div className="py-4"><h2 className="text-gray-400">ACCESORIOS</h2></div>
                  <div className="py-4"><h2 className="text-gray-400">ROPA</h2></div>
                </div>
              )
            }
            <div className="h-[1px] bg-slate-300 mt-4"></div>
          </div>
          <div className="pt-4" onClick={() => handleClick('/contact')}>
            <h1 className="text-lg">CONTACTO</h1>
            <div className="h-[1px] bg-slate-300 mt-4"></div>
          </div>
      </div>
    </div>
  )
}

export default MenuMobile;
