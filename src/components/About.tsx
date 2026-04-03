import Image from "next/image";
import { GraduationCap, Briefcase, User, Calendar, MapPin } from "lucide-react";

export default function About() {
  return (
    <div className="relative h-full w-full  flex flex-col px-8 pt-24 pb-8 overflow-hidden" >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_20%_50%,rgba(155,27,27,0.10),transparent_70%)] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 mb-6">
        <p className="text-white/30 text-xs uppercase tracking-widest font-semibold mb-1">
          03 / About
        </p>
        <h2
          className="text-5xl xl:text-6xl font-bold uppercase text-white leading-none"
          style={{ fontFamily: "var(--font-oswald)" }}
        >
          About Me
        </h2>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex gap-6 min-h-0">

        {/* LEFT — Photo */}
        <div className="w-[280px] flex-shrink-0 relative rounded-2xl overflow-hidden border border-white/10 bg-white/5">
          <Image
            src="/foto-about.jpg"
            alt="Salman Faris Siddiq"
            fill
            className="object-cover object-[center_5%] scale-[2.2] origin-center"
            priority
          />
        </div>

        {/* RIGHT — Info */}
        <div className="flex-1 flex flex-col gap-4 min-h-0 overflow-y-auto" style={{ scrollbarWidth: "none" }}>

          {/* Profile card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-[#9B1B1B]/30 border border-[#9B1B1B]/40 flex items-center justify-center">
                <User className="w-3.5 h-3.5 text-[#ff6b6b]" />
              </div>
              <span className="text-white/50 text-xs uppercase tracking-widest font-semibold">Profile</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-white/30 text-[10px] uppercase tracking-widest mb-1">Full Name</p>
                <p className="text-white font-semibold text-sm">Salman Faris Siddiq</p>
              </div>
              <div>
                <p className="text-white/30 text-[10px] uppercase tracking-widest mb-1">Birthday</p>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3 h-3 text-white/30" />
                  <p className="text-white font-semibold text-sm">27 Mei 1998</p>
                </div>
              </div>
              <div>
                <p className="text-white/30 text-[10px] uppercase tracking-widest mb-1">Role</p>
                <p className="text-white font-semibold text-sm">Frontend Engineer</p>
              </div>
              <div>
                <p className="text-white/30 text-[10px] uppercase tracking-widest mb-1">Experience</p>
                <p className="text-white font-semibold text-sm">4+ Years</p>
              </div>
            </div>
          </div>

          {/* Education card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
              </div>
              <span className="text-white/50 text-xs uppercase tracking-widest font-semibold">Education</span>
            </div>
            <div className="flex flex-col gap-3">
              {/* SMA */}
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                <div className="flex items-start justify-between flex-1">
                  <div>
                    <p className="text-white/30 text-[10px] uppercase tracking-widest mb-0.5">SMA</p>
                    <p className="text-white font-semibold text-sm">SMAN 1 Ciamis</p>
                  </div>
                  <span className="text-[10px] text-blue-400 border border-blue-500/30 bg-blue-500/10 rounded-full px-2 py-0.5 font-semibold">
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
                    <p className="text-white/30 text-[10px] uppercase tracking-widest mb-0.5">Perguruan Tinggi</p>
                    <p className="text-white font-semibold text-sm">Politeknik Negeri Bandung</p>
                    <p className="text-white/50 text-xs mt-0.5">D3 — Teknik Konstruksi Sipil</p>
                    <p className="text-white/30 text-[10px] mt-0.5">GPA : 3.01</p>
                  </div>
                  <span className="text-[10px] text-blue-400 border border-blue-500/30 bg-blue-500/10 rounded-full px-2 py-0.5 font-semibold">
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
              <span className="text-white/50 text-xs uppercase tracking-widest font-semibold">Work Experience</span>
            </div>
            <div className="flex flex-col gap-4">
              {/* Entry 1 — PT Sutardi */}
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center pt-1 flex-shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20 border-2 border-white/40" />
                  <div className="w-px bg-gradient-to-b from-white/20 to-transparent mt-1 h-8" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-white font-bold text-sm">PT Sutardi Persada Raya</p>
                    <span className="text-[10px] text-white/50 border border-white/20 bg-white/5 rounded-full px-2 py-0.5 font-semibold">
                      2020 — 2021
                    </span>
                  </div>
                  <p className="text-white/30 text-xs mt-1 leading-relaxed">
                    Civil Engineer — pelaksanaan dan pengawasan proyek konstruksi.
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
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-white font-bold text-sm">PT Lawencon International</p>
                    <span className="text-[10px] text-[#ff6b6b] border border-[#9B1B1B]/40 bg-[#9B1B1B]/20 rounded-full px-2 py-0.5 font-semibold">
                      2022 — Present
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-1">
                    <MapPin className="w-3 h-3 text-white/30 flex-shrink-0" />
                    <p className="text-white/50 text-xs">Client: PT Bank Mandiri</p>
                  </div>
                  <p className="text-white/30 text-xs mt-2 leading-relaxed">
                    Frontend Engineer — mengembangkan aplikasi web enterprise untuk kebutuhan operasional perbankan.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
