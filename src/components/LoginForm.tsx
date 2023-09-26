'use client'
import { useSession } from 'next-auth/react'
import LoadingDots from './LoadingDots';

const LoginForm = () => {
  const { status } = useSession();
  const loading = status === 'loading'

  return (
    <form className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16">
      <div>
        <label htmlFor="email" className="block text-xs text-gray-600 uppercase">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
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
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
          required
        />
      </div>
      <button
        disabled={loading}
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