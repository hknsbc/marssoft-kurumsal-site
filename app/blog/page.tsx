import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "Güzellik Salonunuzu Dijitalleştirmenin 5 Yolu",
    excerpt: "Randevu yönetiminden müşteri takibine kadar, güzellik salonunuzu dijitalleştirerek nasıl daha verimli çalışabilirsiniz?",
    date: "12 Haziran 2025",
    readTime: "5 dk",
    category: "Güzellik",
    categoryColor: "text-[#7F77DD] bg-[rgba(83,74,183,0.15)]",
  },
  {
    id: 2,
    title: "Veteriner Kliniklerinde Dijital Dönüşüm",
    excerpt: "Hasta takibi, randevu yönetimi ve stok kontrolünü dijitalleştirerek klinik verimliliğini artırmanın yolları.",
    date: "5 Haziran 2025",
    readTime: "7 dk",
    category: "Veteriner",
    categoryColor: "text-emerald-400 bg-[rgba(29,158,117,0.15)]",
  },
  {
    id: 3,
    title: "KOBİ'ler İçin Stok Yönetimi Rehberi",
    excerpt: "Stok takibini doğru yapmak, işletme maliyetlerini düşürmenin en etkili yollarından biri. İşte başlamanız için gerekenler.",
    date: "28 Mayıs 2025",
    readTime: "6 dk",
    category: "Stok Yönetimi",
    categoryColor: "text-orange-400 bg-[rgba(216,90,48,0.15)]",
  },
  {
    id: 4,
    title: "WhatsApp Entegrasyonu ile Müşteri İletişimi",
    excerpt: "SalonPro.io'nun WhatsApp özelliğini kullanarak otomatik randevu hatırlatmaları ile müşteri devamsızlığını nasıl azaltırsınız?",
    date: "20 Mayıs 2025",
    readTime: "4 dk",
    category: "SalonPro",
    categoryColor: "text-[#7F77DD] bg-[rgba(83,74,183,0.15)]",
  },
];

const categories = ["Tümü", "Güzellik", "Veteriner", "Stok Yönetimi", "SalonPro", "İpuçları"];

export const metadata = {
  title: "Blog",
  description: "Marssoft Blog — KOBİ dijital dönüşümü, SaaS yazılım ipuçları, sektör haberleri ve işletme yönetimi hakkında güncel içerikler.",
  alternates: { canonical: "https://marssoft.com.tr/blog" },
  openGraph: {
    title: "Blog | Marssoft",
    description: "KOBİ dijital dönüşümü ve SaaS yazılım hakkında güncel içerikler.",
    url: "https://marssoft.com.tr/blog",
  },
};

export default function Blog() {
  return (
    <div className="bg-[#0a0a1a] text-white">
      {/* Hero */}
      <section className="border-b border-[rgba(255,255,255,0.08)] px-6 lg:px-8 py-16"
        style={{ background: "linear-gradient(135deg, #0a0a1a 0%, #1a1040 50%, #0d1a30 100%)" }}>
        <div className="max-w-6xl mx-auto max-w-[560px]">
          <div className="text-[12px] text-[#7F77DD] uppercase tracking-[2px] mb-3">Blog</div>
          <h1 className="text-[36px] md:text-[42px] font-medium text-white leading-[1.2] mb-4">
            KOBİ&apos;ler İçin <span className="text-[#7F77DD]">Rehberler & İpuçları</span>
          </h1>
          <p className="text-[16px] text-white/60 leading-[1.7]">
            İşletmenizi büyütmek ve dijitalleştirmek için pratik içerikler.
          </p>
        </div>
      </section>

      {/* Categories */}
      <div className="border-b border-[rgba(255,255,255,0.06)] sticky top-16 z-40 bg-[rgba(10,10,26,0.97)] backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-4 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-3.5 py-1.5 rounded-full text-[13px] transition-colors ${
                cat === "Tümü"
                  ? "bg-[#534AB7] text-white"
                  : "bg-[rgba(255,255,255,0.05)] text-white/60 hover:text-white border border-[rgba(255,255,255,0.08)] hover:border-[rgba(127,119,221,0.3)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Posts */}
      <section className="px-6 lg:px-8 py-14">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          {posts.map((post) => (
            <article key={post.id} className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(127,119,221,0.3)] rounded-xl overflow-hidden transition-colors group">
              <div className="h-36 bg-[rgba(83,74,183,0.08)] border-b border-[rgba(255,255,255,0.05)] flex items-center justify-center">
                <span className="text-[48px] font-black text-white/5 group-hover:text-white/10 transition-colors select-none">
                  {post.category[0]}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${post.categoryColor}`}>
                    {post.category}
                  </span>
                  <span className="text-[12px] text-white/40">{post.readTime} okuma · {post.date}</span>
                </div>
                <h3 className="text-[16px] font-medium text-white mb-2 leading-snug">{post.title}</h3>
                <p className="text-[13px] text-white/50 leading-[1.6] mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.id}`} className="text-[13px] text-[#7F77DD] hover:text-[#AFA9EC] transition-colors">
                  Devamını Oku →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-t border-[rgba(255,255,255,0.06)] px-6 lg:px-8 py-14">
        <div className="max-w-lg mx-auto text-center">
          <div className="text-[12px] text-[#7F77DD] uppercase tracking-[2px] mb-3">Bülten</div>
          <h2 className="text-[24px] font-medium text-white mb-3">Yeni İçeriklerden Haberdar Olun</h2>
          <p className="text-[14px] text-white/50 mb-6">Haftada bir, işinize yarayacak ipuçları.</p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="E-posta adresiniz..."
              className="flex-1 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-white text-[14px] px-4 py-2.5 rounded-lg outline-none focus:border-[rgba(127,119,221,0.5)] placeholder:text-white/30 transition-colors"
            />
            <button className="bg-[#534AB7] hover:bg-[#4a42a3] text-white px-5 py-2.5 rounded-lg text-[14px] font-medium transition-colors flex-shrink-0">
              Abone Ol
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
