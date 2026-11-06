import { Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import { GhostButton, GoldButton, PageHero, SectionHeading } from "@/components/site/ui";
import { company } from "@/lib/company";

const features = [
  "Bulut tabanlı & güvenli altyapı",
  "7/24 teknik destek",
  "Kolay kurulum, hızlı başlangıç",
  "Çok dilli arayüz & global destek",
  "KVKK uyumlu veri yönetimi",
  "Düzenli güncellemeler & yenilikler",
];

const facts = [
  { v: "2020", l: "Kuruluş yılı" },
  { v: "7/24", l: "Teknik destek" },
  { v: "İstanbul", l: "Merkez ofis" },
];

export const metadata = {
  title: "Hakkımızda",
  description:
    "Marssoft; kurumsal web siteleri tasarlayan ve KOBİ'ler için DoktorPlan, Stok Panel gibi bulut tabanlı yazılımlar geliştiren bir yazılım şirketidir.",
  alternates: { canonical: "https://marssoft.com.tr/about" },
  openGraph: {
    title: "Hakkımızda | Marssoft",
    description: "Marssoft ekibi ve misyonumuz hakkında bilgi edinin.",
    url: "https://marssoft.com.tr/about",
  },
};

export default function About() {
  return (
    <div className="bg-[#05060a] text-white">
      <PageHero
        eyebrow="Hakkımızda"
        title="İşletmelerin dijital"
        accent="dönüşüm ortağı."
        description="2020'den bu yana işletmeler için kurumsal web siteleri tasarlıyor ve sektöre özel bulut yazılımlar geliştiriyoruz. Amacımız teknolojiyi her ölçekteki işletme için erişilebilir kılmak."
      />

      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-start gap-16 px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Biz kimiz"
              title="Hem web siteniz hem"
              accent="yazılımınız tek ekipten."
            />
            <p className="mt-6 text-[15.5px] leading-8 text-white/60">
              Marssoft olarak küçük ve orta ölçekli işletmelere iki alanda hizmet veriyoruz: markalarını yansıtan kurumsal web siteleri ve günlük operasyonlarını yöneten sektöre özel yazılımlar.
            </p>
            <p className="mt-4 text-[15.5px] leading-8 text-white/60">
              Klinikler, güzellik salonları, veteriner ve perakende işletmeleri için kullanımı kolay ürünler üretiyoruz. Her ürün, gerçek kullanıcı geri bildirimleriyle sürekli gelişiyor.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <GoldButton href="/contact">İletişime geçin</GoldButton>
              <GhostButton href="/solutions">Ürünlerimiz</GhostButton>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="card-premium rounded-[28px] p-8 sm:p-10">
              <ul className="space-y-4">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-3.5 text-[15px] text-white/75">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#D4A017]/15 text-[#D4A017]">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-white/[0.07] bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-12 text-center sm:grid-cols-3 lg:px-8">
          {facts.map((f) => (
            <div key={f.l}>
              <p className="font-display gold-text text-4xl sm:text-5xl">{f.v}</p>
              <p className="mt-2 text-[11.5px] uppercase tracking-[0.2em] text-white/45">{f.l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-3xl text-white">Firma bilgileri</h2>
            <dl className="mt-8 grid gap-4 text-[14px] sm:grid-cols-2">
              {[
                ["Unvan", company.legalName],
                ["Adres", company.address],
                ["Vergi Dairesi / No", `${company.taxOffice} / ${company.taxNumber}`],
                ["Telefon", company.phone],
                ["E-posta", company.email],
              ].map(([k, v]) => (
                <div key={k} className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5">
                  <dt className="text-[11.5px] uppercase tracking-[0.18em] text-white/40">{k}</dt>
                  <dd className="mt-1.5 text-white/80">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
