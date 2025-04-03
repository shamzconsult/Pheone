import CoreValues from "./home/_components/CoreValues";
import Counters from "./home/_components/Counter";
import HomeHero from "./home/_components/HomeHero";
import Vision from "./home/_components/Vision";

export default function Home() {
  return (
    <div>
      <HomeHero/>
      <Counters/>
      <Vision/>
      <CoreValues/>
    </div>
  );
}
