import type { ReactNode } from "react";
import { company } from "@/lib/company";

export default function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="bg-[#0a0a1a] text-white">
      <section
        className="border-b border-[rgba(255,255,255,0.08)] px-6 lg:px-8 py-14"
        style={{ background: "linear-gradient(135deg, #0a0a1a 0%, #1a1040 50%, #0d1a30 100%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-[12px] text-[#D4A017] uppercase tracking-[2px] mb-3">Yasal</div>
          <h1 className="text-[32px] md:text-[40px] font-medium leading-[1.2]">{title}</h1>
          <p className="text-[13px] text-white/40 mt-3">Son güncelleme: {company.updated}</p>
        </div>
      </section>
      <section className="px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto space-y-4 text-[14.5px] leading-[1.8] text-white/65 [&_h2]:text-[19px] [&_h2]:font-medium [&_h2]:text-white [&_h2]:pt-6 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5 [&_a]:text-[#D4A017]">
          {children}
        </div>
      </section>
    </div>
  );
}

export function CompanyInfo() {
  return (
    <ul>
      <li>Unvan: {company.legalName}</li>
      <li>Adres: {company.address}</li>
      <li>Vergi Dairesi / No: {company.taxOffice} / {company.taxNumber}</li>
      <li>Telefon: {company.phone}</li>
      <li>E-posta: <a href={`mailto:${company.email}`}>{company.email}</a></li>
    </ul>
  );
}
