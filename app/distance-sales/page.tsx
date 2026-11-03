import Link from "next/link";
import LegalPage, { CompanyInfo } from "@/components/legal/LegalPage";

export const metadata = {
  title: "Mesafeli Satış Sözleşmesi",
  description: "Marssoft dijital hizmet ve abonelik satışları için mesafeli satış sözleşmesi.",
  alternates: { canonical: "https://marssoft.com.tr/distance-sales" },
};

export default function DistanceSales() {
  return (
    <LegalPage title="Mesafeli Satış Sözleşmesi">
      <h2>Madde 1 – Taraflar</h2>
      <p><strong>SATICI</strong></p>
      <CompanyInfo />
      <p><strong>ALICI</strong>: Sipariş sırasında ad-soyad/unvan, adres, e-posta ve telefon bilgilerini beyan eden kişi veya kuruluştur. Bu bilgiler sipariş formunda yer alır ve sözleşmenin ayrılmaz parçasıdır.</p>

      <h2>Madde 2 – Konu</h2>
      <p>İşbu sözleşmenin konusu, ALICI&apos;nın SATICI&apos;ya ait marssoft.com.tr internet sitesi üzerinden elektronik ortamda sipariş ettiği bulut tabanlı yazılım (SaaS) aboneliğinin satışı ve ifasına ilişkin olarak 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği hükümleri uyarınca tarafların hak ve yükümlülüklerinin belirlenmesidir.</p>

      <h2>Madde 3 – Sözleşme Konusu Hizmet</h2>
      <p>Hizmetin adı, planı, süresi (aylık/yıllık), KDV dahil toplam bedeli ve ödeme şekli sipariş özetinde belirtilir. Hizmet fiziksel olmayan, elektronik ortamda ifa edilen dijital bir hizmettir.</p>

      <h2>Madde 4 – Ödeme</h2>
      <p>Ödeme, kredi/banka kartı ile BDDK lisanslı ödeme kuruluşu iyzico altyapısı üzerinden, 3D Secure doğrulamasıyla alınır. Kart bilgileri SATICI tarafından görülmez ve saklanmaz. Abonelik yenilemelerinde bedel, ALICI&apos;nın onayı çerçevesinde aynı yöntemle tahsil edilir.</p>

      <h2>Madde 5 – İfa ve Teslimat</h2>
      <p>Hizmet erişimi, ödemenin onaylanmasının ardından elektronik ortamda en geç 24 saat içinde ALICI&apos;ya tanımlanır. Teslimat ücreti yoktur. Ayrıntılar için <Link href="/delivery-returns">Teslimat ve İade Şartları</Link> sayfasına bakınız.</p>

      <h2>Madde 6 – Cayma Hakkı</h2>
      <p>Mesafeli Sözleşmeler Yönetmeliği m.15/1-ğ uyarınca elektronik ortamda anında ifa edilen hizmetlerde ve tüketiciye anında teslim edilen gayri maddi mallarda cayma hakkı bulunmamaktadır. ALICI, siparişi onaylamakla bu hususta bilgilendirildiğini kabul eder. SATICI&apos;nın ilk dönem için sunduğu gönüllü iade imkânı <Link href="/delivery-returns">Teslimat ve İade Şartları</Link> sayfasında düzenlenmiştir.</p>

      <h2>Madde 7 – SATICI&apos;nın Yükümlülükleri</h2>
      <ul>
        <li>Hizmeti sipariş özetindeki niteliklere uygun ve kesintisiz sunmak için makul çabayı göstermek,</li>
        <li>Planlı bakım ve mücbir sebepler dışındaki kesintileri en kısa sürede gidermek,</li>
        <li>ALICI&apos;nın kişisel verilerini <Link href="/privacy">Gizlilik Sözleşmesi</Link> çerçevesinde işlemek.</li>
      </ul>

      <h2>Madde 8 – ALICI&apos;nın Yükümlülükleri</h2>
      <ul>
        <li>Sipariş sırasında doğru ve güncel bilgi vermek,</li>
        <li>Hesap bilgilerinin gizliliğini korumak ve hizmeti hukuka uygun kullanmak,</li>
        <li>Hizmet bedelini zamanında ödemek.</li>
      </ul>

      <h2>Madde 9 – Ön Bilgilendirme</h2>
      <p>ALICI, sözleşmenin kurulmasından önce hizmetin temel nitelikleri, toplam bedeli, ödeme ve ifa şekli, cayma hakkına ilişkin istisna ve başvuru yollarına dair ön bilgileri okuyup elektronik ortamda onayladığını kabul eder.</p>

      <h2>Madde 10 – Uyuşmazlıkların Çözümü</h2>
      <p>İşbu sözleşmeden doğan uyuşmazlıklarda, her yıl Ticaret Bakanlığı tarafından ilan edilen parasal sınırlar dahilinde ALICI&apos;nın veya SATICI&apos;nın yerleşim yerindeki Tüketici Hakem Heyetleri ve Tüketici Mahkemeleri yetkilidir.</p>

      <h2>Madde 11 – Yürürlük</h2>
      <p>ALICI, sipariş sırasında işbu sözleşmenin tüm koşullarını okuyup kabul ettiğini beyan eder. Sözleşme, siparişin onaylandığı anda kurulmuş ve yürürlüğe girmiş sayılır.</p>
    </LegalPage>
  );
}
