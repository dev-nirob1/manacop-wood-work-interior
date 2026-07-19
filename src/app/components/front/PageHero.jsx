import Image from "next/image";

const PageHero = ({ title, description }) => {
  return (
    <div className="relative min-h-[60vh] flex flex-col justify-center overflow-hidden">
      <Image
        src="/images/hero.jpeg"
        alt={title}
        fill
        priority
        className="object-cover -z-10"
      />
      <div className="absolute inset-0 bg-dark/70 -z-10" />

      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-primary pl-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              {title}
            </h1>
            {description && (
              <p className="text-white/70 mt-2 max-w-xl text-lg">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHero;
