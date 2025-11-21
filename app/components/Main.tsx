"use client";

import Link from "next/link";
import Image from "next/image";
import { PATHS } from "@/app/config/paths";
import HomeImage from "@/assets/main2.jpg";
import Property1 from "@/assets/Property1.jpg";
import Property2 from "@/assets/Property2.jpg";
import Property3 from "@/assets/Property3.jpg";

export default function Main() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={HomeImage}
            alt="Beautiful home"
            fill
            className="object-cover rounded-2xl"
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Find Your Dream Home
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Discover the perfect property with our expert guidance and
            comprehensive listings
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={PATHS.BUY}
              className="px-8 py-4 bg-[#CBF3BB] text-[#84994F] font-bold rounded-lg hover:shadow-lg hover:scale-105 text-center transition-all duration-300"
            >
              Browse Properties
            </Link>
            <Link
              href={PATHS.SELL}
              className="px-8 py-4 bg-[#FFE797] text-[#84994F] font-bold rounded-lg hover:shadow-lg hover:scale-105 text-center transition-all duration-300"
            >
              Sell Your Property
            </Link>
            <Link
              href={PATHS.DASHBOARD}
              className="px-8 py-4 bg-[#696FC7] text-white font-bold rounded-lg hover:shadow-lg hover:scale-105 text-center transition-all duration-300"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#84994F] mb-16">
            Why Choose CAER?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Guidance",
                description:
                  "Professional real estate experts to guide you through every step",
                color: "bg-[#FFE797]",
                textColor: "text-[#84994F]",
              },
              {
                title: "Best Prices",
                description:
                  "Competitive pricing and the best deals in the market",
                color: "bg-[#FFDBB6]",
                textColor: "text-[#84994F]",
              },
              {
                title: "Trusted Service",
                description:
                  "Years of experience and thousands of satisfied customers",
                color: "bg-[#CBF3BB]",
                textColor: "text-[#84994F]",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className={`${feature.color} p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105`}
              >
                <h3 className={`text-2xl font-bold ${feature.textColor} mb-3`}>
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#84994F] mb-16">
            Properties — Rent • Sale • Buy
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Modern Apartment",
                price: "$2,500/mo",
                type: "Rent",
                image: Property1,
                color: "bg-[#A8BBA3]",
              },
              {
                title: "Luxury Villa",
                price: "$850,000",
                type: "Sale",
                image: Property2,
                color: "bg-[#CBF3BB]",
              },
              {
                title: "Cozy Studio",
                price: "$1,200/mo",
                type: "Buy",
                image: Property3,
                color: "bg-[#FFDBB6]",
              },
            ].map((property, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                {/* Property Image */}
                <div className="relative h-56 overflow-hidden bg-gray-300">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div
                    className={`absolute top-4 right-4 ${property.color} text-white px-4 py-2 rounded-full font-bold text-sm shadow-md`}
                  >
                    {property.type}
                  </div>
                </div>

                {/* Property Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#84994F] mb-2">
                    {property.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Premium location with modern amenities and excellent
                    connectivity
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-[#696FC7]">
                      {property.price}
                    </span>
                    <button className="px-6 py-2 bg-[#84994F] text-white font-bold rounded-lg hover:bg-[#696FC7] transition-colors duration-300 shadow-md hover:shadow-lg">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href={PATHS.BUY}
              className="px-8 py-3 bg-[#84994F] text-white font-bold rounded-lg hover:bg-[#696FC7] transition-colors shadow-md hover:shadow-lg"
            >
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=" text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers and find your perfect property
            today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={PATHS.SIGNUP}
              className="px-8 py-4 bg-[#CBF3BB] text-[#84994F] font-bold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Get Started
            </Link>
            <Link
              href={PATHS.BLOG}
              className="px-8 py-4 bg-[#FFE797] text-[#84994F] font-bold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
