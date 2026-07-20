
import PageHero from "@/app/components/front/PageHero";
import CTA from "@/app/components/front/CTA";
import GallerySection from "@/app/components/front/GallerySection";
import FeaturedProject from "@/app/components/front/FeaturedProject";

const Gallery = () => {

  return (
    <main>
      <PageHero
        title="Our Gallery"
        description="Explore our finest work and get inspired for your next project."
      />
      <GallerySection />
      <FeaturedProject />
      <CTA />
    </main>
  );
}
export default Gallery;