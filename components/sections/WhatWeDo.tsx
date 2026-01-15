"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui";
import { Card } from "@/components/ui";
import { CONTENT } from "@/constants";
import { staggerContainer } from "@/lib/animations";

export function WhatWeDo() {
  const { label, title, items } = CONTENT.whatWeDo;

  return (
    <section id="what-we-do" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader label={label} title={title} />

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-6 md:gap-8"
        >
          {items.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              variant="bordered"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
