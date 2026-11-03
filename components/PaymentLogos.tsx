export default function PaymentLogos({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
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
