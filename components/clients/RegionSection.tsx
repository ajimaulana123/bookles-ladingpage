import { MapPin } from 'lucide-react'
import { Client } from '@/lib/clientsData'
import ClientCard from './ClientCard'

interface RegionSectionProps {
  regionName: string
  clients: Client[]
  className?: string
}

export default function RegionSection({ regionName, clients, className = '' }: RegionSectionProps) {
  return (
    <div className={className}>
      {/* Region Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg">
          <MapPin className="w-5 h-5" />
          <span className="font-bold text-lg">{regionName}</span>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-green-200 to-transparent"></div>
        <span className="text-green-600 font-semibold text-lg">
          {clients.length} Lembaga
        </span>
      </div>

      {/* Clients Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clients.map((client, index) => (
          <ClientCard key={index} {...client} index={index} />
        ))}
      </div>
    </div>
  )
}
