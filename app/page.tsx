import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Experience from "@/components/Experience";
import Blog from "@/components/Blog";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <div className="h-px bg-white/[0.06]" />
      <About />
      <div className="h-px bg-white/[0.06]" />
      <Services />
      <div className="h-px bg-white/[0.06]" />
      <Portfolio />
      <div className="h-px bg-white/[0.06]" />
      <Experience />
      <div className="h-px bg-white/[0.06]" />
      <Blog />
      <div className="h-px bg-white/[0.06]" />
      <Certifications />
      <div className="h-px bg-white/[0.06]" />
      <Contact />
      <Footer />
    </main>
  );
}
