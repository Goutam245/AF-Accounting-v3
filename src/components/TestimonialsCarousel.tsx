import { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { FadeIn, Overline } from "@/components/ui-bits";

type Review = {
  q: { en: string; fr: string };
  name: string;
  title: { en: string; fr: string };
  initials: string;
};

const reviews: Review[] = [
  {
    q: {
      en: "I could not have asked for better accounting and bookkeeping services than what AF Accounting has provided me with. The cloud accounting approach is perfect for my business model.",
      fr: "Je n'aurais pas pu demander de meilleurs services de comptabilité que ceux qu'AF Accounting m'a offerts. L'approche en nuage est parfaite pour mon modèle d'affaires.",
    },
    name: "Felix Krusch",
    title: { en: "Founder, RichWP", fr: "Fondateur, RichWP" },
    initials: "FK",
  },
  {
    q: {
      en: "The team is responsive, organized, and genuinely cares about our business. They turned our messy books into a system we actually understand. Highly recommended for any small business in Quebec.",
      fr: "L'équipe est réactive, organisée et se soucie réellement de notre entreprise. Ils ont transformé nos livres en désordre en un système que nous comprenons enfin. Fortement recommandé pour toute PME au Québec.",
    },
    name: "Marie-Claude Tremblay",
    title: { en: "Owner, Boutique MCT", fr: "Propriétaire, Boutique MCT" },
    initials: "MT",
  },
  {
    q: {
      en: "Switching to AF Accounting was the best business decision we made last year. Filings are always on time, communication is bilingual, and pricing is transparent. No surprises — ever.",
      fr: "Passer à AF Accounting a été notre meilleure décision d'affaires l'an dernier. Les déclarations sont toujours à temps, la communication est bilingue et la tarification est transparente. Aucune surprise.",
    },
    name: "Patrick Chen",
    title: { en: "Director, Northline Consulting", fr: "Directeur, Northline Consulting" },
    initials: "PC",
  },
  {
    q: {
      en: "Alan and his team brought clarity to a tax situation we had been avoiding for years. Professional, knowledgeable, and patient — they made the whole process painless.",
      fr: "Alan et son équipe ont apporté de la clarté à une situation fiscale que nous évitions depuis des années. Professionnels, compétents et patients — ils ont rendu tout le processus indolore.",
    },
    name: "Sophie Lacombe",
    title: { en: "Founder, Studio Lacombe", fr: "Fondatrice, Studio Lacombe" },
    initials: "SL",
  },
  {
    q: {
      en: "Alan's team made our migration to Xero seamless. Their attention to detail and 24-hour response time has changed how we operate. They feel like part of our team.",
      fr: "L'équipe d'Alan a rendu notre migration vers Xero impeccable. Leur souci du détail et leur réponse en 24 heures ont changé notre façon de travailler. Ils font partie de notre équipe.",
    },
    name: "David Roy",
    title: { en: "CEO, Roy & Co.", fr: "PDG, Roy & Co." },
    initials: "DR",
  },
];

export const TestimonialsCarousel = () => {
  const { t, lang } = useLang();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % reviews.length), 6000);
    return () => clearInterval(id);
  }, []);

  const d = reviews[idx];

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container-x">
        <FadeIn className="text-center max-w-3xl mx-auto mb-10">
          <Overline>{t("Google Reviews", "Avis Google")}</Overline>
          <h2>
            {t("What Business Owners ", "Ce que disent les ")}
            <span className="accent-text">{t("Are Saying", "entrepreneurs")}</span>
          </h2>
        </FadeIn>

        <div className="max-w-3xl mx-auto relative">
          <div
            key={idx}
            className="bg-white rounded-2xl p-8 md:p-10 relative animate-in fade-in duration-500"
            style={{
              borderLeft: "4px solid #6B21A8",
              boxShadow: "0 8px 32px rgba(107,33,168,0.10)",
            }}
          >
            <div className="flex gap-1 mb-5" style={{ color: "#6B21A8" }}>
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={20} fill="currentColor" />
              ))}
            </div>
            <p className="text-body text-lg italic mb-8 leading-relaxed min-h-[120px]">
              "{lang === "fr" ? d.q.fr : d.q.en}"
            </p>
            <div className="flex items-center gap-4 pt-5 border-t border-border">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-white font-display font-bold text-lg"
                style={{ background: "linear-gradient(135deg, #6B21A8, #7C3AED)" }}
              >
                {d.initials}
              </div>
              <div>
                <div className="font-semibold text-navy text-base">{d.name}</div>
                <div className="text-sm text-muted-foreground">
                  {lang === "fr" ? d.title.fr : d.title.en}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => setIdx((i) => (i - 1 + reviews.length) % reviews.length)}
              aria-label="Previous"
              className="w-10 h-10 rounded-full border border-border bg-white text-accent hover:bg-accent hover:text-white transition-colors flex items-center justify-center"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Review ${i + 1}`}
                  onClick={() => setIdx(i)}
                  className="w-2.5 h-2.5 rounded-full transition-all"
                  style={{
                    background: i === idx ? "#6B21A8" : "rgba(107,33,168,0.25)",
                    transform: i === idx ? "scale(1.2)" : "scale(1)",
                  }}
                />
              ))}
            </div>
            <button
              onClick={() => setIdx((i) => (i + 1) % reviews.length)}
              aria-label="Next"
              className="w-10 h-10 rounded-full border border-border bg-white text-accent hover:bg-accent hover:text-white transition-colors flex items-center justify-center"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
