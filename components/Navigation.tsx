"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/about", label: "Hakkımızda" },
  { href: "/solutions", label: "Ürünler" },
  { href: "/pricing", label: "Fiyatlandırma" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "İletişim" },
];

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav id="marssoft-global-nav" className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#06070b]/90 backdrop-blur-2xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-[72px]">
          <Link href="/" className="flex items-center gap-2 select-none">
            <span
              className="text-[22px] font-black leading-none tracking-[-0.5px] md:text-[26px]"
              style={{
                background: "linear-gradient(135deg, #B8860B 0%, #D4A017 30%, #F0CC6A 55%, #D4A017 75%, #B8860B 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 1px 4px rgba(184,134,11,0.45))",
                fontFamily: "'Georgia', 'Times New Roman', serif",
              }}
            >
              Marssoft
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3.5 py-2 text-[13.5px] transition-colors ${
                  pathname === link.href
                    ? "bg-white/[0.08] text-[#F0CC6A]"
                    : "text-white/60 hover:bg-white/[0.05] hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/contact"
              className="rounded-full px-4 py-2 text-[13.5px] font-semibold text-white transition-all"
              style={{ background: "linear-gradient(135deg, #B8860B 0%, #D4A017 100%)", boxShadow: "0 0 0 1px rgba(212,160,23,0.35)" }}
            >
              Hemen başlayın →
            </Link>
          </div>

          <button
            className="rounded-lg p-1.5 text-white/70 transition-colors hover:bg-white/[0.06] hover:text-white md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menü"
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/[0.07] bg-[#09090f] md:hidden">
          <div className="space-y-0.5 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-2 rounded-lg px-3 py-2.5 text-[14px] transition-colors ${
                  pathname === link.href
                    ? "bg-white/[0.08] text-white"
                    : "text-white/60 hover:bg-white/[0.05] hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pb-1 pt-3">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center rounded-xl px-5 py-3 text-[14px] font-semibold text-white transition-all"
                style={{ background: "linear-gradient(135deg, #B8860B 0%, #D4A017 100%)" }}
              >
                Hemen başlayın
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

