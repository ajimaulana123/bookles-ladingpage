export function PricingComparison() {
  const comparisonData = [
    {
      aspect: "Investasi Awal",
      conventional: "Rp 500 juta - 2 miliar",
      conventionalDetail: "Gedung, rak, buku fisik, AC, dll",
      elfan: "Mulai Rp [X] juta",
      elfanDetail: "Hardware + software + instalasi",
      savings: "Hemat 70-90%"
    },
    {
      aspect: "Biaya Operasional/Tahun",
      conventional: "Rp 50-100 juta",
      conventionalDetail: "Listrik, perawatan, gaji, pembelian buku baru",
      elfan: "Rp 1-2 juta",
      elfanDetail: "Listrik minimal (15-35W)",
      savings: "Hemat 95%"
    },
    {
      aspect: "Ruang yang Dibutuhkan",
      conventional: "200-500 m²",
      conventionalDetail: "Gedung khusus perpustakaan",
      elfan: "< 1 m²",
      elfanDetail: "Hanya untuk server mini",
      savings: "Hemat 99% ruang"
    },
    {
      aspect: "Jumlah Koleksi",
      conventional: "1,000-5,000 buku",
      conventionalDetail: "Terbatas budget & ruang",
      elfan: "10,000+ konten digital",
      elfanDetail: "Buku, video, jurnal, apps",
      savings: "10x lebih banyak"
    },
    {
      aspect: "Waktu Akses",
      conventional: "08:00 - 16:00",
      conventionalDetail: "Terbatas jam operasional",
      elfan: "24/7 Non-Stop",
      elfanDetail: "Akses kapan saja, dimana saja",
      savings: "3x lebih lama"
    },
    {
      aspect: "Maintenance",
      conventional: "Tinggi & Kompleks",
      conventionalDetail: "Perawatan buku, gedung, AC",
      elfan: "Minimal & Mudah",
      elfanDetail: "Update software otomatis",
      savings: "90% lebih mudah"
    },
    {
      aspect: "Dampak Lingkungan",
      conventional: "Tinggi",
      conventionalDetail: "Kertas, listrik AC, transportasi",
      elfan: "Rendah",
      elfanDetail: "Paperless, hemat energi",
      savings: "Go Green"
    },
    {
      aspect: "Skalabilitas",
      conventional: "Sulit",
      conventionalDetail: "Perlu tambah ruang & rak",
      elfan: "Mudah",
      elfanDetail: "Tinggal tambah storage",
      savings: "Unlimited"
    },
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              📊 Perbandingan ROI
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Perpustakaan Konvensional vs ELFAN System
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Lihat sendiri berapa banyak yang bisa Anda hemat dengan beralih ke perpustakaan digital
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
            {/* Table Header */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-slate-900 text-white">
              <div className="font-bold text-lg">Aspek</div>
              <div className="font-bold text-lg text-center">Perpustakaan Konvensional</div>
              <div className="font-bold text-lg text-center">ELFAN System</div>
            </div>

            {/* Table Rows */}
            {comparisonData.map((row, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-3 gap-4 p-6 ${
                  index % 2 === 0 ? 'bg-white' : 'bg-slate-50'
                }`}
              >
                {/* Aspect */}
                <div>
                  <div className="font-bold text-slate-900 mb-1">{row.aspect}</div>
                  <div className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                    {row.savings}
                  </div>
                </div>

                {/* Conventional */}
                <div className="text-center">
                  <div className="text-lg font-bold text-red-600 mb-1">{row.conventional}</div>
                  <div className="text-sm text-slate-600">{row.conventionalDetail}</div>
                </div>

                {/* ELFAN */}
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600 mb-1">{row.elfan}</div>
                  <div className="text-sm text-slate-600">{row.elfanDetail}</div>
                </div>
              </div>
            ))}
          </div>

          {/* ROI Calculator Teaser */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">
              Hitung ROI Anda Sendiri
            </h3>
            <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
              Dengan investasi [X] juta, Anda bisa hemat Rp 50-100 juta per tahun. 
              ROI tercapai dalam 1-2 tahun pertama!
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">70-90%</div>
                <div className="text-sm">Hemat Investasi Awal</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-sm">Hemat Biaya Operasional</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">1-2 Tahun</div>
                <div className="text-sm">Payback Period</div>
              </div>
            </div>
            <a 
              href="https://wa.me/6289604666665?text=Halo%20ELFAN%20System%2C%20saya%20ingin%20hitung%20ROI%20untuk%20institusi%20saya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8"
            >
              <button className="px-8 py-4 bg-white text-green-700 font-bold rounded-full text-lg hover:bg-green-50 transition-all">
                Hitung ROI Institusi Anda
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
