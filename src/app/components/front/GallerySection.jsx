"use client";

import { useState } from "react";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";

const galleryItems = [
  { title: "Custom Dining Table", category: "Furniture", tag: "Solid Oak Finish", image: "/images/galleries/custom-dining.avif" },
  { title: "Kitchen Cabinetry", category: "Kitchen", tag: "Modern Walnut Build", image: "/images/galleries/kitchen-cabinet.avif" },
  { title: "Staircase Renovation", category: "Interior", tag: "Reclaimed Wood", image: "/images/galleries/staircase.avif" },
  { title: "Commercial Fit-out", category: "Interior", tag: "Office Interior", image: "/images/galleries/commercial.avif" },
  { title: "Built-in Cabinetry", category: "Furniture", tag: "Living Room Storage", image: "/images/galleries/cabinetry.avif" },
  { title: "Outdoor Deck", category: "Exterior", tag: "Weatherproof Timber", image: "/images/galleries/deck.avif" },
];

const categories = ["All", "Furniture", "Kitchen", "Interior", "Exterior"];

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const handleCardClick = (item) => {
    setSelectedImage(item);
    // TODO: implement popup/modal to show the full image using `selectedImage`
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-sm text-sm font-medium transition-colors ${
                activeFilter === category
                  ? "bg-linear-to-r from-primary to-secondary text-white"
                  : "bg-secondary/10 text-dark hover:bg-secondary/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <button
              key={item.title}
              type="button"
              onClick={() => handleCardClick(item)}
              className="group relative w-full aspect-3/4 rounded-sm overflow-hidden text-left"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes=""
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/0 to-transparent" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/40 text-white text-lg">
                  <FaPlus />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                <p className="text-xs text-white/75">{item.tag}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;