"use client";

import Link from "next/link";

const Hero = () => {


  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/hero.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content - Left Aligned */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div
          className="max-w-3xl transition-all duration-1000"
        >
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Where Timber
            <br />
            <span className="text-primary">Tells a Story</span>
          </h1>
          
          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
            We transform raw timber into heirloom-quality furniture and architectural 
            woodwork. Each piece is meticulously crafted with passion, precision, 
            and an unwavering commitment to excellence.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/gallery">
              <button className="group px-8 py-3.5 rounded-sm font-medium text-white transition-all duration-300 hover:opacity-90 bg-primary flex items-center gap-2">
                <span>Explore Our Portfolio</span>
                <svg 
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </Link>
            
            <Link href="/contact">
              <button className="px-8 py-3.5 rounded-sm font-medium text-white transition-all duration-300 hover:bg-white/20 border border-white/80 hover:border-white flex items-center gap-2">
                <span>Get a Free Quote</span>
              </button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10 max-w-xl">
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white">500+</p>
              <p className="text-sm text-gray-400">Projects Completed</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white">28</p>
              <p className="text-sm text-gray-400">Years of Experience</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white">100%</p>
              <p className="text-sm text-gray-400">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;