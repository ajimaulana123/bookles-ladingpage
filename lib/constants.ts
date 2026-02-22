export const CONTACT = {
  whatsapp: "6289604666665",
  whatsappDisplay: "0896-0466-6665",
  website: "www.elfanbookless.com",
  company: "Alwustho Technologies",
  location: "Kampung IT Solo",
  address: "Kompleks Masjid Al-Muhtadin, Jl Semenromo, Gg Melon, Sukoharjo",
} as const

export const PRODUCTS = [
  {
    id: "bookless",
    title: "Bookless Library System",
    subtitle: "Perpustakaan Digital Tanpa Batas",
    description: "Tanpa Buku Fisik, Tanpa Gedung Khusus",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&q=80",
    imageAlt: "Bookless Library System - Akses perpustakaan digital melalui QR Code tanpa buku fisik",
    color: "green",
    features: [
      "Akses ribuan koleksi digital melalui QR Code",
      "Sistem Intranet - tanpa memerlukan kuota internet",
      "Hemat biaya operasional hingga 70%",
      "Ramah lingkungan - Go Green Technology",
      "Tidak memerlukan ruang penyimpanan fisik",
    ],
  },
  {
    id: "hybrid",
    title: "Hybrid Library System",
    subtitle: "Modernisasi Perpustakaan Konvensional",
    description: "Digitalisasi Koleksi Konvensional",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80",
    imageAlt: "Hybrid Library System - Modernisasi perpustakaan konvensional dengan digitalisasi backup",
    color: "blue",
    features: [
      "Backup digital untuk koleksi buku fisik",
      "Integrasi sistem katalog digital dan fisik",
      "Proteksi koleksi dari kerusakan dan kehilangan",
      "Akses fleksibel: fisik atau digital",
      "Transisi bertahap menuju perpustakaan digital",
    ],
  },
] as const

export const MISSIONS = [
  {
    icon: "💰",
    title: "Solusi Ekonomis",
    description: "Mengurangi biaya operasional perpustakaan hingga 70% dengan sistem digital yang efisien",
  },
  {
    icon: "📚",
    title: "Media Referensi Lengkap",
    description: "Menyediakan akses ke ribuan koleksi buku digital Islami dan umum untuk semua kalangan",
  },
  {
    icon: "🎓",
    title: "Edukasi Teknologi",
    description: "Memperkenalkan teknologi digital kepada masyarakat melalui sistem perpustakaan modern",
  },
] as const

export const TARGET_MARKETS = [
  { icon: "🏛️", title: "Universitas", desc: "Perpustakaan kampus modern" },
  { icon: "🏫", title: "Sekolah", desc: "SD, SMP, SMA/SMK" },
  { icon: "🕌", title: "Masjid", desc: "Perpustakaan masjid digital" },
  { icon: "🏘️", title: "Pesantren", desc: "Digitalisasi kitab kuning" },
  { icon: "🏢", title: "Pemerintahan", desc: "Smart City & Smart Village" },
  { icon: "🏭", title: "Perusahaan", desc: "Corporate library" },
  { icon: "👥", title: "Komunitas", desc: "Taman bacaan masyarakat" },
  { icon: "🌐", title: "Organisasi", desc: "Lembaga pendidikan" },
] as const

export const FEATURES = [
  {
    id: "offline",
    title: "Offline Access (Intranet)",
    subtitle: "Hemat Anggaran, Tanpa Kuota",
    description: "Akses ilmu pengetahuan 24/7 melalui jaringan intranet mandiri. Tidak perlu koneksi internet, tidak ada biaya kuota bulanan.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80",
    imageAlt: "Perpustakaan Digital Offline - Akses tanpa internet melalui jaringan intranet lokal ELFAN System",
    benefits: [
      "Hemat biaya internet hingga 100%",
      "Akses stabil tanpa gangguan koneksi",
      "Kecepatan akses maksimal dalam jaringan lokal",
      "Tidak tergantung provider internet",
    ],
  },
  {
    id: "multiplatform",
    title: "Multiplatform Support",
    subtitle: "Satu Sistem, Semua Device",
    description: "Kompatibel dengan berbagai perangkat. Akses dari laptop Windows/Linux, tablet, hingga smartphone Android/iOS dengan pengalaman yang konsisten.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80",
    imageAlt: "Multiplatform Library System - Support laptop, tablet, dan smartphone untuk akses perpustakaan digital",
    benefits: [
      "Windows, Linux, Android, iOS support",
      "Responsive design untuk semua ukuran layar",
      "Sinkronisasi otomatis antar device",
      "Pengalaman pengguna yang konsisten",
    ],
  },
  {
    id: "userfriendly",
    title: "User Friendly Interface",
    subtitle: "Mudah Digunakan Semua Kalangan",
    description: "Antarmuka intuitif dengan sistem QR Code scan. Cukup scan, baca, dan pelajari. Tidak perlu training khusus untuk menggunakan sistem.",
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600&q=80",
    imageAlt: "User Friendly Library Interface - QR Code scan untuk akses mudah perpustakaan digital Islami",
    benefits: [
      "QR Code scan untuk akses cepat",
      "Pencarian buku dengan AI",
      "Bookmark dan catatan digital",
      "Interface bahasa Indonesia",
    ],
  },
  {
    id: "security",
    title: "High Security System",
    subtitle: "Data Aman & Terlindungi",
    description: "Keamanan data terjamin dalam jaringan lokal dengan enkripsi tingkat enterprise. Kontrol akses penuh untuk administrator.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80",
    imageAlt: "High Security Library System - Keamanan data perpustakaan digital dengan enkripsi tingkat enterprise",
    benefits: [
      "Enkripsi data end-to-end",
      "User authentication & authorization",
      "Backup otomatis terjadwal",
      "Audit trail untuk tracking aktivitas",
    ],
  },
] as const

export const COLLECTIONS = [
  {
    id: "books",
    title: "10,000+ Digital Islamic Books",
    count: "10,000+",
    description: "Koleksi lengkap kitab klasik hingga referensi modern",
    icon: "📚",
    categories: ["Tafsir", "Hadits", "Fiqih", "Akhlak", "Sejarah", "Umum"],
  },
  {
    id: "videos",
    title: "Video Edukasi HD",
    count: "500+",
    description: "Pembelajaran interaktif dengan video berkualitas tinggi",
    icon: "🎥",
    categories: ["Kajian", "Tutorial", "Dokumenter", "Animasi"],
  },
  {
    id: "journals",
    title: "E-Journal & Artikel",
    count: "1,000+",
    description: "Jurnal ilmiah dan artikel penelitian terkini",
    icon: "📄",
    categories: ["Penelitian", "Artikel", "Paper", "Thesis"],
  },
  {
    id: "apps",
    title: "Aplikasi Produktivitas",
    count: "50+",
    description: "Tools pendukung pembelajaran dan produktivitas",
    icon: "⚡",
    categories: ["Office", "Reader", "Note", "Utility"],
  },
] as const

export const SPECIFICATIONS = [
  {
    category: "Server Hardware",
    items: [
      {
        label: "Processor Options",
        value: "Intel Xeon E3 1225 V5 / E-2224G / Bronze 3204",
        icon: "🖥️",
        badge: "Enterprise Grade",
      },
      {
        label: "RAM",
        value: "8GB DDR4",
        icon: "💾",
      },
      {
        label: "Storage",
        value: "1TB SSD/HDD",
        icon: "💿",
      },
      {
        label: "Server Type",
        value: "Lenovo ThinkServer TS150 / Dell PowerEdge T150 / Dell T440",
        icon: "🏢",
      },
    ],
  },
  {
    category: "Network Infrastructure",
    items: [
      {
        label: "Router/Mikrotik",
        value: "Mikrotik RB941 / RB450",
        icon: "📡",
        badge: "Professional",
      },
      {
        label: "Access Point",
        value: "Ubiquiti Long Range (450/867 Mbps)",
        icon: "📶",
      },
      {
        label: "Network Type",
        value: "Intranet (Offline/Local Network)",
        icon: "🌐",
      },
      {
        label: "Concurrent Users",
        value: "30 / 50 / 100 users (per paket)",
        icon: "👥",
      },
    ],
  },
  {
    category: "Digital Content",
    items: [
      {
        label: "E-Books & Digital Library",
        value: "10,000+ koleksi digital",
        icon: "📚",
        badge: "Lengkap",
      },
      {
        label: "Content Type",
        value: "Buku Islami, Umum, Referensi, Jurnal",
        icon: "📖",
      },
      {
        label: "Format Support",
        value: "PDF, EPUB, Video, Audio",
        icon: "📄",
      },
      {
        label: "Search System",
        value: "Smart Search & Categorization",
        icon: "🔍",
      },
    ],
  },
] as const
