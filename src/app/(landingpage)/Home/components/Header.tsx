'use client';
import React from 'react';
import 'animate.css'
import Link from 'next/link';

export default function LandingHeader() {
  return (
    <header className="bg-[#0A4860] text-white py-15 px-6 text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0A4860] via-[#0a5c75] to-[#0a6c8c] opacity-60 z-0"></div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight animate__animated animate__fadeInDown">
          Empowering Your <span className="text-yellow-300">Dreams</span> with Swift, Secure Loans
        </h1>
        <p className="mt-4 text-lg md:text-xl font-light max-w-2xl mx-auto">
          LoanSpring makes it easier than ever to get approved. No stress, no delays, just fast, transparent financial support when you need it.
        </p>
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <button className="bg-yellow-300 hover:bg-yellow-400 text-[#0A4860] font-semibold px-6 py-3 rounded-xl transition duration-300 cursor-pointer">
           <Link href={"/register"}>Apply Now</Link>
          </button>
          <button className="border border-white text-white px-6 py-3 rounded-xl hover:bg-white hover:text-[#0A4860] transition duration-300 cursor-pointer">
           <Link href={'/learn-more'}> Learn More</Link>
          </button>
        </div>
      </div>
    </header>
  );
}
