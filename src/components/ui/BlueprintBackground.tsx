"use client";

import { motion } from "framer-motion";

export function BlueprintBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
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
    </div>
  );
}