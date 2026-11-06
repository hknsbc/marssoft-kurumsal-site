import { Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import FaqAccordion from "@/components/FaqAccordion";
import { GhostButton, GoldButton, PageHero, SectionHeading } from "@/components/site/ui";

const plans = [
  {
    name: "Başlangıç",
    desc: "1 şube, temel özellikler ile başlamak isteyenler için.",
    features: ["1 kullanıcı hesabı", "Temel randevu yönetimi", "Müşteri kartı (maks. 500)", "Aylık raporlar", "E-posta destek"],
    popular: false,
  },
  {
    name: "Profesyonel",
    desc: "Büyüyen işletmeler için tüm özellikler.",
    features: [
      "5 kullanıcı hesabı",
      "Sınırsız randevu",
      "Sınırsız müşteri kartı",
      "WhatsApp entegrasyonu",
      "Gelişmiş raporlar & analitik",
      "Stok yönetimi",
      "Öncelikli destek",
    ],
    popular: true,
  },
  {
    name: "Kurumsal",
    desc: "Çok şubeli ve özel ihtiyaçlı işletmeler için.",
    features: [
      "Sınırsız kullanıcı",
      "Çoklu şube yönetimi",
      "API erişimi",
      "Özel entegrasyonlar",
      "SLA garantisi",
      "Özel onboarding",
      "7/24 destek",
    ],
    popular: false,
  },
];

const faqs = [
  { q: "Kurumsal web sitesi fiyatları nasıl belirleniyor?", a: "Sayfa sayısı, istenen özellikler ve entegrasyonlara göre size özel teklif hazırlıyoruz. İlk görüşme ve teklif ücretsizdir." },
  { q: "Ücretsiz deneme var mı?", a: "Evet. Yazılım ürünlerimizde ücretsiz deneme sunuyoruz. Kredi kartı gerekmez." },
  { q: "Hangi ürünler için geçerli?", a: "DoktorPlan, Stok Panel, SalonPro.io, Vet Panel, Pet Panel ve Marine Panel ürünlerinin her birinin ayrı fiyatlandırması vardır. Bize ulaşarak ürüne ve kullanım ölçeğinize özel teklif alabilirsiniz." },
  { q: "İptal etmek kolay mı?", a: "İstediğiniz zaman, herhangi bir ceza ödemeden aboneliğinizi iptal edebilirsiniz." },
  { q: "Verilerimi taşıyabilir miyim?", a: "Evet. Mevcut verilerinizi Excel veya CSV formatında sisteme aktarmanıza yardımcı oluyoruz." },
];

export const metadata = {
  title: "Fiyatlandırma",
  description:
    "Marssoft yazılımları ve kurumsal web siteleri için esnek fiyatlandırma. DoktorPlan, Stok Panel, SalonPro.io ve web tasarım için özel teklif alın.",
  alternates: { canonical: "https://marssoft.com.tr/pricing" },
  openGraph: {
    title: "Fiyatlandırma | Marssoft",
    description: "İşletmenize özel fiyat teklifi için bizimle iletişime geçin.",
    url: "https://marssoft.com.tr/pricing",
  },
};

export default function Pricing() {
  return (
    <div className="bg-[#05060a] text-white">
      <PageHero
        eyebrow="Fiyatlandırma"
        title="İhtiyacınıza özel"
        accent="fiyatlandırma."
        description="Yazılım planınızı seçin ya da web sitesi projenizi anlatın; size özel net bir teklif hazırlayalım."
      />

      <section className="py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading center eyebrow="Yazılım planları" title="Büyüklüğünüze uygun" accent="planlar." />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {plans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 90} className="flex">
                <div
                  className={`card-premium relative flex w-full flex-col rounded-[28px] p-8 ${
                    plan.popular ? "!border-[#D4A017]/50 shadow-[0_30px_90px_rgba(212,160,23,0.12)]" : ""
                  }`}
                >
                  {plan.popular && (
                    <span className="mb-5 self-start rounded-full border border-[#D4A017]/40 bg-[#D4A017]/12 px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-[#F0CC6A]">
                      En popüler
                    </span>
                  )}
                  <h3 className="font-display text-3xl text-white">{plan.name}</h3>
                  <p className="mt-2 text-[13.5px] leading-6 text-white/50">{plan.desc}</p>
                  <div className="my-6 border-y border-white/[0.08] py-5">
                    <span className="font-display gold-text text-2xl italic">Fiyat alınız</span>
                  </div>
                  <ul className="flex-1 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-[14px] text-white/70">
                        <Check size={15} className="mt-0.5 shrink-0 text-[#D4A017]" strokeWidth={3} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    {plan.popular ? (
                      <GoldButton href="/contact">Fiyat alın</GoldButton>
                    ) : (
                      <GhostButton href="/contact">Fiyat alın</GhostButton>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.06] bg-white/[0.012] py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Reveal>
            <div className="card-premium flex flex-col items-start justify-between gap-6 rounded-[28px] p-8 sm:flex-row sm:items-center sm:p-10">
              <div>
                <p className="text-[11.5px] font-semibold uppercase tracking-[0.24em] text-[#94B8F0]">Kurumsal web sitesi</p>
                <h3 className="font-display mt-2 text-3xl text-white">Projeye özel teklif</h3>
                <p className="mt-2 max-w-md text-[14px] leading-7 text-white/50">
                  Kapsamı birlikte belirleyip net fiyat ve takvim sunuyoruz.
                </p>
              </div>
              <GoldButton href="/contact">Teklif isteyin</GoldButton>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <SectionHeading center eyebrow="SSS" title="Sık sorulan" accent="sorular." />
          <Reveal className="mt-12">
            <FaqAccordion faqs={faqs} />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
