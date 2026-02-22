// Data klien ELFAN System
// Centralized data untuk maintainability

export interface Client {
  name: string
  location: string
  logo?: string // URL logo (optional)
  featured?: boolean // Anchor client
  category?: 'sekolah' | 'pesantren' | 'masjid' | 'lembaga' | 'universitas' | 'pemerintah' // Category type
}

export interface ClientsByRegion {
  jawaTimur: Client[]
  jawaBarat: Client[]
  jawaTengah: Client[]
  bali: Client[]
  sumatera: Client[]
  kalimantan: Client[]
  sulawesi: Client[]
  gorontalo: Client[]
  jakarta: Client[]
  internasional: Client[]
}

export const clientsData: ClientsByRegion = {
  jawaTimur: [
    { name: 'Pondok Pesantren Yatim & Dhuafa Al-Ikhlas', location: 'Singosari, Malang' },
    { name: 'Pondok Pesantren Nurul Haromain', location: 'Pujon, Malang' },
    { name: 'Pondok Pesantren Manba\'ul Hikam', location: 'Sidoarjo' },
    { name: 'Lembaga Pendidikan Islam Al-Azhaar', location: 'Tulungagung' },
    { name: 'Pondok Pesantren ELKISI', location: 'Mojokerto' },
    { name: 'Pondok Pesantren Darullughah Wadda\'wah', location: 'Bangil, Pasuruan' },
    { name: 'Turats Nabawi Zainuddin MZ', location: 'Sidoarjo' },
    { name: 'Pesantren Tholabie', location: 'Malang' },
    { name: 'Yayasan Bina Insan Kamil', location: 'Tuban' },
    { name: 'Yayasan Pendidikan Islam Ar-Rohmah Putri - Pesantren Hidayatullah', location: 'Malang' },
    { name: 'Pondok Pesantren Kota Alif Lam Mim', location: 'Surabaya/Malang' },
    { name: 'Ma\'had Tahfizhul Qur\'an', location: 'Malang' },
    { name: 'Pondok Pesantren Bahrul Ulum', location: 'Tambakberas, Jombang', featured: true },
    { name: 'Pondok Pesantren Al Uswah', location: 'Bangil' },
    { name: 'Mumtaza', location: 'Bojonegoro' },
    { name: 'Masjid Hibatullah', location: 'Bojonegoro' },
    
    // === MALANG ===
    { name: 'MI Darul Quran', location: 'Malang', category: 'sekolah' },
    
    // === SURABAYA ===
    { name: 'Alif Laam Mim Surabaya (PP/MTS-MA-STAI)', location: 'Surabaya', featured: true },
    { name: 'SMA Muhammadiyah 10 Surabaya', location: 'Surabaya', category: 'sekolah', featured: true },
  ],
  
  jawaBarat: [
    { name: 'Islamic Center Wadi Mubarak', location: 'Bogor', featured: true },
    { name: 'Pondok Pesantren Al-Ihya', location: 'Subang' },
    { name: 'Pondok Pesantren Al-Ma\'tuq', location: 'Sukabumi' },
    { name: 'Pesantren Qur\'an Terpadu Mimbarul Huffadz', location: 'Bekasi', featured: true },
    { name: 'Ma\'had Aisyah binti Abu Bakar', location: 'Bogor' },
    { name: 'Yayasan Asy-Syifa Al-Khoeriyyah', location: 'Subang' },
    { name: 'Pondok Pesantren BMI (Bina Masjid dan Iman)', location: 'Bogor' },
    { name: 'Al-Fath Institute', location: 'Bandung' },
    { name: 'Lembaga Tarbiyah Islamiyyah', location: 'Bandung' },
    
    // === BEKASI ===
    { name: 'MA As-Syafi\'iah 02 Bekasi', location: 'Bekasi', category: 'sekolah' },
    { name: 'MTs Fisabilillah Bekasi', location: 'Bekasi', category: 'sekolah' },
    
    // === PEMERINTAH DAERAH JAWA BARAT ===
    { name: 'DISARPUS Kota Bandung', location: 'Kota Bandung', category: 'pemerintah', featured: true },
    { name: 'Science Center Sabilulungan', location: 'Kabupaten Bandung', category: 'pemerintah' },
    { name: 'Taman Perpustakaan Kabupaten Bandung', location: 'Kabupaten Bandung', category: 'pemerintah' },
  ],
  
  jawaTengah: [
    { name: 'IDBC (Islamic Digital Boarding College)', location: 'Solo', featured: true },
    { name: 'Masjid Al-Muhtadin', location: 'Ngruki' },
    { name: 'Pesantren Tinggi Bahasa Arab Al-Muttaqin', location: 'Jepara' },
    { name: 'Islamic Center Darussunnah', location: 'Banaran, Sragen' },
    { name: 'Pondok Pesantren Al-Mukmin', location: 'Ngruki, Sukoharjo', featured: true },
    { name: 'Pondok Pesantren Adh-Dhuhaa', location: 'Sukoharjo' },
    { name: 'Pondok Pesantren Tahfidzul Qur\'an Darussalam', location: 'Mojogedang, Karanganyar' },
    { name: 'PPIT Al-Hikmah', location: 'Karanggede, Boyolali' },
    { name: 'Pondok Pesantren Tahfizh Baitur Rahman Qur\'ani', location: 'Tasikmadu, Karanganyar' },
    { name: 'Ma\'had Isykarima', location: 'Mojogedang, Karanganyar', featured: true },
    { name: 'STIQ Isykarima (Sekolah Tinggi Ilmu Al-Quran)', location: 'Karanganyar', featured: true },
    { name: 'Ponpes Darul Hijroh', location: 'Polokarto' },
    { name: 'Yayasan Al-Izzah', location: 'Surakarta' },
    { name: 'Ponpes Darul Musthofa', location: 'Karanganyar' },
    { name: 'Dewan Dakwah Islamiyah Indonesia (DDII)', location: 'Jawa Tengah' },
    { name: 'Kampung Al Qur\'an Uwais Al Qorni', location: 'Mojosari' },
    { name: 'Yayasan Al Fath Solo Baru', location: 'Surakarta' },
    { name: 'STIM (Sekolah Tinggi Islam Al Mukmin)', location: 'Surakarta', featured: true },
    { name: 'PPTQ Insan Kamil', location: 'Karanganyar' },
    { name: 'Yayasan Asa Mulia Insan Kamil', location: 'Magelang' },
    
    // === SMK NEGERI KOTA SURAKARTA ===
    { name: 'SMK Negeri 1 Surakarta', location: 'Kota Surakarta', category: 'sekolah' },
    { name: 'SMK Negeri 5 Surakarta', location: 'Kota Surakarta', category: 'sekolah' },
    { name: 'SMK Negeri 6 Surakarta', location: 'Kota Surakarta', category: 'sekolah' },
    { name: 'SMA IT Nur Hidayah', location: 'Surakarta', category: 'sekolah' },
    { name: 'SMP IT Nur Hidayah', location: 'Surakarta', category: 'sekolah' },
    
    // === KABUPATEN SRAGEN ===
    { name: 'SMK Negeri 1 Sragen', location: 'Kabupaten Sragen', category: 'sekolah' },
    { name: 'SMK Negeri 2 Sragen', location: 'Kabupaten Sragen', category: 'sekolah' },
    { name: 'SMK Negeri 1 Kedawung', location: 'Sragen', category: 'sekolah' },
    { name: 'SMK Negeri 1 Gesi', location: 'Sragen', category: 'sekolah' },
    { name: 'SMK Sakti Gemolong', location: 'Sragen', category: 'sekolah' },
    { name: 'SMK Muhammadiyah 1 Sragen', location: 'Kabupaten Sragen', category: 'sekolah' },
    { name: 'SMA Negeri 1 Sragen', location: 'Kabupaten Sragen', category: 'sekolah' },
    { name: 'SMA Negeri 1 Gemolong', location: 'Sragen', category: 'sekolah' },
    { name: 'SMK Binawiyata Sragen', location: 'Kabupaten Sragen', category: 'sekolah' },
    { name: 'SMP Negeri 2 Plupuh', location: 'Sragen', category: 'sekolah' },
    
    // === KABUPATEN KARANGANYAR ===
    { name: 'SMA Negeri Kerjo', location: 'Karanganyar', category: 'sekolah' },
    { name: 'SMA Muhammadiyah 1 Karanganyar', location: 'Kabupaten Karanganyar', category: 'sekolah' },
    
    // === SUKOHARJO & KLATEN ===
    { name: 'SMA Negeri 1 Tawangsari', location: 'Sukoharjo', category: 'sekolah' },
    { name: 'SMK Negeri 1 Sukoharjo', location: 'Kabupaten Sukoharjo', category: 'sekolah' },
    { name: 'SMK Negeri 1 Gantiwarno', location: 'Klaten', category: 'sekolah' },
    
    // === PEMERINTAH DAERAH JAWA TENGAH ===
    { name: 'Desa Digital Cemani', location: 'Grogol, Sukoharjo', category: 'pemerintah', featured: true },
    { name: 'Perpustakaan Umum Kabupaten Boyolali', location: 'Kabupaten Boyolali', category: 'pemerintah' },
    
    // === DIY (SLEMAN) ===
    { name: 'SDIT Luqman Al Hakim', location: 'Sleman, DIY', category: 'sekolah' },
    
    // === PERGURUAN TINGGI JAWA TENGAH ===
    { name: 'UNISSULA (Universitas Islam Sultan Agung)', location: 'Semarang', category: 'universitas', featured: true },
    { name: 'Perpustakaan IAIN Surakarta (UIN Raden Mas Said)', location: 'Surakarta', category: 'universitas', featured: true },
    { name: 'Perpustakaan IAIN Purwokerto (UIN SAIZU)', location: 'Purwokerto', category: 'universitas' },
    { name: 'STIE Swastamandiri', location: 'Surakarta', category: 'universitas' },
  ],
  
  bali: [
    { name: 'Yasmaiba - Yayasan Masjid Agung Ibnu Batutah', location: 'Bali' },
  ],
  
  sumatera: [
    { name: 'Al-Ihsan Boarding School', location: 'Riau' },
    { name: 'Masjid Agung Madani Islamic Center', location: 'Rokan Hulu, Riau', featured: true },
    { name: 'TAFAQQUH', location: 'Riau' },
    { name: 'Pondok Pesantren Walisongo', location: 'Lampung Utara' },
    { name: 'Rumah Quran Ibnu Mas\'ud', location: 'Manna, Bengkulu Selatan' },
    { name: 'Institut Agama Islam Al-Azhaar', location: 'Lubuklinggau' },
    { name: 'Pondok Pesantren Ibnu Sina', location: 'Siak, Riau' },
    { name: 'QR Qolbu Re-engineering Foundation', location: 'Riau' },
    { name: 'Pondok Pesantren An-Ni\'mah', location: 'Batam' },
    { name: 'SMP MA-IT Bahrul Huda', location: 'Bangka Tengah' },
    { name: 'Yayasan SPMAA', location: 'Batam' },
    
    // === RIAU ===
    { name: 'SMP HAMKA Creative School', location: 'Riau', category: 'sekolah' },
    { name: 'SMA Negeri 4 Kandis', location: 'Siak, Riau', category: 'sekolah' },
    
    // === BANGKA BELITUNG ===
    { name: 'SMP Bahrul Huda Sarangmandi', location: 'Bangka', category: 'sekolah' },
    
    // === PERGURUAN TINGGI SUMATERA ===
    { name: 'Fakultas Syariah & Hukum UIN SUSKA Riau', location: 'Pekanbaru, Riau', category: 'universitas', featured: true },
    
    // === PEMERINTAH DAERAH SUMATERA ===
    { name: 'Perpustakaan Daerah H. Mahidin Said', location: 'Rokan Hulu, Riau', category: 'pemerintah', featured: true },
    { name: 'Perpustakaan Nias', location: 'Nias, Sumatera Utara', category: 'pemerintah' },
  ],
  
  kalimantan: [
    { name: 'Pondok Pesantren Hidayatullah (Pendidikan Luqman Al-Hakim)', location: 'Balikpapan, Kalimantan Timur', featured: true },
    { name: 'Pondok Pesantren As-Salaam', location: 'Arya Kemuning, Kutai Barat' },
    { name: 'SMAIT Al-Auliya', location: 'Balikpapan', category: 'sekolah' },
    
    // === PERGURUAN TINGGI KALIMANTAN ===
    { name: 'UMKT (Universitas Muhammadiyah Kalimantan Timur)', location: 'Samarinda, Kalimantan Timur', category: 'universitas', featured: true },
    { name: 'UMB (Universitas Muhammadiyah Banjarmasin)', location: 'Banjarmasin, Kalimantan Selatan', category: 'universitas' },
  ],
  
  sulawesi: [
    // === KOTA MAKASSAR (Ibu Kota Provinsi) ===
    { name: 'SMA Negeri 1 Makassar', location: 'Kota Makassar', category: 'sekolah', featured: true },
    { name: 'SMA Negeri 2 Makassar', location: 'Kota Makassar', category: 'sekolah', featured: true },
    { name: 'SMA Negeri 3 Makassar', location: 'Kota Makassar', category: 'sekolah' },
    { name: 'SMA Negeri 4 Makassar', location: 'Kota Makassar', category: 'sekolah' },
    { name: 'SMA Negeri 5 Makassar', location: 'Kota Makassar', category: 'sekolah' },
    { name: 'SMA Negeri 6 Makassar', location: 'Kota Makassar', category: 'sekolah' },
    { name: 'SMA Negeri 7 Makassar', location: 'Kota Makassar', category: 'sekolah' },
    { name: 'SMA Negeri 8 Makassar', location: 'Kota Makassar', category: 'sekolah' },
    { name: 'SMA Negeri 9 Makassar', location: 'Kota Makassar', category: 'sekolah' },
    { name: 'SMA Negeri 10 Makassar', location: 'Kota Makassar', category: 'sekolah' },
    { name: 'SMA Negeri 11 Makassar', location: 'Kota Makassar', category: 'sekolah' },
    { name: 'SMA Negeri 12 Makassar', location: 'Kota Makassar', category: 'sekolah' },
    { name: 'SMA Negeri 13 Makassar', location: 'Kota Makassar', category: 'sekolah' },
    { name: 'SMA Negeri 14 Makassar', location: 'Kota Makassar', category: 'sekolah' },
    { name: 'SMA Negeri 18 Makassar', location: 'Kota Makassar', category: 'sekolah' },
    { name: 'SMA Islam Athirah Makassar', location: 'Kota Makassar', category: 'sekolah' },
    
    // === KABUPATEN LUWU ===
    { name: 'SMA Negeri 1 Luwu', location: 'Kabupaten Luwu', category: 'sekolah' },
    { name: 'SMA Negeri 11 Luwu', location: 'Kabupaten Luwu', category: 'sekolah' },
    { name: 'SMA Negeri 12 Luwu', location: 'Kabupaten Luwu', category: 'sekolah' },
    { name: 'SMK Negeri 12 Luwu', location: 'Kabupaten Luwu', category: 'sekolah' },
    
    // === KABUPATEN LUWU UTARA ===
    { name: 'SMA Negeri 1 Luwu Utara', location: 'Kabupaten Luwu Utara', category: 'sekolah' },
    { name: 'SMA Negeri 2 Luwu Utara', location: 'Kabupaten Luwu Utara', category: 'sekolah' },
    { name: 'SMA Negeri 4 Luwu Utara', location: 'Kabupaten Luwu Utara', category: 'sekolah' },
    { name: 'SMA Negeri 8 Luwu Utara', location: 'Kabupaten Luwu Utara', category: 'sekolah' },
    { name: 'SMA Negeri 11 Luwu Utara', location: 'Kabupaten Luwu Utara', category: 'sekolah' },
    
    // === KABUPATEN LUWU TIMUR ===
    { name: 'SMA Negeri 1 Luwu Timur', location: 'Kabupaten Luwu Timur', category: 'sekolah' },
    { name: 'SMA Negeri 2 Luwu Timur', location: 'Kabupaten Luwu Timur', category: 'sekolah' },
    { name: 'SMA Negeri 3 Luwu Timur', location: 'Kabupaten Luwu Timur', category: 'sekolah' },
    { name: 'SMA Negeri 7 Luwu Timur', location: 'Kabupaten Luwu Timur', category: 'sekolah' },
    
    // === KOTA PAREPARE ===
    { name: 'SMA Negeri 1 Parepare', location: 'Kota Parepare', category: 'sekolah', featured: true },
    { name: 'SMA Negeri 2 Parepare', location: 'Kota Parepare', category: 'sekolah' },
    { name: 'SMA Negeri 3 Parepare', location: 'Kota Parepare', category: 'sekolah' },
    { name: 'SMA Negeri 4 Parepare', location: 'Kota Parepare', category: 'sekolah' },
    { name: 'SMA Negeri 5 Parepare', location: 'Kota Parepare', category: 'sekolah' },
    { name: 'SMK Negeri 2 Parepare', location: 'Kota Parepare', category: 'sekolah' },
    
    // === KOTA PALOPO ===
    { name: 'SMA Negeri 3 Kota Palopo', location: 'Kota Palopo', category: 'sekolah' },
    
    // === KABUPATEN PANGKEP ===
    { name: 'SMA Negeri 1 Pangkep', location: 'Kabupaten Pangkep', category: 'sekolah' },
    { name: 'SMA Negeri 13 Pangkep', location: 'Kabupaten Pangkep', category: 'sekolah' },
    { name: 'SMA Negeri 20 Pangkep', location: 'Kabupaten Pangkep', category: 'sekolah' },
    
    // === KABUPATEN BARRU ===
    { name: 'SMA Negeri 1 Barru', location: 'Kabupaten Barru', category: 'sekolah' },
    { name: 'SMA Negeri 2 Barru', location: 'Kabupaten Barru', category: 'sekolah' },
    { name: 'SMA Negeri 3 Barru', location: 'Kabupaten Barru', category: 'sekolah' },
    
    // === KABUPATEN ENREKANG ===
    { name: 'SMA Negeri 1 Enrekang', location: 'Kabupaten Enrekang', category: 'sekolah' },
    { name: 'SMA Negeri 12 Enrekang', location: 'Kabupaten Enrekang', category: 'sekolah' },
    
    // === KABUPATEN SINJAI ===
    { name: 'SMA Negeri 5 Sinjai', location: 'Kabupaten Sinjai', category: 'sekolah' },
    
    // === KEPULAUAN SELAYAR ===
    { name: 'SMA Negeri 1 Selayar', location: 'Kepulauan Selayar', category: 'sekolah' },
    
    // === TANA TORAJA ===
    { name: 'SMA Negeri 2 Makale', location: 'Tana Toraja', category: 'sekolah' },
    
    // === TORAJA UTARA ===
    { name: 'SMA Negeri 1 Toraja Utara', location: 'Toraja Utara', category: 'sekolah' },
    { name: 'SMA Negeri 4 Toraja Utara', location: 'Toraja Utara', category: 'sekolah' },
    { name: 'SMA Negeri 6 Toraja Utara', location: 'Toraja Utara', category: 'sekolah' },
    { name: 'SMA Negeri 7 Toraja Utara', location: 'Toraja Utara', category: 'sekolah' },
    { name: 'SMA Negeri 8 Toraja Utara', location: 'Toraja Utara', category: 'sekolah' },
    { name: 'SMA Negeri 10 Toraja Utara', location: 'Toraja Utara', category: 'sekolah' },
    
    // === KABUPATEN SOPPENG ===
    { name: 'SMA Negeri 1 Soppeng', location: 'Kabupaten Soppeng', category: 'sekolah' },
    { name: 'SMA Negeri 2 Soppeng', location: 'Kabupaten Soppeng', category: 'sekolah' },
    { name: 'SMA Negeri 3 Soppeng', location: 'Kabupaten Soppeng', category: 'sekolah' },
    { name: 'SMA Negeri 4 Soppeng', location: 'Kabupaten Soppeng', category: 'sekolah' },
    { name: 'SMA Negeri 5 Soppeng', location: 'Kabupaten Soppeng', category: 'sekolah' },
    { name: 'SMA Negeri 6 Soppeng', location: 'Kabupaten Soppeng', category: 'sekolah' },
    
    // === KABUPATEN JENEPONTO ===
    { name: 'SMA Negeri 1 Jeneponto', location: 'Kabupaten Jeneponto', category: 'sekolah' },
    { name: 'SMA Negeri 2 Jeneponto', location: 'Kabupaten Jeneponto', category: 'sekolah' },
    { name: 'SMA Negeri 3 Jeneponto', location: 'Kabupaten Jeneponto', category: 'sekolah' },
    { name: 'SMA Negeri 4 Jeneponto', location: 'Kabupaten Jeneponto', category: 'sekolah' },
    { name: 'SMA Negeri 5 Jeneponto', location: 'Kabupaten Jeneponto', category: 'sekolah' },
    
    // === KABUPATEN BULUKUMBA ===
    { name: 'SMA Negeri 1 Bulukumba', location: 'Kabupaten Bulukumba', category: 'sekolah' },
    { name: 'SMA Negeri 2 Bulukumba', location: 'Kabupaten Bulukumba', category: 'sekolah' },
    { name: 'SMA Negeri 3 Bulukumba', location: 'Kabupaten Bulukumba', category: 'sekolah' },
    { name: 'SMA Negeri 8 Bulukumba', location: 'Kabupaten Bulukumba', category: 'sekolah' },
    { name: 'SMA Negeri 9 Bulukumba', location: 'Kabupaten Bulukumba', category: 'sekolah' },
    
    // === KABUPATEN MAROS ===
    { name: 'SMA Negeri 1 Maros', location: 'Kabupaten Maros', category: 'sekolah' },
    { name: 'SMA Negeri 4 Maros', location: 'Kabupaten Maros', category: 'sekolah' },
    { name: 'SMA Negeri 12 Maros', location: 'Kabupaten Maros', category: 'sekolah' },
    
    // === KABUPATEN BONE ===
    { name: 'SMA Negeri 1 Bone', location: 'Kabupaten Bone', category: 'sekolah' },
    { name: 'SMA Negeri 3 Bone', location: 'Kabupaten Bone', category: 'sekolah' },
    { name: 'SMA Negeri 5 Bone', location: 'Kabupaten Bone', category: 'sekolah' },
    { name: 'SMA Negeri 7 Bone', location: 'Kabupaten Bone', category: 'sekolah' },
    { name: 'SMA Negeri 8 Bone', location: 'Kabupaten Bone', category: 'sekolah' },
    { name: 'SMA Negeri 9 Bone', location: 'Kabupaten Bone', category: 'sekolah' },
    { name: 'SMA Negeri 10 Bone', location: 'Kabupaten Bone', category: 'sekolah' },
    { name: 'SMA Negeri 13 Bone', location: 'Kabupaten Bone', category: 'sekolah' },
    { name: 'SMA Negeri 15 Bone', location: 'Kabupaten Bone', category: 'sekolah' },
    { name: 'SMA Negeri 17 Bone', location: 'Kabupaten Bone', category: 'sekolah' },
    { name: 'SMA Negeri 22 Bone', location: 'Kabupaten Bone', category: 'sekolah' },
    { name: 'SMA Negeri 25 Bone', location: 'Kabupaten Bone', category: 'sekolah' },
    { name: 'SMA Negeri 30 Bone', location: 'Kabupaten Bone', category: 'sekolah' },
    { name: 'SMK Negeri 1 Bone', location: 'Kabupaten Bone', category: 'sekolah' },
    { name: 'SMK Negeri 2 Bone', location: 'Kabupaten Bone', category: 'sekolah' },
    { name: 'SMK Negeri 4 Bone', location: 'Kabupaten Bone', category: 'sekolah' },
    { name: 'SMK Negeri 7 Bone', location: 'Kabupaten Bone', category: 'sekolah' },
    { name: 'SMK Negeri 9 Bone', location: 'Kabupaten Bone', category: 'sekolah' },
    
    // === KABUPATEN TAKALAR ===
    { name: 'SMA Negeri 1 Takalar', location: 'Kabupaten Takalar', category: 'sekolah' },
    { name: 'SMA Negeri 2 Takalar', location: 'Kabupaten Takalar', category: 'sekolah' },
    { name: 'SMA Negeri 3 Takalar', location: 'Kabupaten Takalar', category: 'sekolah' },
    { name: 'SMA Negeri 4 Takalar', location: 'Kabupaten Takalar', category: 'sekolah' },
    { name: 'SMA Negeri 5 Takalar', location: 'Kabupaten Takalar', category: 'sekolah' },
    { name: 'SMA Negeri 6 Takalar', location: 'Kabupaten Takalar', category: 'sekolah' },
    
    // === DINAS PERPUSTAKAAN & KEARSIPAN (DPK) SULAWESI SELATAN ===
    { name: 'DPK Provinsi Sulawesi Selatan', location: 'Sulawesi Selatan', category: 'pemerintah', featured: true },
    { name: 'Dinas Pendidikan Provinsi Sulawesi Selatan', location: 'Sulawesi Selatan', category: 'pemerintah', featured: true },
    { name: 'DPK Kota Makassar', location: 'Kota Makassar', category: 'pemerintah', featured: true },
    { name: 'DPK Kabupaten Bone', location: 'Kabupaten Bone', category: 'pemerintah' },
    { name: 'DPK Kabupaten Maros', location: 'Kabupaten Maros', category: 'pemerintah' },
    { name: 'DPK Kabupaten Bulukumba', location: 'Kabupaten Bulukumba', category: 'pemerintah' },
    { name: 'DPK Kabupaten Pangkep', location: 'Pangkajene & Kepulauan', category: 'pemerintah' },
    { name: 'DPK Kabupaten Enrekang', location: 'Kabupaten Enrekang', category: 'pemerintah' },
    { name: 'DPK Kabupaten Gowa', location: 'Kabupaten Gowa', category: 'pemerintah' },
    { name: 'DPK Kabupaten Jeneponto', location: 'Kabupaten Jeneponto', category: 'pemerintah' },
    { name: 'DPK Kabupaten Bantaeng', location: 'Kabupaten Bantaeng', category: 'pemerintah' },
    { name: 'DPK Kabupaten Barru', location: 'Kabupaten Barru', category: 'pemerintah' },
    { name: 'DPK Kabupaten Luwu', location: 'Kabupaten Luwu', category: 'pemerintah' },
    { name: 'DPK Kabupaten Luwu Utara', location: 'Kabupaten Luwu Utara', category: 'pemerintah' },
    { name: 'DPK Kabupaten Luwu Timur', location: 'Kabupaten Luwu Timur', category: 'pemerintah' },
    { name: 'DPK Kota Palopo', location: 'Kota Palopo', category: 'pemerintah' },
    { name: 'DPK Kota Parepare', location: 'Kota Parepare', category: 'pemerintah' },
    { name: 'DPK Kabupaten Pinrang', location: 'Kabupaten Pinrang', category: 'pemerintah' },
    { name: 'DPK Kabupaten Sidenreng Rappang', location: 'Sidrap', category: 'pemerintah' },
    { name: 'DPK Kabupaten Sinjai', location: 'Kabupaten Sinjai', category: 'pemerintah' },
    { name: 'DPK Kabupaten Soppeng', location: 'Kabupaten Soppeng', category: 'pemerintah' },
    { name: 'DPK Kabupaten Takalar', location: 'Kabupaten Takalar', category: 'pemerintah' },
    { name: 'DPK Kabupaten Wajo', location: 'Kabupaten Wajo', category: 'pemerintah' },
    { name: 'DPK Kabupaten Tana Toraja', location: 'Tana Toraja', category: 'pemerintah' },
    { name: 'DPK Kabupaten Toraja Utara', location: 'Toraja Utara', category: 'pemerintah' },
  ],
  
  gorontalo: [
    { name: 'Pemerintah Daerah Kabupaten Pohuwato', location: 'Gorontalo', category: 'pemerintah', featured: true },
  ],
  
  jakarta: [
    { name: 'Istana Quran Indonesia', location: 'Jakarta', featured: true },
    { name: 'SDIT Qotrunnada', location: 'Jakarta', category: 'sekolah' },
  ],
  
  internasional: [
    { name: 'Pondok An-Nuur', location: 'Kuantan Pahang, Malaysia 🇲🇾', featured: true },
  ],
}

// Helper function to get featured clients
export const getFeaturedClients = (): Client[] => {
  const allClients = [
    ...clientsData.jawaTimur,
    ...clientsData.jawaBarat,
    ...clientsData.jawaTengah,
    ...clientsData.bali,
    ...clientsData.sumatera,
    ...clientsData.kalimantan,
    ...clientsData.sulawesi,
    ...clientsData.gorontalo,
    ...clientsData.jakarta,
    ...clientsData.internasional,
  ]
  
  return allClients.filter(client => client.featured)
}

// Helper function to get total count
export const getTotalClientsCount = (): number => {
  return (
    clientsData.jawaTimur.length +
    clientsData.jawaBarat.length +
    clientsData.jawaTengah.length +
    clientsData.bali.length +
    clientsData.sumatera.length +
    clientsData.kalimantan.length +
    clientsData.sulawesi.length +
    clientsData.gorontalo.length +
    clientsData.jakarta.length +
    clientsData.internasional.length
  )
}

// Helper function to get count by region
export const getRegionCounts = () => ({
  jawaTimur: clientsData.jawaTimur.length,
  jawaBarat: clientsData.jawaBarat.length,
  jawaTengah: clientsData.jawaTengah.length,
  bali: clientsData.bali.length,
  sumatera: clientsData.sumatera.length,
  kalimantan: clientsData.kalimantan.length,
  sulawesi: clientsData.sulawesi.length,
  gorontalo: clientsData.gorontalo.length,
  jakarta: clientsData.jakarta.length,
  internasional: clientsData.internasional.length,
})
