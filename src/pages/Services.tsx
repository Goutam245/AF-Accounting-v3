import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Receipt, Users, Cloud, BarChart3, RefreshCw, Check } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { FadeIn, Section } from "@/components/ui-bits";
import { PageHero } from "@/components/PageHero";

const Services = () => {
  const { t } = useLang();
  const items = [
    { id: "bookkeeping", icon: <BookOpen size={36} />,
      en: { t: "Bookkeeping", desc: ["Monthly reconciliation, transaction categorization, and clean records — every single month.", "We use Xero or QuickBooks Online to keep your books up-to-date with bank-level security and audit-ready accuracy.", "Our team reviews every transaction and reaches out when something looks off — you're never left wondering."], list: ["Monthly bank reconciliation", "Transaction categorization", "Accounts payable & receivable", "Vendor management", "Month-end closing", "Audit-ready records"], who: "Small to medium businesses", quote: "Our books haven't been late once in 18 months. — Marie T." },
      fr: { t: "Tenue de livres", desc: ["Conciliation mensuelle, catégorisation et registres impeccables chaque mois.", "Nous utilisons Xero ou QuickBooks Online avec une sécurité bancaire et une précision prête pour l'audit.", "Notre équipe revoit chaque transaction et vous contacte au besoin."], list: ["Conciliation bancaire mensuelle", "Catégorisation des transactions", "Comptes payables et recevables", "Gestion des fournisseurs", "Clôture mensuelle", "Registres prêts pour audit"], who: "PME", quote: "Nos livres n'ont jamais été en retard. — Marie T." } },
    { id: "tax", icon: <Receipt size={36} />,
      en: { t: "Tax Planning & Filing", desc: ["Corporate tax returns, GST/QST filing, and proactive planning to legally minimize your tax burden.", "We don't just file — we plan ahead so you keep more of what you earn.", "Quebec tax law is complex. We stay up to date so you don't have to."], list: ["T2 corporate tax returns", "Personal tax (T1)", "Tax credit identification", "CRA & RQ correspondence", "Year-round tax planning", "Audit support"], who: "Incorporated businesses", quote: "They saved us $14K in our first year. — Patrick C." },
      fr: { t: "Planification et production fiscale", desc: ["Déclarations d'impôts, TPS/TVQ et planification proactive pour réduire légalement votre fardeau fiscal.", "Nous ne faisons pas que produire — nous planifions à l'avance.", "La fiscalité québécoise est complexe. Nous restons à jour."], list: ["Déclarations T2", "Impôts personnels (T1)", "Identification des crédits", "Correspondance ARC et RQ", "Planification toute l'année", "Soutien en cas d'audit"], who: "Entreprises incorporées", quote: "Ils nous ont fait économiser 14 000$. — Patrick C." } },
    { id: "payroll", icon: <Users size={36} />,
      en: { t: "Payroll Services", desc: ["Full payroll processing, ROE filing, T4 prep, and Quebec labour standard compliance.", "We work with Wagepoint, QuickBooks Payroll, ADP, Ceridian/DayForce, and Payworks to deliver accurate, on-time payroll for your team.", "From hire to T4, we manage every step of the payroll lifecycle.", "QST, GST, and HST — monthly, quarterly, or annual filing."], list: ["Bi-weekly or monthly payroll", "Direct deposit setup", "ROE filing", "T4 & RL-1 preparation", "CRA & RQ remittances", "CNESST compliance", "QST / GST / HST filing — monthly, quarterly, or annual", "Software: Wagepoint, QuickBooks Payroll, ADP, Ceridian/DayForce, Payworks"], who: "Businesses with employees", quote: "Zero payroll errors since switching. — Sophie L." },
      fr: { t: "Services de paie", desc: ["Traitement complet, RE, T4 et conformité aux normes du travail du Québec.", "Nous travaillons avec Wagepoint, QuickBooks Payroll, ADP, Ceridian/DayForce et Payworks pour une paie précise et à temps.", "De l'embauche au T4, nous gérons chaque étape.", "TVQ, TPS et TVH — production mensuelle, trimestrielle ou annuelle."], list: ["Paie aux 2 semaines ou mensuelle", "Dépôt direct", "Production des RE", "Préparation T4 et RL-1", "Versements ARC et RQ", "Conformité CNESST", "TVQ / TPS / TVH — mensuel, trimestriel ou annuel", "Logiciels : Wagepoint, QuickBooks Payroll, ADP, Ceridian/DayForce, Payworks"], who: "Entreprises avec employés", quote: "Zéro erreur depuis le changement. — Sophie L." } },
    { id: "cloud", icon: <Cloud size={36} />,
      en: { t: "Cloud Accounting", desc: ["Migrate to Xero or QuickBooks Online with zero downtime.", "Real-time financial visibility from anywhere, on any device.", "We handle the entire migration — including app integrations and team training."], list: ["Platform setup (Xero/QuickBooks Online)", "Bank feeds configuration", "Chart of accounts design", "App integrations", "Historical data migration", "Team training"], who: "Businesses going digital", quote: "We migrated in 2 weeks, no downtime. — Patrick C." },
      fr: { t: "Comptabilité en nuage", desc: ["Migrez vers Xero ou QuickBooks Online sans interruption.", "Visibilité financière en temps réel, partout.", "Nous gérons toute la migration — intégrations et formation incluses."], list: ["Configuration plateforme", "Flux bancaires", "Plan comptable", "Intégrations d'apps", "Migration historique", "Formation d'équipe"], who: "Entreprises qui se numérisent", quote: "Migration en 2 semaines, sans arrêt. — Patrick C." } },
    { id: "sales-tax", icon: <RefreshCw size={36} />,
      en: { t: "Sales Tax (QST/GST)", desc: ["Never miss a deadline. We handle registration, filing, and remittances every period.", "We track sales across all your channels and ensure everything reconciles.", "Worried about back taxes? We can help you catch up safely."], list: ["GST/HST registration", "QST registration", "Monthly/quarterly filing", "Remittance management", "ITC/ITR tracking", "Back-filing support"], who: "All Quebec businesses", quote: "They caught up 18 months of QST. — Patrick C." },
      fr: { t: "TPS/TVQ", desc: ["Ne ratez plus une échéance. Inscription, production et versements à chaque période.", "Nous suivons les ventes sur tous vos canaux.", "Retards de TVQ? Nous pouvons vous aider à rattraper."], list: ["Inscription TPS/TVH", "Inscription TVQ", "Production mensuelle/trimestrielle", "Gestion des versements", "Suivi CTI/RTI", "Production rétroactive"], who: "Toutes entreprises au Québec", quote: "Ils ont rattrapé 18 mois. — Patrick C." } },
    { id: "reporting", icon: <BarChart3 size={36} />,
      en: { t: "Financial Reporting", desc: ["Monthly management reports that explain what's happening in your business.", "Track cash flow and profitability with clarity using straightforward financial reports."], list: ["P&L statements", "Balance sheet", "Cash flow report", "Basic financial reports", "Monthly review call"], who: "Growth-focused businesses", quote: "I finally understand my numbers. — Sophie L." },
      fr: { t: "Rapports financiers", desc: ["Rapports mensuels qui expliquent ce qui se passe dans votre entreprise.", "Suivez vos flux de trésorerie et votre rentabilité avec des rapports financiers clairs."], list: ["États des résultats", "Bilan", "Flux de trésorerie", "Rapports financiers de base", "Appel mensuel de revue"], who: "Entreprises en croissance", quote: "Je comprends enfin mes chiffres. — Sophie L." } },
  ];

  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&q=85"
        overline={t("Our Services", "Nos services")}
        crumb={t("Services", "Services")}
        title={t("Comprehensive Accounting Services", "Services comptables complets")}
        accent={t("for Quebec Businesses", "pour les entreprises québécoises")}
        sub={t("Six core services. One trusted team. Built for Quebec.", "Six services principaux. Une équipe de confiance. Conçus pour le Québec.")}
      />

      {items.map((s, i) => (
        <Section key={s.id} id={s.id} className={i % 2 === 0 ? "bg-white" : "bg-peach"}>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <FadeIn>
              <div className="text-accent mb-5">{s.icon}</div>
              <h2 className="mb-5">{t(s.en.t, s.fr.t)}</h2>
              <div className="space-y-4 mb-6">
                {s.en.desc.map((p, k) => <p key={k} className="text-body leading-relaxed">{t(s.en.desc[k], s.fr.desc[k])}</p>)}
              </div>
              <div className="flex flex-wrap gap-3 items-center mb-6">
                <span className="px-3 py-1.5 rounded-full bg-secondary text-navy text-xs font-semibold">{t(s.en.who, s.fr.who)}</span>
              </div>
              <Link to="/contact" className="btn-primary">{t("Get Started", "Commencer")} <ArrowRight size={16} /></Link>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="card-soft mb-5">
                <h3 className="mb-5">{t("What's Included", "Ce qui est inclus")}</h3>
                <ul className="space-y-3">
                  {s.en.list.map((it, k) => (
                    <li key={k} className="flex gap-3 items-start">
                      <Check size={18} className="text-accent flex-shrink-0 mt-1" />
                      <span className="text-body text-sm">{t(s.en.list[k], s.fr.list[k])}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <blockquote className="border-l-4 border-accent pl-5 italic text-body">"{t(s.en.quote, s.fr.quote)}"</blockquote>
            </FadeIn>
          </div>
        </Section>
      ))}
    </>
  );
};

export default Services;
