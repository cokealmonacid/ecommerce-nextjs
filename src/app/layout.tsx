import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Courier_Prime } from 'next/font/google'

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
      </body>
    </html>
  )
}
