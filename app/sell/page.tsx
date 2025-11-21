"use client";

import { Suspense, useState } from "react";
import Image from "next/image";
import {
  Camera,
  MapPin,
  DollarSign,
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  Upload,
} from "lucide-react";
import toast from "react-hot-toast";
import LoadingFallback from "@/components/LoadingFallback";
import SellImage from "@/assets/sell.jpg";

function SellContent() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
    sqft: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success(
        "Property listing submitted successfully! We'll contact you within 24 hours."
      );

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        propertyType: "",
        bedrooms: "",
        bathrooms: "",
        sqft: "",
        description: "",
      });
    } catch (error) {
      toast.error("Failed to submit listing. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: DollarSign,
      title: "Maximum Value",
      description:
        "Get the best price for your property with our expert valuation and market analysis",
      color: "bg-[#CBF3BB]",
    },
    {
      icon: TrendingUp,
      title: "Market Insights",
      description:
        "Access real-time market data, pricing trends, and neighborhood analytics",
      color: "bg-[#FFE797]",
    },
    {
      icon: Users,
      title: "Expert Support",
      description:
        "Professional guidance from experienced real estate agents throughout the process",
      color: "bg-[#FFDBB6]",
    },
    {
      icon: Clock,
      title: "Quick Sale",
      description:
        "Fast and efficient selling process with minimal hassle and maximum convenience",
      color: "bg-[#A8BBA3]",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Free Property Valuation",
      description:
        "Get an accurate, professional valuation of your property based on current market conditions",
      icon: DollarSign,
    },
    {
      step: "02",
      title: "Professional Photography",
      description:
        "High-quality photography and virtual tours to showcase your property's best features",
      icon: Camera,
    },
    {
      step: "03",
      title: "Marketing & Listing",
      description:
        "List your property on multiple platforms and social media for maximum exposure",
      icon: TrendingUp,
    },
    {
      step: "04",
      title: "Manage Viewings",
      description:
        "Handle inquiries, schedule property viewings, and manage potential buyers",
      icon: Users,
    },
    {
      step: "05",
      title: "Close the Deal",
      description:
        "Complete the sale with full legal and financial support from our expert team",
      icon: CheckCircle,
    },
  ];

  return (
    <>
      {/* Hero Section with Background */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={SellImage}
            alt="Sell your property"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Sell Your Property with Confidence
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Get the best value for your property with our expert team, proven
            process, and guaranteed results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() =>
                document
                  .getElementById("valuation-form")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 bg-[#CBF3BB] text-[#84994F] font-bold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Get Free Valuation
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("process-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#84994F] transition-all duration-300"
            >
              Learn Our Process
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#84994F] mb-4">
              Why Sell With CAER?
            </h2>
            <p className="text-xl text-gray-600">
              We provide comprehensive support to maximize your property&apos;s
              value and ensure a smooth sale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className={`${benefit.color} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center`}
              >
                <benefit.icon
                  className="mx-auto text-[#84994F] mb-6"
                  size={56}
                />
                <h3 className="text-xl font-bold text-[#84994F] mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process-section" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#84994F] mb-4">
              Our Proven Selling Process
            </h2>
            <p className="text-xl text-gray-600">
              Simple, transparent steps to sell your property quickly and
              efficiently
            </p>
          </div>

          <div className="space-y-12">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-16 h-16 bg-[#84994F] text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#84994F] mb-2">
                        {step.title}
                      </h3>
                      <step.icon className="text-[#696FC7]" size={24} />
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="w-32 h-32 bg-gradient-to-br from-[#CBF3BB] to-[#84994F] rounded-full flex items-center justify-center shadow-xl">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valuation Form Section */}
      <section
        id="valuation-form"
        className="py-20 px-4 bg-gradient-to-br from-[#84994F] to-[#696FC7] text-white"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get Your Free Property Valuation
            </h2>
            <p className="text-xl opacity-90">
              Fill out the form below and get a professional valuation within 24
              hours
            </p>
          </div>

          {/* Enhanced Contact Form */}
          <div className="bg-white rounded-2xl p-8 text-gray-800 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-bold text-[#84994F] mb-4">
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#84994F] text-black placeholder-gray-400"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#84994F] text-black placeholder-gray-400"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#84994F] text-black placeholder-gray-400"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#84994F] text-black placeholder-gray-400"
                    required
                  />
                </div>
              </div>

              {/* Property Information */}
              <div>
                <h3 className="text-xl font-bold text-[#84994F] mb-4">
                  Property Information
                </h3>
                <div className="relative mb-4">
                  <MapPin
                    className="absolute left-3 top-3 text-gray-400"
                    size={20}
                  />
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Property Address"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#84994F] text-black placeholder-gray-400"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#84994F] text-black"
                    required
                  >
                    <option value="">Property Type</option>
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                    <option value="condo">Condo</option>
                    <option value="villa">Villa</option>
                    <option value="townhouse">Townhouse</option>
                  </select>

                  <select
                    name="bedrooms"
                    value={formData.bedrooms}
                    onChange={handleChange}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#84994F] text-black"
                    required
                  >
                    <option value="">Bedrooms</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5+">5+</option>
                  </select>

                  <select
                    name="bathrooms"
                    value={formData.bathrooms}
                    onChange={handleChange}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#84994F] text-black"
                    required
                  >
                    <option value="">Bathrooms</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5+">5+</option>
                  </select>

                  <input
                    type="number"
                    name="sqft"
                    value={formData.sqft}
                    onChange={handleChange}
                    placeholder="Square Feet"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#84994F] text-black placeholder-gray-400"
                    required
                  />
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <h3 className="text-xl font-bold text-[#84994F] mb-4">
                  Additional Information
                </h3>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Tell us about your property... (special features, recent renovations, etc.)"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#84994F] text-black placeholder-gray-400 resize-none"
                ></textarea>
              </div>

              {/* Photo Upload */}
              <div>
                <h3 className="text-xl font-bold text-[#84994F] mb-4">
                  Property Photos (Optional)
                </h3>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#84994F] transition-colors">
                  <Upload className="mx-auto text-gray-400 mb-4" size={48} />
                  <p className="text-gray-600 mb-2">
                    Drag and drop photos here, or click to browse
                  </p>
                  <p className="text-sm text-gray-500">
                    Upload up to 10 photos (JPG, PNG, max 5MB each)
                  </p>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    className="hidden"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#84994F] text-white font-bold py-4 rounded-lg hover:bg-[#696FC7] transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Get Free Valuation"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#84994F] mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Homeowner",
                text: "CAER helped me sell my house 20% above asking price. Their marketing strategy was incredible!",
                rating: 5,
              },
              {
                name: "Michael Chen",
                role: "Property Investor",
                text: "Professional service from start to finish. They handled everything and kept me informed throughout.",
                rating: 5,
              },
              {
                name: "Emily Davis",
                role: "First-time Seller",
                text: "The team made selling my first property stress-free. Highly recommend their services!",
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-2xl shadow-lg">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">{testimonial.text}</p>
                <div>
                  <p className="font-bold text-[#84994F]">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default function SellPage() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<LoadingFallback />}>
        <SellContent />
      </Suspense>
    </main>
  );
}
