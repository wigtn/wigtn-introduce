"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface IntroProps {
  onComplete: () => void;
}

export default function Intro({ onComplete }: IntroProps) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // 타임라인 조정
    const timers = [
      setTimeout(() => setStep(1), 500),   // 메인 텍스트 등장
      setTimeout(() => setStep(2), 2000),  // 서브 텍스트 등장
      setTimeout(() => setStep(3), 3800),  // 전체 페이드 아웃 시작
      setTimeout(() => onComplete(), 4500), // 종료
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {step < 3 && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
        >
          <div className="relative z-10 text-center px-4">
            {/* 메인 텍스트: WIGTN */}
            <div className="overflow-hidden mb-4">
              <motion.h1
                initial={{ y: 20, filter: "blur(10px)", opacity: 0 }}
                animate={step >= 1 ? { y: 0, filter: "blur(0px)", opacity: 1 } : {}}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} // 아주 부드러운 베지어 곡선
                className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white"
              >
                WIGTN
              </motion.h1>
            </div>

            {/* 구분선: 중앙에서 퍼져나가는 효과 */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={step >= 2 ? { width: "100px", opacity: 0.5 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-[1px] bg-white mx-auto mb-6"
            />

            {/* 서브 텍스트: 마스킹 효과로 아래에서 스르륵 */}
            <div className="overflow-hidden h-12 flex justify-center items-center">
              <motion.p
                initial={{ y: "100%", opacity: 0 }}
                animate={step >= 2 ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="font-mono text-sm md:text-base text-gray-400 tracking-[0.2em] uppercase"
              >
                One Sentence. Complete Program.
              </motion.p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}