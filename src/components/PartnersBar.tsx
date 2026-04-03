import { Star } from "lucide-react";
import Image from "next/image";

const partners = [
  { name: "Bank Mandiri", logo: "/logo-mandiri.png" },
  { name: "Lawencon Internasional", logo: "/logo-lawencon.png" },
  { name: "Bank Mandiri", logo: "/logo-mandiri.png" },
  { name: "Lawencon Internasional", logo: "/logo-lawencon.png" },
  { name: "Bank Mandiri", logo: "/logo-mandiri.png" },
  { name: "Lawencon Internasional", logo: "/logo-lawencon.png" },
  { name: "Bank Mandiri", logo: "/logo-mandiri.png" },
  { name: "Lawencon Internasional", logo: "/logo-lawencon.png" },
];

const skills = [
  "React",
  "Next.js",
  "Angular",
  "TailwindCSS",
  "Frontend Dev",
];

export default function PartnersBar() {
  return (
    <div className="relative z-10 border-t border-white/10 bg-[#0D0605] py-4 overflow-hidden">
      <div className="flex items-center gap-0">
        {/* Left label — fixed */}
        <div className="flex-shrink-0 px-6 border-r border-white/10 mr-4">
          <p className="text-white/40 text-[10px] uppercase tracking-widest font-semibold whitespace-nowrap">
            Our Partners
          </p>
        </div>

        {/* Scrolling marquee */}
        <div className="flex-1 overflow-hidden relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#0D0605] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#0D0605] to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee whitespace-nowrap">
            {[...partners, ...partners].map((p, i) => (
              <div
                key={i}
                className="flex items-center gap-3 mx-10 flex-shrink-0 cursor-pointer group"
              >
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={32}
                  height={32}
                  className="object-contain"
                />
                <span className="text-sm font-bold tracking-wider uppercase text-white/60 group-hover:text-white transition-colors">
                  {p.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Skill tags — fixed */}
        <div className="flex items-center gap-2 flex-shrink-0 px-6 border-l border-white/10 ml-4">
          {skills.map((skill, i) => (
            <div
              key={skill}
              className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide border transition-colors cursor-pointer whitespace-nowrap ${
                i === skills.length - 1
                  ? "bg-white text-black border-white hover:bg-white/90"
                  : "bg-transparent text-white/80 border-white/20 hover:border-white/40 hover:text-white"
              }`}
            >
              <Star
                className={`w-2.5 h-2.5 ${
                  i === skills.length - 1
                    ? "fill-black text-black"
                    : "fill-white/60 text-white/60"
                }`}
              />
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
