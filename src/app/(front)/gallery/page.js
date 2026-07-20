
import PageHero from "@/app/components/front/PageHero";
import CTA from "@/app/components/front/CTA";
import GallerySection from "@/app/components/front/GallerySection";
import FeaturedProject from "@/app/components/front/FeaturedProject";

const Gallery = () => {

  return (
    <main>
      <PageHero
        title="Our Gallery"
        description="Explore our collection of custom furniture and interior projects, showcasing timeless designs, skilled craftsmanship, and attention to every detail."
        image="/images/gallery-hero.avif"
      />
      <GallerySection />
      <FeaturedProject />
      <CTA />
    </main>
  );
}
export default Gallery;