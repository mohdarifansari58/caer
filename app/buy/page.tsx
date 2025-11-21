import { Suspense } from "react";
import Image from "next/image";
import {
  Search,
  Filter,
  MapPin,
  Bed,
  Bath,
  Square,
  Heart,
  Star,
} from "lucide-react";
import LoadingFallback from "@/components/LoadingFallback";
import BuyImage from "@/app/assets/buy.jpg";
import Home1 from "@/assets/Home1.jpg";
import Home2 from "@/assets/Home2.jpg";
import Home3 from "@/assets/Home3.jpg";
import Home4 from "@/assets/Home4.jpg";
import Home5 from "@/assets/Home5.jpg";
import Home6 from "@/assets/Home5.jpg";

async function BuyContent() {
  // Simulate data fetching
  await new Promise((resolve) => setTimeout(resolve, 400));

  const properties = [
    {
      id: 1,
      title: "Modern Family Home",
      price: "$750,000",
      originalPrice: "$800,000",
      location: "Downtown District, New York",
      beds: 4,
      baths: 3,
      sqft: "2,400",
      image: Home1,
      featured: true,
      rating: 4.8,
      reviews: 24,
      discount: "6% OFF",
    },
    {
      id: 2,
      title: "Luxury Penthouse",
      price: "$1,200,000",
      originalPrice: "$1,350,000",
      location: "Skyline Heights, Manhattan",
      beds: 3,
      baths: 2,
      sqft: "1,800",
      image: Home2,
      featured: false,
      rating: 4.9,
      reviews: 18,
      discount: "11% OFF",
    },
    {
      id: 3,
      title: "Cozy Townhouse",
      price: "$450,000",
      originalPrice: "$480,000",
      location: "Garden Valley, Brooklyn",
      beds: 3,
      baths: 2,
      sqft: "1,600",
      image: Home3,
      featured: true,
      rating: 4.7,
      reviews: 32,
      discount: "6% OFF",
    },
    {
      id: 4,
      title: "Contemporary Condo",
      price: "$320,000",
      originalPrice: "$350,000",
      location: "Metro Center, Queens",
      beds: 2,
      baths: 1,
      sqft: "1,200",
      image: Home4,
      featured: false,
      rating: 4.6,
      reviews: 15,
      discount: "9% OFF",
    },
    {
      id: 5,
      title: "Spacious Villa",
      price: "$950,000",
      originalPrice: "$1,100,000",
      location: "Hillside Estates, Staten Island",
      beds: 5,
      baths: 4,
      sqft: "3,200",
      image: Home5,
      featured: true,
      rating: 4.9,
      reviews: 41,
      discount: "14% OFF",
    },
    {
      id: 6,
      title: "Urban Loft",
      price: "$280,000",
      originalPrice: "$300,000",
      location: "Arts District, Bronx",
      beds: 1,
      baths: 1,
      sqft: "900",
      image: Home6,
      featured: false,
      rating: 4.5,
      reviews: 12,
      discount: "7% OFF",
    },
  ];

  return (
    <>
      {/* Hero Section with Background */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={BuyImage}
            alt="Beautiful properties"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Find Your Dream Home
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Discover the perfect property from our curated collection of premium
            homes
          </p>

          {/* Advanced Search Bar */}
          <div className="max-w-5xl mx-auto bg-white rounded-2xl p-6 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div className="relative">
                <Search
                  className="absolute left-3 top-3 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Enter location or property type..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#84994F] text-black placeholder-gray-400"
                />
              </div>
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#84994F] text-black">
                <option>Price Range</option>
                <option>$0 - $300k</option>
                <option>$300k - $600k</option>
                <option>$600k - $1M</option>
                <option>$1M+</option>
              </select>
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#84994F] text-black">
                <option>Property Type</option>
                <option>House</option>
                <option>Apartment</option>
                <option>Condo</option>
                <option>Villa</option>
              </select>
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#84994F] text-black">
                <option>Bedrooms</option>
                <option>1+</option>
                <option>2+</option>
                <option>3+</option>
                <option>4+</option>
              </select>
            </div>
            <button className="w-full md:w-auto px-12 py-3 bg-[#84994F] text-white font-bold rounded-lg hover:bg-[#696FC7] transition-colors shadow-lg hover:shadow-xl">
              Search Properties
            </button>
          </div>
        </div>
      </section>

      {/* Filters & Stats */}
      <section className="py-8 px-4 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 px-6 py-3 border-2 border-[#84994F] text-[#84994F] rounded-lg hover:bg-[#84994F] hover:text-white transition-colors font-semibold">
                <Filter size={16} />
                All Filters
              </button>
              <button className="px-6 py-3 bg-[#CBF3BB] text-[#84994F] rounded-lg font-semibold hover:bg-[#84994F] hover:text-white transition-colors">
                For Sale
              </button>
              <button className="px-6 py-3 border border-gray-300 rounded-lg hover:border-[#84994F] hover:text-[#84994F] transition-colors font-semibold">
                Featured Only
              </button>
              <button className="px-6 py-3 border border-gray-300 rounded-lg hover:border-[#84994F] hover:text-[#84994F] transition-colors font-semibold">
                Price: Low to High
              </button>
            </div>
            <div className="text-gray-600 font-semibold">
              <span className="text-2xl font-bold text-[#84994F]">
                {properties.length}
              </span>{" "}
              properties found
            </div>
          </div>
        </div>
      </section>

      {/* Premium Properties Grid */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-[#CBF3BB] text-[#84994F] px-6 py-2 rounded-full text-sm font-bold mb-4">
              PREMIUM COLLECTION
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-[#84994F] mb-6">
              Premium Properties
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our handpicked collection of luxury homes featuring the
              finest amenities, prime locations, and exceptional value in
              today&apos;s market
            </p>
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {properties.map((property, index) => (
              <div
                key={property.id}
                className={`group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                  index === 0 ? "lg:col-span-2 xl:col-span-1" : ""
                } hover:-translate-y-2`}
              >
                {/* Property Image */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Top Badges */}
                  <div className="absolute top-6 left-6 flex flex-col gap-2">
                    {property.featured && (
                      <div className="bg-gradient-to-r from-[#DC0E0E] to-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        ⭐ Featured
                      </div>
                    )}
                    <div className="bg-gradient-to-r from-[#CBF3BB] to-green-200 text-[#84994F] px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      🔥 {property.discount}
                    </div>
                  </div>

                  {/* Heart & Share Icons */}
                  <div className="absolute top-6 right-6 flex flex-col gap-3">
                    <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 group/heart">
                      <Heart
                        size={20}
                        className="text-gray-600 group-hover/heart:text-red-500 group-hover/heart:fill-current transition-colors"
                      />
                    </button>
                    <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-gray-600"
                      >
                        <path
                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={`${
                            i < Math.floor(property.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-bold text-gray-800">
                      {property.rating}
                    </span>
                    <span className="text-xs text-gray-600">
                      ({property.reviews} reviews)
                    </span>
                  </div>

                  {/* Quick View Button */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <button className="px-6 py-2 bg-white text-[#84994F] font-bold rounded-full shadow-lg hover:bg-[#84994F] hover:text-white transition-colors">
                      Quick View
                    </button>
                  </div>
                </div>

                {/* Property Details */}
                <div className="p-8">
                  {/* Location */}
                  <div className="flex items-center gap-2 text-gray-500 mb-3">
                    <MapPin size={16} className="text-[#84994F]" />
                    <span className="text-sm font-medium">
                      {property.location}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#84994F] transition-colors cursor-pointer">
                    {property.title}
                  </h3>

                  {/* Property Features */}
                  <div className="flex items-center gap-6 text-gray-600 text-sm mb-6">
                    <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
                      <Bed size={16} className="text-[#84994F]" />
                      <span className="font-medium">{property.beds} beds</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
                      <Bath size={16} className="text-[#84994F]" />
                      <span className="font-medium">
                        {property.baths} baths
                      </span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
                      <Square size={16} className="text-[#84994F]" />
                      <span className="font-medium">{property.sqft} sqft</span>
                    </div>
                  </div>

                  {/* Price Section */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-4xl font-bold text-[#696FC7]">
                        {property.price}
                      </span>
                      <span className="text-xl text-gray-400 line-through">
                        {property.originalPrice}
                      </span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-bold">
                        SAVE {property.discount}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>
                        Price per sqft:{" "}
                        <strong>
                          $
                          {Math.round(
                            parseInt(property.price.replace(/[$,]/g, "")) /
                              parseInt(property.sqft.replace(",", ""))
                          )}
                        </strong>
                      </span>
                      <span className="text-green-600 font-semibold">
                        💰 Great Deal
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 px-6 py-4 bg-gradient-to-r from-[#84994F] to-[#696FC7] text-white font-bold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
                      View Details
                    </button>
                    <button className="px-6 py-4 border-2 border-[#84994F] text-[#84994F] font-bold rounded-xl hover:bg-[#84994F] hover:text-white transition-all duration-300 hover:scale-105">
                      📅 Tour
                    </button>
                  </div>

                  {/* Additional Info */}
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                    <span>Listed 2 days ago</span>
                    <span>ID: #{property.id}001</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Section */}
          <div className="text-center">
            <div className="inline-flex items-center gap-4 bg-white rounded-2xl p-2 shadow-lg">
              <button className="px-8 py-4 bg-gradient-to-r from-[#CBF3BB] to-green-200 text-[#84994F] font-bold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
                Load More Properties
              </button>
              <span className="text-gray-600 px-4">or</span>
              <button className="px-8 py-4 border-2 border-[#84994F] text-[#84994F] font-bold rounded-xl hover:bg-[#84994F] hover:text-white transition-all duration-300">
                View All ({properties.length * 3}+ properties)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#84994F] mb-12">
            Why Buy With CAER?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Verified Properties",
                description:
                  "All properties are thoroughly verified and inspected",
                color: "bg-[#FFE797]",
              },
              {
                title: "Best Prices",
                description:
                  "Competitive pricing with exclusive deals and discounts",
                color: "bg-[#FFDBB6]",
              },
              {
                title: "Expert Support",
                description: "24/7 support from real estate professionals",
                color: "bg-[#CBF3BB]",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className={`${feature.color} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
              >
                <h3 className="text-2xl font-bold text-[#84994F] mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default function BuyPage() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<LoadingFallback />}>
        <BuyContent />
      </Suspense>
    </main>
  );
}
