"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaQuoteLeft, FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import SectionHeader from "../common/SectionHeader";

const Testimonials = () => {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  return (
    <section className="py-16 px-4 sm:px-6 bg-secondary/10">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <SectionHeader
          title="What Our Clients Say"
          subTitle="Client Stories"
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
          <SwiperSlide>
            <div className="relative h-full flex flex-col gap-4 bg-white p-8 rounded-sm border border-secondary/30">
              <FaQuoteLeft className="text-3xl text-primary/30" />
              <p className="text-dark/70 text-sm leading-relaxed">
                Manacop transformed our kitchen with craftsmanship we've never
                seen before. Every joint, every finish, feels like it was made
                to last a lifetime.
              </p>
              <div className="flex gap-1 text-primary">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-auto pt-4 border-t border-secondary/20">
                <h4 className="font-semibold text-dark">Sarah Thompson</h4>
                <p className="text-xs text-dark/50">Kitchen Remodel</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative h-full flex flex-col gap-4 bg-white p-8 rounded-sm border border-secondary/30">
              <FaQuoteLeft className="text-3xl text-primary/30" />
              <p className="text-dark/70 text-sm leading-relaxed">
                From the first consultation to final installation, the team was
                professional, on time, and the woodwork speaks for itself. Truly
                heirloom quality.
              </p>
              <div className="flex gap-1 text-primary">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-auto pt-4 border-t border-secondary/20">
                <h4 className="font-semibold text-dark">James Carter</h4>
                <p className="text-xs text-dark/50">Custom Cabinetry</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative h-full flex flex-col gap-4 bg-white p-8 rounded-sm border border-secondary/30">
              <FaQuoteLeft className="text-3xl text-primary/30" />
              <p className="text-dark/70 text-sm leading-relaxed">
                We wanted something custom for our office space and Manacop
                delivered beyond expectations. The attention to detail is
                unmatched.
              </p>
              <div className="flex gap-1 text-primary">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-auto pt-4 border-t border-secondary/20">
                <h4 className="font-semibold text-dark">Nadia Rahman</h4>
                <p className="text-xs text-dark/50">Commercial Fit-out</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative h-full flex flex-col gap-4 bg-white p-8 rounded-sm border border-secondary/30">
              <FaQuoteLeft className="text-3xl text-primary/30" />
              <p className="text-dark/70 text-sm leading-relaxed">
                Reliable, honest, and skilled. They rebuilt our staircase and
                it's now the centerpiece of our home. Couldn't be happier.
              </p>
              <div className="flex gap-1 text-primary">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-auto pt-4 border-t border-secondary/20">
                <h4 className="font-semibold text-dark">Michael Reyes</h4>
                <p className="text-xs text-dark/50">Staircase Renovation</p>
              </div>
            </div>
          </SwiperSlide>
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
