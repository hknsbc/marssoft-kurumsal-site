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
    <nav id="marssoft-global-nav" className="sticky top-0 z-50 border-b border-white/[0.07]"
      style={{ background: "rgba(9,9,15,0.92)", backdropFilter: "blur(20px)" }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-[68px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 select-none">
            <span
              className="text-[22px] md:text-[26px] font-black tracking-[-0.5px] leading-none"
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

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 rounded-lg text-[13.5px] transition-colors ${
                  pathname === link.href
                    ? "text-[#F0CC6A] bg-white/[0.06]"
                    : "text-white/55 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="text-white text-[13.5px] font-medium px-4 py-2 rounded-lg transition-all"
              style={{ background: "linear-gradient(135deg, #B8860B 0%, #D4A017 100%)", boxShadow: "0 0 0 1px rgba(212,160,23,0.35)" }}
            >
              Hemen Başlayın →
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white/60 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/[0.06]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menü"
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/[0.07] bg-[#09090f]">
          <div className="px-6 py-4 space-y-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-[14px] transition-colors ${
                  pathname === link.href
                    ? "text-white bg-white/[0.07]"
                    : "text-white/55 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 pb-1">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center text-white font-medium px-5 py-3 rounded-xl text-[14px] transition-all"
                style={{ background: "linear-gradient(135deg, #B8860B 0%, #D4A017 100%)" }}
              >
                Hemen Başlayın
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

