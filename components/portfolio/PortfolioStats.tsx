export function PortfolioStats() {
  const stats = [
    {
      value: "6+",
      label: "Implementasi Sukses",
      description: "Dari Solo hingga Kalimantan",
      icon: "🎯"
    },
    {
      value: "4",
      label: "Provinsi Terlayani",
      description: "Jawa Tengah, Jawa Barat, Jawa Timur, Kalimantan Timur",
      icon: "📍"
    },
    {
      value: "100%",
      label: "Tingkat Kepuasan",
      description: "Semua klien puas dan merekomendasikan",
      icon: "⭐"
    },
    {
      value: "3",
      label: "Kategori Institusi",
      description: "Universitas, Pesantren, Pemerintah",
      icon: "🏛️"
    },
  ]

  const categories = [
    {
      title: "Pendidikan Tinggi",
      count: "1",
      example: "UMKT Kalimantan Timur",
      icon: "🎓",
      color: "blue"
    },
    {
      title: "Pesantren & Pendidikan Islam",
      count: "3",
      example: "Bekasi, Bojonegoro, Yayasan",
      icon: "🕌",
      color: "green"
    },
    {
      title: "Fasilitas Publik & Smart City",
      count: "1",
      example: "Science Center Bandung",
      icon: "🏛️",
      color: "purple"
    },
    {
      title: "Pusat Riset & Pengembangan",
      count: "1",
      example: "Kampung IT Solo",
      icon: "🔬",
      color: "orange"
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Statistik Implementasi Nasional
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Angka-angka yang membuktikan kepercayaan dan kesuksesan ELFAN System di berbagai institusi
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/10 transition-all">
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-5xl font-bold text-green-400 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold mb-2">{stat.label}</div>
                <div className="text-sm text-slate-400">{stat.description}</div>
              </div>
            ))}
          </div>

          {/* Categories Breakdown */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Distribusi per Kategori Institusi</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <div key={index} className="text-center">
                  <div className="text-6xl mb-4">{category.icon}</div>
                  <div className={`text-4xl font-bold mb-2 ${
                    category.color === 'blue' ? 'text-blue-400' :
                    category.color === 'green' ? 'text-green-400' :
                    category.color === 'purple' ? 'text-purple-400' :
                    'text-orange-400'
                  }`}>
                    {category.count}
                  </div>
                  <div className="font-bold mb-2">{category.title}</div>
                  <div className="text-sm text-slate-400">{category.example}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Geographic Coverage */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-6">Jangkauan Geografis</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Solo", "Bekasi", "Bojonegoro", "Bandung", "Samarinda"].map((city, index) => (
                <div key={index} className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full">
                  <span className="font-semibold">{city}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-slate-400">
              Dan terus berkembang ke berbagai kota di Indonesia
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
