import Reveal from "@/components/Reveal";
import { PageHero } from "@/components/site/ui";

const posts = [
  {
    id: 1,
    title: "Güzellik Salonunuzu Dijitalleştirmenin 5 Yolu",
    excerpt: "Randevu yönetiminden müşteri takibine kadar, güzellik salonunuzu dijitalleştirerek nasıl daha verimli çalışabilirsiniz?",
    date: "12 Haziran 2025",
    readTime: "5 dk",
    category: "Güzellik",
    color: "#D4A017",
  },
  {
    id: 2,
    title: "Veteriner Kliniklerinde Dijital Dönüşüm",
    excerpt: "Hasta takibi, randevu yönetimi ve stok kontrolünü dijitalleştirerek klinik verimliliğini artırmanın yolları.",
    date: "5 Haziran 2025",
    readTime: "7 dk",
    category: "Veteriner",
    color: "#34c38f",
  },
  {
    id: 3,
    title: "KOBİ'ler İçin Stok Yönetimi Rehberi",
    excerpt: "Stok takibini doğru yapmak, işletme maliyetlerini düşürmenin en etkili yollarından biri. İşte başlamanız için gerekenler.",
    date: "28 Mayıs 2025",
    readTime: "6 dk",
    category: "Stok Yönetimi",
    color: "#f0814f",
  },
  {
    id: 4,
    title: "WhatsApp Entegrasyonu ile Müşteri İletişimi",
    excerpt: "SalonPro.io'nun WhatsApp özelliğini kullanarak otomatik randevu hatırlatmaları ile müşteri devamsızlığını nasıl azaltırsınız?",
    date: "20 Mayıs 2025",
    readTime: "4 dk",
    category: "SalonPro",
    color: "#5b8def",
  },
];

export const metadata = {
  title: "Blog",
  description: "Marssoft Blog — web sitesi, KOBİ dijital dönüşümü, yazılım ipuçları ve işletme yönetimi hakkında güncel içerikler.",
  alternates: { canonical: "https://marssoft.com.tr/blog" },
  openGraph: {
    title: "Blog | Marssoft",
    description: "KOBİ dijital dönüşümü ve yazılım hakkında güncel içerikler.",
    url: "https://marssoft.com.tr/blog",
  },
};

export default function Blog() {
  return (
    <div className="bg-[#05060a] text-white">
      <PageHero
        eyebrow="Blog"
        title="Rehberler &"
        accent="ipuçları."
        description="İşletmenizi büyütmek ve dijitalleştirmek için pratik içerikler."
      />

      <section className="py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 lg:px-8">
          {posts.map((post, i) => (
            <Reveal key={post.id} delay={(i % 2) * 90} className="flex">
              <article className="card-premium group flex w-full flex-col overflow-hidden rounded-[28px]">
                <div
                  className="relative flex h-40 items-center justify-center overflow-hidden border-b border-white/[0.06]"
                  style={{ background: `linear-gradient(135deg, ${post.color}22, transparent 70%)` }}
                >
                  <span
                    className="font-display select-none text-[110px] italic leading-none opacity-20 transition-opacity group-hover:opacity-40"
                    style={{ color: post.color }}
                  >
                    {post.category[0]}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center gap-3">
                    <span
                      className="rounded-full border px-3 py-1 text-[10.5px] font-semibold uppercase tracking-wider"
                      style={{ borderColor: `${post.color}55`, color: post.color, background: `${post.color}12` }}
                    >
                      {post.category}
                    </span>
                    <span className="text-[12px] text-white/40">
                      {post.readTime} okuma · {post.date}
                    </span>
                  </div>
                  <h3 className="font-display mt-4 text-[26px] leading-snug text-white">{post.title}</h3>
                  <p className="mt-3 flex-1 text-[14px] leading-7 text-white/50">{post.excerpt}</p>
                  <span className="mt-5 text-[12px] font-semibold uppercase tracking-[0.2em] text-white/35">
                    Yakında
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
