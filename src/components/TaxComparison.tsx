import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { FadeIn, Overline } from "@/components/ui-bits";

type Row = {
  qc: string;
  on: string;
  tipEn: string;
  tipFr: string;
};

export const TaxComparison = () => {
  const { t } = useLang();
  const rows: Row[] = [
    {
      qc: "QST Registration",
      on: "HST Registration",
      tipEn: "Quebec uses QST (administered by Revenu Québec) at 9.975%. Ontario uses HST (CRA) at 13%.",
      tipFr: "Le Québec utilise la TVQ (Revenu Québec) à 9,975%. L'Ontario utilise la TVH (ARC) à 13%.",
    },
    {
      qc: "QST Return (monthly/quarterly)",
      on: "HST Return",
      tipEn: "Filing frequency depends on revenue. QC filers report to Revenu Québec; ON filers to CRA.",
      tipFr: "La fréquence dépend du revenu. QC à Revenu Québec; ON à l'ARC.",
    },
    {
      qc: "RL-1 Slips",
      on: "T4 Slips",
      tipEn: "Quebec employees receive both an RL-1 (provincial) and a T4 (federal). Ontario only the T4.",
      tipFr: "Les employés du Québec reçoivent RL-1 (provincial) et T4 (fédéral). En Ontario, seulement T4.",
    },
    {
      qc: "CO-17 Corp Tax",
      on: "T2 Corp Tax",
      tipEn: "Quebec corporations file a CO-17 with Revenu Québec in addition to the federal T2.",
      tipFr: "Les sociétés du Québec produisent un CO-17 avec Revenu Québec en plus du T2 fédéral.",
    },
    {
      qc: "Revenu Québec",
      on: "CRA",
      tipEn: "Quebec is the only province that administers its own income tax — you deal with both Revenu Québec and the CRA.",
      tipFr: "Le Québec est la seule province à administrer son propre impôt — vous traitez avec Revenu Québec et l'ARC.",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container-x max-w-5xl">
        <FadeIn className="text-center max-w-3xl mx-auto mb-12">
          <Overline>{t("Compare", "Comparer")}</Overline>
          <h2>
            {t("Quebec vs Ontario Tax Deadlines — ", "Échéances fiscales Québec vs Ontario — ")}
            <span className="accent-text">{t("What's Different?", "Quelles différences?")}</span>
          </h2>
          <p className="text-body mt-4">
            {t("Hover any row to see a plain-language explanation.", "Survolez une ligne pour voir une explication en langage clair.")}
          </p>
        </FadeIn>

        <FadeIn>
          <div className="rounded-2xl border border-border overflow-hidden bg-white">
            <div className="grid grid-cols-2 bg-navy text-white">
              <div className="p-4 font-display font-bold flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-accent text-xs">QC</span> Quebec
              </div>
              <div className="p-4 font-display font-bold flex items-center gap-2 border-l border-white/10">
                <span className="px-2 py-0.5 rounded bg-white/20 text-xs">ON</span> Ontario
              </div>
            </div>
            {rows.map((r, i) => (
              <div
                key={i}
                className="grid grid-cols-2 border-t border-border group relative cursor-help transition-colors hover:bg-peach"
              >
                <div className="p-4 text-navy font-medium">{r.qc}</div>
                <div className="p-4 text-navy font-medium border-l border-border">{r.on}</div>
                {/* Tooltip */}
                <div className="hidden group-hover:block absolute z-10 left-1/2 -translate-x-1/2 top-full mt-1 w-[90%] max-w-md p-3 rounded-lg bg-navy text-white text-xs leading-relaxed shadow-xl">
                  {t(r.tipEn, r.tipFr)}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn className="text-center mt-10">
          <p className="text-body mb-4">{t("Not sure what applies to you?", "Vous ne savez pas ce qui s'applique?")}</p>
          <Link to="/contact" className="btn-primary">
            {t("Book a Free Call", "Réservez un appel gratuit")} <ArrowRight size={16} />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
};
