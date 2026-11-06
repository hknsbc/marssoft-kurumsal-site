import Reveal from "@/components/Reveal";
import { GoldButton, PageHero, SectionHeading } from "@/components/site/ui";

const references = [
  { name: "Gül Güzellik Salonu", category: "Güzellik & Kuaför", product: "SalonPro.io", city: "İstanbul", text: "SalonPro ile randevu yönetimimiz tamamen değişti. WhatsApp üzerinden otomatik hatırlatma harika!", author: "Ayşe K.", color: "#D4A017" },
  { name: "PatiVet Kliniği", category: "Veteriner", product: "Vet Panel", city: "Ankara", text: "Vet Panel sayesinde hasta takibimiz çok kolaylaştı. Kurulum hızlıydı, destek mükemmel.", author: "Dr. Mehmet S.", color: "#34c38f" },
  { name: "Pati Pet Panel", category: "Petshop", product: "Stok Panel", city: "İzmir", text: "Stok Panel yazılımı ile artık hiçbir ürünümüz kaybolmuyor. Raporlar çok detaylı.", author: "Fatih B.", color: "#f0814f" },
  { name: "Bella Hair Studio", category: "Kuaför", product: "SalonPro.io", city: "Bursa", text: "Çok şube yönetimi artık çok kolay. Her sabah tüm şubelerin durumunu tek ekrandan görüyorum.", author: "Selin Y.", color: "#D4A017" },
  { name: "HayatVet", category: "Veteriner", product: "Vet Panel", city: "Antalya", text: "Aşı takvimi hatırlatmaları sayesinde müşteri kaybımız neredeyse sıfıra indi.", author: "Dr. Zeynep A.", color: "#34c38f" },
  { name: "Depo Market", category: "Perakende", product: "Stok Panel", city: "Konya", text: "Barkod ile giriş/çıkış takibi çok pratik. Kritik stok uyarıları sayesinde hiç stok tükenmemesi yaşamıyoruz.", author: "Hasan D.", color: "#f0814f" },
];

export const metadata = {
  title: "Referanslar",
  description: "Marssoft yazılımlarını kullanan işletmelerin deneyimlerini inceleyin.",
  alternates: { canonical: "https://marssoft.com.tr/brands" },
  openGraph: {
    title: "Referanslar | Marssoft",
    description: "Marssoft ile dijital dönüşümünü tamamlayan işletmeler.",
    url: "https://marssoft.com.tr/brands",
  },
};

export default function Brands() {
  return (
    <div className="bg-[#05060a] text-white">
      <PageHero
        eyebrow="Referanslar"
        title="Memnun"
        accent="müşteriler."
        description="Marssoft yazılımlarıyla iş süreçlerini dijitalleştiren işletmelerden geri bildirimler."
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Müşterilerimiz" title="Onlar denedi," accent="memnun kaldı." />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {references.map((r, i) => (
              <Reveal key={r.name} delay={(i % 3) * 90}>
                <figure className="card-premium h-full rounded-3xl p-7">
                  <span className="font-display text-5xl leading-none" style={{ color: r.color }}>“</span>
                  <blockquote className="mt-2 text-[14.5px] italic leading-7 text-white/65">{r.text}</blockquote>
                  <figcaption className="mt-6 border-t border-white/[0.08] pt-4">
                    <p className="text-[14px] font-semibold text-white">{r.name}</p>
                    <p className="mt-0.5 text-[12px]" style={{ color: r.color }}>
                      {r.product} · {r.city}
                    </p>
                    <p className="mt-0.5 text-[12px] text-white/40">
                      {r.author}, {r.category}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 text-center">
        <Reveal className="mx-auto max-w-xl">
          <h2 className="font-display text-4xl text-white sm:text-5xl">
            Siz de <span className="gold-text italic">aramıza katılın.</span>
          </h2>
          <p className="mb-8 mt-4 text-[15px] text-white/50">Ücretsiz deneyin veya web siteniz için teklif alın.</p>
          <div className="flex justify-center">
            <GoldButton href="/contact">Hemen başlayın</GoldButton>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
