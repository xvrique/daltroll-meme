# Setup Assets - DATROLL Landing Page

## Required Assets

Untuk menjalankan landing page ini dengan sempurna, Anda perlu menambahkan 2 file asset:

### 1. Background GIF
**Path:** `stonks-landing/public/assets/background.gif`
- File: background.gif
- Digunakan sebagai background animasi untuk seluruh halaman

### 2. Logo Main
**Path:** `stonks-landing/public/assets/logo-main.png`
- File: logo-main.png
- Digunakan sebagai logo utama di hero section

## Cara Menambahkan Assets

### Opsi 1: Manual Copy
```bash
# Copy background.gif
cp /path/to/your/background.gif stonks-landing/public/assets/

# Copy logo-main.png
cp /path/to/your/logo-main.png stonks-landing/public/assets/
```

### Opsi 2: Drag & Drop
1. Buka folder `stonks-landing/public/assets/`
2. Drag & drop file `background.gif` dan `logo-main.png` ke folder tersebut

## Verifikasi

Setelah menambahkan assets, struktur folder harus seperti ini:

```
stonks-landing/
├── public/
│   └── assets/
│       ├── background.gif
│       └── logo-main.png
```

## Placeholder Sementara

Jika Anda belum memiliki assets, landing page akan tetap berfungsi dengan:
- Background: Gradient default (hitam/biru)
- Logo: Akan menampilkan error image dari Next.js (bisa diganti dengan emoji sementara)

## Optimasi Assets

### Background GIF
- Recommended size: Max 2MB untuk performa optimal
- Dimensions: 1920x1080 atau lebih kecil
- Optimize dengan tools seperti [ezgif.com](https://ezgif.com/optimize)

### Logo PNG
- Recommended size: 512x512px atau 1024x1024px
- Format: PNG dengan transparent background
- Optimize dengan [TinyPNG](https://tinypng.com)

## Troubleshooting

### Background tidak muncul?
1. Check path: `public/assets/background.gif`
2. Clear browser cache
3. Restart dev server: `npm run dev`

### Logo tidak muncul?
1. Check path: `public/assets/logo-main.png`
2. Check file extension (harus .png)
3. Restart dev server

### Performance issues?
- Compress background.gif (target < 2MB)
- Use WebP format untuk logo jika memungkinkan
- Enable lazy loading (sudah diimplementasi)
