"use client";

import { useState } from "react";
import {
  Intro,
  Navigation,
  Hero,
  WhatWeDo,
  Products,
  Team,
  Partners,
  Contact,
} from "@/components/sections";

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <main className="relative min-h-screen bg-nero">
      {/* Intro animation */}
      {!introComplete && <Intro onComplete={() => setIntroComplete(true)} />}

      {/* Main content */}
      <div className="relative z-10">
        <Navigation show={introComplete} />
        {introComplete && (
          <>
            <Hero />
            <WhatWeDo />
            <Products />
            <Team />
            <Partners />
            <Contact />
          </>
        )}
      </div>
    </main>
  );
}
