import Companion from "./partials/Companion";
import Hero from "./partials/Hero";
import Impact from "./partials/Impact";
import MiddleSection from "./partials/MiddleSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <MiddleSection />
      <Impact />
      <Companion />
    </div>
  );
}
