import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Anchor,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  Dog,
  PawPrint,
  Package,
  Scissors,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Store,
} from "lucide-react";

const heroBadges = ["7/24 destek", "Anlık raporlama", "Güvenli altyapı"];

const stats = [
  { value: "500+", label: "Aktif işletme" },
  { value: "15+", label: "Ülkede kullanım" },
  { value: "99.9%", label: "Uptime garantisi" },
  { value: "<2 sa", label: "Destek yanıt süresi" },
];

const sectors = [
  "Güzellik Salonları", "Veteriner Klinikleri", "Doktor Muayenehaneleri", "Petshoplar",
  "Marinalar", "Depo & Envanter", "Kuaförler", "Estetik Merkezleri",
];

type Product = {
  title: string;
  tag: string;
  description: string;
  href: string;
  external?: boolean;
  icon: LucideIcon;
  color: string;
  badge?: string;
};

const products: Product[] = [
  {
    title: "SalonPro.io",
    tag: "Güzellik & Kuaför",
    description: "Randevu, müşteri, personel ve WhatsApp hatırlatmayı tek takvimde birleştirin.",
    href: "/salonpro",
    icon: Scissors,
    color: "#D4A017",
    badge: "En popüler",
  },
  {
    title: "DoktorPlan",
    tag: "Klinik & Muayenehane",
    description: "Randevu, hasta takibi, WhatsApp/SMS hatırlatma ve kasa yönetimi tek panelde. 7 gün ücretsiz deneyin.",
    href: "https://doktorplan.com",
    external: true,
    icon: Stethoscope,
    color: "#2dd4bf",
    badge: "Yeni",
  },
  {
    title: "Vet Panel",
    tag: "Veteriner Klinikleri",
    description: "Hasta kartı, aşı takvimi, ilaç stoku ve kasa modülüyle kliniğinizi yönetin.",
    href: "/solutions#vetpanel",
    icon: PawPrint,
    color: "#1d9e75",
  },
  {
    title: "Pet Panel",
    tag: "Petshop & Pet Market",
    description: "Satış, stok, grooming randevusu ve sadakat kartını tek sistemde toplayın.",
    href: "/solutions#petpanel",
    icon: Dog,
    color: "#63b3ed",
  },
  {
    title: "Marine Panel",
    tag: "Marina & Tekne",
    description: "Liman yeri, rezervasyon, bakım kaydı ve faturalandırmayı dijitalleştirin.",
    href: "/solutions#marinepanel",
    icon: Anchor,
    color: "#2B5EC8",
  },
  {
    title: "Stok Panel",
    tag: "Stok & Envanter",
    description: "Barkodlu takip, kritik stok uyarısı ve çoklu depo desteğiyle tam kontrol.",
    href: "/solutions#stokpanel",
    icon: Package,
    color: "#d85a30",
  },
];

const featureCards = [
  {
    title: "WhatsApp ile akıllı hatırlatma",
    description: "Randevular, ödemeler ve kampanyalar için otomatik bildirimler gönderin. Müşteri bağlılığını yükseltin.",
    icon: Bot,
  },
  {
    title: "KOBİ odaklı raporlama",
    description: "Gelir, stok ve personel performansını tek bakışta takip edin. Hızlı karar verme fırsatı yakalayın.",
    icon: BarChart3,
  },
  {
    title: "Çoklu sektör desteği",
    description: "Salon, klinik, petshop, marina ve dağıtım işletmeleri için tüm süreçleri tek çatı altında yönetin.",
    icon: Store,
  },
  {
    title: "Gelişmiş güvenlik",
    description: "Veri güvenliği, yedekleme ve rol bazlı erişim ile işletmenizi her koşulda koruyun.",
    icon: ShieldCheck,
  },
];

const workflowSteps = [
  { title: "İş akışınızı kurun", description: "Randevu, stok ve bakım süreçlerini tek panelde planlayın." },
  { title: "Otomasyonları etkinleştirin", description: "Bildirim, ödeme ve müşteri hatırlatma akışlarını devreye alın." },
  { title: "Büyümeyi izleyin", description: "Güncel raporlar ve dashboard ile performansı takip edin." },
];

const serif = { fontFamily: "'Georgia', 'Times New Roman', serif" };

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.28em] text-[#D4A017]">
      <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#D4A017]" />
      {children}
    </div>
  );
}

function ProductCard({ p }: { p: Product }) {
  const Icon = p.icon;
  const inner = (
    <>
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `${p.color}33` }}
      />
      <div className="relative flex items-start justify-between">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-2xl border"
          style={{ background: `${p.color}1a`, borderColor: `${p.color}40`, color: p.color }}
        >
          <Icon size={22} />
        </div>
        {p.badge && (
          <span
            className="rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider"
            style={{ borderColor: `${p.color}55`, color: p.color, background: `${p.color}12` }}
          >
            {p.badge}
          </span>
        )}
      </div>
      <p className="relative mt-7 text-[11.5px] font-semibold uppercase tracking-[0.2em]" style={{ color: p.color }}>
        {p.tag}
      </p>
      <h3 className="relative mt-2 text-[26px] leading-tight text-white" style={serif}>{p.title}</h3>
      <p className="relative mt-3 text-[14px] leading-7 text-white/60">{p.description}</p>
      <div className="relative mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-white/80 transition-colors group-hover:text-white">
        {p.external ? "Siteyi ziyaret et" : "Detayları incele"}
        <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </div>
    </>
  );
  const cls =
    "group relative flex flex-col overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.015] p-7 transition duration-300 hover:-translate-y-1.5 hover:border-white/25";
  return p.external ? (
    <a href={p.href} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
  ) : (
    <Link href={p.href} className={cls}>{inner}</Link>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(43,94,200,0.18),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(212,160,23,0.16),_transparent_32%),linear-gradient(180deg,_#04050a_0%,_#09090f_100%)] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="hero-grid-overlay pointer-events-none" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[#2B5EC8]/20 blur-[140px]" />
        <div className="pointer-events-none absolute right-0 top-20 h-[340px] w-[340px] rounded-full bg-[#D4A017]/20 blur-[140px]" />
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-24 lg:px-8 lg:pt-32">
          <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.24em] text-[#F0CC6A]">
                <Sparkles size={14} /> Marssoft SaaS Çözümleri
              </div>
              <h1 className="mt-8 text-5xl leading-[1.05] tracking-[-0.02em] text-white sm:text-6xl lg:text-[76px]" style={serif}>
                İşletmenizi
                <span className="mt-2 block bg-gradient-to-r from-[#B8860B] via-[#F0CC6A] to-[#D4A017] bg-clip-text italic text-transparent">
                  dijital olarak büyütün.
                </span>
              </h1>
              <p className="mt-8 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
                Salon, klinik, veteriner, petshop, marina ve depo operasyonlarınızı tek kontrol panelinden yönetin. Hızlı kurulum, akıllı otomasyon ve gerçek zamanlı raporlama.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/contact" className="accent-button inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#B8860B] via-[#D4A017] to-[#F0CC6A] px-8 py-4 text-sm font-semibold text-[#09090f] shadow-[0_20px_60px_rgba(212,160,23,0.3)]">
                  Ücretsiz demo alın <ArrowRight size={16} />
                </Link>
                <Link href="/solutions" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-8 py-4 text-sm font-semibold text-white transition hover:border-[#D4A017]/40 hover:bg-white/10">
                  Ürünleri keşfedin
                </Link>
              </div>

              <div className="mt-9 flex flex-wrap gap-3 text-sm text-white/60">
                {heroBadges.map((badge) => (
                  <span key={badge} className="pill-chip flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D4A017]" />
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-px rounded-[34px] bg-gradient-to-br from-[#D4A017]/50 via-white/5 to-[#2B5EC8]/40" />
              <div className="glass-panel animate-float-slow relative rounded-[34px] p-6 shadow-[0_45px_140px_rgba(0,0,0,0.5)]">
                <div className="rounded-[24px] border border-white/10 bg-[#06070b]/90 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.24em] text-[#F0CC6A]">Marssoft kontrol paneli</p>
                      <h2 className="mt-3 text-2xl text-white sm:text-[27px]" style={serif}>
                        İşletme verinizi tek noktada takip edin.
                      </h2>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-full border border-[#1d9e75]/30 bg-[#1d9e75]/10 px-3 py-1.5 text-xs font-semibold text-[#1d9e75]">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#1d9e75]" /> Canlı
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                      <p className="text-sm text-white/55">Haftalık randevu</p>
                      <p className="mt-4 text-4xl text-white" style={serif}>1.732</p>
                      <p className="mt-2 text-sm text-white/45">Doluluk oranı %89</p>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                      <p className="text-sm text-white/55">Aylık ciro</p>
                      <p className="mt-4 text-4xl text-white" style={serif}>₺128K</p>
                      <p className="mt-2 text-sm text-white/45">Büyüme %18</p>
                    </div>
                  </div>

                  <div className="mt-4 rounded-[24px] border border-white/10 bg-[#09090f]/80 p-5">
                    <div className="flex items-center justify-between text-sm text-white/70">
                      <span>WhatsApp bildirimleri</span>
                      <span className="font-semibold text-[#D4A017]">Aktif</span>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-[#B8860B] to-[#F0CC6A]" />
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                      <p className="text-sm text-white/55">Yeni müşteri</p>
                      <div className="mt-3 flex items-center justify-between gap-3">
                        <p className="text-xl font-semibold text-white">54</p>
                        <span className="rounded-full bg-[#1d9e75]/15 px-3 py-1 text-xs font-semibold text-[#1d9e75]">+12%</span>
                      </div>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                      <p className="text-sm text-white/55">Destek talepleri</p>
                      <div className="mt-3 flex items-center justify-between gap-3">
                        <p className="text-xl font-semibold text-white">8</p>
                        <span className="rounded-full bg-[#2B5EC8]/15 px-3 py-1 text-xs font-semibold text-[#94B8F0]">2 saat</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats band */}
        <div className="relative border-y border-white/[0.08] bg-white/[0.02]">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-6 py-10 lg:grid-cols-4 lg:px-8">
            {stats.map((item, i) => (
              <div key={item.label} className={`px-4 text-center ${i > 0 ? "lg:border-l lg:border-white/[0.08]" : ""}`}>
                <p className="text-4xl text-[#F0CC6A]" style={serif}>{item.value}</p>
                <p className="mt-2 text-[12px] uppercase tracking-[0.18em] text-white/45">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector marquee */}
      <section className="overflow-hidden border-b border-white/[0.06] py-6" aria-label="Hizmet verdiğimiz sektörler">
        <div className="animate-marquee flex w-max items-center gap-12 whitespace-nowrap text-[13px] uppercase tracking-[0.26em] text-white/35">
          {[...sectors, ...sectors].map((s, i) => (
            <span key={`${s}-${i}`} className="flex items-center gap-12">
              {s}
              <span className="h-1 w-1 rounded-full bg-[#D4A017]/60" />
            </span>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="urunler" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center"><Eyebrow>Ürün ailesi</Eyebrow></div>
            <h2 className="mt-5 text-4xl leading-[1.1] text-white sm:text-5xl" style={serif}>
              Her sektör için <span className="italic text-[#F0CC6A]">özel tasarlanmış</span> platformlar.
            </h2>
            <p className="mt-5 text-[15px] leading-7 text-white/55">
              Altı ürün, tek çatı: ihtiyacınıza uygun çözümü seçin, aynı gün kullanmaya başlayın.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map((p) => <ProductCard key={p.title} p={p} />)}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-white/[0.06] bg-white/[0.015] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Eyebrow>Neden Marssoft?</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-4xl leading-[1.1] text-white sm:text-5xl" style={serif}>
                Güçlü, sade ve etkili bir operasyon merkezi.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/55">
              KOBİ&apos;lerin gerçek ihtiyaçlarına göre tasarlanan çözümlerle iş akışlarını hızlandırıyor, müşteri deneyimini üst seviyeye taşıyoruz.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[28px] border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-4">
            {featureCards.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="group bg-[#08080e] p-8 transition-colors hover:bg-[#0c0c15]">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D4A017]/25 bg-[#D4A017]/10 text-[#D4A017]">
                      <Icon size={20} />
                    </div>
                    <span className="text-[13px] text-white/20" style={serif}>0{i + 1}</span>
                  </div>
                  <h3 className="mt-7 text-xl leading-snug text-white" style={serif}>{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/55">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <Eyebrow>Kurulumdan büyümeye</Eyebrow>
              <h2 className="mt-5 text-4xl leading-[1.1] text-white sm:text-5xl" style={serif}>
                İş akışınızı <span className="italic text-[#F0CC6A]">üç adımda</span> dijitalleştirin.
              </h2>
            </div>
            <div className="space-y-4">
              {workflowSteps.map((step, index) => (
                <div key={step.title} className="flex items-center gap-6 rounded-[24px] border border-white/10 bg-gradient-to-r from-white/[0.05] to-transparent p-6">
                  <div className="text-5xl text-[#D4A017]/70" style={serif}>0{index + 1}</div>
                  <div>
                    <h3 className="text-lg text-white" style={serif}>{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-7 text-white/55">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[36px] border border-[#D4A017]/25 bg-gradient-to-br from-[#16141f] via-[#0d0d16] to-[#0a1224] p-10 shadow-[0_40px_120px_rgba(0,0,0,0.4)] sm:p-14">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#D4A017]/20 blur-[100px]" />
            <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <Eyebrow>Hazır mısınız?</Eyebrow>
                <h2 className="mt-5 text-4xl leading-[1.1] text-white sm:text-5xl" style={serif}>
                  İşletmeniz için özel bir <span className="italic text-[#F0CC6A]">dijital yol haritası</span> çıkaralım.
                </h2>
                <p className="mt-5 max-w-xl text-sm leading-7 text-white/55">
                  İhtiyaçlarınıza göre şekillenen çözümlerle satıştan operasyona her adımı daha akıllı hale getirin.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-stretch">
                <Link href="/contact" className="accent-button inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#B8860B] via-[#D4A017] to-[#F0CC6A] px-8 py-4 text-sm font-semibold text-[#09090f] shadow-[0_20px_60px_rgba(212,160,23,0.3)]">
                  Ücretsiz görüşme alın <ArrowRight size={16} />
                </Link>
                <Link href="/pricing" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10">
                  Fiyatları görün
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
