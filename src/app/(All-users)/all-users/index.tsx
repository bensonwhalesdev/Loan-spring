'use client'

import { useEffect, useState } from 'react'
import apiClient from '@/lib/apiClient'
import Spinner from '@/app/(ReuseableComponents)/spinner'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

type User = {
  _id: string
  firstName: string
  lastName: string
  email: string
  dob: string
  ssn: string
  licenseFront: string
  licenseBack: string
  phone: string
  address: string
  city: string
  state: string
  zip: string
  gender: string
  role: string
  createdAt: string
}

function formatImageSrc(str: string) {
  if (!str) return ''
  if (str.startsWith('http') || str.startsWith('data:image')) return str
  return `data:image/jpeg;base64,${str}`
}

export default function AllUsersPage() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await apiClient.get('/user/all')
        setUsers(res.data.users)
      } catch (err: any) {
        setError(err?.response?.data?.message || 'Failed to fetch users')
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  if (loading) return <p className="text-center mt-10"><Spinner /></p>
  if (error) return <p className="text-center text-red-600 mt-10">{error}</p>

  return (
    <div className="w-[95%] mx-auto mt-10">
      <h3 className="text-lg text-[#0A4860] mb-6">
  <Link href="/dashboard" className="flex items-center gap-2 hover:underline hover:text-[#09607d] transition">
    <ArrowLeft className="w-5 h-5" />
    Back
  </Link>
</h3>
      <h1 className="text-3xl font-bold text-[#0A4860] mb-6">All Users</h1>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-auto rounded-xl border border-gray-200">
        <table className="min-w-full bg-white">
          <thead className="bg-[#0A4860] text-white">
            <tr>
              <th className="py-3 px-4 text-left">Firstname</th>
              <th className="py-3 px-4 text-left">Lastname</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Phone</th>
              <th className="py-3 px-4 text-left">DOB(YY/MM/DD)</th>
              <th className="py-3 px-4 text-left">SSN</th>
              <th className="py-3 px-4 text-left">Address</th>
              <th className="py-3 px-4 text-left">Gender</th>
              <th className="py-3 px-4 text-left">License Front</th>
              <th className="py-3 px-4 text-left">License Back</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id} className="border-t border-gray-100 hover:bg-gray-50">
                <td className="py-2 px-4">{user.firstName}</td>
                <td className="py-2 px-4">{user.lastName}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">{user.phone}</td>
                <td className="py-2 px-4">{user.dob}</td>
                <td className="py-2 px-4">{user.ssn}</td>
                <td className="py-2 px-4">
                  {user.address}, {user.city}, {user.state} {user.zip}
                </td>
                <td className="py-2 px-4 capitalize">{user.gender}</td>
                <td className="py-2 px-4">
                  <a href={formatImageSrc(user.licenseFront)} target="_blank" rel="noopener noreferrer">
                    <img src={formatImageSrc(user.licenseFront)} alt="License Front" className="h-14 w-20 object-cover rounded-md border" />
                  </a>
                </td>
                <td className="py-2 px-4">
                  <a href={formatImageSrc(user.licenseBack)} target="_blank" rel="noopener noreferrer">
                    <img src={formatImageSrc(user.licenseBack)} alt="License Back" className="h-14 w-20 object-cover rounded-md border" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden flex flex-col gap-6">
        {users.map(user => (
          <div key={user._id} className="bg-white rounded-xl shadow p-4 border border-gray-200">
            <p><span className="font-semibold">Name:</span> {user.firstName} {user.lastName}</p>
            <p><span className="font-semibold">Email:</span> {user.email}</p>
            <p><span className="font-semibold">Phone:</span> {user.phone}</p>
            <p><span className="font-semibold">DOB:</span> {user.dob}</p>
            <p><span className="font-semibold">SSN:</span> {user.ssn}</p>
            <p><span className="font-semibold">Address:</span> {user.address}, {user.city}, {user.state} {user.zip}</p>
            <p><span className="font-semibold">Gender:</span> {user.gender}</p>

            <div className="flex gap-4 mt-2">
              <div>
                <p className="font-semibold mb-1 text-sm">License Front</p>
                <a href={formatImageSrc(user.licenseFront)} target="_blank">
                  <img src={formatImageSrc(user.licenseFront)} alt="Front" className="h-20 w-28 rounded-md border object-cover" />
                </a>
              </div>
              <div>
                <p className="font-semibold mb-1 text-sm">License Back</p>
                <a href={formatImageSrc(user.licenseBack)} target="_blank">
                  <img src={formatImageSrc(user.licenseBack)} alt="Back" className="h-20 w-28 rounded-md border object-cover" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
