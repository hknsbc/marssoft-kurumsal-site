import LegalPage, { CompanyInfo } from "@/components/legal/LegalPage";

export const metadata = {
  title: "Teslimat ve İade Şartları",
  description: "Marssoft dijital ürün ve abonelik hizmetleri için teslimat, iptal ve iade şartları.",
  alternates: { canonical: "https://marssoft.com.tr/delivery-returns" },
};

export default function DeliveryReturns() {
  return (
    <LegalPage title="Teslimat ve İade Şartları">
      <p>Marssoft, bulut tabanlı yazılım (SaaS) abonelikleri sunar. Satışa konu ürünler fiziksel değildir; kargo ile gönderim yapılmaz.</p>

      <h2>1. Teslimat</h2>
      <ul>
        <li>Ödemenin onaylanmasının ardından hizmet erişimi (hesap/kullanım hakkı) elektronik ortamda, genellikle birkaç dakika, en geç 24 saat içinde tanımlanır.</li>
        <li>Giriş bilgileri ve fatura, alıcının bildirdiği e-posta adresine gönderilir.</li>
        <li>Teslimat ücreti alınmaz.</li>
        <li>Erişim sağlanamaması halinde <a href="mailto:pazarlama@marssoft.com.tr">pazarlama@marssoft.com.tr</a> adresinden destek alınabilir.</li>
      </ul>

      <h2>2. Ücretsiz Deneme</h2>
      <p>Planlarda sunulan 14 günlük ücretsiz deneme süresinde kredi kartı gerekmez; deneme sonunda ücretli plana geçiş alıcının onayına bağlıdır.</p>

      <h2>3. Cayma Hakkı ve İade</h2>
      <ul>
        <li>6502 sayılı Kanun ve Mesafeli Sözleşmeler Yönetmeliği m.15/1-ğ uyarınca, elektronik ortamda anında ifa edilen hizmetler ve tüketiciye anında teslim edilen gayri maddi mallarda cayma hakkı kullanılamaz.</li>
        <li>Buna rağmen Marssoft, ilk ücretli abonelik dönemi için satın alma tarihinden itibaren <strong>14 gün</strong> içinde yapılan yazılı iade taleplerini, hizmet kullanımı ağırlıklı olarak gerçekleşmemişse kabul eder.</li>
        <li>Hizmetin ayıplı olması veya sözleşmeye uygun sunulamaması halinde yasal haklar saklıdır.</li>
      </ul>

      <h2>4. İptal</h2>
      <p>Abonelik, ceza ödemeden istenildiği zaman iptal edilebilir. İptal, içinde bulunulan dönem sonunda geçerli olur; dönem sonuna kadar hizmet kullanılmaya devam edilir. Kısmi dönem için ücret iadesi yapılmaz (yukarıdaki 14 günlük iade hakkı saklıdır).</p>

      <h2>5. İade Süreci</h2>
      <ul>
        <li>İade talebi e-posta ile sipariş bilgileriyle birlikte iletilir.</li>
        <li>Onaylanan iadeler, ödemenin yapıldığı karta/ödeme yöntemine en geç 14 gün içinde başlatılır; hesaba yansıma süresi bankaya göre değişir (genellikle 2-10 iş günü).</li>
        <li>İade, ödeme altyapısı iyzico üzerinden aynı yöntemle yapılır.</li>
      </ul>

      <h2>6. İletişim</h2>
      <CompanyInfo />
    </LegalPage>
  );
}
