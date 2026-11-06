// Saf CSS ile çizilmiş, örnek amaçlı arayüz görselleri (gerçek müşteri verisi içermez).

export function BrowserMockup({ className = "" }: { className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-white/10 bg-[#0b0c12] shadow-[0_40px_120px_rgba(0,0,0,0.55)] ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-white/[0.07] bg-white/[0.03] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
        <div className="ml-3 flex-1 rounded-full bg-white/[0.05] px-4 py-1 text-[11px] text-white/35">
          markaniz.com.tr
        </div>
      </div>
      <div className="relative p-6">
        <div className="flex items-center justify-between">
          <div className="h-3 w-20 rounded-full bg-gradient-to-r from-[#B8860B] to-[#F0CC6A]" />
          <div className="hidden gap-3 sm:flex">
            {[28, 36, 24, 32].map((w, i) => (
              <div key={i} className="h-1.5 rounded-full bg-white/20" style={{ width: w }} />
            ))}
          </div>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-[1.2fr_0.8fr] sm:items-center">
          <div>
            <div className="h-2 w-24 rounded-full bg-[#D4A017]/60" />
            <div className="mt-4 h-5 w-11/12 rounded-md bg-white/85" />
            <div className="mt-2.5 h-5 w-8/12 rounded-md bg-white/85" />
            <div className="mt-5 h-2 w-full rounded-full bg-white/15" />
            <div className="mt-2 h-2 w-10/12 rounded-full bg-white/15" />
            <div className="mt-6 flex gap-3">
              <div className="h-8 w-24 rounded-full bg-gradient-to-r from-[#B8860B] to-[#F0CC6A]" />
              <div className="h-8 w-20 rounded-full border border-white/20" />
            </div>
          </div>
          <div className="relative h-36 rounded-2xl bg-gradient-to-br from-[#2B5EC8]/40 via-[#1A3D80]/30 to-[#D4A017]/30">
            <div className="absolute inset-3 rounded-xl border border-white/15" />
            <div className="absolute bottom-3 left-3 right-3 h-8 rounded-lg bg-black/40 backdrop-blur" />
          </div>
        </div>
        <div className="mt-7 grid grid-cols-3 gap-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
              <div className="h-5 w-5 rounded-md bg-[#D4A017]/30" />
              <div className="mt-3 h-2 w-3/4 rounded-full bg-white/30" />
              <div className="mt-2 h-1.5 w-full rounded-full bg-white/10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ClinicMockup({ className = "" }: { className?: string }) {
  const rows = [
    { time: "09:00", name: "Hasta kaydı A.Y.", type: "Muayene", ok: true },
    { time: "09:30", name: "Hasta kaydı M.K.", type: "Kontrol", ok: true },
    { time: "10:15", name: "Hasta kaydı S.D.", type: "Muayene", ok: false },
    { time: "11:00", name: "Hasta kaydı E.T.", type: "Kontrol", ok: true },
  ];
  return (
    <div className={`overflow-hidden rounded-2xl border border-white/10 bg-[#080a10] shadow-[0_40px_120px_rgba(0,0,0,0.55)] ${className}`}>
      <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#2dd4bf]">DoktorPlan</p>
          <p className="font-display mt-1 text-lg text-white">Bugünün randevuları</p>
        </div>
        <span className="rounded-full border border-[#2dd4bf]/30 bg-[#2dd4bf]/10 px-3 py-1 text-[11px] font-semibold text-[#2dd4bf]">
          WhatsApp hatırlatma açık
        </span>
      </div>
      <div className="divide-y divide-white/[0.06]">
        {rows.map((r) => (
          <div key={r.time} className="flex items-center gap-4 px-5 py-3.5">
            <span className="w-12 text-[13px] font-semibold text-white/80">{r.time}</span>
            <div className="h-8 w-px bg-[#2dd4bf]/40" />
            <div className="flex-1">
              <p className="text-[13px] text-white">{r.name}</p>
              <p className="text-[11.5px] text-white/40">{r.type}</p>
            </div>
            <span
              className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                r.ok ? "bg-[#2dd4bf]/12 text-[#2dd4bf]" : "bg-[#D4A017]/12 text-[#F0CC6A]"
              }`}
            >
              {r.ok ? "Onaylandı" : "Bekliyor"}
            </span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-px border-t border-white/[0.07] bg-white/[0.07]">
        {[
          ["Bugün", "12"],
          ["Bu hafta", "58"],
          ["Doluluk", "%87"],
        ].map(([k, v]) => (
          <div key={k} className="bg-[#080a10] px-5 py-4">
            <p className="text-[11px] text-white/40">{k}</p>
            <p className="font-display mt-1 text-2xl text-white">{v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function StockMockup({ className = "" }: { className?: string }) {
  const items = [
    { sku: "ÜRN-1042", name: "Örnek ürün A", qty: 240, pct: 82, low: false },
    { sku: "ÜRN-2210", name: "Örnek ürün B", qty: 36, pct: 34, low: false },
    { sku: "ÜRN-0877", name: "Örnek ürün C", qty: 6, pct: 9, low: true },
    { sku: "ÜRN-3391", name: "Örnek ürün D", qty: 128, pct: 61, low: false },
  ];
  return (
    <div className={`overflow-hidden rounded-2xl border border-white/10 bg-[#0b0908] shadow-[0_40px_120px_rgba(0,0,0,0.55)] ${className}`}>
      <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#f0814f]">Stok Panel</p>
          <p className="font-display mt-1 text-lg text-white">Anlık stok durumu</p>
        </div>
        <span className="rounded-full border border-[#f0814f]/30 bg-[#f0814f]/10 px-3 py-1 text-[11px] font-semibold text-[#f0814f]">
          1 kritik uyarı
        </span>
      </div>
      <div className="space-y-px">
        {items.map((it) => (
          <div key={it.sku} className="px-5 py-3.5">
            <div className="flex items-center justify-between text-[13px]">
              <span className="text-white">
                {it.name} <span className="ml-2 text-[11px] text-white/35">{it.sku}</span>
              </span>
              <span className={it.low ? "font-semibold text-[#f0814f]" : "text-white/70"}>{it.qty} adet</span>
            </div>
            <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div
                className={`h-full rounded-full ${
                  it.low ? "bg-[#f0814f]" : "bg-gradient-to-r from-[#B8860B] to-[#F0CC6A]"
                }`}
                style={{ width: `${it.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-white/[0.07] px-5 py-4 text-[12px] text-white/45">
        <span>Barkod okutuldu · giriş kaydedildi</span>
        <span className="text-[#34c38f]">● Senkron</span>
      </div>
    </div>
  );
}
