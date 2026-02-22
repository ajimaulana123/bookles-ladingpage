import { Card, CardContent } from "@/components/ui/card"
import { MISSIONS } from "@/lib/constants"

export function MissionSection() {
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
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Misi Kami Memberdayakan Masyarakat
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Komitmen untuk mencerdaskan bangsa melalui teknologi perpustakaan digital
            </p>
          </div>

          {/* Mission Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {MISSIONS.map((mission, index) => (
              <Card 
                key={index}
                className="bg-white/10 backdrop-blur-lg border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6 mx-auto backdrop-blur-sm">
                    <span className="text-5xl">{mission.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    {mission.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    {mission.description}
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
