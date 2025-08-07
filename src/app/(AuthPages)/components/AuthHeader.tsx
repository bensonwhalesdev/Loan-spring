'use client'
import Link from 'next/link'
import { ShieldCheck } from 'lucide-react'

const AuthHeader = () => {
  return (
    <header className="bg-white border-b shadow-sm px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <ShieldCheck className="text-[#0A4860]" size={28} />
          <span className="text-xl font-bold text-[#0A4860]">LoanSpring</span>
        </Link>
        <nav className="text-sm space-x-4  sm:block">
          <Link href="/login" className="text-[#0A4860] border-b-2 border-[#0A4860] py-2 px-4 rounded-md">
            Log In
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default AuthHeader
