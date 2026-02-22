import { TARGET_MARKETS } from "@/lib/constants"

export function ProductUseCases() {
  const useCases = [
    {
      industry: "Universitas & Perguruan Tinggi",
      icon: "🎓",
      challenge: "Mahasiswa kesulitan akses jurnal dan referensi riset, biaya langganan jurnal online sangat mahal",
      solution: "ELFAN System menyediakan 10,000+ e-book dan 1,000+ e-journal dalam jaringan intranet kampus",
      results: [
        "Akses jurnal meningkat 300%",
        "Hemat biaya langganan 70%",
        "Support riset mahasiswa 24/7",
        "Meningkatkan akreditasi kampus",
      ],
      color: "blue",
      recommended: "Bookless Library System",
    },
    {
      industry: "Sekolah (SD, SMP, SMA/SMK)",
      icon: "🏫",
      challenge: "Ruang perpustakaan terbatas, koleksi buku kurang update, siswa kurang minat baca",
      solution: "Perpustakaan digital dengan interface menarik dan konten edukatif yang selalu update",
      results: [
        "Minat baca siswa naik 250%",
        "Hemat ruang penyimpanan 100%",
        "Koleksi selalu up-to-date",
        "Akses dari kelas manapun",
      ],
      color: "green",
      recommended: "Bookless Library System",
    },
    {
      industry: "Masjid & Musholla",
      icon: "🕌",
      challenge: "Jamaah butuh referensi agama, tapi ruang terbatas dan budget minim untuk beli kitab",
      solution: "Perpustakaan digital Islami dengan ribuan kitab klasik dan modern, akses gratis untuk jamaah",
      results: [
        "Jamaah lebih mudah belajar agama",
        "Hemat biaya pembelian kitab 90%",
        "Tidak perlu ruang khusus",
        "Meningkatkan aktivitas masjid",
      ],
      color: "green",
      recommended: "Bookless Library System",
    },
    {
      industry: "Pesantren & Madrasah",
      icon: "📖",
      challenge: "Kitab kuning mahal dan mudah rusak, santri perlu akses referensi tambahan untuk kajian",
      solution: "Digitalisasi kitab kuning + koleksi referensi Islami lengkap, akses offline tanpa internet",
      results: [
        "Santri lebih mudah akses kitab",
        "Kitab fisik terlindungi",
        "Fokus santri terjaga (no internet)",
        "Hemat biaya pembelian kitab 80%",
      ],
      color: "green",
      recommended: "Hybrid Library System",
    },
    {
      industry: "Pemerintah Daerah (Smart City)",
      icon: "🏛️",
      challenge: "Program literasi masyarakat terhambat biaya dan infrastruktur perpustakaan konvensional",
      solution: "Perpustakaan digital di taman, balai desa, dan ruang publik dengan akses gratis untuk warga",
      results: [
        "Literasi masyarakat meningkat",
        "Hemat biaya pembangunan gedung",
        "Akses perpustakaan di area publik",
        "Mendukung program Smart City",
      ],
      color: "purple",
      recommended: "Bookless Library System",
    },
    {
      industry: "Perusahaan & Corporate",
      icon: "🏢",
      challenge: "Karyawan butuh akses knowledge base dan training material, tapi sulit dikelola secara manual",
      solution: "Corporate digital library dengan sistem manajemen konten dan tracking progress karyawan",
      results: [
        "Efisiensi training meningkat",
        "Knowledge sharing lebih mudah",
        "Tracking progress otomatis",
        "Hemat biaya training offline",
      ],
      color: "blue",
      recommended: "Bookless Library System",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Solusi untuk Berbagai Institusi
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              ELFAN System telah membantu berbagai jenis institusi mengatasi tantangan perpustakaan mereka
            </p>
          </div>

          {/* Use Cases Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-all">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-5xl">{useCase.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{useCase.industry}</h3>
                    <span className={`text-sm font-semibold ${
                      useCase.color === 'blue' ? 'text-blue-600' :
                      useCase.color === 'green' ? 'text-green-600' :
                      'text-purple-600'
                    }`}>
                      Rekomendasi: {useCase.recommended}
                    </span>
                  </div>
                </div>

                {/* Challenge */}
                <div className="mb-4">
                  <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="text-red-500">⚠️</span>
                    Tantangan:
                  </h4>
                  <p className="text-sm text-slate-600">{useCase.challenge}</p>
                </div>

                {/* Solution */}
                <div className="mb-4">
                  <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="text-green-500">💡</span>
                    Solusi ELFAN:
                  </h4>
                  <p className="text-sm text-slate-600">{useCase.solution}</p>
                </div>

                {/* Results */}
                <div className="bg-white rounded-xl p-4">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="text-blue-500">📊</span>
                    Hasil:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {useCase.results.map((result, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-xs text-slate-700">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Target Markets Overview */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Melayani Semua Sektor
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {TARGET_MARKETS.map((market, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-2">{market.icon}</div>
                  <div className="font-bold text-slate-900 text-sm">{market.title}</div>
                  <div className="text-xs text-slate-600">{market.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Box */}
          <div className="mt-12 bg-slate-900 text-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Tidak Menemukan Kategori Anda?
            </h3>
            <p className="text-slate-300 mb-6">
              Kami dapat menyesuaikan solusi ELFAN System untuk kebutuhan spesifik institusi Anda
            </p>
            <a 
              href="https://wa.me/6289604666665?text=Halo%20ELFAN%20System%2C%20saya%20ingin%20konsultasi%20untuk%20solusi%20custom."
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full transition-all transform hover:scale-105">
                Konsultasi Custom Solution
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
