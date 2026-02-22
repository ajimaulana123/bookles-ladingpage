export function ProductHero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6">
            🚀 Teknologi Perpustakaan Digital Terdepan
          </div>

          {/* Main Heading - H1 for SEO */}
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Solusi Perpustakaan Digital<br />
            <span className="text-green-600">Lengkap & Terpercaya</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed">
            Dua sistem inovatif untuk transformasi perpustakaan Anda: 
            Bookless Library (tanpa buku fisik) dan Hybrid Library (digitalisasi konvensional)
          </p>

          {/* Key Benefits Grid */}
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-3">📡</div>
              <h3 className="font-bold text-slate-900 mb-2">Offline Access</h3>
              <p className="text-sm text-slate-600">Tanpa Internet</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-3">📱</div>
              <h3 className="font-bold text-slate-900 mb-2">Multiplatform</h3>
              <p className="text-sm text-slate-600">Semua Device</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-3">👥</div>
              <h3 className="font-bold text-slate-900 mb-2">User Friendly</h3>
              <p className="text-sm text-slate-600">Mudah Digunakan</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-3">🔒</div>
              <h3 className="font-bold text-slate-900 mb-2">High Security</h3>
              <p className="text-sm text-slate-600">Data Terlindungi</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/6289604666665?text=Halo%20ELFAN%20System%2C%20saya%20ingin%20konsultasi%20tentang%20produk%20perpustakaan%20digital."
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full sm:w-auto px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full text-lg shadow-xl transition-all transform hover:scale-105">
                Konsultasi Gratis
              </button>
            </a>
            <a href="/harga">
              <button className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 font-bold rounded-full text-lg transition-all">
                Lihat Harga & Paket
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
