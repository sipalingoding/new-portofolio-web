import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PartnersBar from "@/components/PartnersBar";
import Works from "@/components/Works";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Home section */}
      <section className="snap-start h-screen flex flex-col">
        <Hero />
        <PartnersBar />
      </section>

      {/* Works section */}
      <section id="works" className="snap-start h-screen">
        <Works />
      </section>

      {/* About section */}
      <section id="about" className="snap-start h-screen">
        <About />
      </section>
    </>
  );
}
