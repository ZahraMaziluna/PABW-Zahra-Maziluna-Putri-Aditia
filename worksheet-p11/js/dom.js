import { formatRating, KATEGORI_SEMUA } from './data.js';

function buatElemen(tag, className, text) {
  const elemen = document.createElement(tag);
  if (className) elemen.className = className;
  if (text !== undefined) elemen.textContent = text;
  return elemen;
}

function saring(state) {
  if (state.kategoriAktif === KATEGORI_SEMUA) return state.makananList;
  return state.makananList.filter(
    (makanan) => makanan.asal.toLowerCase() === state.kategoriAktif.toLowerCase()
  );
}

function buatKartu(makanan) {
  const kartu = buatElemen('article', 'card');
  if (makanan.gambar) {
    const gambar = buatElemen('img');
    gambar.src = makanan.gambar;
    gambar.alt = `Foto ${makanan.nama}`;
    gambar.loading = 'lazy';
    kartu.append(gambar);
  }

  const isi = buatElemen('div', 'card-body');
  isi.append(
    buatElemen('span', 'badge', makanan.favorit ? 'Favorit utama' : makanan.jenis),
    buatElemen('h3', '', makanan.nama)
  );

  isi.append(
    buatElemen('p', 'deskripsi-makanan', makanan.deskripsi),
    buatElemen('p', 'asal', `Asal: ${makanan.asal} · ${makanan.jenis}`),
    buatElemen('p', 'rating', formatRating(makanan.rating))
  );
  kartu.append(isi);
  return kartu;
}

export function render(state) {
  const container = document.getElementById('makanan-list');
  const status = document.getElementById('status-makanan');
  const tombolFilter = document.querySelectorAll('[data-kategori]');
  const makananTampil = saring(state);
  const tombolTema = document.getElementById('tema');
  const labelTema = document.querySelector('label[for="tema"]');

  container.replaceChildren();
  tombolTema.checked = state.temaGelap;
  labelTema.textContent = state.temaGelap ? '☀️ Tema terang' : '🌙 Tema gelap';
  tombolFilter.forEach((tombol) => {
    const aktif = tombol.dataset.kategori === state.kategoriAktif;
    tombol.classList.toggle('active', aktif);
    tombol.setAttribute('aria-pressed', String(aktif));
  });

  document.getElementById('info-kategori').textContent = state.sedangMemuat
    ? 'Memuat daftar makanan...'
    : `Menampilkan ${makananTampil.length} dari ${state.makananList.length} makanan — ${state.kategoriAktif}`;
  document.getElementById('stat-jumlah').textContent =
    String(state.makananList.length);

  const favoritUtama = [...state.makananList].sort(
    (a, b) => Number(b.rating) - Number(a.rating)
  )[0];
  document.getElementById('stat-favorit').textContent =
    favoritUtama?.nama ?? '-';
  document.getElementById('stat-rating').textContent =
    favoritUtama ? `${favoritUtama.rating} / 5` : '-';
  document.getElementById('deskripsi-saya').textContent =
    'Saya Zahra Maziluna Putri Aditia, Mahasiswa Informatika. Halaman ini berisi makanan yang saya sukai beserta asal, jenis, dan penilaiannya.';

  if (state.sedangMemuat) {
    status.hidden = false;
    status.textContent = 'Memuat daftar makanan...';
    return;
  }

  if (makananTampil.length === 0) {
    status.hidden = false;
    status.textContent = 'Belum ada makanan pada kategori ini.';
    return;
  }

  status.hidden = true;
  makananTampil.forEach((makanan) => container.append(buatKartu(makanan)));
}