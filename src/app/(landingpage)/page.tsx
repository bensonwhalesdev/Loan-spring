import React from 'react'
import LandingHeader from './Home/components/Header'
import HowItWorksSection from './Home/components/Howitworks'
import TabsSection from './Home/components/tabsection'
import { TestimonialSection } from './Home/components/testimony'
import Footer from './Home/components/footer'
import AuthRedirect from '../(ReuseableComponents)/authRedirect'


const page = () => {
  return (
    <AuthRedirect>
      <div>
        <LandingHeader />
        <TabsSection />
        <HowItWorksSection />
        <TestimonialSection />
        <Footer />
    </div>
    </AuthRedirect>
  )
}

export default page