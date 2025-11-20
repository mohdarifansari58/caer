import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md relative">
        {/* Close Button */}
        <button className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl font-bold">
          ×
        </button>

        <h1 className="text-3xl font-bold text-center text-[#2f4f2f] mb-6">
          Create Account
        </h1>

        {/* Email Field */}
        <label className="block mb-4">
          <span className="text-gray-700 font-medium">Email</span>
          <div className="flex items-center mt-1 bg-gray-100 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-[#2f4f2f]">
            <CiMail className="text-gray-600 text-xl" />
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none flex-1 ml-3 text-gray-800"
            />
          </div>
        </label>

        {/* Password Field */}
        <label className="block mb-4">
          <span className="text-gray-700 font-medium">Password</span>
          <div className="flex items-center mt-1 bg-gray-100 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-[#2f4f2f]">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="bg-transparent outline-none flex-1 text-gray-800"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="ml-3 text-gray-600 hover:text-black"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </label>

        {/* Confirm Password */}
        <label className="block mb-6">
          <span className="text-gray-700 font-medium">Confirm Password</span>
          <div className="flex items-center mt-1 bg-gray-100 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-[#2f4f2f]">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm your password"
              className="bg-transparent outline-none flex-1 text-gray-800"
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="ml-3 text-gray-600 hover:text-black"
            >
              {showConfirm ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </label>

        {/* Signup Button */}
        <button className="w-full bg-[#2f4f2f] text-white py-3 rounded-lg font-semibold text-lg hover:bg-[#1f3a1f] transition-all shadow-md">
          Sign Up
        </button>

        {/* Bottom text */}
        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <a href="#" className="text-[#2f4f2f] font-semibold hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
