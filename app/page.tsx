"use client";

import { useState } from "react";
import Intro from "@/components/intro";
import Navigation from "@/components/navigation-new";
import Hero from "@/components/hero-new";
import HowItWorks from "@/components/how-it-works-horizontal";
import Partners from "@/components/partners";
import Contact from "@/components/contact-new";
import AnimatedBackground from "@/components/animated-background";
import About from "@/components/about";

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <main className="relative min-h-screen bg-nero">
      {/* Persistent animated background */}
      <div className="fixed inset-0 z-0">
        <AnimatedBackground />
      </div>

      {/* Intro animation */}
      {!introComplete && <Intro onComplete={() => setIntroComplete(true)} />}

      {/* Main content */}
      <div className="relative z-10">
        <Navigation show={introComplete} />
        {introComplete && (
          <>
            <Hero />
            <About />
            <HowItWorks />
            <Partners />
            <Contact />
          </>
        )}
      </div>
    </main>
  );
}
