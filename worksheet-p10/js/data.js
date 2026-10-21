// js/data.js - Data Mentah & Fungsi Murni Pemformat
export const profilAwal = {
  nama: "Zahra Maziluna Putri Aditia",
  nim: "25523246",
  peran: "Mahasiswa Informatika",
  topik: "Makanan Favorit Saya",
  deskripsi: "Halaman ini berisi makanan yang saya sukai beserta asal, jenis, dan penilaian saya."
};

export const daftarMakananAwal = [
  {
    nama: "Mie Ayam Bakso",
    asal: "Indonesia",
    jenis: "Makanan utama",
    rating: 5,
    favorit: true,
    deskripsi: "Mie ayam dengan tambahan bakso favorit Zahra."
  },
  {
    nama: "Nasi Goreng",
    asal: "Indonesia",
    jenis: "Makanan utama",
    rating: 4,
    favorit: false,
    deskripsi: "Nasi goreng gurih dan renyah khas Indonesia."
  },
  {
    nama: "Udon",
    asal: "Jepang",
    jenis: "Makanan utama",
    rating: 4,
    favorit: false,
    deskripsi: "Udon khas Jepang dengan tekstur tebal dan kenyal."
  }
];

export function formatRating(rating) {
  return `Rating ${rating}/5`;
}