import { Link } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import { LangToggle } from "./LangToggle";
import { Facebook, Linkedin, Twitter, Mail, MapPin } from "lucide-react";
import afLogo from "@/assets/af-logo.png";

export const Footer = () => {
  const { t } = useLang();

  const services = [
    { en: "Bookkeeping", fr: "Tenue de livres", to: "/services#bookkeeping" },
    { en: "Tax Planning & Filing", fr: "Planification fiscale", to: "/services#tax" },
    { en: "Payroll Services", fr: "Services de paie", to: "/services#payroll" },
    { en: "Cloud Accounting", fr: "Comptabilité en nuage", to: "/services#cloud" },
    { en: "Financial Reporting", fr: "Rapports financiers", to: "/services#reporting" },
    { en: "Sales Tax (QST/GST)", fr: "TPS/TVQ", to: "/services#sales-tax" },
  ];

  const company = [
    { en: "About", fr: "À propos", to: "/about" },
    { en: "Software", fr: "Logiciels", to: "/software" },
    { en: "Resources", fr: "Ressources", to: "/resources" },
    { en: "Contact", fr: "Contact", to: "/contact" },
  ];

  return (
    <footer className="text-white pt-20 pb-8" style={{ background: "#3D0066" }}>
      <div className="container-x grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="mb-3">
            <img src={afLogo} alt="AF Accounting" className="h-10 w-auto bg-white/95 rounded p-1" />
          </div>
          <p className="text-white/70 text-sm leading-relaxed mb-5">
            {t("Quebec-based. Serving small and medium businesses across Quebec and Canada.", "Basé au Québec. Au service des PME au Québec et au Canada.")}
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider platinum-badge">
            ★ {t("Xero Platinum Partner", "Partenaire Platinum Xero")}
          </div>
          <div className="flex gap-3 mt-5 text-white/70">
            <a href="https://www.linkedin.com/company/af-accounting" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition-colors"><Linkedin size={18} /></a>
            <a href="http://facebook.com/afaccounting" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white transition-colors"><Facebook size={18} /></a>
            <a href="http://twitter.com/afaccounting" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-white transition-colors"><Twitter size={18} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{t("Services", "Services")}</h4>
          <ul className="space-y-2 text-sm text-white/70">
            {services.map((s) => (
              <li key={s.to}><Link to={s.to} className="hover:text-white transition-colors">{t(s.en, s.fr)}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{t("Company", "Entreprise")}</h4>
          <ul className="space-y-2 text-sm text-white/70">
            {company.map((s) => (
              <li key={s.to}><Link to={s.to} className="hover:text-white transition-colors">{t(s.en, s.fr)}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{t("Contact", "Contact")}</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2"><Mail size={14} style={{ color: "#C9A0FF" }} /> <a href="mailto:info@afaccounting.ca" className="hover:text-white">info@afaccounting.ca</a></li>
            <li className="flex items-center gap-2"><MapPin size={14} style={{ color: "#C9A0FF" }} /> {t("Quebec & Canada", "Québec & Canada")}</li>
          </ul>

          {/* FIX: flex-col — button দ্বিতীয় লাইনে, কখনো overflow হবে না */}
          <form className="mt-5 flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder={t("Your email", "Votre courriel")}
              className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm placeholder-white/50 focus:outline-none focus:border-white"
            />
            <button
              type="submit"
              className="w-full btn-primary !px-4 !py-2 justify-center"
              style={{ background: "#6B21A8" }}
            >
              {t("Join", "S'inscrire")}
            </button>
          </form>
        </div>
      </div>

      <div className="container-x mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-4 items-center justify-between text-xs text-white/60">
        <div>© {new Date().getFullYear()} AF Accounting · <a href="#" className="hover:text-white">{t("Privacy", "Confidentialité")}</a> · <a href="#" className="hover:text-white">{t("Terms", "Conditions")}</a></div>
        <LangToggle />
      </div>
    </footer>
  );
};