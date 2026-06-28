"use client";

import { FormEvent, useState } from "react";

const faqs = [
  { q: "Ürünlerinizi nasıl deneyebilirim?", a: "Her ürün için 14 günlük ücretsiz deneme sunuyoruz. Kredi kartı gerekmez, hemen başlayabilirsiniz." },
  { q: "Kurulum ne kadar sürer?", a: "Sisteme giriş yaptıktan sonra birkaç dakikada kullanmaya başlayabilirsiniz. Mevcut verilerinizi aktarmanıza da yardımcı oluyoruz." },
  { q: "Teknik destek nasıl çalışıyor?", a: "WhatsApp ve email üzerinden 7/24 teknik destek sağlıyoruz." },
  { q: "Hangi ürün bana uygun?", a: "Güzellik & kuaför için SalonPro.io, veteriner için Vet Panel, petshop için Pet Panel, marina için Marine Panel, stok takibi için Stok Panel idealdir." },
];

const inputClass = "w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-white text-[14px] px-4 py-2.5 rounded-lg outline-none focus:border-[rgba(212,160,23,0.4)] placeholder:text-white/30 transition-colors";

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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Form */}
      <div>
        <h2 className="text-[22px] font-medium text-white mb-6">Mesaj Gönderin</h2>
        {sent ? (
          <div className="bg-[rgba(27,61,128,0.18)] border border-[rgba(43,94,200,0.3)] rounded-xl p-8 text-center">
            <div className="text-[40px] mb-3">✅</div>
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
              className="w-full disabled:opacity-60 text-white py-3 rounded-lg text-[14px] font-semibold transition-all flex items-center justify-center gap-2 hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #B8860B, #D4A017)" }}>
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Gönderiliyor...
                </>
              ) : "Mesajı Gönder →"}
            </button>
          </form>
        )}
      </div>

      {/* FAQ */}
      <div>
        <h2 className="text-[22px] font-medium text-white mb-6">Sık Sorulan Sorular</h2>
        <div className="space-y-3">
          {faqs.map((f) => (
            <div key={f.q} className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(212,160,23,0.25)] rounded-xl p-5 transition-colors">
              <h3 className="text-[14px] font-medium text-white mb-2">{f.q}</h3>
              <p className="text-[13px] text-white/55 leading-[1.6]">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
