// js/dom.js - Sentuhan DOM & Penanganan Tampilan
import { formatRating } from "./data.js";

export const elements = {
  galeriMakanan: document.querySelector("#galeri-makanan"),
  formMakanan: document.querySelector("#form-makanan"),
  inputNama: document.querySelector("#nama-makanan"),
  inputAsal: document.querySelector("#asal-makanan"),
  inputRating: document.querySelector("#rating"),
  galatNama: document.querySelector("#galat-nama-makanan"),
  galatAsal: document.querySelector("#galat-asal-makanan"),
  galatRating: document.querySelector("#galat-rating"),
  barisFilter: document.querySelector("#filter"),
  btnReset: document.querySelector("#btn-reset"),
  pesanKosong: document.querySelector("#pesan-kosong")
};

function saringData(state) {
  if (state.kategoriAktif === "semua") {
    return state.daftarMakanan;
  }
  return state.daftarMakanan.filter(
    (m) => m.asal.toLowerCase() === state.kategoriAktif.toLowerCase()
  );
}

function buatKartuMakanan(makanan, nomor) {
  const article = document.createElement("article");
  article.className = `kartu ${makanan.favorit ? "sorotan" : ""}`;

  const divIsi = document.createElement("div");
  divIsi.className = "kartu__isi";

  const badge = document.createElement("span");
  badge.className = "badge";
  badge.textContent = makanan.favorit ? "Favorit" : "Enak";

  const h3 = document.createElement("h3");
  h3.className = "kartu__judul";
  h3.textContent = makanan.nama;

  const pDeskripsi = document.createElement("p");
  pDeskripsi.textContent = makanan.deskripsi;

  const divDetail = document.createElement("div");
  divDetail.className = "kartu__detail";

  const spanAsal = document.createElement("span");
  spanAsal.textContent = makanan.asal;

  const spanJenis = document.createElement("span");
  spanJenis.textContent = makanan.jenis;

  divDetail.append(spanAsal, spanJenis);
  divIsi.append(badge, h3, pDeskripsi, divDetail);

  const divKaki = document.createElement("div");
  divKaki.className = "kartu__kaki";

  const strongRating = document.createElement("strong");
  strongRating.textContent = formatRating(makanan.rating);

  const spanNomor = document.createElement("span");
  spanNomor.textContent = `Pilihan #${nomor}`;

  divKaki.append(strongRating, spanNomor);
  article.append(divIsi, divKaki);

  return article;
}

export function render(state) {
  // Update Teks Profil & Statistik Sidebar
  const elNamaHalaman = document.querySelector("#nama-halaman");
  const elDeskripsiHeader = document.querySelector("#deskripsi-header");
  const elDeskripsiHalaman = document.querySelector("#deskripsi-halaman");
  const elTentangSaya = document.querySelector("#tentang-saya-teks");
  const elFooter = document.querySelector("#footer-teks");

  if (elNamaHalaman) elNamaHalaman.textContent = state.profil.topik;
  if (elDeskripsiHeader) elDeskripsiHeader.textContent = "Daftar makanan yang paling saya sukai.";
  if (elDeskripsiHalaman) elDeskripsiHalaman.textContent = state.profil.deskripsi;
  if (elTentangSaya) elTentangSaya.textContent = `Saya ${state.profil.nama}, ${state.profil.peran}. ${state.profil.deskripsi}`;
  if (elFooter) elFooter.textContent = `${state.profil.nama} · ${state.profil.nim} · 2026`;

  const favoritUtama = state.daftarMakanan.find((m) => m.favorit);
  const elFavorit = document.querySelector("#favorit-utama");
  const elJumlah = document.querySelector("#jumlah-makanan");
  const elRating = document.querySelector("#rating-tertinggi");

  if (elFavorit) elFavorit.textContent = favoritUtama?.nama ?? "Belum ada";
  if (elJumlah) elJumlah.textContent = `${state.daftarMakanan.length} makanan`;
  if (elRating && state.daftarMakanan.length > 0) {
    const maxRating = Math.max(...state.daftarMakanan.map((m) => m.rating));
    elRating.textContent = `${maxRating}/5`;
  }

  // Update Kelas Aktif pada Tombol Filter
  if (elements.barisFilter) {
    const tombolList = elements.barisFilter.querySelectorAll("button[data-kategori]");
    tombolList.forEach((btn) => {
      if (btn.dataset.kategori.toLowerCase() === state.kategoriAktif.toLowerCase()) {
        btn.classList.add("aktif");
      } else {
        btn.classList.remove("aktif");
      }
    });
  }

  // Render Kartu Makanan
  if (!elements.galeriMakanan) return;
  elements.galeriMakanan.textContent = "";

  const dataTampil = saringData(state);

  if (dataTampil.length === 0) {
    if (elements.pesanKosong) elements.pesanKosong.hidden = false;
  } else {
    if (elements.pesanKosong) elements.pesanKosong.hidden = true;
    dataTampil.forEach((makanan, index) => {
      elements.galeriMakanan.append(buatKartuMakanan(makanan, index + 1));
    });
  }
}