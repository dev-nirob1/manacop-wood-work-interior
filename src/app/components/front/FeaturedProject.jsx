"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import "swiper/css";
import SectionHeader from "../common/SectionHeader";

const images = [
  "/images/gallery/gallery-1.avif",
  "/images/gallery/gallery-2.avif",
  "/images/gallery/gallery-3.avif",
  "/images/gallery/gallery-4.avif",
];

const projectDetails = [
  { label: "Category", value: "Dining Room" },
  { label: "Material", value: "Solid Walnut" },
  { label: "Finish", value: "Natural Matte" },
  { label: "Style", value: "Contemporary" },
];

const highlights = [
  "Handcrafted Construction",
  "Premium Hardwood",
  "Custom Dimensions",
  "Soft-Close Hardware",
  "Eco-Friendly Finish",
];
const FeaturedProject = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-16 bg-primary/30">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8">
          {/* Image + Thumbnails */}
          <div className="flex flex-col gap-4">
            <div className="relative w-full aspect-4/3 rounded-lg overflow-hidden">
              <Swiper
                modules={[Thumbs]}
                thumbs={{ swiper: thumbsSwiper }}
                className="w-full h-full"
              >
                {images.map((src, index) => (
                  <SwiperSlide key={src} className="w-full! h-full!">
                    <div className="relative w-full h-full">
                      <Image
                        src={src}
                        alt={`Featured project ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={12}
              slidesPerView={4}
              watchSlidesProgress
              className="thumb-swiper w-full"
            >
              {images.map((src, index) => (
                <SwiperSlide key={src} className="w-16! h-16!">
                  <div className="relative w-full h-full rounded-sm overflow-hidden cursor-pointer">
                    <Image
                      src={src}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-5">
            <SectionHeader
              title="Modern Walnut Dining Collection"
              subtitle="Featured Project"
              textAlign="left"
            />

            <p className="text-dark/70 text-sm sm:text-base leading-relaxed">
              Crafted to bring together timeless aesthetics, exceptional
              durability, and everyday functionality. Every detail was carefully
              considered to create a piece that feels both elegant and built to
              last.
            </p>

            {/* Project Details */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 py-4 border-y border-secondary/40">
              {projectDetails.map((detail) => (
                <div key={detail.label}>
                  <p className="text-xs text-dark/80">{detail.label}</p>
                  <p className="text-sm font-bold text-dark">
                    {detail.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((item, index) => (
                <div
                  key={item}
                  className={`flex items-center gap-2 bg-secondary/15 rounded-sm px-3 py-2.5 ${
                    index === highlights.length - 1 &&
                    highlights.length % 2 !== 0
                      ? "col-span-2"
                      : ""
                  }`}
                >
                  <FaCheck className="text-primary text-sm shrink-0" />
                  <span className="text-sm font-medium text-dark">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="w-fit flex items-center gap-2 rounded-sm px-7 py-3 text-white font-medium bg-linear-to-r from-primary to-secondary hover:opacity-90 transition-opacity mt-2"
            >
              Start Your Custom Project <FaArrowRight className="text-sm" />
            </Link>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .thumb-swiper .swiper-slide {
          opacity: 0.5;
          transition: opacity 0.3s;
        }
        .thumb-swiper .swiper-slide-thumb-active {
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default FeaturedProject;
