import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Lora, Caveat } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Portfolio — Creative Branding Studio",
  description: "Unlock your business potential with expert solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${lora.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="h-screen overflow-hidden bg-[#0D0605] text-white">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
