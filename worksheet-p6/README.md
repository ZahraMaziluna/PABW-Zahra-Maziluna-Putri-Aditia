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
