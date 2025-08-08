import React from 'react'
import LearnMorePage from '.'
import Footer from '../Home/components/footer'
import AuthHeader from '@/app/(AuthPages)/components/AuthHeader'

const page = () => {
  return (
    <div>
        <AuthHeader />
        <LearnMorePage />
        <Footer />
    </div>
  )
}

export default page