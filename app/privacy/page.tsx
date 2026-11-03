import LegalPage, { CompanyInfo } from "@/components/legal/LegalPage";

export const metadata = {
  title: "Gizlilik Sözleşmesi",
  description: "Marssoft gizlilik sözleşmesi ve KVKK kapsamında kişisel verilerin işlenmesi hakkında aydınlatma metni.",
  alternates: { canonical: "https://marssoft.com.tr/privacy" },
};

export default function Privacy() {
  return (
    <LegalPage title="Gizlilik Sözleşmesi">
      <p>Bu metin, marssoft.com.tr internet sitesi ve Marssoft ürünleri aracılığıyla toplanan kişisel verilerin 6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) kapsamında nasıl işlendiğini açıklar.</p>

      <h2>1. Veri Sorumlusu</h2>
      <CompanyInfo />

      <h2>2. Toplanan Kişisel Veriler</h2>
      <ul>
        <li>Kimlik ve iletişim bilgileri: ad, soyad, e-posta, telefon</li>
        <li>Fatura bilgileri: unvan, adres, vergi dairesi ve numarası</li>
        <li>İşlem bilgileri: sipariş, abonelik ve ödeme durumu kayıtları</li>
        <li>Teknik veriler: IP adresi, tarayıcı bilgisi, çerez verileri</li>
      </ul>
      <p>Kart numarası, son kullanma tarihi ve CVV gibi kart bilgileri Marssoft tarafından görülmez ve saklanmaz; ödeme, BDDK lisanslı ödeme kuruluşu iyzico (iyzi Ödeme ve Elektronik Para Hizmetleri A.Ş.) altyapısında gerçekleştirilir.</p>

      <h2>3. İşleme Amaçları ve Hukuki Sebepler</h2>
      <ul>
        <li>Sözleşmenin kurulması ve ifası, hizmetin sunulması (KVKK m.5/2-c)</li>
        <li>Fatura düzenleme ve yasal yükümlülüklerin yerine getirilmesi (m.5/2-ç)</li>
        <li>İletişim taleplerinin yanıtlanması ve teknik destek (m.5/2-f)</li>
        <li>Bilgi güvenliğinin sağlanması ve dolandırıcılığın önlenmesi (m.5/2-f)</li>
        <li>Açık rıza vermeniz halinde pazarlama iletişimi (m.5/1)</li>
      </ul>

      <h2>4. Verilerin Aktarılması</h2>
      <p>Verileriniz; ödeme hizmeti sağlayıcısı iyzico, barındırma ve e-posta hizmeti sağlayıcıları, mali müşavir ve yetkili kamu kurumlarıyla yukarıdaki amaçlarla sınırlı olarak paylaşılabilir. Verileriniz üçüncü kişilere satılmaz.</p>

      <h2>5. Saklama Süresi</h2>
      <p>Veriler, işleme amacının gerektirdiği süre ve ilgili mevzuatta öngörülen yasal saklama süreleri (ör. ticari defter ve fatura için 10 yıl) boyunca saklanır; sürenin sonunda silinir, yok edilir veya anonim hale getirilir.</p>

      <h2>6. Güvenlik</h2>
      <p>Sitemiz SSL/TLS ile şifrelenmiş (HTTPS) bağlantı üzerinden sunulur. Verilere erişim yetkilendirme ile sınırlandırılmış, makul teknik ve idari tedbirler uygulanmıştır.</p>

      <h2>7. Çerezler</h2>
      <p>Sitemiz, düzgün çalışması ve kullanım istatistikleri için çerez kullanabilir. Tarayıcı ayarlarınızdan çerezleri reddedebilir veya silebilirsiniz; bu durumda bazı özellikler çalışmayabilir.</p>

      <h2>8. KVKK m.11 Kapsamındaki Haklarınız</h2>
      <ul>
        <li>Kişisel verinizin işlenip işlenmediğini öğrenme ve bilgi talep etme</li>
        <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
        <li>Yurt içinde / yurt dışında aktarıldığı üçüncü kişileri bilme</li>
        <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
        <li>Silinmesini veya yok edilmesini isteme ve bunun aktarıldığı üçüncü kişilere bildirilmesini talep etme</li>
        <li>İşlenen verilerin otomatik sistemlerle analiz edilmesi sonucu aleyhinize bir sonuç çıkmasına itiraz etme</li>
        <li>Kanuna aykırı işleme nedeniyle zarara uğramanız halinde zararın giderilmesini talep etme</li>
      </ul>
      <p>Taleplerinizi <a href="mailto:pazarlama@marssoft.com.tr">pazarlama@marssoft.com.tr</a> adresine veya yukarıdaki posta adresine iletebilirsiniz. Başvurular en geç 30 gün içinde sonuçlandırılır.</p>
    </LegalPage>
  );
}
