"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { products } from "@/lib/products";

const navLinks = [
  { href: "/web-tasarim", label: "Kurumsal Web" },
  { href: "/pricing", label: "Fiyatlandırma" },
  { href: "/about", label: "Hakkımızda" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "İletişim" },
];

function Logo({ size = "md" }: { size?: "md" | "lg" }) {
  return (
    <span
      className={`font-display gold-text font-semibold leading-none tracking-[-0.02em] ${
        size === "lg" ? "text-[30px]" : "text-[24px] md:text-[27px]"
      }`}
    >
      Marssoft
    </span>
  );
}

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const linkCls = (href: string) =>
    `rounded-full px-4 py-2 text-[13.5px] transition-colors ${
      pathname === href ? "text-[#F0CC6A]" : "text-white/60 hover:text-white"
    }`;

  return (
    <nav
      id="marssoft-global-nav"
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled || mobileOpen
          ? "border-white/[0.08] bg-[#06070b]/85 backdrop-blur-2xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-[68px] items-center justify-between md:h-[76px]">
          <Link href="/" className="select-none" onClick={() => setMobileOpen(false)}>
            <Logo />
          </Link>

          <div className="hidden items-center gap-0.5 md:flex">
            {/* Products mega menu */}
            <div
              className="relative"
              onMouseEnter={() => setMenuOpen(true)}
              onMouseLeave={() => setMenuOpen(false)}
            >
              <button
                type="button"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((v) => !v)}
                className={`flex items-center gap-1 rounded-full px-4 py-2 text-[13.5px] transition-colors ${
                  menuOpen || pathname.startsWith("/solutions") ? "text-[#F0CC6A]" : "text-white/60 hover:text-white"
                }`}
              >
                Ürünler
                <ChevronDown size={14} className={`transition-transform ${menuOpen ? "rotate-180" : ""}`} />
              </button>
              <div
                className={`absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-3 transition-all duration-200 ${
                  menuOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
                }`}
              >
                <div className="grid grid-cols-2 gap-1 rounded-3xl border border-white/10 bg-[#0a0b11]/95 p-3 shadow-[0_40px_100px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
                  {products.map((p) => {
                    const Icon = p.icon;
                    const inner = (
                      <>
                        <span
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border"
                          style={{ background: `${p.color}1a`, borderColor: `${p.color}40`, color: p.color }}
                        >
                          <Icon size={18} />
                        </span>
                        <span className="min-w-0">
                          <span className="flex items-center gap-2 text-[14px] font-semibold text-white">
                            {p.name}
                            {p.external && <ArrowUpRight size={12} className="text-white/40" />}
                          </span>
                          <span className="block truncate text-[12px] text-white/45">{p.tag}</span>
                        </span>
                      </>
                    );
                    const cls = "flex items-center gap-3 rounded-2xl p-3 transition-colors hover:bg-white/[0.06]";
                    return p.external ? (
                      <a key={p.id} href={p.href} target="_blank" rel="noopener noreferrer" className={cls}>
                        {inner}
                      </a>
                    ) : (
                      <Link key={p.id} href={p.href} onClick={() => setMenuOpen(false)} className={cls}>
                        {inner}
                      </Link>
                    );
                  })}
                  <Link
                    href="/solutions"
                    onClick={() => setMenuOpen(false)}
                    className="col-span-2 mt-1 flex items-center justify-between rounded-2xl border border-white/[0.07] bg-white/[0.03] px-4 py-3 text-[13px] text-white/70 transition-colors hover:text-white"
                  >
                    Tüm ürünleri incele <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={linkCls(link.href)}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="accent-button inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#B8860B] via-[#D4A017] to-[#F0CC6A] px-5 py-2.5 text-[13px] font-semibold text-[#0a0a0f] shadow-[0_10px_30px_rgba(212,160,23,0.25)]"
            >
              Teklif alın <ArrowRight size={14} />
            </Link>
          </div>

          <button
            className="rounded-full border border-white/10 p-2 text-white/80 transition-colors hover:bg-white/[0.06] md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-x-0 top-[68px] bottom-0 overflow-y-auto border-t border-white/[0.07] bg-[#06070b]/98 md:hidden">
          <div className="space-y-1 px-6 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`font-display flex items-center justify-between rounded-2xl px-4 py-3.5 text-[22px] ${
                  pathname === link.href ? "text-[#F0CC6A]" : "text-white/80"
                }`}
              >
                {link.label}
                <ArrowRight size={16} className="text-white/30" />
              </Link>
            ))}

            <p className="px-4 pb-2 pt-6 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/35">
              Ürünlerimiz
            </p>
            <div className="grid grid-cols-2 gap-2">
              {products.map((p) => {
                const Icon = p.icon;
                const cls =
                  "flex items-center gap-2.5 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-3 text-[13px] text-white/80";
                const inner = (
                  <>
                    <Icon size={16} style={{ color: p.color }} />
                    {p.name}
                  </>
                );
                return p.external ? (
                  <a key={p.id} href={p.href} target="_blank" rel="noopener noreferrer" className={cls}>
                    {inner}
                  </a>
                ) : (
                  <Link key={p.id} href={p.href} onClick={() => setMobileOpen(false)} className={cls}>
                    {inner}
                  </Link>
                );
              })}
            </div>

            <div className="pt-6">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#B8860B] via-[#D4A017] to-[#F0CC6A] px-5 py-4 text-[14px] font-semibold text-[#0a0a0f]"
              >
                Teklif alın <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
