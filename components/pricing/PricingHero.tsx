export function PricingHero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6">
            💰 Investasi Terjangkau, ROI Maksimal
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Harga Perpustakaan Digital yang Terjangkau
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
            Investasi sekali, manfaat selamanya. Hemat hingga 70% biaya operasional 
            dibanding perpustakaan konvensional.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center gap-2 text-slate-700">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-semibold">Tanpa Biaya Bulanan</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-semibold">Garansi & Support</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-semibold">Konsultasi Gratis</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/6289604666665?text=Halo%20ELFAN%20System%2C%20saya%20ingin%20tanya%20tentang%20harga%20dan%20paket"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                Tanya Harga via WhatsApp
              </button>
            </a>
            <a href="#pricing-tiers">
              <button className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 font-bold rounded-full text-lg border-2 border-slate-200 transition-all">
                Lihat Paket
              </button>
            </a>
          </div>

          {/* Note */}
          <p className="mt-8 text-sm text-slate-500">
            💡 Harga dapat disesuaikan dengan kebutuhan institusi Anda. Hubungi kami untuk penawaran khusus.
          </p>
        </div>
      </div>
    </section>
  )
}
