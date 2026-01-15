"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui";
import { PARTNERS, PARTNER_SECTION } from "@/constants";
import { staggerContainer, staggerItem, TRANSITION } from "@/lib/animations";

export function Partners() {
  return (
    <section id="partners" className="py-24 md:py-32 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label={PARTNER_SECTION.label}
          title={PARTNER_SECTION.title}
          subtitle={PARTNER_SECTION.subtitle}
        />

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8"
        >
          {PARTNERS.map((partner, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              transition={TRANSITION.smooth}
              className="group flex items-center justify-center p-6 border border-white/10 rounded-lg hover:border-lime/30 transition-colors"
            >
              <span className="font-mono text-sm text-white/40 group-hover:text-lime transition-colors tracking-wider">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
