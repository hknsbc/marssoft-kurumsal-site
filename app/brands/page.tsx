import Link from "next/link";

const references = [
  {
    name: "Gül Güzellik Salonu",
    category: "Güzellik & Kuaför",
    product: "SalonPro.io",
    city: "İstanbul",
    text: "SalonPro ile randevu yönetimimiz tamamen değişti. WhatsApp üzerinden otomatik hatırlatma harika!",
    author: "Ayşe K.",
    icon: "💇",
    iconBg: "bg-[rgba(27,61,128,0.22)]",
  },
  {
    name: "PatiVet Kliniği",
    category: "VET PANEL",
    product: "Vet Panel",
    city: "Ankara",
    text: "Vet Panel sayesinde hasta takibimiz çok kolaylaştı. Kurulum hızlıydı, destek mükemmel.",
    author: "Dr. Mehmet S.",
    icon: "🐾",
    iconBg: "bg-[rgba(29,158,117,0.2)]",
  },
  {
    name: "Pati Pet Panel",
    category: "Pet Panel",
    product: "Stok Panel",
    city: "İzmir",
    text: "Stok Panel yazılımı ile artık hiçbir ürünümüz kaybolmuyor. Raporlar çok detaylı.",
    author: "Fatih B.",
    icon: "📦",
    iconBg: "bg-[rgba(216,90,48,0.2)]",
  },
  {
    name: "Bella Hair Studio",
    category: "Kuaför",
    product: "SalonPro.io",
    city: "Bursa",
    text: "Çok şube yönetimi artık çok kolay. Her sabah tüm şubelerin durumunu tek ekrandan görüyorum.",
    author: "Selin Y.",
    icon: "💇",
    iconBg: "bg-[rgba(27,61,128,0.22)]",
  },
  {
    name: "HayatVet",
    category: "VET PANEL Kliniği",
    product: "Vet Panel",
    city: "Antalya",
    text: "Aşı takvimi hatırlatmaları sayesinde müşteri kaybımız neredeyse sıfıra indi.",
    author: "Dr. Zeynep A.",
    icon: "🐾",
    iconBg: "bg-[rgba(29,158,117,0.2)]",
  },
  {
    name: "Depo Market",
    category: "Perakende",
    product: "Stok Panel",
    city: "Konya",
    text: "Barkod ile giriş/çıkış takibi çok pratik. Kritik stok uyarıları sayesinde hiç stok tükenmemesi yaşamıyoruz.",
    author: "Hasan D.",
    icon: "📦",
    iconBg: "bg-[rgba(216,90,48,0.2)]",
  },
];

const stats = [
  { value: "500+", label: "Aktif İşletme" },
  { value: "15+", label: "Şehir" },
  { value: "96%", label: "Memnuniyet" },
  { value: "7/24", label: "Destek" },
];

export const metadata = {
  title: "Referanslar",
  description: "Dünyanın dört bir yanından 500'den fazla işletme Marssoft yazılımlarına güveniyor. Müşteri başarı hikayelerini ve referanslarımızı inceleyin.",
  alternates: { canonical: "https://marssoft.com.tr/brands" },
  openGraph: {
    title: "Referanslar | Marssoft",
    description: "500+ global işletme Marssoft ile dijital dönüşümünü tamamladı.",
    url: "https://marssoft.com.tr/brands",
  },
};

export default function Brands() {
  return (
    <div className="bg-[#0a0a1a] text-white">
      {/* Hero */}
      <section className="border-b border-[rgba(255,255,255,0.08)] px-6 lg:px-8 py-16"
        style={{ background: "linear-gradient(135deg, #0a0a1a 0%, #1a1040 50%, #0d1a30 100%)" }}>
        <div className="max-w-6xl mx-auto max-w-[560px]">
          <div className="text-[12px] text-[#D4A017] uppercase tracking-[2px] mb-3">Referanslar</div>
          <h1 className="text-[36px] md:text-[42px] font-medium text-white leading-[1.2] mb-4">
            Dünyanın Dört Bir Yanından <span className="text-[#D4A017]">Memnun Müşteriler</span>
          </h1>
          <p className="text-[16px] text-white/60 leading-[1.7]">
            500&apos;den fazla işletme MarsSoft yazılımlarıyla iş süreçlerini dijitalleştirdi.
          </p>
        </div>
      </section>

      {/* Stats */}
      <div className="bg-[rgba(255,255,255,0.03)] border-b border-[rgba(255,255,255,0.08)]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-[28px] font-medium text-[#D4A017]">{s.value}</div>
              <div className="text-[12px] text-white/50 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* References */}
      <section className="px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-[12px] text-[#D4A017] uppercase tracking-[2px] mb-2">Müşterilerimiz</div>
          <div className="text-[28px] font-medium text-white mb-10">Onlar Denedi, Memnun Kaldı</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {references.map((r, i) => (
              <div key={i} className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(43,94,200,0.3)] rounded-xl p-6 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-9 h-9 ${r.iconBg} rounded-lg flex items-center justify-center text-[16px]`}>
                    {r.icon}
                  </div>
                  <div>
                    <div className="text-[14px] font-medium text-white">{r.name}</div>
                    <div className="text-[12px] text-[#D4A017]">{r.product} · {r.city}</div>
                  </div>
                </div>
                <p className="text-[13px] text-white/60 leading-[1.7] mb-3 italic">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="text-[12px] text-[#D4A017]">— {r.author}, {r.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[rgba(255,255,255,0.08)] px-6 lg:px-8 py-14 text-center">
        <div className="max-w-lg mx-auto">
          <h2 className="text-[26px] font-medium text-white mb-3">Siz de bu listeye katılın</h2>
          <p className="text-[15px] text-white/50 mb-7">14 gün ücretsiz deneyin. Kredi kartı gerekmez.</p>
          <Link href="/contact" className="inline-block bg-[#B8860B] hover:bg-[#9A7209] text-white px-6 py-3 rounded-lg text-[14px] font-medium transition-colors">
            Ücretsiz Başlayın
          </Link>
        </div>
      </section>
    </div>
  );
}



