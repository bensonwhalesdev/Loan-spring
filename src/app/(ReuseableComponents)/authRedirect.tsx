'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import apiClient from '@/lib/apiClient'
import Spinner from './spinner'


type Props = {
  children: React.ReactNode
}

const AuthRedirect = ({ children }: Props) => {
  const router = useRouter()
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await apiClient.get('/user/me')
        if (res?.data?.user) {
          router.replace('/dashboard')
        } else {
          setChecking(false)
        }
      } catch (err) {
        setChecking(false)
      }
    }

    checkAuth()
  }, [router])

  if (checking) return <div className="mt-10 text-center"><Spinner /></div>

  return <>{children}</>
}

export default AuthRedirect
