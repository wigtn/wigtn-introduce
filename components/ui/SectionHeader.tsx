"use client";

import { motion } from "framer-motion";
import { fadeInUp, TRANSITION } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeInUp}
      transition={TRANSITION.smooth}
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {label && (
        <span className="text-label text-lime mb-4 block">{label}</span>
      )}
      <h2 className="text-section text-white">{title}</h2>
      {subtitle && (
        <p className="text-body mt-4 max-w-2xl">{subtitle}</p>
      )}
    </motion.div>
  );
}
