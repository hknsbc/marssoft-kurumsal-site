import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SalonPro.io — Kuaför ve Güzellik Salonu Yönetim Yazılımı",
  description:
    "Randevu yönetimi, WhatsApp hatırlatmalar, gelir & ciro takibi. SalonPro.io ile salonunuzu bir üst seviyeye taşıyın. 14 gün ücretsiz deneyin.",
};

export default function SalonProLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        #marssoft-global-nav,
        #marssoft-global-footer {
          display: none !important;
        }
        body > main {
          padding: 0 !important;
        }
      `}</style>
      {children}
    </>
  );
}
