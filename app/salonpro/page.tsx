"use client";

import { useState } from "react";
import Link from "next/link";

// ─── Icon Components ──────────────────────────────────────────────────────────

function CalendarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}
function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
function ChartBarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}
function UsersIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}
function BellIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" />
    </svg>
  );
}
function CheckIcon({ color = "#7B6EF6" }: { color?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
function ChevronDownIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
function ArrowRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#FFB800">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: <CalendarIcon />,
    title: "Akıllı Randevu Takvimi",
    desc: "Müşterileriniz web sitenizden veya sosyal medyadan 7/24 randevu alabilir. Çakışma kontrolü ve personel ataması otomatik yapılır.",
    accent: "#7B6EF6",
    bg: "rgba(123,110,246,0.12)",
    border: "rgba(123,110,246,0.25)",
  },
  {
    icon: <WhatsAppIcon />,
    title: "WhatsApp Hatırlatmaları",
    desc: "Randevu öncesinde müşterilere otomatik WhatsApp mesajı gönderilir. Gelmeme oranını %60'a kadar azaltın.",
    accent: "#25d366",
    bg: "rgba(37,211,102,0.1)",
    border: "rgba(37,211,102,0.22)",
  },
  {
    icon: <ChartBarIcon />,
    title: "Gelir & Ciro Takibi",
    desc: "Günlük, haftalık, aylık gelir raporları. Hangi hizmet daha çok kazandırdığını görün, stratejinizi optimize edin.",
    accent: "#F59E0B",
    bg: "rgba(245,158,11,0.1)",
    border: "rgba(245,158,11,0.22)",
  },
  {
    icon: <UsersIcon />,
    title: "Çoklu Personel Yönetimi",
    desc: "Her personelin takvimini ayrı ayrı yönetin. Çalışma saatlerini, izin günlerini ve hizmetlerini kolayca ayarlayın.",
    accent: "#EC4899",
    bg: "rgba(236,72,153,0.1)",
    border: "rgba(236,72,153,0.22)",
  },
];

const PRICING = [
  {
    name: "Başlangıç",
    price: null,
    desc: "Küçük salonlar ve bağımsız çalışanlar için",
    badge: null,
    features: [
      "1 personel",
      "Aylık 100 randevu",
      "Online randevu sayfası",
      "WhatsApp hatırlatma",
      "Temel gelir raporu",
      "E-posta destek",
    ],
    cta: "Ücretsiz Başlayın",
    accent: "#7B6EF6",
    featured: false,
  },
  {
    name: "Profesyonel",
    price: null,
    desc: "Büyüyen salonlar ve ekipler için",
    badge: "En Popüler",
    features: [
      "5 personele kadar",
      "Sınırsız randevu",
      "Online randevu sayfası",
      "WhatsApp & SMS hatırlatma",
      "Gelişmiş raporlar & analitik",
      "Müşteri CRM sistemi",
      "Öncelikli destek",
    ],
    cta: "Ücretsiz Başlayın",
    accent: "#7B6EF6",
    featured: true,
  },
  {
    name: "İşletme",
    price: null,
    desc: "Zincir salonlar ve büyük işletmeler için",
    badge: null,
    features: [
      "Sınırsız personel",
      "Sınırsız randevu",
      "Çok şubeli yönetim",
      "WhatsApp & SMS hatırlatma",
      "Özel raporlar & API erişimi",
      "Beyaz etiket (white-label)",
      "7/24 öncelikli destek",
    ],
    cta: "Demo Talep Et",
    accent: "#7B6EF6",
    featured: false,
  },
];

const FAQS = [
  {
    q: "14 günlük ücretsiz deneme nasıl çalışıyor?",
    a: "Kayıt olur olmaz tüm Profesyonel plan özelliklerine 14 gün boyunca tamamen ücretsiz erişebilirsiniz. Kredi kartı bilgisi gerekmez, otomatik ücretlendirme yapılmaz.",
  },
  {
    q: "WhatsApp entegrasyonu nasıl kurulur?",
    a: "Resmi WhatsApp Business API üzerinden çalışır. Hesabınızı bağlamak yalnızca 3 adım sürer: numaranızı doğrulayın, mesaj şablonunuzu onaylayın, randevu hatırlatmaları otomatik gönderilmeye başlasın.",
  },
  {
    q: "Kurulum süreci ne kadar sürer?",
    a: "Ortalama kurulum süresi 8 dakikadır. Salonunuzu, personelinizi ve hizmetlerinizi ekleyin, online randevu sayfanızı paylaşın. Teknik bilgi gerekmez.",
  },
  {
    q: "Verilerim güvende mi?",
    a: "Tüm veriler AWS altyapısında, 256-bit SSL şifrelemesiyle saklanır. KVKK uyumluluğumuz tamdır, günlük otomatik yedekleme yapılır.",
  },
  {
    q: "Plan değiştirebilir veya iptal edebilir miyim?",
    a: "İstediğiniz zaman plan yükseltme veya düşürme yapabilirsiniz. İptal etmek isterseniz tek tıkla anında iptal edilir, ek ücret talep edilmez.",
  },
];

const TESTIMONIALS = [
  {
    stars: 5,
    text: "Randevu kayıplarımız neredeyse sıfıra indi. WhatsApp hatırlatmalar sayesinde müşteriler artık randevularını unutmuyor.",
    author: "Selin Aydın",
    role: "Kuaför Salonu Sahibi, İstanbul",
    initials: "SA",
  },
  {
    stars: 5,
    text: "Kurulum gerçekten 10 dakika sürdü. Aynı gün müşterilerim online randevu almaya başladı. Harika bir ürün.",
    author: "Merve Çelik",
    role: "Güzellik Merkezi, Ankara",
    initials: "MÇ",
  },
  {
    stars: 5,
    text: "5 personelimizi tek ekrandan yönetiyorum. Haftalık gelir raporları çok detaylı, işi gerçekten kolaylaştırdı.",
    author: "Büşra Kaya",
    role: "Estetik & SPA Merkezi, İzmir",
    initials: "BK",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Hesabınızı Oluşturun",
    desc: "E-posta ve telefon numaranızla 60 saniyede ücretsiz hesap açın.",
  },
  {
    number: "02",
    title: "Salonunuzu Tanıtın",
    desc: "Personellerinizi, hizmetlerinizi ve çalışma saatlerinizi ekleyin.",
  },
  {
    number: "03",
    title: "Randevuları Alın",
    desc: "Randevu sayfanızı paylaşın. Müşteriler hemen rezervasyon yapabilir.",
  },
];

// ─── Mock dashboard data ───────────────────────────────────────────────────────
const mockAppointments = [
  { name: "Ayşe K.", service: "Saç Boyama", time: "09:00", duration: 90, color: "#7B6EF6", done: true },
  { name: "Fatma Y.", service: "Manikür", time: "10:30", duration: 45, color: "#EC4899", active: true },
  { name: "Zeynep S.", service: "Cilt Bakımı", time: "11:30", duration: 60, color: "#25d366", done: false },
  { name: "Büşra A.", service: "Saç Kesimi", time: "13:00", duration: 30, color: "#F59E0B", done: false },
];

// ─── Main Component ───────────────────────────────────────────────────────────

export default function SalonProPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="text-white min-h-screen" style={{ background: "#09090f", fontFamily: "var(--font-geist-sans, system-ui, sans-serif)" }}>

      {/* ════════════════════════════════════════════════════════════
          NAVIGATION
      ════════════════════════════════════════════════════════════ */}
      <nav className="sticky top-0 z-50 border-b"
        style={{ background: "rgba(9,9,15,0.92)", backdropFilter: "blur(20px)", borderColor: "rgba(255,255,255,0.07)" }}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8 h-[68px] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-[8px] flex items-center justify-center text-[13px] font-bold text-white"
              style={{ background: "linear-gradient(135deg,#7B6EF6,#A78BFA)" }}>S</div>
            <span className="text-[18px] font-semibold tracking-[-0.4px]">
              <span className="text-white">SalonPro</span>
              <span style={{ color: "#A78BFA" }}>.io</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {[["#features","Özellikler"],["#mockup","Ekranlar"],["#pricing","Fiyatlandırma"],["#faq","SSS"]].map(([href, label]) => (
              <a key={href} href={href}
                className="px-3.5 py-2 rounded-lg text-[13.5px] transition-colors"
                style={{ color: "rgba(255,255,255,0.55)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
              >{label}</a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href="#pricing" className="hidden md:block text-[13.5px] font-medium transition-colors"
              style={{ color: "rgba(255,255,255,0.55)" }}>Giriş Yap</a>
            <a href="#demo"
              className="text-white text-[13.5px] font-semibold px-4 py-2 rounded-xl flex items-center gap-1.5"
              style={{ background: "linear-gradient(135deg,#7B6EF6,#6D62E4)", boxShadow: "0 0 0 1px rgba(167,139,250,0.35)" }}
            >
              Demo Talep Et <ArrowRightIcon />
            </a>
          </div>
        </div>
      </nav>

      {/* ════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden px-6 lg:px-8 pt-20 pb-28">
        {/* Grid bg */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
        {/* Glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(123,110,246,0.2) 0%, transparent 70%)",
        }} />
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, #09090f)" }} />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-7 border"
                style={{ background: "rgba(123,110,246,0.12)", borderColor: "rgba(167,139,250,0.35)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#A78BFA" }} />
                <span className="text-[12px] font-medium" style={{ color: "#C4B5FD" }}>Türkiye&apos;nin #1 Salon Yönetim Yazılımı</span>
              </div>

              <h1 className="text-[46px] lg:text-[56px] font-bold leading-[1.1] tracking-[-1.5px] mb-5">
                Salonunuzu{" "}
                <span style={{ background: "linear-gradient(135deg,#A78BFA,#EC4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  büyütün
                </span>
                ,<br />randevuları{" "}
                <span style={{ background: "linear-gradient(135deg,#7B6EF6,#A78BFA)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  otomatikleştirin
                </span>
              </h1>

              <p className="text-[16px] leading-[1.75] mb-8 max-w-[480px]" style={{ color: "rgba(255,255,255,0.55)" }}>
                Kuaför ve güzellik salonları için geliştirilmiş, yapay zeka destekli randevu ve salon yönetim platformu. WhatsApp entegrasyonu dahil.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <a href="#demo"
                  className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3.5 rounded-xl text-[15px] transition-all hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    background: "linear-gradient(135deg,#7B6EF6 0%,#6D62E4 100%)",
                    boxShadow: "0 0 0 1px rgba(167,139,250,0.4), 0 8px 32px rgba(123,110,246,0.4)",
                  }}
                >
                  Demo Talep Et
                  <ArrowRightIcon />
                </a>
                <a href="#pricing"
                  className="inline-flex items-center gap-2 font-medium px-6 py-3.5 rounded-xl text-[15px] transition-all"
                  style={{ color: "rgba(255,255,255,0.65)", border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)" }}
                >
                  Fiyatları Gör
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-5">
                <div className="flex items-center gap-1.5">
                  {[1,2,3,4,5].map(i => <StarIcon key={i} />)}
                  <span className="text-[13px] ml-1" style={{ color: "rgba(255,255,255,0.45)" }}>4.9/5 (200+ salon)</span>
                </div>
                <div className="w-px h-4" style={{ background: "rgba(255,255,255,0.15)" }} />
                <span className="text-[13px]" style={{ color: "rgba(255,255,255,0.45)" }}>14 gün ücretsiz</span>
                <div className="w-px h-4" style={{ background: "rgba(255,255,255,0.15)" }} />
                <span className="text-[13px]" style={{ color: "rgba(255,255,255,0.45)" }}>Kredi kartı gerekmez</span>
              </div>
            </div>

            {/* Right — Dashboard mockup */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 blur-3xl scale-[0.7] rounded-full pointer-events-none"
                style={{ background: "rgba(123,110,246,0.3)" }} />
              <div className="relative rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(20px)",
                  boxShadow: "0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)",
                }}
              >
                {/* Titlebar */}
                <div className="flex items-center justify-between px-5 py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-bold text-white"
                      style={{ background: "linear-gradient(135deg,#7B6EF6,#A78BFA)" }}>S</div>
                    <span className="text-[13px] font-semibold text-white">SalonPro.io</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full ml-1" style={{ background: "rgba(123,110,246,0.2)", color: "#A78BFA" }}>PRO</span>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                </div>

                <div className="p-5">
                  {/* Top stats */}
                  <div className="grid grid-cols-3 gap-2.5 mb-4">
                    {[
                      { label: "Bugün Randevu", value: "18", change: "+3", up: true },
                      { label: "Haftalık Ciro", value: "₺14.2K", change: "+18%", up: true },
                      { label: "Müşteri Memnuniyeti", value: "98%", change: null, up: true },
                    ].map((stat) => (
                      <div key={stat.label} className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                        <div className="text-[9px] uppercase tracking-wide mb-1.5" style={{ color: "rgba(255,255,255,0.4)" }}>{stat.label}</div>
                        <div className="text-[18px] font-bold text-white leading-none">{stat.value}</div>
                        {stat.change && <div className="text-[9px] mt-1 font-medium" style={{ color: "#4ade80" }}>{stat.change}</div>}
                      </div>
                    ))}
                  </div>

                  {/* Appointments */}
                  <div className="text-[10px] font-semibold uppercase tracking-wider mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>
                    Bugünkü Randevular
                  </div>
                  <div className="space-y-1.5 mb-4">
                    {mockAppointments.map((apt) => (
                      <div key={apt.name} className="flex items-center justify-between rounded-lg px-3 py-2"
                        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold"
                            style={{ background: apt.color + "33", color: apt.color }}>
                            {apt.name.split(" ").map(n => n[0]).join("")}
                          </div>
                          <div>
                            <div className="text-[11px] font-medium text-white">{apt.name}</div>
                            <div className="text-[9px]" style={{ color: "rgba(255,255,255,0.4)" }}>{apt.service}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-1.5 rounded-full w-12" style={{ background: apt.color + "33" }}>
                            <div className="h-1.5 rounded-full" style={{ width: apt.done ? "100%" : apt.active ? "55%" : "0%", background: apt.color }} />
                          </div>
                          <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.4)" }}>{apt.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* WhatsApp notification */}
                  <div className="flex items-center gap-2.5 rounded-lg px-3 py-2.5"
                    style={{ background: "rgba(37,211,102,0.08)", border: "1px solid rgba(37,211,102,0.2)" }}>
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-[#25d366]"
                      style={{ background: "rgba(37,211,102,0.15)" }}>
                      <WhatsAppIcon size={11} />
                    </div>
                    <span className="text-[11px] font-medium" style={{ color: "#4ade80" }}>
                      5 hatırlatma otomatik gönderildi
                    </span>
                    <span className="text-[10px] ml-auto" style={{ color: "rgba(255,255,255,0.3)" }}>şimdi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          TRUSTED BY
      ════════════════════════════════════════════════════════════ */}
      <div className="border-y px-6 lg:px-8 py-6" style={{ borderColor: "rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-[12px] uppercase tracking-[2px] mb-5" style={{ color: "rgba(255,255,255,0.3)" }}>
            500+ Salon Güveniyor
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-3">
            {["Glamour Studio", "Rosa Beauty", "Elite Kuaför", "Bellezza Spa", "MoodBoard Hair"].map((name) => (
              <span key={name} className="text-[14px] font-semibold" style={{ color: "rgba(255,255,255,0.2)" }}>{name}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════
          FEATURES
      ════════════════════════════════════════════════════════════ */}
      <section id="features" className="px-6 lg:px-8 py-24" style={{ background: "#09090f" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[11px] font-semibold tracking-[2.5px] uppercase mb-3" style={{ color: "#A78BFA" }}>Özellikler</div>
            <h2 className="text-[36px] font-bold tracking-[-0.5px] text-white mb-4">Salonunuzu yönetmek bu kadar kolay</h2>
            <p className="text-[15px] max-w-md mx-auto" style={{ color: "rgba(255,255,255,0.45)" }}>
              Randevudan raporlamaya, personel yönetiminden müşteri iletişimine kadar her şey tek platformda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURES.map((f) => (
              <div key={f.title} className="group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-colors"
                  style={{ background: f.bg, border: `1px solid ${f.border}`, color: f.accent }}>
                  {f.icon}
                </div>
                <h3 className="text-[15px] font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-[13px] leading-[1.65]" style={{ color: "rgba(255,255,255,0.45)" }}>{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Extra feature pills */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {["Online Ödeme", "Müşteri Geçmişi", "SMS Bildirimleri", "Google Takvim Sync", "Sadakat Programı", "Çoklu Şube", "Mobil Uygulama"].map(tag => (
              <span key={tag} className="text-[12.5px] px-3.5 py-1.5 rounded-full"
                style={{ background: "rgba(123,110,246,0.1)", border: "1px solid rgba(123,110,246,0.2)", color: "rgba(255,255,255,0.6)" }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          MOCKUP SHOWCASE
      ════════════════════════════════════════════════════════════ */}
      <section id="mockup" className="relative overflow-hidden px-6 lg:px-8 py-24"
        style={{ background: "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(123,110,246,0.1) 0%, transparent 70%)" }} />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <div className="text-[11px] font-semibold tracking-[2.5px] uppercase mb-3" style={{ color: "#A78BFA" }}>Arayüz</div>
            <h2 className="text-[36px] font-bold tracking-[-0.5px] text-white mb-4">Her şey tek ekranda</h2>
            <p className="text-[15px] max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.45)" }}>
              Sezgisel, temiz ve hızlı tasarımıyla SalonPro.io&apos;ya alışmak sadece birkaç dakika sürer.
            </p>
          </div>

          {/* Big mockup */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 blur-3xl scale-[0.85] rounded-[32px] pointer-events-none"
              style={{ background: "rgba(123,110,246,0.2)" }} />
            <div className="relative rounded-[20px] overflow-hidden"
              style={{
                background: "rgba(20,18,35,0.9)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
              }}
            >
              {/* App chrome */}
              <div className="flex items-center gap-2 px-6 py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)" }}>
                <div className="flex gap-1.5 mr-3">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="rounded-lg px-4 py-1.5 text-[12px]"
                    style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    app.salonpro.io/dashboard
                  </div>
                </div>
              </div>

              {/* App layout */}
              <div className="flex" style={{ minHeight: "380px" }}>
                {/* Sidebar */}
                <div className="w-[56px] flex flex-col items-center py-5 gap-4 flex-shrink-0 border-r"
                  style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.06)" }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-bold"
                    style={{ background: "linear-gradient(135deg,#7B6EF6,#A78BFA)", color: "#fff" }}>S</div>
                  {[
                    <CalendarIcon key="cal" />,
                    <UsersIcon key="usr" />,
                    <ChartBarIcon key="cht" />,
                    <BellIcon key="bel" />,
                  ].map((icon, i) => (
                    <div key={i} className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{
                        background: i === 0 ? "rgba(123,110,246,0.2)" : "transparent",
                        color: i === 0 ? "#A78BFA" : "rgba(255,255,255,0.3)",
                        border: i === 0 ? "1px solid rgba(123,110,246,0.35)" : "none",
                      }}>
                      {icon}
                    </div>
                  ))}
                </div>

                {/* Main content */}
                <div className="flex-1 p-5">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <div className="text-[15px] font-semibold text-white">Randevu Takvimi</div>
                      <div className="text-[12px]" style={{ color: "rgba(255,255,255,0.4)" }}>Pazartesi, 25 Haziran 2026</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="text-[12px] px-3 py-1.5 rounded-lg"
                        style={{ background: "rgba(123,110,246,0.2)", color: "#A78BFA", border: "1px solid rgba(123,110,246,0.3)" }}>
                        + Randevu Ekle
                      </button>
                    </div>
                  </div>

                  {/* Week header */}
                  <div className="grid grid-cols-7 gap-1.5 mb-3">
                    {["Pzt","Sal","Çar","Per","Cum","Cmt","Paz"].map((day, i) => (
                      <div key={day} className="text-center py-2 rounded-lg text-[11px] font-medium"
                        style={{
                          background: i === 0 ? "rgba(123,110,246,0.2)" : "transparent",
                          color: i === 0 ? "#A78BFA" : "rgba(255,255,255,0.35)",
                          border: i === 0 ? "1px solid rgba(123,110,246,0.3)" : "none",
                        }}>
                        <div>{day}</div>
                        <div className="text-[13px] font-bold mt-0.5" style={{ color: i === 0 ? "#A78BFA" : "rgba(255,255,255,0.5)" }}>
                          {25 + i}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Appointment blocks */}
                  <div className="grid grid-cols-7 gap-1.5">
                    {[
                      [{ label: "Ayşe K.", sub: "Saç", color: "#7B6EF6", h: 2 }, { label: "Büşra A.", sub: "Kesim", color: "#F59E0B", h: 1 }],
                      [{ label: "Merve S.", sub: "Manikür", color: "#EC4899", h: 1 }],
                      [{ label: "Fatma Y.", sub: "Cilt", color: "#25d366", h: 2 }, { label: "Zeynep K.", sub: "Saç", color: "#7B6EF6", h: 1 }],
                      [{ label: "Selin A.", sub: "SPA", color: "#A78BFA", h: 2 }],
                      [{ label: "Gül B.", sub: "Kaş", color: "#EC4899", h: 1 }, { label: "Nil C.", sub: "Manikür", color: "#F59E0B", h: 1 }],
                      [{ label: "Deniz E.", sub: "Saç", color: "#7B6EF6", h: 2 }],
                      [],
                    ].map((col, ci) => (
                      <div key={ci} className="space-y-1.5">
                        {col.map((apt, ai) => (
                          <div key={ai} className="rounded-lg p-2"
                            style={{ background: apt.color + "20", border: `1px solid ${apt.color}40`, minHeight: `${apt.h * 36}px` }}>
                            <div className="text-[10px] font-semibold leading-none" style={{ color: apt.color }}>{apt.label}</div>
                            <div className="text-[9px] mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>{apt.sub}</div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right panel */}
                <div className="w-[180px] flex-shrink-0 p-4 border-l hidden xl:block"
                  style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
                  <div className="text-[11px] font-semibold uppercase tracking-wide mb-3" style={{ color: "rgba(255,255,255,0.3)" }}>
                    Bugün Özet
                  </div>
                  {[
                    { label: "Toplam Randevu", value: "18" },
                    { label: "Günlük Ciro", value: "₺3.240" },
                    { label: "Gelen Müşteri", value: "14" },
                  ].map(item => (
                    <div key={item.label} className="mb-3 p-2.5 rounded-xl"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                      <div className="text-[9px] mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>{item.label}</div>
                      <div className="text-[16px] font-bold text-white">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          HOW IT WORKS
      ════════════════════════════════════════════════════════════ */}
      <section className="px-6 lg:px-8 py-24" style={{ background: "#09090f", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[11px] font-semibold tracking-[2.5px] uppercase mb-3" style={{ color: "#A78BFA" }}>Nasıl Çalışır?</div>
            <h2 className="text-[36px] font-bold tracking-[-0.5px] text-white">3 adımda başlayın</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-10 left-[calc(16.67%+16px)] right-[calc(16.67%+16px)] h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(123,110,246,0.4), rgba(123,110,246,0.4), transparent)" }} />

            {STEPS.map((step, i) => (
              <div key={i} className="relative text-center">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-5 text-[15px] font-bold relative z-10"
                  style={{
                    background: "linear-gradient(135deg, #7B6EF6, #A78BFA)",
                    boxShadow: "0 0 0 4px rgba(123,110,246,0.15)",
                    color: "#fff",
                  }}>
                  {step.number}
                </div>
                <h3 className="text-[16px] font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-[13.5px] leading-[1.65]" style={{ color: "rgba(255,255,255,0.45)" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          PRICING
      ════════════════════════════════════════════════════════════ */}
      <section id="pricing" className="relative overflow-hidden px-6 lg:px-8 py-24"
        style={{ background: "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 50% 60% at 50% 0%, rgba(123,110,246,0.12) 0%, transparent 70%)" }} />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <div className="text-[11px] font-semibold tracking-[2.5px] uppercase mb-3" style={{ color: "#A78BFA" }}>Fiyatlandırma</div>
            <h2 className="text-[36px] font-bold tracking-[-0.5px] text-white mb-4">Salonunuza uygun plan</h2>
          <p className="text-[15px]" style={{ color: "rgba(255,255,255,0.45)" }}>
            Planınızı seçin, fiyat teklifi için bizimle iletişime geçin.
          </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
            {PRICING.map((plan) => (
              <div key={plan.name} className="relative rounded-2xl p-6 transition-all"
                style={{
                  background: plan.featured ? "rgba(123,110,246,0.1)" : "rgba(255,255,255,0.03)",
                  border: `1px solid ${plan.featured ? "rgba(123,110,246,0.5)" : "rgba(255,255,255,0.08)"}`,
                  boxShadow: plan.featured ? "0 0 0 1px rgba(123,110,246,0.15), 0 20px 50px rgba(123,110,246,0.15)" : "none",
                }}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[11px] font-bold px-3 py-1 rounded-full text-white"
                    style={{ background: "linear-gradient(135deg,#7B6EF6,#A78BFA)" }}>
                    {plan.badge}
                  </div>
                )}

                <div className="mb-5">
                  <div className="text-[14px] font-semibold text-white mb-1">{plan.name}</div>
                  <div className="text-[12px] mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>{plan.desc}</div>
                  <div className="flex items-end gap-1">
                    <span className="inline-block text-[15px] font-semibold px-3 py-1.5 rounded-lg"
                      style={{ background: "rgba(123,110,246,0.15)", color: "#C4B5FD", border: "1px solid rgba(167,139,250,0.25)" }}>
                      Fiyat Alınız
                    </span>
                  </div>
                </div>

                <a href="#demo"
                  className="block w-full text-center py-3 rounded-xl text-[14px] font-semibold mb-6 transition-all hover:scale-[1.02]"
                  style={plan.featured
                    ? { background: "linear-gradient(135deg,#7B6EF6,#6D62E4)", color: "#fff", boxShadow: "0 4px 16px rgba(123,110,246,0.4)" }
                    : { background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.12)" }
                  }
                >
                  {plan.cta}
                </a>

                <ul className="space-y-2.5">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-2.5 text-[13px]" style={{ color: "rgba(255,255,255,0.65)" }}>
                      <CheckIcon color={plan.featured ? "#A78BFA" : "#7B6EF6"} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-center text-[12.5px] mt-7" style={{ color: "rgba(255,255,255,0.3)" }}>
            İhtiyacınıza özel fiyat teklifi için iletişime geçin.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          TESTIMONIALS
      ════════════════════════════════════════════════════════════ */}
      <section className="px-6 lg:px-8 py-24" style={{ background: "#09090f", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold tracking-[2.5px] uppercase mb-3" style={{ color: "#A78BFA" }}>Yorumlar</div>
            <h2 className="text-[36px] font-bold tracking-[-0.5px] text-white">Salonlar konuşuyor</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="rounded-2xl p-6 flex flex-col"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="flex gap-0.5 mb-4">{Array.from({ length: t.stars }).map((_, j) => <StarIcon key={j} />)}</div>
                <p className="text-[14px] leading-[1.7] flex-1 mb-5" style={{ color: "rgba(255,255,255,0.65)" }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0"
                    style={{ background: "rgba(123,110,246,0.2)", border: "1px solid rgba(123,110,246,0.3)", color: "#A78BFA" }}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-white">{t.author}</div>
                    <div className="text-[11.5px]" style={{ color: "rgba(255,255,255,0.4)" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          FAQ
      ════════════════════════════════════════════════════════════ */}
      <section id="faq" className="px-6 lg:px-8 py-24"
        style={{ background: "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-[11px] font-semibold tracking-[2.5px] uppercase mb-3" style={{ color: "#A78BFA" }}>SSS</div>
            <h2 className="text-[36px] font-bold tracking-[-0.5px] text-white">Sık Sorulan Sorular</h2>
          </div>

          <div className="space-y-2">
            {FAQS.map((faq, i) => (
              <div key={i} className="rounded-xl overflow-hidden transition-all"
                style={{
                  background: openFaq === i ? "rgba(123,110,246,0.08)" : "rgba(255,255,255,0.03)",
                  border: `1px solid ${openFaq === i ? "rgba(123,110,246,0.35)" : "rgba(255,255,255,0.08)"}`,
                }}>
                <button
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-[14.5px] font-medium text-white pr-4">{faq.q}</span>
                  <span className="flex-shrink-0 transition-transform duration-200"
                    style={{ transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)", color: openFaq === i ? "#A78BFA" : "rgba(255,255,255,0.4)" }}>
                    <ChevronDownIcon />
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-[14px] leading-[1.7]" style={{ color: "rgba(255,255,255,0.55)" }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          CTA BANNER
      ════════════════════════════════════════════════════════════ */}
      <section id="demo" className="relative overflow-hidden px-6 lg:px-8 py-24 text-center"
        style={{ background: "#09090f", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(123,110,246,0.2) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

        <div className="relative z-10 max-w-xl mx-auto">
          <div className="inline-flex items-center gap-2 border rounded-full px-3.5 py-1.5 mb-8"
            style={{ background: "rgba(123,110,246,0.12)", borderColor: "rgba(167,139,250,0.35)" }}>
            <span className="text-[12px] font-medium" style={{ color: "#C4B5FD" }}>14 gün ücretsiz · Kredi kartı gerekmez</span>
          </div>
          <h2 className="text-[40px] lg:text-[48px] font-bold tracking-[-1px] text-white leading-[1.15] mb-5">
            Salonunuzu büyütmeye<br />bugün başlayın
          </h2>
          <p className="text-[15px] mb-9" style={{ color: "rgba(255,255,255,0.5)" }}>
            5 dakikada kurulum yapın. 14 gün tüm özellikleri ücretsiz kullanın.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="#"
              className="inline-flex items-center gap-2 text-white font-bold px-7 py-4 rounded-xl text-[15px] transition-all hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg,#7B6EF6,#6D62E4)",
                boxShadow: "0 0 0 1px rgba(167,139,250,0.4), 0 8px 40px rgba(123,110,246,0.45)",
              }}
            >
              Ücretsiz Başlayın <ArrowRightIcon />
            </a>
            <a href="#"
              className="inline-flex items-center gap-2 font-semibold px-7 py-4 rounded-xl text-[15px]"
              style={{ color: "rgba(255,255,255,0.65)", border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)" }}
            >
              Demo İzle
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          FOOTER
      ════════════════════════════════════════════════════════════ */}
      <footer style={{ background: "#060610", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-14 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-7 h-7 rounded-[8px] flex items-center justify-center text-[13px] font-bold text-white"
                  style={{ background: "linear-gradient(135deg,#7B6EF6,#A78BFA)" }}>S</div>
                <span className="text-[18px] font-semibold tracking-[-0.4px]">
                  <span className="text-white">SalonPro</span>
                  <span style={{ color: "#A78BFA" }}>.io</span>
                </span>
              </div>
              <p className="text-[13.5px] leading-[1.7] mb-5 max-w-xs" style={{ color: "rgba(255,255,255,0.38)" }}>
                Kuaför ve güzellik salonları için geliştirilmiş, bulut tabanlı randevu ve salon yönetim yazılımı.
              </p>
              <p className="text-[13px]" style={{ color: "rgba(255,255,255,0.3)" }}>
                Bir{" "}
                <a href="https://marssoft.com.tr" className="underline underline-offset-2 transition-colors hover:text-white/50"
                  style={{ color: "rgba(255,255,255,0.4)" }}>Marssoft</a>
                {" "}ürünüdür.
              </p>

              {/* Socials */}
              <div className="flex gap-2 mt-5">
                {[
                  { label: "X/Twitter", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
                  { label: "Instagram", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
                  { label: "LinkedIn", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
                ].map((s) => (
                  <a key={s.label} href="#" aria-label={s.label}
                    className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:-translate-y-0.5"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)", color: "rgba(255,255,255,0.45)" }}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h6 className="text-[12px] font-semibold uppercase tracking-[1.5px] mb-4" style={{ color: "rgba(255,255,255,0.35)" }}>Ürün</h6>
              <ul className="space-y-2.5">
                {[["#features","Özellikler"],["#mockup","Ekranlar"],["#pricing","Fiyatlandırma"],["#faq","SSS"]].map(([href, label]) => (
                  <li key={href}>
                    <a href={href} className="text-[13.5px] transition-colors hover:text-white/70" style={{ color: "rgba(255,255,255,0.4)" }}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h6 className="text-[12px] font-semibold uppercase tracking-[1.5px] mb-4" style={{ color: "rgba(255,255,255,0.35)" }}>İletişim</h6>
              <ul className="space-y-2.5">
                <li>
                  <a href="mailto:salonpro@marssoft.com.tr" className="text-[13px] transition-colors hover:text-white/60" style={{ color: "rgba(255,255,255,0.38)" }}>
                    salonpro@marssoft.com.tr
                  </a>
                </li>
                <li className="text-[13px]" style={{ color: "rgba(255,255,255,0.38)" }}>Ataşehir, İstanbul</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-6"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <p className="text-[12px]" style={{ color: "rgba(255,255,255,0.28)" }}>
              © {new Date().getFullYear()} SalonPro.io — Marssoft Yazılım A.Ş.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-[12px] transition-colors hover:text-white/50" style={{ color: "rgba(255,255,255,0.28)" }}>Gizlilik Politikası</a>
              <a href="#" className="text-[12px] transition-colors hover:text-white/50" style={{ color: "rgba(255,255,255,0.28)" }}>Kullanım Koşulları</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
