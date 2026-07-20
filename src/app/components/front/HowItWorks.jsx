import Image from "next/image";
import {
  FaComments,
  FaDraftingCompass,
  FaIndustry,
  FaTruck,
  FaArrowRight,
} from "react-icons/fa";
import SectionHeader from "../common/SectionHeader";

const HowItWorks = () => {
  const steps = [
    {
      icon: FaComments,
      title: "Consultation",
      description:
        "Share your vision with us and discuss your project goals. We listen carefully to understand your needs, style preferences, and budget requirements.",
    },
    {
      icon: FaDraftingCompass,
      title: "Design & Planning",
      description:
        "We create detailed drawings and help select materials. Our team works closely with you to refine every detail before production begins.",
    },
    {
      icon: FaIndustry,
      title: "Manufacturing",
      description:
        "Skilled craftsmen bring your piece to life with precision. Using premium materials and time-tested techniques, we ensure exceptional quality.",
    },
    {
      icon: FaTruck,
      title: "Delivery & Installation",
      description:
        "We deliver and install with care, on schedule. Our professional team ensures your custom piece is perfectly placed and ready to enjoy.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="How It Works"
          subtitle="Our Process"
          textAlign="center"
          className="mb-12"
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="relative w-full h-80 sm:h-96 lg:h-105 rounded-sm overflow-hidden">
            <Image
              src="/images/how-it-works.jpg"
              alt="Our workshop process"
              fill
              className="object-cover"
            />
          </div>

          {/* Steps */}

          <div className="flex flex-col gap-8 relative">
            {/* Vertical line with linear */}
            <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-linear-to-b from-primary via-secondary/50 to-transparent z-0" />

            {steps.map((step, index) => (
              <div key={index} className="relative flex gap-5">
                {/* Circle with icon */}
                <div className="relative z-10">
                  <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-full bg-linear-to-r from-primary to-secondary text-white text-base shadow-md">
                    <step.icon />
                  </div>
                  {/* Small connecting dot */}
                  {index < steps.length - 1 && (
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-secondary/40 rounded-full"></div>
                  )}
                </div>

                <div className="pt-0.5">
                  <div className="flex items-center gap-3">
                    <h3 className="text-base font-semibold text-dark">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-dark/60 text-sm leading-relaxed mt-1">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
