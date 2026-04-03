import { ArrowUpRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiTailwindcss,
  SiAntdesign,
  SiFigma,
  SiJenkins,
  SiClaude,
} from "react-icons/si";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex-1 w-full overflow-hidden flex flex-col min-h-0"
      style={{ backgroundColor: "#0D0605" }}
    >
      {/* Background gradients (dark only) */}
      <div className="absolute inset-0 z-0 block">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A0A06] via-[#0D0605] to-[#0a0303]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_30%_60%_at_50%_40%,rgba(180,120,60,0.18),transparent_70%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[radial-gradient(ellipse,rgba(200,140,70,0.12),transparent_70%)]" />
      </div>

      {/* Person photo */}
      <div className="absolute inset-0 z-0 flex items-end justify-center pointer-events-none overflow-hidden">
        <div className="relative w-[80%] h-[140%] mb-0">
          <Image
            src="/foto-profile.png"
            alt="Profile photo"
            fill
            className="object-contain object-bottom drop-shadow-2xl"
            priority
          />
        </div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex-1 flex flex-col pt-20">
        <div className="flex-1 grid grid-cols-3 gap-0">

          {/* LEFT column */}
          <div className="flex flex-col justify-between px-8 py-10">
            <div>
              <h1
                className="text-5xl xl:text-6xl font-bold leading-[0.95] uppercase tracking-tight mb-6"
                style={{ fontFamily: "var(--font-oswald)", color: "white" }}
              >
                Crafting
                <br />
                Seamless
                <br />
                Digital
                <br />
                Experiences
                <br />
                With Code.
              </h1>
              <p className="text-sm leading-relaxed max-w-[220px] mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
                Frontend Engineer with{" "}
                <span className="font-bold" style={{ color: "white" }}>4 years</span>{" "}
                of experience building modern web applications.
              </p>
              <Button className="bg-[#9B1B1B] hover:bg-[#B52020] text-white rounded-full px-8 py-5 text-sm font-bold tracking-widest uppercase border-0">
                Read More
              </Button>
            </div>

            {/* Stat cards */}
            <div className="flex gap-3">
              {/* Card 1 */}
              <div className="bg-white/95 dark:bg-white/95 text-black rounded-2xl p-4 flex flex-col justify-between w-36 min-h-[140px] shadow-sm">
                <div className="w-7 h-7 bg-black rounded-md flex items-center justify-center">
                  <Plus className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <div>
                  <div className="text-4xl font-bold text-black" style={{ fontFamily: "var(--font-oswald)" }}>
                    472+
                  </div>
                  <div className="text-[10px] text-black/60 uppercase tracking-wide font-semibold mt-1">
                    Projects Delivered.
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div
                className="backdrop-blur-sm rounded-2xl p-4 flex flex-col justify-between w-44 min-h-[140px]"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <div className="flex items-start justify-between">
                  <p className="text-xs leading-tight" style={{ color: "rgba(255,255,255,0.5)" }}>
                    Years of
                    <br />
                    experience
                  </p>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
                    <ArrowUpRight className="w-3 h-3" style={{ color: "rgba(255,255,255,0.5)" }} />
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold" style={{ fontFamily: "var(--font-oswald)", color: "white" }}>
                    4+
                  </div>
                  <div className="text-[10px] uppercase tracking-wide font-semibold mt-1" style={{ color: "rgba(255,255,255,0.25)" }}>
                    Years in IT Industry
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CENTER — spacer */}
          <div />

          {/* RIGHT column */}
          <div className="flex flex-col justify-between px-8 py-10">
            <div className="flex flex-col items-end text-right">
              <h2
                className="text-5xl xl:text-7xl font-bold leading-[0.9] uppercase tracking-tight mb-6"
                style={{ fontFamily: "var(--font-oswald)", color: "white" }}
              >
                Frontend
                <br />
                Engineer
                <br />
                &amp; UI Dev
              </h2>
              <p className="text-sm leading-relaxed max-w-[240px]" style={{ color: "rgba(255,255,255,0.5)" }}>
                Specialized in{" "}
                <span className="font-bold" style={{ color: "white" }}>React & Next.js</span>
                , building scalable and performant interfaces with modern tools and best practices.
              </p>
            </div>

            {/* Tech Stack card */}
            <div
              className="backdrop-blur-sm rounded-2xl p-5"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-base leading-tight" style={{ color: "white" }}>
                  Tech Stack
                  <br />
                  &amp; Tools
                </h3>
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <ArrowUpRight className="w-4 h-4" style={{ color: "white" }} />
                </div>
              </div>
              <p className="text-xs leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.25)" }}>
                / React · Next.js · Angular · TailwindCSS · Ant Design · shadcn/ui · Jenkins /
              </p>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { icon: SiReact, label: "React", color: "#61DAFB" },
                  { icon: SiNextdotjs, label: "Next.js", color: "#000000" },
                  { icon: SiAngular, label: "Angular", color: "#DD0031" },
                  { icon: SiTailwindcss, label: "Tailwind", color: "#38BDF8" },
                  { icon: SiAntdesign, label: "Ant Design", color: "#1677FF" },
                  { icon: SiFigma, label: "Figma", color: "#F24E1E" },
                  { icon: SiJenkins, label: "Jenkins", color: "#D33833" },
                  { icon: SiClaude, label: "Claude", color: "#D4A27F" },
                ].map(({ icon: Icon, label, color }) => (
                  <div
                    key={label}
                    title={label}
                    className="flex flex-col items-center gap-1 rounded-xl p-2 transition-colors cursor-default"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    <Icon style={{ color }} className="w-5 h-5" />
                    <span className="text-[9px] text-center leading-tight" style={{ color: "rgba(255,255,255,0.25)" }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
