import About from "@/app/components/front/About";
import Craftsmanship from "@/app/components/front/Craftmanship";
import CTA from "@/app/components/front/CTA";
import Founder from "@/app/components/front/Founder";
import PageHero from "@/app/components/front/PageHero";
import Team from "@/app/components/front/Team";

const AboutPage = () => {
    return (
        <>
            <PageHero title="About Us"
                description="Learn about our journey, values, and commitment to creating handcrafted furniture that combines timeless design, premium materials, and exceptional craftsmanship."
                image='/images/about-hero.avif'
            />
            <About />
            <Craftsmanship/>
            <Founder/>
            <Team/>
            <CTA />
        </>
    );
};

export default AboutPage;