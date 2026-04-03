"use client";

import { useState } from "react";
import { Settings, Globe, Camera, X, Menu, Star } from "lucide-react";

const navLinks = [
  { num: "01", label: "HOME", href: "#home" },
  { num: "02", label: "WORKS", href: "#works" },
  { num: "03", label: "ABOUT", href: "#about" },
  { num: "04", label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <Star className="w-5 h-5 fill-white text-white" />
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white hover:text-white/70 transition-colors"
          aria-label="Menu"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Nav Links */}
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.num}
            href={link.href}
            className="text-sm text-white/70 hover:text-white transition-colors tracking-wide"
          >
            <span className="text-white/40 font-mono text-xs">{link.num}/</span>{" "}
            <span className="font-semibold">{link.label}</span>
          </a>
        ))}
      </nav>

      {/* Right Icons */}
      <div className="flex items-center gap-3">
        <button className="w-8 h-8 flex items-center justify-center text-white/60 hover:text-white transition-colors">
          <Settings className="w-4 h-4" />
        </button>
        <button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors text-xs font-bold">
          X
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-white/60 hover:text-white transition-colors">
          <Globe className="w-4 h-4" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-white/60 hover:text-white transition-colors">
          <Camera className="w-4 h-4" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#0D0605]/95 backdrop-blur-sm border-t border-white/10 p-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.num}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white/70 hover:text-white transition-colors text-sm"
              >
                <span className="text-white/40 font-mono text-xs">{link.num}/</span>{" "}
                <span className="font-semibold">{link.label}</span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
