import Image from "next/image"
import { Card } from "@/components/ui/card"
import { PRODUCTS } from "@/lib/constants"

export function ProductComparison() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Pilih Sistem yang Tepat untuk Anda
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Dua solusi inovatif yang dirancang untuk kebutuhan berbeda. 
              Pilih yang paling sesuai dengan kondisi perpustakaan Anda.
            </p>
          </div>

          {/* Product Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {PRODUCTS.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300">
                {/* Image */}
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    className="object-cover"
                  />
                  {/* Badge */}
                  <div className="absolute top-6 left-6">
                    <span className={`px-4 py-2 rounded-full text-sm font-bold text-white ${
                      product.color === 'green' ? 'bg-green-600' : 'bg-blue-600'
                    }`}>
                      {product.id === 'bookless' ? '🌟 Paling Populer' : '🔄 Transisi Mudah'}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-slate-900 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-lg text-green-600 font-semibold mb-4">
                    {product.subtitle}
                  </p>
                  <p className="text-slate-600 mb-6">
                    {product.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <a 
                    href={`https://wa.me/6289604666665?text=Halo%20ELFAN%20System%2C%20saya%20tertarik%20dengan%20${product.title}.%20Mohon%20info%20lebih%20lanjut.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <button className={`w-full py-3 font-bold rounded-lg transition-all ${
                      product.color === 'green' 
                        ? 'bg-green-600 hover:bg-green-700 text-white' 
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}>
                      Konsultasi {product.title}
                    </button>
                  </a>
                </div>
              </Card>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="bg-slate-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Perbandingan Detail
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="text-left py-4 px-4 font-bold text-slate-900">Aspek</th>
                    <th className="text-center py-4 px-4 font-bold text-green-600">Bookless Library</th>
                    <th className="text-center py-4 px-4 font-bold text-blue-600">Hybrid Library</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="py-4 px-4 font-semibold">Buku Fisik</td>
                    <td className="py-4 px-4 text-center">❌ Tidak Ada</td>
                    <td className="py-4 px-4 text-center">✅ Ada + Digital</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-4 px-4 font-semibold">Ruang Penyimpanan</td>
                    <td className="py-4 px-4 text-center">✅ Tidak Perlu</td>
                    <td className="py-4 px-4 text-center">⚠️ Tetap Perlu</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-4 px-4 font-semibold">Biaya Operasional</td>
                    <td className="py-4 px-4 text-center">✅ Sangat Rendah</td>
                    <td className="py-4 px-4 text-center">⚠️ Sedang</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-4 px-4 font-semibold">Akses Digital</td>
                    <td className="py-4 px-4 text-center">✅ 100% Digital</td>
                    <td className="py-4 px-4 text-center">✅ Digital + Fisik</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-4 px-4 font-semibold">Cocok Untuk</td>
                    <td className="py-4 px-4 text-center">Institusi Baru</td>
                    <td className="py-4 px-4 text-center">Perpustakaan Existing</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-4 px-4 font-semibold">Implementasi</td>
                    <td className="py-4 px-4 text-center">✅ Cepat (3-7 hari)</td>
                    <td className="py-4 px-4 text-center">⚠️ Bertahap</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold">Go Green</td>
                    <td className="py-4 px-4 text-center">✅ 100% Ramah Lingkungan</td>
                    <td className="py-4 px-4 text-center">⚠️ Partial</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Recommendation Box */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
              <div className="text-3xl mb-3">💡</div>
              <h4 className="font-bold text-slate-900 mb-2">Rekomendasi: Bookless Library</h4>
              <p className="text-sm text-slate-700 mb-3">
                Pilih jika Anda:
              </p>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Membangun perpustakaan dari nol</li>
                <li>• Ingin hemat biaya maksimal</li>
                <li>• Tidak punya ruang penyimpanan luas</li>
                <li>• Fokus pada konten digital</li>
              </ul>
            </div>
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
              <div className="text-3xl mb-3">🔄</div>
              <h4 className="font-bold text-slate-900 mb-2">Rekomendasi: Hybrid Library</h4>
              <p className="text-sm text-slate-700 mb-3">
                Pilih jika Anda:
              </p>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Sudah punya koleksi buku fisik</li>
                <li>• Ingin transisi bertahap</li>
                <li>• Perlu backup digital</li>
                <li>• Kombinasi fisik & digital</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
