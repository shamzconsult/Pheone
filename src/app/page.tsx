import Celebration from "./home/_components/Celebration";
import CoreValues from "./home/_components/CoreValues";
import Counters from "./home/_components/Counter";
import Divider from "./home/_components/Divider";
import DonateSection from "./home/_components/DonationSection";
import HomeHero from "./home/_components/HomeHero";
import Testimonials from "./home/_components/Testimonials";
import Vision from "./home/_components/Vision";
import WhyChooseUs from "./home/_components/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <HomeHero/>
      <Counters/>
      <Vision/>
      <CoreValues/>
      <WhyChooseUs/>
      <Divider/>
      <DonateSection/>
      <Testimonials/>
      <Celebration/>
    </div>
  );
}
