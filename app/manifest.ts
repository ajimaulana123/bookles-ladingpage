import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ELFAN SYSTEM - Perpustakaan Digital Islami',
    short_name: 'ELFAN SYSTEM',
    description: 'Islamic Digital Education Platform - Bookless Library System untuk Smart City Indonesia',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#22c55e',
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
