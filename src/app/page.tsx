import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="app-shell">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Publications />
      <Contact />
      <Footer />
    </main>
  );
}
