# 🚀 Panduan Instalasi ELFAN SYSTEM Landing Page

## Prasyarat

Pastikan Anda sudah menginstall:
- **Node.js** versi 18.17 atau lebih baru
- **npm** atau **yarn** atau **pnpm**

Cek versi Node.js:
```bash
node --version
```

Jika belum terinstall, download dari: https://nodejs.org/

## Langkah Instalasi

### 1. Install Dependencies

Buka terminal/command prompt di folder project, lalu jalankan:

```bash
npm install
```

Atau jika menggunakan yarn:
```bash
yarn install
```

Atau jika menggunakan pnpm:
```bash
pnpm install
```

Proses ini akan menginstall semua package yang dibutuhkan:
- Next.js 15
- React 18
- Tailwind CSS
- TypeScript
- Dan dependencies lainnya

### 2. Jalankan Development Server

Setelah instalasi selesai, jalankan:

```bash
npm run dev
```

Atau:
```bash
yarn dev
```

Atau:
```bash
pnpm dev
```

### 3. Buka di Browser

Buka browser dan akses:
```
http://localhost:3000
```

Landing page ELFAN SYSTEM akan muncul!

## Struktur Project

```
elfan-landing/
├── app/
│   ├── layout.tsx          # Layout utama dengan SEO meta tags
│   ├── page.tsx            # Halaman landing page
│   ├── globals.css         # Global styles
│   ├── manifest.ts         # PWA manifest
│   └── sitemap.ts          # Sitemap untuk SEO
├── components/
│   └── ui/
│       ├── button.tsx      # Komponen button
│       └── card.tsx        # Komponen card
├── lib/
│   └── utils.ts            # Utility functions
├── public/
│   ├── images/             # Folder untuk gambar (buat manual)
│   └── robots.txt          # Robots.txt untuk SEO
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Kustomisasi

### 1. Ganti Gambar

Lihat file `PANDUAN-GAMBAR.md` untuk panduan lengkap mengganti gambar placeholder.

### 2. Edit Konten

Edit file `app/page.tsx` untuk mengubah:
- Teks dan copywriting
- Struktur section
- Warna dan styling
- Link dan kontak

### 3. Ubah Warna Brand

Edit file `tailwind.config.ts` dan `app/globals.css` untuk mengubah skema warna.

## Build untuk Production

Ketika siap untuk deploy:

```bash
npm run build
```

Lalu jalankan production server:

```bash
npm start
```

## Deploy ke Hosting

### Vercel (Recommended)

1. Push code ke GitHub
2. Import project di [vercel.com](https://vercel.com)
3. Deploy otomatis!

### Netlify

1. Push code ke GitHub
2. Import project di [netlify.com](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`

### VPS/Hosting Sendiri

1. Build project: `npm run build`
2. Upload folder project ke server
3. Install Node.js di server
4. Jalankan: `npm start`
5. Setup reverse proxy (Nginx/Apache)

## Troubleshooting

### Error: "Cannot find module"
```bash
# Hapus node_modules dan install ulang
rm -rf node_modules
npm install
```

### Error: "Port 3000 already in use"
```bash
# Gunakan port lain
npm run dev -- -p 3001
```

### Gambar tidak muncul
- Pastikan path gambar benar: `/images/nama-file.jpg`
- Restart development server

### Build error
```bash
# Clear cache Next.js
rm -rf .next
npm run build
```

## Optimasi Performance

### 1. Kompres Gambar
- Gunakan TinyPNG.com atau ImageOptim
- Target: < 200KB per gambar
- Format WebP lebih baik

### 2. Enable Caching
Next.js sudah auto-optimize, tapi pastikan:
- Gunakan Next.js Image component (sudah digunakan)
- Enable CDN jika deploy ke Vercel/Netlify

### 3. Lighthouse Score
Test performa dengan Google Lighthouse:
1. Buka DevTools (F12)
2. Tab "Lighthouse"
3. Generate report
4. Target: Score > 90

## Update Dependencies

Untuk update ke versi terbaru:

```bash
npm update
```

Atau cek outdated packages:
```bash
npm outdated
```

## Support

Jika mengalami masalah:

1. Cek dokumentasi Next.js: https://nextjs.org/docs
2. Cek dokumentasi Tailwind: https://tailwindcss.com/docs
3. Hubungi developer:
   - WhatsApp: 0896-0466-6665
   - Website: www.elfanbookless.com

## Lisensi

© 2024 ELFAN SYSTEM by Alwustho Technologies
