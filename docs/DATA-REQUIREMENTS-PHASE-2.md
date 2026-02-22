# 📋 Data Requirements - Phase 2 Pages

## Diskusi: Data yang Dibutuhkan untuk 3 Pages

**Status:** Planning & Data Collection
**Purpose:** Identify real data needed vs placeholder approach

---

## 🎯 Overview

Kita akan create 3 pages:
1. `/harga` - Pricing Page
2. `/produk` - Product Details Page
3. `/portfolio` - Case Studies Page

Mari kita diskusikan data apa yang sudah ada, apa yang missing, dan strategi untuk handle placeholder.

---

## 1️⃣ Page `/harga` - Pricing Page

### Data yang SUDAH ADA ✅

Dari `lib/constants.ts`:
- ✅ Product names (Bookless, Hybrid)
- ✅ Product features (5 features each)
- ✅ Technical specs (Server, Network, Capacity)
- ✅ Contact info (WhatsApp, website)

### Data yang MISSING ❌

**CRITICAL - Butuh Data Real:**

#### A. Pricing Tiers
```typescript
// NEED FROM YOU:
const pricingTiers = [
  {
    name: "BASIC",
    price: "[X] juta",              // ❌ NEED REAL PRICE
    period: "one-time",
    description: "Untuk institusi kecil",
    features: [
      "5,000 koleksi digital",      // ❌ NEED CONFIRMATION
      "20 concurrent users",         // ❌ NEED CONFIRMATION
      "1 tahun support",             // ❌ NEED CONFIRMATION
      "Basic training",              // ❌ NEED CONFIRMATION
    ],
    hardware: {
      server: "Mini PC i3",          // ❌ NEED SPECS
      storage: "500GB SSD",          // ❌ NEED CONFIRMATION
      router: "AC1200",              // ❌ NEED SPECS
    }
  },
  {
    name: "PROFESSIONAL",
    price: "[X] juta",              // ❌ NEED REAL PRICE
    popular: true,
    // ... similar structure
  },
  {
    name: "ENTERPRISE",
    price: "[X] juta",              // ❌ NEED REAL PRICE
    // ... similar structure
  }
]
```

#### B. Payment Options
```typescript
// NEED FROM YOU:
const paymentOptions = [
  "Cash/Transfer",                   // ✅ Assumed available
  "Cicilan [X] bulan",              // ❌ NEED: Berapa bulan? Via apa?
  "Leasing",                        // ❌ NEED: Partner leasing?
  "APBD/Hibah",                     // ❌ NEED: Process?
]
```

#### C. ROI Calculator Data
```typescript
// NEED FROM YOU:
const roiData = {
  conventionalCost: {
    building: "[X] juta",           // ❌ NEED: Estimasi biaya gedung
    books: "[X] juta",              // ❌ NEED: Estimasi biaya buku
    maintenance: "[X] juta/tahun",  // ❌ NEED: Biaya maintenance
    electricity: "[X] ribu/bulan",  // ❌ NEED: Biaya listrik konvensional
  },
  elfanCost: {
    initial: "[X] juta",            // ❌ NEED: Dari pricing tier
    maintenance: "[X] ribu/tahun",  // ❌ NEED: Biaya maintenance ELFAN
    electricity: "50-100 ribu/bulan", // ✅ Already mentioned
  }
}
```

### QUESTIONS FOR YOU:

1. **Pricing Strategy:**
   - Apakah harga sudah fixed atau masih flexible?
   - Apakah ada diskon untuk institusi tertentu (sekolah, masjid)?
   - Apakah harga include instalasi dan training?

2. **Package Differentiation:**
   - Apa perbedaan utama antara Basic, Pro, Enterprise?
   - Apakah based on: Jumlah konten? Jumlah user? Hardware specs?

3. **Payment Terms:**
   - Apakah terima cicilan? Berapa bulan?
   - Apakah ada partner leasing?
   - Bagaimana proses untuk APBD/Hibah?

4. **Support & Warranty:**
   - Berapa lama garansi hardware?
   - Apa saja yang termasuk dalam support?
   - Apakah ada biaya renewal support?

### RECOMMENDATION:

**Option A: Use Placeholder (Recommended for now)**
```typescript
price: "Mulai dari [X] juta"
cta: "Hubungi untuk Penawaran"
```
- Pro: Tidak commit ke harga spesifik
- Pro: Flexibility untuk nego per klien
- Con: Kurang transparent

**Option B: Show Real Price**
```typescript
price: "Rp 15 juta"
```
- Pro: Transparent, build trust
- Pro: Filter leads (yang serius)
- Con: Kompetitor bisa lihat
- Con: Sulit nego

**My Suggestion:** Start with Option A (placeholder) + "Hubungi untuk Penawaran Khusus"

---

## 2️⃣ Page `/produk` - Product Details

### Data yang SUDAH ADA ✅

Dari `lib/constants.ts`:
- ✅ 2 Products (Bookless, Hybrid)
- ✅ Product descriptions
- ✅ 5 Features per product
- ✅ 4 Main features (Offline, Multiplatform, User Friendly, Security)
- ✅ Technical specifications (detailed)
- ✅ Collections data (10,000+ books, etc)

### Data yang MISSING ❌

**NICE TO HAVE - Bisa Pakai Generic:**

#### A. Use Cases per Industry
```typescript
// CAN USE GENERIC EXAMPLES:
const useCases = [
  {
    industry: "Universitas",
    challenge: "Mahasiswa kesulitan akses jurnal",
    solution: "ELFAN System dengan 1,000+ e-journal",
    result: "Akses jurnal meningkat 300%",  // ❌ Generic, not real data
  },
  // ... more use cases
]
```

#### B. Comparison Table
```typescript
// CAN CREATE GENERIC:
const comparison = {
  conventional: {
    cost: "Rp 500 juta - 2 miliar",
    space: "Butuh gedung khusus",
    maintenance: "Tinggi",
    access: "Terbatas jam buka",
  },
  elfan: {
    cost: "Mulai Rp [X] juta",
    space: "Tidak butuh gedung",
    maintenance: "Minimal",
    access: "24/7",
  }
}
```

#### C. Integration Options
```typescript
// NEED FROM YOU (if available):
const integrations = [
  "SLIMS (Senayan Library Management System)", // ❌ Apakah support?
  "Inlis Lite",                                 // ❌ Apakah support?
  "Custom API",                                 // ❌ Apakah available?
]
```

### QUESTIONS FOR YOU:

1. **Product Differentiation:**
   - Kapan recommend Bookless vs Hybrid?
   - Apakah bisa combine keduanya?

2. **Technical Details:**
   - Apakah ada minimum requirements untuk client devices?
   - Apakah support offline mode di mobile app?
   - Apakah ada API untuk integrasi?

3. **Content Management:**
   - Apakah klien bisa upload konten sendiri?
   - Apakah ada content moderation?
   - Apakah ada limit storage?

### RECOMMENDATION:

**Use Generic Content + Placeholders**
- Product comparison: Generic (sudah cukup data)
- Use cases: Generic examples (not real client data)
- Technical specs: Use existing data from constants
- Integration: Mention "Custom integration available"

---

## 3️⃣ Page `/portfolio` - Case Studies

### Data yang SUDAH ADA ✅

Dari existing sections:
- ✅ Target markets (8 categories)
- ✅ Generic descriptions

### Data yang MISSING ❌

**CRITICAL - Butuh Data Real:**

#### A. Case Studies
```typescript
// NEED FROM YOU:
const caseStudies = [
  {
    clientName: "[Nama Institusi]",        // ❌ NEED REAL
    category: "Universitas",
    location: "[Kota, Provinsi]",         // ❌ NEED REAL
    year: "2023",                          // ❌ NEED REAL
    challenge: "[Masalah yang dihadapi]", // ❌ NEED REAL
    solution: "[Solusi yang diberikan]",  // ❌ NEED REAL
    results: [
      "Akses meningkat [X]%",             // ❌ NEED REAL
      "Hemat biaya [X]%",                 // ❌ NEED REAL
    ],
    testimonial: "[Quote dari klien]",    // ❌ NEED REAL
    images: [
      "/images/portfolio/client-1.jpg",   // ❌ NEED REAL PHOTOS
    ]
  },
  // ... 10-15 case studies
]
```

#### B. Statistics
```typescript
// NEED FROM YOU:
const stats = {
  totalProjects: "[X]+",                  // ❌ NEED REAL
  totalClients: "[X]+",                   // ❌ NEED REAL
  citiesCovered: "[X]+",                  // ❌ NEED REAL
  satisfactionRate: "[X]%",               // ❌ NEED REAL
}
```

### QUESTIONS FOR YOU:

1. **Client Permission:**
   - Apakah sudah ada permission dari klien untuk showcase?
   - Apakah boleh mention nama institusi?
   - Apakah ada foto implementasi yang bisa dipakai?

2. **Case Study Details:**
   - Berapa case study yang bisa di-showcase?
   - Apakah ada data hasil (metrics, ROI)?
   - Apakah ada testimonial tertulis?

3. **Photos:**
   - Apakah ada foto before/after?
   - Apakah ada foto tim saat instalasi?
   - Apakah ada foto user menggunakan sistem?

### RECOMMENDATION:

**Option A: Full Placeholder (If no data yet)**
```typescript
// Show 3-6 generic case studies with:
- [Nama Institusi] placeholder
- Generic photos from Unsplash
- Generic results
- Warning box: "Portfolio real coming soon"
```

**Option B: Mix Real + Placeholder (If have some data)**
```typescript
// Show 2-3 real case studies + 3-4 placeholders
- Real ones: Full details with photos
- Placeholders: Generic with warning
```

**My Suggestion:** Start with Option A, easy to update later

---

## 📊 Summary: Data Availability

### ✅ Data READY (Can Use Now):
- Contact info
- Product names & descriptions
- Features list
- Technical specifications
- Collections data
- Target markets

### ⚠️ Data PARTIAL (Can Use Generic):
- Use cases per industry
- Comparison tables
- Integration options
- Generic testimonials

### ❌ Data MISSING (Need Real Data):
- **Pricing** (tiers, prices, payment options)
- **Case studies** (client names, results, photos)
- **Statistics** (total projects, clients, cities)
- **ROI data** (cost comparison numbers)

---

## 🎯 Recommended Approach

### Phase 2A: Create Pages with Placeholders (Week 3)

**Priority 1: `/harga` Page**
- Use placeholder pricing: "Mulai dari [X] juta"
- Generic package comparison
- CTA: "Hubungi untuk Penawaran Khusus"
- **Effort:** 2 hari (no real data needed)

**Priority 2: `/produk` Page**
- Use existing data from constants
- Generic use cases
- Generic comparison table
- **Effort:** 2 hari (mostly existing data)

**Priority 3: `/portfolio` Page**
- 3-6 generic case studies with placeholders
- Warning box: "Portfolio real coming soon"
- Generic photos from Unsplash
- **Effort:** 2 hari (all placeholder)

**Total Phase 2A:** 6 hari (1.5 minggu)

### Phase 2B: Update with Real Data (Later)

When you have real data:
1. Update pricing tiers
2. Replace case study placeholders
3. Add real client photos
4. Update statistics

**Effort:** 2-3 hari (just data update)

---

## ❓ Questions for You

Before I start creating pages, please answer:

### 1. Pricing Page:
- [ ] Apakah Anda punya pricing tiers yang bisa di-share?
- [ ] Atau prefer pakai placeholder "Hubungi untuk Penawaran"?
- [ ] Apakah ada payment options spesifik (cicilan, leasing)?

### 2. Product Page:
- [ ] Apakah ada technical details tambahan yang perlu ditambahkan?
- [ ] Apakah ada integration yang di-support (SLIMS, Inlis, etc)?
- [ ] Apakah ada demo video atau screenshot yang bisa dipakai?

### 3. Portfolio Page:
- [ ] Apakah ada case study real yang bisa di-showcase?
- [ ] Apakah ada foto implementasi?
- [ ] Atau prefer pakai placeholder dulu?

### 4. General:
- [ ] Apakah ada dokumen/file lain yang bisa saya reference?
- [ ] Apakah ada competitor website yang bisa jadi reference?
- [ ] Apakah ada brand guidelines (warna, font, tone)?

---

## 🚀 Next Steps

**Option A: Start with Placeholders (Recommended)**
- Saya create 3 pages dengan placeholder
- Struktur & design sudah jadi
- Anda tinggal update data nanti
- **Timeline:** 1.5 minggu

**Option B: Wait for Real Data**
- Anda kumpulkan data dulu
- Saya create dengan data real
- Lebih lama tapi lebih complete
- **Timeline:** 3-4 minggu (termasuk data collection)

**My Recommendation:** 
Go with Option A. Create pages with placeholders now, update data later. Ini lebih agile dan bisa iterate faster.

---

## 📞 Your Decision?

Silakan jawab pertanyaan di atas, atau kalau mau cepat:

**Quick Decision:**
- "Pakai placeholder dulu, update nanti" → I'll start immediately
- "Tunggu, saya ada data" → Share the data first
- "Mix: [specific data] real, sisanya placeholder" → Tell me what's real

**What's your choice?** 🤔
