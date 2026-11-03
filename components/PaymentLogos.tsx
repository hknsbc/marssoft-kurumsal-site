export default function PaymentLogos({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center gap-3 sm:items-start ${className}`}>
      <div className="flex items-center gap-2 text-[12px] text-white/60">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
        <span>256-bit SSL Sertifikası ile güvenli ödeme</span>
      </div>
      {/* iyzico logo bandı: iyzico ile Öde, Mastercard, Visa, American Express, Troy */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/payment/logo_band_white.svg"
        alt="iyzico ile Öde, Mastercard, Visa, American Express, Troy"
        width={456}
        height={32}
        className="h-8 w-auto max-w-full"
      />
    </div>
  );
}
