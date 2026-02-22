import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { COLLECTIONS } from "@/lib/constants"

export function CollectionSection() {
  return (
    <section id="collection" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Kekayaan Intelektual dalam Genggaman
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              10,000+ judul buku digital, kitab kuning, e-jurnal, dan media edukasi. 
              Dilengkapi Smart Search untuk kemudahan pencarian. Akses tanpa internet, kapan saja, di mana saja.
            </p>
          </div>

          {/* Main Showcase */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Image Showcase */}
            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80"
                  alt="Koleksi perpustakaan digital ELFAN System dengan 10000+ e-book Islam dan referensi pendidikan"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Floating Stats */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-3xl font-bold text-green-600">10,000+</div>
                        <div className="text-sm text-slate-600">Digital Books</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-blue-600">500+</div>
                        <div className="text-sm text-slate-600">Video HD</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  Perpustakaan Digital Terlengkap untuk Pendidikan Islami
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Dari kitab klasik hingga referensi modern, video kajian hingga jurnal ilmiah. 
                  Semua tersedia dalam satu sistem terintegrasi.
                </p>
              </div>

              {/* Collection Stats */}
              <div className="grid grid-cols-2 gap-4">
                {COLLECTIONS.map((collection) => (
                  <div 
                    key={collection.id}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="text-4xl mb-3">{collection.icon}</div>
                    <div className="text-2xl font-bold text-slate-900 mb-1">
                      {collection.count}
                    </div>
                    <div className="text-sm font-semibold text-slate-700 mb-2">
                      {collection.title}
                    </div>
                    <div className="text-xs text-slate-500">
                      {collection.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Categories Grid */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Kategori Koleksi Digital
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {COLLECTIONS.map((collection) => (
                <div key={collection.id}>
                  <div className="font-semibold text-slate-900 mb-3 flex items-center">
                    <span className="text-2xl mr-2">{collection.icon}</span>
                    {collection.title.split(' ')[0]}
                  </div>
                  <div className="space-y-2">
                    {collection.categories.map((category, idx) => (
                      <div 
                        key={idx}
                        className="text-sm text-slate-600 flex items-center"
                      >
                        <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {category}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Smart Search Feature */}
          <div className="mt-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Smart Search Technology</h3>
                <p className="text-lg text-green-50 mb-6 leading-relaxed">
                  Temukan buku yang Anda cari dalam hitungan detik dengan teknologi pencarian cerdas. 
                  Cari berdasarkan judul, penulis, kategori, atau kata kunci.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Pencarian instan tanpa delay</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Filter berdasarkan kategori & penulis</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Rekomendasi buku terkait</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Bookmark & riwayat baca</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <div className="flex items-center text-slate-400">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <span className="text-sm">Cari buku, kitab, jurnal...</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-white/20 rounded-lg p-3 text-sm">📚 Tafsir Al-Qur'an</div>
                    <div className="bg-white/20 rounded-lg p-3 text-sm">📖 Hadits Shahih</div>
                    <div className="bg-white/20 rounded-lg p-3 text-sm">📕 Fiqih Kontemporer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Info */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-6 py-3 rounded-full">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-semibold">Koleksi diupdate secara berkala</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
