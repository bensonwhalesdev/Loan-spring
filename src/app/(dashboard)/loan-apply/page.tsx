'use client'
import React, { useEffect, useState } from 'react'
import LoanApplicationPage from '.'
import apiClient from '@/lib/apiClient';
import Sidebar from '../dashboard/components/SideBar';
import { Menu } from 'lucide-react';
import HeaderBar from '../dashboard/components/HeaderBar';

const Page = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    getLoggedInUser();
  }, []);

  async function getLoggedInUser() {
    try {
      const res = await apiClient.get("/user/me");
      const user = res.data.user;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:relative md:block
        `}
      >
        <Sidebar />
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
        />
      )}

      {/* Main content */}
      <main className="flex-1 flex flex-col">
        {/* HeaderBar with hamburger */}
        <div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
          <HeaderBar />
        </div>

        {/* Main content */}
        <section className="flex flex-col lg:flex-row gap-6 p-4">
          <div className="flex-1">
            <LoanApplicationPage />
          </div>
          
        </section>
      </main>
    </div>
  );
};

export default Page