"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  MessageSquare,
  FileText,
  Users,
  Code,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "고객 요청",
    description: "단 1문장으로 시작하세요",
    detail: "복잡한 설명 없이, 원하는 것을 간단히 말씀해주세요.",
    color: "electric-cyan",
    delay: 0.1,
  },
  {
    icon: FileText,
    title: "PRD 변환",
    description: "명확한 요구사항으로",
    detail: "AI Agent가 여러분의 요청을 상세한 PRD로 구체화합니다.",
    color: "electric-blue",
    delay: 0.2,
  },
  {
    icon: Users,
    title: "팀 배정",
    description: "최적의 전문가 매칭",
    detail: "Frontend, Backend, Database 등 적합한 팀에 자동 배정됩니다.",
    color: "electric-purple",
    delay: 0.3,
  },
  {
    icon: Code,
    title: "실제 구현",
    description: "코드로 만들어집니다",
    detail: "전문 Agent 팀이 실제 동작하는 프로그램을 개발합니다.",
    color: "electric-amber",
    delay: 0.4,
  },
  {
    icon: ShieldCheck,
    title: "다층 검증",
    description: "품질 보증 완료",
    detail: "리뷰 → 테스트 → 보안 → 성능 순으로 철저히 검증합니다.",
    color: "electric-cyan",
    delay: 0.5,
  },
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section
      id="how-it-works"
      ref={containerRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-cyan/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient-cyan">How It Works</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            5단계 자동화 프로세스로 여러분의 아이디어를 완성된 프로그램으로 전환합니다
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-5 lg:gap-6 relative">
          {/* Connection Lines - Desktop Only */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-electric-cyan via-electric-amber to-electric-cyan opacity-20" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: step.delay }}
                className="relative"
              >
                <div className="glass rounded-2xl p-6 lg:p-8 h-full hover:border-electric-cyan/50 transition-all hover:glow-cyan group">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-electric-cyan rounded-full flex items-center justify-center font-display font-bold text-dark-900">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="mb-6 relative">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform ${
                      step.color === 'electric-cyan' ? 'bg-electric-cyan/10' :
                      step.color === 'electric-blue' ? 'bg-electric-blue/10' :
                      step.color === 'electric-purple' ? 'bg-electric-purple/10' :
                      'bg-electric-amber/10'
                    }`}>
                      <Icon className={`w-8 h-8 ${
                        step.color === 'electric-cyan' ? 'text-electric-cyan' :
                        step.color === 'electric-blue' ? 'text-electric-blue' :
                        step.color === 'electric-purple' ? 'text-electric-purple' :
                        'text-electric-amber'
                      }`} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl lg:text-2xl font-bold mb-2 text-gradient-cyan">
                    {step.title}
                  </h3>
                  <p className="text-foreground/90 font-medium mb-3">
                    {step.description}
                  </p>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {step.detail}
                  </p>
                </div>

                {/* Arrow - Mobile Only */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <ArrowRight className="text-electric-cyan/50 rotate-90" size={24} />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-2xl md:text-3xl font-display font-semibold mb-6">
            빠른 속도 <span className="text-electric-cyan">+</span> 높은 품질
          </p>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            모든 프로세스가 자동화되어 있어 빠르게 진행되며,
            다층 검증 시스템으로 높은 품질을 보장합니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
