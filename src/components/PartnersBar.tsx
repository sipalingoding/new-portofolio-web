import Image from "next/image";

const partners = [
  { name: "Bank Mandiri", logo: "/logo-mandiri.png", invert: false },
  { name: "Lawencon Internasional", logo: "/logo-lawencon.png", invert: false },
  { name: "Nonoman Galuh", logo: "/logo-nonoman-galuh.png", invert: true },
  { name: "Pemerintah Provinsi Gorontalo", logo: "/logo-pemprov-gorontalo.png", invert: false },
  { name: "Bank Mandiri", logo: "/logo-mandiri.png", invert: false },
  { name: "Lawencon Internasional", logo: "/logo-lawencon.png", invert: false },
  { name: "Nonoman Galuh", logo: "/logo-nonoman-galuh.png", invert: true },
  { name: "Pemerintah Provinsi Gorontalo", logo: "/logo-pemprov-gorontalo.png", invert: false },
  { name: "Bank Mandiri", logo: "/logo-mandiri.png", invert: false },
  { name: "Lawencon Internasional", logo: "/logo-lawencon.png", invert: false },
  { name: "Nonoman Galuh", logo: "/logo-nonoman-galuh.png", invert: true },
  { name: "Pemerintah Provinsi Gorontalo", logo: "/logo-pemprov-gorontalo.png", invert: false },
];

export default function PartnersBar() {
  return (
    <div className="relative z-10 border-t border-white/10 py-3 sm:py-4 overflow-hidden">
      <div className="flex items-center gap-0">
        {/* Left label — hidden on mobile */}
        <div className="hidden sm:flex flex-shrink-0 px-6 border-r border-white/10 mr-4">
          <p className="text-white/30 text-[10px] uppercase tracking-widest font-semibold whitespace-nowrap">
            Our Partners
          </p>
        </div>

        {/* Scrolling marquee */}
        <div className="flex-1 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-r from-[#0D0605] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-l from-[#0D0605] to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee whitespace-nowrap">
            {[...partners, ...partners].map((p, i) => (
              <div
                key={i}
                className="flex items-center gap-2 sm:gap-3 mx-6 sm:mx-10 flex-shrink-0 cursor-pointer group"
              >
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={28}
                  height={28}
                  className={`object-contain ${p.invert ? "invert" : ""}`}
                />
                <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-white/50 group-hover:text-white transition-colors">
                  {p.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
