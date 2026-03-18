import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import LogoStrip from "@/components/landing/LogoStrip";
import About from "@/components/landing/About";
import HowItWorks from "@/components/landing/HowItWorks";
import Stats from "@/components/landing/Stats";
import Services from "@/components/landing/Services";
import Education from "@/components/landing/Education";
import Features from "@/components/landing/Features";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <LogoStrip />
      <About />
      <HowItWorks />
      <Stats />
      <Services />
      <Education />
      <Features />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
