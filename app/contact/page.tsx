import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { PageHero } from "@/components/site/ui";
import { company } from "@/lib/company";

const contactInfo = [
  { icon: MapPin, label: "Adres", value: company.address, href: undefined },
  { icon: Mail, label: "E-posta", value: company.email, href: `mailto:${company.email}` },
  { icon: Phone, label: "Telefon", value: company.phone, href: `tel:${company.phone.replace(/\s/g, "")}` },
  { icon: Clock, label: "Destek", value: "7/24 teknik destek", href: undefined },
];

export const metadata = {
  title: "İletişim",
  description:
    "Marssoft ile iletişime geçin. Kurumsal web sitesi teklifi alın, yazılım demosu talep edin veya sorularınızı iletin.",
  alternates: { canonical: "https://marssoft.com.tr/contact" },
  openGraph: {
    title: "İletişim | Marssoft",
    description: "Web sitesi teklifi veya yazılım demosu için bize ulaşın.",
    url: "https://marssoft.com.tr/contact",
  },
};

export default function Contact() {
  return (
    <div className="bg-[#05060a] text-white">
      <PageHero
        eyebrow="İletişim"
        title="Size nasıl yardımcı"
        accent="olabiliriz?"
        description="Kurumsal web sitesi teklifi almak, yazılımlarımızı denemek veya sorularınızı iletmek için bize yazın."
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.label} delay={i * 70}>
                  <div className="card-premium h-full rounded-3xl p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#D4A017]/25 bg-[#D4A017]/10 text-[#D4A017]">
                      <Icon size={18} />
                    </div>
                    <p className="mt-5 text-[11.5px] uppercase tracking-[0.2em] text-white/40">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="mt-1.5 block text-[14px] leading-6 text-white/80 transition-colors hover:text-[#F0CC6A]">
                        {c.value}
                      </a>
                    ) : (
                      <p className="mt-1.5 text-[14px] leading-6 text-white/80">{c.value}</p>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
