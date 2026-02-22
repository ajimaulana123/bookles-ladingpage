export function ContactCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-600 via-green-700 to-blue-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="text-6xl mb-6">🚀</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Siap Memulai Transformasi<br />Perpustakaan Digital?
          </h2>
          
          <p className="text-xl md:text-2xl text-green-50 mb-12 leading-relaxed">
            Jangan ragu untuk menghubungi kami. Tim ahli kami siap membantu 
            mewujudkan perpustakaan digital impian Anda.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl mb-3">💬</div>
              <div className="font-bold mb-2">Konsultasi Gratis</div>
              <div className="text-sm text-green-100">Diskusi kebutuhan tanpa biaya</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl mb-3">🎁</div>
              <div className="font-bold mb-2">Demo Langsung</div>
              <div className="text-sm text-green-100">Lihat sistem bekerja secara real</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl mb-3">📊</div>
              <div className="font-bold mb-2">Proposal Custom</div>
              <div className="text-sm text-green-100">Solusi sesuai kebutuhan Anda</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://wa.me/6289604666665?text=Halo%20ELFAN%20System%2C%20saya%20ingin%20konsultasi."
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full sm:w-auto px-10 py-5 bg-white text-green-700 hover:bg-green-50 font-bold rounded-full text-xl shadow-2xl transition-all transform hover:scale-105">
                Hubungi Sekarang
              </button>
            </a>
            <a href="/harga">
              <button className="w-full sm:w-auto px-10 py-5 bg-transparent border-3 border-white text-white hover:bg-white hover:text-green-700 font-bold rounded-full text-xl transition-all">
                Lihat Harga & Paket
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
