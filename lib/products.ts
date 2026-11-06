import type { LucideIcon } from "lucide-react";
import { Anchor, Dog, Package, PawPrint, Scissors, Stethoscope } from "lucide-react";

export type Product = {
  id: string;
  name: string;
  tag: string;
  tagline: string;
  description: string;
  features: string[];
  href: string;
  external?: boolean;
  icon: LucideIcon;
  color: string;
  badge?: string;
};

export const products: Product[] = [
  {
    id: "doktorplan",
    name: "DoktorPlan",
    tag: "Klinik & Muayenehane",
    tagline: "Klinik Randevu ve Yönetim Yazılımı",
    description:
      "Doktor muayenehaneleri ve klinikler için randevu, hasta takibi, hatırlatma ve kasa yönetimi tek panelde.",
    features: [
      "Online randevu alma",
      "Hasta kartı & takip",
      "WhatsApp / SMS hatırlatma",
      "Çoklu doktor ve personel",
      "Kasa & ödeme yönetimi",
      "Mobil uyumlu, her cihazda",
      "Dakikalar içinde kurulum",
      "7 gün ücretsiz deneme",
    ],
    href: "https://doktorplan.com",
    external: true,
    icon: Stethoscope,
    color: "#2dd4bf",
    badge: "Yeni",
  },
  {
    id: "stokpanel",
    name: "Stok Panel",
    tag: "Stok & Envanter",
    tagline: "KOBİ Stok & Envanter Yönetimi",
    description:
      "Küçük ve orta ölçekli işletmeler için basit ama güçlü stok yönetim sistemi: barkod, kritik stok uyarısı ve çoklu depo.",
    features: [
      "Barkod ile ürün takibi",
      "Giriş / çıkış hareketleri",
      "Anlık stok seviyeleri",
      "Kritik stok uyarıları",
      "Tedarikçi yönetimi",
      "Detaylı raporlar & analizler",
      "Excel içe/dışa aktarma",
      "Çoklu depo desteği",
    ],
    href: "/solutions#stokpanel",
    icon: Package,
    color: "#f0814f",
  },
  {
    id: "salonpro",
    name: "SalonPro.io",
    tag: "Güzellik & Kuaför",
    tagline: "Güzellik & Kuaför Yönetim Platformu",
    description:
      "Güzellik salonu, kuaför ve estetik merkezleri için AI destekli randevu ve kapsamlı yönetim platformu.",
    features: [
      "Online randevu & takvim yönetimi",
      "WhatsApp otomatik hatırlatma",
      "Müşteri kartı & geçmiş takibi",
      "Personel yönetimi & performans",
      "Gelir & hizmet raporları",
      "Sadakat programı modülü",
      "Online ödeme entegrasyonu",
      "Çoklu şube yönetimi",
    ],
    href: "/salonpro",
    icon: Scissors,
    color: "#D4A017",
    badge: "En popüler",
  },
  {
    id: "vetpanel",
    name: "Vet Panel",
    tag: "Veteriner Klinikleri",
    tagline: "Veteriner Klinik Yönetim Sistemi",
    description: "Hasta kartı, aşı takvimi, ilaç stoku ve kasa modülüyle veteriner kliniğinizi yönetin.",
    features: [
      "Hasta kartı & tıbbi geçmiş",
      "Randevu ve hatırlatma sistemi",
      "İlaç & stok yönetimi",
      "Petshop satış & kasa modülü",
      "Aşı takvimi & bildirimler",
      "Sahip iletişim portali",
      "Fatura & muhasebe entegrasyonu",
      "Çoklu klinik desteği",
    ],
    href: "/solutions#vetpanel",
    icon: PawPrint,
    color: "#34c38f",
  },
  {
    id: "petpanel",
    name: "Pet Panel",
    tag: "Petshop & Pet Market",
    tagline: "Petshop & Pet Market Yönetim Sistemi",
    description: "Satış, stok, grooming randevusu ve sadakat kartını tek sistemde toplayın.",
    features: [
      "Ürün & stok yönetimi",
      "Kasa & satış modülü",
      "Müşteri & evcil hayvan kaydı",
      "Grooming randevu takibi",
      "Tedarikçi & sipariş yönetimi",
      "Sadakat kartı & kampanya sistemi",
      "Fatura & e-arşiv entegrasyonu",
      "Anlık stok uyarıları",
    ],
    href: "/solutions#petpanel",
    icon: Dog,
    color: "#63b3ed",
  },
  {
    id: "marinepanel",
    name: "Marine Panel",
    tag: "Marina & Tekne",
    tagline: "Marina & Tekne Yönetim Sistemi",
    description: "Liman yeri, rezervasyon, bakım kaydı ve faturalandırmayı dijitalleştirin.",
    features: [
      "Tekne & liman yeri yönetimi",
      "Rezervasyon & kiralama takibi",
      "Müşteri & üyelik sistemi",
      "Bakım & servis kayıtları",
      "Yakıt & hizmet faturalandırma",
      "Online ön rezervasyon",
      "Finansal raporlar",
      "Çoklu marina desteği",
    ],
    href: "/solutions#marinepanel",
    icon: Anchor,
    color: "#5b8def",
  },
];
