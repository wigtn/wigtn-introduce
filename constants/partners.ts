import type { Partner } from "@/types";

export const PARTNERS: Partner[] = [
  { name: "ANTHROPIC" },
  { name: "OPENAI" },
  { name: "GOOGLE" },
  { name: "MICROSOFT" },
  { name: "AWS" },
  { name: "VERCEL" },
];

export const PARTNER_SECTION = {
  label: "PARTNERS",
  title: "파트너",
  subtitle: "신뢰할 수 있는 기술 파트너들과 함께합니다",
} as const;
