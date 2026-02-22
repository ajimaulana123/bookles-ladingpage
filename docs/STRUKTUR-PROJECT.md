# 📁 Struktur Project ELFAN SYSTEM

## Overview

```
elfan-landing/
├── 📱 app/                      # Next.js App Router
├── 🎨 components/               # React Components
├── 🛠️ lib/                      # Utility Functions
├── 🖼️ public/                   # Static Assets
├── 📄 Configuration Files       # Config & Setup
└── 📚 Documentation Files       # Panduan & Docs
```

---

## 📱 App Directory (Next.js 15 App Router)

```
app/
├── layout.tsx          # Root layout + SEO meta tags
├── page.tsx            # Main landing page (SEMUA KONTEN DI SINI)
├── globals.css         # Global styles + Tailwind directives
├── manifest.ts         # PWA manifest configuration
└── sitemap.ts          # Auto-generated sitemap
```

### File Penting:

**app/layout.tsx**
- Root layout untuk semua halaman
- SEO meta tags (title, description, keywords)
- Open Graph & Twitter Card tags
- Font configuration (Inter)

**app/page.tsx** ⭐ **FILE UTAMA**
- Semua 8 section landing page
- Navigation, Hero, Products, Mission, Footer
- Edit file ini untuk mengubah konten
- ~350 baris kode

**app/globals.css**
- Tailwind directives (@tailwind base, components, utilities)
- CSS variables untuk color scheme
- Custom styles (jika ada)

---

## 🎨 Components Directory

```
components/
└── ui/
    ├── button.tsx      # Button component (Shadcn UI)
    └── card.tsx        # Card component (Shadcn UI)
```

### Komponen UI:

**button.tsx**
- Reusable button component
- Variants: default, outline, ghost
- Sizes: sm, default, lg
- Digunakan untuk semua CTA buttons

**card.tsx**
- Card container components
- CardHeader, CardTitle, CardDescription
- CardContent, CardFooter
- Digunakan untuk product cards, mission cards, dll

---

## 🛠️ Lib Directory

```
lib/
└── utils.ts            # Utility functions
```

**utils.ts**
- `cn()` function untuk merge Tailwind classes
- Helper functions lainnya (jika diperlukan)

---

## 🖼️ Public Directory

```
public/
├── images/
│   └── README.md       # Panduan untuk folder images
├── robots.txt          # SEO robots configuration
└── icon-placeholder.txt # Panduan membuat PWA icons
```

### Folder Images:

**public/images/** ⭐ **SIMPAN GAMBAR DI SINI**
- elfan-interface-laptop.jpg (Hero section)
- qr-code-scanning.jpg (Bookless card)
- ereader-tablet.jpg (Hybrid card)

**public/robots.txt**
- Allow all search engines
- Sitemap reference

---

## 📄 Configuration Files

```
Root Directory:
├── package.json            # Dependencies & scripts
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── next.config.js          # Next.js configuration
├── .gitignore              # Git ignore rules
└── .env.example            # Environment variables template
```

### File Konfigurasi:

**package.json**
- Dependencies (Next.js, React, Tailwind, dll)
- Scripts: dev, build, start, lint
- Project metadata

**tsconfig.json**
- TypeScript compiler options
- Path aliases (@/*)
- Include/exclude rules

**tailwind.config.ts** ⭐ **EDIT UNTUK GANTI WARNA**
- Color scheme configuration
- Custom colors (primary, secondary)
- Breakpoints & spacing
- Plugins (tailwindcss-animate)

**next.config.js**
- Next.js configuration
- Image domains (Unsplash)
- Build settings

**.env.example**
- Template untuk environment variables
- Copy ke .env.local untuk development

---

## 📚 Documentation Files

```
Root Directory:
├── MULAI-DISINI.md         ⭐ START HERE!
├── QUICK-START.md          ⚡ Quick guide (5 menit)
├── README.md               📖 Project overview
├── INSTALASI.md            📦 Installation guide
├── PANDUAN-GAMBAR.md       📸 Image replacement guide
├── SEO-CHECKLIST.md        🔍 SEO checklist
├── DEPLOYMENT.md           🚀 Deployment guide
├── RINGKASAN-PROJECT.md    📊 Project summary
├── STRUKTUR-PROJECT.md     📁 This file
├── CHANGELOG.md            📝 Version history
└── LICENSE.md              ⚖️ License information
```

### Panduan Membaca Dokumentasi:

**Untuk Pemula:**
1. MULAI-DISINI.md ⭐
2. QUICK-START.md
3. INSTALASI.md

**Untuk Developer:**
1. README.md
2. STRUKTUR-PROJECT.md (this file)
3. app/page.tsx (source code)

**Untuk Kustomisasi:**
1. PANDUAN-GAMBAR.md (ganti gambar)
2. app/page.tsx (edit konten)
3. tailwind.config.ts (ganti warna)

**Untuk Deploy:**
1. DEPLOYMENT.md
2. SEO-CHECKLIST.md
3. .env.example

---

## 🗂️ File Tree Lengkap

```
elfan-landing/
│
├── 📱 app/
│   ├── layout.tsx              # Root layout + SEO
│   ├── page.tsx                # Main landing page ⭐
│   ├── globals.css             # Global styles
│   ├── manifest.ts             # PWA manifest
│   └── sitemap.ts              # Sitemap generator
│
├── 🎨 components/
│   └── ui/
│       ├── button.tsx          # Button component
│       └── card.tsx            # Card component
│
├── 🛠️ lib/
│   └── utils.ts                # Utility functions
│
├── 🖼️ public/
│   ├── images/
│   │   └── README.md           # Image guide
│   ├── robots.txt              # SEO robots
│   └── icon-placeholder.txt    # Icon guide
│
├── 📄 Configuration:
│   ├── package.json            # Dependencies
│   ├── tsconfig.json           # TypeScript config
│   ├── tailwind.config.ts      # Tailwind config ⭐
│   ├── postcss.config.js       # PostCSS config
│   ├── next.config.js          # Next.js config
│   ├── .gitignore              # Git ignore
│   └── .env.example            # Env template
│
└── 📚 Documentation:
    ├── MULAI-DISINI.md         # Start here ⭐
    ├── QUICK-START.md          # Quick guide
    ├── README.md               # Overview
    ├── INSTALASI.md            # Installation
    ├── PANDUAN-GAMBAR.md       # Images guide
    ├── SEO-CHECKLIST.md        # SEO checklist
    ├── DEPLOYMENT.md           # Deploy guide
    ├── RINGKASAN-PROJECT.md    # Summary
    ├── STRUKTUR-PROJECT.md     # This file
    ├── CHANGELOG.md            # Changelog
    └── LICENSE.md              # License
```

---

## 📝 File yang Perlu Diedit

### Untuk Ganti Konten:
1. **app/page.tsx** ⭐ - Semua teks & konten
2. **app/layout.tsx** - Meta tags & SEO

### Untuk Ganti Gambar:
1. **public/images/** - Upload gambar di sini
2. **app/page.tsx** - Update image paths

### Untuk Ganti Warna:
1. **tailwind.config.ts** - Color configuration
2. **app/globals.css** - CSS variables

### Untuk Ganti Kontak:
1. **app/page.tsx** - Search & replace nomor/alamat

---

## 🔍 Cara Mencari File

### Mencari Konten Tertentu:

**Ganti teks Hero section:**
```
File: app/page.tsx
Cari: "Transformasi Masa Depan"
Baris: ~40-50
```

**Ganti nomor WhatsApp:**
```
File: app/page.tsx
Cari: "0896-0466-6665"
Replace all: dengan nomor baru
```

**Ganti warna hijau:**
```
File: tailwind.config.ts
Cari: "primary"
Atau: app/globals.css
Cari: "--primary"
```

**Ganti gambar:**
```
File: app/page.tsx
Cari: "images.unsplash.com"
Replace: dengan "/images/nama-file.jpg"
```

---

## 📊 Ukuran File

### Estimasi:
```
Total project: ~50MB (dengan node_modules)
Source code only: ~500KB
Documentation: ~100KB
Images (placeholder): 0KB (external URLs)
Images (local, optimized): ~500KB (setelah diganti)
```

### Setelah Build:
```
.next/ folder: ~20-30MB
Production bundle: ~200-300KB (gzipped)
```

---

## 🚀 Workflow Development

### 1. Setup Awal:
```bash
npm install              # Install dependencies
npm run dev              # Start dev server
```

### 2. Development:
```
Edit: app/page.tsx       # Ubah konten
Save                     # Auto-reload di browser
Test                     # Cek hasilnya
```

### 3. Ganti Gambar:
```
1. Simpan gambar di public/images/
2. Edit app/page.tsx
3. Ganti URL Unsplash dengan /images/file.jpg
4. Refresh browser
```

### 4. Build & Deploy:
```bash
npm run build            # Build production
npm start                # Test production locally
# Deploy ke Vercel/Netlify
```

---

## 💡 Tips Navigasi

### Untuk Edit Cepat:

**VS Code:**
- `Ctrl+P` → Ketik nama file → Enter
- `Ctrl+F` → Cari teks dalam file
- `Ctrl+Shift+F` → Cari di semua file

**File yang Sering Diedit:**
1. `app/page.tsx` - 90% editing di sini
2. `tailwind.config.ts` - Ganti warna
3. `public/images/` - Upload gambar

---

## 📞 Support

Butuh bantuan navigasi project?

**Alwustho Technologies**
- WhatsApp: 0896-0466-6665
- Website: www.elfanbookless.com

---

**Last Updated**: 2024
**Version**: 1.0.0
