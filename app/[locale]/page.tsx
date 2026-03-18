import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import LogoStrip from "@/components/landing/LogoStrip";
import Stats from "@/components/landing/Stats";
import Services from "@/components/landing/Services";
import Features from "@/components/landing/Features";
// import Testimonials from "@/components/landing/Testimonials";
// import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <LogoStrip />
      <Stats />
      <Services />
      <Features />
      {/* <Testimonials /> */}
      {/* <FAQ /> */}
      <Contact />
      <Footer />
    </main>
  );
}
