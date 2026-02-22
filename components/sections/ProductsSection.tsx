import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PRODUCTS } from "@/lib/constants"

export function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Temukan Solusi Perpustakaan yang Tepat
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Sistem terintegrasi untuk memenuhi kebutuhan perpustakaan modern Anda
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {PRODUCTS.map((product) => (
              <Card 
                key={product.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Product Image */}
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-6 left-6">
                    <span className={`inline-block px-4 py-2 ${
                      product.color === 'green' ? 'bg-green-600' : 'bg-blue-600'
                    } text-white rounded-full text-sm font-semibold shadow-lg`}>
                      {product.color === 'green' ? 'Recommended' : 'Popular'}
                    </span>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {product.title}
                    </h3>
                    <p className="text-slate-200 text-lg">
                      {product.subtitle}
                    </p>
                  </div>
                </div>

                {/* Product Content */}
                <CardContent className="p-8">
                  <h4 className="font-bold text-xl text-slate-900 mb-4">
                    {product.description}
                  </h4>
                  
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-slate-700">
                        <svg 
                          className={`w-6 h-6 ${
                            product.color === 'green' ? 'text-green-600' : 'text-blue-600'
                          } mr-3 flex-shrink-0 mt-0.5`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M5 13l4 4L19 7" 
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${
                      product.color === 'green' 
                        ? 'bg-green-600 hover:bg-green-700' 
                        : 'bg-blue-600 hover:bg-blue-700'
                    } text-white rounded-full py-6 text-lg font-semibold`}
                  >
                    Pelajari Lebih Lanjut →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
