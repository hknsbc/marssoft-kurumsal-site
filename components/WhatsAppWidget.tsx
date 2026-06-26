"use client";

import { useState, useEffect } from "react";

const WA_NUMBER = "905447221935";

const botMessages = [
  { id: "greeting", from: "bot", text: "Merhaba! 👋 Ben Marssoft Asistan'ım. Size nasıl yardımcı olabilirim?" },
];

const quickOptions = [
  { label: "💇 SalonPro.io hakkında bilgi", msg: "Merhaba, SalonPro.io hakkında bilgi almak istiyorum." },
  { label: "🐾 Vet Panel demo talebi", msg: "Merhaba, Vet Panel için demo talep etmek istiyorum." },
  { label: "🐶 Pet Panel hakkında bilgi", msg: "Merhaba, Pet Panel hakkında bilgi almak istiyorum." },
  { label: "⚓ Marine Panel hakkında bilgi", msg: "Merhaba, Marine Panel hakkında bilgi almak istiyorum." },
  { label: "📦 Stok Panel demo talebi", msg: "Merhaba, Stok Panel için demo talep etmek istiyorum." },
  { label: "💰 Fiyat teklifi istiyorum", msg: "Merhaba, fiyat teklifi almak istiyorum." },
];

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    // 2 saniye sonra widget görünsün
    const t1 = setTimeout(() => setVisible(true), 2000);
    // 4 saniye sonra karşılama balonu çıksın
    const t2 = setTimeout(() => setShowBubble(true), 4000);
    // 10 saniye sonra balonunu gizle
    const t3 = setTimeout(() => setShowBubble(false), 10000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  const openWhatsApp = (msg: string) => {
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    setOpen(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* Chat panel */}
      {open && (
        <div
          className="w-[320px] rounded-2xl overflow-hidden shadow-2xl"
          style={{
            background: "#1a1a2e",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
          }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3"
            style={{ background: "linear-gradient(135deg, #075E54, #128C7E)" }}>
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-[14px] flex-shrink-0">
              M
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white font-semibold text-[14px]">Marssoft Destek</div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-green-300 text-[11px]">Çevrimiçi</span>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white p-1">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Chat area */}
          <div className="px-4 py-4 space-y-3"
            style={{ background: "#ECE5DD", minHeight: "120px" }}>
            {botMessages.map((m) => (
              <div key={m.id} className="flex justify-start">
                <div className="max-w-[240px] rounded-xl rounded-tl-none px-3.5 py-2.5 shadow-sm"
                  style={{ background: "#fff" }}>
                  <p className="text-[13px] text-gray-800 leading-[1.5]">{m.text}</p>
                  <p className="text-[10px] text-gray-400 mt-1 text-right">Şimdi</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick options */}
          <div className="px-4 py-3 space-y-2" style={{ background: "#1a1a2e" }}>
            <p className="text-[11px] text-white/40 mb-2">Bir konu seçin veya doğrudan yazın:</p>
            {quickOptions.map((opt) => (
              <button
                key={opt.label}
                onClick={() => openWhatsApp(opt.msg)}
                className="w-full text-left text-[12.5px] px-3 py-2 rounded-lg transition-all hover:-translate-y-0.5"
                style={{
                  background: "rgba(37,211,102,0.1)",
                  border: "1px solid rgba(37,211,102,0.2)",
                  color: "#4ade80",
                }}
              >
                {opt.label}
              </button>
            ))}
            <button
              onClick={() => openWhatsApp("Merhaba, Marssoft hakkında bilgi almak istiyorum.")}
              className="w-full text-center text-[12px] py-2 rounded-lg font-semibold mt-1 transition-all hover:opacity-90"
              style={{ background: "#25D366", color: "#fff" }}
            >
              💬 WhatsApp'ta Yaz
            </button>
          </div>
        </div>
      )}

      {/* Greeting bubble */}
      {showBubble && !open && (
        <div
          className="max-w-[220px] rounded-2xl rounded-br-none px-4 py-3 cursor-pointer shadow-lg"
          style={{ background: "#fff", boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}
          onClick={() => { setOpen(true); setShowBubble(false); }}
        >
          <p className="text-[13px] text-gray-800 leading-[1.5]">
            Merhaba! 👋 Size nasıl yardımcı olabilirim?
          </p>
          <p className="text-[10px] text-gray-400 mt-1">Tıklayın, yanıtlayalım →</p>
        </div>
      )}

      {/* Main button */}
      <button
        onClick={() => { setOpen(!open); setShowBubble(false); }}
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95 relative"
        style={{
          background: "linear-gradient(135deg, #25D366, #128C7E)",
          boxShadow: "0 8px 32px rgba(37,211,102,0.4)",
        }}
        aria-label="WhatsApp ile iletişim"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full animate-ping opacity-30"
          style={{ background: "#25D366" }} />
        <svg viewBox="0 0 24 24" fill="white" width="28" height="28">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </button>
    </div>
  );
}
