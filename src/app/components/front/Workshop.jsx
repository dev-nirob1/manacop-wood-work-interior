import Image from "next/image";
import SectionHeader from "../common/SectionHeader";

const Workshop = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <SectionHeader
          title="Our Workshop"
          subtitle="Where Every Piece Comes to Life"
          textAlign="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-dark">
              A Space Built for Craft
            </h3>
            <p className="text-dark/70 text-sm sm:text-base leading-relaxed">
              Every piece we build starts here. Our workshop is where raw
              materials become furniture that lasts for generations, shaped by
              hands, tools, and years of experience.
            </p>

            <div className="relative w-full aspect-square rounded-xl overflow-hidden mt-2">
              <Image
                src="/images/about.jpeg"
                alt="Workshop wide shot"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative w-full aspect-square rounded-xl overflow-hidden">
              <Image
                src="/images/about.jpeg"
                alt="Tools and equipment"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative w-full aspect-square rounded-xl overflow-hidden">
              <Image
                src="/images/about.jpeg"
                alt="Work in progress"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative w-full aspect-square rounded-xl overflow-hidden">
              <Image
                src="/images/about.jpeg"
                alt="Team at work"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative w-full aspect-square rounded-xl overflow-hidden">
              <Image
                src="/images/about.jpeg"
                alt="Finished piece"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workshop;