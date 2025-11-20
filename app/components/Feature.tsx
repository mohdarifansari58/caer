import React from "react";
import Image from "next/image";

const features = [
  {
    title: "House For Rent",
    subtitle: "2 BHK apartment • Near park",
    price: "₹18,000 / mo",
    description:
      "Spacious 2 bedroom apartment with balcony, close to transit and local markets — ideal for families and working professionals.",
    img: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
    tag: "Rent",
    bg: "bg-[#FFE797]",
  },
  {
    title: "House For Sale",
    subtitle: "3 BHK villa • Gated community",
    price: "₹1.25 Cr",
    description:
      "Modern 3 bedroom villa in a secure community with a garden and parking. Great investment with high resale demand.",
    img: "https://images.pexels.com/photos/5524205/pexels-photo-5524205.jpeg",
    tag: "Sale",
    bg: "bg-[#FFDBB6]",
  },
  {
    title: "Buy Your Dream Home",
    subtitle: "4 BHK • Newly built",
    price: "₹2.4 Cr",
    description:
      "Bright, newly built 4 BHK with premium fittings, rooftop access and excellent neighbourhood schools — move-in ready.",
    img: "https://images.pexels.com/photos/5502228/pexels-photo-5502228.jpeg",
    tag: "Buy",
    bg: "bg-[#CBF3BB]",
  },
];

const FeatureCards = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#27491f] mb-12">
          Properties — Rent • Sale • Buy
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <article
              key={idx}
              className={`${f.bg} rounded-2xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300 flex flex-col min-h-[520px]`}
              aria-labelledby={`feature-title-${idx}`}
            >
              {/* Image */}
              <div className="relative h-56 md:h-64 w-full">
                <Image
                  src={f.img}
                  alt={`${f.title} image`}
                  fill={false}
                  width={1200}
                  height={640}
                  className="object-cover w-full h-full"
                  priority={idx === 0}
                />
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3
                      id={`feature-title-${idx}`}
                      className="text-2xl font-bold text-[#27491f]"
                    >
                      {f.title}
                    </h3>
                    <p className="text-sm text-gray-700 mt-1">{f.subtitle}</p>
                  </div>

                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-white/60 text-[#27491f] shadow-sm">
                    {f.tag}
                  </span>
                </div>

                <p className="text-xl font-semibold text-[#1f3a13] mb-4">
                  {f.price}
                </p>

                <p className="text-gray-700 leading-relaxed flex-1">
                  {f.description}
                </p>

                {/* CTA + icons row */}
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-sm">
                      <p className="font-medium">Area</p>
                      <p className="text-gray-600">1200 - 2400 sqft</p>
                    </div>
                    <div className="text-sm">
                      <p className="font-medium">Beds</p>
                      <p className="text-gray-600">2 - 4</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href="#"
                      className="inline-block px-4 py-2 bg-[#27491f] text-white rounded-lg text-sm font-medium shadow hover:brightness-105 transition"
                      role="button"
                    >
                      View Details
                    </a>
                    <button
                      className="inline-flex items-center px-3 py-2 border border-[#27491f] rounded-lg text-sm font-medium bg-white hover:bg-[#f5f8f3] transition"
                      aria-label={`Contact agent for ${f.title}`}
                    >
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
