import Link from "next/link";

function TwitterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const socialLinks = [
  { href: "https://twitter.com/marssoft", label: "Twitter", icon: <TwitterIcon /> },
  { href: "https://linkedin.com/company/marssoft", label: "LinkedIn", icon: <LinkedinIcon /> },
  { href: "https://instagram.com/marssoft", label: "Instagram", icon: <InstagramIcon /> },
];

const quickLinks = [
  { href: "/about", label: "Hakkımızda" },
  { href: "/solutions", label: "Ürünlerimiz" },
  { href: "/pricing", label: "Fiyatlandırma" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "İletişim" },
];

const products = [
  { href: "/solutions#salonpro", label: "SalonPro.io" },
  { href: "/solutions#vetpanel", label: "Vet Panel" },
  { href: "/solutions#petpanel", label: "Pet Panel" },
  { href: "/solutions#marinepanel", label: "Marine Panel" },
  { href: "/solutions#stokpanel", label: "Stok Panel" },
];

export default function Footer() {
  return (
    <footer id="marssoft-global-footer" style={{ background: "#060610", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-14 pb-8">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="inline-flex items-center mb-4 select-none">
              <span
                className="text-[28px] font-black tracking-[-0.5px] leading-none"
                style={{
                  background: "linear-gradient(135deg, #B8860B 0%, #D4A017 30%, #F0CC6A 55%, #D4A017 75%, #B8860B 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 1px 6px rgba(184,134,11,0.4))",
                  fontFamily: "'Georgia', 'Times New Roman', serif",
                }}
              >
                Marssoft
              </span>
            </Link>
            <p className="text-[13.5px] leading-[1.7] mb-5 max-w-xs" style={{ color: "rgba(255,255,255,0.38)" }}>
              KOBİ&apos;lere özel, global ölçekte hizmet veren bulut tabanlı SaaS şirketi. Ataşehir, İstanbul.
            </p>
            <div className="flex items-center gap-2">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:-translate-y-0.5"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)", color: "rgba(255,255,255,0.45)" }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="text-[12px] font-semibold uppercase tracking-[1.5px] mb-4" style={{ color: "rgba(255,255,255,0.35)" }}>
              Sayfalar
            </h6>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}
                    className="text-[13.5px] transition-colors hover:text-white/80"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products + Contact */}
          <div>
            <h6 className="text-[12px] font-semibold uppercase tracking-[1.5px] mb-4" style={{ color: "rgba(255,255,255,0.35)" }}>
              Ürünler
            </h6>
            <ul className="space-y-2.5 mb-7">
              {products.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}
                    className="text-[13.5px] transition-colors hover:text-white/80"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h6 className="text-[12px] font-semibold uppercase tracking-[1.5px] mb-4" style={{ color: "rgba(255,255,255,0.35)" }}>
              İletişim
            </h6>
            <ul className="space-y-2">
              <li>
                <a href="mailto:pazarlama@marssoft.com.tr"
                  className="text-[13px] transition-colors hover:text-white/70"
                  style={{ color: "rgba(255,255,255,0.38)" }}
                >
                  pazarlama@marssoft.com.tr
                </a>
              </li>
              <li className="text-[13px]" style={{ color: "rgba(255,255,255,0.38)" }}>
                Ataşehir, İstanbul
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-[12px]" style={{ color: "rgba(255,255,255,0.28)" }}>
            © {new Date().getFullYear()} Marssoft Yazılım. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-[12px] transition-colors hover:text-white/50" style={{ color: "rgba(255,255,255,0.28)" }}>
              Gizlilik Politikası
            </Link>
            <Link href="/terms" className="text-[12px] transition-colors hover:text-white/50" style={{ color: "rgba(255,255,255,0.28)" }}>
              Kullanım Koşulları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}



