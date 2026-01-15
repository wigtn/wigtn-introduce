"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui";
import { CONTENT } from "@/constants";
import { staggerContainer, staggerItem, TRANSITION } from "@/lib/animations";

export function Products() {
  const { label, title, items } = CONTENT.products;

  return (
    <section id="products" className="py-24 md:py-32 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader label={label} title={title} />

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-6 md:gap-8"
        >
          {items.map((item) => (
            <motion.div
              key={item.id}
              variants={staggerItem}
              transition={TRANSITION.smooth}
              className="group p-6 md:p-8 border border-white/10 rounded-lg hover:border-lime/50 transition-colors"
            >
              <h3 className="text-title text-white mb-3 group-hover:text-lime transition-colors">
                {item.title}
              </h3>
              <p className="text-body mb-6">{item.description}</p>

              {item.features && (
                <ul className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-white/50 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-lime rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
