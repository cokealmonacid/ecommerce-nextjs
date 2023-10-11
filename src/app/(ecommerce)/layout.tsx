import './../globals.css'
import './../styles.css'
import 'react-toastify/dist/ReactToastify.css'

import type { Metadata } from 'next'
import { Courier_Prime } from 'next/font/google'
import { ToastContainer } from 'react-toastify'

import Navbar from '@/components/ecommerce/Navbar'
import Footer from '@/components/ecommerce/Footer'
import { Category } from '@/utils/interfaces'
import { getData } from '@/utils/services'
import AuthProvider from '@/providers/AuthProvider'
import NavbarLogged from '@/components/dashboard/navbarLogged'

const courier = Courier_Prime({
  weight: ['400', '700'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Delakalle Skateshop 🛹',
  description: 'Delakalle Skateshop 🛹',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const categories: Category[] = await getData('categories')

  return (
    <html lang="es">
      <body className={courier.className}>
        <AuthProvider>
          <NavbarLogged />
          <Navbar categories={categories}/>
          {children}
          <Footer />
          <ToastContainer position="bottom-right" theme='dark' autoClose={3000}/>
        </AuthProvider>
      </body>
    </html>
  )
}
