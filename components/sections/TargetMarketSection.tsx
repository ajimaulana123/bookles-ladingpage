import { Card, CardContent } from "@/components/ui/card"
import { TARGET_MARKETS } from "@/lib/constants"

export function TargetMarketSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Dipercaya Berbagai Institusi
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              ELFAN System mendukung transformasi digital di berbagai sektor pendidikan dan masyarakat
            </p>
          </div>

          {/* Markets Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {TARGET_MARKETS.map((market, index) => (
              <Card 
                key={index}
                className="group text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-0 bg-white cursor-pointer"
              >
                <CardContent className="p-8">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {market.icon}
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">
                    {market.title}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {market.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
