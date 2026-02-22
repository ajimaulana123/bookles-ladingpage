export function PortfolioCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-500 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Main Heading */}
          <div className="text-6xl mb-6">🚀</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Jadikan Lembaga Anda Berikutnya<br />yang Bertransformasi
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-green-50 mb-12 leading-relaxed">
            Bergabunglah dengan universitas terkemuka, pesantren modern, dan pemerintah daerah 
            yang telah mempercayai ELFAN System untuk transformasi literasi digital mereka.
          </p>

          {/* Trust Proof */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 max-w-3xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-1">✅</div>
                <div className="text-sm">Dipercaya Universitas</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">✅</div>
                <div className="text-sm">Dipercaya Pesantren</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">✅</div>
                <div className="text-sm">Dipercaya Pemerintah</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a 
              href="https://wa.me/6289604666665?text=Halo%20ELFAN%20System%2C%20saya%20tertarik%20setelah%20melihat%20portfolio%20implementasi.%20Saya%20ingin%20konsultasi%20untuk%20institusi%20saya."
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <button className="w-full sm:w-auto px-10 py-5 bg-white text-green-700 hover:bg-green-50 font-bold rounded-full text-xl shadow-2xl transition-all transform hover:scale-105">
                <span className="flex items-center justify-center gap-3">
                  <svg className="w-7 h-7 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Hubungi Konsultan Kami
                </span>
              </button>
            </a>

            <a href="/harga">
              <button className="w-full sm:w-auto px-10 py-5 bg-transparent border-3 border-white text-white hover:bg-white hover:text-green-700 font-bold rounded-full text-xl transition-all transform hover:scale-105">
                Lihat Harga & Paket
              </button>
            </a>
          </div>

          {/* Contact Info */}
          <div className="pt-8 border-t border-white/20">
            <p className="text-green-100 mb-4">Atau hubungi langsung:</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-bold">0896-0466-6665</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/30" />
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-bold">Kampung IT Solo, Sukoharjo</span>
              </div>
            </div>
          </div>

          {/* Final Note */}
          <p className="mt-8 text-sm text-green-100">
            💡 Kunjungi showroom kami di Kampung IT Solo untuk melihat langsung sistem bekerja
          </p>
        </div>
      </div>
    </section>
  )
}
