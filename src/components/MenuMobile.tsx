import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

import { MenuProps } from '@/utils/interfaces'
import { categories } from '@/utils/data'
import { Category } from '@/utils/interfaces'

const MenuMobile = ({ handleMenu }: MenuProps) => {
  const [showCategories, setShowCategories] = useState(false)
  const router = useRouter()

  const handleClick = (menu: string, route?: string) => {
    handleMenu('mobile')
    route && router.push(route)
  }

  const handleShowCategories = () => {
    setShowCategories(!showCategories)
  }

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-stone-900/80 z-10">
      <div className="bg-white w-4/5 h-screen px-4 py-6">
          <div className="md:hidden flex-1 mb-6" onClick={() => handleClick('mobile')}>
            <Image src="/close.png" alt="Close menu" width={20} height={20}/>
          </div>
          <div className="pt-4" onClick={() => handleClick('/')}>
            <h1 className="text-lg">HOME</h1>
            <div className="h-[1px] bg-stone-300 mt-4"></div>
          </div>
          <div className="pt-4" onClick={() => handleShowCategories()}>
            <div className="flex justify-between">
            <h1 className="text-lg">PRODUCTOS</h1>
            <h1 className="text-xl">{showCategories ? '-' : '+'}</h1>
            </div>
            {
              showCategories && (
                <div className="pl-12 py-2">
                  <div className="py-4 uppercase cursor-pointer" onClick={() => handleClick('mobile', '/products')}><h2 className="text-gray-400">Ver todos</h2></div>
                  {
                    categories.map((category: Category) => (
                      <div className="py-4 uppercase cursor-pointer" key={category.id}><h2 className="text-gray-400">{category.title}</h2></div>
                    ))
                  }
                </div>
              )
            }
            <div className="h-[1px] bg-stone-300 mt-4"></div>
          </div>
          <div className="pt-4" onClick={() => handleClick('/contact')}>
            <h1 className="text-lg">CONTACTO</h1>
            <div className="h-[1px] bg-stone-300 mt-4"></div>
          </div>
      </div>
    </div>
  )
}

export default MenuMobile;
