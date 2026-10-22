# P12 — Build Tooling, npm, dan Framework SPA

Folder ini memindahkan halaman Makanan Favorit Saya dari P11 ke aplikasi Vue 3
menggunakan Vite. Fitur utama dan tampilannya tetap dipertahankan, termasuk
daftar makanan, filter kategori, tema, ringkasan, dan formulir tambah makanan.

## Berkas dan struktur

- `src/App.vue` menyusun halaman dan menghubungkan state dengan komponen.
- `src/components/` berisi `KepalaProfil.vue`, `TombolFilter.vue`,
  `DaftarProyek.vue`, dan `FormKontak.vue`.
- `src/state.js` menyimpan state reaktif; `src/simpanan.js` memuat dan
  menyimpan kategori pilihan di `localStorage`.
- `src/api.js` mengambil data makanan. Data JSON dan gambar disajikan dari
  `public/`.
- Enam stylesheet P11 disimpan di `src/` dan diimpor berurutan dari
  `src/main.js`.
- `package-lock.json` mencatat versi dependensi untuk pemasangan yang
  konsisten.

## Menjalankan proyek

```sh
npm install
npm run dev
npm run build
npm run preview
```

## Pemeriksaan

- `npm run build` berhasil menghasilkan `dist/`.
- `npm run preview` menampilkan halaman, data makanan, dan gambar.
- Di tampilan desktop, header dan tepi kiri konten mengikuti kontainer dengan
  lebar maksimum yang sama. Isi kartu memiliki jarak dari tepinya sesuai
  padding; layout utama menyandingkan sidebar dan daftar makanan.
- Pencatatan sebelumnya menggunakan Node.js `v26.12.0` dan npm `11.20.0`.
  Node.js tersebut bukan LTS, jadi periksa kembali menggunakan versi LTS yang
  disyaratkan sebelum penyerahan.
- Ambil tangkapan layar dari halaman `npm run preview` secara manual sebelum
  mengumpulkan worksheet.

## Catatan penggunaan AI

AI membantu memindahkan struktur halaman ke komponen Vue, menyambungkan state
reaktif, `localStorage`, formulir, dan dokumentasi. Topik, data makanan,
stylesheet, serta fungsi API berasal dari pekerjaan P11.
