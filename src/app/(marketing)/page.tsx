import About from "@/components/shared/about";
import Approach from "@/components/shared/approach";
import Contact from "@/components/shared/contact";
import Hero from "@/components/shared/hero-section";
import Services from "@/components/shared/services";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Approach />
      <Contact />
    </>
  );
}
