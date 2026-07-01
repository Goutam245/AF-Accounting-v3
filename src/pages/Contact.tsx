import { useState } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { FadeIn, Section } from "@/components/ui-bits";
import { PageHero } from "@/components/PageHero";
import { Mail, MapPin, ArrowRight, Calendar, Twitter, Facebook, Linkedin } from "lucide-react";

const locations = [
  {
    cityEn: "Burlington",
    cityFr: "Burlington",
    address: ["901 Guelph Line", "Burlington, ON L7R 3N8"],
  },
  {
    cityEn: "Montreal",
    cityFr: "Montréal",
    address: ["#1700 – 2001 Blvd Robert-Bourassa", "Montreal, QC H3A 2A6"],
  },
];

const Contact = () => {
  const { t } = useLang();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const entry = {
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      businessType: data.get("businessType"),
      revenue: data.get("revenue"),
      message: data.get("message"),
      submittedAt: new Date().toISOString(),
    };
    try {
      const existing = JSON.parse(localStorage.getItem("af_subscribers") || "[]");
      existing.push(entry);
      localStorage.setItem("af_subscribers", JSON.stringify(existing));
    } catch {
      // ignore storage errors
    }
    setSubmitted(true);
    form.reset();
  };

  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1497366754035-f200968a5db4?w=1400&q=85"
        overline={t("Get In Touch", "Contactez-nous")}
        crumb={t("Contact", "Contact")}
        title={t("Let's Talk About", "Parlons de")}
        accent={t("Your Business", "votre entreprise")}
        sub={t("Free 30-minute consultation. No obligation. Real answers from a CPA.", "Consultation gratuite de 30 minutes. Sans engagement.")}
      />

      <Section className="bg-background">
        <div className="grid lg:grid-cols-2 gap-10">
          <FadeIn>
            <div className="card-soft">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center"><Calendar /></div>
                <div>
                  <h3 className="!mb-0">{t("Book a Free Consultation", "Réserver une consultation gratuite")}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t("24-hour response", "Réponse sous 24 heures")}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t("(during non-tax seasons)", "(hors saison fiscale)")}
                  </p>
                </div>
              </div>

              {submitted ? (
                <div className="rounded-xl bg-accent/10 border border-accent/30 p-5 text-navy">
                  <div className="font-semibold mb-1">{t("Thanks — you're on the list!", "Merci — vous êtes inscrit!")}</div>
                  <p className="text-sm text-body">
                    {t(
                      "We've added you to our subscriber list and a CPA will reach out within 24 hours.",
                      "Nous vous avons ajouté à notre liste d'abonnés et un CPA vous contactera sous 24 heures."
                    )}
                  </p>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <input name="name" required placeholder={t("Name", "Nom")} className="px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:border-accent" />
                    <input name="email" required type="email" placeholder={t("Email", "Courriel")} className="px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:border-accent" />
                  </div>
                  <input name="phone" placeholder={t("Phone", "Téléphone")} className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:border-accent" />
                  <input name="businessType" placeholder={t("Business type", "Type d'entreprise")} className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:border-accent" />
                  <select name="revenue" defaultValue="" className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:border-accent text-body">
                    <option value="" disabled>{t("Revenue range", "Tranche de revenus")}</option>
                    <option>{t("Less than $100K", "Moins de 100K $")}</option>
                    <option>{t("Less than $500K", "Moins de 500K $")}</option>
                    <option>{t("Less than $1M", "Moins de 1M $")}</option>
                    <option>{t("Less than $2M", "Moins de 2M $")}</option>
                    <option>{t("Less than $3M", "Moins de 3M $")}</option>
                    <option>{t("$3M and above", "3M $ et plus")}</option>

                  </select>
                  <textarea name="message" placeholder={t("Tell us about your business", "Parlez-nous de votre entreprise")} rows={4} className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:border-accent" />
                  <button type="submit" className="btn-primary w-full">{t("Send Message", "Envoyer")} <ArrowRight size={16} /></button>
                </form>
              )}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-3">
              {t("Connect With Us", "Connectez-vous avec nous")}
            </h2>
            <p className="text-body mb-6">
              {t(
                "Thank you for choosing to reach out to us. Our team of experienced accountants is just a message away.",
                "Merci de nous contacter. Notre équipe de comptables expérimentés n'est qu'à un message."
              )}
            </p>

            <h3 className="font-display text-2xl font-bold text-navy mb-2">
              {t("Get in Touch", "Entrer en contact")}
            </h3>
            <p className="text-body mb-4">
              {t(
                "Please email us at info@afaccounting.ca or use the contact form below.",
                "Veuillez nous écrire à info@afaccounting.ca ou utiliser le formulaire ci-dessous."
              )}
            </p>

            <a
              href="mailto:info@afaccounting.ca"
              className="flex items-center gap-3 mb-6 text-xl md:text-2xl font-semibold text-navy hover:text-accent transition-colors"
            >
              <Mail className="text-accent" /> info@afaccounting.ca
            </a>

            <div className="flex items-center gap-4 mb-8">
              {[
                { Icon: Twitter, href: "http://twitter.com/afaccounting", label: "Twitter" },
                { Icon: Facebook, href: "http://facebook.com/afaccounting", label: "Facebook" },
                { Icon: Linkedin, href: "https://www.linkedin.com/company/af-accounting", label: "LinkedIn" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-navy hover:text-accent transition-colors"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>

            <div className="overflow-hidden rounded-2xl border border-border" style={{ height: 400 }}>
              <iframe
                title="Burlington Office Map"
                src="https://www.google.com/maps?q=901+Guelph+Line,+Burlington,+ON+L7R+3N8&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </FadeIn>
        </div>

        <div className="mt-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy text-center mb-10">
            {t("Our Offices", "Nos bureaux")}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {locations.map((loc) => (
              <div
                key={loc.cityEn}
                className="bg-white border border-border rounded-xl p-6 transition-colors hover:border-accent/30"
              >
                <MapPin className="text-accent mb-4" size={28} />
                <h4 className="text-navy font-bold text-lg mb-2">{t(loc.cityEn, loc.cityFr)}</h4>
                <div className="text-body text-sm leading-relaxed">
                  {loc.address.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contact;
