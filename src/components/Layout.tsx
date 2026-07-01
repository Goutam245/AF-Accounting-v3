import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

import { ScrollProgress } from "./ScrollProgress";
import { useLang } from "@/i18n/LanguageContext";

export const Layout = ({ children }: { children: ReactNode }) => {
  const { lang } = useLang();
  const { pathname } = useLocation();
  const NAV_H = 76;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <ScrollProgress />
      <Navbar topOffset={0} />
      <AnimatePresence mode="wait">
        <motion.main
          key={`${pathname}-${lang}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex-1"
          style={{ paddingTop: NAV_H }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
};
