'use client' 
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { LayoutDashboard, FileEdit, User, History, User2, LogOut } from 'lucide-react'
import { useEffect, useState } from 'react'
import apiClient from '@/lib/apiClient'

type UserType = {
  role: 'user' | 'admin'
}

const Sidebar = () => {
  const pathname = usePathname()
  const router = useRouter()
  const [user, setUser] = useState<UserType | null>(null)

  useEffect(() => {
    getLoggedInUser()
  }, [])

  const getLoggedInUser = async () => {
    try {
      const res = await apiClient.get('/user/me')
      setUser(res.data.user)
    } catch (error) {
      console.error('Error fetching user:', error)
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    router.push('/login')
  }

  const navItems = [
    { name: 'Overview', icon: <LayoutDashboard className="w-5 h-5" />, href: '/dashboard' },
    { name: 'Application', icon: <FileEdit className="w-5 h-5" />, href: '/loan-apply' },
    { name: 'Profile', icon: <User className="w-5 h-5" />, href: '/profile' },
    // { name: 'History', icon: <History className="w-5 h-5" />, href: '/history' },
    ...(user?.role === 'admin'
      ? [{ name: 'All Users', icon: <User2 className="w-5 h-5" />, href: '/all-users' }]
      : [])
  ]

  return (
    <aside className="h-screen w-full max-w-[250px] bg-white border-r border-gray-200 shadow-sm flex flex-col">
      <div className="px-6 py-5 text-2xl font-bold text-[#0A4860] border-b border-gray-200">
        LoanSpring
      </div>

      <nav className="flex-1 px-4 py-6 space-y-1">
        {navItems.map(({ name, icon, href }) => (
          <Link key={name} href={href} className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              pathname === href
                ? 'bg-[#0A4860] text-white shadow'
                : 'text-gray-700 hover:bg-gray-100'
            }`} > {icon}
            <span>{name}</span>
          </Link>
        ))}

        <button onClick={logout} className="mt-4 flex items-center gap-3 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition"> <LogOut className="w-5 h-5" /> Logout
        </button>
      </nav>
    </aside>
  )
}

export default Sidebar
