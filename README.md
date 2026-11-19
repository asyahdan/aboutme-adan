# Asyahdan Amrullah | Portfolio

Website portofolio pribadi **Asyahdan Amrullah**, Fresh Graduate IoT Engineer.

🔗 **Lihat situs:** [Asyahdan Amrullah | Portfolio](https://asyahdan.github.io/aboutme-adan/)

---

## Tentang Proyek Ini

Website statis yang dibuat dengan HTML, CSS, dan JavaScript murni (tanpa framework dan tanpa proses build), dan di-host di GitHub Pages. Situs ini memperkenalkan latar belakang, skill, proyek, dan pengalaman saya di bidang IoT, jaringan komputer, robotika, dan AI.

## Fitur

- **Dua bahasa:** tombol ganti bahasa Indonesia / Inggris
- **Mode gelap dan terang:** mengikuti pilihan pengguna dan tersimpan di browser
- **Efek mengetik** pada teks perkenalan di halaman utama
- **Galeri foto:** semua gambar bisa diperbesar saat diklik, dengan judul foto dan geser ke samping untuk galeri berisi banyak foto
- **Animasi muncul saat scroll** dan menu navigasi yang menandai bagian aktif
- **Responsif:** nyaman dibuka di HP, tablet, maupun komputer

## Isi Situs

| Bagian | Keterangan |
| --- | --- |
| Beranda | Perkenalan, foto, dan tautan GitHub serta Instagram |
| Tentang | Ringkasan profil |
| Skill | Skematik di KiCad, desain 3D di Tinkercad, dan proyek IoT |
| Proyek | Monitoring Suhu Gudang, Monitoring Server IoT, Insta Designer, dan Local RAG Chat |
| Pengalaman | Telkomsat, Prima Jaya Elektronik, dan Sekolah Vokasi IPB |
| Kontak | Email, GitHub, dan Instagram |

## Teknologi

- HTML5
- CSS3 (variabel CSS untuk tema gelap/terang, grid, dan flexbox)
- JavaScript (vanilla)
- GitHub Pages

## Struktur Folder

```text
aboutme-adan/
├── index.html      # Struktur halaman
├── style.css       # Tampilan dan tema
├── script.js       # Interaksi, bahasa, galeri, dan animasi
└── assets/         # Foto profil dan gambar skill/proyek
```

## Menjalankan di Komputer Sendiri

Cukup buka `index.html` di browser. Atau, supaya lebih mirip kondisi di server, jalankan server lokal:

```bash
python -m http.server 8000
```

Lalu buka `http://localhost:8000`.

## Cara Mengubah Isi

- **Galeri foto dan judulnya:** ubah bagian `// ===== Galeri foto` di `script.js`. Tulis nama file tanpa ekstensi, contohnya `{src:'assets/iot1', title:'Judul foto'}`.
- **Teks dua bahasa:** ubah objek `T` di `script.js` (kunci `id` untuk Indonesia dan `en` untuk Inggris).
- **Gambar:** ganti file di folder `assets` dengan nama yang sama.
- **Tampilan dan warna:** ubah variabel di bagian atas `style.css`.

## Deploy ke GitHub Pages

1. Unggah semua file ke repository.
2. Buka **Settings → Pages**.
3. Pada **Source**, pilih **Deploy from a branch**, lalu branch `main` dan folder `/ (root)`.
4. Tunggu beberapa menit sampai situs aktif.

## Kontak

- GitHub: [github.com/asyahdan](https://github.com/asyahdan)
- Instagram: [@adann_551](https://instagram.com/adann_551)
- Email: asyahdan012@gmail.com
