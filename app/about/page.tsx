import Link from "next/link";

const features = [
  "Bulut tabanlı & güvenli altyapı",
  "7/24 teknik destek",
  "Kolay kurulum, hızlı başlangıç",
  "Çok dilli arayüz & global destek",
  "KVKK uyumlu veri yönetimi",
  "Düzenli güncellemeler & yenilikler",
];

const metrics = [
  { label: "Müşteri Memnuniyeti", value: "96%", width: "96%" },
  { label: "Sistem Uptime", value: "99.9%", width: "99%" },
  { label: "Destek Yanıt Süresi", value: "<2 saat", width: "85%" },
  { label: "Müşteri Tutma Oranı", value: "94%", width: "94%" },
];


export const metadata = {
  title: "Hakkımızda",
  description: "Marssoft, KOBİ'lerin dijital dönüşümünü hızlandırmak için bulut tabanlı SaaS yazılımlar geliştiren global bir yazılım şirketidir. Misyonumuz, her ölçekteki işletmeye erişilebilir teknoloji sunmaktır.",
  alternates: { canonical: "https://marssoft.com.tr/about" },
  openGraph: {
    title: "Hakkımızda | Marssoft",
    description: "Marssoft ekibi ve misyonumuz hakkında bilgi edinin.",
    url: "https://marssoft.com.tr/about",
  },
};

export default function About() {
  return (
    <div className="bg-[#0a0a1a] text-white">
      {/* Hero */}
      <section className="border-b border-[rgba(255,255,255,0.08)] px-6 lg:px-8 py-16"
        style={{ background: "linear-gradient(135deg, #0a0a1a 0%, #1a1040 50%, #0d1a30 100%)" }}>
        <div className="max-w-6xl mx-auto max-w-[600px]">
          <div className="text-[12px] text-[#D4A017] uppercase tracking-[2px] mb-3">Hakkımızda</div>
          <h1 className="text-[36px] md:text-[28px] md:text-[42px] font-medium text-white leading-[1.2] mb-4">
            KOBİ&apos;lerin Dijital Dönüşüm <span className="text-[#D4A017]">Ortağı</span>
          </h1>
          <p className="text-[16px] text-white/60 leading-[1.7]">
            2020&apos;den bu yana KOBİ&apos;ler için bulut tabanlı SaaS yazılımlar geliştiriyoruz. Amacımız teknolojiyi sınır tanımadan herkes için erişilebilir kılmak.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[26px] font-medium text-white leading-[1.3] mb-4">
              KOBİ&apos;lerin İşini Kolaylaştıran Bulut Tabanlı Yazılımlar
            </h2>
            <p className="text-[15px] text-white/60 leading-[1.7] mb-4">
              Marssoft olarak global ölçekte faaliyet gösteren bir SaaS yazılım şirketi olarak, küçük ve orta ölçekli işletmelere sınır tanımayan dijital çözümler sunuyoruz.
            </p>
            <p className="text-[15px] text-white/60 leading-[1.7] mb-6">
              Veteriner klinikleri, güzellik salonları ve perakende işletmeler için sektöre özgü, kullanımı kolay yazılımlar üretiyoruz. Her ürün, gerçek kullanıcı geri bildirimleriyle sürekli gelişiyor.
            </p>
            <div className="space-y-2.5">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-2.5 text-[14px] text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017] flex-shrink-0" />
                  {f}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[rgba(27,61,128,0.1)] border border-[rgba(43,94,200,0.2)] rounded-2xl p-8 space-y-6">
            {metrics.map((m) => (
              <div key={m.label}>
                <div className="flex justify-between text-[12px] text-white/50 mb-2">
                  <span>{m.label}</span>
                  <span>{m.value}</span>
                </div>
                <div className="h-1.5 bg-[rgba(255,255,255,0.06)] rounded-full">
                  <div className="h-1.5 rounded-full" style={{ width: m.width, background: "linear-gradient(90deg, #B8860B, #D4A017)" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { v: "500+", l: "Global İşletme" },
            { v: "15+", l: "Ülke" },
            { v: "2020", l: "Kuruluş Yılı" },
            { v: "7/24", l: "Teknik Destek" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-[32px] font-medium text-[#D4A017] mb-1">{s.v}</div>
              <div className="text-[12px] text-white/50">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[rgba(255,255,255,0.08)] px-6 lg:px-8 py-14 text-center">
        <div className="max-w-lg mx-auto">
          <h2 className="text-[26px] font-medium text-white mb-3">Bizimle çalışmak ister misiniz?</h2>
          <p className="text-[15px] text-white/50 mb-7">Ürünlerimizi deneyin veya özel çözüm için bize ulaşın.</p>
          <Link href="/contact" className="inline-block bg-[#B8860B] hover:bg-[#9A7209] text-white px-6 py-3 rounded-lg text-[14px] font-medium transition-colors">
            İletişime Geç
          </Link>
        </div>
      </section>
    </div>
  );
}



