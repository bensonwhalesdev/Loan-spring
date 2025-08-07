'use client'
import Image from 'next/image'
import { DollarSign, Users, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export const TestimonialSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true })
  const [animateStats, setAnimateStats] = useState(false)

  useEffect(() => {
    if (inView) {
      setAnimateStats(true)
    }
  }, [inView])

  return (
    <section className="py-16 px-6 bg-[#F4F8FB]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A4860] mb-6">
            Join over 5 million members
          </h2>

          <div className="flex items-center mb-4 text-yellow-500 space-x-1">
            {Array(5).fill(0).map((_, i) => (
              <Star key={i} fill="currentColor" size={20} />
            ))}
          </div>

          <p className="text-[#0A4860] text-lg leading-relaxed mb-4">
            “Thank you so much for valuing me as a customer, and coming through
            for me and my family at a trying time in this world.”
          </p>
          <p className="text-sm font-semibold text-[#0A4860] mb-6">
            Roselyn, a member from Texas
          </p>

          <button className="px-6 py-3 border border-[#0A4860] text-[#0A4860] rounded-lg font-semibold hover:bg-[#0A4860] hover:text-white transition duration-400 cursor-pointer">
            <Link href={"/register"}>Apply Now</Link>
          </button>

          {/* Stats Section */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={animateStats ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex space-x-8 mt-10"
          >
            <div className="text-center">
              <div className="mx-auto w-12 h-12 flex items-center justify-center bg-green-100 rounded-full mb-2">
                <DollarSign className="text-green-600" />
              </div>
              <p className="font-bold text-[#0A4860]">$100 Billion</p>
              <p className="text-sm text-[#0A4860]">Borrowed</p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mb-2">
                <Users className="text-[#0A4860]" />
              </div>
              <p className="font-bold text-[#0A4860]">5 Million</p>
              <p className="text-sm text-[#0A4860]">Members</p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-full mb-2">
                <Star className="text-yellow-500" />
              </div>
              <p className="font-bold text-[#0A4860]">7K+ Reviews</p>
              <p className="text-sm text-[#0A4860]">Trustpilot</p>
            </div>
          </motion.div>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center relative">
          <div className="bg-[#f4472c] rounded-xl w-full h-full max-w-sm md:max-w-md overflow-hidden">
            <Image
              src="/testi.avif"
              alt="testimonial"
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
