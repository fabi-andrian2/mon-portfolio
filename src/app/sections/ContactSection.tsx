"use client";

import { useState, useRef } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Loader2,
  ExternalLink,
} from "lucide-react";

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

const formVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const feedbackVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -4,
    transition: { duration: 0.2 },
  },
};

/* ═══════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════ */

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSuccess(false);
    setIsError(false);
    setIsSubmitting(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setIsSuccess(true);
      formRef.current?.reset();
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative px-6 py-24 md:py-32">
      <div className="relative mx-auto max-w-6xl">
        {/* ═══ HEADER ═══ */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16 md:mb-20"
        >
          <motion.p
            variants={fadeUpVariants}
            className="font-mono text-xs uppercase tracking-[0.15em] text-secondary"
          >
            CONTACT
          </motion.p>

          <motion.h2
            variants={fadeUpVariants}
            className="mt-5 text-4xl font-semibold tracking-tight text-text sm:text-5xl lg:text-6xl"
          >
            <span className="bg-gradient-to-br from-text via-text to-accent/40 bg-clip-text text-transparent">
              Travaillons ensemble
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUpVariants}
            className="mt-5 max-w-xl text-base leading-relaxed text-secondary"
          >
            Ouvert aux opportunités professionnelles, stages, projets en
            freelance et collaborations. N&apos;hésitez pas à me laisser un
            message !
          </motion.p>
        </motion.div>

        {/* ═══ CONTENT ═══ */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16"
        >
          {/* ─── Left: Informations ─── */}
          <motion.div
            variants={fadeUpVariants}
            className="flex flex-col gap-6"
          >
            {/* Email */}
            <a
              href="mailto:andrianirinafabrice2024@gmail.com"
              className="group flex items-start gap-4 transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-card text-secondary transition-all duration-300 group-hover:border-accent/40 group-hover:bg-accent/5 group-hover:text-accent group-hover:shadow-[0_0_12px_rgba(79,195,217,0.15)]">
                <Mail size={18} />
              </span>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-secondary">
                  Email
                </span>
                <p className="mt-0.5 text-sm text-text transition-colors duration-200 group-hover:text-accent">
                  andrianirinafabrice2024@gmail.com
                </p>
              </div>
            </a>

            {/* Téléphone */}
            <a
              href="tel:+261349165931"
              className="group flex items-start gap-4 transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-card text-secondary transition-all duration-300 group-hover:border-accent/40 group-hover:bg-accent/5 group-hover:text-accent group-hover:shadow-[0_0_12px_rgba(79,195,217,0.15)]">
                <Phone size={18} />
              </span>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-secondary">
                  Téléphone
                </span>
                <p className="mt-0.5 text-sm text-text transition-colors duration-200 group-hover:text-accent">
                  +261 34 91 659 31
                </p>
              </div>
            </a>

            {/* Localisation */}
            <a
              href="https://maps.app.goo.gl/UdeN6aAYPzUUMUng6"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-card text-secondary transition-all duration-300 group-hover:border-accent/40 group-hover:bg-accent/5 group-hover:text-accent group-hover:shadow-[0_0_12px_rgba(79,195,217,0.15)]">
                <MapPin size={18} />
              </span>
              <div>
                <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-secondary">
                  Localisation
                  <ExternalLink size={10} className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </span>
                <p className="mt-0.5 text-sm text-text transition-colors duration-200 group-hover:text-accent">
                  Fianarantsoa, Madagascar
                </p>
              </div>
            </a>
          </motion.div>

          {/* ─── Right: Form ─── */}
          <motion.div variants={formVariants}>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="relative overflow-hidden rounded-xl border border-border bg-surface p-6 md:p-8"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-50" />

              <div className="flex flex-col gap-5">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="name"
                    className="font-mono text-[10px] uppercase tracking-wider text-secondary"
                  >
                    Nom complet
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleChange}
                    className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-text placeholder:text-secondary/30 transition-all duration-200 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/20"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="font-mono text-[10px] uppercase tracking-wider text-secondary"
                  >
                    Adresse email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-text placeholder:text-secondary/30 transition-all duration-200 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/20"
                  />
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="subject"
                    className="font-mono text-[10px] uppercase tracking-wider text-secondary"
                  >
                    Sujet
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="Objet de votre message"
                    value={formData.subject}
                    onChange={handleChange}
                    className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-text placeholder:text-secondary/30 transition-all duration-200 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/20"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="font-mono text-[10px] uppercase tracking-wider text-secondary"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Décrivez votre projet ou votre demande..."
                    value={formData.message}
                    onChange={handleChange}
                    className="resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-text placeholder:text-secondary/30 transition-all duration-200 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/20"
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={isSubmitting ? undefined : { scale: 1.02 }}
                  whileTap={isSubmitting ? undefined : { scale: 0.98 }}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-background transition-colors duration-200 hover:bg-accent-light disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Envoyer le message
                      <Send size={14} />
                    </>
                  )}
                </motion.button>

                {/* Feedback */}
                <AnimatePresence mode="wait">
                  {isSuccess && (
                    <motion.div
                      key="success"
                      variants={feedbackVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="rounded-lg border border-success/20 bg-success/5 px-4 py-3"
                    >
                      <p className="text-sm font-medium text-success">
                        Message envoyé avec succès.
                      </p>
                      <p className="mt-0.5 text-xs text-success/70">
                        Merci pour votre message, je vous répondrai dès que
                        possible.
                      </p>
                    </motion.div>
                  )}

                  {isError && (
                    <motion.div
                      key="error"
                      variants={feedbackVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="rounded-lg border border-error/20 bg-error/5 px-4 py-3"
                    >
                      <p className="text-sm font-medium text-error">
                        Une erreur est survenue lors de l&apos;envoi.
                      </p>
                      <p className="mt-0.5 text-xs text-error/70">
                        Veuillez réessayer.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}