"use client";

import { motion, Variants } from "framer-motion";

/* ═══════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════ */

const education = [
  {
    title: "Licence en Informatique",
    org: "École Nationale d'Informatique (ENI)",
    location: "Fianarantsoa, Madagascar",
    date: "2024 — Présent",
    desc: "Formation en développement logiciel, conception d'applications, bases de données et architecture informatique.",
    active: true,
  },
  {
    title: "Baccalauréat Scientifique",
    org: "Collège Saint François Xavier (CSFX)",
    location: "Fianarantsoa, Madagascar",
    date: "2024",
    desc: "Baccalauréat scientifique ayant marqué le début de mon parcours vers les études en informatique.",
    active: false,
  },
];

const experience = {
  title: "Certificat de participation — Dev Kilonga",
  org: "CoderDojo Fianarantsoa",
  date: "Juin 2019",
  desc: "Participation au concours Dev Kilonga, une compétition de développement informatique destinée aux jeunes. Cette expérience représente mon premier contact concret avec la programmation.",
};

const skillCategories = [
  {
    name: "Front-end",
    skills: [
      { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Vue.js", icon: "https://cdn.simpleicons.org/vuedotjs/4FC08D" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      { name: "Bootstrap", icon: "https://cdn.simpleicons.org/bootstrap/7952B3" },
      { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
    ],
  },
  {
    name: "Back-end",
    skills: [
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
      { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4" },
      { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
      {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
      }
    ],
  },
{
    name: "Bases de données",
    skills: [
      { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
      { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
      { name: "SQLite", icon: "https://cdn.simpleicons.org/sqlite/003B57" },
      { 
        name: "Access", 
        icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'><path fill='%23A4373A' d='M26 6H10a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h16V6z'/><path fill='%23BA3D42' d='M40 8H26v32h14a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2z'/><path fill='%23E84A50' d='M26 12h12v24H26z' opacity='.3'/><path fill='%23fff' d='M20.5 29h-3.2l-.7 2.3h-2.5l3.6-10.6h2.8l3.6 10.6h-2.6l-.7-2.3zm-.6-2.1l-1-3.3-1 3.3h2z'/></svg>" 
      },
    ],
  },
  {
    name: "Outils & Écosystème",
    skills: [
      { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
      { name: "GitHub", icon: "https://cdn.simpleicons.org/github/ffffff" },
      { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
      { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
      { name: "Vite", icon: "https://cdn.simpleicons.org/vite/646CFF" },
      { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/ffffff" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    ],
  },
];

/* ═══════════════════════════════════════════
   VARIANTS
   ═══════════════════════════════════════════ */

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const skillContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const skillCardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

/* ═══════════════════════════════════════════
   SUB-COMPONENTS
   ═══════════════════════════════════════════ */

function TimelineNode({ active }: { active?: boolean }) {
  return (
    <div className="relative flex items-center justify-center">
      <div
        className={`h-3 w-3 rounded-full border-2 ${
          active
            ? "border-accent bg-accent shadow-[0_0_12px_rgba(79,195,217,0.45)]"
            : "border-secondary/60 bg-background"
        }`}
      />
      {active && (
        <motion.div
          className="absolute h-3 w-3 rounded-full bg-accent"
          animate={{ scale: [1, 1.7, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
    </div>
  );
}

function TimelineCard({
  title,
  org,
  location,
  date,
  desc,
  align = "left",
}: {
  title: string;
  org: string;
  location: string;
  date: string;
  desc: string;
  align?: "left" | "right";
}) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25 }}
      className={`group relative rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:border-accent/25 hover:shadow-[0_0_30px_rgba(79,195,217,0.06)] ${
        align === "right" ? "md:text-right" : ""
      }`}
    >
      <div className="absolute top-0 left-0 h-3 w-3 border-t border-l border-accent/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute top-0 right-0 h-3 w-3 border-t border-r border-accent/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-accent/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-accent/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <span className="font-mono text-[11px] uppercase tracking-wider text-accent">
        {date}
      </span>
      <h3 className="mt-2 text-lg font-semibold text-text">{title}</h3>
      <p className="mt-1 text-sm text-secondary">
        {org} — {location}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-secondary/80">{desc}</p>
    </motion.div>
  );
}

function ExperienceCard() {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25 }}
      className="group relative overflow-hidden rounded-xl border border-border bg-surface p-8 transition-all duration-300 hover:border-accent/25 hover:shadow-[0_0_30px_rgba(79,195,217,0.06)]"
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-60" />

      <div className="absolute top-0 left-0 h-3 w-3 border-t border-l border-accent/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute top-0 right-0 h-3 w-3 border-t border-r border-accent/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-accent/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-accent/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-wider text-accent">
            {experience.date}
          </span>
          <h3 className="mt-2 text-xl font-semibold text-text">{experience.title}</h3>
          <p className="mt-1 text-sm text-secondary">{experience.org}</p>
        </div>
        <div className="mt-3 md:mt-0">
          <span className="inline-flex items-center rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-mono text-accent">
            Premier pas
          </span>
        </div>
      </div>
      <p className="mt-5 max-w-2xl text-sm leading-relaxed text-secondary/80">
        {experience.desc}
      </p>
    </motion.div>
  );
}

function SkillCard({
  category,
  skills,
}: {
  category: string;
  skills: { name: string; icon: string }[];
}) {
  return (
    <motion.div
      variants={skillCardVariants}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className="group relative overflow-hidden rounded-xl border border-border bg-surface transition-all duration-300 hover:border-accent/20 hover:shadow-[0_0_28px_rgba(79,195,217,0.05)]"
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-50" />

      <div className="p-5 md:p-6">
        <h4 className="mb-5 font-mono text-xs uppercase tracking-[0.12em] text-accent">
          {category}
        </h4>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group/skill flex flex-col items-center gap-2 rounded-lg border border-border bg-card p-3 transition-all duration-200 hover:border-accent/20 hover:shadow-[0_0_12px_rgba(79,195,217,0.08)]"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="h-6 w-6 object-contain transition-transform duration-200 group-hover/skill:scale-110"
                loading="lazy"
              />
              <span className="text-center text-[11px] font-medium text-secondary transition-colors duration-200 group-hover/skill:text-text">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.div>
  );
}

/* ═══════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════ */

export function ParcoursSection() {
  return (
    <section id="stack" className="relative px-6 py-24 md:py-32">
      <div className="relative mx-auto max-w-6xl">
        {/* ─── HEADER ─── */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-20"
        >
          <motion.p
            variants={fadeUpVariants}
            className="font-mono text-xs uppercase tracking-[0.15em] text-secondary"
          >
            Mon parcours
          </motion.p>
          <motion.h2
            variants={fadeUpVariants}
            className="mt-4 text-3xl font-semibold tracking-tight text-text md:text-4xl"
          >
            Formation, expériences et technologies
          </motion.h2>
        </motion.div>

        {/* ─── ① ÉDUCATION ─── */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-24"
        >
          <motion.h3
            variants={fadeUpVariants}
            className="mb-10 font-mono text-sm uppercase tracking-[0.12em] text-secondary"
          >
            Parcours académique
          </motion.h3>

          <div className="relative">
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-border to-transparent md:left-1/2 md:-translate-x-px" />

            <div className="flex flex-col gap-10 md:gap-0">
              {education.map((edu, i) => (
                <div
                  key={edu.title}
                  className={`relative grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-0 ${
                    i !== education.length - 1 ? "md:mb-14" : ""
                  }`}
                >
                  <div className="absolute left-[15px] top-6 z-10 md:left-1/2 md:-translate-x-1/2">
                    <TimelineNode active={edu.active} />
                  </div>

                  <div
                    className={`pl-12 md:pl-0 ${
                      i % 2 === 0
                        ? "md:pr-16 md:text-right"
                        : "md:col-start-2 md:pl-16"
                    }`}
                  >
                    <TimelineCard
                      title={edu.title}
                      org={edu.org}
                      location={edu.location}
                      date={edu.date}
                      desc={edu.desc}
                      align={i % 2 === 0 ? "right" : "left"}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ─── ② EXPÉRIENCE ─── */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-24"
        >
          <motion.h3
            variants={fadeUpVariants}
            className="mb-10 font-mono text-sm uppercase tracking-[0.12em] text-secondary"
          >
            Expérience & Certifications
          </motion.h3>

          <ExperienceCard />
        </motion.div>

        {/* ─── ③ COMPÉTENCES ─── */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.h3
            variants={fadeUpVariants}
            className="mb-10 font-mono text-sm uppercase tracking-[0.12em] text-secondary"
          >
            Compétences techniques
          </motion.h3>

          <motion.div
            variants={skillContainerVariants}
            className="grid grid-cols-1 gap-4 md:grid-cols-2"
          >
            {skillCategories.map((cat) => (
              <SkillCard
                key={cat.name}
                category={cat.name}
                skills={cat.skills}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}