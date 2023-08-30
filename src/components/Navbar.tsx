'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import MenuMobile from './MenuMobile'
import Menu from './Menu'

const Navbar = () => {
  const [menuVisibility, setMenuVisibility] = useState({ desktop: false, mobile: false })

  const handleMenuVisibility = (opt: string) => {
    setMenuVisibility({ ...menuVisibility, [opt]: !menuVisibility[opt as keyof typeof menuVisibility] })
  }


  return (
    <>
      <div className="border-b-2 border-b-stone-800 py-2">
        <div className="container mx-auto flex items-center px-4">
          <div className="hidden md:flex flex-row gap-20 flex-1">
            <Link href="/"><h1>Home</h1></Link>
            <div className="cursor-pointer" onClick={() => handleMenuVisibility('desktop')}><h1>Productos</h1></div>
            <Link href="/contact"><h1>Contacto</h1></Link>
          </div>
          <div className="md:hidden flex-1" onClick={() => handleMenuVisibility('mobile')}>
            <Image src="/menu.png" alt="Menu" width={30} height={30} />
          </div>
          <Link href="/">
            <Image src="/logo.png" alt="Delakalle Skateshop" width={80} height={80} />
          </Link>
          <div className="flex flex-row gap-8 flex-1 justify-end">
            <a href="https://www.instagram.com/delakalleskateshop/"><Image src="/instagram.png" alt="Delakalle Skateshop instagram" width={28} height={28} /></a>
            <Image src="/cart.png" alt="Delakalle Skateshop carro de compras" width={30} height={30} />
          </div>
        </div>
      </div>
      {menuVisibility.desktop && <Menu handleMenu={handleMenuVisibility}  />}
      {menuVisibility.mobile && <MenuMobile handleMenu={handleMenuVisibility} />}
    </>
  )
}

export default Navbar