"use client";

import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GmailIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const socialLinks = [
  { name: "GitHub", href: "https://github.com/fabi-andrian2", icon: GitHubIcon },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/fabrice-andrianirina", icon: LinkedInIcon },
  { name: "Gmail", href: "mailto:andrianirinafabrice2024@gmail.com", icon: GmailIcon },
  { name: "WhatsApp", href: "https://wa.me/261349165931", icon: WhatsAppIcon },
  { name: "Facebook", href: "https://www.facebook.com/fabi.andrian.06", icon: FacebookIcon },
  { name: "Instagram", href: "https://www.instagram.com/fabi_andrian", icon: InstagramIcon },
];

export function AboutSection() {
  return (
    <section id="about" className="relative px-6 py-24 md:py-32">
      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
        {/* Left: Photo + Socials */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center gap-8 md:items-start"
        >
          {/* Photo Frame */}
          <motion.div
            variants={itemVariants}
            className="group relative"
            whileHover={{ scale: 1.02, rotate: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Glow halo */}
            <div className="absolute -inset-4 rounded-2xl bg-accent/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

            {/* Blueprint corners */}
            <div className="absolute -inset-2">
              <div className="absolute top-0 left-0 h-5 w-5 border-t border-l border-accent/40" />
              <div className="absolute top-0 right-0 h-5 w-5 border-t border-r border-accent/40" />
              <div className="absolute bottom-0 left-0 h-5 w-5 border-b border-l border-accent/40" />
              <div className="absolute bottom-0 right-0 h-5 w-5 border-b border-r border-accent/40" />

              {/* Side markers */}
              <div className="absolute -left-1 top-1/2 hidden h-4 w-px -translate-y-1/2 bg-accent/30 md:block" />
              <div className="absolute -left-3 top-1/2 hidden h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-accent/40 md:block" />
              <div className="absolute -right-1 top-1/2 hidden h-4 w-px -translate-y-1/2 bg-accent/30 md:block" />
              <div className="absolute -right-3 top-1/2 hidden h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-accent/40 md:block" />
            </div>

            {/* Photo container */}
            <div className="relative overflow-hidden rounded-xl border border-border shadow-[0_0_30px_rgba(79,195,217,0.06)] transition-shadow duration-500 group-hover:shadow-[0_0_50px_rgba(79,195,217,0.14)]">
              <img
                src="/images/profile.jpg"
                alt="Fabrice Andrianirina"
                className="h-auto w-full max-w-xs object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-5 md:justify-start"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={social.name}
                  className="group flex flex-col items-center gap-1.5 text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:text-text"
                >
                  <Icon className="h-5 w-5 transition-all duration-300 group-hover:text-accent group-hover:drop-shadow-[0_0_6px_rgba(79,195,217,0.4)]" />
                  <span className="text-[10px] font-mono uppercase tracking-wider opacity-60 group-hover:opacity-100">
                    {social.name}
                  </span>
                </a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Right: Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-6"
        >
          <motion.p
            variants={itemVariants}
            className="font-mono text-xs uppercase tracking-[0.15em] text-secondary"
          >
            À propos de moi
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="text-3xl font-semibold tracking-tight text-text md:text-4xl"
          >
            Passionné par le code et l&apos;architecture
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-4 text-base leading-relaxed text-secondary"
          >
            <p>
              Étudiant en deuxième année de licence informatique à l&apos;ENI
              Fianarantsoa, je me spécialise dans le développement Full-Stack.
              Mon parcours m&apos;a permis de maîtriser l&apos;écosystème
              JavaScript moderne, de la conception d&apos;interfaces réactives
              à la modélisation de bases de données robustes.
            </p>
            <p>
              Je privilégie une approche méthodique : analyser avant de coder,
              structurer avant de scaler. Chaque projet est pour moi
              l&apos;occasion d&apos;allier rigueur technique et créativité
              pour livrer des solutions durables.
            </p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="font-mono text-sm italic text-accent"
          >
            &ldquo;Driven by curiosity. Built with precision.&rdquo;
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}