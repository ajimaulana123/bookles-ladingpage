import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import MetaPixel from "@/components/MetaPixel"
import GoogleAnalytics from "@/components/GoogleAnalytics"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#16a34a',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://elfanbookless.com'),
  title: "Perpustakaan Digital Offline 10,000+ Buku | ELFAN System",
  description: "Perpustakaan digital Islami 10,000+ buku tanpa kuota internet. Hemat 70% biaya operasional. Sistem intranet untuk sekolah, masjid & pesantren. Konsultasi gratis!",
  keywords: [
    "Perpustakaan Digital Islami",
    "Bookless Library System",
    "Perpustakaan Digital Offline",
    "E-book Islam",
    "Server Perpustakaan Murah",
    "Sistem Perpustakaan Sekolah",
    "Perpustakaan Masjid Digital",
    "Perpustakaan Digital Tanpa Internet",
    "Software Perpustakaan",
    "Harga Perpustakaan Digital",
    "Jual Server Perpustakaan",
    "Perpustakaan Digital Indonesia",
  ],
  authors: [{ name: "Alwustho Technologies" }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    title: "ELFAN System - Perpustakaan Digital Islami Tanpa Kuota",
    description: "10,000+ koleksi buku digital Islami. Hemat 70% biaya operasional. Tanpa kuota internet. Solusi untuk sekolah, masjid, dan pesantren.",
    url: "https://elfanbookless.com",
    siteName: "ELFAN SYSTEM",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: '/logo-elfan.png',
        width: 1200,
        height: 630,
        alt: 'ELFAN System - Perpustakaan Digital Islami',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ELFAN System - Perpustakaan Digital Islami",
    description: "10,000+ buku digital tanpa kuota internet. Hemat 70% biaya operasional.",
    images: ['/logo-elfan.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Schema.org structured data for SEO
  const schemaOrg = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://elfanbookless.com/#organization",
        "name": "Alwustho Technologies",
        "alternateName": "ELFAN SYSTEM",
        "url": "https://elfanbookless.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://elfanbookless.com/logo-elfan.png"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+62-896-0466-6665",
          "contactType": "Customer Service",
          "areaServed": "ID",
          "availableLanguage": ["Indonesian"]
        },
        "sameAs": [
          "https://www.facebook.com/elfansystem",
          "https://www.instagram.com/elfansystem"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://elfanbookless.com/#localbusiness",
        "name": "ELFAN SYSTEM - Perpustakaan Digital Islami",
        "image": "https://elfanbookless.com/logo-elfan.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Kompleks Masjid Al-Muhtadin, Jl Semenromo, Gg Melon",
          "addressLocality": "Sukoharjo",
          "addressRegion": "Jawa Tengah",
          "postalCode": "57500",
          "addressCountry": "ID"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -7.6833,
          "longitude": 110.8333
        },
        "telephone": "+62-896-0466-6665",
        "priceRange": "$$",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "08:00",
          "closes": "17:00"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "500"
        }
      },
      {
        "@type": "Product",
        "@id": "https://elfanbookless.com/#product",
        "name": "ELFAN System - Perpustakaan Digital Offline",
        "description": "Sistem perpustakaan digital Islami dengan 10,000+ koleksi buku tanpa memerlukan koneksi internet. Hemat 70% biaya operasional.",
        "brand": {
          "@type": "Brand",
          "name": "ELFAN SYSTEM"
        },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "IDR",
          "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "500"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://elfanbookless.com/#website",
        "url": "https://elfanbookless.com",
        "name": "ELFAN SYSTEM",
        "description": "Perpustakaan Digital Islami Offline",
        "publisher": {
          "@id": "https://elfanbookless.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://elfanbookless.com/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  }

  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className={inter.className}>
        <Suspense fallback={null}>
          <MetaPixel />
          <GoogleAnalytics />
        </Suspense>
        {children}
      </body>
    </html>
  )
}
