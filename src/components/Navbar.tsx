import { Link, NavLink as RNavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import { LangToggle } from "./LangToggle";

import afLogo from "@/assets/af-logo.png";

const Logo = () => (
  <Link to="/" className="flex items-center" aria-label="AF Accounting">
    <img src={afLogo} alt="AF Accounting" className="h-10 w-auto" />
  </Link>
);

type DD = { label: string; items: { label: string; to: string }[] };

export const Navbar = ({ topOffset = 0 }: { topOffset?: number }) => {
  const { t } = useLang();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDD, setOpenDD] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setIsScrolled(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const handleEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDD(name);
  };
  const handleLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setOpenDD(null), 150);
  };

  const dds: DD[] = [
    {
      label: t("Services", "Services"),
      items: [
        { label: t("Bookkeeping", "Tenue de livres"), to: "/services#bookkeeping" },
        { label: t("Tax Planning & Filing", "Planification fiscale"), to: "/services#tax" },
        { label: t("Payroll Services", "Services de paie"), to: "/services#payroll" },
        { label: t("Cloud Accounting", "Comptabilité en nuage"), to: "/services#cloud" },
        { label: t("Corporate Tax", "Impôt des sociétés"), to: "/services#corporate" },
        { label: t("Sales Tax (GST/QST)", "TPS/TVQ"), to: "/services#sales-tax" },
      ],
    },
    {
      label: t("Resources", "Ressources"),
      items: [
        { label: t("Blog", "Blogue"), to: "/resources#blog" },
        { label: t("Free Guides", "Guides gratuits"), to: "/resources#guides" },
        { label: t("Tax Deadline Calendar", "Calendrier fiscal"), to: "/resources#calendar" },
        { label: t("FAQ", "FAQ"), to: "/resources#faq" },
      ],
    },
  ];

  const simpleLinks = [
    { label: t("Home", "Accueil"), to: "/" },
    { label: t("Pricing", "Tarifs"), to: "/pricing" },
    { label: t("Software", "Logiciels"), to: "/software" },
    { label: t("About", "À propos"), to: "/about" },
  ];

  const scrolledStyle: React.CSSProperties = isScrolled
    ? {
        background: "rgba(245,240,255,0.96)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid #E2D9F3",
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
      }
    : {
        background: "transparent",
        borderBottom: "none",
        boxShadow: "none",
      };

  return (
    <header
      style={{
        position: "fixed",
        top: topOffset,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "top 0.3s ease, background 0.3s ease, box-shadow 0.3s ease",
        ...scrolledStyle,
      }}
    >
      {/* Desktop */}
      <nav className="hidden lg:flex items-center justify-between gap-6 px-6 xl:px-12 h-[76px]">
        <div className="flex-shrink-0"><Logo /></div>

        <div className="flex items-center gap-6 xl:gap-8 text-navy whitespace-nowrap flex-1 justify-center">
          <RNavLink to="/" end className={({ isActive }) => isActive ? "text-accent" : "hover:text-accent transition-colors"} style={{ padding: "8px 4px", fontSize: 14, fontWeight: 500 }}>
            {t("Home", "Accueil")}
          </RNavLink>
          <Dropdown {...dds[0]} open={openDD === dds[0].label} onEnter={() => handleEnter(dds[0].label)} onLeave={handleLeave} onClose={() => setOpenDD(null)} />
          <RNavLink to="/pricing" className={({ isActive }) => isActive ? "text-accent" : "hover:text-accent transition-colors"} style={{ padding: "8px 4px", fontSize: 14, fontWeight: 500 }}>
            {t("Pricing", "Tarifs")}
          </RNavLink>
          <RNavLink to="/software" className={({ isActive }) => isActive ? "text-accent" : "hover:text-accent transition-colors"} style={{ padding: "8px 4px", fontSize: 14, fontWeight: 500 }}>
            {t("Software", "Logiciels")}
          </RNavLink>
          <Dropdown {...dds[1]} open={openDD === dds[1].label} onEnter={() => handleEnter(dds[1].label)} onLeave={handleLeave} onClose={() => setOpenDD(null)} />
          <RNavLink to="/about" className={({ isActive }) => isActive ? "text-accent" : "hover:text-accent transition-colors"} style={{ padding: "8px 4px", fontSize: 14, fontWeight: 500 }}>
            {t("About", "À propos")}
          </RNavLink>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          <LangToggle />
          <Link to="/contact" className="btn-primary whitespace-nowrap" style={{ padding: "12px 20px" }}>
            {t("Book a Consultation", "Consultation")} <ArrowRight size={16} />
          </Link>
        </div>
      </nav>

      {/* Mobile */}
      <nav className="lg:hidden flex items-center justify-between px-5 h-[64px]">
        <Logo />
        <button className="text-navy" onClick={() => setMobile(!mobile)} aria-label="Menu">
          {mobile ? <X /> : <Menu />}
        </button>
      </nav>

      {mobile && (
        <div className="lg:hidden bg-white border-t border-border px-5 py-6 space-y-4">
          {simpleLinks.map((l) => (
            <Link key={l.to} to={l.to} className="block text-navy font-medium" onClick={() => setMobile(false)}>{l.label}</Link>
          ))}
          {dds.map((d) => (
            <details key={d.label} className="group">
              <summary className="flex justify-between items-center cursor-pointer text-navy font-medium">{d.label}<ChevronDown size={16} /></summary>
              <div className="pl-4 pt-2 space-y-2">
                {d.items.map((i) => (
                  <Link key={i.to} to={i.to} className="block text-sm text-body" onClick={() => setMobile(false)}>{i.label}</Link>
                ))}
              </div>
            </details>
          ))}
          <div className="flex flex-col gap-3 pt-2">
            <LangToggle showLabel />
            <Link to="/contact" className="btn-primary w-full justify-center" onClick={() => setMobile(false)}>
              {t("Book a Consultation", "Consultation")} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

const Dropdown = ({
  label,
  items,
  open,
  onEnter,
  onLeave,
  onClose,
}: DD & { open: boolean; onEnter: () => void; onLeave: () => void; onClose: () => void }) => (
  <div
    className="dropdown-container relative"
    onMouseEnter={onEnter}
    onMouseLeave={onLeave}
  >
    <button
      className="flex items-center gap-1 hover:text-accent transition-colors text-navy"
      style={{ fontSize: 14, fontWeight: 500 }}
      aria-expanded={open}
    >
      {label}
      <ChevronDown size={16} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
    </button>
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="absolute left-0"
          style={{
            top: "calc(100% + 8px)",
            minWidth: 240,
            background: "#FFFFFF",
            border: "1px solid #E2D9F3",
            borderRadius: 12,
            boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
            padding: 8,
            zIndex: 1000,
          }}
        >
          <div className="absolute -top-2 left-0 h-2 w-full" />
          {items.map((i) => (
            <Link
              key={i.to}
              to={i.to}
              onClick={onClose}
              className="dd-item group flex items-center w-full text-left rounded-lg transition-all duration-150"
              style={{
                padding: "11px 16px",
                fontSize: 15,
                fontWeight: 500,
                color: "#4A5568",
              }}
            >
              <span className="dd-arrow opacity-0 -ml-2 mr-0 text-accent transition-all duration-150">→</span>
              <span>{i.label}</span>
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);
