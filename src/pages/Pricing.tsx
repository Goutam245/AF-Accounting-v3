import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, X } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { FadeIn } from "@/components/ui-bits";
import { PageHero } from "@/components/PageHero";
import { Link } from "react-router-dom";

type Cell = string | boolean;
type Row = { en: string; fr: string; values: [Cell, Cell, Cell]; header?: boolean };

const Pricing = () => {
  const { t } = useLang();
  const [size, setSize] = useState<"small" | "medium">("small");
  const [revealed, setRevealed] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ first: "", last: "", email: "" });

  const smallHeaders: [string, string, string] = ["Grow", "Thrive", "Elite"];
  const mediumHeaders: [string, string, string] = ["Grow+", "Thrive+", "Elite+"];

  const smallRevenue: [string, string, string] = ["Less than $100K", "Less than $500K", "Less than $1M"];
  const smallRevenueFr: [string, string, string] = ["Moins de 100K $", "Moins de 500K $", "Moins de 1M $"];
  const mediumRevenue: [string, string, string] = ["Less than $2M", "Less than $3M", "$3M and above"];
  const mediumRevenueFr: [string, string, string] = ["Moins de 2M $", "Moins de 3M $", "3M $ et plus"];


  const smallRows: Row[] = [
    { en: "BOOKKEEPING & TAX COMPLIANCE", fr: "TENUE DE LIVRES & CONFORMITÉ FISCALE", values: ["", "", ""], header: true },
    { en: "Total Annual Sales", fr: "Ventes annuelles totales", values: [t(smallRevenue[0], smallRevenueFr[0]), t(smallRevenue[1], smallRevenueFr[1]), t(smallRevenue[2], smallRevenueFr[2])] },
    { en: "Bookkeeping Services", fr: "Tenue de livres", values: ["Monthly", "Monthly", "Monthly"] },
    { en: "Number of Accounts", fr: "Nombre de comptes", values: ["1-5", ">7", ">7"] },
    { en: "Sales Tax Filing", fr: "Production des taxes de vente", values: ["Quarterly", "Quarterly", "Quarterly"] },
    { en: "Annual Corporate Tax Filing", fr: "Déclaration annuelle des sociétés", values: [true, true, true] },
    { en: "Government Correspondence", fr: "Correspondance gouvernementale", values: [true, true, true] },
    { en: "Government Audit Lead", fr: "Direction d'audit gouvernemental", values: [true, true, true] },
    { en: "Payroll Support Services", fr: "Services de paie", values: [false, true, true] },
    { en: "Number of Employees", fr: "Nombre d'employés", values: ["1-5", ">7", ">7"] },
    { en: "General Accounting & Tax Inquiry", fr: "Demandes comptables et fiscales générales", values: ["Unlimited", "Unlimited", "Unlimited"] },
    { en: "Personal Tax Return", fr: "Déclaration personnelle", values: ["1 Free", "2 Free", "2 Free"] },
    { en: "TRAINING & TOOLS", fr: "FORMATION & OUTILS", values: ["", "", ""], header: true },
    { en: "Training on Xero Accounting Software", fr: "Formation sur Xero", values: [true, true, true] },
    { en: "Xero License", fr: "Licence Xero", values: [true, true, true] },
    { en: "Hubdoc", fr: "Hubdoc", values: [true, true, true] },
    { en: "REPORTING & GUIDANCE", fr: "RAPPORTS & CONSEILS", values: ["", "", ""], header: true },
    { en: "Financial Statements", fr: "États financiers", values: ["Annually", "Annually", "Annually"] },
    { en: "Salary vs. Dividend Guidance", fr: "Conseils salaire vs dividende", values: [false, "Annually", "Annually"] },
  ];

  const mediumRows: Row[] = [
    { en: "BOOKKEEPING & TAX COMPLIANCE", fr: "TENUE DE LIVRES & CONFORMITÉ FISCALE", values: ["", "", ""], header: true },
    { en: "Total Annual Sales", fr: "Ventes annuelles totales", values: [t(mediumRevenue[0], mediumRevenueFr[0]), t(mediumRevenue[1], mediumRevenueFr[1]), t(mediumRevenue[2], mediumRevenueFr[2])] },
    { en: "Bookkeeping Services", fr: "Tenue de livres", values: ["Monthly", "Bi-Weekly", "Weekly"] },
    { en: "Sales Tax Filing", fr: "Production des taxes de vente", values: ["Quarterly", "Quarterly", "Quarterly/Monthly"] },
    { en: "Annual Corporate Tax Filing", fr: "Déclaration annuelle des sociétés", values: [true, true, true] },
    { en: "Payroll Support", fr: "Soutien à la paie", values: [true, true, true] },
    { en: "ADVISORY", fr: "CONSEIL", values: ["", "", ""], header: true },
    { en: "Advisory", fr: "Conseil", values: ["Bi-Annual Review", "Quarterly Review", "Quarterly Review"] },
    { en: "Partner Access", fr: "Accès à un associé", values: [false, "Dedicated CPA", "Dedicated CPA"] },
  ];

  const rows = size === "small" ? smallRows : mediumRows;
  const headers = size === "small" ? smallHeaders : mediumHeaders;

  const renderCell = (v: Cell) => {
    if (v === true) return <Check className="inline text-accent" size={20} />;
    if (v === false) return <span className="text-muted-foreground">—</span>;
    return <span className="text-navy text-sm">{v}</span>;
  };

  const openModal = () => setModalOpen(true);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.first || !form.last || !form.email) return;
    setRevealed(true);
    setModalOpen(false);
  };

  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=85"
        overline={t("Our Packages", "Nos forfaits")}
        crumb={t("Pricing", "Tarifs")}
        title={t("Transparent ", "Forfaits ")}
        accent={t("Package Pricing", "transparents")}
        sub={t("Choose the right plan for your business — small or medium.", "Choisissez le bon forfait pour votre entreprise — petite ou moyenne.")}
      />

      <section className="py-16 bg-background">
        <div className="container-x">
          {/* Toggle */}
          <FadeIn className="flex justify-center mb-10">
            <div className="inline-flex p-1 rounded-full border border-border bg-white">
              {(["small", "medium"] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all"
                  style={{
                    background: size === s ? "#3D0066" : "transparent",
                    color: size === s ? "white" : "#3D0066",
                  }}
                >
                  {s === "small" ? t("Small Business", "Petite entreprise") : t("Medium Business", "Moyenne entreprise")}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Table */}
          <FadeIn className="max-w-6xl mx-auto">
            <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
              <table className="w-full">
                <thead>
                  <tr style={{ background: "#3D0066" }}>
                    <th className="text-left p-5 text-white font-semibold text-sm uppercase tracking-wider"></th>
                    {headers.map((h) => (
                      <th key={h} className="p-5 text-white text-center">
                        <div className="font-display font-bold text-2xl">{h}</div>
                        <div className="mt-3">
                          {revealed ? (
                            <div className="text-white/90 text-sm font-medium">
                              {t("Custom Quote", "Devis personnalisé")}
                            </div>
                          ) : (
                            <button
                              onClick={openModal}
                              className="px-4 py-2 rounded-lg bg-white text-primary text-xs font-semibold hover:bg-secondary transition-colors"
                            >
                              {t("Show Pricing →", "Voir les tarifs →")}
                            </button>
                          )}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => {
                    if (r.header) {
                      return (
                        <tr key={i} style={{ background: "#2D3748" }}>
                          <td colSpan={4} className="p-3 text-white text-xs font-bold uppercase tracking-wider">
                            {t(r.en, r.fr)}
                          </td>
                        </tr>
                      );
                    }
                    return (
                      <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#F5F0FF" }}>
                        <td className="p-4 text-sm text-body font-medium">{t(r.en, r.fr)}</td>
                        {r.values.map((v, k) => (
                          <td key={k} className="p-4 text-center">{renderCell(v)}</td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </FadeIn>

          {/* Bottom CTA */}
          <FadeIn className="mt-12 text-center">
            <p className="text-lg text-body mb-5">
              {t("Connect with us for custom tailored plans.", "Contactez-nous pour des forfaits sur mesure.")}
            </p>
            <Link to="/contact" className="btn-primary">
              {t("Book a Consultation", "Réserver une consultation")} <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Email Gate Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalOpen(false)}
            className="fixed inset-0 z-[200] flex items-center justify-center p-5"
            style={{ background: "rgba(45,0,82,0.6)", backdropFilter: "blur(4px)" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl w-full max-w-md p-8 shadow-2xl relative"
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-navy"
                aria-label="Close"
              >
                <X size={20} />
              </button>
              <h3 className="font-display text-2xl font-bold text-navy mb-2">
                {t("See Our Packages", "Voir nos forfaits")}
              </h3>
              <p className="text-body text-sm mb-6">
                {t("Enter your details to reveal pricing.", "Entrez vos coordonnées pour voir les tarifs.")}
              </p>
              <form onSubmit={submit} className="space-y-3">
                <input
                  required
                  placeholder={t("First Name *", "Prénom *")}
                  value={form.first}
                  onChange={(e) => setForm({ ...form, first: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:border-accent"
                />
                <input
                  required
                  placeholder={t("Last Name *", "Nom *")}
                  value={form.last}
                  onChange={(e) => setForm({ ...form, last: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:border-accent"
                />
                <input
                  required
                  type="email"
                  placeholder={t("Email *", "Courriel *")}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:border-accent"
                />
                <button type="submit" className="btn-primary w-full justify-center">
                  {t("Reveal Pricing →", "Voir les tarifs →")}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {revealed && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[150] bg-white border border-accent rounded-full px-5 py-2 shadow-lg text-sm text-navy font-medium">
          {t("Thank you! Here are your packages.", "Merci! Voici vos forfaits.")}
        </div>
      )}
    </>
  );
};

export default Pricing;
