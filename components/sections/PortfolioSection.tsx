import Image from "next/image"

export function PortfolioSection() {
  const implementations = [
    {
      title: "[Nama Institusi 1]",
      location: "[Kota, Provinsi]",
      type: "Perpustakaan Sekolah",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
      imageAlt: "[TODO: Foto implementasi ELFAN System di perpustakaan sekolah]",
      users: "[X+ pengguna]"
    },
    {
      title: "[Nama Institusi 2]",
      location: "[Kota, Provinsi]",
      type: "Masjid",
      image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&q=80",
      imageAlt: "[TODO: Foto implementasi ELFAN System di masjid]",
      users: "[X+ jamaah]"
    },
    {
      title: "[Nama Institusi 3]",
      location: "[Kota, Provinsi]",
      type: "Pesantren",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
      imageAlt: "[TODO: Foto implementasi ELFAN System di pesantren]",
      users: "[X+ santri]"
    },
    {
      title: "[Nama Institusi 4]",
      location: "[Kota, Provinsi]",
      type: "Universitas",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
      imageAlt: "[TODO: Foto implementasi ELFAN System di universitas]",
      users: "[X+ mahasiswa]"
    },
    {
      title: "[Nama Institusi 5]",
      location: "[Kota, Provinsi]",
      type: "Perpustakaan Daerah",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80",
      imageAlt: "[TODO: Foto implementasi ELFAN System di perpustakaan daerah]",
      users: "[X+ pengunjung]"
    },
    {
      title: "[Nama Institusi 6]",
      location: "[Kota, Provinsi]",
      type: "Yayasan Pendidikan",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80",
      imageAlt: "[TODO: Foto implementasi ELFAN System di yayasan]",
      users: "[X+ siswa]"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              Portofolio & Kepercayaan
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Telah Dipercaya di Berbagai Instansi
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Implementasi ELFAN System di Solo, Sukoharjo, Yogyakarta, Semarang, dan berbagai wilayah di Indonesia. 
              Dari sekolah, pesantren, masjid, hingga universitas.
            </p>
          </div>

          {/* ⚠️ PLACEHOLDER - Ganti dengan foto implementasi REAL */}
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 mb-12">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <h3 className="font-bold text-yellow-900 mb-2">TODO: Ganti dengan Foto Implementasi Real</h3>
                <p className="text-sm text-yellow-800 leading-relaxed">
                  Section ini menggunakan placeholder. Ganti dengan foto real implementasi ELFAN System di lapangan. 
                  Ambil foto saat instalasi atau saat sistem sudah berjalan. Minta izin dari institusi untuk publish foto.
                </p>
              </div>
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {implementations.map((impl, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-80">
                  <Image
                    src={impl.image}
                    alt={impl.imageAlt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="inline-block px-3 py-1 bg-green-600 rounded-full text-xs font-semibold mb-3">
                      {impl.type}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{impl.title}</h3>
                    <div className="flex items-center text-sm text-slate-200 mb-2">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {impl.location}
                    </div>
                    <div className="text-sm text-green-300 font-semibold">
                      {impl.users}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">228+</div>
                <div className="text-green-100">Institusi Terpercaya</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-green-100">Kota di Indonesia</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">10,000+</div>
                <div className="text-green-100">Pengguna Aktif</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">[X.X★]</div>
                <div className="text-green-100">Rating Kepuasan</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-lg text-slate-600 mb-6">
              Ingin institusi Anda menjadi bagian dari kesuksesan ini?
            </p>
            <a href="https://wa.me/6289604666665?text=Halo%20ELFAN%20System%2C%20saya%20tertarik%20dengan%20solusi%20perpustakaan%20digital%20ini" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full font-bold text-lg transition-colors shadow-xl hover:shadow-2xl">
                Konsultasi Implementasi Gratis →
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
