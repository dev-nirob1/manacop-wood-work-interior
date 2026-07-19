import Image from "next/image";
import {
  FaComments,
  FaDraftingCompass,
  FaIndustry,
  FaTruck,
} from "react-icons/fa";
import SectionHeader from "../common/SectionHeader";

const HowItWorks = () => {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="How It Works"
          subtitle="Our Process"
          textAlign="center"
          className="mb-12"
        />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative w-full h-80 sm:h-96 lg:h-[420px] rounded-sm overflow-hidden">
            <Image
              src="/images/how-it-works.jpg"
              alt="Our workshop process"
              fill
              className="object-cover"
            />
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-8 relative">
            <div className="absolute left-6 top-6 bottom-6 w-px bg-secondary/40 z-0" />

            <div className="relative flex gap-4">
              <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-full bg-linear-to-r from-primary to-secondary text-white text-xl z-10">
                <FaComments />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-dark">
                  Consultation
                </h3>
                <p className="text-dark/70 text-sm leading-relaxed">
                  Share your vision with us and discuss your project goals.
                </p>
              </div>
            </div>

            <div className="relative flex gap-4">
              <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-full bg-linear-to-r from-primary to-secondary text-white text-xl z-10">
                <FaDraftingCompass />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-dark">
                  Design & Planning
                </h3>
                <p className="text-dark/70 text-sm leading-relaxed">
                  We create detailed drawings and help select materials.
                </p>
              </div>
            </div>

            <div className="relative flex gap-4">
              <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-full bg-linear-to-r from-primary to-secondary text-white text-xl z-10">
                <FaIndustry />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-dark">
                  Manufacturing
                </h3>
                <p className="text-dark/70 text-sm leading-relaxed">
                  Skilled craftsmen bring your piece to life with precision.
                </p>
              </div>
            </div>

            <div className="relative flex gap-4">
              <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-full bg-linear-to-r from-primary to-secondary text-white text-xl z-10">
                <FaTruck />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-dark">
                  Delivery & Installation
                </h3>
                <p className="text-dark/70 text-sm leading-relaxed">
                  We deliver and install with care, on schedule.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
