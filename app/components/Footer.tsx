"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { PATHS } from "@/config/paths";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#9EBC8A] text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">About CAER</h3>
            <p className="text-sm opacity-90">
              Building amazing digital experiences with modern technologies and
              creative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={PATHS.HOME} className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href={PATHS.BLOG} className="hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href={PATHS.ABOUT} className="hover:underline">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@caer.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>123 Main St, City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm opacity-90">
          <p>&copy; {currentYear} CAER. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
