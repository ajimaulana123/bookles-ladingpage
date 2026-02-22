import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ELFAN System - Perpustakaan Digital Islami',
    short_name: 'ELFAN System',
    description: 'Perpustakaan digital Islami 10,000+ buku tanpa kuota internet. Hemat 70% biaya operasional. Sistem intranet untuk sekolah, masjid & pesantren.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#16a34a',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
