export const CONTENT = {
  meta: {
    title: "WIGTN - One Sentence. Complete Program.",
    description: "AI Agent 개발 회사. 고객의 1문장 요구를 완성된 프로그램으로 만듭니다.",
  },

  intro: {
    title: "WIGTN",
    subtitle: "One Sentence. Complete Program.",
  },

  hero: {
    badge: "AI AGENT DEVELOPMENT",
    title: "한 문장이면 충분합니다",
    description:
      "복잡한 기획서는 필요 없습니다. 여러분의 아이디어를 한 문장으로 말씀해 주세요. WIGTN의 AI Agent가 완성된 프로그램으로 만들어 드립니다.",
  },

  whatWeDo: {
    label: "WHAT WE DO",
    title: "우리가 하는 일",
    items: [
      {
        title: "For Everyone",
        subtitle: "진입장벽 없는 개발",
        description:
          "복잡한 기획서 대신, 여러분만의 언어로 원하는 것을 말씀해 주세요. 기술적 배경 없이도 프로그램을 만들 수 있습니다.",
      },
      {
        title: "Just One Sentence",
        subtitle: "단순함의 힘",
        description:
          "우리는 복잡함을 혐오합니다. 한 문장이면 충분합니다. AI가 여러분의 의도를 파악하고 완벽한 설계로 변환합니다.",
      },
      {
        title: "Speed & Quality",
        subtitle: "빠르고 정확하게",
        description:
          "AI Agent가 PRD를 작성하고, 전문 개발팀이 품질을 보장합니다. 속도와 품질, 두 마리 토끼를 모두 잡습니다.",
      },
    ],
  },

  products: {
    label: "PRODUCTS",
    title: "서비스",
    items: [
      {
        id: "ai-development",
        title: "AI Agent Development",
        description: "맞춤형 AI Agent를 개발해 드립니다. 비즈니스 자동화부터 고객 서비스까지.",
        features: ["맞춤형 AI 솔루션", "24/7 자동화", "지속적인 학습"],
      },
      {
        id: "rapid-prototyping",
        title: "Rapid Prototyping",
        description: "아이디어를 빠르게 프로토타입으로 만들어 드립니다. MVP 개발에 최적화.",
        features: ["빠른 개발 사이클", "반복적 개선", "시장 검증"],
      },
      {
        id: "consulting",
        title: "AI Consulting",
        description: "AI 도입 전략부터 구현까지 컨설팅해 드립니다.",
        features: ["전략 수립", "기술 로드맵", "팀 교육"],
      },
    ],
  },

  contact: {
    label: "CONTACT",
    title: "연락하기",
    subtitle: "여러분의 아이디어를 한 문장으로 보내주세요",
    email: "contact@wigtn.com",
    responseTime: "24시간 이내",
    form: {
      name: {
        label: "NAME",
        placeholder: "이름을 입력하세요",
      },
      email: {
        label: "EMAIL",
        placeholder: "이메일을 입력하세요",
      },
      message: {
        label: "MESSAGE",
        placeholder: "만들고 싶은 것을 한 문장으로 적어주세요",
      },
      submit: "SEND MESSAGE",
    },
  },

  footer: {
    copyright: "WIGTN. ALL RIGHTS RESERVED.",
    tagline: "와, 이게 되네?",
  },
} as const;
