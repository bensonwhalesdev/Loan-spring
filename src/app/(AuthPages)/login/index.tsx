'use client'
import React from 'react'
import { Mail, Lock } from 'lucide-react'
import useLoginForm from './Hook/useLogin'
import AuthRedirect from '@/app/(ReuseableComponents)/authRedirect'

const LoginForm = () => {
  const {
    formData,
    handleChange,
    handleSubmit,
    loading,
    error,
  } = useLoginForm()

  return (
    <AuthRedirect>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 px-4 py-12">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-xl rounded-xl p-8 space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-[#0A4860]">Welcome Back</h2>
        <p className="text-center text-sm text-gray-500 mb-4">Login to continue</p>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <div className="flex items-center border border-gray-200 bg-gray-50 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-[#0A4860]">
            <Mail className="w-4 h-4 text-gray-500 mr-2" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full bg-transparent focus:outline-none text-sm text-gray-800"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="flex items-center border border-gray-200 bg-gray-50 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-[#0A4860]">
            <Lock className="w-4 h-4 text-gray-500 mr-2" />
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full bg-transparent focus:outline-none text-sm text-gray-800"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#0A4860] hover:bg-[#083B4F] text-white py-3 rounded-lg font-medium transition duration-300"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
    </AuthRedirect>
  )
}

export default LoginForm
