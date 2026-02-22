import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { Client } from '@/lib/clientsData'
import { useState } from 'react'

interface ClientCardProps extends Client {
  index?: number
}

export default function ClientCard({ name, location, logo, featured, category }: ClientCardProps) {
  const [imageError, setImageError] = useState(false)
  
  const getInitials = (name: string) => {
    const words = name.split(' ')
    if (words.length === 1) return name.substring(0, 2).toUpperCase()
    
    // For schools, use school type abbreviation
    if (category === 'sekolah') {
      if (name.includes('SMA')) return 'SMA'
      if (name.includes('SMK')) return 'SMK'
      if (name.includes('SMP')) return 'SMP'
    }
    
    return words
      .slice(0, 2)
      .map(word => word[0])
      .join('')
      .toUpperCase()
  }
  
  const getBadgeColor = () => {
    if (featured) return 'from-yellow-400 to-orange-500'
    if (category === 'sekolah') return 'from-blue-500 to-blue-600'
    if (category === 'universitas') return 'from-purple-500 to-purple-600'
    if (category === 'pemerintah') return 'from-red-500 to-red-600'
    return 'from-green-500 to-green-600'
  }

  return (
    <div className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-green-200 relative">
      {/* Featured Badge */}
      {featured && (
        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">
          ⭐ Anchor
        </div>
      )}
      
      {/* School Badge */}
      {category === 'sekolah' && !featured && (
        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">
          🏫 Sekolah Negeri
        </div>
      )}
      
      {/* University Badge */}
      {category === 'universitas' && !featured && (
        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">
          🎓 Perguruan Tinggi
        </div>
      )}
      
      {/* Government Badge */}
      {category === 'pemerintah' && !featured && (
        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">
          🏛️ Instansi Pemerintah
        </div>
      )}
      
      <div className="flex items-start gap-4">
        {/* Logo or Initial Circle */}
        {logo && !imageError ? (
          <div className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden bg-white shadow-md group-hover:scale-110 transition-transform duration-300 border-2 border-green-100">
            <Image
              src={logo}
              alt={`Logo ${name}`}
              width={56}
              height={56}
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
            />
          </div>
        ) : (
          <div className={`flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br ${getBadgeColor()} flex items-center justify-center text-white font-bold text-sm shadow-md group-hover:scale-110 transition-transform duration-300`}>
            {getInitials(name)}
          </div>
        )}
        
        <div className="flex-1 min-w-0">
          {/* Client Name */}
          <h3 className="font-semibold text-slate-800 text-base leading-tight mb-2 group-hover:text-green-600 transition-colors">
            {name}
          </h3>
          
          {/* Location */}
          <div className="flex items-center gap-1.5 text-slate-500 text-sm">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span className="truncate">{location}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
