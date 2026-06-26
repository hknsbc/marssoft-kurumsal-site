"use client";

import { useState, useEffect } from "react";

const WA_NUMBER = "905447221935";

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
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setVisible(true), 1500);
    const t2 = setTimeout(() => { setShowBubble(true); }, 3500);
    const t3 = setTimeout(() => setTypingDone(true), 5000);
    const t4 = setTimeout(() => setShowBubble(false), 12000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, []);

  const openWhatsApp = (msg: string) => {
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
    setOpen(false);
  };

  return (
    <>
      {/* Animations */}
      <style>{`
        @keyframes wa-slidein {
          from { opacity: 0; transform: translateY(24px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes wa-bubble {
          from { opacity: 0; transform: translateY(10px) scale(0.9); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes wa-bounce {
          0%, 100% { transform: translateY(0); }
          30%       { transform: translateY(-8px); }
          60%       { transform: translateY(-4px); }
        }
        @keyframes wa-typing {
          0%, 60%, 100% { transform: translateY(0); opacity: .4; }
          30%           { transform: translateY(-4px); opacity: 1; }
        }
        .wa-btn-bounce { animation: wa-bounce 2.4s ease-in-out infinite; }
        .wa-dot1 { animation: wa-typing 1.2s ease-in-out infinite; }
        .wa-dot2 { animation: wa-typing 1.2s ease-in-out .2s infinite; }
        .wa-dot3 { animation: wa-typing 1.2s ease-in-out .4s infinite; }
      `}</style>

      <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">

        {/* Greeting bubble */}
        {showBubble && !open && visible && (
          <div
            onClick={() => { setOpen(true); setShowBubble(false); }}
            className="cursor-pointer max-w-[220px] rounded-2xl rounded-br-none px-4 py-3 shadow-xl select-none"
            style={{
              background: "#fff",
              boxShadow: "0 8px 30px rgba(0,0,0,0.18)",
              animation: "wa-bubble .35s cubic-bezier(.34,1.56,.64,1) both",
            }}
          >
            {!typingDone ? (
              <div className="flex items-center gap-1.5 py-1">
                <span className="wa-dot1 w-2 h-2 rounded-full bg-gray-400 inline-block" />
                <span className="wa-dot2 w-2 h-2 rounded-full bg-gray-400 inline-block" />
                <span className="wa-dot3 w-2 h-2 rounded-full bg-gray-400 inline-block" />
              </div>
            ) : (
              <>
                <p className="text-[13px] text-gray-800 leading-[1.5]">
                  Merhaba! 👋 Size nasıl yardımcı olabilirim?
                </p>
                <p className="text-[10px] text-gray-400 mt-1.5 text-right">Tıklayın →</p>
              </>
            )}
            {/* Tail */}
            <div className="absolute -bottom-2 right-0 w-0 h-0"
              style={{ borderLeft: "10px solid transparent", borderTop: "10px solid #fff" }} />
          </div>
        )}

        {/* Chat panel */}
        {open && (
          <div
            className="w-[310px] sm:w-[340px] rounded-2xl overflow-hidden shadow-2xl"
            style={{
              background: "#111827",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 24px 64px rgba(0,0,0,0.55)",
              animation: "wa-slidein .3s cubic-bezier(.34,1.36,.64,1) both",
            }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3"
              style={{ background: "linear-gradient(135deg, #075E54 0%, #128C7E 100%)" }}>
              <div className="relative flex-shrink-0">
                <div className="w-11 h-11 rounded-full flex items-center justify-center font-black text-[15px] text-white"
                  style={{ background: "rgba(255,255,255,0.2)" }}>M</div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-400 border-2 border-[#075E54]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white font-semibold text-[14px] leading-tight">Marssoft Destek</div>
                <div className="text-green-300 text-[11px]">🟢 Çevrimiçi · Genellikle anında yanıtlar</div>
              </div>
              <button onClick={() => setOpen(false)}
                className="text-white/60 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Chat background */}
            <div className="px-4 py-4 space-y-2"
              style={{
                background: "#ECE5DD",
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c8c8c8' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              }}>
              {/* Bot message */}
              <div className="flex items-end gap-2">
                <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-[11px] font-bold text-white"
                  style={{ background: "#075E54" }}>M</div>
                <div className="max-w-[220px] rounded-2xl rounded-bl-none px-3.5 py-2.5 shadow-sm"
                  style={{ background: "#fff" }}>
                  <p className="text-[13px] text-gray-800 leading-[1.55]">
                    Merhaba! 👋 Ben Marssoft&apos;un destek asistanıyım.
                    Size nasıl yardımcı olabilirim?
                  </p>
                  <p className="text-[10px] text-gray-400 mt-1 text-right">
                    {new Date().toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick reply options */}
            <div className="px-3 pt-3 pb-2" style={{ background: "#111827" }}>
              <p className="text-[10.5px] text-white/35 uppercase tracking-wider mb-2 px-1">Hızlı Seçenekler</p>
              <div className="space-y-1.5 max-h-[200px] overflow-y-auto pr-0.5">
                {quickOptions.map((opt) => (
                  <button key={opt.label} onClick={() => openWhatsApp(opt.msg)}
                    className="w-full text-left text-[12.5px] px-3.5 py-2.5 rounded-xl transition-all hover:scale-[1.01] active:scale-[0.99]"
                    style={{
                      background: "rgba(37,211,102,0.08)",
                      border: "1px solid rgba(37,211,102,0.18)",
                      color: "#4ade80",
                    }}>
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Open WhatsApp button */}
            <div className="px-3 pb-3 pt-2" style={{ background: "#111827" }}>
              <button onClick={() => openWhatsApp("Merhaba, Marssoft hakkında bilgi almak istiyorum.")}
                className="w-full flex items-center justify-center gap-2.5 py-3 rounded-xl font-semibold text-[13.5px] text-white transition-all hover:opacity-90 hover:scale-[1.01] active:scale-[0.99]"
                style={{
                  background: "linear-gradient(135deg, #25D366, #128C7E)",
                  boxShadow: "0 4px 16px rgba(37,211,102,0.3)",
                }}>
                <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp&apos;ta Sohbet Başlat
              </button>
            </div>
          </div>
        )}

        {/* Main floating button */}
        {visible && (
          <button
            onClick={() => { setOpen(!open); setShowBubble(false); }}
            aria-label="WhatsApp ile iletişim"
            className={`w-16 h-16 rounded-full flex items-center justify-center relative transition-all active:scale-95 ${!open ? "wa-btn-bounce" : ""}`}
            style={{
              background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
              boxShadow: open
                ? "0 8px 32px rgba(37,211,102,0.5)"
                : "0 8px 32px rgba(37,211,102,0.45), 0 0 0 0 rgba(37,211,102,0.3)",
            }}
          >
            {/* Pulse rings */}
            {!open && (
              <>
                <span className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ background: "#25D366" }} />
                <span className="absolute inset-[-6px] rounded-full animate-ping opacity-10 animation-delay-300" style={{ background: "#25D366" }} />
              </>
            )}
            {open ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="white" width="30" height="30">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            )}
          </button>
        )}
      </div>
    </>
  );
}
