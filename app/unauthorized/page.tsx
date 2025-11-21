"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Lock, AlertTriangle } from "lucide-react";
import { PATHS } from "@/app/config/paths";

export default function UnauthorizedPage() {
  const [requestedUrl, setRequestedUrl] = useState<string | null>(null);

  useEffect(() => {
    // Get the requested URL from cookies or URL params
    const urlParams = new URLSearchParams(window.location.search);
    const redirectUrl =
      urlParams.get("redirect") ||
      document.cookie
        .split("; ")
        .find((row) => row.startsWith("redirectUrl="))
        ?.split("=")[1];

    setRequestedUrl(redirectUrl || null);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#FFE797] to-[#84994F] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <div className="relative">
            <Lock size={80} className="mx-auto text-[#DC0E0E] opacity-80" />
            <AlertTriangle
              size={40}
              className="absolute -top-2 -right-2 text-yellow-400"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">401</h1>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Unauthorized Access
        </h2>

        {requestedUrl && (
          <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-6">
            <p className="text-white font-semibold mb-2">
              You tried to access:
            </p>
            <code className="text-yellow-200 bg-black bg-opacity-30 px-3 py-1 rounded text-sm">
              {requestedUrl}
            </code>
          </div>
        )}

        <p className="text-lg text-white opacity-90 mb-8 max-w-md mx-auto">
          You don&apos;t have permission to access this resource. Please log in
          with valid credentials to continue.
        </p>

        <div className="bg-white bg-opacity-10 rounded-lg p-4 mb-8">
          <p className="text-white text-sm mb-2">Demo Credentials:</p>
          <div className="text-yellow-200 text-sm">
            <p>
              <strong>Email:</strong> example@gmail.com
            </p>
            <p>
              <strong>Password:</strong> example@123
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={PATHS.LOGIN}
            className="px-8 py-3 bg-[#A8BBA3] text-white font-bold rounded-lg hover:bg-[#84994F] transition-colors shadow-lg"
          >
            Sign In
          </Link>
          <Link
            href={PATHS.SIGNUP}
            className="px-8 py-3 bg-[#CBF3BB] text-[#84994F] font-bold rounded-lg hover:bg-[#84994F] hover:text-white transition-colors shadow-lg"
          >
            Create Account
          </Link>
          <Link
            href={PATHS.HOME}
            className="px-8 py-3 bg-white text-[#84994F] font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
}
