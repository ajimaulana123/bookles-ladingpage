import Image from "next/image"

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Connect",
      subtitle: "Hubungkan ke WiFi Elfan",
      description: "Nyalakan perangkat dan hubungkan ke jaringan WiFi ELFAN System. Tidak perlu koneksi internet, cukup jaringan lokal (intranet).",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80",
      imageAlt: "Koneksi WiFi ELFAN System - Perpustakaan digital offline tanpa internet",
      icon: "📡"
    },
    {
      number: "02",
      title: "Scan / Browse",
      subtitle: "Akses Perpustakaan Digital",
      description: "Scan QR Code yang tersedia atau buka browser dan ketik alamat lokal. Interface user-friendly langsung muncul di layar Anda.",
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600&q=80",
      imageAlt: "QR Code scan untuk akses perpustakaan digital ELFAN System",
      icon: "📱"
    },
    {
      number: "03",
      title: "Read / Watch",
      subtitle: "Nikmati Ribuan Konten",
      description: "Akses 10,000+ buku digital, video edukasi, e-jurnal, dan aplikasi produktivitas. Semua tersedia secara instan tanpa buffering.",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&q=80",
      imageAlt: "Membaca e-book dan menonton video edukasi di ELFAN System",
      icon: "📚"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Cara Kerja
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Cara Kerja Elfan System
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Tiga langkah mudah untuk mengakses ribuan konten pendidikan. 
              Tidak perlu instalasi aplikasi, tidak perlu kuota internet.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="text-6xl mr-4">{step.icon}</div>
                    <div>
                      <div className="text-5xl font-bold text-green-600 mb-2">
                        {step.number}
                      </div>
                      <div className="text-sm text-slate-500 uppercase tracking-wider">
                        Step {step.number}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-lg font-semibold text-green-600 mb-4">
                    {step.subtitle}
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Features List */}
                  {index === 0 && (
                    <ul className="space-y-2">
                      <li className="flex items-center text-slate-700">
                        <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Tanpa password rumit
                      </li>
                      <li className="flex items-center text-slate-700">
                        <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Koneksi stabil & cepat
                      </li>
                      <li className="flex items-center text-slate-700">
                        <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Support 50-100 user bersamaan
                      </li>
                    </ul>
                  )}

                  {index === 1 && (
                    <ul className="space-y-2">
                      <li className="flex items-center text-slate-700">
                        <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        QR Code di setiap sudut ruangan
                      </li>
                      <li className="flex items-center text-slate-700">
                        <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Interface bahasa Indonesia
                      </li>
                      <li className="flex items-center text-slate-700">
                        <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Kompatibel semua device
                      </li>
                    </ul>
                  )}

                  {index === 2 && (
                    <ul className="space-y-2">
                      <li className="flex items-center text-slate-700">
                        <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Loading cepat tanpa buffering
                      </li>
                      <li className="flex items-center text-slate-700">
                        <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Bookmark & catatan digital
                      </li>
                      <li className="flex items-center text-slate-700">
                        <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Download untuk offline reading
                      </li>
                    </ul>
                  )}
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={step.image}
                      alt={step.imageAlt}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    
                    {/* Step Number Overlay */}
                    <div className="absolute top-6 right-6 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl">
                      <span className="text-2xl font-bold text-green-600">{step.number}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 2 Cara Akses Konten - NEW SECTION */}
          <div className="mt-24 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 border-2 border-green-200">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Konten Dapat Diakses dengan 2 Cara
              </h3>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Fleksibilitas akses untuk kenyamanan maksimal pengguna
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Cara 1: QR Code */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-green-500">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">📱</span>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-slate-900">via Scan QR Code</h4>
                      <p className="text-sm text-green-600 font-semibold">Cara Tercepat</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-semibold text-slate-900">Instant Access</p>
                      <p className="text-sm text-slate-600">Scan & langsung masuk perpustakaan</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-semibold text-slate-900">User-Friendly</p>
                      <p className="text-sm text-slate-600">Tidak perlu ketik alamat URL</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-semibold text-slate-900">Praktis untuk Siswa</p>
                      <p className="text-sm text-slate-600">QR Code tersedia di setiap sudut</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-600 text-white rounded-xl p-4 text-center">
                  <div className="text-4xl font-bold mb-1">95% HEMAT</div>
                  <p className="text-sm text-green-100">Tidak perlu kuota internet</p>
                </div>
              </div>

              {/* Cara 2: Browser */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-blue-500">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🌐</span>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-slate-900">via Browser</h4>
                      <p className="text-sm text-blue-600 font-semibold">Cara Tradisional</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-semibold text-slate-900">Akses via URL Lokal</p>
                      <p className="text-sm text-slate-600">Ketik alamat di browser favorit</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-semibold text-slate-900">Multi-Device</p>
                      <p className="text-sm text-slate-600">Laptop, tablet, smartphone</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-semibold text-slate-900">Bookmark-able</p>
                      <p className="text-sm text-slate-600">Simpan di browser untuk akses cepat</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold mb-1">100% PRESTIGE</div>
                  <div className="text-2xl font-bold mb-1">& SMART</div>
                  <p className="text-sm text-blue-100">Teknologi modern & profesional</p>
                </div>
              </div>
            </div>

            {/* Green Badge */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-bold shadow-lg">
                <span className="text-2xl">🌱</span>
                <span>GREEN - Ramah Lingkungan & Hemat Energi</span>
              </div>
            </div>

            {/* Produced By */}
            <div className="mt-6 text-center">
              <p className="text-sm text-slate-500 mb-2">Produced by:</p>
              <p className="text-lg font-bold text-slate-900">Alwustho Technologies - Kampung IT Solo</p>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 text-center bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Mudah, Cepat, dan Efisien!
            </h3>
            <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
              Tidak perlu training khusus. Bahkan pengguna awam teknologi dapat menggunakan ELFAN System dengan mudah.
            </p>
            <a href="https://wa.me/6289604666665?text=Halo%20ELFAN%20System%2C%20saya%20tertarik%20dengan%20solusi%20perpustakaan%20digital%20ini" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-4 bg-white text-green-600 rounded-full font-bold text-lg hover:bg-slate-50 transition-colors shadow-xl hover:shadow-2xl">
                Tanya Cara Implementasi →
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
