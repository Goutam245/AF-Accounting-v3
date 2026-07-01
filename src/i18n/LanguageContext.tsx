import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { translations, TranslationDict } from "./translations";

export type Lang = "en" | "fr";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  /** Inline helper: t("English", "Français") */
  t: (en: string, fr: string) => string;
  /** Central dictionary: tr.nav.home, tr.home.heroH1Line1, etc. */
  tr: TranslationDict;
};

const LangContext = createContext<Ctx>({
  lang: "en",
  setLang: () => {},
  t: (en) => en,
  tr: translations.en,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("af-lang") as Lang | null;
    if (saved === "fr" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("af-lang", l);
    document.documentElement.lang = l;
  };

  const t = (en: string, fr: string) => (lang === "fr" ? fr : en);
  const tr = translations[lang] as TranslationDict;

  return (
    <LangContext.Provider value={{ lang, setLang, t, tr }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);

/** Helper for rendering arrays of EN/FR strings */
export const tArr = (lang: Lang, en: string[], fr: string[]) =>
  lang === "fr" ? fr : en;
