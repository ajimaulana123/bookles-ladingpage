import Image from "next/image"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ValuePropositionSection() {
  const collections = [
    {
      icon: "📚",
      title: "10,000+ Digital Books",
      count: "10,000+",
      description: "Koleksi lengkap kitab klasik hingga referensi modern",
      categories: ["Tafsir", "Hadits", "Fiqih", "Akhlak", "Sejarah", "Umum"],
      color: "green"
    },
    {
      icon: "🎥",
      title: "Video Edukasi HD",
      count: "500+",
      description: "Pembelajaran interaktif dengan video berkualitas tinggi",
      categories: ["Kajian", "Tutorial", "Dokumenter", "Animasi"],
      color: "blue"
    },
    {
      icon: "📄",
      title: "E-Journal & Artikel",
      count: "1,000+",
      description: "Jurnal ilmiah dan artikel penelitian terkini",
      categories: ["Penelitian", "Artikel", "Paper", "Thesis"],
      color: "purple"
    },
    {
      icon: "⚡",
      title: "Aplikasi Produktivitas",
      count: "50+",
      description: "Tools pendukung pembelajaran dan produktivitas",
      categories: ["Office", "Reader", "Note", "Utility"],
      color: "orange"
    }
  ]

  const specs = [
    {
      category: "Server Mini PC",
      icon: "🖥️",
      description: "Pusat data lokal yang powerful namun hemat energi",
      items: [
        { label: "Processor", value: "Intel Core i3/i5 atau AMD Ryzen" },
        { label: "RAM", value: "8GB - 16GB DDR4" },
        { label: "Storage", value: "500GB - 2TB SSD" },
        { label: "Power", value: "Low Power (15-35W)", badge: "Eco-Friendly" }
      ]
    },
    {
      category: "Wireless Router",
      icon: "📡",
      description: "Jangkauan luas untuk akses di seluruh area gedung",
      items: [
        { label: "Type", value: "High Speed Wireless AC/AX" },
        { label: "Speed", value: "Up to 1200 Mbps", badge: "High Speed" },
        { label: "Range", value: "Coverage up to 100m²" },
        { label: "Users", value: "50-100 concurrent users" }
      ]
    },
    {
      category: "Kapasitas & Backup",
      icon: "💾",
      description: "Penyimpanan besar dengan sistem backup otomatis",
      items: [
        { label: "E-Books", value: "10,000+ titles" },
        { label: "Videos", value: "500+ hours HD content" },
        { label: "Storage", value: "Up to 2TB expandable" },
        { label: "Backup", value: "Automatic daily backup" }
      ]
    }
  ]

  const features = [
    {
      icon: "🔍",
      title: "Smart Search",
      description: "Pencarian cerdas dengan AI untuk menemukan konten dalam hitungan detik"
    },
    {
      icon: "🔖",
      title: "Bookmark & Notes",
      description: "Tandai halaman penting dan buat catatan digital"
    },
    {
      icon: "📊",
      title: "Analytics Dashboard",
      description: "Pantau statistik penggunaan dan konten populer"
    },
    {
      icon: "🔄",
      title: "Auto Sync",
      description: "Sinkronisasi otomatis antar perangkat"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Kekayaan Konten & Teknologi Tangguh
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Value yang Anda Dapatkan
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ribuan konten berkualitas didukung infrastruktur teknologi yang handal dan hemat energi
            </p>
          </div>

          {/* Collections Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {collections.map((collection, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 group">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{collection.icon}</div>
                <div className={`text-4xl font-bold mb-2 ${
                  collection.color === 'green' ? 'text-green-600' :
                  collection.color === 'blue' ? 'text-blue-600' :
                  collection.color === 'purple' ? 'text-purple-600' :
                  'text-orange-600'
                }`}>
                  {collection.count}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{collection.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{collection.description}</p>
                <div className="flex flex-wrap gap-2">
                  {collection.categories.map((cat, idx) => (
                    <span key={idx} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">
                      {cat}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Smart Search Feature Highlight */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-12 mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-green-600 text-white rounded-full text-sm font-semibold mb-4">
                  Fitur Unggulan
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  Smart Search dengan AI
                </h3>
                <p className="text-lg text-slate-600 mb-6">
                  Temukan konten yang Anda butuhkan dalam hitungan detik dengan teknologi pencarian cerdas berbasis AI.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="text-2xl">{feature.icon}</div>
                      <div>
                        <div className="font-semibold text-slate-900 text-sm">{feature.title}</div>
                        <div className="text-xs text-slate-600">{feature.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-80 rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&q=80"
                  alt="Smart Search Interface"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Infrastruktur Minimalis, Performa Maksimal
              </h3>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Hardware berkualitas dengan konsumsi daya rendah untuk operasional 24/7 yang efisien
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {specs.map((spec, index) => (
                <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                  <div className="text-5xl mb-4">{spec.icon}</div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{spec.category}</h4>
                  <p className="text-sm text-slate-600 mb-6">{spec.description}</p>
                  <div className="space-y-3">
                    {spec.items.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-start">
                        <span className="text-sm text-slate-600">{item.label}:</span>
                        <div className="text-right">
                          <span className="text-sm font-semibold text-slate-900">{item.value}</span>
                          {item.badge && (
                            <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">
                              {item.badge}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            {/* Key Benefits */}
            <div className="bg-slate-900 rounded-2xl p-8 text-white">
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl mb-2">⚡</div>
                  <div className="font-bold mb-1">Plug & Play</div>
                  <div className="text-sm text-slate-300">Setup dalam 1 hari</div>
                </div>
                <div>
                  <div className="text-3xl mb-2">🔋</div>
                  <div className="font-bold mb-1">Hemat Energi</div>
                  <div className="text-sm text-slate-300">Konsumsi 15-35W saja</div>
                </div>
                <div>
                  <div className="text-3xl mb-2">🛡️</div>
                  <div className="font-bold mb-1">Reliable 24/7</div>
                  <div className="text-sm text-slate-300">Operasional non-stop</div>
                </div>
                <div>
                  <div className="text-3xl mb-2">🌱</div>
                  <div className="font-bold mb-1">Eco-Friendly</div>
                  <div className="text-sm text-slate-300">Ramah lingkungan</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <p className="text-lg text-slate-600 mb-6">
                Ingin tahu lebih detail tentang spesifikasi teknis?
              </p>
              <Link href="/produk">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Lihat Spesifikasi Lengkap
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
