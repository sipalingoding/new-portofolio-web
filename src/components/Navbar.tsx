"use client";

import { useState } from "react";
import { Menu, X, Sun, Moon, FileDown, Languages } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { useLang } from "@/context/LanguageContext";
import { type Section } from "@/components/PageController";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const navLinks: { num: string; labelEn: string; labelId: string; id: Section }[] = [
  { num: "01", labelEn: "HOME",    labelId: "BERANDA", id: "home" },
  { num: "02", labelEn: "WORKS",   labelId: "KARYA",   id: "works" },
  { num: "03", labelEn: "ABOUT",   labelId: "TENTANG", id: "about" },
  { num: "04", labelEn: "CONTACT", labelId: "KONTAK",  id: "contact" },
];

type Props = {
  active: Section;
  onNavigate: (section: Section) => void;
};

export default function Navbar({ active, onNavigate }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { lang, setLang } = useLang();

  const handleNav = (id: Section) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  const isDark = theme === "dark";

  return (
    <TooltipProvider delay={200}>
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-sm">

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white hover:text-white/70 transition-colors"
          aria-label="Menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Center Nav */}
        <nav className={`hidden md:flex items-center gap-8 transition-all duration-200 ${menuOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
          {navLinks.map((link) => (
            <button
              key={link.num}
              onClick={() => handleNav(link.id)}
              className={`text-sm tracking-wide transition-colors ${
                active === link.id ? "text-white font-bold" : "text-white/40 hover:text-white/80"
              }`}
            >
              <span className={`font-mono text-xs ${active === link.id ? "text-white/60" : "text-white/20"}`}>
                {link.num}/
              </span>{" "}
              <span className="font-semibold">
                {lang === "EN" ? link.labelEn : link.labelId}
              </span>
            </button>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <Tooltip>
            <TooltipTrigger render={
              <button
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-all"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            } />
            <TooltipContent side="bottom">{isDark ? "Light Mode" : "Dark Mode"}</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger render={
              <a
                href="/cv-salman-faris.pdf"
                download
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-all"
                aria-label="Download CV"
              >
                <FileDown className="w-4 h-4" />
              </a>
            } />
            <TooltipContent side="bottom">Download CV</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger render={
              <button
                onClick={() => setLang(lang === "EN" ? "ID" : "EN")}
                className="h-9 px-3 rounded-full border border-white/20 flex items-center gap-1.5 text-white/70 hover:text-white hover:border-white/40 transition-all"
                aria-label="Toggle language"
              >
                <Languages className="w-3.5 h-3.5" />
                <span className="text-xs font-bold tracking-wider">{lang}</span>
              </button>
            } />
            <TooltipContent side="bottom">
              {lang === "EN" ? "Ganti ke Bahasa Indonesia" : "Switch to English"}
            </TooltipContent>
          </Tooltip>
        </div>

      </header>

      {/* Hamburger popup */}
      {menuOpen && (
        <>
          <div className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
          <div className="fixed inset-0 z-[70] flex items-center justify-center pointer-events-none">
            <div className="w-96 bg-[#1a0a06]/98 backdrop-blur-xl border border-white/10 rounded-3xl p-4 shadow-2xl pointer-events-auto">
              <div className="flex items-center justify-between px-4 pb-3 mb-2 border-b border-white/10">
                <span className="text-white/30 text-xs uppercase tracking-widest font-semibold">Navigation</span>
                <button onClick={() => setMenuOpen(false)} className="text-white/30 hover:text-white transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
              {navLinks.map((link) => (
                <button
                  key={link.num}
                  onClick={() => handleNav(link.id)}
                  className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl text-left transition-all ${
                    active === link.id
                      ? "bg-white/10 text-white"
                      : "text-white/60 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span className="font-mono text-xs w-8 flex-shrink-0 text-white/30">
                    {link.num}/
                  </span>
                  <span className="font-bold tracking-widest uppercase flex-1" style={{ fontFamily: "var(--font-oswald)", fontSize: "1.4rem" }}>
                    {lang === "EN" ? link.labelEn : link.labelId}
                  </span>
                  {active === link.id && (
                    <span className="w-2 h-2 rounded-full bg-white flex-shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </>
    </TooltipProvider>
  );
}
