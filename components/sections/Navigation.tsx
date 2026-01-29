"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/constants";
import { LANGUAGES } from "@/constants/translations";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useLanguage } from "@/lib/i18n";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Find current active section
      const sections = NAV_ITEMS.map(item => item.id);
      let currentSection = "";

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Section is active if its top is above the middle of viewport
          if (rect.top <= window.innerHeight / 3) {
            currentSection = sectionId;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-white dark:bg-[#0F0F0F] ${
          isScrolled ? "border-b border-gray-200 dark:border-gray-800" : ""
        }`}
      >
        <nav className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo + Language Selector */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className="text-xl font-bold text-foreground dark:text-white hover:text-violet dark:hover:text-violet-light transition-colors"
              >
                WIGTN
              </a>

              {/* Language Selector */}
              <div className="hidden md:flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                {LANGUAGES.map((lang, index) => (
                  <span key={lang.code} className="flex items-center">
                    <button
                      onClick={() => setLanguage(lang.code)}
                      className={`transition-colors ${
                        language === lang.code
                          ? "text-violet dark:text-violet-light font-medium"
                          : "hover:text-violet dark:hover:text-violet-light"
                      }`}
                    >
                      {lang.label}
                    </button>
                    {index < LANGUAGES.length - 1 && (
                      <span className="mx-1 text-gray-300 dark:text-gray-600">|</span>
                    )}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`text-sm transition-colors ${
                    activeSection === item.id
                      ? "text-violet dark:text-violet-light font-medium"
                      : "text-gray-600 dark:text-gray-400 hover:text-violet dark:hover:text-violet-light"
                  }`}
                >
                  {item.label}
                </a>
              ))}

              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-foreground dark:text-white p-2"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-white dark:bg-[#0F0F0F] pt-20 md:hidden">
          <nav className="flex flex-col items-center gap-6 px-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={handleMobileNavClick}
                className={`text-lg transition-colors ${
                  activeSection === item.id
                    ? "text-violet dark:text-violet-light font-medium"
                    : "text-foreground dark:text-white hover:text-violet dark:hover:text-violet-light"
                }`}
              >
                {item.label}
              </a>
            ))}

            {/* Mobile Language Selector */}
            <div className="flex items-center gap-2 mt-4 text-sm">
              {LANGUAGES.map((lang, index) => (
                <span key={lang.code} className="flex items-center">
                  <button
                    onClick={() => setLanguage(lang.code)}
                    className={`transition-colors ${
                      language === lang.code
                        ? "text-violet dark:text-violet-light font-medium"
                        : "text-gray-500 dark:text-gray-400 hover:text-violet dark:hover:text-violet-light"
                    }`}
                  >
                    {lang.label}
                  </button>
                  {index < LANGUAGES.length - 1 && (
                    <span className="mx-2 text-gray-300 dark:text-gray-600">|</span>
                  )}
                </span>
              ))}
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
