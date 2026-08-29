"use client";

import { motion, Variants } from "framer-motion";
import { CodeWindow } from "@/components/ui/CodeWindow";
import { ArrowRight } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center px-6 pt-16">
      {/* Blueprint Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #232B38 1px, transparent 1px),
            linear-gradient(to bottom, #232B38 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-[55%_45%]">
        {/* Left: Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          {/* Label */}
          <motion.p
            variants={itemVariants}
            className="font-mono text-xs uppercase tracking-[0.15em] text-secondary"
          >
            Développeur Full-Stack
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-semibold tracking-tight text-text sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Fabrice Andrianirina
          </motion.h1>

          {/* Bio */}
          <motion.p
            variants={itemVariants}
            className="max-w-lg text-base leading-relaxed text-secondary"
          >
            Développeur Full-Stack passionné par l&apos;architecture logicielle
            et les interfaces web modernes. Je transforme des idées complexes en
            applications fluides, performantes et évolutives.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md border border-accent bg-transparent px-5 py-2.5 text-sm font-medium text-accent transition-all hover:bg-accent hover:text-background"
            >
              Explorer mes projets
              <ArrowRight size={16} />
            </a>
            <a
              href="/cv.pdf"
              download
              className="group relative text-sm text-secondary transition-colors hover:text-text"
            >
              Télécharger mon CV
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Code Window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="flex justify-center md:justify-end"
        >
          <CodeWindow filename="developer.ts">
            <div className="whitespace-pre-wrap text-text">
              <span className="text-accent">const</span>{" "}
              <span className="text-text">profile</span>{" "}
              <span className="text-secondary">=</span>{" "}
              <span className="text-secondary">{"{"}</span>
              {"\n"}  <span className="text-accent-light">name</span>
              <span className="text-secondary">:</span>{" "}
              <span className="text-success">&apos;Fabrice Andrianirina&apos;</span>
              <span className="text-secondary">,</span>
              {"\n"}  <span className="text-accent-light">role</span>
              <span className="text-secondary">:</span>{" "}
              <span className="text-success">&apos;Full-Stack Software Developer&apos;</span>
              <span className="text-secondary">,</span>
              {"\n"}  <span className="text-accent-light">motto</span>
              <span className="text-secondary">:</span>{" "}
              <span className="text-success">&apos;Driven by curiosity. Built with precision.&apos;</span>
              <span className="text-secondary">,</span>
              {"\n"}  <span className="text-accent-light">hardWorker</span>
              <span className="text-secondary">:</span>{" "}
              <span className="text-accent">true</span>
              <span className="text-secondary">,</span>
              {"\n"}  <span className="text-accent-light">quickLearner</span>
              <span className="text-secondary">:</span>{" "}
              <span className="text-accent">true</span>
              <span className="text-secondary">,</span>
              {"\n"}  <span className="text-accent-light">problemSolver</span>
              <span className="text-secondary">:</span>{" "}
              <span className="text-accent">true</span>
              <span className="text-secondary">,</span>
              {"\n"}  <span className="text-accent-light">hireable</span>
              <span className="text-secondary">:</span>{" "}
              <span className="text-accent">function</span>{" "}
              <span className="text-secondary">()</span>{" "}
              <span className="text-secondary">{"{"}</span>
              {"\n"}    <span className="text-accent">return</span>{" "}
              <span className="text-accent">this</span>
              <span className="text-secondary">.</span>
              <span className="text-accent-light">hardWorker</span>{" "}
              <span className="text-accent">&&</span>{" "}
              <span className="text-accent">this</span>
              <span className="text-secondary">.</span>
              <span className="text-accent-light">problemSolver</span>
              <span className="text-secondary">;</span>
              {"\n"}  <span className="text-secondary">{"}"}</span>
              {"\n"}
              <span className="text-secondary">{"}"};</span>
            </div>
          </CodeWindow>
        </motion.div>
      </div>
    </section>
  );
}