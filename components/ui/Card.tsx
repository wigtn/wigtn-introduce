"use client";

import { motion } from "framer-motion";
import { staggerItem, TRANSITION } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface CardProps {
  title: string;
  description: string;
  subtitle?: string;
  icon?: React.ReactNode;
  className?: string;
  variant?: "default" | "bordered" | "filled";
}

export function Card({
  title,
  description,
  subtitle,
  icon,
  className,
  variant = "default",
}: CardProps) {
  return (
    <motion.div
      variants={staggerItem}
      transition={TRANSITION.smooth}
      className={cn(
        "group p-6 md:p-8 rounded-lg transition-colors",
        variant === "default" && "hover:bg-white/5",
        variant === "bordered" && "border border-white/10 hover:border-lime/50",
        variant === "filled" && "bg-white/5 hover:bg-white/10",
        className
      )}
    >
      {icon && (
        <div className="mb-4 text-lime">{icon}</div>
      )}
      {subtitle && (
        <span className="text-label text-white/50 mb-2 block">{subtitle}</span>
      )}
      <h3 className="text-title text-white mb-3 group-hover:text-lime transition-colors">
        {title}
      </h3>
      <p className="text-body">{description}</p>
    </motion.div>
  );
}
