"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, FileText, Users, Code, ShieldCheck } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Request",
    desc: "복잡한 설명 없이, 원하는 것을 간단히 한 문장으로 말씀해주세요.",
    icon: MessageSquare,
  },
  {
    id: "02",
    title: "Transform",
    desc: "AI Agent가 모호한 요청을 구체적인 기술 명세서(PRD)로 변환합니다.",
    icon: FileText,
  },
  {
    id: "03",
    title: "Assign",
    desc: "Frontend, Backend 등 프로젝트 성격에 맞는 전문가 AI 팀이 배정됩니다.",
    icon: Users,
  },
  {
    id: "04",
    title: "Build",
    desc: "실제 동작하는 코드를 생성하고, 시스템을 구축합니다.",
    icon: Code,
  },
  {
    id: "05",
    title: "Verify",
    desc: "보안, 성능, 에러 검증까지 다층적 테스트를 수행하여 품질을 보증합니다.",
    icon: ShieldCheck,
  },
];

export default function HowItWorks() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // 중요: 카드가 왼쪽 끝까지 가지 않고, 적당히 중앙쯤에서 멈추도록 비율 조정
  // -60% 정도로 설정하면 마지막 카드가 화면 중앙~우측 쯤에서 멈춥니다.
  // (화면 너비에 따라 조금씩 다르므로 필요시 수치를 -55% ~ -70% 사이로 미세 조정하세요)
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-60%"]);

  return (
    <section ref={targetRef} id="how-it-works" className="relative h-[400vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Title (Background) */}
        <div className="absolute top-10 left-10 md:top-20 md:left-20 z-0 pointer-events-none">
          <h2 className="text-white/5 font-display text-6xl md:text-9xl font-bold tracking-tighter">
            PROCESS
          </h2>
        </div>

        <motion.div style={{ x }} className="flex gap-8 md:gap-16 px-10 md:px-20 z-10 items-center">
          
          {/* Intro Card */}
          <div className="flex-shrink-0 w-[80vw] md:w-[600px] flex flex-col justify-center">
            <h3 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              How We<br />Make It Real.
            </h3>
            <p className="text-gray-400 text-lg md:text-xl max-w-md">
              스크롤하여 5단계 자동화 프로세스를 확인하세요.
              여러분의 아이디어는 단 5단계를 거쳐 현실이 됩니다.
            </p>
          </div>

          {/* Step Cards */}
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="group relative flex-shrink-0 w-[85vw] md:w-[500px] h-[50vh] md:h-[60vh] bg-[#0a0a0a] border border-white/10 p-8 md:p-12 flex flex-col justify-between hover:border-white/30 transition-colors duration-500"
              >
                <div className="flex justify-between items-start">
                  <span className="font-mono text-sm md:text-base text-gray-500 tracking-widest border border-white/10 px-3 py-1 rounded-full">
                    STEP {step.id}
                  </span>
                  <Icon className="text-white w-8 h-8 md:w-10 md:h-10 opacity-50 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
                </div>

                <div>
                  <h4 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
                    {step.title}
                  </h4>
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="w-full h-[1px] bg-white/10 mt-8 relative overflow-hidden">
                  <motion.div 
                    className="absolute top-0 left-0 h-full w-full bg-white origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  />
                </div>
              </div>
            );
          })}
          
          {/* Spacer를 조금만 두어 스크롤이 자연스럽게 끝나도록 함 */}
          <div className="w-[10vw]"></div>
        </motion.div>
      </div>
    </section>
  );
}