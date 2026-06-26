"use client";

import { FormEvent, useState } from "react";

const contactInfo = [
  { icon: "📍", label: "Adres", value: "Küçükbakkalköy Mah. Selvili Sokak No:4, Ataşehir / İstanbul" },
  { icon: "✉️", label: "E-posta", value: "pazarlama@marssoft.com.tr", href: "mailto:pazarlama@marssoft.com.tr" },
];

const faqs = [
  { q: "Ürünlerinizi nasıl deneyebilirim?", a: "Her ürün için 14 günlük ücretsiz deneme sunuyoruz. Kredi kartı gerekmez, hemen başlayabilirsiniz." },
  { q: "Kurulum ne kadar sürer?", a: "Sisteme giriş yaptıktan sonra birkaç dakikada kullanmaya başlayabilirsiniz. Mevcut verilerinizi aktarmanıza da yardımcı oluyoruz." },
  { q: "Teknik destek nasıl çalışıyor?", a: "Telefon, WhatsApp ve email üzerinden 7/24 teknik destek sağlıyoruz." },
  { q: "Hangi ürün bana uygun?", a: "Güzellik & kuaför için SalonPro.io, VET PANEL & Pet Panel için Vet Panel, stok takibi için Stok Panel uygulamamız idealdir." },
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
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSent(true);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const inputClass = "w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-white text-[14px] px-4 py-2.5 rounded-lg outline-none focus:border-[rgba(43,94,200,0.25)] placeholder:text-white/30 transition-colors";

  return (
    <div className="bg-[#0a0a1a] text-white">
      {/* Hero */}
      <section className="border-b border-[rgba(255,255,255,0.08)] px-6 lg:px-8 py-16"
        style={{ background: "linear-gradient(135deg, #0a0a1a 0%, #1a1040 50%, #0d1a30 100%)" }}>
        <div className="max-w-6xl mx-auto max-w-[500px]">
          <div className="text-[12px] text-[#D4A017] uppercase tracking-[2px] mb-3">İletişim</div>
          <h1 className="text-[36px] md:text-[42px] font-medium text-white leading-[1.2] mb-4">
            Size Nasıl <span className="text-[#D4A017]">Yardımcı Olabiliriz?</span>
          </h1>
          <p className="text-[16px] text-white/60 leading-[1.7]">
            Ürünlerimiz hakkında bilgi almak veya demo talep etmek için bize ulaşın.
          </p>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
            {contactInfo.map((c) => (
              <div key={c.label} className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(43,94,200,0.3)] rounded-xl p-5 transition-colors">
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

          {/* Form + FAQ */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-[22px] font-medium text-white mb-6">Mesaj Gönderin</h2>
              {sent ? (
                <div className="bg-[rgba(27,61,128,0.18)] border border-[rgba(43,94,200,0.3)] rounded-xl p-8 text-center">
                  <div className="text-[36px] mb-3">✓</div>
                  <h3 className="text-[18px] font-medium text-white mb-2">Mesajınız Alındı!</h3>
                  <p className="text-[14px] text-white/60 mb-5">En kısa sürede sizinle iletişime geçeceğiz.</p>
                  <button onClick={() => setSent(false)} className="text-[13px] text-[#D4A017] hover:text-[#F0CC6A] transition-colors">
                    Yeni mesaj gönder →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13px] text-white/50 mb-1.5">Ad Soyad <span className="text-[#D4A017]">*</span></label>
                      <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Adınız" className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-[13px] text-white/50 mb-1.5">E-posta <span className="text-[#D4A017]">*</span></label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="E-posta adresiniz" className={inputClass} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13px] text-white/50 mb-1.5">Telefon</label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Telefon numaranız" className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-[13px] text-white/50 mb-1.5">Konu</label>
                      <select name="subject" value={form.subject} onChange={handleChange} className={inputClass}>
                        <option value="" className="bg-[#0a0a1a]">Seçin...</option>
                        <option className="bg-[#0a0a1a]">SalonPro.io Demo</option>
                        <option className="bg-[#0a0a1a]">Vet Panel Demo</option>
                        <option className="bg-[#0a0a1a]">Stok Panel Demo</option>
                        <option className="bg-[#0a0a1a]">Fiyat Bilgisi</option>
                        <option className="bg-[#0a0a1a]">Teknik Destek</option>
                        <option className="bg-[#0a0a1a]">Diğer</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[13px] text-white/50 mb-1.5">Mesaj <span className="text-[#D4A017]">*</span></label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Mesajınızı yazın..." className={inputClass + " resize-none"} />
                  </div>
                  <button type="submit" disabled={loading} className="w-full bg-[#B8860B] hover:bg-[#9A7209] disabled:opacity-60 text-white py-3 rounded-lg text-[14px] font-medium transition-colors flex items-center justify-center gap-2">
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Gönderiliyor...
                      </>
                    ) : "Mesajı Gönder"}
                  </button>
                </form>
              )}
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-[22px] font-medium text-white mb-6">Sık Sorulan Sorular</h2>
              <div className="space-y-3">
                {faqs.map((f) => (
                  <div key={f.q} className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-xl p-5 hover:border-[rgba(43,94,200,0.3)] transition-colors">
                    <h3 className="text-[14px] font-medium text-white mb-2">{f.q}</h3>
                    <p className="text-[13px] text-white/55 leading-[1.6]">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



