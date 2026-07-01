import { useLang } from "@/i18n/LanguageContext";
import { FadeIn, Section } from "@/components/ui-bits";
import { PageHero } from "@/components/PageHero";
import { Eye, Crosshair, HeartHandshake, Sparkles, Check, X } from "lucide-react";

const About = () => {
  const { t } = useLang();

  const values = [
    { icon: <Eye />, en: { t: "Transparency", b: "Clear pricing, clear communication, clear reports. No surprises." }, fr: { t: "Transparence", b: "Tarifs clairs, communication claire, rapports clairs. Aucune surprise." } },
    { icon: <Crosshair />, en: { t: "Precision", b: "Numbers must be right. We double-check everything before it leaves our desk." }, fr: { t: "Précision", b: "Les chiffres doivent être exacts. Nous vérifions tout deux fois." } },
    { icon: <HeartHandshake />, en: { t: "Approachability", b: "We explain things in plain language. No jargon, no judgment." }, fr: { t: "Accessibilité", b: "Nous expliquons en langage clair. Pas de jargon, pas de jugement." } },
    { icon: <Sparkles />, en: { t: "Tech-Forward", b: "We use the best tools so you have real-time visibility, always." }, fr: { t: "Avant-gardiste", b: "Les meilleurs outils pour une visibilité en temps réel." } },
  ];

  const compare = [
    { en: "Cloud-first technology", fr: "Technologie infonuagique d'abord", us: true, them: false },
    { en: "Bilingual EN/FR service", fr: "Service bilingue FR/EN", us: true, them: true },
    { en: "Fixed monthly pricing", fr: "Tarif mensuel fixe", us: true, them: false },
    { en: "24-hour response", fr: "Réponse sous 24 heures", us: true, them: false },
    { en: "Xero Platinum Partner", fr: "Partenaire Platinum Xero", us: true, them: false },
    { en: "Plain-language reports", fr: "Rapports en langage clair", us: true, them: false },
  ];

  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&q=85"
        overline={t("About Us", "À propos")}
        crumb={t("About", "À propos")}
        title={t("Your Modern Accounting Partner —", "Votre partenaire comptable moderne —")}
        accent={t("Quebec and Canada", "Québec et Canada")}
        sub={t("We're rebuilding what an accounting firm looks like — modern, transparent, and built for ambitious businesses across Quebec and Canada.", "Nous réinventons le cabinet comptable — moderne, transparent et conçu pour les entreprises ambitieuses au Québec et au Canada.")}
      />

      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <FadeIn>
            <div className="overline mb-3">{t("Our Story", "Notre histoire")}</div>
            <h2 className="mb-5">{t("Built by ", "Bâti par des ")}<span className="accent-text">{t("entrepreneurs, for entrepreneurs", "entrepreneurs, pour les entrepreneurs")}</span></h2>
            <p className="text-body leading-relaxed mb-5">
              <strong>{t("OUR FIRM", "NOTRE CABINET")}</strong>{t(" was founded in 2008 and aims to bring excellence to our clients. We are a team of several partners with varying specialties and provide accounting services across Canada with an emphasis in Ontario and Quebec.", " a été fondé en 2008 et vise à offrir l'excellence à nos clients. Nous sommes une équipe composée de plusieurs partenaires aux spécialités variées et fournissons des services comptables partout au Canada, avec un accent sur l'Ontario et le Québec.")}
            </p>
            <p className="text-body leading-relaxed">
              <strong>{t("OUR MISSION", "NOTRE MISSION")}</strong>{t(" is to enable financial growth by strengthening our client's foundation and by optimizing their accounting. We believe in simplifying the accounting process by effectively leveraging technology. We achieve this by serving small and medium businesses, start-up companies, consultants and professionals.", " est de favoriser la croissance financière en renforçant la fondation de nos clients et en optimisant leur comptabilité. Nous croyons en la simplification du processus comptable grâce à un usage efficace de la technologie. Nous y parvenons en servant les PME, les entreprises en démarrage, les consultants et les professionnels.")}
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=85" alt="" className="rounded-2xl shadow-xl w-full" />
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-peach">
        <FadeIn className="text-center max-w-3xl mx-auto mb-14">
          <div className="overline mb-3">{t("Our Values", "Nos valeurs")}</div>
          <h2>{t("What We Stand For", "Ce que nous défendons")}</h2>
        </FadeIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="card-soft h-full text-center">
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4">{v.icon}</div>
                <h3 className="mb-2">{t(v.en.t, v.fr.t)}</h3>
                <p className="text-body text-sm">{t(v.en.b, v.fr.b)}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <FadeIn className="text-center max-w-3xl mx-auto mb-10">
          <div className="overline mb-3">{t("Why AF", "Pourquoi AF")}</div>
          <h2>{t("AF Accounting vs. ", "AF Comptabilité vs ")}<span className="accent-text">{t("Traditional Firm", "cabinet traditionnel")}</span></h2>
        </FadeIn>
        <FadeIn className="max-w-3xl mx-auto">
          <div className="card-soft !p-0 overflow-hidden">
            <table className="w-full">
              <thead style={{ background: "#3D0066" }} className="text-white"><tr>
                <th className="text-left p-4 font-semibold">{t("Feature", "Caractéristique")}</th>
                <th className="text-center p-4 font-semibold">AF Accounting</th>
                <th className="text-center p-4 font-semibold text-white/70">{t("Traditional", "Traditionnel")}</th>
              </tr></thead>
              <tbody>
                {compare.map((c, i) => (
                  <tr key={i} className="border-t border-border">
                    <td className="p-4 text-body text-sm">{t(c.en, c.fr)}</td>
                    <td className="p-4 text-center">{c.us ? <Check className="text-accent inline" /> : <X className="text-muted-foreground inline" />}</td>
                    <td className="p-4 text-center">{c.them ? <Check className="text-muted-foreground inline" /> : <X className="text-muted-foreground inline" />}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </Section>
    </>
  );
};

export default About;
