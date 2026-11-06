"use client";

import { useRef } from "react";

// Fare hareketine göre hafif 3B eğilme ve katmanlı parallax verir.
export default function TiltStage({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--rx", `${(-y * 6).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${(x * 8).toFixed(2)}deg`);
    el.style.setProperty("--px", `${(x * 14).toFixed(1)}px`);
    el.style.setProperty("--py", `${(y * 14).toFixed(1)}px`);
  };
  const reset = () => {
    const el = ref.current;
    if (!el) return;
    for (const k of ["--rx", "--ry", "--px", "--py"]) el.style.setProperty(k, "0");
  };

  return (
    <div ref={ref} onPointerMove={onMove} onPointerLeave={reset} className={`tilt-stage ${className}`}>
      {children}
    </div>
  );
}
