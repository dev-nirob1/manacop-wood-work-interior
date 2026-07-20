import About from "../components/front/About";
import CTA from "../components/front/CTA";
import Hero from "../components/front/Hero";
import HowItWorks from "../components/front/HowItWorks";
import WhyChooseUs from "../components/front/WhyChooseUs";
import Testimonial from "../components/front/Testimonial";
import FAQ from "../components/front/FAQ";
import Workshop from "../components/front/Workshop";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <WhyChooseUs />
      <Workshop />
      <HowItWorks />
      <Testimonial />
      <FAQ />
      <CTA />
    </>
  )
}
export default Home;