import { Navbar } from "@/components/navbar";
import {
  About,
  Contact,
  EducationSection,
  ExperienceSection,
  Footer,
  Hero,
  Projects,
  Skills,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" className="flex-1">
        <Hero />
        <About />
        <Skills />
        <ExperienceSection />
        <Projects />
        <EducationSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
