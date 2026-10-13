import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Certifications } from "@/components/sections/Certifications";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";
import { SkipLink } from "@/components/ui/skip-link";

export default function Home() {
  return (
    <>
      <SkipLink/>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <About />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp/>
    </>
  );
}
