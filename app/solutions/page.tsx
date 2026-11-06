import { Check, Cloud, CreditCard, Globe2, Headphones, Lock, Zap } from "lucide-react";
import Reveal from "@/components/Reveal";
import { GhostButton, GoldButton, PageHero, SectionHeading } from "@/components/site/ui";
import { products } from "@/lib/products";

const whyUs = [
  { icon: Cloud, title: "Bulut tabanlı", desc: "Kurulum yok, güncelleme yok. Her cihazdan erişin." },
  { icon: Lock, title: "Güvenli altyapı", desc: "Verileriniz SSL şifreleme ve otomatik yedekleme ile korunur." },
  { icon: Globe2, title: "Global platform", desc: "Çok dilli arayüz, uluslararası iş modellerine uyumlu." },
  { icon: Headphones, title: "7/24 destek", desc: "WhatsApp ve e-posta ile her an yanınızdayız." },
  { icon: Zap, title: "Hızlı kurulum", desc: "Dakikalar içinde sisteme girin, aynı gün kullanmaya başlayın." },
  { icon: CreditCard, title: "Esnek fiyat", desc: "İşletme büyüklüğünüze göre ölçeklenen aylık planlar." },
];

export const metadata = {
  title: "Ürünlerimiz",
  description:
    "DoktorPlan (klinik & muayenehane), Stok Panel (stok yönetimi), SalonPro.io (kuaför & güzellik salonu), Vet Panel, Pet Panel ve Marine Panel — tüm KOBİ yazılım çözümlerimizi keşfedin.",
  keywords: ["DoktorPlan", "Stok Panel", "SalonPro", "Vet Panel", "Pet Panel", "Marine Panel", "klinik randevu yazılımı", "stok takip programı", "güzellik salonu yazılımı"],
  alternates: { canonical: "https://marssoft.com.tr/solutions" },
  openGraph: {
    title: "Ürünlerimiz | Marssoft",
    description: "DoktorPlan, Stok Panel, SalonPro.io ve daha fazlası — işletmenize özel SaaS çözümler.",
    url: "https://marssoft.com.tr/solutions",
  },
};

export default function Solutions() {
  return (
    <div className="bg-[#05060a] text-white">
      <PageHero
        eyebrow="Ürünlerimiz"
        title="Sektörünüze özel"
        accent="bulut yazılımlar."
        description="DoktorPlan, Stok Panel, SalonPro.io ve diğer platformlarımız; randevudan stoğa, kasadan raporlamaya işletmenizin tüm akışını tek panelde toplar."
      >
        <GoldButton href="/contact">Demo talep edin</GoldButton>
        <GhostButton href="/pricing">Fiyatlandırma</GhostButton>
      </PageHero>

      {/* Quick index */}
      <div className="sticky top-[68px] z-30 border-b border-white/[0.07] bg-[#05060a]/85 backdrop-blur-xl md:top-[76px]">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-6 py-3 lg:px-8">
          {products.map((p) => (
            <a
              key={p.id}
              href={`#${p.id}`}
              className="shrink-0 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[12.5px] text-white/65 transition hover:border-white/25 hover:text-white"
            >
              {p.name}
            </a>
          ))}
        </div>
      </div>

      {/* Products */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl space-y-8 px-6 lg:px-8">
          {products.map((p) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.id}>
                <article
                  id={p.id}
                  className="card-premium group relative scroll-mt-40 overflow-hidden rounded-[32px] p-8 sm:p-12"
                >
                  <div
                    className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full opacity-20 blur-[100px] transition-opacity duration-500 group-hover:opacity-40"
                    style={{ background: p.color }}
                  />
                  <div className="relative grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
                    <div>
                      <div className="flex items-center gap-4">
                        <div
                          className="flex h-14 w-14 items-center justify-center rounded-2xl border"
                          style={{ background: `${p.color}1a`, borderColor: `${p.color}40`, color: p.color }}
                        >
                          <Icon size={26} />
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
                      <h2 className="font-display mt-7 text-4xl leading-tight text-white sm:text-5xl">{p.name}</h2>
                      <p className="mt-2 text-[13px] font-semibold uppercase tracking-[0.18em]" style={{ color: p.color }}>
                        {p.tagline}
                      </p>
                      <p className="mt-5 max-w-lg text-[15px] leading-8 text-white/60">{p.description}</p>
                      <div className="mt-8 flex flex-wrap gap-3">
                        {p.external ? (
                          <GoldButton href={p.href} external>Ücretsiz deneyin</GoldButton>
                        ) : (
                          <GoldButton href="/contact">Demo talep edin</GoldButton>
                        )}
                        {p.id === "salonpro" && <GhostButton href="/salonpro">Detaylı bilgi</GhostButton>}
                      </div>
                    </div>
                    <ul className="grid content-center gap-3.5 sm:grid-cols-2">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-[14px] text-white/70">
                          <span
                            className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                            style={{ background: `${p.color}22`, color: p.color }}
                          >
                            <Check size={12} strokeWidth={3} />
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Why us */}
      <section className="border-t border-white/[0.06] bg-white/[0.012] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading center eyebrow="Neden Marssoft?" title="İşletmeniz için" accent="güvenilir tercih." />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((w, i) => {
              const Icon = w.icon;
              return (
                <Reveal key={w.title} delay={(i % 3) * 80}>
                  <div className="card-premium h-full rounded-3xl p-7">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4A017]/25 bg-[#D4A017]/10 text-[#D4A017]">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-display mt-6 text-[22px] text-white">{w.title}</h3>
                    <p className="mt-2.5 text-sm leading-7 text-white/50">{w.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center">
        <Reveal className="mx-auto max-w-xl">
          <h2 className="font-display text-4xl text-white sm:text-5xl">
            Hangi ürün <span className="gold-text italic">size uygun?</span>
          </h2>
          <p className="mb-8 mt-4 text-[15px] leading-7 text-white/50">
            Uzmanlarımız doğru ürünü seçmenize yardımcı olsun.
          </p>
          <div className="flex justify-center">
            <GoldButton href="/contact">Ücretsiz danışın</GoldButton>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
