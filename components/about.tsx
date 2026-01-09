"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// 개별 텍스트 블록 컴포넌트 (스크롤 위치에 따라 활성화)
function TextSection({ title, children }: { title: string; children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" }); // 화면 정중앙에 왔을 때만 true

  return (
    <div ref={ref} className="min-h-[60vh] flex flex-col justify-center py-20">
      <motion.div
        initial={{ opacity: 0.1 }}
        animate={{ opacity: isInView ? 1 : 0.1 }} // 활성화되면 밝게, 아니면 흐리게
        transition={{ duration: 0.8 }}
      >
        <h3 className="font-display text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
          {title}
        </h3>
        <p className="font-body text-xl md:text-2xl text-gray-400 leading-relaxed max-w-lg">
          {children}
        </p>
      </motion.div>
    </div>
  );
}

export default function About() {
  return (
    <section className="relative bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row">
          
          {/* [LEFT] Sticky Title Area - 고정된 브랜드 아이덴티티 */}
          <div className="lg:w-1/2 lg:h-screen lg:sticky lg:top-0 flex flex-col justify-center z-10 mb-20 lg:mb-0 pt-20 lg:pt-0">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-baseline gap-4 mb-2">
                  <h2 className="font-display text-6xl md:text-8xl font-bold tracking-tighter text-white">
                    WIGTN
                  </h2>
                  <div className="h-2 w-2 rounded-full bg-white animate-pulse" />
                </div>
                
                <div className="overflow-hidden">
                  <motion.div
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col gap-1"
                  >
                     {/* 한글 뜻 */}
                    <span className="font-display text-2xl md:text-3xl font-bold text-gray-500">
                      와, 이게 되네?
                    </span>
                    {/* 영문 뜻 */}
                    <span className="font-mono text-sm text-gray-600 tracking-wider">
                      (Wow, this actually works?)
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* [RIGHT] Scrolling Text Area - 스크롤에 따라 하나씩 밝혀짐 */}
          <div className="lg:w-1/2 pb-32">
            
            <TextSection title="For Everyone.">
              개발 지식이 없는 비전공자도 괜찮습니다.<br />
              복잡한 기획서 대신, 여러분만의<br />
              <span className="text-white font-semibold">상상력</span>만 가져오세요.
            </TextSection>

            <TextSection title="Just One Sentence.">
              우리는 복잡함을 혐오합니다.<br />
              단 <span className="text-white font-semibold">한 문장의 요구사항</span>으로 시작하세요.<br />
              나머지는 AI Agent 팀이 해결합니다.
            </TextSection>

            <TextSection title="Speed & Quality.">
              사람보다 빠르고, 기계보다 정교하게.<br />
              압도적인 개발 속도와<br />
              수준높은 설계와 <span className="text-white font-semibold">품질</span>을 약속합니다.
            </TextSection>

          </div>
        </div>
      </div>
    </section>
  );
}