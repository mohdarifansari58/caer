"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, LogOut, User } from "lucide-react";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { PATHS } from "@/app/config/paths";
import LOGO from "@/app/assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const mainNavLinks = [
    { href: PATHS.HOME, label: "Home" },
    { href: PATHS.BUY, label: "Buy" },
    { href: PATHS.SELL, label: "Sell" },
    { href: PATHS.BLOG, label: "Blog" },
    { href: PATHS.ABOUT, label: "About" },
  ];

  const authLinks = [
    { href: PATHS.LOGIN, label: "Login", style: "text-[#A8BBA3] hover:text-[#84994F]" },
    { href: PATHS.SIGNUP, label: "Sign Up", style: "bg-[#CBF3BB] text-[#84994F] hover:bg-[#84994F] hover:text-white px-4 py-2 rounded-lg font-semibold" },
  ];

  const loggedInLinks = [
    { href: PATHS.DASHBOARD, label: "Dashboard", style: "text-[#696FC7] hover:text-[#84994F] flex items-center gap-2" },
  ];

  useEffect(() => {
    // Check if user is logged in
    const checkAuthStatus = () => {
      const token = localStorage.getItem('authToken');
      setIsLoggedIn(!!token);
    };

    checkAuthStatus();

    // Listen for storage changes (login/logout from other tabs)
    window.addEventListener('storage', checkAuthStatus);

    return () => {
      window.removeEventListener('storage', checkAuthStatus);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
    toast.success('Logged out successfully');
    router.push(PATHS.HOME);
  };

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b-4 border-[#84994F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href={PATHS.HOME} className="flex items-center gap-2 flex-shrink-0">
            <span className="w-10 h-10 rounded-full overflow-hidden shadow-md">
              <Image
                src={LOGO}
                alt="CAER Logo"
                loading="lazy"
                width="75"
                height="75"
                className="border rounded-[50%]"
              />
            </span>
            <span className="font-bold text-2xl text-[#84994F] hidden sm:inline">
              CAER
            </span>
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex gap-12 flex-1 justify-center">
            {mainNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-semibold transition-all duration-300 ${isActive(link.href)
                    ? "text-[#84994F] border-b-3 border-[#84994F] pb-1"
                    : "text-gray-700 hover:text-[#84994F]"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Auth/User Links - Right */}
          <div className="hidden md:flex gap-4 items-center flex-shrink-0">
            {isLoggedIn ? (
              <>
                {loggedInLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`font-medium transition-all duration-300 ${link.style}`}
                  >
                    <User size={18} />
                    {link.label}
                  </Link>
                ))}
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 text-[#DC0E0E] hover:bg-red-50 rounded-lg font-semibold transition-colors"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </>
            ) : (
              authLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-all duration-300 ${link.style}`}
                >
                  {link.label}
                </Link>
              ))
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            {isOpen ? <X size={24} className="text-[#84994F]" /> : <Menu size={24} className="text-[#84994F]" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-gray-200">
            {mainNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg transition-colors font-semibold ${isActive(link.href)
                    ? "bg-[#84994F] text-white"
                    : "text-gray-700 hover:bg-[#FFE797]"
                  }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="border-t border-gray-200 pt-2 mt-2 space-y-2">
              {isLoggedIn ? (
                <>
                  <Link
                    href={PATHS.DASHBOARD}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 px-4 py-3 rounded-lg transition-colors font-semibold text-[#696FC7] hover:bg-gray-100"
                  >
                    <User size={18} />
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="flex items-center gap-2 w-full px-4 py-3 rounded-lg transition-colors font-semibold text-[#DC0E0E] hover:bg-red-50"
                  >
                    <LogOut size={18} />
                    Logout
                  </button>
                </>
              ) : (
                authLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg transition-colors font-semibold text-center ${link.href === PATHS.LOGIN
                        ? "text-[#A8BBA3] hover:bg-gray-100"
                        : "bg-[#CBF3BB] text-[#84994F] hover:bg-[#84994F] hover:text-white"
                      }`}
                  >
                    {link.label}
                  </Link>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}