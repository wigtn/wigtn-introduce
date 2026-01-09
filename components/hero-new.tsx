"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const scrollToNext = () => {
    const element = document.getElementById("how-it-works");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      // bg-transparent: page.tsx의 AnimatedBackground가 보이도록 배경 제거
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-transparent"
    >
      {/* 텍스트 가독성을 위한 아주 옅은 그림자 (선택사항) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 pointer-events-none" />

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-8"
        >
          <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-mono tracking-widest text-gray-300 backdrop-blur-sm">
            AI AGENT DEVELOPMENT
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8 text-white"
        >
          한 문장이면<br />
          <span className="text-white/50">충분합니다.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-lg md:text-xl text-white/60 max-w-xl mx-auto leading-relaxed mb-12"
        >
          복잡한 기획서는 필요 없습니다.<br className="md:hidden" />
          AI Agent 팀이 여러분의 아이디어를 분석하고,<br />
          설계부터 구현, 검증까지 완벽하게 수행합니다.
        </motion.p>

        {/* CTA Button */}
        {/* <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          onClick={scrollToNext}
          className="group relative px-8 py-4 bg-white text-black rounded-full font-medium overflow-hidden transition-transform hover:scale-105"
        >
            <span className="relative z-10 flex items-center gap-2">
              Start Project <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform"/>
            </span>
        </motion.button> */}
      </motion.div>
    </section>
  );
}