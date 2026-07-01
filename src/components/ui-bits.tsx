import { ReactNode } from "react";
import { motion } from "framer-motion";

export const Section = ({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) => (
  <section id={id} className={`py-12 md:py-16 ${className}`}>
    <div className="container-x">{children}</div>
  </section>
);

export const FadeIn = ({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export const Stagger = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={{ visible: { transition: { staggerChildren: 0.08 } }, hidden: {} }}
    className={className}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <motion.div
    variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
    className={className}
  >
    {children}
  </motion.div>
);

export const Overline = ({ children, light = false }: { children: ReactNode; light?: boolean }) => (
  <div className={`overline mb-4 ${light ? "text-accent" : "text-accent"}`}>{children}</div>
);
