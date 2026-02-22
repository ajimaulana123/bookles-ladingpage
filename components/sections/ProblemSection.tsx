export function ProblemSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Mengapa Memilih Teknologi Bookless?
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Perpustakaan Modern</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Perpustakaan adalah jantung kemajuan bangsa. Di era digital, perpustakaan perlu beradaptasi dengan teknologi untuk tetap relevan dan efektif.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Solusi Inovatif</h3>
                  <p className="text-slate-600 leading-relaxed">
                    ELFAN System menggabungkan nilai-nilai Islami dengan teknologi modern, menciptakan ekosistem perpustakaan yang efisien dan ekonomis.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Ramah Lingkungan</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Teknologi Go Green yang mendukung transformasi Smart City Indonesia dengan sistem yang ramah lingkungan.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-green-600 mb-4">70%</div>
                  <div className="text-2xl font-semibold text-slate-900 mb-2">Hemat Biaya</div>
                  <div className="text-slate-600">Operasional Perpustakaan</div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-3xl flex items-center justify-center text-white shadow-2xl">
                <div className="text-center">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm">Digital</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
