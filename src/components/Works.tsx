"use client";

import { useState } from "react";
import {
  SiAngular, SiTailwindcss, SiReact, SiAntdesign,
  SiRedux, SiMysql, SiNextdotjs, SiDotnet,
} from "react-icons/si";
import { MapPin, X, ExternalLink, Calendar, Building2, Globe, ImageOff } from "lucide-react";
import { type IconType } from "react-icons";
import { useLang } from "@/context/LanguageContext";

type TechItem = { icon: IconType | null; label: string; color: string };
type Project = {
  id: number;
  title: string;
  subtitle: string;
  descriptionEn: string;
  descriptionId: string;
  detailEn: string;
  detailId: string;
  client: string;
  periodEn: string;
  periodId: string;
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
    periodEn: "January 2023 — Present",
    periodId: "Januari 2023 — Sekarang",
    domain: undefined,
    descriptionEn: "Mobile platform for real-time collateral appraisal with interactive map integration.",
    descriptionId: "Platform mobile untuk penilaian agunan secara real-time dengan integrasi peta interaktif.",
    detailEn: "MCAP is a mobile web application used by PT Bank Mandiri's collateral appraisal team to conduct on-site asset surveys and valuations. The app features geolocation, asset photo capture, and map integration for accurately marking collateral locations.",
    detailId: "MCAP adalah aplikasi mobile web yang digunakan oleh tim penilai agunan PT Bank Mandiri untuk melakukan survei dan penilaian aset secara langsung di lapangan. Aplikasi ini dilengkapi dengan fitur geolokasi, pengambilan foto aset, serta integrasi peta untuk menandai lokasi agunan secara akurat.",
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
    periodEn: "March 2022 — December 2022",
    periodId: "Maret 2022 — Desember 2022",
    domain: undefined,
    descriptionEn: "Operational request management platform with centralized state management and enterprise UI.",
    descriptionId: "Platform manajemen permintaan operasional dengan state management terpusat dan UI enterprise.",
    detailEn: "ORP is an internal PT Bank Mandiri system used to manage operational requests between divisions. Key features include request submission, multi-level approval workflow, status tracking, and a real-time monitoring dashboard with notifications.",
    detailId: "ORP merupakan sistem internal PT Bank Mandiri yang digunakan untuk mengelola permintaan operasional antar divisi. Fitur utama meliputi pengajuan request, approval workflow multi-level, tracking status, serta dashboard monitoring real-time dengan notifikasi.",
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
    periodEn: "June 2022 — February 2023",
    periodId: "Juni 2022 — Februari 2023",
    domain: undefined,
    descriptionEn: "Enterprise-scale collateral management system for asset data management and reporting.",
    descriptionId: "Sistem manajemen agunan skala enterprise untuk pengelolaan data aset dan laporan.",
    detailEn: "CMS is a web-based back-office system for managing PT Bank Mandiri's credit collateral data. The system handles recording, updating, and reporting of customer collateral asset data with enterprise-scale MySQL database integration.",
    detailId: "CMS adalah sistem back-office berbasis web untuk pengelolaan data agunan kredit PT Bank Mandiri. Sistem ini menangani pencatatan, pembaruan, dan pelaporan data aset agunan nasabah dengan integrasi database MySQL skala enterprise.",
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
    periodEn: "August 2023 — October 2023",
    periodId: "Agustus 2023 — Oktober 2023",
    domain: undefined,
    descriptionEn: "Modern web application for content management and professional makeup artist services.",
    descriptionId: "Aplikasi web modern untuk manajemen konten dan layanan makeup artist profesional.",
    detailEn: "A digital platform for professional makeup artists that enables portfolio management, client appointment booking, and service content management. Built with Next.js and Ant Design for a professional and responsive look.",
    detailId: "Platform digital untuk makeup artist profesional yang memungkinkan pengelolaan portofolio, booking jadwal klien, serta manajemen konten layanan. Dibangun dengan Next.js dan Ant Design untuk tampilan yang profesional dan responsif.",
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
    periodEn: "November 2023 — January 2024",
    periodId: "November 2023 — Januari 2024",
    domain: "sundabinekas.id",
    descriptionEn: "Sundanese culture-based digital platform with a modern design using the latest UI components.",
    descriptionId: "Platform digital berbasis budaya Sunda dengan desain modern menggunakan komponen UI terkini.",
    detailEn: "SundaBinekas is a digital community platform that promotes Sundanese culture and local wisdom. The platform features cultural articles, community events, and a directory of Sundanese figures and organizations. Built with Next.js and shadcn/ui for a modern user experience.",
    detailId: "SundaBinekas adalah platform komunitas digital yang mengangkat budaya dan kearifan lokal Sunda. Platform ini menampilkan artikel budaya, event komunitas, serta direktori tokoh dan organisasi Sunda. Dibangun dengan Next.js dan shadcn/ui untuk pengalaman pengguna yang modern.",
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
  const { lang, t } = useLang();

  return (
    <div className="relative h-full w-full flex flex-col overflow-hidden" style={{ backgroundColor: "#0D0605", color: "white" }}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(155,27,27,0.08),transparent_70%)] pointer-events-none" />
      <div className="flex-1 flex flex-col max-w-[1440px] mx-auto w-full px-4 sm:px-8 lg:px-16 pt-20 sm:pt-24 pb-4 sm:pb-8 min-h-0 overflow-y-auto" style={{ scrollbarWidth: "none" }}>

        {/* Header */}
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6 sm:mb-8">
          <div>
            <p className="text-xs uppercase tracking-widest font-semibold mb-2" style={{ color: "rgba(255,255,255,0.25)" }}>
              02 / {t("Works", "Karya")}
            </p>
            <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold uppercase leading-none" style={{ fontFamily: "var(--font-lora)", color: "white" }}>
              {lang === "EN" ? <>Selected<br />Projects</> : <>Proyek<br />Pilihan</>}
            </h2>
          </div>
          <p className="text-sm max-w-xs sm:text-right leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
            {t("A collection of projects built across", "Kumpulan proyek yang dibangun selama")}{" "}
            <span className="font-semibold" style={{ color: "white" }}>4 {t("years", "tahun")}</span>{" "}
            {t("of frontend engineering experience.", "pengalaman frontend engineering.")}
          </p>
        </div>

        {/* Cards */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                    <span className="text-[#ff6b6b] text-xs font-bold" style={{ fontFamily: "var(--font-lora)" }}>
                      {String(project.id).padStart(2, "0")}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest rounded-full px-2 py-0.5" style={{ color: "rgba(255,255,255,0.25)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    {project.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold uppercase leading-tight mb-1" style={{ fontFamily: "var(--font-lora)", color: "white" }}>
                  {project.title}
                </h3>
                <p className="text-xs mb-3" style={{ color: "rgba(255,255,255,0.25)" }}>{project.subtitle}</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {lang === "EN" ? project.descriptionEn : project.descriptionId}
                </p>
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
              {lang === "EN" ? <>More projects<br />coming soon</> : <>Proyek lainnya<br />segera hadir</>}
            </p>
          </div>
        </div>

      </div>

      {/* Project Detail Modal */}
      {selected && (
        <>
          <div
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          />
          <div className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center sm:p-6 pointer-events-none">
            <div
              className="w-full sm:max-w-3xl max-h-[90vh] sm:max-h-[85vh] rounded-t-3xl sm:rounded-3xl overflow-hidden flex flex-col pointer-events-auto"
              style={{ background: "#140806", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              {/* Modal header */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(155,27,27,0.2)", border: "1px solid rgba(155,27,27,0.3)" }}>
                    <span className="text-[#ff6b6b] text-xs font-bold" style={{ fontFamily: "var(--font-lora)" }}>
                      {String(selected.id).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-white font-bold text-lg uppercase leading-none" style={{ fontFamily: "var(--font-lora)" }}>
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
              <div className="overflow-y-auto flex-1 p-4 sm:p-6 space-y-6" style={{ scrollbarWidth: "none" }}>

                {/* Meta info */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
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
                      <span className="text-[10px] uppercase tracking-widest font-semibold" style={{ color: "rgba(255,255,255,0.3)" }}>{t("Period", "Periode")}</span>
                    </div>
                    <p className="text-white text-sm font-semibold">{lang === "EN" ? selected.periodEn : selected.periodId}</p>
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
                  <p className="text-[10px] uppercase tracking-widest font-semibold mb-3" style={{ color: "rgba(255,255,255,0.3)" }}>{t("Project Description", "Deskripsi Project")}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                    {lang === "EN" ? selected.detailEn : selected.detailId}
                  </p>
                </div>

                {/* Screenshots */}
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-semibold mb-3" style={{ color: "rgba(255,255,255,0.3)" }}>Screenshots</p>
                  {selected.screenshots.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selected.screenshots.map((src, i) => (
                        <img key={i} src={src} alt={`Screenshot ${i + 1}`} className="rounded-xl w-full object-cover aspect-video" />
                      ))}
                    </div>
                  ) : (
                    <div className="rounded-2xl flex flex-col items-center justify-center py-10 gap-3" style={{ background: "rgba(255,255,255,0.03)", border: "1px dashed rgba(255,255,255,0.08)" }}>
                      <ImageOff className="w-8 h-8" style={{ color: "rgba(255,255,255,0.15)" }} />
                      <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>{t("No screenshots available", "Screenshot belum tersedia")}</p>
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
