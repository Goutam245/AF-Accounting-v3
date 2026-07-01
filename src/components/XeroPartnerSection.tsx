import { Check } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { FadeIn } from "@/components/ui-bits";

export const XeroPartnerSection = () => {
  const { t } = useLang();
  const pills = [
    { en: "Fastest Xero Setup", fr: "Configuration Xero la plus rapide" },
    { en: "Certified Team", fr: "Équipe certifiée" },
    { en: "Direct Xero Support", fr: "Support Xero direct" },
  ];
  return (
    <section className="bg-white" style={{ padding: "60px 20px" }}>
      <div className="container-x text-center">
        <FadeIn>
          <div className="inline-flex items-center justify-center w-28 h-28 rounded-full mb-6"
            style={{ background: "#13B5EA", boxShadow: "0 8px 28px -10px rgba(19,181,234,0.55)" }}>
            <span className="font-display font-extrabold text-white text-3xl tracking-wide">xero</span>
          </div>
          <div className="mx-auto mb-6 inline-block rounded-full px-6 py-2 text-sm font-bold uppercase tracking-[0.2em] platinum-badge">
            ★ {t("Platinum Partner", "Partenaire Platinum")}
          </div>
          <h2 className="max-w-3xl mx-auto mb-8">
            {t("Quebec's Top Xero Platinum Partner ", "Le meilleur partenaire Platinum Xero ")}
            <span className="accent-text">{t("with Full Bilingual Capability", "au Québec avec service bilingue complet")}</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {pills.map((p, i) => (
              <div key={i}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-navy bg-white"
                style={{ border: "2px solid hsl(var(--accent))" }}>
                <Check size={16} className="text-accent" />
                {t(p.en, p.fr)}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
