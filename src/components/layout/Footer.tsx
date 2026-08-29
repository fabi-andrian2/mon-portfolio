"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

/* ═══════════════════════════════════════════
   VARIANTS
   ═══════════════════════════════════════════ */

const footerVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/* ═══════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════ */

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20px" }}
      className="relative border-t border-border bg-background/60 backdrop-blur-sm"
    >
      {/* Cyan accent on the line */}
      <div className="pointer-events-none absolute -top-px left-1/2 h-px w-16 -translate-x-1/2 bg-accent/40" />

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-8 md:flex-row md:justify-between">
        {/* Branding */}
        <a
          href="#"
          className="text-lg font-semibold tracking-tight text-text transition-opacity duration-200 hover:opacity-80"
        >
          fabrice<span className="text-accent">.</span>
        </a>

        {/* Center: Tagline + Copyright */}
        <div className="flex flex-col items-center gap-1.5 md:flex-row md:gap-4 text-center">
          <p className="font-mono text-[11px] italic text-secondary/70">
            Driven by curiosity<span className="text-accent/60">.</span> Built with precision<span className="text-accent/60">.</span>
          </p>
          <span className="hidden h-3 w-px bg-border md:inline-block" />
          <p className="text-[11px] text-secondary/50">
            © 2026 Fabrice Andrianirina. Tous droits réservés.
          </p>
        </div>

        {/* Right: Socials + Back to top */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/fabi-andrian2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-secondary transition-all duration-200 hover:-translate-y-0.5 hover:text-accent"
          >
            <FaGithub size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/fabrice-andrianirina"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-secondary transition-all duration-200 hover:-translate-y-0.5 hover:text-accent"
          >
            <FaLinkedin size={16} />
          </a>

          <span className="h-4 w-px bg-border" />

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-secondary transition-all duration-200 hover:border-accent/40 hover:text-accent"
            aria-label="Retour en haut"
          >
            <ArrowUp
              size={15}
              className="transition-transform duration-200 group-hover:-translate-y-0.5"
            />
          </motion.button>
        </div>
      </div>
    </motion.footer>
  );
}