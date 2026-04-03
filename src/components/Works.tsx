"use client";

import { useState } from "react";
import {
  SiAngular, SiTailwindcss, SiReact, SiAntdesign,
  SiRedux, SiMysql, SiNextdotjs, SiDotnet,
} from "react-icons/si";
import { MapPin, X, ExternalLink, Calendar, Building2, Globe, ImageOff } from "lucide-react";
import { type IconType } from "react-icons";

type TechItem = { icon: IconType | null; label: string; color: string };
type Project = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  detail: string;
  client: string;
  period: string;
  domain?: string;
  screenshots: string[];
  tech: TechItem[];
  tag: string;
};

const projects: Project[] = [
  {
    id: 1, title: "MCAP", subtitle: "Mobile Collateral Appraisal Platform",
    tag: "Banking · Mobile",
    client: "PT Bank Mandiri",
    period: "Januari 2023 — Sekarang",
    domain: undefined,
    description: "Platform mobile untuk penilaian agunan secara real-time dengan integrasi peta interaktif.",
    detail: "MCAP adalah aplikasi mobile web yang digunakan oleh tim penilai agunan PT Bank Mandiri untuk melakukan survei dan penilaian aset secara langsung di lapangan. Aplikasi ini dilengkapi dengan fitur geolokasi, pengambilan foto aset, serta integrasi peta untuk menandai lokasi agunan secara akurat.",
    screenshots: [],
    tech: [
      { icon: SiAngular, label: "Angular", color: "#DD0031" },
      { icon: SiTailwindcss, label: "Tailwind", color: "#38BDF8" },
      { icon: null, label: "Angular Maps", color: "#4ade80" },
    ],
  },
  {
    id: 2, title: "ORP", subtitle: "Operational Request Platform",
    tag: "Operations · Web",
    client: "PT Bank Mandiri",
    period: "Maret 2022 — Desember 2022",
    domain: undefined,
    description: "Platform manajemen permintaan operasional dengan state management terpusat dan UI enterprise.",
    detail: "ORP merupakan sistem internal PT Bank Mandiri yang digunakan untuk mengelola permintaan operasional antar divisi. Fitur utama meliputi pengajuan request, approval workflow multi-level, tracking status, serta dashboard monitoring real-time dengan notifikasi.",
    screenshots: [],
    tech: [
      { icon: SiReact, label: "React", color: "#61DAFB" },
      { icon: SiTailwindcss, label: "Tailwind", color: "#38BDF8" },
      { icon: SiAntdesign, label: "Ant Design", color: "#1677FF" },
      { icon: SiRedux, label: "Redux", color: "#764ABC" },
    ],
  },
  {
    id: 3, title: "CMS", subtitle: "Collateral Management System",
    tag: "Enterprise · Backend",
    client: "PT Bank Mandiri",
    period: "Juni 2022 — Februari 2023",
    domain: undefined,
    description: "Sistem manajemen agunan skala enterprise untuk pengelolaan data aset dan laporan.",
    detail: "CMS adalah sistem back-office berbasis web untuk pengelolaan data agunan kredit PT Bank Mandiri. Sistem ini menangani pencatatan, pembaruan, dan pelaporan data aset agunan nasabah dengan integrasi database MySQL skala enterprise.",
    screenshots: [],
    tech: [
      { icon: SiDotnet, label: ".NET 4.8", color: "#512BD4" },
      { icon: SiMysql, label: "MySQL", color: "#4479A1" },
    ],
  },
  {
    id: 4, title: "MUA", subtitle: "MUA Platform",
    tag: "Lifestyle · Web",
    client: "Internal / Freelance",
    period: "Agustus 2023 — Oktober 2023",
    domain: undefined,
    description: "Aplikasi web modern untuk manajemen konten dan layanan makeup artist profesional.",
    detail: "Platform digital untuk makeup artist profesional yang memungkinkan pengelolaan portofolio, booking jadwal klien, serta manajemen konten layanan. Dibangun dengan Next.js dan Ant Design untuk tampilan yang profesional dan responsif.",
    screenshots: [],
    tech: [
      { icon: SiNextdotjs, label: "Next.js", color: "#ffffff" },
      { icon: SiTailwindcss, label: "Tailwind", color: "#38BDF8" },
      { icon: SiAntdesign, label: "Ant Design", color: "#1677FF" },
    ],
  },
  {
    id: 5, title: "SundaBinekas", subtitle: "SundaBinekas Platform",
    tag: "Culture · Web",
    client: "Nonoman Galuh",
    period: "November 2023 — Januari 2024",
    domain: "sundabinekas.id",
    description: "Platform digital berbasis budaya Sunda dengan desain modern menggunakan komponen UI terkini.",
    detail: "SundaBinekas adalah platform komunitas digital yang mengangkat budaya dan kearifan lokal Sunda. Platform ini menampilkan artikel budaya, event komunitas, serta direktori tokoh dan organisasi Sunda. Dibangun dengan Next.js dan shadcn/ui untuk pengalaman pengguna yang modern.",
    screenshots: [],
    tech: [
      { icon: SiNextdotjs, label: "Next.js", color: "#ffffff" },
      { icon: SiTailwindcss, label: "Tailwind", color: "#38BDF8" },
      { icon: null, label: "shadcn/ui", color: "#888888" },
    ],
  },
];

export default function Works() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <div className="relative h-full w-full flex flex-col px-8 pt-24 pb-8 overflow-hidden" style={{ backgroundColor: "#0D0605", color: "white" }}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(155,27,27,0.08),transparent_70%)] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-end justify-between mb-8">
        <div>
          <p className="text-xs uppercase tracking-widest font-semibold mb-2" style={{ color: "rgba(255,255,255,0.25)" }}>
            02 / Works
          </p>
          <h2 className="text-5xl xl:text-6xl font-bold uppercase leading-none" style={{ fontFamily: "var(--font-oswald)", color: "white" }}>
            Selected<br />Projects
          </h2>
        </div>
        <p className="text-sm max-w-xs text-right leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
          A collection of projects built across{" "}
          <span className="font-semibold" style={{ color: "white" }}>4 years</span> of frontend engineering experience.
        </p>
      </div>

      {/* Cards */}
      <div className="relative z-10 grid grid-cols-3 gap-4 flex-1">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelected(project)}
            className="group rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:border-white/20"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <div>
              <div className="flex items-start justify-between mb-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(155,27,27,0.2)", border: "1px solid rgba(155,27,27,0.3)" }}>
                  <span className="text-[#ff6b6b] text-xs font-bold" style={{ fontFamily: "var(--font-oswald)" }}>
                    {String(project.id).padStart(2, "0")}
                  </span>
                </div>
                <span className="text-[10px] uppercase tracking-widest rounded-full px-2 py-0.5" style={{ color: "rgba(255,255,255,0.25)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  {project.tag}
                </span>
              </div>
              <h3 className="text-xl font-bold uppercase leading-tight mb-1" style={{ fontFamily: "var(--font-oswald)", color: "white" }}>
                {project.title}
              </h3>
              <p className="text-xs mb-3" style={{ color: "rgba(255,255,255,0.25)" }}>{project.subtitle}</p>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{project.description}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map(({ icon: Icon, label, color }) => (
                <div key={label} className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5" style={{ background: "#0D0605", border: "1px solid rgba(255,255,255,0.1)" }}>
                  {Icon ? <Icon style={{ color }} className="w-3.5 h-3.5 flex-shrink-0" /> : <MapPin style={{ color }} className="w-3.5 h-3.5 flex-shrink-0" />}
                  <span className="text-[10px] font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* CTA slot */}
        <div className="rounded-2xl p-5 flex flex-col items-center justify-center gap-3 cursor-pointer transition-colors" style={{ border: "1px dashed rgba(255,255,255,0.1)" }}>
          <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ border: "1px dashed rgba(255,255,255,0.1)" }}>
            <span className="text-xl" style={{ color: "rgba(255,255,255,0.25)" }}>+</span>
          </div>
          <p className="text-xs text-center" style={{ color: "rgba(255,255,255,0.25)" }}>
            More projects<br />coming soon
          </p>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selected && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          />
          {/* Panel */}
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-6 pointer-events-none">
            <div
              className="w-full max-w-3xl max-h-[85vh] rounded-3xl overflow-hidden flex flex-col pointer-events-auto"
              style={{ background: "#140806", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              {/* Modal header */}
              <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(155,27,27,0.2)", border: "1px solid rgba(155,27,27,0.3)" }}>
                    <span className="text-[#ff6b6b] text-xs font-bold" style={{ fontFamily: "var(--font-oswald)" }}>
                      {String(selected.id).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-white font-bold text-lg uppercase leading-none" style={{ fontFamily: "var(--font-oswald)" }}>
                      {selected.title}
                    </h2>
                    <p className="text-[10px] mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>{selected.subtitle}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Scrollable content */}
              <div className="overflow-y-auto flex-1 p-6 space-y-6" style={{ scrollbarWidth: "none" }}>

                {/* Meta info */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-2xl p-4" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className="w-3.5 h-3.5" style={{ color: "#ff6b6b" }} />
                      <span className="text-[10px] uppercase tracking-widest font-semibold" style={{ color: "rgba(255,255,255,0.3)" }}>Client</span>
                    </div>
                    <p className="text-white text-sm font-semibold">{selected.client}</p>
                  </div>
                  <div className="rounded-2xl p-4" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-3.5 h-3.5" style={{ color: "#ff6b6b" }} />
                      <span className="text-[10px] uppercase tracking-widest font-semibold" style={{ color: "rgba(255,255,255,0.3)" }}>Periode</span>
                    </div>
                    <p className="text-white text-sm font-semibold">{selected.period}</p>
                  </div>
                  <div className="rounded-2xl p-4" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <div className="flex items-center gap-2 mb-2">
                      <Globe className="w-3.5 h-3.5" style={{ color: "#ff6b6b" }} />
                      <span className="text-[10px] uppercase tracking-widest font-semibold" style={{ color: "rgba(255,255,255,0.3)" }}>Domain</span>
                    </div>
                    {selected.domain ? (
                      <a href={`https://${selected.domain}`} target="_blank" rel="noopener noreferrer"
                        className="text-sm font-semibold flex items-center gap-1 hover:underline" style={{ color: "#61DAFB" }}>
                        {selected.domain}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <p className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.25)" }}>—</p>
                    )}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-semibold mb-3" style={{ color: "rgba(255,255,255,0.3)" }}>Deskripsi Project</p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>{selected.detail}</p>
                </div>

                {/* Screenshots */}
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-semibold mb-3" style={{ color: "rgba(255,255,255,0.3)" }}>Screenshots</p>
                  {selected.screenshots.length > 0 ? (
                    <div className="grid grid-cols-2 gap-3">
                      {selected.screenshots.map((src, i) => (
                        <img key={i} src={src} alt={`Screenshot ${i + 1}`} className="rounded-xl w-full object-cover aspect-video" />
                      ))}
                    </div>
                  ) : (
                    <div className="rounded-2xl flex flex-col items-center justify-center py-10 gap-3" style={{ background: "rgba(255,255,255,0.03)", border: "1px dashed rgba(255,255,255,0.08)" }}>
                      <ImageOff className="w-8 h-8" style={{ color: "rgba(255,255,255,0.15)" }} />
                      <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>Screenshot belum tersedia</p>
                    </div>
                  )}
                </div>

                {/* Tech Stack */}
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-semibold mb-3" style={{ color: "rgba(255,255,255,0.3)" }}>Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {selected.tech.map(({ icon: Icon, label, color }) => (
                      <div key={label} className="flex items-center gap-2 rounded-xl px-3 py-2" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                        {Icon ? <Icon style={{ color }} className="w-4 h-4" /> : <MapPin style={{ color }} className="w-4 h-4" />}
                        <span className="text-sm font-medium text-white">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
