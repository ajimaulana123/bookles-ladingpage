# 🪟 Setup untuk Windows - ELFAN SYSTEM

## ⚠️ Penting untuk Pengguna Windows

Jika Anda mengalami error "running scripts is disabled" saat menjalankan npm, ikuti panduan ini.

---

## 🔧 Fix PowerShell Execution Policy

### Error yang Mungkin Muncul:
```
npx : File C:\Program Files\nodejs\npx.ps1 cannot be loaded because 
running scripts is disabled on this system.
```

### Solusi:

**Option 1: Ubah Execution Policy (Recommended)**

1. Buka PowerShell sebagai Administrator:
   - Klik kanan pada Start Menu
   - Pilih "Windows PowerShell (Admin)" atau "Terminal (Admin)"

2. Jalankan command ini:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

3. Ketik `Y` dan tekan Enter untuk konfirmasi

4. Sekarang npm command akan berfungsi normal

**Option 2: Gunakan Command Prompt (CMD)**

Jika tidak bisa ubah execution policy:

1. Buka Command Prompt (CMD):
   - Tekan `Win + R`
   - Ketik `cmd`
   - Tekan Enter

2. Navigate ke folder project:
```cmd
cd C:\Users\user\Documents\bookles-lp
```

3. Jalankan npm commands seperti biasa:
```cmd
npm install
npm run dev
```

**Option 3: Gunakan Git Bash**

Jika sudah install Git:

1. Klik kanan di folder project
2. Pilih "Git Bash Here"
3. Jalankan npm commands

---

## 📦 Instalasi Node.js (Jika Belum Ada)

### Cek Apakah Node.js Sudah Terinstall:
```cmd
node --version
npm --version
```

### Jika Belum Terinstall:

1. Download Node.js dari: https://nodejs.org/
2. Pilih versi LTS (Long Term Support)
3. Jalankan installer
4. Ikuti wizard instalasi
5. Restart Command Prompt/PowerShell
6. Cek lagi dengan `node --version`

---

## 🚀 Langkah Instalasi di Windows

### 1. Buka Terminal

**Pilihan A: Command Prompt (Recommended untuk Windows)**
- Tekan `Win + R`
- Ketik `cmd`
- Enter

**Pilihan B: PowerShell (Setelah fix execution policy)**
- Tekan `Win + X`
- Pilih "Windows PowerShell"

**Pilihan C: Git Bash**
- Klik kanan di folder
- "Git Bash Here"

### 2. Navigate ke Folder Project
```cmd
cd C:\Users\user\Documents\bookles-lp
```

Atau jika sudah di folder yang benar, lanjut ke step 3.

### 3. Install Dependencies
```cmd
npm install
```

⏱️ Tunggu 2-3 menit sampai selesai.

### 4. Jalankan Development Server
```cmd
npm run dev
```

### 5. Buka Browser
```
http://localhost:3000
```

✅ Landing page sudah jalan!

---

## 🛠️ Commands untuk Windows

### Command Prompt (CMD):

```cmd
# List files
dir

# Change directory
cd nama-folder

# Go back
cd ..

# Clear screen
cls

# Install dependencies
npm install

# Run dev server
npm run dev

# Build production
npm run build

# Start production
npm start
```

### PowerShell:

```powershell
# List files
Get-ChildItem
# atau
ls

# Change directory
cd nama-folder

# Go back
cd ..

# Clear screen
Clear-Host
# atau
cls

# Install dependencies
npm install

# Run dev server
npm run dev

# Build production
npm run build

# Start production
npm start
```

---

## 🔍 Troubleshooting Windows

### Error: "npm not found"
**Solusi:**
1. Install Node.js dari nodejs.org
2. Restart terminal
3. Coba lagi

### Error: "EACCES permission denied"
**Solusi:**
1. Jalankan terminal sebagai Administrator
2. Atau ubah npm global directory

### Error: "Port 3000 already in use"
**Solusi:**
```cmd
# Gunakan port lain
npm run dev -- -p 3001
```

### Error: "Cannot find module"
**Solusi:**
```cmd
# Hapus node_modules dan install ulang
rmdir /s /q node_modules
npm install
```

### Error: "EPERM: operation not permitted"
**Solusi:**
1. Close semua program yang mungkin menggunakan file
2. Disable antivirus sementara
3. Jalankan terminal sebagai Administrator

---

## 📝 Path di Windows

### Absolute Path:
```
C:\Users\user\Documents\bookles-lp
```

### Relative Path:
```
.\app\page.tsx
.\public\images\
```

### Slash Direction:
- Windows menggunakan backslash: `\`
- Tapi di code (JavaScript/TypeScript) gunakan forward slash: `/`

Contoh:
```tsx
// ✅ Correct (di code)
src="/images/photo.jpg"

// ❌ Wrong (di code)
src="\images\photo.jpg"
```

---

## 🎨 Editor Rekomendasi untuk Windows

### Visual Studio Code (Recommended)
- Download: https://code.visualstudio.com/
- Gratis, ringan, powerful
- Built-in terminal
- Extensions untuk React, TypeScript, Tailwind

### Cara Buka Project di VS Code:
1. Buka VS Code
2. File → Open Folder
3. Pilih folder `bookles-lp`
4. Terminal → New Terminal (Ctrl + `)
5. Jalankan `npm install`

---

## 🔐 Antivirus & Firewall

### Windows Defender:
Kadang Windows Defender block npm operations.

**Solusi:**
1. Buka Windows Security
2. Virus & threat protection
3. Manage settings
4. Add exclusion
5. Tambahkan folder project

### Firewall:
Jika diminta allow access untuk Node.js, klik "Allow".

---

## 📂 Folder Permissions

### Jika Error Permission:

1. Klik kanan folder project
2. Properties
3. Security tab
4. Edit
5. Pastikan user Anda punya Full Control
6. Apply → OK

---

## 🌐 Browser Rekomendasi

- ✅ Google Chrome (Recommended)
- ✅ Microsoft Edge (Built-in Windows)
- ✅ Firefox
- ⚠️ Internet Explorer (Jangan digunakan)

---

## 💡 Tips untuk Windows Users

### 1. Gunakan CMD untuk Stability
Command Prompt lebih stabil untuk npm commands di Windows.

### 2. Path dengan Spaces
Jika path ada spasi, gunakan quotes:
```cmd
cd "C:\Users\My Name\Documents\project"
```

### 3. Copy-Paste di CMD
- Copy: Klik kanan → Mark → Select → Enter
- Paste: Klik kanan

### 4. Copy-Paste di PowerShell
- Copy: Ctrl + C (setelah select)
- Paste: Ctrl + V atau klik kanan

### 5. Shortcut Keyboard
- `Ctrl + C` → Stop running process
- `Ctrl + L` → Clear screen (PowerShell)
- `Tab` → Auto-complete
- `↑` `↓` → Previous commands

---

## 🚀 Quick Commands Cheat Sheet

```cmd
# Setup
npm install

# Development
npm run dev

# Build
npm run build

# Production
npm start

# Stop server
Ctrl + C

# Clear terminal
cls

# Check versions
node --version
npm --version

# Help
npm help
```

---

## 📞 Butuh Bantuan?

**Alwustho Technologies**
- WhatsApp: 0896-0466-6665
- Website: www.elfanbookless.com

---

## ✅ Checklist Setup Windows

- [ ] Node.js terinstall (v18+)
- [ ] npm berfungsi di terminal
- [ ] PowerShell execution policy fixed (jika pakai PowerShell)
- [ ] Project folder accessible
- [ ] npm install berhasil
- [ ] npm run dev berhasil
- [ ] Browser bisa akses localhost:3000
- [ ] VS Code terinstall (optional)

---

**Selamat coding di Windows! 🪟🚀**

© 2024 ELFAN SYSTEM by Alwustho Technologies
