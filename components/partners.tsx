"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useState, useEffect } from "react";

// Placeholder partner logos (replace with actual logos later)
const partners = [
  "ANTHROPIC",
  "OPENAI",
  "GOOGLE",
  "MICROSOFT",
  "META",
  "AMAZON",
  "NVIDIA",
  "APPLE",
  "TESLA",
  "SPACEX",
  "STRIPE",
  "VERCEL",
];

// Duplicate partners for seamless loop
const row1 = [...partners.slice(0, 6), ...partners.slice(0, 6)];
const row2 = [...partners.slice(6, 12), ...partners.slice(6, 12)];
const row3 = [...partners.slice(0, 6), ...partners.slice(0, 6)];

interface MarqueeRowProps {
  items: string[];
  direction: "left" | "right";
  duration?: number;
}

function MarqueeRow({ items, direction, duration = 40 }: MarqueeRowProps) {
  const controls = useAnimationControls();
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      controls.stop();
    } else {
      // Resume from current position
      controls.start({
        x: direction === "left" ? "-50%" : "0%",
        transition: {
          duration,
          ease: "linear",
          repeat: Infinity,
        },
      });
    }
  }, [isPaused, controls, direction, duration]);

  // Start animation on mount
  useEffect(() => {
    controls.start({
      x: direction === "left" ? "-50%" : "0%",
      transition: {
        duration,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls, direction, duration]);

  return (
    <div
      className="relative overflow-hidden py-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        className="flex gap-8"
        initial={{ x: direction === "left" ? "0%" : "-50%" }}
        animate={controls}
      >
        {items.map((partner, index) => (
          <div
            key={index}
            className="flex-shrink-0 border border-white/10 px-12 py-6 hover:border-lime hover:bg-lime/5 transition-all duration-300 group"
          >
            <p className="font-mono text-2xl tracking-wider text-white/30 group-hover:text-lime transition-colors whitespace-nowrap">
              {partner}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Partners() {
  return (
    <section id="partners" className="relative py-32 overflow-hidden">
      <div className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 px-6"
        >
          <h2 className="font-display text-[clamp(3rem,10vw,6rem)] leading-none tracking-tighter mb-6">
            <span className="text-white">OUR</span>{" "}
            <span className="text-lime">PARTNERS</span>
          </h2>
          <p className="font-mono text-sm text-white/50 tracking-widest">
            TRUSTED BY INDUSTRY LEADERS
          </p>
        </motion.div>

        {/* Marquee Rows */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          {/* Row 1 - Left */}
          <MarqueeRow items={row1} direction="left" duration={35} />

          {/* Row 2 - Right */}
          <MarqueeRow items={row2} direction="right" duration={40} />

          {/* Row 3 - Left */}
          <MarqueeRow items={row3} direction="left" duration={38} />
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16 px-6"
        >
          <p className="font-body text-sm text-white/40">
            * 파트너 로고는 예시입니다. 실제 로고로 교체해주세요.
          </p>
        </motion.div>
      </div>

      {/* Gradient fade edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-nero to-transparent pointer-events-none z-20" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-nero to-transparent pointer-events-none z-20" />
    </section>
  );
}
