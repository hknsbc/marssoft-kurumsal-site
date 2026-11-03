import Link from "next/link";
import PaymentLogos from "@/components/PaymentLogos";

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

const legalLinks = [
  { href: "/privacy", label: "Gizlilik Sözleşmesi" },
  { href: "/distance-sales", label: "Mesafeli Satış Sözleşmesi" },
  { href: "/delivery-returns", label: "Teslimat ve İade Şartları" },
];

const products = [
  { href: "/solutions#salonpro", label: "SalonPro.io" },
  { href: "/solutions#doktorplan", label: "DoktorPlan" },
  { href: "/solutions#vetpanel", label: "Vet Panel" },
  { href: "/solutions#petpanel", label: "Pet Panel" },
  { href: "/solutions#marinepanel", label: "Marine Panel" },
  { href: "/solutions#stokpanel", label: "Stok Panel" },
];

export default function Footer() {
  return (
    <footer id="marssoft-global-footer" className="border-t border-white/[0.07] bg-[#06070b]">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="mb-12 grid gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="mb-4 inline-flex select-none items-center">
              <span
                className="text-[28px] font-black leading-none tracking-[-0.5px]"
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
            <p className="mb-5 max-w-xs text-[13.5px] leading-[1.7] text-white/45">
              KOBİ&apos;lere özel, global ölçekte hizmet veren bulut tabanlı SaaS şirketi. Ataşehir, İstanbul.
            </p>
            <div className="flex items-center gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-white/45 transition-all hover:-translate-y-0.5 hover:text-white/80"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h6 className="mb-4 text-[12px] font-semibold uppercase tracking-[1.5px] text-white/35">
              Sayfalar
            </h6>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[13.5px] text-white/40 transition-colors hover:text-white/80">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="mb-4 text-[12px] font-semibold uppercase tracking-[1.5px] text-white/35">
              Ürünler
            </h6>
            <ul className="mb-7 space-y-2.5">
              {products.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[13.5px] text-white/40 transition-colors hover:text-white/80">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h6 className="mb-4 text-[12px] font-semibold uppercase tracking-[1.5px] text-white/35">
              İletişim
            </h6>
            <ul className="space-y-2">
              <li>
                <a href="mailto:pazarlama@marssoft.com.tr" className="text-[13px] text-white/40 transition-colors hover:text-white/70">
                  pazarlama@marssoft.com.tr
                </a>
              </li>
              <li className="text-[13px] text-white/40">Ataşehir, İstanbul</li>
            </ul>
          </div>
        </div>

        <div className="mb-6 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 sm:flex-row">
          <PaymentLogos />
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            {legalLinks.map((l) => (
              <Link key={l.href} href={l.href} className="text-[12px] text-white/40 transition-colors hover:text-white/70">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] pt-6 sm:flex-row">
          <p className="text-[12px] text-white/30">© {new Date().getFullYear()} Marssoft Yazılım. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}

