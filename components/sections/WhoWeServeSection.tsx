import { Card } from "@/components/ui/card"

export function WhoWeServeSection() {
  const targetMarkets = [
    { 
      icon: "🏛️", 
      title: "Universitas & Perguruan Tinggi", 
      description: "Perpustakaan kampus modern dengan koleksi digital lengkap untuk mahasiswa dan dosen",
      benefits: ["Akses 24/7", "Kolaborasi riset", "E-journal unlimited"]
    },
    { 
      icon: "🏫", 
      title: "Sekolah & Madrasah", 
      description: "Tingkatkan literasi siswa dengan perpustakaan digital yang mudah diakses",
      benefits: ["Konten edukatif", "Ramah anak", "Monitoring guru"]
    },
    { 
      icon: "🕌", 
      title: "Masjid & Musholla", 
      description: "Perpustakaan digital Islami untuk jamaah dengan ribuan kitab dan kajian",
      benefits: ["Kitab klasik", "Kajian audio", "Jadwal sholat"]
    },
    { 
      icon: "🏘️", 
      title: "Pesantren & Pondok", 
      description: "Digitalisasi kitab kuning dan referensi keislaman untuk santri",
      benefits: ["Kitab kuning", "Tafsir lengkap", "Hadits shahih"]
    },
    { 
      icon: "🏢", 
      title: "Instansi Pemerintah", 
      description: "Smart City & Smart Village dengan perpustakaan digital untuk masyarakat",
      benefits: ["Akses publik", "Hemat APBD", "Laporan digital"]
    },
    { 
      icon: "🏭", 
      title: "Perusahaan & Korporat", 
      description: "Corporate library untuk pengembangan SDM dan knowledge management",
      benefits: ["Training material", "SOP digital", "Knowledge base"]
    },
    { 
      icon: "👥", 
      title: "Komunitas & TBM", 
      description: "Taman Bacaan Masyarakat dengan akses perpustakaan digital terjangkau",
      benefits: ["Biaya rendah", "Mudah dikelola", "Konten variatif"]
    },
    { 
      icon: "🌐", 
      title: "Organisasi & Yayasan", 
      description: "Lembaga pendidikan dan dakwah dengan perpustakaan digital modern",
      benefits: ["Multi-cabang", "Sentralisasi", "Reporting"]
    }
  ]

  const missions = [
    {
      icon: "💰",
      title: "Solusi Ekonomis",
      description: "Mengurangi biaya operasional perpustakaan hingga 70% dengan sistem digital yang efisien dan hemat energi",
      impact: "Hemat Rp 50-100 juta/tahun"
    },
    {
      icon: "📚",
      title: "Akses Literasi Merata",
      description: "Menyediakan akses ke ribuan koleksi buku digital Islami dan umum untuk semua kalangan tanpa batasan",
      impact: "10,000+ konten berkualitas"
    },
    {
      icon: "🎓",
      title: "Edukasi Teknologi",
      description: "Memperkenalkan teknologi digital kepada masyarakat melalui sistem perpustakaan yang mudah digunakan",
      impact: "Literasi digital meningkat"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Mission Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
                Misi Kami
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Mengapa ELFAN SYSTEM Ada?
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Kami berkomitmen untuk mentransformasi akses literasi di Indonesia melalui teknologi yang tepat guna
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {missions.map((mission, index) => (
                <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 group">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">{mission.icon}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{mission.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{mission.description}</p>
                  <div className="inline-block px-4 py-2 bg-green-50 text-green-700 rounded-lg text-sm font-semibold">
                    {mission.impact}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Target Market Section */}
          <div>
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                Untuk Siapa?
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Solusi untuk Berbagai Institusi
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                ELFAN System dirancang fleksibel untuk memenuhi kebutuhan berbagai jenis institusi pendidikan dan keagamaan
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {targetMarkets.map((market, index) => (
                <Card key={index} className="p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{market.icon}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{market.title}</h3>
                  <p className="text-sm text-slate-600 mb-4">{market.description}</p>
                  <div className="space-y-2">
                    {market.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-xs text-slate-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            {/* Bottom Banner */}
            <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">
                Institusi Anda Termasuk yang Mana?
              </h3>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Tidak masalah jenis institusi Anda, ELFAN System dapat disesuaikan dengan kebutuhan spesifik Anda. 
                Konsultasikan dengan tim kami untuk solusi terbaik.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/6289604666665?text=Halo%20ELFAN%20System%2C%20saya%20dari%20%5BJenis%20Institusi%5D%20ingin%20konsultasi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <button className="px-8 py-4 bg-white text-blue-700 font-bold rounded-full hover:bg-blue-50 transition-colors">
                    Konsultasi Gratis
                  </button>
                </a>
                <a 
                  href="/harga"
                  className="inline-block"
                >
                  <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors">
                    Lihat Paket & Harga
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
