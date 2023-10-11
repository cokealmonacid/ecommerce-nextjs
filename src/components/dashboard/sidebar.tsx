'use client'
import Image from "next/image"
import Link from "next/link"
import { usePathname } from 'next/navigation'

import { dashboardRouter } from "@/utils/config"
import { RoutesProps } from "@/utils/interfaces"

const Sidebar = () => {
  const pathname = usePathname()

  return (
    <div className="w-1/6 bg-[#0b0e18] shadow-lg">
      <header className="flex justify-center items-center py-6 bg-[#223463]">
        <Link href="/"><Image src="/logo.png" alt="Delakalle Skateshop" width={80} height={80} /></Link>
      </header>
      <main className="py-6">
        {
          dashboardRouter.map((route: RoutesProps) => (
            <Link href={route.url} key={route.title}>
              <div className="py-4 px-8">
                <h1 className={`text-xl text-white ${route.url === pathname ? 'font-bold' : 'font-thin'}`}>{route.title}</h1>
              </div>
            </Link>
          ))
        }
      </main>
    </div>
  )
}

export default Sidebar