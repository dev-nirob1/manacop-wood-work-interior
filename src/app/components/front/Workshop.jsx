import Image from "next/image";
import SectionHeader from "../common/SectionHeader";

const workshopItems = [
  {
    title: "Wide Workshop Floor",
    tag: "Main Workspace",
    image: "/images/workshop/workshop.avif",
  },
  {
    title: "Precision Tools",
    tag: "Equipment",
    image: "/images/workshop/tools.avif",
  },
  {
    title: "Work in Progress",
    tag: "Cutting and Shaping",
    image: "/images/workshop/working.avif",
  },
  {
    title: "Team at Work",
    tag: "Craftsmanship in Action",
    image: "/images/workshop/craftmanship.avif",
  },
  {
    title: "Finishing Station",
    tag: "Sanding and Coating",
    image: "/images/workshop/finishing.avif",
  },
  {
    title: "Finished Piece",
    tag: "Ready for Delivery",
    image: "/images/workshop/workshop-3.avif",
  },
];

const Workshop = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <SectionHeader
          title="Our Workshop"
          subtitle="Where Every Piece Comes to Life"
          textAlign="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workshopItems.map((item) => (
            <div
              key={item.title}
              className="group relative w-full aspect-3/4 rounded-sm overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/0 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-sm font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-white/75">{item.tag}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workshop;
