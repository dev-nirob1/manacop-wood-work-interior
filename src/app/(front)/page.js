import About from "../components/front/About";
import CTA from "../components/front/CTA";
import Hero from "../components/front/Hero";
import HowItWorks from "../components/front/HowItWorks";
import WhyChooseUs from "../components/front/WhyChooseUs";
import Testimonial from "../components/front/Testimonial";

const Home = () => {
  return (
    <>
      <Hero />
      <About/>
      <WhyChooseUs/>
      <HowItWorks/>
      <Testimonial/>
      <CTA/>
    </>
  )
}
export default Home;