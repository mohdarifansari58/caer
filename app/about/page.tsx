import { Suspense } from "react";
import Image from "next/image";
import LoadingFallback from "../components/ui/LoadingFallback";
import AboutImage from "../assets/about.jpg";
import User1 from "../assets/user1.jpg";
import User2 from "../assets/user2.jpg";
import User3 from "../assets/user3.jpg";

async function AboutContent() {
  // Simulate data fetching
  await new Promise((resolve) => setTimeout(resolve, 400));
  const members = [
    { name: "Alice Johnson", role: "Lead Developer", image: User1 },
    { name: "Bob Smith", role: "UI/UX Designer", image: User2 },
    { name: "Carol White", role: "Project Manager", image: User3 },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#84994F] mb-6">
          About CAER
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          We&apos;re a team of passionate developers and designers dedicated to
          creating exceptional digital experiences. Our mission is to help
          businesses thrive in the digital age through innovative solutions and
          cutting-edge technology.
        </p>
      </div>

      {/* Mission Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
        <div>
          <h2 className="text-3xl font-bold text-[#84994F] mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 mb-4">
            At CAER, we believe in the power of technology to transform
            businesses. We&apos;re committed to delivering high-quality
            solutions that exceed expectations and drive real results.
          </p>
          <ul className="space-y-3">
            {[
              "Innovation and creativity",
              "Quality and excellence",
              "Customer satisfaction",
              "Continuous improvement",
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#84994F] rounded-full"></div>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={AboutImage}
            alt="Our mission"
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-[#84994F] mb-8 text-center">
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Innovation",
              description: "We embrace new technologies and creative solutions",
              color: "bg-[#FFE797]",
            },
            {
              title: "Integrity",
              description: "We operate with honesty and transparency",
              color: "bg-[#CBF3BB]",
            },
            {
              title: "Excellence",
              description:
                "We strive for the highest quality in everything we do",
              color: "bg-[#FFDBB6]",
            },
          ].map((value, idx) => (
            <div
              key={idx}
              className={`${value.color} p-8 rounded-lg shadow-md`}
            >
              <h3 className="text-xl font-bold text-[#84994F] mb-3">
                {value.title}
              </h3>
              <p className="text-gray-700">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div>
        <h2 className="text-3xl font-bold text-[#84994F] mb-8 text-center">
          Our Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {members.map((member) => (
            <div
              key={member.name}
              className="bg-white border-2 border-[#84994F] rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
            >
              {/* <-- FIXED CIRCLE IMAGE: parent is relative and has explicit size */}
              <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="96px"
                  loading="lazy"
                />
              </div>

              <h3 className="text-xl font-bold text-[#84994F] mb-2">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Suspense fallback={<LoadingFallback />}>
          <AboutContent />
        </Suspense>
      </div>
    </main>
  );
}
