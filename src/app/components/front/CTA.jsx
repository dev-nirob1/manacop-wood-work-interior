import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="relative w-full py-24 bg-dark text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cta.png"
          alt="Premium woodworking banner background"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight">
          Ready to Bring Heirloom <br className="hidden sm:inline" />
          <span className="font-semibold text-primary">Quality</span> to Your Space?
        </h2>

        <p className="max-w-xl text-base sm:text-lg text-white/80 font-light">
          Every custom piece begins with a conversation. Share your vision with us, and let&apos;s craft something designed to last generations.
        </p>

        <Link
          href="/contact"
          className="group flex items-center gap-3 rounded-sm bg-primary px-8 py-4 mt-4 text-sm font-semibold uppercase tracking-wider hover:bg-primary/90 transition"
        >
          <span>Book A Consultation</span>
          <FaArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};

export default CTA;