'use client'
import { useState } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import LoadingDots from './LoadingDots';
import ErrorAlert from '../shared/ErrorAlert';

const LoginForm = () => {
  const router = useRouter()
  const { status } = useSession()
  const [inputs, setInputs] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  if (status === 'authenticated') router.push('/dashboard')

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (error) {
      setError('')
    }
  
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    setLoading(true)
    const res = await signIn('credentials', { email: inputs.email, password: inputs.password, redirect: false })
    if (res && res.error) {
      setError(res.error)
    }

    setLoading(false)
  }

  return (
    <form className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16" onSubmit={handleSubmit}>
      { error && (<ErrorAlert message={error} />)}
      <div>
        <label htmlFor="email" className="block text-xs text-gray-600 uppercase">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={handleInputs}
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-xs text-gray-600 uppercase">Contraseña</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={handleInputs}
          autoComplete=''
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
          required
        />
      </div>
      <button
        disabled={loading}
        type="submit"
        className={`${
          loading
            ? "cursor-not-allowed border-gray-200 bg-gray-100"
            : "border-black bg-black text-white hover:bg-white hover:text-black"
        } flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none`}
      >
        {loading ? (
          <LoadingDots color="#808080" />
        ) : (
          <p>Ingresar</p>
        )}
      </button>
    </form>
  )
}

export default LoginForm