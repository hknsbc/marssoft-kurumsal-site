import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  Check,
  Code2,
  Gauge,
  Globe2,
  Layers,
  MessageCircle,
  Palette,
  Rocket,
  Search,
  ShieldCheck,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { Eyebrow, GhostButton, GoldButton, SectionHeading } from "@/components/site/ui";
import { BrowserMockup, ClinicMockup, StockMockup } from "@/components/site/mockups";
import { products, type Product } from "@/lib/products";

const sectors = [
  "Kurumsal Web Siteleri", "Klinik & Muayenehane", "Stok & Envanter", "Güzellik Salonları",
  "Veteriner Klinikleri", "Petshoplar", "Marinalar", "Özel Yazılım",
];

const webSteps = [
  { icon: Search, title: "Keşif & strateji", description: "Markanızı, hedef kitlenizi ve rakiplerinizi analiz eder, sitenin yol haritasını çıkarırız." },
  { icon: Palette, title: "Tasarım", description: "Şablon değil; markanıza özel, premium ve mobil öncelikli arayüz tasarlarız." },
  { icon: Code2, title: "Geliştirme", description: "Modern altyapıyla hızlı, güvenli ve SEO uyumlu kodlar; yönetim paneliyle birlikte." },
  { icon: Rocket, title: "Yayın & destek", description: "Alan adı, SSL ve yayın süreçlerini yönetir, sonrasında da yanınızda kalırız." },
];

const strengths = [
  { icon: Gauge, title: "Işık hızında performans", description: "Core Web Vitals odaklı geliştirme ile hem ziyaretçi hem Google memnun kalır." },
  { icon: Search, title: "SEO'ya hazır", description: "Teknik SEO, yapılandırılmış veri ve sitemap altyapısı en başından kurulur." },
  { icon: ShieldCheck, title: "Güvenlik & KVKK", description: "SSL, güvenli veri akışı ve KVKK uyumlu süreçlerle markanızı korur." },
  { icon: MessageCircle, title: "WhatsApp & entegrasyon", description: "Randevu, ödeme, e-posta ve WhatsApp bildirimleri sistemlerinize bağlanır." },
  { icon: BarChart3, title: "Anlık raporlama", description: "Ciro, stok ve randevu verilerini tek panelde, gerçek zamanlı izleyin." },
  { icon: Globe2, title: "Çok dilli & global", description: "Birden fazla dil ve uluslararası iş modelleri için hazır mimari." },
];

function SecondaryProduct({ p }: { p: Product }) {
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
            className="rounded-full border px-3 py-1 text-[10.5px] font-semibold uppercase tracking-wider"
            style={{ borderColor: `${p.color}55`, color: p.color, background: `${p.color}12` }}
          >
            {p.badge}
          </span>
        )}
      </div>
      <p className="relative mt-7 text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: p.color }}>
        {p.tag}
      </p>
      <h3 className="font-display relative mt-2 text-[28px] leading-tight text-white">{p.name}</h3>
      <p className="relative mt-3 flex-1 text-[14px] leading-7 text-white/55">{p.description}</p>
      <div className="relative mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-white/80 transition-colors group-hover:text-white">
        {p.external ? "Siteyi ziyaret et" : "Detayları incele"}
        <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </div>
    </>
  );
  const cls = "card-premium group relative flex flex-col overflow-hidden rounded-[28px] p-7";
  return p.external ? (
    <a href={p.href} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
  ) : (
    <Link href={p.href} className={cls}>{inner}</Link>
  );
}

function FeatureProduct({
  p,
  mockup,
  reverse,
  points,
}: {
  p: Product;
  mockup: React.ReactNode;
  reverse?: boolean;
  points: string[];
}) {
  const Icon = p.icon;
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
      <Reveal className={reverse ? "lg:order-2" : ""}>
        <div
          className="inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.2em]"
          style={{ borderColor: `${p.color}45`, background: `${p.color}12`, color: p.color }}
        >
          <Icon size={15} /> {p.tag}
        </div>
        <h3 className="font-display mt-6 text-5xl leading-[1.05] tracking-[-0.02em] text-white sm:text-6xl">
          {p.name}
        </h3>
        <p className="mt-5 max-w-xl text-base leading-8 text-white/60">{p.description}</p>
        <ul className="mt-7 space-y-3">
          {points.map((pt) => (
            <li key={pt} className="flex items-start gap-3 text-[14.5px] text-white/75">
              <span
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                style={{ background: `${p.color}22`, color: p.color }}
              >
                <Check size={12} strokeWidth={3} />
              </span>
              {pt}
            </li>
          ))}
        </ul>
        <div className="mt-9 flex flex-wrap gap-4">
          {p.external ? (
            <GoldButton href={p.href} external>7 gün ücretsiz deneyin</GoldButton>
          ) : (
            <GoldButton href="/contact">Demo talep edin</GoldButton>
          )}
          {!p.external && <GhostButton href={p.href}>Özellikleri incele</GhostButton>}
        </div>
      </Reveal>
      <Reveal delay={150} className={reverse ? "lg:order-1" : ""}>
        <div className="relative">
          <div
            className="pointer-events-none absolute -inset-10 rounded-full opacity-30 blur-[90px]"
            style={{ background: p.color }}
          />
          <div className="relative [transform:perspective(1600px)_rotateY(-4deg)] transition-transform duration-700 hover:[transform:perspective(1600px)_rotateY(0deg)]">
            {mockup}
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default function Home() {
  const doktorplan = products.find((p) => p.id === "doktorplan")!;
  const stokpanel = products.find((p) => p.id === "stokpanel")!;
  const others = products.filter((p) => p.id !== "doktorplan" && p.id !== "stokpanel");

  return (
    <div className="relative bg-[#05060a] text-white">
      {/* ── Hero ── */}
      <section className="grain relative -mt-[68px] overflow-hidden pt-[68px] md:-mt-[76px] md:pt-[76px]">
        <div className="hero-grid-overlay" />
        <div className="pointer-events-none absolute left-[10%] top-0 h-[560px] w-[560px] rounded-full bg-[#2B5EC8]/20 blur-[150px]" />
        <div className="pointer-events-none absolute right-0 top-24 h-[380px] w-[380px] rounded-full bg-[#D4A017]/20 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-28 pt-20 lg:px-8 lg:pb-40 lg:pt-28">
          <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 px-4 py-2 text-[11.5px] font-semibold uppercase tracking-[0.24em] text-[#F0CC6A]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#D4A017]" />
                Web tasarım · Özel yazılım · SaaS
              </div>
              <h1 className="font-display mt-8 text-[52px] leading-[1.02] tracking-[-0.03em] text-white sm:text-7xl lg:text-[84px]">
                Markanız
                <span className="gold-text block italic">dijitalde fark</span>
                yaratsın.
              </h1>
              <p className="mt-8 max-w-xl text-base leading-8 text-white/60 sm:text-lg">
                Marssoft; işletmenize özel <strong className="font-medium text-white/90">kurumsal web siteleri</strong> tasarlar ve{" "}
                <strong className="font-medium text-white/90">DoktorPlan</strong>,{" "}
                <strong className="font-medium text-white/90">Stok Panel</strong> gibi sektöre özel yazılımlarla operasyonunuzu tek panelden yönetmenizi sağlar.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <GoldButton href="/contact">Ücretsiz teklif alın</GoldButton>
                <GhostButton href="/solutions">Yazılımlarımızı keşfedin</GhostButton>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-[13px] text-white/50">
                {["Özel tasarım", "Mobil uyumlu", "SEO hazır", "7/24 destek"].map((b) => (
                  <span key={b} className="flex items-center gap-2">
                    <Check size={14} className="text-[#D4A017]" /> {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Layered visual: corporate site + software panel */}
            <div className="relative mx-auto w-full max-w-[560px] pb-24 lg:max-w-none">
              <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-[#D4A017]/15 to-[#2B5EC8]/20 blur-3xl" />
              <BrowserMockup className="animate-float-slow relative" />
              <div className="absolute -bottom-28 -left-4 hidden w-[58%] sm:block lg:-left-14">
                <ClinicMockup className="[transform:rotate(-2deg)]" />
              </div>
              <div className="absolute -right-3 -top-6 hidden rounded-2xl border border-[#D4A017]/30 bg-[#0a0b11]/95 px-4 py-3 shadow-2xl backdrop-blur sm:block">
                <p className="text-[10.5px] uppercase tracking-[0.2em] text-white/40">Her cihazda</p>
                <p className="font-display gold-text text-2xl">Mobil uyumlu</p>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* ── Marquee ── */}
      <section className="overflow-hidden border-b border-white/[0.06] py-6" aria-label="Uzmanlık alanlarımız">
        <div className="animate-marquee flex w-max items-center gap-12 whitespace-nowrap text-[12.5px] uppercase tracking-[0.28em] text-white/35">
          {[...sectors, ...sectors].map((s, i) => (
            <span key={`${s}-${i}`} className="flex items-center gap-12">
              {s}
              <span className="h-1 w-1 rounded-full bg-[#D4A017]/60" />
            </span>
          ))}
        </div>
      </section>

      {/* ── Two pillars ── */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            center
            eyebrow="Ne yapıyoruz"
            title="İki güçlü alanda,"
            accent="tek bir ortak."
            description="Dijital varlığınızı oluşturan web sitenizden günlük operasyonunuzu yöneten yazılıma kadar her şeyi aynı ekipten alın."
          />
          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <Link href="/web-tasarim" className="card-premium group relative flex h-full flex-col overflow-hidden rounded-[32px] p-9 sm:p-11">
                <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#2B5EC8]/25 blur-[90px]" />
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-[#94B8F0]/30 bg-[#2B5EC8]/15 text-[#94B8F0]">
                  <Layers size={24} />
                </div>
                <p className="relative mt-8 text-[11.5px] font-semibold uppercase tracking-[0.24em] text-[#94B8F0]">01 · Kurumsal web</p>
                <h3 className="font-display relative mt-3 text-4xl leading-tight text-white sm:text-[44px]">
                  Kurumsal web siteleri
                </h3>
                <p className="relative mt-4 max-w-md flex-1 text-[15px] leading-8 text-white/55">
                  Şirketinizin itibarını yansıtan, hızlı, güvenli ve aramalarda öne çıkan özel tasarım web siteleri. Tasarımdan yayına tek elden.
                </p>
                <div className="relative mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white/85 group-hover:text-white">
                  Web hizmetlerini inceleyin
                  <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </Link>
            </Reveal>
            <Reveal delay={120}>
              <Link href="/solutions" className="card-premium group relative flex h-full flex-col overflow-hidden rounded-[32px] p-9 sm:p-11">
                <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#D4A017]/25 blur-[90px]" />
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4A017]/30 bg-[#D4A017]/12 text-[#F0CC6A]">
                  <Code2 size={24} />
                </div>
                <p className="relative mt-8 text-[11.5px] font-semibold uppercase tracking-[0.24em] text-[#F0CC6A]">02 · Özel yazılım</p>
                <h3 className="font-display relative mt-3 text-4xl leading-tight text-white sm:text-[44px]">
                  Sektöre özel yazılımlar
                </h3>
                <p className="relative mt-4 max-w-md flex-1 text-[15px] leading-8 text-white/55">
                  DoktorPlan, Stok Panel, SalonPro.io ve daha fazlası. Randevudan stoğa, kasadan raporlamaya hazır bulut platformları.
                </p>
                <div className="relative mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white/85 group-hover:text-white">
                  Tüm ürünleri keşfedin
                  <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Flagship products ── */}
      <section id="urunler" className="relative border-t border-white/[0.06] bg-white/[0.012] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl space-y-28 px-6 lg:space-y-40 lg:px-8">
          <SectionHeading
            eyebrow="Öne çıkan yazılımlar"
            title="İşinizi yöneten,"
            accent="işinizi büyüten paneller."
            description="Kurulum gerektirmeyen bulut yazılımlarımız, ekibinizin günlük işini hızlandırır ve size net bir kontrol sağlar."
          />
          <FeatureProduct
            p={doktorplan}
            mockup={<ClinicMockup />}
            points={[
              "Hastalarınız online randevu alsın, boş slotlar otomatik dolsun",
              "WhatsApp / SMS hatırlatmalarla randevu kaçırmaları azaltın",
              "Hasta kartı, kasa ve ödeme takibi tek ekranda",
              "Dakikalar içinde kurulum, 7 gün ücretsiz deneme",
            ]}
          />
          <FeatureProduct
            p={stokpanel}
            reverse
            mockup={<StockMockup />}
            points={[
              "Barkodla hızlı giriş-çıkış, anlık stok seviyeleri",
              "Kritik stok uyarılarıyla tükenmeden sipariş verin",
              "Çoklu depo ve tedarikçi yönetimi",
              "Excel ile içe/dışa aktarma, detaylı raporlar",
            ]}
          />
        </div>
      </section>

      {/* ── Other products ── */}
      <section className="py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Ürün ailesi" title="Her sektör için" accent="özel platformlar." center />
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {others.map((p, i) => (
              <Reveal key={p.id} delay={i * 80} className="flex">
                <SecondaryProduct p={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Web process ── */}
      <section className="border-t border-white/[0.06] bg-white/[0.012] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Kurumsal web süreci"
              title="Fikirden yayına,"
              accent="dört net adım."
            />
            <Reveal>
              <GhostButton href="/web-tasarim">Web hizmetlerinin detayı</GhostButton>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-[28px] border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-4">
            {webSteps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="group bg-[#07080d] p-8 transition-colors hover:bg-[#0b0c13]">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D4A017]/25 bg-[#D4A017]/10 text-[#D4A017]">
                      <Icon size={20} />
                    </div>
                    <span className="font-display text-3xl text-white/15">0{i + 1}</span>
                  </div>
                  <h3 className="font-display mt-8 text-2xl text-white">{s.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/50">{s.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Strengths ── */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            center
            eyebrow="Neden Marssoft?"
            title="Detaylarda"
            accent="premium kalite."
            description="Güzel görünen kadar iyi çalışan dijital ürünler üretiriz."
          />
          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {strengths.map((f, i) => {
              const Icon = f.icon;
              return (
                <Reveal key={f.title} delay={(i % 3) * 90}>
                  <div className="card-premium h-full rounded-3xl p-7">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4A017]/25 bg-[#D4A017]/10 text-[#D4A017]">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-display mt-6 text-[22px] text-white">{f.title}</h3>
                    <p className="mt-2.5 text-sm leading-7 text-white/50">{f.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="grain relative overflow-hidden rounded-[40px] border border-[#D4A017]/25 bg-gradient-to-br from-[#17141f] via-[#0b0b14] to-[#0a1224] p-10 shadow-[0_40px_120px_rgba(0,0,0,0.5)] sm:p-16">
              <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#D4A017]/25 blur-[110px]" />
              <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#2B5EC8]/25 blur-[110px]" />
              <div className="relative grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
                <div>
                  <Eyebrow>Hazır mısınız?</Eyebrow>
                  <h2 className="font-display mt-6 text-4xl leading-[1.06] tracking-[-0.02em] text-white sm:text-6xl">
                    Web siteniz ya da yazılımınız için{" "}
                    <span className="gold-text italic">konuşalım.</span>
                  </h2>
                  <p className="mt-6 max-w-xl text-[15px] leading-8 text-white/55">
                    İhtiyacınızı dinleyelim, size özel bir yol haritası ve net bir teklif hazırlayalım. İlk görüşme ücretsiz.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <GoldButton href="/contact">Ücretsiz görüşme alın</GoldButton>
                  <GhostButton href="/pricing">Fiyatlandırmayı görün</GhostButton>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
