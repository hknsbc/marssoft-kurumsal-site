"use client";

import { FormEvent, useState } from "react";

const faqs = [
  { q: "Ürünlerinizi nasıl deneyebilirim?", a: "Her ürün için 14 günlük ücretsiz deneme sunuyoruz. Kredi kartı gerekmez, hemen başlayabilirsiniz." },
  { q: "Kurulum ne kadar sürer?", a: "Sisteme giriş yaptıktan sonra birkaç dakikada kullanmaya başlayabilirsiniz. Mevcut verilerinizi aktarmanıza da yardımcı oluyoruz." },
  { q: "Teknik destek nasıl çalışıyor?", a: "WhatsApp ve email üzerinden 7/24 teknik destek sağlıyoruz." },
  { q: "Hangi ürün bana uygun?", a: "Güzellik & kuaför için SalonPro.io, doktor ve klinikler için DoktorPlan, veteriner için Vet Panel, petshop için Pet Panel, marina için Marine Panel, stok takibi için Stok Panel idealdir." },
];

const inputClass = "w-full bg-white/[0.04] border border-white/10 text-white text-[14px] px-4 py-3 rounded-xl outline-none focus:border-[#D4A017]/60 focus:bg-white/[0.06] placeholder:text-white/30 transition-colors";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Gönderilemedi.");
      setSent(true);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Bir hata oluştu, tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
      {/* Form */}
      <div>
        <h2 className="font-display text-3xl text-white mb-6">Mesaj gönderin</h2>
        {sent ? (
          <div className="bg-[#D4A017]/[0.07] border border-[#D4A017]/30 rounded-3xl p-8 text-center">
            
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
                  <option className="bg-[#0a0a1a]">Kurumsal Web Sitesi Teklifi</option>
                  <option className="bg-[#0a0a1a]">Özel Yazılım Teklifi</option>
                  <option className="bg-[#0a0a1a]">SalonPro.io Demo</option>
                  <option className="bg-[#0a0a1a]">DoktorPlan Demo</option>
                  <option className="bg-[#0a0a1a]">Vet Panel Demo</option>
                  <option className="bg-[#0a0a1a]">Pet Panel Demo</option>
                  <option className="bg-[#0a0a1a]">Marine Panel Demo</option>
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
            {error && (
              <div className="text-[13px] text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-2.5">
                ⚠️ {error}
              </div>
            )}
            <button type="submit" disabled={loading}
              className="accent-button w-full disabled:opacity-60 text-[#0a0a0f] py-3.5 rounded-full text-[14px] font-semibold transition-all flex items-center justify-center gap-2 hover:opacity-90"
              style={{ background: "linear-gradient(120deg, #B8860B, #D4A017 55%, #F0CC6A)" }}>
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  Gönderiliyor...
                </>
              ) : "Mesajı Gönder →"}
            </button>
          </form>
        )}
      </div>

      {/* FAQ */}
      <div>
        <h2 className="font-display text-3xl text-white mb-6">Sık sorulan sorular</h2>
        <div className="space-y-3">
          {faqs.map((f) => (
            <div key={f.q} className="card-premium rounded-2xl p-5 transition-colors">
              <h3 className="text-[14.5px] font-semibold text-white mb-2">{f.q}</h3>
              <p className="text-[13px] text-white/55 leading-[1.6]">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
