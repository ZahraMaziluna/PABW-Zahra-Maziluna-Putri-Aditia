import {
  aturUlang,
  aturTemaGelap,
  pilihKategori,
  tambahMakanan,
  state
} from './state.js';
import { buatMakanan } from './data.js';

export function pasangPendengar() {
  document.querySelector('.filter-buttons').addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) return;

    const tombol = event.target.closest('[data-kategori]');
    if (tombol) pilihKategori(tombol.dataset.kategori);
  });

  document.getElementById('btn-reset').addEventListener('click', aturUlang);

  document.getElementById('tema').addEventListener('change', (event) => {
    aturTemaGelap(event.currentTarget.checked);
  });

  document.getElementById('form-tambah').addEventListener('submit', (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const makanan = buatMakanan({
      id: Math.max(0, ...state.makananList.map((item) => Number(item.id) || 0)) + 1,
      nama: document.getElementById('nama').value,
      asal: document.getElementById('asal').value,
      rating: document.getElementById('rating').value
    });

    tambahMakanan(makanan);
    form.reset();
  });
}