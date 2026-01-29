"use client";

import { useLanguage } from "@/lib/i18n";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6">
        <span className="text-sm font-semibold text-violet dark:text-violet-light mb-6 block tracking-wide">ABOUT</span>
        <h2 className="text-section text-foreground dark:text-white mb-6">
          One Sentence. Complete Program.
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
          {t.about.text}
        </p>
      </div>
    </section>
  );
}
