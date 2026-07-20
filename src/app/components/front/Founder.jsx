import Image from "next/image";
import SectionHeader from "../common/SectionHeader";

const Founder = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-16 bg-secondary/30">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[280px_1fr] gap-10 items-center">
        <div className="relative w-full max-w-xs mx-auto md:mx-0">
          <div className="absolute -top-3 -left-3 w-full h-full border-2 border-primary rounded-sm" />
          <div className="relative w-full aspect-4/5 rounded-sm overflow-hidden">
            <Image
              src="/images/founder.avif"
              alt="Robert Manacop, Founder"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <SectionHeader
          className="mb-8"
            title="Meet Our Founder"
            subtitle="The Craftsman Behind It"
            textAlign="left"
          />{" "}
          <p className="text-xl font-semibold text-dark leading-relaxed mb-6 -mt-2">
            Every piece we build carries a story. My goal has always been to
            create furniture that outlasts trends and becomes part of a family&apos;s
            history.
          </p>
          <h3 className="text-lg font-semibold text-dark">Robert Manacop</h3>
          <p className="text-sm text-dark/60 mb-6">
            Founder and Lead Craftsman
          </p>
          <div className="flex gap-8">
            <div>
              <p className="text-xl font-semibold text-primary">20+</p>
              <p className="text-xs text-dark/60">Years Experience</p>
            </div>
            <div>
              <p className="text-xl font-semibold text-primary">500+</p>
              <p className="text-xs text-dark/60">Projects Delivered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
