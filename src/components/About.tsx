"use client";

import { GraduationCap, Briefcase, User, Calendar, MapPin } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

export default function About() {
  const { lang, t } = useLang();

  return (
    <div className="relative h-full w-full flex flex-col overflow-hidden" style={{ backgroundColor: "#0D0605", color: "white" }}>
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_20%_50%,rgba(155,27,27,0.10),transparent_70%)] pointer-events-none" />
      <div className="flex-1 flex flex-col max-w-[1440px] mx-auto w-full px-4 sm:px-8 lg:px-16 pt-20 sm:pt-24 pb-4 sm:pb-8 min-h-0 overflow-y-auto" style={{ scrollbarWidth: "none" }}>

        {/* Header */}
        <div className="relative z-10 mb-5 sm:mb-6">
          <p className="text-white/30 text-xs uppercase tracking-widest font-semibold mb-1">
            03 / {t("About", "Tentang")}
          </p>
          <h2
            className="text-4xl sm:text-5xl xl:text-6xl font-bold uppercase text-white leading-none"
            style={{ fontFamily: "var(--font-lora)" }}
          >
            {t("About Me", "Tentang Saya")}
          </h2>
        </div>

        {/* Info cards */}
        <div className="relative z-10 flex flex-col gap-4">

          {/* Profile card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-[#9B1B1B]/30 border border-[#9B1B1B]/40 flex items-center justify-center">
                <User className="w-3.5 h-3.5 text-[#ff6b6b]" />
              </div>
              <span className="text-white/50 text-xs uppercase tracking-widest font-semibold">{t("Profile", "Profil")}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <p className="text-white/30 text-[10px] uppercase tracking-widest mb-1">{t("Full Name", "Nama Lengkap")}</p>
                <p className="text-white font-semibold text-sm">Salman Faris Siddiq</p>
              </div>
              <div>
                <p className="text-white/30 text-[10px] uppercase tracking-widest mb-1">{t("Birthday", "Tanggal Lahir")}</p>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3 h-3 text-white/30" />
                  <p className="text-white font-semibold text-sm">{t("May 27, 1998", "27 Mei 1998")}</p>
                </div>
              </div>
              <div>
                <p className="text-white/30 text-[10px] uppercase tracking-widest mb-1">{t("Role", "Peran")}</p>
                <p className="text-white font-semibold text-sm">Frontend Engineer</p>
              </div>
              <div>
                <p className="text-white/30 text-[10px] uppercase tracking-widest mb-1">{t("Experience", "Pengalaman")}</p>
                <p className="text-white font-semibold text-sm">4+ {t("Years", "Tahun")}</p>
              </div>
            </div>
          </div>

          {/* Education + Work — side by side on lg */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

            {/* Education card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                  <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <span className="text-white/50 text-xs uppercase tracking-widest font-semibold">{t("Education", "Pendidikan")}</span>
              </div>
              <div className="flex flex-col gap-3">
                {/* SMA */}
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                  <div className="flex items-start justify-between flex-1">
                    <div>
                      <p className="text-white/30 text-[10px] uppercase tracking-widest mb-0.5">{t("High School", "SMA")}</p>
                      <p className="text-white font-semibold text-sm">SMAN 1 Ciamis</p>
                    </div>
                    <span className="text-[10px] text-blue-400 border border-blue-500/30 bg-blue-500/10 rounded-full px-2 py-0.5 font-semibold whitespace-nowrap">
                      2014 — 2017
                    </span>
                  </div>
                </div>
                <div className="border-t border-white/5" />
                {/* College */}
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                  <div className="flex items-start justify-between flex-1">
                    <div>
                      <p className="text-white/30 text-[10px] uppercase tracking-widest mb-0.5">{t("University", "Perguruan Tinggi")}</p>
                      <p className="text-white font-semibold text-sm">Politeknik Negeri Bandung</p>
                      <p className="text-white/50 text-xs mt-0.5">{t("D3 — Civil Construction Engineering", "D3 — Teknik Konstruksi Sipil")}</p>
                      <p className="text-white/30 text-[10px] mt-0.5">GPA : 3.01</p>
                    </div>
                    <span className="text-[10px] text-blue-400 border border-blue-500/30 bg-blue-500/10 rounded-full px-2 py-0.5 font-semibold whitespace-nowrap">
                      2017 — 2020
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Work experience card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-[#9B1B1B]/30 border border-[#9B1B1B]/40 flex items-center justify-center">
                  <Briefcase className="w-3.5 h-3.5 text-[#ff6b6b]" />
                </div>
                <span className="text-white/50 text-xs uppercase tracking-widest font-semibold">{t("Work Experience", "Pengalaman Kerja")}</span>
              </div>
              <div className="flex flex-col gap-4">
                {/* Entry 1 — PT Sutardi */}
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center pt-1 flex-shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20 border-2 border-white/40" />
                    <div className="w-px bg-gradient-to-b from-white/20 to-transparent mt-1 h-8" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1 flex-wrap gap-2">
                      <p className="text-white font-bold text-sm">PT Sutardi Persada Raya</p>
                      <span className="text-[10px] text-white/50 border border-white/20 bg-white/5 rounded-full px-2 py-0.5 font-semibold whitespace-nowrap">
                        2020 — 2021
                      </span>
                    </div>
                    <p className="text-white/30 text-xs mt-1 leading-relaxed">
                      {t(
                        "Civil Engineer — project execution and construction supervision.",
                        "Civil Engineer — pelaksanaan dan pengawasan proyek konstruksi."
                      )}
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/5" />

                {/* Entry 2 — PT Lawencon */}
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center pt-1 flex-shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#9B1B1B] border-2 border-[#ff6b6b]" />
                    <div className="w-px flex-1 bg-gradient-to-b from-[#ff6b6b]/40 to-transparent mt-1 h-8" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1 flex-wrap gap-2">
                      <p className="text-white font-bold text-sm">PT Lawencon International</p>
                      <span className="text-[10px] text-[#ff6b6b] border border-[#9B1B1B]/40 bg-[#9B1B1B]/20 rounded-full px-2 py-0.5 font-semibold whitespace-nowrap">
                        2022 — {t("Present", "Sekarang")}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 mt-1">
                      <MapPin className="w-3 h-3 text-white/30 flex-shrink-0" />
                      <p className="text-white/50 text-xs">Client: PT Bank Mandiri</p>
                    </div>
                    <p className="text-white/30 text-xs mt-2 leading-relaxed">
                      {t(
                        "Frontend Engineer — developing enterprise web applications for banking operational needs.",
                        "Frontend Engineer — mengembangkan aplikasi web enterprise untuk kebutuhan operasional perbankan."
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
