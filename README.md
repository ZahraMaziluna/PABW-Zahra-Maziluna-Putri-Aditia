# PABW — Zahra Maziluna Putri Aditia — 25523246

Repo ini memuat pekerjaan mata kuliah Pengembangan Aplikasi Berbasis Web, satu folder untuk setiap pertemuan.

## Pertemuan 3 — Halaman Profil Saya

Topik halaman saya: Makanan Favorit Saya.

- Judul halaman: Makanan Favorit Saya
- Deskripsi: Halaman yang berisi daftar makanan favorit saya beserta asal, jenis, dan penilaian saya terhadap makanan tersebut.
- Tautan navigasi: Daftar Makanan, Tambah Makanan, Tentang Saya
- Dua bagian utama: Daftar Makanan, Tambah Makanan
- Kolom tabel: Nama Makanan, Asal, Jenis, Rating
- Kolom form: Nama Makanan, Asal, Rating
- Gambar: makanan-favorit.jpg

## Catatan Penggunaan AI

Saya menggunakan AI sebagai bantuan dalam pengerjaan tugas ini, terutama untuk:
- membantu memahami instruksi dan struktur HTML5 semantik;
- membantu menyusun dan memperbaiki kode HTML;
- membantu menyesuaikan struktur tabel, gambar, form, dan navigasi dengan ketentuan worksheet;
- membantu memperbaiki tampilan halaman menggunakan CSS.

Topik "Makanan Favorit Saya", pilihan makanan, data makanan, isi deskripsi, serta gambar yang digunakan saya tentukan sendiri.
## Pertemuan 4 — Design Token Halaman Profil

Pada Pertemuan 4, halaman profil dari Pertemuan 3 dikembangkan menggunakan CSS berbasis design token. Design token digunakan agar warna, jarak, ukuran teks, radius, dan bayangan dapat dikelola secara konsisten dan mudah dirawat.

Berkas yang digunakan:
- profil.html
- tokens.css
- base.css
- layout.css
- komponen.css
- tema.css

Warna utama:
#1D4ED8

Alasan pemilihan:
Warna biru dipilih sebagai warna utama karena memberikan tampilan yang jelas dan digunakan secara konsisten pada tombol, tautan, dan elemen penting.

Token utama:
--color-bg: #F8FAFC
--color-fg: #0F172A
--color-surface: #FFFFFF
--color-border: #CBD5E1
--color-primary: #1D4ED8
--color-danger: #B00020
--color-focus: #2563EB

## Pertemuan 5 — Layout Modern dengan Flexbox dan Grid

Pada Pertemuan 5, halaman dari Pertemuan 4 dikembangkan menggunakan **CSS Grid dan Flexbox** agar layout lebih terstruktur, fleksibel, dan responsif.

Berkas yang digunakan:

* profil.html
* tokens.css
* base.css
* layout.css
* komponen.css
* tema.css

Penerapan layout:

* CSS Grid digunakan untuk mengatur struktur halaman menjadi header, main, dan footer.
* CSS Grid digunakan untuk membagi main menjadi sidebar dan konten utama.
* CSS Grid digunakan pada galeri makanan agar jumlah kolom dapat menyesuaikan ukuran layar.
* Flexbox digunakan pada navigasi dan bagian bawah kartu.
* Layout dibuat responsif agar tetap nyaman digunakan pada layar kecil.
* Pengaturan overflow digunakan agar teks panjang tidak keluar dari kartu.
* Tema terang dan gelap dari Pertemuan 4 tetap dipertahankan.

Contoh penerapan:

```css
.page {
  display: grid;
  grid-template-rows: auto 1fr auto;
}

.isi {
  display: grid;
  grid-template-columns: 16rem 1fr;
  gap: var(--space-6);
}

.galeri {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: var(--space-4);
}
```

Flexbox digunakan pada navigasi dan komponen kartu untuk mengatur posisi elemen secara fleksibel.

Pertemuan 5 tetap mempertahankan **design token, form, gambar, dan tema gelap** yang telah dibuat pada Pertemuan 4.

## Pertemuan 6 — Responsif Mobile-First

Pada Pertemuan 6, halaman dari Pertemuan 5 dikembangkan agar beradaptasi secara optimal di berbagai ukuran layar menggunakan pendekatan **Mobile-First**, **Meta Viewport**, **satuan relatif (rem)**, dan **Media Query dengan `min-width`**.

Berkas yang digunakan:
* `profil.html`
* `tokens.css`
* `base.css`
* `layout.css`
* `komponen.css`
* `tema.css`
* `responsif.css` *(berkas baru P06)*

Penerapan Responsif Mobile-First:
* **Baris Meta Viewport**: Dipasang di bagian `<head>` pada `profil.html` untuk memastikan peramban HP menyesuaikan tampilan dengan lebar perangkat asli (`width=device-width, initial-scale=1.0`).
* **Gaya Dasar Layar Sempit (Mobile-First)**: Ditulis di `responsif.css` tanpa *media query*, menghasilkan struktur 1 kolom yang rapi pada lebar 360 px tanpa adanya *scroll* mendatar.
* **Titik Henti 1 (`@media (min-width: 48rem)`)**: Mengubah galeri kartu dari 1 kolom menjadi 2 kolom untuk tampilan layar tablet (768 px).
* **Titik Henti 2 (`@media (min-width: 60rem)`)**: Menyandingkan sidebar (16rem) di sebelah kiri konten utama dan mengubah galeri kartu menjadi 3 kolom untuk layar desktop (1280 px).
* **Batas Media & Elemen**: Gambar dibatasi dengan `max-width: 100%; height: auto;` agar tidak meluber, dan tabel diberi wadah bergulir `.table-wrap`.

Contoh penerapan media query pada `responsif.css`:

```css
/* Gaya dasar mobile-first (layar sempit 360px) */
.isi {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

/* Tablet (768px / 48rem) */
@media (min-width: 48rem) {
  .galeri {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop (960px+ / 60rem) */
@media (min-width: 60rem) {
  .isi {
    grid-template-columns: 16rem minmax(0, 1fr);
  }
  .galeri {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

## Pertemuan 7 — Ujian CPMK

Pertemuan 7 digunakan untuk **Ujian CPMK**, bukan worksheet. Oleh karena itu, tidak ada berkas atau hasil worksheet P7 yang perlu dicantumkan di repositori ini.

**Berkas yang digunakan:** Tidak ada berkas worksheet P7.

**Penerapan:**

* Pertemuan ini merupakan ujian CPMK, bukan pengerjaan worksheet.
* Pengerjaan worksheet yang tersedia berlanjut pada Pertemuan 8.

## Pertemuan 8 — JavaScript Modern ES6+

Pada Pertemuan 8, halaman Makanan Favorit Saya dikembangkan menggunakan JavaScript modern ES6+ dan struktur data objek dalam array.

**Berkas yang digunakan:**

* `profil.html`
* `js/app.js`
* `tokens.css`, `base.css`, `layout.css`, `komponen.css`, `tema.css`, dan `responsif.css`

**Penerapan:**

* Mengelola data profil, daftar makanan, dan daftar proyek menggunakan `const`, `let`, objek, serta array.
* Menggunakan fungsi panah, template literal, destructuring, optional chaining, dan nullish coalescing.
* Mengolah dan menampilkan data menggunakan metode array seperti `map()`, `filter()`, `find()`, dan `sort()`.
* Menyediakan filter makanan berdasarkan asal, ringkasan data, dan validasi form tambah makanan.
* Mempertahankan pilihan makanan Mie Ayam Bakso, Nasi Goreng, dan Udon.

Pertemuan ini menjadi dasar untuk memisahkan data, pengelolaan DOM, dan event pada pertemuan selanjutnya.

## Pertemuan 9 — DOM dan Interaktivitas

Pada Pertemuan 9, data makanan dan fungsi format rating dipisahkan dari kode yang mengelola DOM. Halaman menampilkan kartu makanan, informasi profil, statistik, serta pesan ketika hasil filter kosong.

**Berkas yang digunakan:**

* `profil.html`
* `js/app.js` untuk data profil, daftar makanan, dan fungsi format rating.
* `js/dom.js` untuk manipulasi DOM, render kartu, filter, dan form.
* Berkas CSS halaman yang digunakan pada pertemuan sebelumnya.

**Penerapan:**

* Membuat elemen kartu makanan dari data menggunakan JavaScript.
* Memperbarui informasi profil dan statistik favorit/rating pada halaman.
* Memfilter makanan berdasarkan asal dengan event delegation.
* Menambahkan makanan melalui form serta memvalidasi nama, asal, dan rating.
* Menampilkan keadaan kosong jika filter tidak menghasilkan makanan.

## Pertemuan 10 — JavaScript Asinkron: Fetch, Promise, dan JSON

Pada Pertemuan 10, data makanan dipindahkan ke berkas JSON dan dimuat secara asinkron menggunakan `fetch()` serta `async`/`await`.

**Berkas yang digunakan:**

* `profil.html` dan `makanan.json`
* `js/api.js` untuk mengambil serta membaca data JSON.
* `js/data.js`, `js/state.js`, `js/dom.js`, `js/events.js`, dan `js/app.js` untuk memisahkan data, state, tampilan, event, dan inisialisasi aplikasi.

**Penerapan:**

* Mengambil data dari `makanan.json` menggunakan `fetch()`.
* Memeriksa status respons HTTP sebelum membaca JSON.
* Menangani kegagalan pengambilan data dengan mencatat error dan mengembalikan daftar kosong.
* Memisahkan tanggung jawab kode ke dalam modul ES dengan `import` dan `export`.
* Menjalankan halaman melalui server lokal agar `fetch()` dan modul ES dapat dimuat.

## Pertemuan 11 — Modul, State, dan Penyimpanan Klien

Pada Pertemuan 11, halaman P10 disusun kembali dengan state terpusat dan pemisahan modul. `api.js` tetap digunakan untuk pemuatan data dari P10.

**Berkas yang digunakan:**

* `profil.html`, `data/makanan.json`, dan berkas gambar makanan.
* `js/data.js` untuk kategori, pemformat rating, dan pembentukan data makanan dari form.
* `js/state.js` untuk state aplikasi dan pengelolaan preferensi kategori.
* `js/dom.js` untuk filter serta render antarmuka dari state.
* `js/events.js` untuk event filter, reset, tema, dan form.
* `js/app.js` sebagai entry point aplikasi.
* `js/api.js` untuk mengambil data JSON.
* `tokens.css`, `base.css`, `layout.css`, `komponen.css`, `tema.css`, dan `responsif.css`.

**Penerapan:**

* Menyimpan kategori filter aktif dalam satu objek state dan memperbarui tampilan berdasarkan state tersebut.
* Menyimpan preferensi kategori sebagai JSON di `localStorage`, dilengkapi versi skema.
* Menghapus simpanan yang rusak atau tidak sesuai versi dan menggunakan kategori bawaan.
* Menyediakan tombol **Atur Ulang** untuk menghapus preferensi kategori. Tema dan daftar makanan tidak disimpan.
* Mempertahankan pilihan makanan **Mie Ayam Bakso, Nasi Goreng, dan Udon** beserta foto lokal `makanan-favorit.jpg`, `nasi goreng.jpg`, dan `udon.jpg`.
* Menempatkan judul di kiri dan navigasi serta tombol tema di kanan. Panel **Tips Makanan** terpisah dari **Tentang Halaman**, sedangkan **Tentang Saya** berada di bagian bawah halaman dengan teks rata tengah.
* Menggunakan font **Poppins** pada antarmuka.

Jalankan halaman melalui server lokal agar modul ES dan `fetch()` dapat dimuat.

**Catatan penggunaan AI:** AI membantu merapikan pemisahan modul, state, penyimpanan preferensi, dokumentasi, dan penyambungan tampilan WS11. Topik makanan favorit, data makanan, dan pilihan gambar merupakan pekerjaan penulis sendiri.

**Pemeriksaan:** Modul dan jalur impor, data JSON, foto, filter kategori, penyimpanan/pemulihan preferensi, reset, tema, serta layout responsif diperiksa melalui server lokal dan browser.
