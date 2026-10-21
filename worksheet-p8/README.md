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
