"use client";

import Link from "next/link";
import Image from "next/image";
import HomeImage from "../assets/home.jpg";
import Feature from "./Feature";

export default function Main() {
  return (
    <>
      {/* Hero Section */}

      <Image src={HomeImage} alt="home image" loading="lazy" />
      {/* Features Section */}

      <Feature />

      {/* CTA Section */}
      <section className="bg-[#696FC7] text-white py-16 px-4 ">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Explore?</h2>
          <p className="text-lg mb-8 opacity-90">
            Check out our blog posts and learn more about our services.
          </p>
          <Link
            href="/blog"
            className="inline-block px-8 py-3 bg-[#FFE797] text-[#84994F] font-bold rounded-lg hover:shadow-lg hover:scale-105"
          >
            Visit Blog
          </Link>
        </div>
      </section>
    </>
  );
}
