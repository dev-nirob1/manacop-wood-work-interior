import CTA from "@/app/components/front/CTA";
import PageHero from "@/app/components/front/PageHero";
import ServicesSection from "@/app/components/front/ServicesSection";

const ServicesPage = () => {
    return (
        <div>
            <PageHero
                title="Our Services"
                description="From initial design concepts to final installation, we provide complete custom furniture and interior solutions tailored to your space and lifestyle."
            />
            <ServicesSection/>
            <CTA />
        </div>
    );
};

export default ServicesPage;