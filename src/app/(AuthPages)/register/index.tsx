"use client";
import React from "react";
import useRegisterForm from "./Hook/useregisterForm";
import { Camera } from "lucide-react";
import AuthRedirect from "@/app/(ReuseableComponents)/authRedirect";

const RegisterForm = () => {
  const {
    formData,
    handleChange,
    handleFileChange,
    handleSubmit,
    licenseFrontName,
    licenseBackName,
    loading,
    error,
    success,
  } = useRegisterForm();

  return (
    <AuthRedirect>
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-5xl md:w-[70%] bg-white rounded-2xl shadow-lg p-8 space-y-8"
      >
        <h2 className="text-3xl font-bold text-[#0A4860] mb-6">
          Loan Application Form
        </h2>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full">
            <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0A4860] transition-all duration-300"
              placeholder="Enter your first name"
            />
          </div>
          <div className="w-full">
            <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0A4860] transition-all duration-300"
              placeholder="Enter your last name"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0A4860] transition-all duration-300"
              placeholder="Enter your email"
            />
          </div>
          <div className="w-full">
            <label htmlFor="ssn" className="block mb-2 text-sm font-medium text-gray-700">SSN</label>
            <input
              type="text"
              name="ssn"
              value={formData.ssn}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0A4860] transition-all duration-300"
              placeholder="Enter your SSN"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full">
            <label htmlFor="licenseFront" className="block mb-2 text-sm font-medium text-gray-700">License Front</label>
            <div className="relative w-full border border-gray-300 bg-gray-50 rounded-lg px-4 py-3 hover:border-[#0A4860] transition-all duration-300">
              <label htmlFor="licenseFront" className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                <Camera className="text-[#0A4860] w-5 h-5" />
                <span>{licenseFrontName || "Upload Front Image"}</span>
              </label>
              <input
                type="file"
                id="licenseFront"
                accept="image/*"
                onChange={(e) => handleFileChange(e, "licenseFront")}
                className="hidden"
              />
            </div>
          </div>

          <div className="w-full">
            <label htmlFor="licenseBack" className="block mb-2 text-sm font-medium text-gray-700">License Back</label>
            <div className="relative w-full border border-gray-300 bg-gray-50 rounded-lg px-4 py-3 hover:border-[#0A4860] transition-all duration-300">
              <label htmlFor="licenseBack" className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                <Camera className="text-[#0A4860] w-5 h-5" />
                <span>{licenseBackName || "Upload Back Image"}</span>
              </label>
              <input
                type="file"
                id="licenseBack"
                accept="image/*"
                onChange={(e) => handleFileChange(e, "licenseBack")}
                className="hidden"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full">
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0A4860] transition-all duration-300"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="w-full">
            <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-700">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0A4860] transition-all duration-300"
              placeholder="Enter your address"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full">
            <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-700">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0A4860] transition-all duration-300"
              placeholder="Enter your city"
            />
          </div>
          <div className="w-full">
            <label htmlFor="state" className="block mb-2 text-sm font-medium text-gray-700">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0A4860] transition-all duration-300"
              placeholder="Enter your state"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full">
            <label htmlFor="zip" className="block mb-2 text-sm font-medium text-gray-700">Zip</label>
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0A4860] transition-all duration-300"
              placeholder="Enter your zip code"
            />
          </div>
          <div className="w-full">
            <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-700">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0A4860] transition-all duration-300"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full">
            <label htmlFor="dob" className="block mb-2 text-sm font-medium text-gray-700">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0A4860] transition-all duration-300"
            />
          </div>
          <div className="w-full">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0A4860] transition-all duration-300"
              placeholder="Enter your password"
            />
          </div>
        </div>

        {error && <p className="text-red-600 text-sm">{error}</p>}
        {success && <p className="text-green-600 text-sm">Application submitted successfully!</p>}

        <div className="pt-6 text-right">
          <button
            type="submit"
            className="bg-[#0A4860] text-white px-8 py-3 rounded-lg font-medium cursor-pointer"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </div>
      </form>
    </div>
    </AuthRedirect>
  );
};

export default RegisterForm;
