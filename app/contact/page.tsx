import ContactForm from "@/components/ContactForm";

const contactInfo = [
  { icon: "📍", label: "Adres", value: "Küçükbakkalköy Mah. Selvili Sokak No:4, Ataşehir / İstanbul", href: undefined },
  { icon: "✉️", label: "E-posta", value: "pazarlama@marssoft.com.tr", href: "mailto:pazarlama@marssoft.com.tr" },
];

export const metadata = {
  title: "İletişim",
  description: "Marssoft ile iletişime geçin. Demo talep edin, fiyat alın veya sorularınızı iletin. 7/24 destek ekibimiz yanınızda.",
  alternates: { canonical: "https://marssoft.com.tr/contact" },
  openGraph: {
    title: "İletişim | Marssoft",
    description: "Demo talep edin veya fiyat teklifi alın. Marssoft destek ekibi 7/24 yanınızda.",
    url: "https://marssoft.com.tr/contact",
  },
};

export default function Contact() {
  return (
    <div className="bg-[#0a0a1a] text-white">
      {/* Hero */}
      <section className="border-b border-[rgba(255,255,255,0.08)] px-6 lg:px-8 py-16"
        style={{ background: "linear-gradient(135deg, #0a0a1a 0%, #1a1040 50%, #0d1a30 100%)" }}>
        <div className="max-w-3xl">
          <div className="text-[12px] text-[#D4A017] uppercase tracking-[2px] mb-3">İletişim</div>
          <h1 className="text-[28px] md:text-[42px] font-bold text-white leading-[1.2] mb-4">
            Size Nasıl <span className="text-[#D4A017]">Yardımcı Olabiliriz?</span>
          </h1>
          <p className="text-[16px] text-white/60 leading-[1.7]">
            Ürünlerimiz hakkında bilgi almak veya demo talep etmek için bize ulaşın.
          </p>
        </div>
      </section>

      {/* Contact info + Form */}
      <section className="px-6 lg:px-8 py-14 md:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
            {contactInfo.map((c) => (
              <div key={c.label} className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(212,160,23,0.3)] rounded-xl p-5 transition-colors">
                <div className="text-[22px] mb-3">{c.icon}</div>
                <div className="text-[13px] text-[#D4A017] mb-1">{c.label}</div>
                {c.href ? (
                  <a href={c.href} className="text-[14px] text-white/70 hover:text-white transition-colors">{c.value}</a>
                ) : (
                  <p className="text-[14px] text-white/70">{c.value}</p>
                )}
              </div>
            ))}
          </div>

          {/* Form + FAQ (client component) */}
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
