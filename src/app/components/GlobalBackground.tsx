"use client";

import { motion } from "framer-motion";

const bokehOrbs = [
  { size: 300, x: "-5%", y: "-10%", duration: 22, delay: 0, color: "bg-cyan-500/20" },
  { size: 180, x: "70%", y: "5%", duration: 18, delay: 2, color: "bg-blue-500/20" },
  { size: 240, x: "85%", y: "55%", duration: 25, delay: 1, color: "bg-teal-500/18" },
  { size: 140, x: "10%", y: "65%", duration: 20, delay: 4, color: "bg-cyan-400/22" },
  { size: 200, x: "45%", y: "35%", duration: 16, delay: 3, color: "bg-blue-400/18" },
  { size: 120, x: "60%", y: "80%", duration: 19, delay: 5, color: "bg-teal-400/20" },
  { size: 260, x: "25%", y: "20%", duration: 24, delay: 6, color: "bg-cyan-500/16" },
  { size: 160, x: "90%", y: "30%", duration: 21, delay: 1.5, color: "bg-blue-500/15" },
];

export function GlobalBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Layer 1: Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #232B38 1px, transparent 1px),
            linear-gradient(to bottom, #232B38 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Layer 2: Slow moving grid overlay */}
      <motion.div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #232B38 1px, transparent 1px),
            linear-gradient(to bottom, #232B38 1px, transparent 1px)
          `,
          backgroundSize: "120px 120px",
        }}
        animate={{ x: [0, 60], y: [0, 60] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Layer 3: Diffuse halo */}
      <motion.div
        className="absolute -top-1/2 -right-1/2 h-full w-full rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(79, 195, 217, 0.08) 0%, transparent 60%)",
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Layer 4: Subtle gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(79, 195, 217, 0.03) 0%, transparent 50%, rgba(79, 195, 217, 0.02) 100%)",
        }}
      />

      {/* Layer 5: Fine dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: "radial-gradient(#232B38 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Layer 6: Animated Bokeh Orbs */}
      {bokehOrbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${orb.color}`}
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            filter: "blur(60px)",
          }}
          animate={{
            x: [0, 60, -40, 20, 0],
            y: [0, -50, 40, -20, 0],
            scale: [1, 1.2, 0.9, 1.1, 1],
            opacity: [0.6, 1, 0.7, 0.9, 0.6],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}