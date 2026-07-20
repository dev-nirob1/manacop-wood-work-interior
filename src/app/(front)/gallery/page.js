"use client";

import { useState } from "react";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import PageHero from "@/app/components/front/PageHero";
import Craftsmanship from "@/app/components/front/Craftmanship";

const Gallery = ()=> {

  return (
    <main>
      <PageHero
        title="Our Gallery"
        description="Explore our finest work and get inspired for your next project."
      />
      <Craftsmanship />
    </main>
  );
}
export default Gallery;