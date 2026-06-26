import Link from "next/link";

const plans = [
  {
    name: "Başlangıç",
    desc: "1 şube, temel özellikler ile başlamak isteyenler için.",
    features: [
      "1 kullanıcı hesabı",
      "Temel randevu yönetimi",
      "Müşteri kartı (maks. 500)",
      "Aylık raporlar",
      "Email destek",
    ],
    cta: "Fiyat Alın",
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
    cta: "Fiyat Alın",
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
    cta: "Fiyat Alın",
    popular: false,
  },
];

const faqs = [
  { q: "Ücretsiz deneme var mı?", a: "Evet. Tüm planlarda 14 gün ücretsiz deneme sunuyoruz. Kredi kartı gerekmez." },
  { q: "Hangi ürünler için geçerli?", a: "SalonPro.io, Vet Panel ve Stok Panel ürünlerinin her birinin ayrı fiyatlandırması vardır. Bize ulaşarak ürüne ve kullanım ölçeğinize özel teklif alabilirsiniz." },
  { q: "İptal etmek kolay mı?", a: "İstediğiniz zaman, herhangi bir ceza ödemeden aboneliğinizi iptal edebilirsiniz." },
  { q: "Verilerimi taşıyabilir miyim?", a: "Evet. Mevcut verilerinizi Excel veya CSV formatında sisteme aktarmanıza yardımcı oluyoruz." },
];

export const metadata = {
  title: "Fiyatlandırma",
  description: "Marssoft SaaS yazılımları için esnek fiyatlandırma planları. SalonPro.io, Vet Panel, Pet Panel, Marine Panel ve Stok Panel için özel fiyat teklifi alın. 14 gün ücretsiz deneyin.",
  alternates: { canonical: "https://marssoft.com.tr/pricing" },
  openGraph: {
    title: "Fiyatlandırma | Marssoft",
    description: "İşletmenize özel fiyat teklifi için bizimle iletişime geçin. 14 gün ücretsiz deneme.",
    url: "https://marssoft.com.tr/pricing",
  },
};

export default function Pricing() {
  return (
    <div className="bg-[#0a0a1a] text-white">
      {/* Hero */}
      <section className="border-b border-[rgba(255,255,255,0.08)] px-6 lg:px-8 py-16 text-center"
        style={{ background: "linear-gradient(135deg, #0a0a1a 0%, #1a1040 50%, #0d1a30 100%)" }}>
        <div className="max-w-2xl mx-auto">
          <div className="text-[12px] text-[#D4A017] uppercase tracking-[2px] mb-3">Fiyatlandırma</div>
          <h1 className="text-[36px] md:text-[42px] font-medium text-white leading-[1.2] mb-4">
            İhtiyacınıza Özel <span className="text-[#D4A017]">Fiyatlandırma</span>
          </h1>
          <p className="text-[16px] text-white/60 leading-[1.7]">
            Planınızı seçin, iletişime geçin — size özel fiyat teklifi hazırlayalım.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="px-6 lg:px-8 py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-[rgba(255,255,255,0.03)] rounded-xl p-7 flex flex-col transition-colors ${
                plan.popular
                  ? "border border-[rgba(43,94,200,0.25)]"
                  : "border border-[rgba(255,255,255,0.08)] hover:border-[rgba(43,94,200,0.3)]"
              }`}
            >
              {plan.popular && (
                <div className="text-[11px] text-[#F0CC6A] bg-[rgba(27,61,128,0.28)] border border-[rgba(43,94,200,0.3)] px-3 py-1 rounded-full self-start mb-4 uppercase tracking-widest">
                  En Popüler
                </div>
              )}
              <h3 className="text-[18px] font-medium text-white mb-1">{plan.name}</h3>
              <p className="text-[13px] text-white/50 mb-5">{plan.desc}</p>
              <div className="mb-6 pb-6 border-b border-[rgba(255,255,255,0.08)]">
                <span className="inline-block text-[15px] font-semibold px-3 py-1.5 rounded-lg"
                  style={{ background: "rgba(27,61,128,0.18)", color: "#F0CC6A", border: "1px solid rgba(43,94,200,0.25)" }}>
                  Fiyat Alınız
                </span>
              </div>
              <ul className="space-y-2.5 flex-1 mb-7">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-[13px] text-white/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017] flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`block text-center py-2.5 rounded-lg text-[14px] font-medium transition-colors ${
                  plan.popular
                    ? "bg-[#B8860B] hover:bg-[#9A7209] text-white"
                    : "border border-[rgba(255,255,255,0.15)] hover:border-[rgba(255,255,255,0.3)] text-white"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-[rgba(255,255,255,0.06)] px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-[12px] text-[#D4A017] uppercase tracking-[2px] mb-2">SSS</div>
          <div className="text-[28px] font-medium text-white mb-10">Sık Sorulan Sorular</div>
          <div className="space-y-3">
            {faqs.map((f) => (
              <div key={f.q} className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-xl p-5 hover:border-[rgba(43,94,200,0.3)] transition-colors">
                <h3 className="text-[14px] font-medium text-white mb-2">{f.q}</h3>
                <p className="text-[13px] text-white/55 leading-[1.7]">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[rgba(255,255,255,0.08)] px-6 lg:px-8 py-14 text-center">
        <div className="max-w-lg mx-auto">
          <h2 className="text-[26px] font-medium text-white mb-3">Hâlâ kararsız mısınız?</h2>
          <p className="text-[15px] text-white/50 mb-7">Uzmanlarımız sizi arayarak doğru planı belirlemenize yardımcı olsun.</p>
          <Link href="/contact" className="inline-block bg-[#B8860B] hover:bg-[#9A7209] text-white px-6 py-3 rounded-lg text-[14px] font-medium transition-colors">
            Beni Arayın
          </Link>
        </div>
      </section>
    </div>
  );
}



