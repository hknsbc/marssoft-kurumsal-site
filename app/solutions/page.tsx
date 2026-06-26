import Link from "next/link";

const products = [
  {
    id: "salonpro",
    icon: "💇",
    iconBg: "bg-[rgba(27,61,128,0.22)]",
    name: "SalonPro.io",
    tagline: "Güzellik & Kuaför Yönetim Platformu",
    desc: "Güzellik salonu, kuaför ve estetik merkezleri için AI destekli randevu ve kapsamlı yönetim platformu.",
    features: [
      "Online randevu & takvim yönetimi",
      "WhatsApp otomatik hatırlatma",
      "Müşteri kartı & geçmiş takibi",
      "Personel yönetimi & performans",
      "Gelir & hizmet raporları",
      "Sadakat programı modülü",
      "Online ödeme entegrasyonu",
      "Çoklu şube yönetimi",
    ],
    badge: "En Popüler",
    color: "rgba(27,61,128,0.18)",
    borderHover: "hover:border-[rgba(212,160,23,0.4)]",
  },
  {
    id: "Vet Panel",
    icon: "🐾",
    iconBg: "bg-[rgba(29,158,117,0.2)]",
    name: "Vet Panel",
    tagline: "Veteriner Klinik Yönetim Sistemi",
    desc: "Veteriner klinikleri için kapsamlı dijital yönetim çözümü.",
    features: [
      "Hasta kartı & tıbbi geçmiş",
      "Randevu ve hatırlatma sistemi",
      "İlaç & stok yönetimi",
      "Petshop satış & kasa modülü",
      "Aşı takvimi & bildirimler",
      "Sahip iletişim portali",
      "Fatura & muhasebe entegrasyonu",
      "Çoklu klinik desteği",
    ],
    color: "rgba(29,158,117,0.1)",
    borderHover: "hover:border-[rgba(29,158,117,0.3)]",
  },
  {
    id: "petpanel",
    icon: "🐶",
    iconBg: "bg-[rgba(99,179,237,0.2)]",
    name: "Pet Panel",
    tagline: "Petshop & Pet Market Yönetim Sistemi",
    desc: "Petshoplar ve pet marketler için satış, stok, müşteri ve randevu yönetimi.",
    features: [
      "Ürün & stok yönetimi",
      "Kasa & satış modülü",
      "Müşteri & evcil hayvan kaydı",
      "Grooming randevu takibi",
      "Tedarikçi & sipariş yönetimi",
      "Sadakat kartı & kampanya sistemi",
      "Fatura & e-arşiv entegrasyonu",
      "Anlık stok uyarıları",
    ],
    color: "rgba(99,179,237,0.1)",
    borderHover: "hover:border-[rgba(99,179,237,0.3)]",
  },
  {
    id: "marinepanel",
    icon: "⚓",
    iconBg: "bg-[rgba(30,120,200,0.2)]",
    name: "Marine Panel",
    tagline: "Marina & Tekne Yönetim Sistemi",
    desc: "Marinalar ve tekne kiralama işletmeleri için kapsamlı yönetim ve rezervasyon platformu.",
    features: [
      "Tekne & liman yeri yönetimi",
      "Rezervasyon & kiralama takibi",
      "Müşteri & üyelik sistemi",
      "Bakım & servis kayıtları",
      "Yakıt & hizmet faturalandırma",
      "Online ön rezervasyon",
      "Finansal raporlar",
      "Çoklu marina desteği",
    ],
    color: "rgba(30,120,200,0.1)",
    borderHover: "hover:border-[rgba(30,120,200,0.3)]",
  },
  {
    id: "stokpanel",
    icon: "📦",
    iconBg: "bg-[rgba(216,90,48,0.2)]",
    name: "Stok Panel",
    tagline: "KOBİ Stok & Envanter Yönetimi",
    desc: "Küçük ve orta ölçekli işletmeler için basit ama güçlü stok yönetim sistemi.",
    features: [
      "Barkod ile ürün takibi",
      "Giriş / çıkış hareketleri",
      "Anlık stok seviyeleri",
      "Kritik stok uyarıları",
      "Tedarikçi yönetimi",
      "Detaylı raporlar & analizler",
      "Excel içe/dışa aktarma",
      "Çoklu depo desteği",
    ],
    color: "rgba(216,90,48,0.1)",
    borderHover: "hover:border-[rgba(216,90,48,0.3)]",
  },
];

const whyUs = [
  { icon: "☁️", title: "Bulut Tabanlı", desc: "Kurulum yok, güncelleme yok. Her cihazdan erişin." },
  { icon: "🔒", title: "Güvenli Altyapı", desc: "Verileriniz SSL şifreleme ve otomatik yedekleme ile korunur." },
  { icon: "🌍", title: "Global Platform", desc: "Çok dilli arayüz, uluslararası iş modellerine tam uyumlu." },
  { icon: "💬", title: "7/24 Destek", desc: "WhatsApp ve email ile dünya genelinde her an yanınızdayız." },
  { icon: "⚡", title: "Hızlı Kurulum", desc: "Dakikalar içinde sisteme girin, aynı gün kullanmaya başlayın." },
  { icon: "💳", title: "Esnek Fiyat", desc: "İşletme büyüklüğünüze göre ölçeklenen aylık planlar." },
];

export const metadata = {
  title: "Ürünlerimiz",
  description: "SalonPro.io (kuaför & güzellik salonu), Vet Panel (veteriner kliniği), Pet Panel (petshop), Marine Panel (marina) ve Stok Panel (stok yönetimi) — tüm KOBİ yazılım çözümlerimizi keşfedin.",
  keywords: ["SalonPro", "Vet Panel", "Pet Panel", "Marine Panel", "Stok Panel", "güzellik salonu yazılımı", "veteriner yazılımı", "petshop yazılımı", "marina yazılımı", "stok takip"],
  alternates: { canonical: "https://marssoft.com.tr/solutions" },
  openGraph: {
    title: "Ürünlerimiz | Marssoft",
    description: "SalonPro.io, Vet Panel, Pet Panel, Marine Panel ve Stok Panel — işletmenize özel SaaS çözümler.",
    url: "https://marssoft.com.tr/solutions",
  },
};

export default function Solutions() {
  return (
    <div className="bg-[#0a0a1a] text-white">
      {/* Hero */}
      <section className="border-b border-[rgba(255,255,255,0.08)] px-6 lg:px-8 py-16"
        style={{ background: "linear-gradient(135deg, #0a0a1a 0%, #1a1040 50%, #0d1a30 100%)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-[12px] text-[#D4A017] uppercase tracking-[2px] mb-3">Ürünlerimiz</div>
          <h1 className="text-[36px] md:text-[42px] font-medium text-white leading-[1.2] mb-4">
            Sektörünüze Özel <span className="text-[#D4A017]">SaaS Çözümleri</span>
          </h1>
          <p className="text-[16px] text-white/60 max-w-xl leading-[1.7]">
            Vet Panel, Pet Panel, güzellik salonu ve stok yönetimi için bulut tabanlı, kullanıma hazır platformlar.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto space-y-6">
          {products.map((p) => (
            <div
              key={p.id}
              id={p.id}
              className={`bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] ${p.borderHover} rounded-xl p-8 transition-colors`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                  <div className="flex items-start gap-4 mb-5">
                    <div className={`w-12 h-12 ${p.iconBg} rounded-xl flex items-center justify-center text-[22px] flex-shrink-0`}>
                      {p.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[18px] font-medium text-white">{p.name}</span>
                        {"badge" in p && (
                          <span className="text-[11px] bg-[rgba(184,134,11,0.12)] border border-[rgba(43,94,200,0.3)] text-[#F0CC6A] px-2 py-0.5 rounded-full">
                            {p.badge}
                          </span>
                        )}
                      </div>
                      <div className="text-[13px] text-[#D4A017]">{p.tagline}</div>
                    </div>
                  </div>
                  <p className="text-[14px] text-white/60 leading-[1.7] mb-6">{p.desc}</p>
                  <Link
                    href="/contact"
                    className="inline-block bg-[#B8860B] hover:bg-[#9A7209] text-white px-5 py-2.5 rounded-lg text-[13px] font-medium transition-colors"
                  >
                    Ücretsiz Dene →
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {p.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-[13px] text-white/60">
                      <span className="w-1 h-1 rounded-full bg-[#D4A017] flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section className="border-t border-[rgba(255,255,255,0.06)] px-6 lg:px-8 py-16 bg-[rgba(255,255,255,0.01)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-[12px] text-[#D4A017] uppercase tracking-[2px] mb-2">Neden Marssoft?</div>
          <div className="text-[28px] font-medium text-white mb-10">İşletmeniz İçin Güvenilir Tercih</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyUs.map((w) => (
              <div key={w.title} className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-xl p-5 hover:border-[rgba(43,94,200,0.3)] transition-colors">
                <div className="text-[24px] mb-3">{w.icon}</div>
                <div className="text-[15px] font-medium text-white mb-1.5">{w.title}</div>
                <div className="text-[13px] text-white/50 leading-[1.6]">{w.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[rgba(255,255,255,0.08)] px-6 lg:px-8 py-16 text-center">
        <div className="max-w-lg mx-auto">
          <h2 className="text-[28px] font-medium text-white mb-3">Hangi ürün size uygun?</h2>
          <p className="text-[15px] text-white/50 mb-7">Uzmanlarımız doğru ürünü seçmenize yardımcı olsun.</p>
          <Link href="/contact" className="bg-[#B8860B] hover:bg-[#9A7209] text-white px-6 py-3 rounded-lg text-[14px] font-medium transition-colors inline-block">
            Ücretsiz Danışın
          </Link>
        </div>
      </section>
    </div>
  );
}



