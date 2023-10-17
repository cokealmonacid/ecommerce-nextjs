'use client'

import { SessionProvider } from "next-auth/react"

import { ChildrenProps } from '@/utils/interfaces'

const AuthProvider = ({ children }: ChildrenProps) => {
  return <SessionProvider>{ children }</SessionProvider>
}

export default AuthProvider
