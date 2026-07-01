import { useState } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { FadeIn, Section } from "@/components/ui-bits";
import { PageHero } from "@/components/PageHero";
import { Search, Download, ArrowRight, ChevronDown, X } from "lucide-react";
import { Link } from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";

const Resources = () => {
  const { t } = useLang();
  const [query, setQuery] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [dlOpen, setDlOpen] = useState<string | null>(null);
  const [dlDone, setDlDone] = useState(false);
  const [form, setForm] = useState({ first: "", last: "", email: "" });

  const articles = [
    { en: "QST vs GST: What Quebec Business Owners Need to Know", fr: "TVQ vs TPS : Ce que les entrepreneurs québécois doivent savoir", cat: { en: "Tax", fr: "Impôts" } },
    { en: "5 Signs You've Outgrown Your Bookkeeper", fr: "5 signes que vous avez dépassé votre teneur de livres", cat: { en: "Bookkeeping", fr: "Tenue de livres" } },
    { en: "How to Switch to Cloud Accounting Without Losing Your Data", fr: "Comment passer à la comptabilité en nuage sans perdre vos données", cat: { en: "Software", fr: "Logiciels" } },
    { en: "The Complete Quebec Corporate Tax Deadline Calendar for 2026", fr: "Calendrier complet des échéances fiscales du Québec 2026", cat: { en: "Tax", fr: "Impôts" } },
    { en: "Xero vs QuickBooks: Which is Right for Your Quebec Business?", fr: "Xero vs QuickBooks : Lequel pour votre entreprise québécoise?", cat: { en: "Software", fr: "Logiciels" } },
    { en: "How Much Does an Accountant Cost in Quebec? A Complete 2026 Guide", fr: "Combien coûte un comptable au Québec? Guide complet 2026", cat: { en: "Pricing", fr: "Tarifs" } },
  ];

  const guides = [
    { en: "Tax Deadline Calendar 2026 (PDF)", fr: "Calendrier fiscal 2026 (PDF)" },
    { en: "Transitioning to Cloud Accounting Guide", fr: "Guide de transition vers la comptabilité en nuage" },
    { en: "Transaction Cloud Accounting Guide", fr: "Guide de comptabilité en nuage transactionnelle" },
  ];

  const deadlines2025: { date: string; en: string; fr: string }[] = [
    { date: "Jan 31, 2025", en: "T4 / RL-1 slips issued to employees & filed with CRA / Revenu Québec", fr: "Feuillets T4 / RL-1 remis aux employés et déposés à l'ARC / Revenu Québec" },
    { date: "Feb 28, 2025", en: "T5 slips (investment income) filing deadline", fr: "Date limite de production des feuillets T5 (revenus de placement)" },
    { date: "Mar 31, 2025", en: "Quebec corporate tax (CO-17) — fiscal year ending Dec 31, 2024", fr: "Impôt des sociétés du Québec (CO-17) — exercice se terminant le 31 déc. 2024" },
    { date: "Apr 30, 2025", en: "T1 personal tax return + RQ personal return (TP-1)", fr: "Déclaration de revenus T1 + déclaration personnelle TP-1 du Québec" },
    { date: "Jun 15, 2025", en: "Self-employed personal tax filing (balance owing still due Apr 30)", fr: "Déclaration des travailleurs autonomes (solde dû le 30 avril)" },
    { date: "Jun 30, 2025", en: "T2 corporate return — fiscal year ending Dec 31, 2024", fr: "Déclaration T2 — exercice se terminant le 31 déc. 2024" },
    { date: "Quarterly 2025", en: "QST / GST / HST quarterly remittances (Jan 31, Apr 30, Jul 31, Oct 31)", fr: "Versements TVQ / TPS / TVH trimestriels (31 janv., 30 avr., 31 juil., 31 oct.)" },
    { date: "Quarterly 2025", en: "CNESST instalments — Quebec employers", fr: "Acomptes CNESST — employeurs québécois" },
  ];

  const deadlines2026: { date: string; en: string; fr: string }[] = [
    { date: "Jan 31, 2026", en: "T4 / RL-1 slips issued to employees & filed with CRA / Revenu Québec", fr: "Feuillets T4 / RL-1 remis aux employés et déposés à l'ARC / Revenu Québec" },
    { date: "Feb 28, 2026", en: "T5 slips (investment income) filing deadline", fr: "Date limite de production des feuillets T5 (revenus de placement)" },
    { date: "Mar 31, 2026", en: "Quebec corporate tax (CO-17) — fiscal year ending Dec 31, 2025", fr: "Impôt des sociétés du Québec (CO-17) — exercice se terminant le 31 déc. 2025" },
    { date: "Apr 30, 2026", en: "T1 personal tax return + RQ personal return (TP-1)", fr: "Déclaration de revenus T1 + déclaration personnelle TP-1 du Québec" },
    { date: "Jun 15, 2026", en: "Self-employed personal tax filing (balance owing still due Apr 30)", fr: "Déclaration des travailleurs autonomes (solde dû le 30 avril)" },
    { date: "Jun 30, 2026", en: "T2 corporate return — fiscal year ending Dec 31, 2025", fr: "Déclaration T2 — exercice se terminant le 31 déc. 2025" },
    { date: "Quarterly 2026", en: "QST / GST / HST quarterly remittances (Jan 31, Apr 30, Jul 31, Oct 31)", fr: "Versements TVQ / TPS / TVH trimestriels (31 janv., 30 avr., 31 juil., 31 oct.)" },
    { date: "Quarterly 2026", en: "CNESST instalments — Quebec employers", fr: "Acomptes CNESST — employeurs québécois" },
  ];

  const faqs = [
    { en: { q: "How quickly can you onboard my business?", a: "Most clients are fully onboarded within 2–3 weeks. We start with a kickoff call, gather your historical data, set up your Xero/QuickBooks Online account, and migrate everything seamlessly." }, fr: { q: "Combien de temps pour intégrer mon entreprise?", a: "La plupart des clients sont intégrés en 2 à 3 semaines. Nous commençons par un appel de lancement, recueillons vos données et configurons tout." } },
    { en: { q: "Do I need to switch to Xero?", a: "No. We support both Xero and QuickBooks Online. We'll recommend what's best for your business — but the choice is always yours." }, fr: { q: "Dois-je passer à Xero?", a: "Non. Nous prenons en charge Xero et QuickBooks Online. Nous recommandons le meilleur, mais le choix vous appartient." } },
    { en: { q: "What if my books are years behind?", a: "We specialize in catch-up bookkeeping. We've cleaned up clients who were 18+ months behind. We'll quote a fair flat fee for the cleanup, then transition to monthly service." }, fr: { q: "Et si mes livres sont en retard depuis des années?", a: "Nous sommes spécialisés dans le rattrapage. Nous offrons un forfait fixe pour le nettoyage, puis passons au service mensuel." } },
    { en: { q: "Can you handle bilingual filings?", a: "Absolutely. All our work is fully bilingual — French communication with Revenu Québec and English/French reports for your team." }, fr: { q: "Gérez-vous les déclarations bilingues?", a: "Absolument. Tout notre travail est entièrement bilingue." } },
  ];

  const filtered = articles.filter((a) => t(a.en, a.fr).toLowerCase().includes(query.toLowerCase()));

  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1400&q=85"
        overline={t("Resources", "Ressources")}
        crumb={t("Resources", "Ressources")}
        title={t("Resources & Insights", "Ressources et conseils")}
        accent={t("for Quebec Businesses", "pour les entreprises")}
        sub={t("Free guides, articles, and answers to your most pressing accounting questions.", "Guides gratuits, articles et réponses aux questions comptables les plus urgentes.")}
      />

      {/* BLOG */}
      <Section id="blog" className="bg-white">
        <FadeIn className="mb-10">
          <div className="overline text-accent mb-3">{t("Blog", "Blogue")}</div>
          <h2>{t("Latest Articles", "Derniers articles")}</h2>
        </FadeIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((a, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <article className="card-soft h-full flex flex-col">
                <div className="overline text-accent mb-3">{t(a.cat.en, a.cat.fr)}</div>
                <h3 className="mb-4 flex-1">{t(a.en, a.fr)}</h3>
                <a href="#" className="text-accent text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">{t("Read", "Lire")} <ArrowRight size={14} /></a>
              </article>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* GUIDES */}
      <Section id="guides" className="bg-peach">
        <FadeIn className="mb-10 text-center max-w-2xl mx-auto">
          <div className="overline text-accent mb-3">{t("Free Guides", "Guides gratuits")}</div>
          <h2>{t("Download Our Free Resources", "Téléchargez nos ressources gratuites")}</h2>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-6">
          {guides.map((g, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="card-soft text-center h-full flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mx-auto mb-5"><Download /></div>
                <h3 className="mb-5 flex-1">{t(g.en, g.fr)}</h3>
                <button onClick={() => { setDlOpen(t(g.en, g.fr)); setDlDone(false); }} className="btn-primary !w-full">{t("Download Free →", "Télécharger →")}</button>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* QUEBEC TAX DEADLINE CALENDAR */}
      <Section id="deadlines" className="bg-white">
        <FadeIn className="mb-10 text-center max-w-2xl mx-auto">
          <div className="overline text-accent mb-3">{t("Quebec Tax Calendar", "Calendrier fiscal du Québec")}</div>
          <h2>{t("Key Quebec Tax Deadlines", "Échéances fiscales clés au Québec")}</h2>
          <p className="text-body mt-3 text-sm">
            {t(
              "Plan ahead with Quebec-specific corporate, sales-tax, and payroll deadlines for 2025 and 2026.",
              "Planifiez à l'avance avec les échéances québécoises (sociétés, taxes de vente et paie) pour 2025 et 2026."
            )}
          </p>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[
            { year: "2025", list: deadlines2025 },
            { year: "2026", list: deadlines2026 },
          ].map((bucket) => (
            <FadeIn key={bucket.year}>
              <div className="card-soft h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="px-3 py-1 rounded-full bg-accent text-white text-xs font-bold">{bucket.year}</div>
                  <h3 className="!mb-0">{t(`Quebec deadlines ${bucket.year}`, `Échéances Québec ${bucket.year}`)}</h3>
                </div>
                <ul className="space-y-3">
                  {bucket.list.map((d, k) => (
                    <li key={k} className="flex gap-3 items-start border-b border-border pb-3 last:border-b-0 last:pb-0">
                      <span className="text-xs font-bold text-accent uppercase tracking-wide whitespace-nowrap pt-0.5 w-[110px] shrink-0">
                        {d.date}
                      </span>
                      <span className="text-body text-sm leading-relaxed">{t(d.en, d.fr)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" className="bg-white">
        <FadeIn className="mb-10 text-center max-w-2xl mx-auto">
          <div className="overline text-accent mb-3">FAQ</div>
          <h2>{t("Frequently Asked Questions", "Questions fréquentes")}</h2>
        </FadeIn>
        <div className="max-w-3xl mx-auto">
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input type="text" placeholder={t("Search articles...", "Rechercher...")} value={query} onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-border bg-white focus:outline-none focus:border-accent transition-colors" />
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="rounded-xl border border-border bg-card overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                  <span className="font-semibold text-navy">{t(f.en.q, f.fr.q)}</span>
                  <ChevronDown className={`text-accent transition-transform ${openFaq === i ? "rotate-180" : ""}`} size={18} />
                </button>
                {openFaq === i && <div className="px-5 pb-5 text-body text-sm leading-relaxed">{t(f.en.a, f.fr.a)}</div>}
              </div>
            ))}
          </div>
        </div>

        <FadeIn className="max-w-3xl mx-auto mt-12">
          <div className="card-soft bg-peach-mid">
            <h3 className="mb-2">{t("Have a specific question? Ask us directly.", "Vous avez une question? Demandez-nous.")}</h3>
            <p className="text-body text-sm mb-5">{t("Free 24-hour response from our CPA team.", "Réponse gratuite en 24h de notre équipe CPA.")}</p>
            <form className="grid sm:grid-cols-2 gap-3" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder={t("Name", "Nom")} className="px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:border-accent" />
              <input type="email" placeholder={t("Email", "Courriel")} className="px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:border-accent" />
              <textarea placeholder={t("Your question", "Votre question")} rows={3} className="sm:col-span-2 px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:border-accent" />
              <button className="btn-primary sm:col-span-2">{t("Submit", "Soumettre")} <ArrowRight size={16} /></button>
            </form>
          </div>
        </FadeIn>
      </Section>

      <section className="bg-accent text-white py-20">
        <div className="container-x text-center">
          <h2 className="!text-white mb-5">{t("Ready to Talk?", "Prêt à discuter?")}</h2>
          <Link to="/contact" className="btn-navy">{t("Book a Free Call", "Appel gratuit")} <ArrowRight size={16} /></Link>
        </div>
      </section>

      {/* Download email-gate modal */}
      <AnimatePresence>
        {dlOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setDlOpen(null)}
            className="fixed inset-0 z-[200] flex items-center justify-center p-5"
            style={{ background: "rgba(45,0,82,0.6)", backdropFilter: "blur(4px)" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }} onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl w-full max-w-md p-8 shadow-2xl relative"
            >
              <button onClick={() => setDlOpen(null)} className="absolute top-4 right-4 text-muted-foreground hover:text-navy" aria-label="Close"><X size={20} /></button>
              {!dlDone ? (
                <>
                  <h3 className="font-display text-2xl font-bold text-navy mb-2">{dlOpen}</h3>
                  <p className="text-body text-sm mb-6">
                    {t("Enter your details to download your free guide.", "Entrez vos coordonnées pour télécharger votre guide gratuit.")}
                  </p>
                  <form onSubmit={(e) => { e.preventDefault(); if (form.first && form.last && form.email) setDlDone(true); }} className="space-y-3">
                    <input required placeholder={t("First Name *", "Prénom *")} value={form.first} onChange={(e) => setForm({ ...form, first: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:border-accent" />
                    <input required placeholder={t("Last Name *", "Nom *")} value={form.last} onChange={(e) => setForm({ ...form, last: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:border-accent" />
                    <input required type="email" placeholder={t("Email *", "Courriel *")} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:border-accent" />
                    <button type="submit" className="btn-primary w-full justify-center">{t("Submit & Download →", "Soumettre et télécharger →")}</button>
                  </form>
                </>
              ) : (
                <div className="text-center py-4">
                  <h3 className="font-display text-2xl font-bold text-navy mb-3">{t("Thank you!", "Merci!")}</h3>
                  <p className="text-body text-sm mb-6">
                    {t("Your download will begin shortly.", "Votre téléchargement va commencer sous peu.")}
                  </p>
                  <a href="#" className="btn-primary inline-flex">{t("Download Now", "Télécharger maintenant")} <Download size={16} /></a>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Resources;
