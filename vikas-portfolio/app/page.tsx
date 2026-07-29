import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ThreeBackground from "@/components/ThreeBackground";

export default function Home() {
  return (
    <>
      <ThreeBackground />
      <Hero />
      <About />
      <Expertise />
      <Projects />
      <Contact />
    </>
  );
}
