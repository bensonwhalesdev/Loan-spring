"use client";
import { useEffect, useState } from "react";
import { Bell, History } from "lucide-react";
import Image from "next/image";
import apiClient from "@/lib/apiClient";

type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
};

const HeaderBar = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    getLoggedInUser();
  }, []);

  async function getLoggedInUser() {
    try {
      const res = await apiClient.get("/user/me");
      setUser(res.data.user);
    } catch (error) {
      console.error("Failed to fetch user:", error);
    }
  }

  return (
    <header className="w-full h-18 bg-white border-b border-gray-200 shadow-sm flex items-center justify-between px-6">
      {/* Left: Greeting */}
      <h1 className="text-lg md:text-xl font-semibold text-[#0A4860]">
        Welcome, {user?.firstName || "User"}
      </h1>

      {/* Right: Icons + Avatar */}
      <div className="flex items-center gap-4">
        <button className="relative p-2 text-gray-600 hover:text-[#0A4860] transition">
          <History className="w-5 h-5" />
        </button>
        <button className="relative p-2 text-gray-600 hover:text-[#0A4860] transition">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 inline-block w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
        </button>
        {/* <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-gray-200">
          <Image
            src="/avatar.png"
            alt="User Avatar"
            width={36}
            height={36}
            className="object-cover w-full h-full"
          />
        </div> */}
      </div>
    </header>
  );
};

export default HeaderBar;
