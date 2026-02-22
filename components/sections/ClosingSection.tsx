import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CONTACT } from "@/lib/constants"

export function ClosingSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #10b981 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
              Visi & Komitmen Kami
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Membangun Masa Depan Literasi Digital Bersama
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Kami berharap solusi ini memberikan manfaat nyata dalam mewujudkan masyarakat cerdas 
              melalui teknologi yang tepat guna.
            </p>
          </div>

          {/* ⚠️ PLACEHOLDER - Ganti dengan foto tim/kantor REAL */}
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 mb-12">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <h3 className="font-bold text-yellow-900 mb-2">TODO: Ganti dengan Foto Tim/Kantor Real</h3>
                <p className="text-sm text-yellow-800 leading-relaxed">
                  Upload foto tim Alwustho Technologies atau suasana Kampung IT Solo ke folder 
                  <code className="bg-yellow-100 px-2 py-1 rounded mx-1">public/images/team/</code>
                  untuk memberikan sentuhan personal dan meningkatkan kepercayaan pengunjung.
                </p>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Image Side */}
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="[TODO: Foto tim Alwustho Technologies atau suasana Kampung IT Solo]"
                  fill
                  className="object-cover"
                />
                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xl">E</span>
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">{CONTACT.company}</div>
                      <div className="text-sm text-slate-600">{CONTACT.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                Teknologi Tepat Guna untuk Indonesia
              </h3>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Berawal dari keprihatinan akan mahalnya biaya pembangunan perpustakaan konvensional, 
                  kami menghadirkan solusi inovatif yang menggabungkan teknologi modern dengan kebutuhan 
                  literasi masyarakat Indonesia.
                </p>
                <p>
                  ELFAN System bukan sekadar produk, tetapi komitmen kami untuk mewujudkan akses pendidikan 
                  yang merata, terjangkau, dan berkelanjutan bagi seluruh lapisan masyarakat.
                </p>
                <p className="font-semibold text-slate-900">
                  Bersama-sama, kita bangun ekosistem literasi digital yang kuat untuk generasi masa depan.
                </p>
              </div>

              {/* Values */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-3xl font-bold text-green-600 mb-1">8+</div>
                  <div className="text-sm text-slate-600">Tahun Pengalaman</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-1">228+</div>
                  <div className="text-sm text-slate-600">Klien Puas</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <div className="text-3xl font-bold text-purple-600 mb-1">50+</div>
                  <div className="text-sm text-slate-600">Kota Terlayani</div>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Statement */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-12 text-white text-center shadow-2xl">
            <div className="max-w-3xl mx-auto">
              <div className="text-6xl mb-6">🌟</div>
              <h3 className="text-3xl font-bold mb-4">Visi Kami</h3>
              <p className="text-xl leading-relaxed text-green-50 mb-8">
                "Menjadi pelopor transformasi perpustakaan digital di Indonesia, 
                menghadirkan akses ilmu pengetahuan yang mudah, murah, dan merata 
                untuk seluruh masyarakat."
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Inovasi Berkelanjutan</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Kualitas Terjamin</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Support Terbaik</span>
                </div>
              </div>
            </div>
          </div>

          {/* Location Info */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 bg-white rounded-full px-8 py-4 shadow-lg">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div className="text-left">
                <div className="font-bold text-slate-900">{CONTACT.location}</div>
                <div className="text-sm text-slate-600">{CONTACT.address}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
