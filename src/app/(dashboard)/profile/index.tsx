'use client'
import { useEffect, useState } from 'react'
import apiClient from '@/lib/apiClient'
import Spinner from '@/app/(ReuseableComponents)/spinner'

type User = {
  firstName: string
  lastName: string
  email: string
  phone?: string
  gender?: 'male' | 'female' | 'other'
  address?: string
  city?: string
  state?: string
  zip?: string
  role?: 'user' | 'admin'
}


export default function Profile() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await apiClient.get('/user/me')
        setUser(res.data.user)
      } catch (err) {
        console.error('Failed to load user profile:', err)
      }
    }

    fetchProfile()
  }, [])

  if (!user) {
    return <div className="text-center mt-20 text-gray-600"><Spinner /></div>
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-[#0A4860] mb-6">My Profile</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
        <ProfileField label="Full Name" value={`${user.firstName} ${user.lastName}`} />
        <ProfileField label="Email" value={user.email} />
        <ProfileField label="Phone" value={user.phone || 'Not provided'} />
        <ProfileField label="Gender" value={user.gender || 'Not specified'} />
        <ProfileField label="Address" value={user.address || '—'} />
        <ProfileField label="City" value={user.city || '—'} />
        <ProfileField label="State" value={user.state || '—'} />
        <ProfileField label="ZIP Code" value={user.zip || '—'} />
        {/* <ProfileField label="Role" value={user.role || 'user'} /> */}
      </div>
    </div>
  )
}

function ProfileField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-gray-500 font-medium">{label}</p>
      <p className="text-gray-800">{value}</p>
    </div>
  )
}
