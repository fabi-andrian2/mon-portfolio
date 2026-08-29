"use client";

import { motion } from "framer-motion";

const particles = [
  { size: 140, x: "5%", y: "15%", duration: 20, delay: 0 },
  { size: 100, x: "75%", y: "8%", duration: 25, delay: 3 },
  { size: 80, x: "85%", y: "60%", duration: 18, delay: 1 },
  { size: 120, x: "15%", y: "75%", duration: 22, delay: 5 },
  { size: 60, x: "50%", y: "40%", duration: 15, delay: 2 },
  { size: 90, x: "60%", y: "85%", duration: 19, delay: 4 },
  { size: 70, x: "30%", y: "50%", duration: 21, delay: 6 },
  { size: 110, x: "90%", y: "30%", duration: 24, delay: 1.5 },
];

export function AmbientParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: p.x,
            top: p.y,
            background: `radial-gradient(circle, rgba(79, 195, 217, ${0.05 + (i % 4) * 0.015}) 0%, transparent 70%)`,
            filter: "blur(40px)",
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 30, 0],
            scale: [1, 1.15, 0.9, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}