import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

export function Eyebrow({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div
      className={`flex items-center gap-3 text-[11.5px] font-semibold uppercase tracking-[0.3em] text-[#D4A017] ${
        center ? "justify-center" : ""
      }`}
    >
      <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#D4A017]" />
      {children}
      {center && <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#D4A017]" />}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  center,
}: {
  eyebrow: string;
  title: React.ReactNode;
  accent?: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <Eyebrow center={center}>{eyebrow}</Eyebrow>
      <h2 className="font-display mt-5 text-4xl leading-[1.08] tracking-[-0.02em] text-white sm:text-5xl">
        {title} {accent && <span className="gold-text italic">{accent}</span>}
      </h2>
      {description && <p className="mt-5 text-[15.5px] leading-8 text-white/55">{description}</p>}
    </Reveal>
  );
}

export function GoldButton({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const cls =
    "accent-button inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#B8860B] via-[#D4A017] to-[#F0CC6A] px-7 py-3.5 text-sm font-semibold text-[#0a0a0f] shadow-[0_18px_50px_rgba(212,160,23,0.28)] transition hover:shadow-[0_22px_60px_rgba(212,160,23,0.42)]";
  const content = (
    <>
      {children} <ArrowRight size={16} />
    </>
  );
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {content}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}

export function GhostButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-white transition hover:border-[#D4A017]/50 hover:bg-white/10"
    >
      {children}
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  accent,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.07]">
      <div className="hero-grid-overlay" />
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[420px] w-[420px] rounded-full bg-[#2B5EC8]/20 blur-[140px]" />
      <div className="pointer-events-none absolute -top-20 right-0 h-[320px] w-[320px] rounded-full bg-[#D4A017]/15 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="font-display mt-6 max-w-4xl text-5xl leading-[1.04] tracking-[-0.025em] text-white sm:text-6xl lg:text-7xl">
          {title} <span className="gold-text italic">{accent}</span>
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">{description}</p>
        {children && <div className="mt-10 flex flex-wrap gap-4">{children}</div>}
      </div>
    </section>
  );
}
