import CTA from "@/app/components/front/CTA";
import PageHero from "@/app/components/front/PageHero";

const ServicesPage = () => {
    return (
        <div>
            <PageHero
                title="Our Services"
                description="Custom builds, remodeling, and craftsmanship tailored to your space."
            />
            <CTA/>
        </div>
    );
};

export default ServicesPage;