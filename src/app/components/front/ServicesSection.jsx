"use client";

import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import SectionHeader from "../common/SectionHeader";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Design & Project Evaluation",
      description:
        "We analyze your space, understand your needs, and create detailed concepts that balance aesthetics with functionality. From initial consultation to project evaluation, we ensure every detail is planned perfectly before any work begins.",
      included: [
        "Design Consultation",
        "Project Evaluation",
        "Space Analysis",
        "Concept Development",
      ],
      image: "/images/services/services-1.avif",
    },
    {
      id: 2,
      title: "Crafting & Manufacturing",
      description:
        "Our skilled artisans bring your designs to life using time-honored techniques and the finest materials. Every piece is built with precision and care to last generations, combining traditional craftsmanship with modern innovation.",
      included: [
        "Custom Furniture",
        "General Engineering",
        "Wood Works",
        "Modular Cabinetry",
      ],
      image: "/images/services/services-2.avif",
    },
    {
      id: 3,
      title: "Interior & Specialized Solutions",
      description:
        "Complete interior solutions that transform spaces into extraordinary environments. We deliver comprehensive fit-out and finishing services for residential, commercial, and industrial projects with meticulous attention to detail.",
      included: [
        "Kitchen Design & Remodel",
        "Fit Out & Finishing",
        "Industrial Solutions",
        "Interior Design",
      ],
      image: "/images/services/services-3.avif",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader
          className="mb-8"
          subtitle="Our Services"
          title="Comprehensive"
          highlightedText="Solutions"
        />

        {/* Desktop - Z Pattern Layout */}
        <div className="hidden lg:flex flex-col gap-8">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                className={`grid grid-cols-2 gap-16 items-center ${
                  isEven ? "" : "direction-rtl"
                }`}
              >
                {/* Image */}
                <div
                  className={`relative aspect-4/3 overflow-hidden rounded-lg ${
                    isEven ? "order-1" : "order-2"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div
                  className={`flex flex-col gap-4 ${
                    isEven ? "order-2 pr-8" : "order-1 pl-8"
                  }`}
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-dark leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-base text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* List with Icons */}
                  <div className="space-y-2 mt-2">
                    {service.included.map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <FaCheckCircle className="text-primary text-sm shrink-0" />
                        <span className="text-base text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile - Card Layout */}
        <div className="lg:hidden flex flex-col gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* List with Icons */}
                <div className="space-y-2">
                  {service.included.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <FaCheckCircle className="text-primary text-sm shrink-0" />
                      <span className="text-base text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
