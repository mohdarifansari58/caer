"use client";
import React, { useState } from "react";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md relative">
        {/* Close Button */}
        <button className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl font-bold">
          ×
        </button>

        {/* Title */}
        <div className="flex flex-col items-center mb-6">
          <div className="bg-[#2f4f2f]/10 p-3 rounded-full mb-3">
            <User className="text-[#2f4f2f]" size={32} />
          </div>
          <h1 className="text-3xl font-bold text-[#2f4f2f]">Login</h1>
        </div>

        {/* Email Field */}
        <label className="block mb-4">
          <span className="text-gray-700 font-medium">Email</span>
          <div className="flex items-center mt-1 bg-gray-100 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-[#2f4f2f]">
            <Mail className="text-gray-600" size={20} />
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none flex-1 ml-3 text-gray-800"
            />
          </div>
        </label>

        {/* Password Field */}
        <label className="block mb-6">
          <span className="text-gray-700 font-medium">Password</span>
          <div className="flex items-center mt-1 bg-gray-100 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-[#2f4f2f]">
            <Lock className="text-gray-600" size={20} />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="bg-transparent outline-none flex-1 ml-3 text-gray-800"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="ml-3 text-gray-600 hover:text-black"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </label>

        {/* Login Button */}
        <button className="w-full bg-[#2f4f2f] text-white py-3 rounded-lg font-semibold text-lg hover:bg-[#1f3a1f] transition-all shadow-md">
          Log In
        </button>

        {/* Bottom Text */}
        <p className="text-center mt-4 text-gray-600">
          Don’t have an account?{" "}
          <a href="#" className="text-[#2f4f2f] font-semibold hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
