import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://marssoft.com.tr"),
  title: {
    default: "Marssoft — Kurumsal Web Siteleri & Sektöre Özel Yazılımlar",
    template: "%s | Marssoft",
  },
  description:
    "Marssoft; kurumsal web siteleri tasarlar, DoktorPlan, Stok Panel, SalonPro.io gibi sektöre özel bulut yazılımlar geliştirir. İşletmenizi premium bir dijital altyapıyla büyütün.",
  keywords: [
    "kurumsal web sitesi", "web tasarım", "özel yazılım geliştirme", "SaaS yazılım", "KOBİ yazılımı", "bulut yazılım", "güzellik salonu yazılımı",
    "kuaför programı", "SalonPro", "randevu programı", "veteriner yazılımı",
    "DoktorPlan", "klinik randevu yazılımı", "Vet Panel", "Pet Panel", "petshop yazılımı", "marina yazılımı", "Marine Panel",
    "stok takip programı", "Stok Panel", "envanter yönetimi", "Marssoft",
    "dijital dönüşüm", "işletme yönetim yazılımı",
  ],
  authors: [{ name: "Marssoft", url: "https://marssoft.com.tr" }],
  creator: "Marssoft",
  publisher: "Marssoft",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://marssoft.com.tr",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://marssoft.com.tr",
    siteName: "Marssoft",
    title: "Marssoft — KOBİ'lerin Dijital Dönüşüm Ortağı",
    description:
      "SalonPro.io, DoktorPlan, Vet Panel, Pet Panel, Marine Panel ve Stok Panel — işletmeniz için hazır bulut SaaS çözümleri.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Marssoft — KOBİ'lere Özel SaaS Yazılımlar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marssoft — KOBİ'lerin Dijital Dönüşüm Ortağı",
    description:
      "SalonPro.io, DoktorPlan, Vet Panel, Pet Panel, Marine Panel ve Stok Panel ile işletmenizi dijitalleştirin.",
    images: ["/og-image.png"],
    site: "@marssoft",
    creator: "@marssoft",
  },
  verification: {
    google: "google-site-verification-buraya-kod-gelecek",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://marssoft.com.tr/#organization",
        name: "Marssoft",
        url: "https://marssoft.com.tr",
        logo: "https://marssoft.com.tr/logo.png",
        description: "KOBİ'lere özel bulut tabanlı SaaS yazılım çözümleri.",
        contactPoint: {
          "@type": "ContactPoint",
          email: "info@marssoft.com.tr",
          contactType: "customer support",
          availableLanguage: ["Turkish", "English"],
        },
        sameAs: [
          "https://twitter.com/marssoft",
          "https://linkedin.com/company/marssoft",
          "https://instagram.com/marssoft",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://marssoft.com.tr/#website",
        url: "https://marssoft.com.tr",
        name: "Marssoft",
        publisher: { "@id": "https://marssoft.com.tr/#organization" },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://marssoft.com.tr/?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "SoftwareApplication",
        name: "SalonPro.io",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        offers: { "@type": "Offer", price: "0", priceCurrency: "TRY", description: "Fiyat için iletişime geçin" },
        description: "Kuaför ve güzellik salonları için randevu ve yönetim yazılımı.",
        url: "https://marssoft.com.tr/solutions#salonpro",
      },
      {
        "@type": "SoftwareApplication",
        name: "Vet Panel",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        offers: { "@type": "Offer", price: "0", priceCurrency: "TRY", description: "Fiyat için iletişime geçin" },
        description: "Veteriner klinikleri için hasta takibi ve yönetim yazılımı.",
        url: "https://marssoft.com.tr/solutions#vetpanel",
      },
    ],
  };

  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

