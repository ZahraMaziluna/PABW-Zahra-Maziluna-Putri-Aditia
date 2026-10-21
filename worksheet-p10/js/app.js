// ==================================================
// PABW PERTEMUAN 9 - DATA & FUNGSI MURNI
// Topik: Makanan Favorit Saya (Zahra Maziluna)
// ==================================================

export const profil = {
  nama: "Zahra Maziluna Putri Aditia",
  nim: "25523246",
  peran: "Mahasiswa Informatika",
  topik: "Makanan Favorit Saya",
  deskripsi: "Halaman ini berisi makanan yang saya sukai beserta asal, jenis, dan penilaian saya."
};

export const daftarMakanan = [
  {
    nama: "Mie Ayam Bakso",
    asal: "Indonesia",
    jenis: "Makanan utama",
    rating: 5,
    favorit: true,
    deskripsi: "Mie ayam dengan tambahan bakso yang menjadi makanan favorit saya."
  },
  {
    nama: "Nasi Goreng",
    asal: "Indonesia",
    jenis: "Makanan utama",
    rating: 4,
    favorit: false,
    deskripsi: "Nasi goreng merupakan makanan sederhana yang tetap menjadi salah satu makanan favorit saya."
  },
  {
    nama: "Udon",
    asal: "Jepang",
    jenis: "Makanan utama",
    rating: 4,
    favorit: false,
    deskripsi: "Udon adalah mie khas Jepang dengan tekstur tebal dan kenyal."
  }
];

export function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

export function formatRating(rating) {
  return `Rating ${rating}/5`;
}

// js/app.js - Berkas Perakit Utama (Entry Point)
import { state, muatState } from "./state.js";
import { render } from "./dom.js";
import { pasangPendengar } from "./events.js";

// 1. Muat state tersimpan dari LocalStorage jika ada
muatState();

// 2. Pasang event listeners
pasangPendengar();

// 3. Render aplikasi awal dari state
render(state);