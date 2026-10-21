export const KATEGORI_SEMUA = 'semua';

export function formatRating(rating) {
  return `Rating ${rating}/5`;
}

export function buatMakanan({ id, nama, asal, rating }) {
  return {
    id,
    nama: nama.trim(),
    asal: asal.trim(),
    jenis: 'Makanan utama',
    rating: Number(rating),
    favorit: false,
    deskripsi: `${nama.trim()} adalah makanan yang ditambahkan ke daftar.`,
    gambar: ''
  };
}
