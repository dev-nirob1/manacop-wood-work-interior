import { FaTree, FaTools, FaPalette, FaHandshake } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: FaTree,
      title: "Premium Materials",
      description: "We hand-select the finest timber and materials to ensure durability, beauty, and long-lasting quality in every project.",
    },
    {
      icon: FaTools,
      title: "Expert Craftsmanship",
      description: "Our master craftsmen bring decades of experience and attention to detail, creating pieces that are truly works of art.",
    },
    {
      icon: FaPalette,
      title: "Custom Designs",
      description: "We work closely with you to create bespoke pieces that perfectly match your vision, style, and functional needs.",
    },
    {
      icon: FaHandshake,
      title: "Reliable Service",
      description: "From consultation to completion, we provide transparent communication, on-time delivery, and exceptional customer care.",
    },
  ];

  return (
    <section className="w-full bg-primary/20 py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark">
            Why Choose <span className="text-primary">Us</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Cards Grid - 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center gap-4 p-6 rounded-sm border border-secondary/30 bg-white/50 hover:bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-sm bg-gradient-to-r from-primary to-secondary text-white text-2xl">
                  <Icon />
                </div>
                <h3 className="text-lg font-semibold text-dark">{feature.title}</h3>
                <p className="text-dark/70 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;