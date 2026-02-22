import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function HeroSection() {
  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Content */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
              10,000+ Kitab Digital Tanpa Kuota Internet{" "}
              <span className="text-green-600">Akses di Area Institusi Anda</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Sistem perpustakaan digital offline dengan koleksi lengkap buku Islami dan umum. 
              Akses via WiFi lokal di sekolah, masjid, atau pesantren Anda - tanpa biaya internet bulanan. 
              <span className="font-semibold text-slate-900"> Investasi sekali, manfaat selamanya.</span>
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://wa.me/6289604666665" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all">
                  Dapatkan Demo Gratis Sekarang →
                </Button>
              </a>
              <a href="/harga">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full border-2">
                  Lihat Harga & Paket
                </Button>
              </a>
            </div>
            
            {/* Trust Indicators - TODO: Ganti dengan data REAL */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-slate-600">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Hemat 95% Biaya Operasional</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>228+ Institusi Terpercaya</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Garansi & Support 24/7</span>
              </div>
            </div>
          </div>

          {/* Hero Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&q=80"
                  alt="Bookless Library System"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="inline-block px-3 py-1 bg-green-600 rounded-full text-sm mb-2">
                    Best Choice
                  </span>
                  <h3 className="text-2xl font-bold mb-1">Bookless Library</h3>
                  <p className="text-sm text-slate-200">Tanpa Buku Fisik</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80"
                  alt="Hybrid Library System"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="inline-block px-3 py-1 bg-blue-600 rounded-full text-sm mb-2">
                    Popular
                  </span>
                  <h3 className="text-2xl font-bold mb-1">Hybrid Library</h3>
                  <p className="text-sm text-slate-200">Digital + Fisik</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80"
                  alt="Smart Library System"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="inline-block px-3 py-1 bg-purple-600 rounded-full text-sm mb-2">
                    New
                  </span>
                  <h3 className="text-2xl font-bold mb-1">Smart Library</h3>
                  <p className="text-sm text-slate-200">IoT Integration</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Stats Section - TODO: Ganti dengan data REAL */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">10,000+</div>
              <div className="text-slate-600">Koleksi Digital</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">228+</div>
              <div className="text-slate-600">Institusi</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">50+</div>
              <div className="text-slate-600">Kota</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">228+</div>
              <div className="text-slate-600">Mitra</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">4.9★</div>
              <div className="text-slate-600">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
