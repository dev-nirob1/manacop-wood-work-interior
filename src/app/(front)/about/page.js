import About from "@/app/components/front/About";
import CTA from "@/app/components/front/CTA";
import Founder from "@/app/components/front/Founder";
import PageHero from "@/app/components/front/PageHero";
import Team from "@/app/components/front/Team";
// import Workshop from "@/app/components/front/Workshop";

const AboutPage = () => {
    return (
        <>
            <PageHero title="About Us"
                description="Discover our story and craftsmanship."
                image='/images/about-hero.avif'
            />
            <About />
            <Founder/>
            <Team/>
            {/* <Workshop/> */}

            <CTA />
        </>
    );
};

export default AboutPage;