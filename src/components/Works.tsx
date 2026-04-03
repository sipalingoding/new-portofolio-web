import {
  SiAngular,
  SiTailwindcss,
  SiReact,
  SiAntdesign,
  SiRedux,
  SiMysql,
  SiNextdotjs,
  SiDotnet,
} from "react-icons/si";
import { MapPin } from "lucide-react";
import { type IconType } from "react-icons";

type TechItem = {
  icon: IconType | null;
  label: string;
  color: string;
};

type Project = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tech: TechItem[];
  tag: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "MCAP",
    subtitle: "Mobile Collateral Appraisal Platform",
    description:
      "Platform mobile untuk penilaian agunan secara real-time dengan integrasi peta interaktif.",
    tag: "Banking · Mobile",
    tech: [
      { icon: SiAngular, label: "Angular", color: "#DD0031" },
      { icon: SiTailwindcss, label: "Tailwind", color: "#38BDF8" },
      { icon: null, label: "Angular Maps", color: "#4ade80" },
    ],
  },
  {
    id: 2,
    title: "ORP",
    subtitle: "Operational Request Platform",
    description:
      "Platform manajemen permintaan operasional dengan state management terpusat dan UI enterprise.",
    tag: "Operations · Web",
    tech: [
      { icon: SiReact, label: "React", color: "#61DAFB" },
      { icon: SiTailwindcss, label: "Tailwind", color: "#38BDF8" },
      { icon: SiAntdesign, label: "Ant Design", color: "#1677FF" },
      { icon: SiRedux, label: "Redux", color: "#764ABC" },
    ],
  },
  {
    id: 3,
    title: "CMS",
    subtitle: "Collateral Management System",
    description:
      "Sistem manajemen agunan skala enterprise untuk pengelolaan data aset dan laporan.",
    tag: "Enterprise · Backend",
    tech: [
      { icon: SiDotnet, label: ".NET 4.8", color: "#512BD4" },
      { icon: SiMysql, label: "MySQL", color: "#4479A1" },
    ],
  },
  {
    id: 4,
    title: "MUA",
    subtitle: "MUA Platform",
    description:
      "Aplikasi web modern untuk manajemen konten dan layanan makeup artist profesional.",
    tag: "Lifestyle · Web",
    tech: [
      { icon: SiNextdotjs, label: "Next.js", color: "#ffffff" },
      { icon: SiTailwindcss, label: "Tailwind", color: "#38BDF8" },
      { icon: SiAntdesign, label: "Ant Design", color: "#1677FF" },
    ],
  },
  {
    id: 5,
    title: "SundaBinekas",
    subtitle: "SundaBinekas Platform",
    description:
      "Platform digital berbasis budaya Sunda dengan desain modern menggunakan komponen UI terkini.",
    tag: "Culture · Web",
    tech: [
      { icon: SiNextdotjs, label: "Next.js", color: "#ffffff" },
      { icon: SiTailwindcss, label: "Tailwind", color: "#38BDF8" },
      { icon: null, label: "shadcn/ui", color: "#ffffff" },
    ],
  },
];

export default function Works() {
  return (
    <div className="relative h-full w-full bg-[#0D0605] flex flex-col px-8 pt-24 pb-8 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(155,27,27,0.12),transparent_70%)] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-end justify-between mb-8">
        <div>
          <p className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-2">
            02 / Works
          </p>
          <h2
            className="text-5xl xl:text-6xl font-bold uppercase text-white leading-none"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Selected
            <br />
            Projects
          </h2>
        </div>
        <p className="text-white/40 text-sm max-w-xs text-right leading-relaxed">
          A collection of projects built across{" "}
          <span className="text-white/70 font-semibold">4 years</span> of
          frontend engineering experience.
        </p>
      </div>

      {/* Project cards grid */}
      <div className="relative z-10 grid grid-cols-3 gap-4 flex-1">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-white/5 hover:bg-white/8 border border-white/10 hover:border-white/20 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 cursor-pointer"
          >
            {/* Top */}
            <div>
              <div className="flex items-start justify-between mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#9B1B1B]/30 border border-[#9B1B1B]/40 flex items-center justify-center">
                  <span
                    className="text-[#ff6b6b] text-xs font-bold"
                    style={{ fontFamily: "var(--font-oswald)" }}
                  >
                    {String(project.id).padStart(2, "0")}
                  </span>
                </div>
                <span className="text-white/30 text-[10px] uppercase tracking-widest border border-white/10 rounded-full px-2 py-0.5">
                  {project.tag}
                </span>
              </div>

              <h3
                className="text-white text-xl font-bold uppercase leading-tight mb-1"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                {project.title}
              </h3>
              <p className="text-white/40 text-xs mb-3">{project.subtitle}</p>
              <p className="text-white/60 text-xs leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tech stack icons */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map(({ icon: Icon, label, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1.5"
                >
                  {Icon ? (
                    <Icon style={{ color }} className="w-3.5 h-3.5 flex-shrink-0" />
                  ) : (
                    <MapPin
                      style={{ color }}
                      className="w-3.5 h-3.5 flex-shrink-0"
                    />
                  )}
                  <span className="text-white/50 text-[10px] font-medium">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Empty 6th slot — CTA */}
        <div className="border border-dashed border-white/10 rounded-2xl p-5 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-white/20 transition-colors group">
          <div className="w-10 h-10 rounded-full border border-dashed border-white/20 group-hover:border-white/40 flex items-center justify-center transition-colors">
            <span className="text-white/30 group-hover:text-white/60 text-xl transition-colors">
              +
            </span>
          </div>
          <p className="text-white/30 group-hover:text-white/50 text-xs text-center transition-colors">
            More projects
            <br />
            coming soon
          </p>
        </div>
      </div>
    </div>
  );
}
