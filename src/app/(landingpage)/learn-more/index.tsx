'use client'

import React from 'react'
import Link from 'next/link'

const LearnMorePage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-12 lg:px-24">
      <div className="max-w-5xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold text-center text-primary">Learn More About LoanSpring</h1>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">What is LoanSpring?</h2>
          <p>
            LoanSpring is a fast, flexible, and secure platform where users can apply for short-term personal loans
            with ease. Whether it’s an emergency, a quick purchase, or a financial gap — we’re here to help.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">How It Works</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Create an account and complete your application.</li>
            <li>Submit required documents (ID, income proof, etc.).</li>
            <li>We review your credit score and application.</li>
            <li>Once approved, funds are disbursed within 24–48 hours.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Who Can Apply?</h2>
          <p>
            Anyone 18+ with a valid government-issued ID, consistent income, and a verifiable bank account can apply.
            We assess applications fairly, considering both your credit score and financial history.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Why Choose LoanSpring?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Quick online application</li>
            <li>Flexible repayment plans</li>
            <li>No hidden fees</li>
            <li>24/7 customer support</li>
            <li>Secure and encrypted platform</li>
          </ul>
        </section>

        {/* <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Need Help?</h2>
          <p>
            Our support team is always ready to assist you. Reach out to us via our{' '}
            <Link href="/contact" className="text-blue-600 underline">
              contact page
            </Link>{' '}
            or email us at{' '}
            <a href="mailto:support@loanspring.com" className="text-blue-600 underline">
              support@loanspring.com
            </a>
            .
          </p>
        </section> */}

        <div className="text-center">
          <Link
            href="/register"
            className="bg-yellow-300 hover:bg-yellow-400 text-[#0A4860] font-semibold px-6 py-3 rounded-xl transition duration-300 cursor-pointer"
          >
            Start Your Application
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LearnMorePage
