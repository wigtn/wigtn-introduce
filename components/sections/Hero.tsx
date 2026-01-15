"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui";
import { CONTENT } from "@/constants";
import { fadeInUp, TRANSITION } from "@/lib/animations";

export function Hero() {
  const { badge, title, description } = CONTENT.hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          transition={TRANSITION.smooth}
        >
          <Badge variant="lime" className="mb-8">
            {badge}
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...TRANSITION.smooth, delay: 0.2 }}
          className="text-hero text-white mb-8"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...TRANSITION.smooth, delay: 0.4 }}
          className="text-body max-w-2xl mx-auto"
        >
          {description}
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-lime rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
