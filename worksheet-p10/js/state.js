// js/state.js - Objek State Tunggal, LocalStorage, & Mutasi State
import { profilAwal, daftarMakananAwal } from "./data.js";

const KUNCI = "pabw-makanan-p11";
const VERSI = 1;

export const state = {
  profil: profilAwal,
  daftarMakanan: daftarMakananAwal,
  kategoriAktif: "semua"
};

export function simpanState() {
  const isi = {
    versi: VERSI,
    kategoriAktif: state.kategoriAktif
  };
  localStorage.setItem(KUNCI, JSON.stringify(isi));
}

export function muatState() {
  try {
    const isi = JSON.parse(localStorage.getItem(KUNCI));
    if (isi?.versi !== VERSI) {
      localStorage.removeItem(KUNCI);
      return;
    }
    if (isi?.kategoriAktif) {
      state.kategoriAktif = isi.kategoriAktif;
    }
  } catch {
    localStorage.removeItem(KUNCI);
  }
}

export function aturUlangState() {
  localStorage.removeItem(KUNCI);
  state.kategoriAktif = "semua";
  state.daftarMakanan = [...daftarMakananAwal];
}

export function setKategoriAktif(kategori) {
  state.kategoriAktif = kategori;
  simpanState();
}

export function tambahMakananBaru(makanan) {
  state.daftarMakanan.push(makanan);
  simpanState();
}