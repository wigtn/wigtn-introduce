import type { NavItem } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "ABOUT", id: "what-we-do" },
  { label: "SERVICES", id: "products" },
  { label: "TEAM", id: "team" },
  { label: "PARTNERS", id: "partners" },
  { label: "CONTACT", id: "contact" },
];

export const SOCIAL_LINKS = {
  github: "https://github.com/wigtn",
  linkedin: "#",
  twitter: "#",
} as const;
