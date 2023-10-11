'use client'

import { signOut } from 'next-auth/react'
import Image from 'next/image'

const Logout = () => {
  const handleLogout = () => signOut()

  return (
    <button onClick={handleLogout}>
      <Image src="/logout.png" alt="Cerrar sesión" width={20} height={20} />
    </button>
  )
}

export default Logout