import { Link } from "react-router-dom";
import { ArrowRight, Star, Shield, MapPin, Check, BookOpen, Receipt, Users, Cloud, BarChart3, RefreshCw } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { FadeIn, Overline, Section, Stagger, StaggerItem } from "@/components/ui-bits";
import { motion } from "framer-motion";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";

const Home = () => {
  const { t } = useLang();

  const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const monthNamesFr = ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'];
  const now = new Date();
  const dynamicDateEn = `${monthNames[now.getMonth()]} ${now.getFullYear()}`;
  const dynamicDateFr = `${monthNamesFr[now.getMonth()]} ${now.getFullYear()}`;

  const trustBadges = [
    { icon: <Star size={16} />, en: "5-Star Google Reviews", fr: "Avis Google 5 étoiles" },
    { icon: <Shield size={16} />, en: "CPA Certified", fr: "Certifié CPA" },
    { icon: <MapPin size={16} />, en: "Serving Quebec & Canada", fr: "Au service du Québec et du Canada" },
  ];

  const pains = [
    { en: "You spend weekends on receipts instead of growing your business.", fr: "Vous passez vos week-ends sur les reçus au lieu de développer votre entreprise." },
    { en: "You're never sure if your taxes are filed correctly and on time.", fr: "Vous n'êtes jamais sûr que vos impôts sont produits correctement et à temps." },
    { en: "Payroll errors are costing you time and money every month.", fr: "Les erreurs de paie vous coûtent du temps et de l'argent chaque mois." },
  ];

  const services = [
    { icon: <BookOpen />, en: { t: "Bookkeeping", b: "Monthly reconciliation, transaction categorization, and clean financial records every single month." }, fr: { t: "Tenue de livres", b: "Conciliation mensuelle, catégorisation et registres financiers impeccables chaque mois." } },
    { icon: <Receipt />, en: { t: "Tax Planning & Filing", b: "Corporate tax returns, GST/QST filing, and proactive tax planning to minimize your tax burden legally." }, fr: { t: "Planification et production fiscale", b: "Déclarations d'impôts, TPS/TVQ et planification proactive pour minimiser votre fardeau fiscal." } },
    { icon: <Users />, en: { t: "Payroll Services", b: "Full payroll processing, ROE filing, T4 preparation, and compliance with Canadian labour standards." }, fr: { t: "Services de paie", b: "Traitement complet de la paie, RE, T4 et conformité aux normes du travail canadiennes." } },
    { icon: <Cloud />, en: { t: "Cloud Accounting", b: "Migrate to Xero or QuickBooks Online. Real-time financial visibility, anywhere, anytime." }, fr: { t: "Comptabilité en nuage", b: "Migrez vers Xero ou QuickBooks Online. Visibilité financière en temps réel, partout." } },
    { icon: <BarChart3 />, en: { t: "Financial Reporting", b: "Monthly management reports that actually explain what's happening in your business — in plain language." }, fr: { t: "Rapports financiers", b: "Rapports mensuels qui expliquent vraiment ce qui se passe — en langage clair." } },
    { icon: <RefreshCw />, en: { t: "Sales Tax (QST/GST)", b: "Never miss a sales tax deadline again. We handle registration, filing, and remittances across all periods." }, fr: { t: "TPS/TVQ", b: "Ne ratez plus jamais une échéance. Inscription, production et versements gérés pour vous." } },
  ];

  const steps = [
    { en: { t: "Book a Free Consultation", b: "30 minutes to understand your business and current challenges." }, fr: { t: "Réservez une consultation gratuite", b: "30 minutes pour comprendre votre entreprise." } },
    { en: { t: "We Set Up Your Systems", b: "We onboard you to Xero, connect your bank accounts, and clean up your records." }, fr: { t: "Nous configurons vos systèmes", b: "Intégration à Xero, connexion bancaire et nettoyage des registres." } },
    { en: { t: "We Handle Everything", b: "Books, taxes, payroll — done. You get a clean report — monthly, quarterly, or annually." }, fr: { t: "Nous gérons tout", b: "Livres, impôts, paie — terminés. Rapport clair — mensuel, trimestriel ou annuel." } },
    { en: { t: "You Focus on Growth", b: "With full financial clarity, you make better decisions, faster." }, fr: { t: "Vous vous concentrez sur la croissance", b: "Avec une clarté financière totale, vous décidez mieux et plus vite." } },
  ];

  const xeroBenefits = [
    { en: "Faster setup", fr: "Configuration plus rapide" },
    { en: "Better integration", fr: "Meilleure intégration" },
    { en: "Real-time financial management", fr: "Gestion financière en temps réel" },
  ];

  return (
    <>
      {/* HERO — light, white with purple accents */}
      <section className="relative bg-white pt-32 pb-16 overflow-hidden border-b border-border">
        <div className="absolute inset-0 pointer-events-none opacity-60" style={{ backgroundImage: "radial-gradient(circle at 85% 15%, rgba(124,58,237,0.10) 0%, transparent 50%), radial-gradient(circle at 10% 90%, rgba(107,33,168,0.08) 0%, transparent 45%)" }} />
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center relative">
          <FadeIn>
            <div className="overline mb-5">{t("Your Modern Accounting Partner — Quebec and Canada", "Votre partenaire comptable moderne — Québec et Canada")}</div>
            <h1 className="!text-5xl md:!text-6xl mb-6 text-navy">
              {t("Stop managing your books.", "Arrêtez de gérer vos livres.")}<br />
              <span className="accent-text">{t("Start running your business.", "Concentrez-vous sur votre entreprise.")}</span>
            </h1>
            <p className="text-body text-lg max-w-xl mb-8 leading-relaxed">
              {t(
                "We handle your bookkeeping, taxes, and payroll services across Quebec and Canada.",
                "Nous gérons votre comptabilité, vos impôts et vos services de paie au Québec et au Canada."
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link to="/contact" className="btn-primary">{t("Book a Free Consultation", "Consultation gratuite")} <ArrowRight size={16} /></Link>
              <Link to="/services" className="btn-navy" style={{ border: "2px solid #3D0066" }}>{t("See Our Services", "Voir nos services")}</Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {trustBadges.map((b, i) => (
                <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-full bg-secondary border border-border text-xs font-medium text-navy">
                  <span className="text-accent">{b.icon}</span>{t(b.en, b.fr)}
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="relative">
            <motion.div className="animate-float">
              <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md ml-auto" style={{ border: "1px solid rgba(107,33,168,0.25)", boxShadow: "0 20px 60px -10px rgba(107,33,168,0.25)" }}>
                <div className="flex items-center justify-between mb-5 pb-4 border-b border-border">
                  <div>
                    <div className="font-display font-bold text-navy text-lg">{t("Your Dashboard", "Votre tableau de bord")}</div>
                    <div className="text-xs text-muted-foreground">{t(dynamicDateEn, dynamicDateFr)}</div>
                  </div>
                  <div className="text-xs font-semibold px-2 py-1 rounded bg-accent/10 text-accent">XERO</div>
                </div>
                <div className="space-y-3">
                  {[
                    { en: "Books up to date", fr: "Livres à jour" },
                    { en: "Tax filing done", fr: "Impôts produits" },
                    { en: "Payroll processed", fr: "Paie traitée" },
                  ].map((it, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                      <span className="text-navy font-medium text-sm">{t(it.en, it.fr)}</span>
                      <span className="w-7 h-7 rounded-full bg-accent text-white flex items-center justify-center"><Check size={14} /></span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-5 border-t border-border grid grid-cols-2 gap-4">
                  <div><div className="text-xs text-muted-foreground">{t("Revenue", "Revenus")}</div><div className="font-display font-bold text-navy text-xl">$84,250</div></div>
                  <div><div className="text-xs text-muted-foreground">{t("Profit", "Profit")}</div><div className="font-display font-bold text-accent text-xl">+18%</div></div>
                </div>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </section>

      {/* INDUSTRY MARQUEE */}
      <section className="py-10 bg-white border-b border-border overflow-hidden">
        <div className="container-x text-center mb-6">
          <p className="overline text-muted-foreground">{t("Trusted by businesses across Quebec and Canada", "Approuvé par des entreprises au Québec et au Canada")}</p>
        </div>
        <div className="relative">
          <div className="flex gap-12 whitespace-nowrap animate-marquee">
            {[...Array(2)].map((_, dup) => (
              <div key={dup} className="flex items-center gap-12 shrink-0 pr-12 text-navy/70 font-display font-semibold text-lg">
                {[
                  { en: "Retail", fr: "Détail" },
                  { en: "Construction", fr: "Construction" },
                  { en: "Healthcare", fr: "Santé" },
                  { en: "Tech Startups", fr: "Startups Tech" },
                  { en: "Consulting Firms", fr: "Cabinets de conseil" },
                  { en: "Dermatologists & Medical Clinics", fr: "Dermatologues & cliniques médicales" },
                  { en: "Restaurants", fr: "Restaurants" },
                  { en: "E-Commerce", fr: "Commerce en ligne" },
                  { en: "Professional Services", fr: "Services professionnels" },
                ].map((i, k) => (
                  <span key={`${dup}-${k}`} className="flex items-center gap-12">
                    {t(i.en, i.fr)}
                    <span className="text-accent/40">•</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* HOW IT WORKS */}
      <Section className="bg-white">
        <FadeIn className="text-center max-w-3xl mx-auto mb-14">
          <Overline>{t("Our Process", "Notre processus")}</Overline>
          <h2>{t("From Messy Books to ", "De livres en désordre à ")}<span className="accent-text">{t("Complete Financial Clarity", "une clarté financière totale")}</span></h2>
        </FadeIn>
        <Stagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <StaggerItem key={i}>
              <div className="relative pl-4 border-l-2 border-accent/30 h-full">
                <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center">{i + 1}</div>
                <h3 className="mb-2">{t(s.en.t, s.fr.t)}</h3>
                <p className="text-body text-sm leading-relaxed">{t(s.en.b, s.fr.b)}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* XERO */}
      <Section className="bg-peach">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <Overline>{t("Cloud Accounting", "Comptabilité en nuage")}</Overline>
            <h2 className="mb-5">{t("Modern accounting on ", "Une comptabilité moderne sur ")}<span className="accent-text">{t("Xero & QuickBooks Online", "Xero et QuickBooks Online")}</span></h2>
            <p className="text-body text-lg leading-relaxed mb-8">
              {t("We set you up on the right cloud platform, connect your bank feeds, and give you real-time financial visibility — anywhere, anytime.", "Nous vous configurons sur la bonne plateforme infonuagique, connectons vos comptes bancaires et vous donnons une visibilité financière en temps réel — partout, en tout temps.")}
            </p>
            <div className="grid sm:grid-cols-1 gap-3">
              {xeroBenefits.map((b, i) => (
                <div key={i} className="flex items-start gap-2 text-sm">
                  <Check size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-body">{t(b.en, b.fr)}</span>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="bg-white rounded-2xl p-10 shadow-xl text-center border border-border">
              <div className="font-display font-extrabold text-7xl text-accent mb-2">XERO</div>
              <div className="overline">{t("Certified Partner", "Partenaire certifié")}</div>
            </div>
          </FadeIn>
        </div>
      </Section>


      {/* TESTIMONIALS */}
      <TestimonialsCarousel />

      {/* FINAL CTA */}
      <section className="text-white py-24" style={{ background: "#3D0066" }}>
        <div className="container-x text-center max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="!text-white mb-5">{t("Ready to Stop Stressing About Your Books?", "Prêt à arrêter de vous inquiéter de votre comptabilité?")}</h2>
            <p className="text-white/90 text-lg mb-10">
              {t("Book a free 30-minute consultation. We'll review your current situation and show you exactly how we can help.", "Réservez une consultation gratuite de 30 minutes. Nous examinerons votre situation et vous montrerons comment vous aider.")}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact" className="btn-navy">{t("Book a Free Consultation", "Consultation gratuite")} <ArrowRight size={16} /></Link>
              <Link to="/resources" className="btn-ghost-white">{t("Download Free Tax Guide", "Télécharger le guide fiscal")}</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default Home;
