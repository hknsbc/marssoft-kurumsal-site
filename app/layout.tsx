import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marssoft — KOBİ'lere Özel SaaS Yazılımlar | marssoft.com.tr",
  description: "VET PANEL, güzellik salonu ve stok yönetimi için bulut tabanlı SaaS yazılımlar. SalonPro.io, Vet Panel ve Stok Panel ürünleriyle işletmenizi dijitalleştirin.",
  keywords: "SaaS yazılım, güzellik salonu yazılımı, VET PANEL yazılımı, Stok Panel, KOBİ yazılımı, SalonPro, Vet Panel, İstanbul",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
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

