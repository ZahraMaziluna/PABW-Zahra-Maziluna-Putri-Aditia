import { render } from './dom.js';
import { KATEGORI_SEMUA } from './data.js';

const KUNCI_SIMPANAN = 'pabw-p11';
const VERSI_SIMPANAN = 2;

function hapusSimpanan() {
  try {
    localStorage.removeItem(KUNCI_SIMPANAN);
  } catch (error) {
    console.error('Simpanan WS11 tidak dapat dihapus.', error);
  }
}

export function muat() {
  let teks;
  try {
    teks = localStorage.getItem(KUNCI_SIMPANAN);
  } catch (error) {
    console.error('Simpanan WS11 tidak dapat dibaca; nilai bawaan digunakan.', error);
    return null;
  }

  if (teks === null) return null;

  let isi;
  try {
    isi = JSON.parse(teks);
  } catch (error) {
    console.warn('Simpanan WS11 rusak dan akan dihapus.', error);
    hapusSimpanan();
    return null;
  }

  if (
    isi === null ||
    typeof isi !== 'object' ||
    Array.isArray(isi) ||
    isi.versi !== VERSI_SIMPANAN ||
    ![KATEGORI_SEMUA, 'Indonesia', 'Jepang'].includes(isi.kategoriAktif)
  ) {
    console.warn('Versi atau bentuk simpanan WS11 tidak sesuai; nilai bawaan digunakan.');
    hapusSimpanan();
    return null;
  }

  return isi;
}

function simpanPilihan(state) {
  const isi = {
    versi: VERSI_SIMPANAN,
    kategoriAktif: state.kategoriAktif
  };

  try {
    localStorage.setItem(KUNCI_SIMPANAN, JSON.stringify(isi));
  } catch (error) {
    console.error('Pilihan kategori tidak dapat disimpan.', error);
  }
}

const simpananAwal = muat();

export const state = {
  makananList: [],
  kategoriAktif: simpananAwal?.kategoriAktif ?? KATEGORI_SEMUA,
  temaGelap: window.matchMedia('(prefers-color-scheme: dark)').matches,
  sedangMemuat: true
};

export function aturMakananList(makananList) {
  state.makananList = makananList;
  state.sedangMemuat = false;

  const kategoriTersedia = makananList.some(
    (item) => item.asal.toLowerCase() === state.kategoriAktif.toLowerCase()
  );
  if (state.kategoriAktif !== KATEGORI_SEMUA && !kategoriTersedia) {
    state.kategoriAktif = KATEGORI_SEMUA;
    simpanPilihan(state);
  }

  render(state);
}

export function pilihKategori(kategori) {
  const kategoriValid = kategori === KATEGORI_SEMUA ||
    state.makananList.some(
      (item) => item.asal.toLowerCase() === kategori.toLowerCase()
    );
  if (!kategoriValid) {
    throw new RangeError(`Kategori makanan tidak dikenal: ${kategori}`);
  }

  state.kategoriAktif = kategori;
  simpanPilihan(state);
  render(state);
}

export function tambahMakanan(makanan) {
  state.makananList = [...state.makananList, makanan];
  render(state);
}

export function aturUlang() {
  hapusSimpanan();
  state.kategoriAktif = KATEGORI_SEMUA;
  render(state);
}

export function aturTemaGelap(temaGelap) {
  state.temaGelap = temaGelap;
  render(state);
}