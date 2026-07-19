import Contact from "@/app/components/front/Contact";
import MapSection from "@/app/components/front/Map";
import PageHero from "@/app/components/front/PageHero";

const ContactPage = () => {
    return (
        <div>
            <PageHero
                title="Contact Us"
                description="Have a project in mind? Reach out and let's talk about how we can bring it to life."
            />
            <Contact />
            <MapSection/>
        </div>
    );
};

export default ContactPage;