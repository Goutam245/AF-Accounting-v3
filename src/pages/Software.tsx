import { useLang } from "@/i18n/LanguageContext";
import { FadeIn, Section } from "@/components/ui-bits";
import { PageHero } from "@/components/PageHero";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Software = () => {
  const { t } = useLang();

  // Tools that have extra whitespace in their logo source — need zoom
  const zoomedLogos = ["hubdoc", "wagepoint", "ceridian-dayforce"];

  type Tool = {
    id: string;
    name: string;
    platinum?: boolean;
    logo?: { src: string; alt: string };
    wordmark?: { text: string; color: string };
    paragraphs: { en: string[]; fr: string[] };
    bullets?: { en: string[]; fr: string[] };
  };

  const tools: Tool[] = [
    {
      id: "xero",
      name: "Xero",
      platinum: true,
      logo: { src: "https://cdn.simpleicons.org/xero/13B5EA", alt: "Xero" },
      paragraphs: {
        en: [
          "**Streamlined Bookkeeping & Automation** — For bookkeeping-focused clients, Xero simplifies day-to-day accounting by automating many of the repetitive processes that traditionally consume valuable time. Features such as automated bank feeds, receipt capture, recurring invoices, and intelligent reconciliation tools help maintain clean and accurate financial records while reducing manual data entry and minimizing errors.",
          "**Real-Time Financial Visibility & Collaboration** — Xero also provides business owners with clear, easy-to-understand financial insights that support better ongoing cash flow management and financial oversight. With secure cloud access, real-time reporting, and direct collaboration between clients and their accounting team, bookkeeping becomes more proactive, organized, and efficient — allowing business owners to focus more on running and growing their business.",
        ],
        fr: [
          "**Tenue de livres simplifiée et automatisation** — Pour les clients axés sur la tenue de livres, Xero simplifie la comptabilité quotidienne en automatisant bon nombre des processus répétitifs qui consomment traditionnellement un temps précieux. Des fonctionnalités telles que les flux bancaires automatisés, la capture de reçus, les factures récurrentes et les outils de rapprochement intelligent permettent de maintenir des dossiers financiers propres et précis, tout en réduisant la saisie manuelle des données et en minimisant les erreurs.",
          "**Visibilité financière en temps réel et collaboration** — Xero fournit également aux propriétaires d'entreprises des informations financières claires et faciles à comprendre qui soutiennent une meilleure gestion des flux de trésorerie et une surveillance financière continue. Grâce à un accès cloud sécurisé, des rapports en temps réel et une collaboration directe entre les clients et leur équipe comptable, la tenue de livres devient plus proactive, organisée et efficace — permettant aux propriétaires de se concentrer davantage sur la gestion et la croissance de leur entreprise.",
        ],
      },
      bullets: {
        en: ["Real-time cash flow visibility", "Automated bank feeds", "Bank-level security", "Multi-currency support"],
        fr: ["Flux de trésorerie en temps réel", "Flux bancaires automatisés", "Sécurité bancaire", "Multi-devises"],
      },
    },
    {
      id: "quickbooks-online",
      name: "QuickBooks Online",
      logo: { src: "https://cdn.simpleicons.org/quickbooks/2CA01C", alt: "QuickBooks Online" },
      paragraphs: {
        en: [
          "**Always Know Where You Stand** — Connect your business bank account to QuickBooks Online to track expenses and see your numbers in real-time. Stay ahead of tax time with automatic expense sorting, so you never miss a deduction. Invoicing, mileage tracking, and receipt capture work together so you have a complete picture of your business from any device.",
          "**Valuable Business Insights** — Stay on top of the numbers and gain real-time insights with straightforward reports, like profit & loss, expenses, and balance sheets. QuickBooks Online integrates with hundreds of apps — payroll, payments, inventory, and time-tracking — so your accounting hub adapts to how your business actually runs.",
          "**Built for Canadian Businesses** — QuickBooks Online handles GST, HST, and QST natively, with sales-tax tracking and automated reports your bookkeeper can file directly. With the right information at the right time, QuickBooks Online helps you make informed business decisions now — and better prepare for tomorrow.",
        ],
        fr: [
          "**Sachez toujours où vous en êtes** — Connectez le compte bancaire de votre entreprise à QuickBooks en ligne pour suivre vos dépenses et voir vos chiffres en temps réel. Gardez une longueur d'avance sur la période fiscale grâce au tri automatique des dépenses, afin de ne jamais manquer une déduction. Facturation, suivi du kilométrage et capture de reçus fonctionnent ensemble pour une vue complète de votre entreprise depuis n'importe quel appareil.",
          "**Des informations précieuses sur votre entreprise** — Restez au fait des chiffres et obtenez des informations en temps réel grâce à des rapports simples, comme les profits et pertes, les dépenses et les bilans. QuickBooks Online s'intègre à des centaines d'applications — paie, paiements, inventaire et suivi du temps — pour que votre centre comptable s'adapte à votre réalité.",
          "**Conçu pour les entreprises canadiennes** — QuickBooks Online gère la TPS, la TVH et la TVQ nativement, avec un suivi des taxes de vente et des rapports automatisés que votre teneur de livres peut produire directement.",
        ],
      },
    },
    {
      id: "stripe",
      name: "Stripe — Payment Processing",
      logo: { src: "https://cdn.simpleicons.org/stripe/635BFF", alt: "Stripe" },
      paragraphs: {
        en: [
          "Stripe is a powerful online payment platform that integrates seamlessly with Xero and QuickBooks Online. For our e-commerce and subscription-based clients, we connect Stripe directly to their accounting platform so that every payment, refund, and fee is automatically recorded.",
          "This eliminates hours of manual reconciliation each month and ensures your revenue is always accurately reflected in your books in real time. We also help configure tax handling, payout reconciliation, and chargeback tracking so nothing slips through the cracks.",
        ],
        fr: [
          "Stripe est une plateforme de paiement en ligne puissante qui s'intègre parfaitement à Xero et QuickBooks Online. Pour nos clients e-commerce et par abonnement, nous connectons Stripe directement à leur plateforme comptable afin que chaque paiement, remboursement et frais soit enregistré automatiquement.",
          "Cela élimine des heures de rapprochement manuel chaque mois et garantit que vos revenus sont toujours reflétés avec exactitude dans vos livres, en temps réel. Nous aidons aussi à configurer les taxes, les rapprochements de versements et le suivi des rétrofacturations.",
        ],
      },
    },
    {
      id: "a2x",
      name: "A2X — eCommerce Accounting",
      logo: { src: "https://www.a2xaccounting.com/img/logo-a2x.png", alt: "A2X" },
      paragraphs: {
        en: [
          "A2X automates the bookkeeping for Amazon and Shopify sellers by accurately summarizing settlements and posting them directly to Xero or QuickBooks Online. For our e-commerce clients, this means clean, accurate books even with thousands of transactions per month.",
          "A2X handles multi-currency, taxes, fees, refunds, and adjustments — all automatically. It is one of the most important tools we use for clients selling online in Canada and internationally, and it makes month-end close fast and reliable.",
        ],
        fr: [
          "A2X automatise la tenue de livres pour les vendeurs Amazon et Shopify en résumant avec précision les règlements et en les publiant directement dans Xero ou QuickBooks Online. Pour nos clients e-commerce, cela signifie des livres propres et exacts, même avec des milliers de transactions par mois.",
          "A2X gère les devises multiples, taxes, frais, remboursements et ajustements — automatiquement. C'est l'un des outils les plus importants pour nos clients vendant en ligne au Canada et à l'international.",
        ],
      },
    },
    {
      id: "hubdoc",
      name: "Hubdoc",
      // Official Hubdoc SVG from their own CDN
      logo: { src: "https://bookkeeper360.com/images/uploads/hubdoc.png", alt: "Hubdoc" },
      paragraphs: {
        en: [
          "Hubdoc is an automated document-capture platform that eliminates the shoebox of receipts and bills. Snap a photo, forward an email, or connect a vendor account, and Hubdoc captures the data, categorizes it, and pushes it into Xero or QuickBooks Online with the source document attached.",
          "For our clients, this means audit-ready records with zero manual data entry. Every supporting document is stored securely in the cloud, indexed, and easy to retrieve — whether you need it for a CRA review, an internal audit, or simply to find an old invoice in seconds.",
        ],
        fr: [
          "Hubdoc est une plateforme de capture automatisée de documents qui élimine la boîte à chaussures de reçus et factures. Prenez une photo, transférez un courriel ou connectez un compte fournisseur, et Hubdoc capture les données, les catégorise et les pousse dans Xero ou QuickBooks Online avec le document source en pièce jointe.",
          "Pour nos clients, cela signifie des registres prêts pour audit, sans saisie manuelle. Chaque document est stocké de manière sécurisée dans le nuage, indexé et facile à retrouver.",
        ],
      },
    },
    {
      id: "wagepoint",
      name: "Wagepoint",
      // Official Wagepoint logo from their press kit
      logo: { src: "https://t9011167328.p.clickup-attachments.com/t9011167328/cb67791d-45dc-43cd-89ea-cac792ead0e5/80d61c29be7c64883b7699b0e7a8b8ea2eaf8028.png", alt: "Wagepoint" },
      paragraphs: {
        en: [
          "Wagepoint is a Canadian payroll platform built specifically for small businesses. It handles direct deposits, ROE filing, T4s, RL-1s, and CRA/RQ remittances — all automated and compliant with provincial standards in Quebec and across Canada.",
          "We use Wagepoint with our smaller clients because it is intuitive, transparent, and priced fairly per employee. Employees get self-service access to pay stubs and tax slips, which dramatically reduces back-and-forth and keeps everyone on the same page.",
        ],
        fr: [
          "Wagepoint est une plateforme de paie canadienne conçue spécifiquement pour les petites entreprises. Elle gère les dépôts directs, les RE, les T4, les RL-1 et les versements ARC/RQ — tout est automatisé et conforme aux normes provinciales au Québec et partout au Canada.",
          "Nous utilisons Wagepoint avec nos clients plus petits parce qu'elle est intuitive, transparente et tarifée équitablement par employé. Les employés ont un accès libre-service à leurs bulletins de paie et feuillets fiscaux.",
        ],
      },
    },
    {
      id: "quickbooks-payroll",
      name: "QuickBooks Payroll",
      logo: { src: "https://cdn.simpleicons.org/quickbooks/2CA01C", alt: "QuickBooks Payroll" },
      paragraphs: {
        en: [
          "QuickBooks Payroll integrates directly with QuickBooks Online to give our clients a single source of truth for accounting and payroll. Pay runs, journal entries, and tax remittances all flow into the same general ledger — no exports, no manual reconciliation.",
          "It is ideal for small and mid-sized teams who already run their bookkeeping on QuickBooks Online and want payroll handled inside the same login. We configure deductions, benefits, vacation accruals, and CRA/RQ remittances so payroll runs predictably every cycle, with T4s and RL-1s generated automatically at year-end.",
        ],
        fr: [
          "QuickBooks Payroll s'intègre directement à QuickBooks Online pour offrir à nos clients une source unique de vérité pour la comptabilité et la paie. Les paiements, écritures comptables et versements de taxes circulent tous dans le même grand livre — sans export ni rapprochement manuel.",
          "C'est idéal pour les équipes petites et moyennes qui utilisent déjà QuickBooks Online et veulent gérer la paie dans le même environnement. Nous configurons les retenues, avantages, accumulations de vacances et versements ARC/RQ pour que la paie fonctionne de façon prévisible chaque cycle.",
        ],
      },
    },
    {
      id: "adp",
      name: "ADP",
      logo: { src: "https://cdn.simpleicons.org/adp/D0271D", alt: "ADP" },
      paragraphs: {
        en: [
          "ADP is one of the most established payroll and HR platforms in the world, and we use it for clients with more complex payroll needs — multiple provinces, larger teams, garnishments, union deductions, or advanced benefit administration.",
          "ADP delivers full compliance across CRA, Revenu Québec, and CNESST, with robust reporting and audit trails. For Quebec employers, ADP handles RL-1s, CNESST contributions, and Quebec-specific deductions accurately and on time. We help configure the platform, manage the monthly process, and provide year-end T4 and RL-1 distribution.",
        ],
        fr: [
          "ADP est l'une des plateformes de paie et de RH les plus établies au monde, et nous l'utilisons pour les clients ayant des besoins de paie plus complexes — plusieurs provinces, équipes plus importantes, saisies-arrêts, retenues syndicales ou administration avancée des avantages sociaux.",
          "ADP offre une conformité complète avec l'ARC, Revenu Québec et la CNESST, avec des rapports robustes et des pistes d'audit. Pour les employeurs québécois, ADP gère les RL-1, les contributions CNESST et les retenues spécifiques au Québec avec précision et à temps.",
        ],
      },
    },
    {
      id: "ceridian-dayforce",
      name: "Ceridian / DayForce",
      // Official Dayforce/Ceridian logo
      logo: { src: "https://ssrs.com/wp-content/uploads/dayforce-logo.png", alt: "Ceridian DayForce" },
      paragraphs: {
        en: [
          "Ceridian DayForce is an enterprise-grade human capital management platform combining payroll, time, scheduling, benefits, and HR into one continuous system. We use DayForce for our mid-market and growing clients who need real-time payroll calculations and deep workforce reporting.",
          "DayForce's continuous calculation engine means payroll is always up to date — no batch processing, no end-of-period surprises. For Quebec employers, it handles RL-1 production, CNESST tracking, and provincial labour-standard compliance natively. We assist with implementation, configuration, monthly oversight, and year-end filings to make sure the platform delivers the value it promises.",
        ],
        fr: [
          "Ceridian DayForce est une plateforme de gestion du capital humain de calibre entreprise qui combine paie, temps, planification, avantages sociaux et RH dans un système continu. Nous utilisons DayForce pour nos clients du marché intermédiaire et en croissance qui ont besoin de calculs de paie en temps réel.",
          "Le moteur de calcul continu de DayForce signifie que la paie est toujours à jour — sans traitement par lots, sans surprise de fin de période. Pour les employeurs québécois, il gère la production des RL-1, le suivi de la CNESST et la conformité aux normes du travail provinciales.",
        ],
      },
    },
  ];

  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=85"
        overline={t("Software & Tech", "Logiciels")}
        crumb={t("Software", "Logiciels")}
        title={t("The Technology Stack", "La pile technologique")}
        accent={t("Behind Your Finances", "derrière vos finances")}
        sub={t("We believe the right tools eliminate busywork and surface insights faster.", "Nous croyons que les bons outils éliminent les tâches répétitives et révèlent les insights plus vite.")}
      />

      <div className="bg-white border-b border-border sticky top-[72px] z-30">
        <div className="container-x flex flex-wrap gap-2 py-4 justify-center">
          {tools.map((tool) => (
            <a key={tool.id} href={`#${tool.id}`} className="px-4 py-2 rounded-full text-sm font-semibold text-navy bg-secondary hover:bg-accent hover:text-white transition-colors">
              {tool.name}
            </a>
          ))}
        </div>
      </div>

      {tools.map((tool, i) => (
        <Section key={tool.id} id={tool.id} className={i % 2 === 0 ? "bg-white" : "bg-peach"}>
          <FadeIn className="max-w-4xl mx-auto">
            <div className="flex items-center gap-5 mb-7 flex-wrap">
              {tool.logo && (
                <div
                  className="w-24 h-24 rounded-2xl bg-white border border-border shadow-sm flex items-center justify-center shrink-0 overflow-hidden"
                  style={{ padding: zoomedLogos.includes(tool.id) ? "0px" : "10px" }}
                >
                  <img
                    src={tool.logo.src}
                    alt={tool.logo.alt}
                    className="object-contain"
                    loading="lazy"
                    style={{
                      width: zoomedLogos.includes(tool.id) ? "160%" : "100%",
                      height: zoomedLogos.includes(tool.id) ? "160%" : "100%",
                    }}
                  />
                </div>
              )}
              {tool.wordmark && (
                <div
                  className="h-10 px-3 rounded-lg flex items-center justify-center font-display font-extrabold text-lg text-white"
                  style={{ background: tool.wordmark.color }}
                  aria-hidden="true"
                >
                  {tool.wordmark.text}
                </div>
              )}
            <div>
             <h2 className="!mb-0">{tool.name}</h2>
             {tool.platinum && (
             <span className="inline-flex mt-2 px-3 py-1 rounded-full platinum-badge text-xs font-bold uppercase tracking-wider">
             ★ {t("Platinum Partner", "Partenaire Platinum")}
               </span>
               )}
             </div>
            </div>

            <div className="space-y-6 mb-8">
              {(t("__en__", "__fr__") === "__en__" ? tool.paragraphs.en : tool.paragraphs.fr).map((p, k) => {
                const m = p.match(/^\*\*(.+?)\*\*\s*[—-]\s*(.*)$/);
                if (m) {
                  return (
                    <div key={k}>
                      <h3 className="mb-2 text-xl">{m[1]}</h3>
                      <p className="text-lg text-body leading-relaxed">{m[2]}</p>
                    </div>
                  );
                }
                return <p key={k} className="text-lg text-body leading-relaxed">{p}</p>;
              })}
            </div>
            {tool.bullets && (
              <div className="grid sm:grid-cols-2 gap-3">
                {tool.bullets.en.map((b, k) => (
                  <div key={k} className="flex items-start gap-2 p-4 rounded-xl bg-card border border-border">
                    <Check size={18} className="text-accent flex-shrink-0 mt-1" />
                    <span className="text-body text-sm">{t(tool.bullets!.en[k], tool.bullets!.fr[k])}</span>
                  </div>
                ))}
              </div>
            )}
          </FadeIn>
        </Section>
      ))}

      <section className="text-white py-16 md:py-24" style={{ background: "#3D0066" }}>
        <div className="container-x">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <div className="overline mb-4" style={{ color: "#C9A0FF" }}>{t("How It All Connects", "Comment tout se connecte")}</div>
            <h2 className="!text-white mb-8">{t("Your Data Flow", "Votre flux de données")}</h2>
            <div className="flex flex-wrap justify-center items-center gap-3 text-sm font-semibold">
              <div className="px-5 py-3 rounded-xl bg-white/10 border border-white/20">Hubdoc</div>
              <ArrowRight style={{ color: "#C9A0FF" }} />
              <div className="px-5 py-3 rounded-xl text-white" style={{ background: "#6B21A8" }}>Xero / QuickBooks Online</div>
              <ArrowRight style={{ color: "#C9A0FF" }} />
              <div className="px-5 py-3 rounded-xl bg-white/10 border border-white/20">{t("Reports", "Rapports")}</div>
            </div>
            <p className="text-white/70 mt-8 text-sm">
              {t("Stripe & A2X feed transactions · Wagepoint handles payroll", "Stripe & A2X alimentent les transactions · Wagepoint gère la paie")}
            </p>
            <Link to="/contact" className="btn-primary mt-10" style={{ background: "#7C3AED" }}>{t("Set Up My Stack", "Configurer ma pile")} <ArrowRight size={16} /></Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default Software;