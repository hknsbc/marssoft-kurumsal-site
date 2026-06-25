import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";

// ─── Data ─────────────────────────────────────────────────────────────────────

const marqueeItems = [
  "SalonPro.io", "Vet Panel", "Stok Panel", "WhatsApp Entegrasyonu",
  "Randevu Yönetimi", "Bulut Tabanlı", "7/24 Destek", "KOBİ Çözümleri",
  "Ciro Takibi", "Online Randevu", "Personel Yönetimi", "Türkçe Destek",
];

const products = [
  {
    badge: "SALON & ESTETİK",
    name: "SalonPro.io",
    desc: "Kuaför, güzellik salonu ve estetik merkezleri için AI destekli randevu ve salon yönetim platformu. WhatsApp entegrasyonu dahil.",
    features: ["Çevrimiçi randevu alma", "WhatsApp otomatik hatırlatma", "Gelir & ciro raporları", "Çoklu personel takvimi"],
    accent: "#D4A017",
    accentBg: "rgba(184,134,11,0.12)",
    accentBorder: "rgba(184,134,11,0.3)",
    href: "/solutions#salonpro",
  },
  {
    badge: "VETERİNER KLİNİĞİ",
    name: "Vet Panel",
    desc: "Veteriner klinikleri için hasta takibi, aşı takvimleri, stok yönetimi ve randevu sistemi.",
    features: ["Hasta kartı & tıbbi geçmiş", "Aşı & kontrol hatırlatma", "İlaç ve stok yönetimi", "Online randevu"],
    accent: "#1d9e75",
    accentBg: "rgba(29,158,117,0.1)",
    accentBorder: "rgba(29,158,117,0.3)",
    href: "/solutions#vetpanel",
  },
  {
    badge: "PETSHOP & PET MARKET",
    name: "Pet Panel",
    desc: "Petshoplar ve pet marketler için satış, stok, müşteri ve grooming randevu yönetim platformu.",
    features: ["Ürün & stok yönetimi", "Grooming randevu takibi", "Sadakat kartı sistemi", "Kasa & fatura modülü"],
    accent: "#63B3ED",
    accentBg: "rgba(99,179,237,0.1)",
    accentBorder: "rgba(99,179,237,0.3)",
    href: "/solutions#petpanel",
  },
  {
    badge: "MARİNA & TEKNECİLİK",
    name: "Marine Panel",
    desc: "Marinalar ve tekne kiralama işletmeleri için rezervasyon, liman yeri ve bakım yönetim sistemi.",
    features: ["Tekne & liman yeri yönetimi", "Online rezervasyon", "Bakım & servis takibi", "Finansal raporlar"],
    accent: "#2B5EC8",
    accentBg: "rgba(43,94,200,0.1)",
    accentBorder: "rgba(43,94,200,0.3)",
    href: "/solutions#marinepanel",
  },
  {
    badge: "STOK & LOJİSTİK",
    name: "Stok Panel",
    desc: "KOBİ'ler için barkod destekli kolay stok takibi, tedarikçi yönetimi ve anlık raporlama sistemi.",
    features: ["Barkod & QR kod okuma", "Anlık stok bildirimleri", "Tedarikçi yönetimi", "Stok raporları"],
    accent: "#d85a30",
    accentBg: "rgba(216,90,48,0.1)",
    accentBorder: "rgba(216,90,48,0.3)",
    href: "/solutions#stokpanel",
  },
];

const miniFeatures = [
  { badge: "ENTEGRASYON", name: "WhatsApp Business", desc: "Resmi API ile otomatik bildirim ve hatırlatma." },
  { badge: "ANALİTİK", name: "Ciro Raporları", desc: "Günlük, haftalık, aylık gelir analizleri." },
  { badge: "CRM", name: "Müşteri Yönetimi", desc: "Müşteri geçmişi, notlar ve sadakat takibi." },
  { badge: "DESTEK", name: "7/24 Teknik Destek", desc: "Uzman destek ekibimiz dünya genelinde her an yanınızda." },
];

const steps = [
  {
    num: "01",
    title: "Hesabınızı Oluşturun",
    desc: "E-posta adresinizle 60 saniyede ücretsiz hesap açın. Kredi kartı gerekmez.",
  },
  {
    num: "02",
    title: "İşletmenizi Tanıtın",
    desc: "Sektörünüzü seçin, personel ve hizmetlerinizi ekleyin. Sistem sizi yönlendirir.",
  },
  {
    num: "03",
    title: "Entegrasyon Yapın",
    desc: "WhatsApp bağlantısı ve randevu sayfanızı sosyal medyada paylaşın.",
  },
  {
    num: "04",
    title: "Büyümeye Başlayın",
    desc: "Raporları takip edin, müşterilerinizi daha iyi tanıyın, gelirinizi artırın.",
  },
];

const highlights = [
  {
    label: "Güvenlik & Altyapı",
    title: "Güvenli ve kesintisiz altyapı sunuyoruz.",
    desc: "Tüm verileriniz AWS altyapısında, 256-bit SSL şifrelemesiyle saklanır. Günlük otomatik yedekleme ve KVKK uyumluluğu standarttır.",
    bullets: ["AWS altyapısı & %99.9 uptime garantisi", "256-bit SSL veri şifreleme", "KVKK uyumlu veri yönetimi", "Günlük otomatik yedekleme"],
    stat: "99.9%",
    statLabel: "Uptime Garantisi",
    flip: false,
  },
  {
    label: "Destek & İletişim",
    title: "7/24 global destek ile yanınızdayız.",
    desc: "WhatsApp ve e-posta üzerinden ulaşabileceğiniz uzman destek ekibimiz, sorunlarınızı ortalama 2 saatte çözer.",
    bullets: ["WhatsApp canlı destek", "Çok dilli uzman ekip", "Ortalama <2 saat yanıt süresi", "Video eğitim & döküman merkezi"],
    stat: "<2sa",
    statLabel: "Ortalama Yanıt",
    flip: true,
  },
  {
    label: "Kurulum & Kolay Kullanım",
    title: "5 dakikada kurun, hemen kullanmaya başlayın.",
    desc: "Teknik bilgiye ihtiyaç duymadan kurulum yapın. Sezgisel arayüzümüzle herkes anında adapte olur.",
    bullets: ["Kurulum gerektirmez, tarayıcıdan çalışır", "Çok dilli sezgisel arayüz", "iOS ve Android mobil erişim", "Tüm cihaz ve platformlarla uyumlu"],
    stat: "5dk",
    statLabel: "Kurulum Süresi",
    flip: false,
  },
];

const stats = [
  { value: "500+", label: "Aktif İşletme", sub: "Dünya genelinde" },
  { value: "15+", label: "Ülkede Aktif", sub: "Ve büyüyor" },
  { value: "%99.9", label: "Uptime", sub: "SLA garantili" },
  { value: "7/24", label: "Teknik Destek", sub: "Uzman ekip" },
];

const testimonials = [
  {
    stars: 5,
    text: "SalonPro ile randevu yönetimimiz tamamen değişti. WhatsApp hatırlatmalar müşteri kaybını sıfıra indirdi. Açıkçası artık SalonPro olmadan çalışmayı düşünemiyorum.",
    author: "Ayşe Kaya",
    role: "Glamour Güzellik Merkezi, İstanbul",
    initials: "AK",
  },
  {
    stars: 5,
    text: "Vet Panel hasta takibini inanılmaz kolaylaştırdı. Aşı hatırlatmaları otomatik gidiyor, sahipler çok memnun. Kurulum gerçekten 10 dakika sürdü.",
    author: "Dr. Mehmet Sarı",
    role: "PawCare Vet Panel Kliniği, Ankara",
    initials: "MS",
  },
  {
    stars: 5,
    text: "Stok Panel yazılımı sayesinde artık hiçbir ürünümüz kaybolmuyor. Barkod sistemi harika çalışıyor, raporlar çok detaylı.",
    author: "Fatih Bulut",
    role: "PetWorld Pet Panel, İzmir",
    initials: "FB",
  },
];

// ─── Tiny SVG helpers ─────────────────────────────────────────────────────────

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function Check({ color = "#D4A017" }: { color?: string }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function Star() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#FFB800">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="text-white" style={{ background: "#09090f" }}>

      {/* ════════════════════════════
          HERO
      ════════════════════════════ */}
      <section className="relative overflow-hidden px-6 lg:px-8 pt-20 lg:pt-28 pb-24 lg:pb-32">
        {/* Grid bg */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
        {/* Glow */}
        <div className="absolute pointer-events-none" style={{
          top: "-20%", left: "50%", transform: "translateX(-50%)",
          width: "900px", height: "600px",
          background: "radial-gradient(ellipse, rgba(27,61,128,0.2) 0%, transparent 65%)",
        }} />
        <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, #09090f)" }} />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-8 border"
                style={{ background: "rgba(184,134,11,0.12)", borderColor: "rgba(212,160,23,0.35)" }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#D4A017" }} />
                <span className="text-[12px] font-medium tracking-wide" style={{ color: "#F0CC6A" }}>
                  KOBİ&apos;lere Özel SaaS Platform
                </span>
              </div>

              <h1 className="font-bold tracking-tight mb-6 leading-[1.08]">
                <span className="block text-white" style={{ fontSize: "clamp(38px, 5vw, 62px)" }}>KOBİ&apos;lerin</span>
                <span className="block text-white" style={{ fontSize: "clamp(38px, 5vw, 62px)" }}>Dijital Dönüşüm</span>
                <span className="block" style={{
                  fontSize: "clamp(38px, 5vw, 62px)",
                  background: "linear-gradient(135deg, #D4A017 0%, #F0CC6A 50%, #D4A017 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>Ortağı.</span>
              </h1>

              <p className="text-[16px] lg:text-[17px] leading-[1.75] mb-9 max-w-[500px]"
                style={{ color: "rgba(255,255,255,0.52)" }}>
                Vet Panel, Pet Panel, güzellik salonu ve stok yönetimi için bulut tabanlı,
                çok dilli ve global ölçekte çalışan SaaS yazılımlar. Kurulum yok — anında başlayın.
              </p>

              <div className="flex flex-wrap gap-3 mb-12">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 text-white font-bold px-6 py-3.5 rounded-xl text-[15px] transition-all hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    background: "linear-gradient(135deg, #B8860B 0%, #D4A017 100%)",
                    boxShadow: "0 0 0 1px rgba(212,160,23,0.4), 0 8px 32px rgba(184,134,11,0.35)",
                  }}>
                  Ücretsiz Deneyin
                  <ArrowRight />
                </Link>
                <a href="mailto:pazarlama@marssoft.com.tr"
                  className="inline-flex items-center gap-2.5 font-medium px-6 py-3.5 rounded-xl text-[15px] transition-all"
                  style={{ color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                  </svg>
                  pazarlama@marssoft.com.tr
                </a>
              </div>

              {/* Trust stats */}
              <div className="flex flex-wrap items-center gap-6 lg:gap-8">
                {[
                  { val: "500+", lbl: "Global İşletme" },
                  { val: "15+", lbl: "Ülke" },
                  { val: "%98", lbl: "Memnuniyet" },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-3">
                    {i > 0 && <div className="w-px h-8" style={{ background: "rgba(255,255,255,0.1)" }} />}
                    <div>
                      <div className="text-[22px] font-bold text-white leading-none">{s.val}</div>
                      <div className="text-[12px] mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>{s.lbl}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Dashboard mockup */}
            <div className="hidden lg:block relative">
              <div className="absolute inset-0 blur-3xl scale-[0.7] rounded-full pointer-events-none"
                style={{ background: "rgba(27,61,128,0.28)" }} />
              <div className="relative rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(20,18,35,0.95)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow: "0 40px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.05)",
                }}>
                {/* Titlebar */}
                <div className="flex items-center justify-between px-5 py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}>
                  <div className="flex items-center gap-2">
                    <span className="text-[16px] font-black tracking-tight leading-none select-none"
                      style={{
                        background: "linear-gradient(135deg, #B8860B 0%, #D4A017 35%, #F0CC6A 55%, #D4A017 75%, #B8860B 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontFamily: "'Georgia', serif",
                      }}>
                      Marssoft
                    </span>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                </div>
                <div className="p-5">
                  {/* Online user counts */}
                  <div className="text-[10px] font-semibold uppercase tracking-wider mb-3" style={{ color: "rgba(255,255,255,0.3)" }}>Şu An Online Kullanıcılar</div>
                  <div className="space-y-2">
                    {[
                      { name: "SalonPro.io",   users: 1248, color: "#D4A017",  bg: "rgba(184,134,11,0.1)",   bar: 82 },
                      { name: "Vet Panel",      users: 634,  color: "#1d9e75",  bg: "rgba(29,158,117,0.1)",   bar: 51 },
                      { name: "Pet Panel",      users: 389,  color: "#63B3ED",  bg: "rgba(99,179,237,0.1)",   bar: 38 },
                      { name: "Marine Panel",   users: 97,   color: "#2B5EC8",  bg: "rgba(43,94,200,0.1)",    bar: 14 },
                      { name: "Stok Panel",     users: 512,  color: "#d85a30",  bg: "rgba(216,90,48,0.1)",    bar: 45 },
                    ].map(p => (
                      <div key={p.name} className="rounded-xl px-4 py-3 flex items-center justify-between"
                        style={{ background: p.bg, border: `1px solid ${p.color}30` }}>
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-2 h-2 rounded-full flex-shrink-0 animate-pulse" style={{ background: p.color }} />
                          <span className="text-[12px] font-semibold text-white truncate">{p.name}</span>
                        </div>
                        <div className="flex items-center gap-3 flex-shrink-0">
                          <div className="w-20 h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
                            <div className="h-full rounded-full" style={{ width: `${p.bar}%`, background: p.color }} />
                          </div>
                          <span className="text-[14px] font-bold tabular-nums" style={{ color: p.color }}>{p.users.toLocaleString("tr-TR")}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Total online */}
                  <div className="mt-3 rounded-xl px-4 py-3 flex items-center justify-between"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <span className="text-[11px] font-medium" style={{ color: "rgba(255,255,255,0.4)" }}>Toplam Online</span>
                    <span className="text-[18px] font-black text-white tabular-nums">2.880</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════
          MARQUEE TICKER
      ════════════════════════════ */}
      <div className="overflow-hidden border-y py-4" style={{ borderColor: "rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}>
        <div className="animate-marquee flex gap-8 w-max">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-8 whitespace-nowrap">
              <span className="text-[13px] font-medium" style={{ color: "rgba(255,255,255,0.45)" }}>{item}</span>
              <span className="w-1 h-1 rounded-full" style={{ background: "rgba(184,134,11,0.65)" }} />
            </span>
          ))}
        </div>
      </div>

      {/* ════════════════════════════
          PRODUCTS
      ════════════════════════════ */}
      <section className="px-6 lg:px-8 py-24" style={{ background: "#09090f" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <div className="text-[11px] font-bold tracking-[3px] uppercase mb-4" style={{ color: "#D4A017" }}>Ürünlerimiz</div>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
              <h2 className="text-[36px] lg:text-[42px] font-bold tracking-tight text-white leading-[1.15]">
                Sektörünüze Özel<br />Dijital Çözümler
              </h2>
              <p className="text-[15px] max-w-sm lg:text-right" style={{ color: "rgba(255,255,255,0.45)" }}>
                Bulut tabanlı, kullanımı kolay platformlarımızı keşfedin.
              </p>
            </div>
          </div>

          {/* Main product cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
            {products.map((p) => (
              <Link key={p.name} href={p.href}
                className="group relative rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 block"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `radial-gradient(circle at top left, ${p.accentBg} 0%, transparent 70%)`, border: `1px solid ${p.accentBorder}` }} />

                <div className="relative z-10">
                  <span className="inline-block text-[10px] font-bold tracking-[2px] uppercase mb-5 px-2.5 py-1 rounded-md"
                    style={{ background: p.accentBg, color: p.accent, border: `1px solid ${p.accentBorder}` }}>
                    {p.badge}
                  </span>
                  <h3 className="text-[22px] font-bold text-white mb-3">{p.name}</h3>
                  <p className="text-[13.5px] leading-[1.65] mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>{p.desc}</p>
                  <ul className="space-y-2.5 mb-7">
                    {p.features.map(f => (
                      <li key={f} className="flex items-center gap-2.5 text-[13px]" style={{ color: "rgba(255,255,255,0.65)" }}>
                        <Check color={p.accent} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold group-hover:gap-2.5 transition-all"
                    style={{ color: p.accent }}>
                    Detayları İncele <ArrowRight />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Mini feature cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {miniFeatures.map((f) => (
              <div key={f.name} className="rounded-xl px-5 py-4 transition-all hover:-translate-y-0.5"
                style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <span className="text-[9.5px] font-bold tracking-[2px] uppercase mb-2 block" style={{ color: "rgba(240,204,106,0.75)" }}>{f.badge}</span>
                <div className="text-[14px] font-semibold text-white mb-1">{f.name}</div>
                <div className="text-[12.5px]" style={{ color: "rgba(255,255,255,0.42)" }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════
          HOW IT WORKS
      ════════════════════════════ */}
      <section className="px-6 lg:px-8 py-24"
        style={{ background: "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <div className="text-[11px] font-bold tracking-[3px] uppercase mb-4" style={{ color: "#D4A017" }}>Süreç</div>
            <h2 className="text-[36px] lg:text-[42px] font-bold tracking-tight text-white">Nasıl Başlanır?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                {/* Connector */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(100%+12px)] w-[calc(100%-24px)] h-px"
                    style={{ background: "linear-gradient(90deg, rgba(212,160,23,0.4), transparent)" }} />
                )}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-[18px] font-black flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg, #B8860B, #D4A017)",
                      boxShadow: "0 0 0 4px rgba(27,61,128,0.18)",
                      color: "#fff",
                    }}>
                    {step.num}
                  </div>
                  <div className="h-px flex-1" style={{ background: "rgba(43,94,200,0.2)" }} />
                </div>
                <h3 className="text-[17px] font-bold text-white mb-2">{step.title}</h3>
                <p className="text-[13.5px] leading-[1.65]" style={{ color: "rgba(255,255,255,0.48)" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════
          HIGHLIGHT SECTIONS (alternating)
      ════════════════════════════ */}
      {highlights.map((h, i) => (
        <section key={i} className="px-6 lg:px-8 py-20 lg:py-24"
          style={{ background: i % 2 === 0 ? "#09090f" : "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <div className="max-w-6xl mx-auto">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center ${h.flip ? "lg:flex lg:flex-row-reverse" : ""}`}>

              {/* Text side */}
              <div>
                <div className="text-[11px] font-bold tracking-[3px] uppercase mb-4" style={{ color: "#D4A017" }}>{h.label}</div>
                <h2 className="text-[30px] lg:text-[36px] font-bold tracking-tight text-white leading-[1.2] mb-5">{h.title}</h2>
                <p className="text-[15px] leading-[1.75] mb-7" style={{ color: "rgba(255,255,255,0.5)" }}>{h.desc}</p>
                <ul className="space-y-3 mb-8">
                  {h.bullets.map(b => (
                    <li key={b} className="flex items-center gap-3 text-[14px]" style={{ color: "rgba(255,255,255,0.7)" }}>
                      <span className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center"
                        style={{ background: "rgba(27,61,128,0.22)", border: "1px solid rgba(43,94,200,0.3)" }}>
                        <Check />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 font-semibold text-[14px] px-5 py-2.5 rounded-xl transition-all hover:-translate-y-0.5"
                  style={{ border: "1px solid rgba(212,160,23,0.35)", color: "#F0CC6A", background: "rgba(184,134,11,0.1)" }}>
                  Görüşme Planla <ArrowRight />
                </Link>
              </div>

              {/* Stat side */}
              <div className="flex items-center justify-center">
                <div className="relative text-center">
                  <div className="absolute inset-0 blur-3xl rounded-full pointer-events-none"
                    style={{ background: "rgba(27,61,128,0.18)" }} />
                  <div className="relative w-56 h-56 rounded-3xl flex flex-col items-center justify-center"
                    style={{
                      background: "rgba(184,134,11,0.1)",
                      border: "1px solid rgba(43,94,200,0.25)",
                      boxShadow: "0 0 0 12px rgba(27,61,128,0.08)",
                    }}>
                    <div className="text-[52px] font-black text-white leading-none tracking-tight"
                      style={{ background: "linear-gradient(135deg,#D4A017,#F0CC6A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                      {h.stat}
                    </div>
                    <div className="text-[13px] mt-2 font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>{h.statLabel}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ════════════════════════════
          CTA DEMO SECTION
      ════════════════════════════ */}
      <section className="relative overflow-hidden px-6 lg:px-8 py-20 text-center"
        style={{ background: "rgba(27,61,128,0.1)", borderTop: "1px solid rgba(43,94,200,0.2)", borderBottom: "1px solid rgba(43,94,200,0.2)" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(27,61,128,0.18) 0%, transparent 70%)" }} />
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="text-[11px] font-bold tracking-[3px] uppercase mb-4" style={{ color: "#F0CC6A" }}>Hadi Başlayalım</div>
          <h2 className="text-[36px] lg:text-[44px] font-bold tracking-tight text-white leading-[1.2] mb-5">
            İşletmenizi Birlikte<br />Dijitalleştirelim
          </h2>
          <p className="text-[15px] mb-9" style={{ color: "rgba(255,255,255,0.5)" }}>
            Ücretsiz danışmanlık ile ihtiyaçlarınızı analiz edelim. 14 gün tam özellikli ücretsiz deneme.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact"
              className="inline-flex items-center gap-2 text-white font-bold px-7 py-4 rounded-xl text-[15px] transition-all hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg,#B8860B,#D4A017)",
                boxShadow: "0 0 0 1px rgba(212,160,23,0.4), 0 8px 32px rgba(184,134,11,0.35)",
              }}>
              Ücretsiz Teklif Al <ArrowRight />
            </Link>
            <a href="https://wa.me/905532263766"
              className="inline-flex items-center gap-2.5 font-semibold px-7 py-4 rounded-xl text-[15px]"
              style={{ color: "#4ade80", border: "1px solid rgba(37,211,102,0.3)", background: "rgba(37,211,102,0.07)" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp&apos;tan Yazın
            </a>
          </div>
          <p className="text-[12.5px] mt-5" style={{ color: "rgba(255,255,255,0.3)" }}>
            Ortalama 2 saatte geri dönüş · Kredi kartı gerekmez
          </p>
        </div>
      </section>

      {/* ════════════════════════════
          STATS COUNTERS
      ════════════════════════════ */}
      <section className="px-6 lg:px-8 py-20" style={{ background: "#09090f", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[11px] font-bold tracking-[3px] uppercase mb-4" style={{ color: "#D4A017" }}>Rakamlarla Biz</div>
            <h2 className="text-[36px] font-bold tracking-tight text-white">İşletmelere değer katıyoruz</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="text-center rounded-2xl p-8 transition-all hover:-translate-y-0.5"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="text-[44px] font-black leading-none mb-2"
                  style={{ background: "linear-gradient(135deg,#D4A017,#F0CC6A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {s.value}
                </div>
                <div className="text-[15px] font-semibold text-white mb-1">{s.label}</div>
                <div className="text-[12px]" style={{ color: "rgba(255,255,255,0.35)" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════
          TESTIMONIALS
      ════════════════════════════ */}
      <section className="px-6 lg:px-8 py-24"
        style={{ background: "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <div className="text-[11px] font-bold tracking-[3px] uppercase mb-4" style={{ color: "#D4A017" }}>Müşteri Yorumları</div>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
              <h2 className="text-[36px] lg:text-[42px] font-bold tracking-tight text-white">
                Müşterilerimiz<br />Bizi Nasıl Değerlendiriyor?
              </h2>
              <div className="flex items-center gap-3">
                <div className="flex gap-0.5">{[1,2,3,4,5].map(i => <Star key={i} />)}</div>
                <span className="text-[14px] font-semibold text-white">4.9</span>
                <span className="text-[13px]" style={{ color: "rgba(255,255,255,0.4)" }}>200+ değerlendirme</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-2xl p-7 flex flex-col"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="flex gap-0.5 mb-5">{Array.from({ length: t.stars }).map((_, j) => <Star key={j} />)}</div>
                <p className="text-[14.5px] leading-[1.75] flex-1 mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-[13px] font-bold flex-shrink-0"
                    style={{ background: "rgba(27,61,128,0.28)", border: "1px solid rgba(212,160,23,0.35)", color: "#F0CC6A" }}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-[14px] font-bold text-white">{t.author}</div>
                    <div className="text-[12px]" style={{ color: "rgba(255,255,255,0.38)" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════
          FAQ
      ════════════════════════════ */}
      <section className="px-6 lg:px-8 py-24" style={{ background: "#09090f", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
            <div>
              <div className="text-[11px] font-bold tracking-[3px] uppercase mb-4" style={{ color: "#D4A017" }}>SSS</div>
              <h2 className="text-[34px] font-bold tracking-tight text-white leading-[1.2] mb-5">
                Merak<br />Ettikleriniz
              </h2>
              <p className="text-[14px] leading-[1.7] mb-7" style={{ color: "rgba(255,255,255,0.48)" }}>
                Daha fazla sorunuz mu var? Bize WhatsApp veya e-posta üzerinden ulaşın.
              </p>
              <Link href="/contact"
                className="inline-flex items-center gap-2 font-semibold text-[14px] px-5 py-2.5 rounded-xl transition-all"
                style={{ border: "1px solid rgba(212,160,23,0.35)", color: "#F0CC6A", background: "rgba(184,134,11,0.1)" }}>
                Bize Ulaşın <ArrowRight />
              </Link>
            </div>
            <div className="lg:col-span-2">
              <FaqAccordion />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════
          FINAL CTA
      ════════════════════════════ */}
      <section className="relative overflow-hidden px-6 lg:px-8 py-24 text-center"
        style={{ background: "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 70% at 50% 100%, rgba(27,61,128,0.22) 0%, transparent 70%)" }} />

        <div className="relative z-10 max-w-xl mx-auto">
          <h2 className="text-[38px] lg:text-[48px] font-black tracking-tight text-white leading-[1.1] mb-5">
            İşletmenizi bugün<br />
            <span style={{ background: "linear-gradient(135deg,#D4A017,#F0CC6A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              dijitalleştirin.
            </span>
          </h2>
          <p className="text-[15px] mb-9" style={{ color: "rgba(255,255,255,0.5)" }}>
            14 gün ücretsiz deneyin. Kurulum yok, teknik bilgi gerekmez.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact"
              className="inline-flex items-center gap-2 text-white font-bold px-7 py-4 rounded-xl text-[15px] transition-all hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg,#B8860B,#D4A017)",
                boxShadow: "0 0 0 1px rgba(212,160,23,0.4), 0 8px 40px rgba(184,134,11,0.35)",
              }}>
              Ücretsiz Başlayın <ArrowRight />
            </Link>
            <Link href="/pricing"
              className="inline-flex items-center gap-2 font-semibold px-7 py-4 rounded-xl text-[15px]"
              style={{ color: "rgba(255,255,255,0.65)", border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)" }}>
              Fiyatları Gör
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}




