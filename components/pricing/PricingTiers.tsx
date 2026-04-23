import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function PricingTiers() {
  const tiers = [
    {
      name: "PAKET 30 USER",
      subtitle: "Server Second",
      tagline: "Untuk Sekolah & Pesantren Kecil",
      badge: "BEST VALUE",
      description: "Paket lengkap dengan bonus aplikasi wakaf. Cocok untuk institusi kecil dengan budget terbatas.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
      features: [
        "✅ PC Server Second Like New (Xeon E3 1225 V5, 8GB RAM, 1TB SSD)",
        "✅ Mikrotik RB941 Indoor",
        "✅ Access Point Ubiquiti Long Range (450/867 Mbps)",
        "✅ 10,000+ Koleksi Digital",
        "✅ Support 30 concurrent users",
        "✅ BONUS: Aplikasi Bookless Library",
        "✅ BONUS: Aplikasi Inventaris",
        "✅ BONUS: Aplikasi Piket Kebersihan",
        "✅ BONUS: Aplikasi ElTube",
        "✅ BONUS: Aplikasi Manajemen Productivity",
        "✅ Setup & Instalasi",
        "✅ Training Dasar",
        "✅ Garansi Hardware 1 Tahun",
        "✅ Support Teknis 24/7",
      ],
      notIncluded: [],
      color: "green",
      popular: true,
    },
    {
      name: "PAKET 50 USER",
      subtitle: "Server Second",
      tagline: "Untuk Institusi Menengah",
      badge: "SMART HOME",
      description: "Upgrade spesifikasi dengan bonus Smart Home Package untuk institusi menengah.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
      features: [
        "✅ PC Server Second Like New (Lenovo ThinkServer TS150)",
        "✅ Intel Xeon E3 1225 V5 3.30 GHz, 8GB RAM, 1TB SSD",
        "✅ Mikrotik RB450 (Upgrade)",
        "✅ Access Point Ubiquiti Long Range (450/867 Mbps)",
        "✅ 🏠 BONUS: Smart Home Package (Google Nest, IR Remote, Lampu WiFi)",
        "✅ 10,000+ Koleksi Digital",
        "✅ Support 50 concurrent users",
        "✅ BONUS: Aplikasi Bookless Library",
        "✅ BONUS: Aplikasi Inventaris",
        "✅ BONUS: Aplikasi Piket Kebersihan",
        "✅ BONUS: Aplikasi ElTube",
        "✅ BONUS: Aplikasi Manajemen Productivity",
        "✅ Setup & Instalasi",
        "✅ Training Lengkap (Onsite)",
        "✅ Garansi Hardware 1 Tahun",
        "✅ Support Teknis 24/7",
      ],
      notIncluded: [],
      color: "blue",
      popular: false,
    },
    {
      name: "PAKET 50 USER",
      subtitle: "Server Baru",
      tagline: "Untuk Institusi Menengah",
      badge: "BRAND NEW",
      description: "Server brand new PowerEdge T150 dengan Smart Home untuk performa maksimal.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
      features: [
        "✅ PC Server BARU PowerEdge T150",
        "✅ Intel Xeon E-2224G 3.5 GHz, 8GB RAM, 1TB HDD",
        "✅ Mikrotik RB450",
        "✅ 2x Access Point Ubiquiti Long Range (450/867 Mbps)",
        "✅ 🏠 BONUS: Smart Home Package (Google Nest, IR Remote, Lampu WiFi)",
        "✅ 10,000+ Koleksi Digital",
        "✅ Support 50 concurrent users",
        "✅ BONUS: Aplikasi Bookless Library",
        "✅ BONUS: Aplikasi Inventaris",
        "✅ BONUS: Aplikasi Piket Kebersihan",
        "✅ BONUS: Aplikasi ElTube",
        "✅ BONUS: Aplikasi Manajemen Productivity",
        "✅ Setup & Instalasi",
        "✅ Training Lengkap (Onsite)",
        "✅ Garansi Hardware 2 Tahun (Brand New)",
        "✅ Support Teknis 24/7",
      ],
      notIncluded: [],
      color: "indigo",
      popular: false,
    },
    {
      name: "PAKET 100 USER",
      subtitle: "Server Baru",
      tagline: "Untuk Universitas & Pemerintah",
      badge: "ENTERPRISE",
      description: "Server enterprise Dell T440 dengan Smart Home untuk institusi besar.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
      features: [
        "✅ PC Server BARU Dell T440 (Enterprise)",
        "✅ Intel Xeon Bronze 3204, 8GB RAM, 1TB HDD",
        "✅ Mikrotik RB450",
        "✅ 3x Access Point Ubiquiti Long Range (450/867 Mbps)",
        "✅ 🏠 BONUS: Smart Home Package (Google Nest, IR Remote, Lampu WiFi)",
        "✅ 10,000+ Koleksi Digital",
        "✅ Support 100+ concurrent users",
        "✅ BONUS: Aplikasi Bookless Library",
        "✅ BONUS: Aplikasi Inventaris",
        "✅ BONUS: Aplikasi Piket Kebersihan",
        "✅ BONUS: Aplikasi ElTube",
        "✅ BONUS: Aplikasi Manajemen Productivity",
        "✅ Setup & Instalasi Enterprise",
        "✅ Training Advanced (Onsite + Online)",
        "✅ Garansi Hardware 3 Tahun (Enterprise)",
        "✅ Premium Support 24/7",
        "✅ Dedicated Account Manager",
      ],
      notIncluded: [],
      color: "purple",
      popular: false,
    },
  ]

  return (
    <section id="pricing-tiers" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Pilihan Paket Sesuai Kebutuhan
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Semua paket include hardware, software, instalasi, dan training. 
              Tidak ada biaya bulanan atau biaya tersembunyi. Hubungi kami untuk informasi harga!
            </p>
          </div>

          {/* Value Proposition Banner */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 mb-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">🎁 BONUS APLIKASI WAKAF PREMIUM!</h3>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Setiap paket mendapat GRATIS 5 aplikasi premium: Bookless Library, Inventaris, Piket, ElTube, dan Manajemen Productivity. 
              Hubungi kami untuk informasi harga dan penawaran khusus!
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {tiers.map((tier, index) => (
              <Card 
                key={index} 
                className={`relative overflow-hidden ${
                  tier.popular 
                    ? 'border-4 border-green-500 shadow-2xl' 
                    : 'border-2 border-slate-200 hover:shadow-xl'
                } transition-all duration-300`}
              >
                {/* Popular Badge */}
                {tier.popular && (
                  <div className="absolute top-0 right-0 bg-green-600 text-white px-4 py-2 text-xs font-bold z-10 rounded-bl-lg">
                    ⭐ PALING POPULER
                  </div>
                )}

                {/* Badge */}
                {tier.badge && !tier.popular && (
                  <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-2 text-xs font-bold z-10 rounded-bl-lg">
                    {tier.badge}
                  </div>
                )}

                {/* Image Header */}
                {tier.image && (
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={tier.image} 
                      alt={tier.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                )}

                <div className="p-6">
                  {/* Tier Name */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-slate-900 mb-0.5">{tier.name}</h3>
                    {tier.subtitle && (
                      <p className="text-xs text-blue-600 font-semibold mb-1">({tier.subtitle})</p>
                    )}
                    <p className="text-xs text-slate-600">{tier.tagline}</p>
                  </div>

                  {/* Price - Contact for Quote */}
                  <div className="mb-4">
                    <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 text-center">
                      <p className="text-sm font-bold text-green-700 mb-1">💰 Harga Terjangkau</p>
                      <p className="text-xs text-slate-600">Hubungi kami untuk penawaran terbaik</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 mb-4 leading-relaxed text-sm font-semibold">{tier.description}</p>

                  {/* CTA Button */}
                  <a 
                    href={`https://wa.me/6289604666665?text=Halo%20ELFAN%20System%2C%20saya%20tertarik%20dengan%20${tier.name}%20${tier.subtitle ? tier.subtitle : ''}%20dan%20ingin%20tahu%20harganya`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mb-4"
                  >
                    <Button 
                      className={`w-full ${
                        tier.popular 
                          ? 'bg-green-600 hover:bg-green-700' 
                          : 'bg-slate-900 hover:bg-slate-800'
                      } text-white py-4 text-sm font-bold rounded-xl`}
                    >
                      Tanya Harga →
                    </Button>
                  </a>

                  {/* Features List */}
                  <div className="space-y-2 mb-4">
                    <p className="text-xs font-bold text-slate-900 mb-2">Yang Anda Dapatkan:</p>
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-xs text-slate-700 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="bg-slate-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Butuh Paket Custom?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Kami dapat menyesuaikan paket sesuai kebutuhan spesifik institusi Anda. 
              Hubungi tim kami untuk konsultasi gratis dan penawaran khusus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/6289604666665?text=Halo%20ELFAN%20System%2C%20saya%20butuh%20paket%20custom"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Konsultasi Gratis
                </Button>
              </a>
              <a href="/produk">
                <Button size="lg" variant="outline" className="border-2 border-slate-300">
                  Lihat Detail Produk
                </Button>
              </a>
            </div>
          </div>

          {/* Payment Options */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Opsi Pembayaran</h3>
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="p-6 bg-white rounded-xl border-2 border-slate-200">
                <div className="text-4xl mb-3">💳</div>
                <h4 className="font-bold text-slate-900 mb-2">Cash/Transfer</h4>
                <p className="text-sm text-slate-600">Pembayaran langsung</p>
              </div>
              <div className="p-6 bg-white rounded-xl border-2 border-slate-200">
                <div className="text-4xl mb-3">📅</div>
                <h4 className="font-bold text-slate-900 mb-2">Cicilan</h4>
                <p className="text-sm text-slate-600">Tersedia cicilan</p>
              </div>
              <div className="p-6 bg-white rounded-xl border-2 border-slate-200">
                <div className="text-4xl mb-3">🏦</div>
                <h4 className="font-bold text-slate-900 mb-2">Leasing</h4>
                <p className="text-sm text-slate-600">Partner leasing</p>
              </div>
              <div className="p-6 bg-white rounded-xl border-2 border-slate-200">
                <div className="text-4xl mb-3">🏛️</div>
                <h4 className="font-bold text-slate-900 mb-2">APBD/Hibah</h4>
                <p className="text-sm text-slate-600">Proses mudah</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
