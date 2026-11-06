import {
  Check,
  CreditCard,
  Gauge,
  LayoutDashboard,
  Palette,
  Search,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import FaqAccordion from "@/components/FaqAccordion";
import { GhostButton, GoldButton, PageHero, SectionHeading } from "@/components/site/ui";
import { BrowserMockup } from "@/components/site/mockups";

export const metadata = {
  title: "Kurumsal Web Sitesi Tasarımı",
  description:
    "Marssoft ile markanıza özel, hızlı, mobil uyumlu ve SEO'ya hazır kurumsal web sitesi. Tasarım, geliştirme, yönetim paneli ve yayın tek elden.",
  keywords: ["kurumsal web sitesi", "web tasarım", "web sitesi yaptırma", "özel web yazılım", "SEO uyumlu site", "İstanbul web tasarım"],
  alternates: { canonical: "https://marssoft.com.tr/web-tasarim" },
  openGraph: {
    title: "Kurumsal Web Sitesi Tasarımı | Marssoft",
    description: "Markanıza özel, premium kurumsal web siteleri. Ücretsiz teklif alın.",
    url: "https://marssoft.com.tr/web-tasarim",
  },
};

const services = [
  { icon: Palette, title: "Özel tasarım", description: "Hazır şablon değil; marka kimliğinize göre sıfırdan tasarlanmış arayüz." },
  { icon: Smartphone, title: "Mobil öncelikli", description: "Telefon, tablet ve masaüstünde kusursuz görünen duyarlı tasarım." },
  { icon: Search, title: "SEO altyapısı", description: "Meta yapısı, sitemap, yapılandırılmış veri ve temiz kod ile arama motoruna hazır." },
  { icon: Gauge, title: "Yüksek performans", description: "Hızlı yüklenen sayfalar, optimize görseller ve modern teknoloji yığını." },
  { icon: LayoutDashboard, title: "Yönetim paneli", description: "İçerik, blog ve sayfalarınızı kod bilmeden kendiniz güncelleyin." },
  { icon: CreditCard, title: "Ödeme & entegrasyon", description: "Online ödeme, iletişim formu, e-posta ve WhatsApp entegrasyonları." },
  { icon: ShieldCheck, title: "Güvenlik & KVKK", description: "SSL sertifikası, güvenli altyapı ve KVKK uyumlu yasal sayfalar." },
];

const included = [
  "Marka analizi ve sayfa planı",
  "Özel UI/UX tasarımı",
  "Mobil uyumlu geliştirme",
  "İletişim formu ve e-posta bildirimi",
  "Teknik SEO ve sitemap",
  "SSL ve güvenli yayın",
  "Alan adı ve yayın desteği",
  "Yayın sonrası teknik destek",
];

const faqs = [
  { q: "Web sitesi ne kadar sürede hazır olur?", a: "Kapsama göre değişir. Kurumsal tanıtım siteleri genellikle birkaç hafta içinde yayına alınır; net süreyi ilk görüşmede birlikte belirleriz." },
  { q: "Fiyat nasıl belirleniyor?", a: "Sayfa sayısı, istenen özellikler ve entegrasyonlara göre size özel teklif hazırlıyoruz. İlk görüşme ve teklif ücretsizdir." },
  { q: "Siteyi sonradan kendim güncelleyebilir miyim?", a: "Evet. İçeriklerinizi kod bilmeden yönetebileceğiniz bir yönetim paneli sunabiliyoruz." },
  { q: "Web sitesine yazılım ürünlerinizi entegre edebilir misiniz?", a: "Evet. DoktorPlan, SalonPro.io gibi ürünlerimizin online randevu akışlarını web sitenize bağlayabiliriz." },
  { q: "Yayından sonra destek veriyor musunuz?", a: "Evet. Yayın sonrası teknik destek ve bakım hizmetimiz devam eder." },
];

export default function WebTasarim() {
  return (
    <div className="bg-[#05060a] text-white">
      <PageHero
        eyebrow="Kurumsal web siteleri"
        title="Markanızı yansıtan,"
        accent="satış getiren web siteleri."
        description="Ziyaretçiyi müşteriye dönüştüren, hızlı, güvenli ve tasarımıyla fark yaratan kurumsal web siteleri. Strateji, tasarım, geliştirme ve yayın tek ekipten."
      >
        <GoldButton href="/contact">Ücretsiz teklif alın</GoldButton>
        <GhostButton href="/solutions">Yazılım ürünlerimiz</GhostButton>
      </PageHero>

      {/* Showcase */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Neden özel tasarım?"
              title="İlk izlenim,"
              accent="güven demektir."
              description="Müşterileriniz sizi önce web sitenizde tanır. Profesyonel ve hızlı bir site, rakiplerinizden ayrışmanın ve güven inşa etmenin en kısa yoludur."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {included.map((i) => (
                <li key={i} className="flex items-start gap-3 text-[14.5px] text-white/75">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D4A017]/15 text-[#D4A017]">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {i}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative">
              <div className="pointer-events-none absolute -inset-10 rounded-full bg-[#2B5EC8]/25 blur-[100px]" />
              <BrowserMockup className="relative" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-white/[0.06] bg-white/[0.012] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading center eyebrow="Hizmetlerimiz" title="Web sitenizde" accent="her detay dahil." />
          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title} delay={(i % 4) * 80}>
                  <div className="card-premium h-full rounded-3xl p-7">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4A017]/25 bg-[#D4A017]/10 text-[#D4A017]">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-display mt-6 text-[22px] text-white">{s.title}</h3>
                    <p className="mt-2.5 text-sm leading-7 text-white/50">{s.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <SectionHeading center eyebrow="Sık sorulanlar" title="Aklınıza" accent="takılanlar." />
          <Reveal className="mt-12">
            <FaqAccordion faqs={faqs} />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-[40px] border border-[#D4A017]/25 bg-gradient-to-br from-[#17141f] via-[#0b0b14] to-[#0a1224] px-8 py-16">
              <div className="pointer-events-none absolute left-1/2 top-0 h-60 w-60 -translate-x-1/2 rounded-full bg-[#D4A017]/25 blur-[100px]" />
              <h2 className="font-display relative text-4xl leading-tight text-white sm:text-5xl">
                Yeni web sitenizi <span className="gold-text italic">birlikte tasarlayalım.</span>
              </h2>
              <p className="relative mx-auto mt-5 max-w-xl text-[15px] leading-8 text-white/55">
                İhtiyacınızı anlatın; kapsamı, süreyi ve bütçeyi birlikte netleştirelim.
              </p>
              <div className="relative mt-9 flex justify-center">
                <GoldButton href="/contact">Teklif isteyin</GoldButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
