"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PartnersBar from "@/components/PartnersBar";
import Works from "@/components/Works";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { LanguageProvider } from "@/context/LanguageContext";

export type Section = "home" | "works" | "about" | "contact";

export default function PageController() {
  const [active, setActive] = useState<Section>("home");

  return (
    <LanguageProvider>
    <div className="h-screen overflow-hidden flex flex-col">
      <Navbar active={active} onNavigate={setActive} />

      {/* Home */}
      <div className={`flex-1 flex flex-col overflow-hidden transition-opacity duration-300 ${active === "home" ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none absolute inset-0"}`}>
        <Hero />
        <PartnersBar />
      </div>

      {/* Works */}
      <div className={`flex-1 overflow-hidden transition-opacity duration-300 ${active === "works" ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none absolute inset-0"}`}>
        <Works />
      </div>

      {/* About */}
      <div className={`flex-1 overflow-hidden transition-opacity duration-300 ${active === "about" ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none absolute inset-0"}`}>
        <About />
      </div>

      {/* Contact */}
      <div className={`flex-1 overflow-hidden transition-opacity duration-300 ${active === "contact" ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none absolute inset-0"}`}>
        <Contact />
      </div>
    </div>
    </LanguageProvider>
  );
}
