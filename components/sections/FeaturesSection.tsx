import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { FEATURES } from "@/lib/constants"

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Keunggulan Teknologi ELFAN System
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Bukan sekadar perpustakaan digital biasa, ELFAN System adalah ekosistem pendidikan mandiri 
              yang dirancang untuk kemudahan, efisiensi, dan keamanan maksimal.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {FEATURES.map((feature, index) => (
              <Card 
                key={feature.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Feature Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.imageAlt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-200 text-lg">
                      {feature.subtitle}
                    </p>
                  </div>
                </div>

                {/* Feature Content */}
                <CardContent className="p-8">
                  <p className="text-slate-700 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-slate-700">
                        <svg 
                          className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5"
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                          />
                        </svg>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p className="text-lg text-slate-600 mb-6">
              Ingin tahu lebih detail tentang teknologi kami?
            </p>
            <a href="https://wa.me/6289604666665" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold transition-colors shadow-lg hover:shadow-xl">
                Konsultasi Gratis dengan Tim Ahli →
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
