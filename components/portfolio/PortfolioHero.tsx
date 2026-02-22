export function PortfolioHero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
            🏆 Dipercaya Institusi Terbaik di Indonesia
          </div>

          {/* Main Heading - H1 for SEO */}
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Portofolio Implementasi ELFAN System:<br />
            <span className="text-green-600">Membangun Peradaban Digital Nasional</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
            Lihat bagaimana ELFAN System menjadi standar baru dalam literasi digital tanpa internet 
            di berbagai lembaga pendidikan dan fasilitas publik terbaik di Indonesia.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center gap-2 text-slate-700">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-semibold">Universitas Terkemuka</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-semibold">Pesantren Modern</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-semibold">Pemerintah Daerah</span>
            </div>
          </div>

          {/* E-E-A-T Highlights */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-3">🔬</div>
              <h3 className="font-bold text-slate-900 mb-2">Experience</h3>
              <p className="text-sm text-slate-600">Pusat Riset & Pengembangan di Solo</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-3">🎓</div>
              <h3 className="font-bold text-slate-900 mb-2">Expertise</h3>
              <p className="text-sm text-slate-600">Dipercaya Universitas & Pesantren</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-3">🏛️</div>
              <h3 className="font-bold text-slate-900 mb-2">Authority</h3>
              <p className="text-sm text-slate-600">Implementasi Pemerintah Daerah</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
