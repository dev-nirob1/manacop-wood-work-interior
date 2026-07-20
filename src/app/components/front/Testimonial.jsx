"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaQuoteLeft, FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import SectionHeader from "../common/SectionHeader";

const testimonials = [
  {
    name: "Sarah Thompson",
    role: "Kitchen Remodel",
    image: "/images/testimonials/profile-1.avif",
    quote:
      "Manacop transformed our kitchen with craftsmanship we've never seen before. Every joint, every finish, feels like it was made to last a lifetime.",
  },
  {
    name: "James Carter",
    role: "Custom Cabinetry",
    image: "/images/testimonials/profile-2.avif",
    quote:
      "From the first consultation to final installation, the team was professional, on time, and the woodwork speaks for itself. Truly heirloom quality.",
  },
  {
    name: "Nadia Rahman",
    role: "Commercial Fit-out",
    image: "/images/testimonials/profile-3.avif",
    quote:
      "We wanted something custom for our office space and Manacop delivered beyond expectations. The attention to detail is unmatched.",
  },
  {
    name: "Michael Reyes",
    role: "Staircase Renovation",
    image: "/images/testimonials/profile-4.avif",
    quote:
      "Reliable, honest, and skilled. They rebuilt our staircase and it's now the centerpiece of our home. Couldn't be happier.",
  },
];

const Testimonials = () => {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  return (
    <section className="py-16 px-4 sm:px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <SectionHeader
          title="What Our Clients Say"
          subtitle="Client Stories"
          textAlign="center"
        />

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation={{ prevEl, nextEl }}
          breakpoints={{
            1024: { slidesPerView: 2 },
          }}
          className="w-full"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.name}>
              <div className="relative h-full flex flex-col gap-4 p-8 rounded-sm border border-secondary bg-white">
                <FaQuoteLeft className="text-3xl text-primary/30" />
                <p className="text-dark leading-relaxed">
                  {item.quote}
                </p>
                <div className="flex gap-1 text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="mt-auto pt-4 border-t border-secondary/20 flex items-center gap-3">
                  <div className="relative w-11 h-11 shrink-0 rounded-full overflow-hidden">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark">{item.name}</h4>
                    <p className="text-xs text-dark/50">{item.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center gap-4">
          <button
            type="button"
            ref={(node) => setPrevEl(node)}
            aria-label="Previous testimonial"
            className="w-11 h-11 flex items-center justify-center rounded-sm border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
          >
            <FaArrowLeft />
          </button>
          <button
            type="button"
            ref={(node) => setNextEl(node)}
            aria-label="Next testimonial"
            className="w-11 h-11 flex items-center justify-center rounded-sm border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;