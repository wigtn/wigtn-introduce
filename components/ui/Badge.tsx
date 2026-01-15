"use client";

import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "lime";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-label rounded-full",
        variant === "default" && "bg-white/10 text-white/70",
        variant === "outline" && "border border-white/20 text-white/70",
        variant === "lime" && "bg-lime/10 text-lime border border-lime/30",
        className
      )}
    >
      {children}
    </span>
  );
}
