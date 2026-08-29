"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";

/* ═══════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════ */

interface Project {
  id: number;
  title: string;
  description: string;
  category: "Solo" | "Collaboratif";
  technologies: string[];
  githubUrl?: string | null;
  demoUrl?: string | null;
  image: string;
}

/* ═══════════════════════════════════════════
   DATA — Exactement 3 projets
   ═══════════════════════════════════════════ */

const projects: Project[] = [
  {
    id: 1,
    title: "Gestion de sessions d'examen CEPE",
    description:
      "Système de gestion des sessions d'examen CEPE développé en Java avec interface Swing et persistance PostgreSQL.",
    category: "Solo",
    technologies: ["Java", "Java Swing", "PostgreSQL"],
    githubUrl: "https://github.com/fabi-andrian2/gestion-session-cepe.git",
    demoUrl: "https://github.com/fabi-andrian2/gestion-session-cepe/releases/tag/v1.0.0",
    image: "/projects/cepe.png",
  },
  {
    id: 2,
    title: "Gestion des Colis",
    description:
      "Application web de gestion logistique de colis développée en PHP avec MySQL et interface responsive Tailwind CSS.",
    category: "Solo",
    technologies: ["PHP", "MySQL", "Tailwind CSS"],
    githubUrl: "https://github.com/fabi-andrian2/projet_colis.git",
    demoUrl: null,
    image: "/projects/colis.png",
  },
  {
    id: 3,
    title: "Système de Gestion de Ventes",
    description:
      "Plateforme collaborative de gestion des ventes construite avec Vue.js, Node.js et Express.",
    category: "Collaboratif",
    technologies: ["Vue.js", "Node.js", "Express", "Tailwind CSS"],
    githubUrl: null,
    demoUrl: null,
    image: "/projects/ventes.png",
  },
];

/* ═══════════════════════════════════════════
   VARIANTS
   ═══════════════════════════════════════════ */

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ═══════════════════════════════════════════
   SUB-COMPONENTS
   ═══════════════════════════════════════════ */

function ProjectImage({
  src,
  alt,
  index,
}: {
  src: string;
  alt: string;
  index: number;
}) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-lg border border-border bg-surface">
        <div className="absolute inset-0 bg-gradient-to-br from-card via-surface to-background" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #232B38 1px, transparent 1px),
              linear-gradient(to bottom, #232B38 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
          }}
        />
        <span className="absolute left-4 top-3 font-mono text-[10px] uppercase tracking-wider text-secondary/30">
          Preview
        </span>
        <span className="absolute right-3 bottom-2 font-mono text-5xl font-bold text-accent/[0.04] md:text-6xl">
          0{index + 1}
        </span>
        <div className="relative z-10 text-center">
          <span className="font-mono text-sm uppercase tracking-wider text-secondary/50">
            {alt}
          </span>
        </div>
        <div className="absolute top-0 left-0 h-5 w-5 border-t border-l border-accent/10" />
        <div className="absolute bottom-0 right-0 h-5 w-5 border-b border-r border-accent/10" />
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-border bg-surface">
      <img
        src={src}
        alt={`Aperçu de ${alt}`}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        onError={() => setError(true)}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-accent/[0.03] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const hasGithub = !!project.githubUrl;
  const hasDemo = !!project.demoUrl;

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all duration-300 hover:border-accent/20 hover:shadow-[0_0_40px_rgba(79,195,217,0.05)]"
    >
      {/* Blueprint corners */}
      <div className="absolute top-0 left-0 z-20 h-3 w-3 border-t border-l border-accent/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute top-0 right-0 z-20 h-3 w-3 border-t border-r border-accent/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute bottom-0 left-0 z-20 h-3 w-3 border-b border-l border-accent/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute bottom-0 right-0 z-20 h-3 w-3 border-b border-r border-accent/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Image */}
      <div className="px-5 pt-5">
        <ProjectImage src={project.image} alt={project.title} index={index} />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 px-5 pt-4 pb-5">
        {/* Meta */}
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-wider text-secondary/50">
            0{index + 1}
          </span>
          <span
            className={`rounded-full border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider ${
              project.category === "Collaboratif"
                ? "border-accent/20 bg-accent/5 text-accent"
                : "border-border bg-card text-secondary"
            }`}
          >
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold tracking-tight text-text transition-colors duration-200 group-hover:text-accent">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-secondary/80">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 pt-1">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border bg-card px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions — style lien technique minimaliste */}
        <div className="mt-auto flex items-center justify-between border-t border-border/60 pt-4">
          {/* Code */}
          {hasGithub ? (
            <a
              href={project.githubUrl!}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link flex items-center gap-1.5 text-xs text-secondary transition-all hover:text-accent"
            >
              <Code2 size={13} className="transition-transform group-hover/link:translate-x-0.5" />
              <span>Code</span>
            </a>
          ) : (
            <span className="flex cursor-default items-center gap-1.5 text-xs text-secondary/30">
              <Code2 size={13} />
              <span>Code local</span>
            </span>
          )}

          {/* Separator */}
          <span className="h-3 w-px bg-border" />

          {/* Live */}
          {hasDemo ? (
            <a
              href={project.demoUrl!}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link flex items-center gap-1.5 text-xs text-secondary transition-all hover:text-accent"
            >
              <span>Live</span>
              <ExternalLink size={13} className="transition-transform group-hover/link:translate-x-0.5" />
            </a>
          ) : (
            <span className="flex cursor-default items-center gap-1.5 text-xs text-secondary/30">
              <span>Bientôt disponible</span>
              <ExternalLink size={13} />
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

/* ═══════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════ */

export function ProjetsSection() {
  return (
    <section id="projects" className="relative px-6 py-24 md:py-32">
      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16"
        >
          <motion.p
            variants={fadeUpVariants}
            className="font-mono text-xs uppercase tracking-[0.15em] text-secondary"
          >
            PROJETS
          </motion.p>
          <motion.h2
            variants={fadeUpVariants}
            className="mt-4 text-3xl font-semibold tracking-tight text-text md:text-4xl"
          >
            Projets récents
          </motion.h2>
          <motion.p
            variants={fadeUpVariants}
            className="mt-4 max-w-2xl text-base leading-relaxed text-secondary"
          >
            Un aperçu de mes derniers projets d&apos;application, développés en
            solo ou en équipe.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}