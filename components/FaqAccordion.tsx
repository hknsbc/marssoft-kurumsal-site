"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Ürünlerinizi ücretsiz deneyebilir miyim?",
    a: "Evet. SalonPro.io, Vet Panel, Pet Panel, Marine Panel ve Stok Panel ürünlerinin tamamı için 14 günlük tam özellikli ücretsiz deneme sunuyoruz. Kredi kartı bilgisi gerekmez.",
  },
  {
    q: "Kurulum süreci ne kadar sürer?",
    a: "Ortalama kurulum süresi 5–10 dakikadır. Teknik bilgiye gerek yok; hesabınızı açın, işletme bilgilerinizi girin ve hemen kullanmaya başlayın.",
  },
  {
    q: "Verilerim güvende mi?",
    a: "Tüm veriler AWS altyapısında 256-bit SSL şifrelemesiyle saklanır. Günlük otomatik yedekleme yapılır ve KVKK uyumluluğumuz tamdır.",
  },
  {
    q: "WhatsApp entegrasyonu nasıl çalışıyor?",
    a: "Resmi WhatsApp Business API üzerinden çalışır. Müşterilerinize randevu hatırlatmaları, onay mesajları ve özel bildirimler otomatik olarak gönderilir.",
  },
  {
    q: "Planımı değiştirebilir veya iptal edebilir miyim?",
    a: "İstediğiniz zaman planınızı yükseltebilir, düşürebilir veya tek tıkla iptal edebilirsiniz. İptal sonrasında ek ücret talep edilmez.",
  },
  {
    q: "7/24 teknik destek nasıl alabilirsiniz?",
    a: "WhatsApp, e-posta ve telefon üzerinden Türkçe uzman ekibimize 7/24 ulaşabilirsiniz. Ortalama yanıt süremiz 2 saatin altındadır.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="rounded-xl overflow-hidden transition-all duration-200"
          style={{
            background: open === i ? "rgba(184,134,11,0.09)" : "rgba(255,255,255,0.03)",
            border: `1px solid ${open === i ? "rgba(212,160,23,0.4)" : "rgba(255,255,255,0.08)"}`,
          }}
        >
          <button
            className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="text-[15px] font-semibold text-white">{faq.q}</span>
            <span
              className="flex-shrink-0 transition-transform duration-200 w-6 h-6 rounded-full flex items-center justify-center"
              style={{
                transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                background: open === i ? "rgba(43,94,200,0.2)" : "rgba(255,255,255,0.07)",
                color: open === i ? "#F0CC6A" : "rgba(255,255,255,0.4)",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </span>
          </button>
          {open === i && (
            <div className="px-6 pb-5">
              <p className="text-[14.5px] leading-[1.75]" style={{ color: "rgba(255,255,255,0.55)" }}>
                {faq.a}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}



