import About from "@/app/components/front/About";
import CTA from "@/app/components/front/CTA";
import Founder from "@/app/components/front/Founder";
import PageHero from "@/app/components/front/PageHero";

const AboutPage = () => {
    return (
        <>
            <PageHero title="About Us"
                description="Discover our story and craftsmanship."
                image='/images/about-hero.avif'
            />
            <About />
            <Founder/>

            <CTA />
        </>
    );
};

export default AboutPage;