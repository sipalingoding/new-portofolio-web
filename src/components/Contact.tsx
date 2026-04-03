import { Mail, ArrowUpRight } from "lucide-react";
import { SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "salman.faris.siddiq@gmail.com",
    href: "mailto:salman.faris.siddiq@gmail.com",
    color: "#EA4335",
    bg: "rgba(234,67,53,0.1)",
    border: "rgba(234,67,53,0.2)",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/salmanfarissiddiq",
    href: "https://linkedin.com/in/salmanfarissiddiq",
    color: "#0A66C2",
    bg: "rgba(10,102,194,0.1)",
    border: "rgba(10,102,194,0.2)",
  },
  {
    icon: SiInstagram,
    label: "Instagram",
    value: "@salmanfsiddiq",
    href: "https://instagram.com/salmanfsiddiq",
    color: "#E1306C",
    bg: "rgba(225,48,108,0.1)",
    border: "rgba(225,48,108,0.2)",
  },
];

export default function Contact() {
  return (
    <div className="relative h-full w-full  flex flex-col items-center justify-center px-8 overflow-hidden" >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(155,27,27,0.12),transparent_70%)] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 text-center mb-12">
        <p className="text-white/30 text-xs uppercase tracking-widest font-semibold mb-3">
          04 / Contact
        </p>
        <h2
          className="text-6xl xl:text-7xl font-bold uppercase text-white leading-none mb-4"
          style={{ fontFamily: "var(--font-oswald)" }}
        >
          Get In Touch
        </h2>
        <p className="text-white/30 text-sm max-w-md mx-auto leading-relaxed">
          Terbuka untuk peluang baru, kolaborasi, atau sekadar ngobrol seputar teknologi.
        </p>
      </div>

      {/* Contact cards */}
      <div className="relative z-10 flex flex-col gap-4 w-full max-w-lg">
        {contacts.map(({ icon: Icon, label, value, href, color, bg, border }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 rounded-2xl px-6 py-5 border transition-all duration-300 hover:scale-[1.02]"
            style={{ background: bg, borderColor: border }}
          >
            {/* Icon */}
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: `${color}20`, border: `1px solid ${color}40` }}
            >
              <Icon style={{ color }} className="w-5 h-5" />
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <p className="text-white/30 text-[10px] uppercase tracking-widest font-semibold mb-0.5">
                {label}
              </p>
              <p className="text-white font-semibold text-sm truncate">{value}</p>
            </div>

            {/* Arrow */}
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: `${color}20` }}
            >
              <ArrowUpRight style={{ color }} className="w-4 h-4" />
            </div>
          </a>
        ))}
      </div>

      {/* Footer note */}
      <p className="relative z-10 text-white/20 text-xs mt-10 tracking-wide">
        © {new Date().getFullYear()} Salman Faris Siddiq — Frontend Engineer
      </p>
    </div>
  );
}
