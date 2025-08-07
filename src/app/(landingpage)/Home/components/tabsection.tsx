'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const tabs = ['Personal Loan', 'Auto Refinancing'];

export default function TabsSection() {
  const [activeTab, setActiveTab] = useState('Personal Loan');

  return (
    <section className="bg-[#f4f8f9] py-15 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center gap-6 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-lg font-semibold px-5 py-2 rounded-xl border transition-all duration-300 cursor-pointer ${
                activeTab === tab
                  ? 'bg-[#0A4860] text-white border-[#0A4860]'
                  : 'bg-white text-[#0A4860] border-[#ccc] hover:bg-[#e2eef3]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          className="flex flex-col md:flex-row items-center gap-10 bg-white rounded-2xl shadow-lg p-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full md:w-1/2">
            <Image
              src={
                activeTab === 'Personal Loan'
                  ? '/personal.avif'
                  : '/auto.avif'
              }
              alt={activeTab}
              width={600}
              height={400}
              className="rounded-xl object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 text-[#0A4860]">
            <h3 className="text-2xl font-bold mb-4">
              {activeTab === 'Personal Loan'
                ? 'Up to $60,000 in just a few clicks'
                : 'Refinance and drive away with savings'}
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              {activeTab === 'Personal Loan'
                ? 'With the ability to choose a loan amount of up to $60,000, LendingClub offers fixed rates and a monthly repayment plan to fit within your budget. We understand the importance of getting the money you need, so we work to have funds disbursed to you quickly upon loan approval.'
                : 'Put more money back in your pocket by refinancing your car loan with LendingClub. There are no origination fees or prepayment penalties with LendingClub auto loan refinancing, and checking your rate will not impact your credit score.'}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
