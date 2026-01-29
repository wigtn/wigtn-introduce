"use client";

import { useLanguage } from "@/lib/i18n";

const ITEMS = [
  { title: "AI-Native Development Tools" },
  { title: "App-Based Services" },
  { title: "Open Source Plugins" },
];

export function WhatWeDo() {
  const { t } = useLanguage();

  return (
    <section id="what-we-do" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6">
        <span className="text-sm font-semibold text-violet dark:text-violet-light mb-6 block tracking-wide">WHAT WE DO</span>
        <h2 className="text-section text-foreground dark:text-white mb-4">Building the Future of Development</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl">{t.whatWeDo.description}</p>

        <div className="space-y-8">
          {ITEMS.map((item, index) => (
            <div
              key={index}
              className="group pb-8 border-b border-slate-200 dark:border-gray-800 last:border-b-0 last:pb-0"
            >
              <h3 className="text-xl font-semibold text-foreground dark:text-white mb-2 group-hover:text-violet dark:group-hover:text-violet-light transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{t.whatWeDo.items[index]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
