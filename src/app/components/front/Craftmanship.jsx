import Image from "next/image";
import { FaCheck, FaCheckCircle } from "react-icons/fa";
import SectionHeader from "../common/SectionHeader";

const Craftsmanship = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Content */}
        <div>
          <SectionHeader
            className="mb-5"
            title="Crafted with Precision"
            subtitle="Our Craftsmanship"
            textAlign="left"
          />
          <p className="text-dark/70 text-sm sm:text-base leading-relaxed mb-5">
            Every piece we build goes through a careful process, from material
            selection to the final finish, so what leaves our workshop is made
            to last.
          </p>

          <ul className="flex flex-col">
            <li className="flex items-start gap-4 py-4 border-b border-secondary/30">
              <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-full bg-linear-to-br from-primary to-secondary text-white">
                <FaCheck className="text-sm" />
              </div>
              <div>
                <h4 className="text-dark font-semibold text-sm sm:text-base">
                  Premium Hardwood Selection
                </h4>
                <p className="text-dark/60 text-xs sm:text-sm mt-0.5">
                  Only the finest timber makes the cut
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4 py-4 border-b border-secondary/30">
              <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-full bg-linear-to-br from-primary to-secondary text-white">
                <FaCheck className="text-sm" />
              </div>
              <div>
                <h4 className="text-dark font-semibold text-sm sm:text-base">
                  Precision Joinery
                </h4>
                <p className="text-dark/60 text-xs sm:text-sm mt-0.5">
                  Tight, seamless connections that last
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4 py-4 border-b border-secondary/30">
              <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-full bg-linear-to-br from-primary to-secondary text-white">
                <FaCheck className="text-sm" />
              </div>
              <div>
                <h4 className="text-dark font-semibold text-sm sm:text-base">
                  Hand-Finished Surfaces
                </h4>
                <p className="text-dark/60 text-xs sm:text-sm mt-0.5">
                  Every surface finished with care by hand
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4 py-4 border-b border-secondary/30">
              <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-full bg-linear-to-br from-primary to-secondary text-white">
                <FaCheck className="text-sm" />
              </div>
              <div>
                <h4 className="text-dark font-semibold text-sm sm:text-base">
                  Durable Protective Coatings
                </h4>
                <p className="text-dark/60 text-xs sm:text-sm mt-0.5">
                  Sealed to withstand daily use
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4 py-4">
              <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-full bg-linear-to-br from-primary to-secondary text-white">
                <FaCheck className="text-sm" />
              </div>
              <div>
                <h4 className="text-dark font-semibold text-sm sm:text-base">
                  Built for Generations
                </h4>
                <p className="text-dark/60 text-xs sm:text-sm mt-0.5">
                  Made to be handed down, not replaced
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Image */}
        <div className="relative w-full aspect-4/5 sm:aspect-square rounded-sm overflow-hidden">
          <Image
            src="/images/gallery/gallery-1.avif"
            alt="Craftsmanship in progress"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Craftsmanship;
