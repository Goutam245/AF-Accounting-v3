import { useLang, Lang } from "@/i18n/LanguageContext";

const FlagCA = () => (
  <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", flexShrink: 0, minWidth: 18 }}>
    <rect width="18" height="13" rx="2" fill="#fff"/>
    <rect width="4.5" height="13" fill="#D52B1E"/>
    <rect x="13.5" width="4.5" height="13" fill="#D52B1E"/>
    {/* Maple leaf — scaled to fit inside 4.5–13.5 x range, 1–12 y range */}
    <path d="M9 1.5L9.7 4H12.5L10.3 5.5L11 8L9 6.8L7 8L7.7 5.5L5.5 4H8.3L9 1.5Z" fill="#D52B1E"/>
  </svg>
);

const FlagFR = () => (
  <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", flexShrink: 0, minWidth: 18 }}>
    <rect width="18" height="13" rx="2" fill="#fff"/>
    <rect width="6" height="13" fill="#002395"/>
    <rect x="12" width="6" height="13" fill="#ED2939"/>
  </svg>
);

export const LangToggle = ({ className = "", showLabel = false }: { className?: string; showLabel?: boolean }) => {
  const { lang, setLang } = useLang();

  const opt = (l: Lang, label: string, Flag: () => JSX.Element) => (
    <button
      key={l}
      onClick={() => setLang(l)}
      className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
        lang === l ? "bg-navy text-white shadow" : "text-navy/70 hover:text-navy"
      }`}
      aria-pressed={lang === l}
    >
      <Flag />
      <span>{label}</span>
    </button>
  );

  return (
    <div className={className}>
      {showLabel && (
        <div className="overline text-muted-foreground mb-2 text-[10px]">Language / Langue</div>
      )}
      <div className="inline-flex items-center gap-1 p-1 rounded-full bg-[hsl(var(--border))]">
        {opt("en", "EN", FlagCA)}
        {opt("fr", "FR", FlagFR)}
      </div>
    </div>
  );
};