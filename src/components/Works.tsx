"use client";

import { useState } from "react";
import {
  SiAngular, SiTailwindcss, SiReact, SiAntdesign,
  SiRedux, SiMysql, SiNextdotjs, SiDotnet, SiSupabase, SiFigma, SiShadcnui,
} from "react-icons/si";
import { MapPin, X, ExternalLink, Building2, Globe, ImageOff, Database } from "lucide-react";
import { type IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

type TechItem = { icon: IconType | LucideIcon | null; label: string; color: string };
type ProjectType = "main-job" | "freelance";
type Project = {
  id: number;
  title: string;
  subtitle: string;
  descriptionEn: string;
  descriptionId: string;
  detailEn: string;
  detailId: string;
  client: string;
  domain?: string;
  screenshots: string[];
  tech: TechItem[];
  type: ProjectType;
};

const projects: Project[] = [
  {
    id: 1, title: "MCAP", subtitle: "Mobile Collateral Appraisal Platform",
    type: "main-job",
    client: "PT Bank Mandiri",
    domain: "mcap.bankmandiri.co.id",
    descriptionEn: "Mobile platform for real-time collateral appraisal with interactive map integration.",
    descriptionId: "Platform mobile untuk penilaian agunan secara real-time dengan integrasi peta interaktif.",
    detailEn: "MCAP is a mobile web application used by PT Bank Mandiri's collateral appraisal team to conduct on-site asset surveys and valuations. The app features geolocation, asset photo capture, and map integration for accurately marking collateral locations.",
    detailId: "MCAP adalah aplikasi mobile web yang digunakan oleh tim penilai agunan PT Bank Mandiri untuk melakukan survei dan penilaian aset secara langsung di lapangan. Aplikasi ini dilengkapi dengan fitur geolokasi, pengambilan foto aset, serta integrasi peta untuk menandai lokasi agunan secara akurat.",
    screenshots: [
      "/screenshots/mcap-1.png",
      "/screenshots/mcap-2.png",
    ],
    tech: [
      { icon: SiAngular, label: "Angular", color: "#DD0031" },
      { icon: SiTailwindcss, label: "Tailwind", color: "#38BDF8" },
      { icon: null, label: "Angular Maps", color: "#4ade80" },
    ],
  },
  {
    id: 2, title: "ORP", subtitle: "Operational Request Platform",
    type: "main-job",
    client: "PT Bank Mandiri",
    domain: "app.superops.bankmandiri.co.id",
    descriptionEn: "Operational request management platform with centralized state management and enterprise UI.",
    descriptionId: "Platform manajemen permintaan operasional dengan state management terpusat dan UI enterprise.",
    detailEn: "ORP is an internal PT Bank Mandiri system used to manage operational requests between divisions. Key features include request submission, multi-level approval workflow, status tracking, and a real-time monitoring dashboard with notifications.",
    detailId: "ORP merupakan sistem internal PT Bank Mandiri yang digunakan untuk mengelola permintaan operasional antar divisi. Fitur utama meliputi pengajuan request, approval workflow multi-level, tracking status, serta dashboard monitoring real-time dengan notifikasi.",
    screenshots: [
      "/screenshots/orp-1.png",
      "/screenshots/orp-2.png",
      "/screenshots/orp-3.png",
    ],
    tech: [
      { icon: SiReact, label: "React", color: "#61DAFB" },
      { icon: SiTailwindcss, label: "Tailwind", color: "#38BDF8" },
      { icon: SiAntdesign, label: "Ant Design", color: "#1677FF" },
      { icon: SiRedux, label: "Redux", color: "#764ABC" },
    ],
  },
  {
    id: 3, title: "CMS", subtitle: "Collateral Management System",
    type: "main-job",
    client: "PT Bank Mandiri",
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
    id: 4, title: "IRS", subtitle: "Internal Reconciliation System",
    type: "main-job",
    client: "PT Bank Mandiri",
    domain: undefined,
    descriptionEn: "Internal data reconciliation system for automated cross-system financial data validation and reporting.",
    descriptionId: "Sistem rekonsiliasi data internal untuk validasi dan pelaporan data keuangan lintas sistem secara otomatis.",
    detailEn: "IRS is an internal reconciliation system built for PT Bank Mandiri to automate the process of validating and matching financial data across multiple systems. The system uses SSIS (SQL Server Integration Services) for ETL pipelines and MySQL for data storage, enabling accurate and efficient reconciliation reporting at scale.",
    detailId: "IRS adalah sistem rekonsiliasi internal yang dibangun untuk PT Bank Mandiri guna mengotomatisasi proses validasi dan pencocokan data keuangan lintas sistem. Sistem ini menggunakan SSIS (SQL Server Integration Services) untuk pipeline ETL dan MySQL sebagai penyimpanan data, menghasilkan laporan rekonsiliasi yang akurat dan efisien dalam skala besar.",
    screenshots: [],
    tech: [
      { icon: SiMysql, label: "MySQL", color: "#4479A1" },
      { icon: Database, label: "SSIS", color: "#CC2927" },
    ],
  },
  {
    id: 6, title: "Nonoman Galuh", subtitle: "Platform Budaya Sunda",
    type: "freelance",
    client: "Nonoman Galuh",
    domain: "nonoman-galuh.vercel.app",
    descriptionEn: "Cultural organization platform featuring news, YouTube channel, digital library, and member management.",
    descriptionId: "Platform organisasi budaya dengan fitur berita, kanal YouTube, perpustakaan digital, dan manajemen anggota.",
    detailEn: "Nonoman Galuh is a digital platform for a Sundanese cultural organization based in Ciamis, West Java. The platform includes a news feed, YouTube video showcase (Kanal YouTube), a digital book library called Bale Maos, member directories, and cultural program galleries. Built with Next.js, Tailwind CSS, and Supabase as the backend and database.",
    detailId: "Nonoman Galuh adalah platform digital untuk organisasi kebudayaan Sunda yang berbasis di Ciamis, Jawa Barat. Platform ini mencakup feed berita dan informasi, tampilan video YouTube (Kanal YouTube), perpustakaan buku digital bernama Bale Maos, direktori anggota, serta galeri program budaya. Dibangun dengan Next.js, Tailwind CSS, dan Supabase sebagai backend dan database.",
    screenshots: [
      "/screenshots/nonoman-1.png",
      "/screenshots/nonoman-2.png",
      "/screenshots/nonoman-3.png",
    ],
    tech: [
      { icon: SiNextdotjs, label: "Next.js", color: "#ffffff" },
      { icon: SiTailwindcss, label: "Tailwind", color: "#38BDF8" },
      { icon: SiSupabase, label: "Supabase", color: "#3ECF8E" },
    ],
  },
  {
    id: 7, title: "PUKIS", subtitle: "Dongeng Sunda",
    type: "freelance",
    client: "Nonoman Galuh",
    domain: "www.pukis-dongengsunda.com",
    descriptionEn: "Interactive Sundanese folklore digital platform with an interactive regional map and authentication system.",
    descriptionId: "Platform digital dongeng Sunda interaktif dengan peta wilayah dan sistem autentikasi pengguna.",
    detailEn: "PUKIS (Dongeng Sunda) is a digital community platform that preserves and promotes Sundanese folklore. Key features include an interactive map of West Java showing folklore locations across 27 regencies/cities, story reading, and Google-based authentication. Built with Next.js, Tailwind CSS, shadcn/ui, and Supabase as the backend and database.",
    detailId: "PUKIS (Dongeng Sunda) adalah platform komunitas digital untuk melestarikan dan memperkenalkan kembali dongeng-dongeng Sunda. Fitur utama mencakup peta interaktif Jawa Barat yang menampilkan lokasi dongeng dari 27 kabupaten/kota, pembacaan cerita, serta autentikasi berbasis Google. Dibangun dengan Next.js, Tailwind CSS, shadcn/ui, dan Supabase sebagai backend dan database.",
    screenshots: [
      "/screenshots/pukis-3.png",
      "/screenshots/pukis-2.png",
      "/screenshots/pukis-1.png",
    ],
    tech: [
      { icon: SiNextdotjs, label: "Next.js", color: "#ffffff" },
      { icon: SiTailwindcss, label: "Tailwind", color: "#38BDF8" },
      { icon: SiShadcnui, label: "shadcn/ui", color: "#ffffff" },
      { icon: SiSupabase, label: "Supabase", color: "#3ECF8E" },
    ],
  },
  {
    id: 8, title: "Wedding Invitation", subtitle: "Digital Wedding Invitation",
    type: "freelance",
    client: "Personal",
    domain: "salman-karima.com",
    descriptionEn: "Animated digital wedding invitation with illustrated storytelling and elegant warm design.",
    descriptionId: "Undangan pernikahan digital beranimasi dengan ilustrasi cerita dan desain hangat yang elegan.",
    detailEn: "A personalized digital wedding invitation for Salman & Karina, built as a mobile-first web experience. Features a story-driven flow with illustrated scenes — from their school days to the wedding day — accompanied by a Quranic quote, event details, and a closing message. Built with Next.js and Tailwind CSS for a smooth, responsive experience.",
    detailId: "Undangan pernikahan digital personal untuk Salman & Karina, dibangun sebagai pengalaman web berbasis mobile. Menampilkan alur berbasis cerita dengan ilustrasi — mulai dari masa sekolah hingga hari pernikahan — dilengkapi ayat Al-Qur'an, detail acara, dan pesan penutup. Dibangun dengan Next.js dan Tailwind CSS untuk pengalaman yang halus dan responsif.",
    screenshots: [
      "/screenshots/wedding-1.png",
      "/screenshots/wedding-2.png",
      "/screenshots/wedding-3.png",
      "/screenshots/wedding-4.png",
    ],
    tech: [
      { icon: SiNextdotjs, label: "Next.js", color: "#ffffff" },
      { icon: SiTailwindcss, label: "Tailwind", color: "#38BDF8" },
    ],
  },
  {
    id: 9, title: "PENTAGON", subtitle: "Design System & UI Design",
    type: "freelance",
    client: "Pemerintah Provinsi Gorontalo",
    domain: undefined,
    descriptionEn: "UI design and design system for an open government data platform of Gorontalo Province.",
    descriptionId: "Desain UI dan design system untuk platform data terbuka pemerintah Provinsi Gorontalo.",
    detailEn: "PENTAGON (Platform Data Terbuka Pemerintah Provinsi Gorontalo) is a government open data portal designed to aggregate, manage, and share public datasets across all regional agencies. The design system covers a full page set — homepage, dataset explorer, regional heritage (Khazanah Gorontalo), statistics dashboard, publications, and news. Built entirely in Figma with a deep purple color palette, serif typography, and a clean data-forward layout.",
    detailId: "PENTAGON (Platform Data Terbuka Pemerintah Provinsi Gorontalo) adalah portal data terbuka pemerintah yang dirancang untuk mengumpulkan, mengelola, dan membagikan dataset publik dari seluruh perangkat daerah. Design system mencakup halaman lengkap — beranda, eksplorasi dataset, khazanah daerah, dashboard statistik, publikasi, dan berita. Dirancang sepenuhnya di Figma dengan palet warna ungu tua, tipografi serif, dan tata letak yang bersih dan berbasis data.",
    screenshots: [
      "/screenshots/pentagon-1.png",
      "/screenshots/pentagon-2.png",
      "/screenshots/pentagon-3.png",
      "/screenshots/pentagon-4.png",
      "/screenshots/pentagon-5.png",
      "/screenshots/pentagon-6.png",
    ],
    tech: [
      { icon: SiFigma, label: "Figma", color: "#F24E1E" },
    ],
  },
];

const typeConfig = {
  "main-job": {
    color: "#60a5fa",
    bg: "rgba(96,165,250,0.12)",
    border: "rgba(96,165,250,0.25)",
    labelEn: "Main Job",
    labelId: "Pekerjaan Utama",
  },
  "freelance": {
    color: "#fbbf24",
    bg: "rgba(251,191,36,0.12)",
    border: "rgba(251,191,36,0.25)",
    labelEn: "Freelance",
    labelId: "Freelance",
  },
};

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
          <div className="flex flex-col items-start sm:items-end gap-2">
            <p className="text-sm max-w-xs sm:text-right leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              {t("A collection of projects built across", "Kumpulan proyek yang dibangun selama")}{" "}
              <span className="font-semibold" style={{ color: "white" }}>4 {t("years", "tahun")}</span>{" "}
              {t("of frontend engineering experience.", "pengalaman frontend engineering.")}
            </p>
            <div className="flex items-center gap-3">
              {(["main-job", "freelance"] as const).map((type) => (
                <div key={type} className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: typeConfig[type].color }} />
                  <span className="text-[10px] font-medium" style={{ color: "rgba(255,255,255,0.45)" }}>
                    {lang === "EN" ? typeConfig[type].labelEn : typeConfig[type].labelId}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelected(project)}
              className="group rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 cursor-pointer hover:scale-[1.02]"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: `1px solid ${typeConfig[project.type].border}`,
              }}
            >
              <div>
                <div className="flex items-start mb-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(155,27,27,0.2)", border: "1px solid rgba(155,27,27,0.3)" }}>
                    <span className="text-[#ff6b6b] text-xs font-bold" style={{ fontFamily: "var(--font-lora)" }}>
                      {String(project.id).padStart(2, "0")}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold uppercase leading-tight" style={{ fontFamily: "var(--font-lora)", color: "white" }}>
                    {project.title}
                  </h3>
                  <span
                    className="text-[9px] font-semibold uppercase tracking-wider rounded-full px-2 py-0.5 flex-shrink-0"
                    style={{
                      color: typeConfig[project.type].color,
                      background: typeConfig[project.type].bg,
                      border: `1px solid ${typeConfig[project.type].border}`,
                    }}
                  >
                    {lang === "EN" ? typeConfig[project.type].labelEn : typeConfig[project.type].labelId}
                  </span>
                </div>
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
          <div className="fixed inset-0 z-[70] flex items-center justify-center px-3 py-4 sm:p-6 pointer-events-none">
            <div
              className="w-full sm:max-w-3xl max-h-[78vh] sm:max-h-[85vh] rounded-3xl overflow-hidden flex flex-col pointer-events-auto"
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
                    <div className="flex items-center gap-2">
                      <h2 className="text-white font-bold text-lg uppercase leading-none" style={{ fontFamily: "var(--font-lora)" }}>
                        {selected.title}
                      </h2>
                      <span
                        className="text-[9px] font-semibold uppercase tracking-wider rounded-full px-2 py-0.5 flex-shrink-0"
                        style={{
                          color: typeConfig[selected.type].color,
                          background: typeConfig[selected.type].bg,
                          border: `1px solid ${typeConfig[selected.type].border}`,
                        }}
                      >
                        {lang === "EN" ? typeConfig[selected.type].labelEn : typeConfig[selected.type].labelId}
                      </span>
                    </div>
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="rounded-2xl p-4" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className="w-3.5 h-3.5" style={{ color: "#ff6b6b" }} />
                      <span className="text-[10px] uppercase tracking-widest font-semibold" style={{ color: "rgba(255,255,255,0.3)" }}>Client</span>
                    </div>
                    <p className="text-white text-sm font-semibold">{selected.client}</p>
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
                        <img key={i} src={src} alt={`Screenshot ${i + 1}`} className="rounded-xl w-full h-auto object-contain" />
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
