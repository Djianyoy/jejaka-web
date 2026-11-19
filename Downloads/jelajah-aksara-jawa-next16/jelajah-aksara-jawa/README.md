# Jelajah Aksara Jawa

Website edukasi interaktif berdasarkan PRD Kelompok 6. Stack: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4.

## Menjalankan project

```bash
npm install
npm run dev
```

Buka http://localhost:3000.

## Build production

```bash
npm run lint
npm run build
npm run start
```

Gunakan Node.js 20.9 atau lebih baru.

## Struktur fitur

```text
src/
├── app/                         # Routing App Router, metadata per halaman
├── components/                  # Komponen lintas fitur (header, footer, heading)
├── data/                        # Data konten terpisah dari UI
├── features/
│   ├── home/
│   ├── about/
│   ├── fun-fact/
│   ├── kuis/
│   ├── tebak-kata/
│   └── learning/                # Video & praktik menulis
└── lib/                          # Konstanta bersama
```

## Halaman

- `/` — Home
- `/about` — Pengertian, linimasa, dan 20 aksara dasar
- `/fun-fact` — Navigasi fakta sebelumnya, berikutnya, dan acak
- `/pentingnya` — Lima alasan pelestarian
- `/kuis` — Kuis 10 soal, umpan balik, skor, dan pembahasan
- `/tebak-kata` — Dua mode permainan
- `/video` — Kategori video dan placeholder integrasi konten
- `/praktik-menulis` — Tahapan belajar, checklist, progres localStorage

## Catatan integrasi konten

PRD menyatakan video dan aset final disediakan tim konten. Karena URL video, thumbnail berlisensi, dan file font belum disertakan, UI menggunakan placeholder video dan ilustrasi tipografi orisinal. Ganti placeholder tersebut saat materi final tersedia. Untuk rendering aksara paling konsisten lintas perangkat, letakkan font Noto Sans Javanese berlisensi di `public/fonts/` lalu deklarasikan melalui `@font-face` di `src/app/globals.css`.

Data kuis, fakta, aksara, dan kata dipisahkan di `src/data/` agar perubahan konten tidak perlu mengubah komponen UI. Progres praktik menulis hanya disimpan di browser pengguna, tanpa akun atau backend.
