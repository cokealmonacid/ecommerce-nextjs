import './globals.css'
import 'react-toastify/dist/ReactToastify.css'

import type { Metadata } from 'next'
import { Courier_Prime } from 'next/font/google'
import { ToastContainer } from 'react-toastify'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const courier = Courier_Prime({
  weight: ['400', '700'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Delakalle Skateshop',
  description: 'Delakalle Skateshop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={courier.className}>
        <Navbar />
        {children}
        <Footer />
        <ToastContainer position="bottom-right" theme='dark' autoClose={3000}/>
      </body>
    </html>
  )
}
