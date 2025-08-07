'use client';
import { motion } from 'framer-motion';
import { FileText, ShieldCheck, BadgeCheck, Banknote } from 'lucide-react';
import React from 'react';

const steps = [
  {
    title: 'Apply Online',
    description: 'Fill out our secure application form in minutes with basic personal details.',
    icon: <FileText className="w-12 h-12 text-[#0A4860]" />,
  },
  {
    title: 'Verify Identity',
    description: 'Upload necessary documents for identity and eligibility verification.',
    icon: <ShieldCheck className="w-12 h-12 text-[#0A4860]" />,
  },
  {
    title: 'Get Approved',
    description: 'Our system reviews and approves loans in under 24 hours.',
    icon: <BadgeCheck className="w-12 h-12 text-[#0A4860]" />,
  },
  {
    title: 'Receive Funds',
    description: 'Approved loans are disbursed directly to your account swiftly.',
    icon: <Banknote className="w-12 h-12 text-[#0A4860]" />,
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-[#eaf3f6] py-24 px-6">
      <div className="max-w-7xl mx-auto text-center space-y-16">
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A4860]">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            A simple and secure process designed to get you funded fast.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-md shadow-xl border border-gray-200 rounded-2xl p-8 flex flex-col items-center text-center hover:scale-[1.04] transition-transform duration-300 ease-in-out"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-5 bg-[#d2e7ef] p-4 rounded-full">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#0A4860] mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
