"use client";

import { useState } from "react";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import PageHero from "@/app/components/front/PageHero";
import Craftsmanship from "@/app/components/front/Craftmanship";
import CTA from "@/app/components/front/CTA";
import GallerySection from "@/app/components/front/GallerySection";

const Gallery = () => {

  return (
    <main>
      <PageHero
        title="Our Gallery"
        description="Explore our finest work and get inspired for your next project."
      />
      <GallerySection />
      <CTA />
    </main>
  );
}
export default Gallery;