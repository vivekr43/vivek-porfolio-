import NavBar from "@/components/ui/NavBar";
import Hero from "@/components/sections/Hero";
import Work from "@/components/sections/Work";
import CaseStudies from "@/components/sections/CaseStudies";
import Events from "@/components/sections/Events";
import About from "@/components/sections/About";
import Resume from "@/components/sections/Resume";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Work />
        <CaseStudies />
        <Events />
        <About />
        <Resume />
        <Contact />
      </main>
    </>
  );
}
