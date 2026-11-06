"use client";

import { useEffect, useState } from "react";

const SEEN_KEY = "marssoft-intro-seen";
const letters = "Marssoft".split("");

// Açılış perdesi: oturum başına bir kez oynar, bitince hero animasyonlarını tetikler.
export default function Intro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let seen = false;
    try {
      seen = sessionStorage.getItem(SEEN_KEY) === "1";
    } catch {}

    if (reduced || seen) {
      root.classList.add("hero-ready", "intro-skip");
      return;
    }

    try {
      sessionStorage.setItem(SEEN_KEY, "1");
    } catch {}
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const ready = setTimeout(() => root.classList.add("hero-ready"), 1900);
    const done = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = prevOverflow;
    }, 2700);
    return () => {
      clearTimeout(ready);
      clearTimeout(done);
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="intro-curtain" aria-hidden="true">
      <div className="intro-glow" />
      <div className="relative flex flex-col items-center">
        <div className="font-display gold-text flex text-[56px] font-semibold leading-none tracking-[-0.02em] sm:text-[88px]">
          {letters.map((l, i) => (
            <span key={i} className="intro-letter" style={{ animationDelay: `${0.15 + i * 0.07}s` }}>
              {l}
            </span>
          ))}
        </div>
        <div className="intro-line" />
        <p className="intro-tag">Web · Yazılım · Dijital</p>
      </div>
    </div>
  );
}
