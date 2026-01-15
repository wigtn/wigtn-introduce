import type { TeamMember } from "@/types";

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "대표",
    nameEn: "CEO",
    role: "Founder & CEO",
    description: "AI Agent 개발의 새로운 패러다임을 만듭니다.",
    links: {
      github: "https://github.com/wigtn",
      linkedin: "#",
    },
  },
  {
    name: "개발 리드",
    nameEn: "Tech Lead",
    role: "Technical Lead",
    description: "확장 가능한 AI 시스템 아키텍처를 설계합니다.",
    links: {
      github: "#",
    },
  },
  {
    name: "AI 엔지니어",
    nameEn: "AI Engineer",
    role: "AI Engineer",
    description: "최신 LLM 기술을 실제 서비스에 적용합니다.",
    links: {
      github: "#",
    },
  },
  {
    name: "프로덕트 매니저",
    nameEn: "Product Manager",
    role: "Product Manager",
    description: "고객의 니즈를 제품으로 구현합니다.",
    links: {
      linkedin: "#",
    },
  },
];

export const ADVISORS = [
  {
    name: "자문",
    role: "Advisor",
    description: "전략 자문",
  },
];
