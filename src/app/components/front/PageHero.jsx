import Image from "next/image";

const PageHero = ({ title, image, description }) => {
  return (
    <div className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden">
      <Image
        src={`${image ? image : "/images/about-hero.avif"}`}
        alt={title}
        fill
        priority
        className="object-cover -z-10"
      />

      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-white p-8 max-w-xl bg-primary/70">
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              {title}
            </h1>
            {description && (
              <p className="text-white mt-2 text-lg">{description}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHero;
