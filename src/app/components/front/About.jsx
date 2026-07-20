'use client'
import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle, FaHome, FaUsers, FaTrophy } from "react-icons/fa";
import SectionHeader from "../common/SectionHeader";
import { usePathname } from "next/navigation";

const About = () => {
  const pathname = usePathname();

  const features = [
    "Custom Home Building",
    "Commercial Construction",
    "Remodeling & Renovations",
    "Architectural Design",
    "Project Management",
    "Quality Craftsmanship",
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: FaHome },
    { number: "28", label: "Years Experience", icon: FaTrophy },
    { number: "100%", label: "Client Satisfaction", icon: FaUsers },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl max-h-150">
              <Image
                height={400}
                width={500}
                src="/images/about.jpeg"
                alt="Manacop Construction Services"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div>
            {/* Section Header */}
            <SectionHeader
              title="Your Trusted Partner in"
              subtitle="About Us"
              textAlign=""
              highlightedText="Construction"
              className="mb-5"
            />

            <p className="text-gray-600 leading-relaxed mb-4">
              <span className="font-semibold text-dark">
                Manacop Construction Services 
              </span>
               is a custom home and small scale commercial builder and remodeling
              company dedicated to building high quality and long-lasting homes.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              Our team is made up of architects, designers, project managers,
              and skilled tradesmen who work with homeowners and commercial
              establishments from initial concept to final finishes.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              That means your perfect home, kitchen, bathroom, or business look
              done faster, on budget, and has a dedicated team focused on
              delivering quality and getting every detail right.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <FaCheckCircle className="text-primary text-sm shrink-0" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Learn More Button */}
          { pathname !== '/about' && <Link href="/about">
              <button className="px-8 py-3 rounded-sm font-medium text-white transition-all duration-300 hover:opacity-90 bg-primary">
                Learn More About Us
              </button>
            </Link>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
