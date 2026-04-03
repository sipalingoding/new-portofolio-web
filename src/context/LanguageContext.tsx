"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type Lang = "EN" | "ID";

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (en: string, id: string) => string;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "EN",
  setLang: () => {},
  t: (en) => en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("EN");
  const t = (en: string, id: string) => (lang === "EN" ? en : id);
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
