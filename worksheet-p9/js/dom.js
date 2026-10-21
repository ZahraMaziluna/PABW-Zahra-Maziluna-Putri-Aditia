// ==================================================
// PABW PERTEMUAN 9 - DOM & INTERAKTIVITAS
// ==================================================

import { profil, daftarMakanan, formatRating } from "./app.js";

// 1. SELECTOR DOM
const galeriMakanan = document.querySelector("#galeri-makanan");
const formMakanan = document.querySelector("#form-makanan");
const inputNama = document.querySelector("#nama-makanan");
const inputAsal = document.querySelector("#asal-makanan");
const inputRating = document.querySelector("#rating");
const galatNama = document.querySelector("#galat-nama-makanan");
const galatAsal = document.querySelector("#galat-asal-makanan");
const galatRating = document.querySelector("#galat-rating");
const filterContainer = document.querySelector("#filter");
const pesanKosong = document.querySelector("#pesan-kosong");

// 2. FUNGSI UPDATE INFORMASI PROFIL & STATISTIK SIDEBAR
function updateInfo() {
  // Profil Header & Tentang Saya
  const elNamaHalaman = document.querySelector("#nama-halaman");
  const elDeskripsiHeader = document.querySelector("#deskripsi-header");
  const elDeskripsiHalaman = document.querySelector("#deskripsi-halaman");
  const elTentangSaya = document.querySelector("#tentang-saya-teks");
  const elFooter = document.querySelector("#footer-teks");

  if (elNamaHalaman) elNamaHalaman.textContent = profil.topik;
  if (elDeskripsiHeader) elDeskripsiHeader.textContent = "Daftar makanan yang paling saya sukai.";
  if (elDeskripsiHalaman) elDeskripsiHalaman.textContent = profil.deskripsi;
  if (elTentangSaya) elTentangSaya.textContent = `Saya ${profil.nama}, ${profil.peran}. ${profil.deskripsi}`;
  if (elFooter) elFooter.textContent = `${profil.nama} · ${profil.nim} · 2026`;

  // Stats Sidebar
  const favoritUtama = daftarMakanan.find((m) => m.favorit);
  const elFavorit = document.querySelector("#favorit-utama");
  const elJumlah = document.querySelector("#jumlah-makanan");
  const elRating = document.querySelector("#rating-tertinggi");
  const elDeskripsiDaftar = document.querySelector("#deskripsi-daftar");

  if (elFavorit) elFavorit.textContent = favoritUtama?.nama ?? "Belum ada";
  if (elJumlah) elJumlah.textContent = `${daftarMakanan.length} makanan`;
  if (elDeskripsiDaftar) elDeskripsiDaftar.textContent = `Berikut ${daftarMakanan.length} makanan yang saya sukai.`;

  if (elRating && daftarMakanan.length > 0) {
    const maxRating = Math.max(...daftarMakanan.map((m) => m.rating));
    elRating.textContent = `${maxRating}/5`;
  } else if (elRating) {
    elRating.textContent = "-";
  }
}

// 3. FUNGSI RENDER KARTU MAKANAN
function buatKartu(makanan, nomor) {
  const article = document.createElement("article");
  article.className = `kartu ${makanan.favorit ? "sorotan" : ""}`;

  article.innerHTML = `
    <div class="kartu__isi">
      <span class="badge">${makanan.favorit ? "Favorit" : "Enak"}</span>
      <h3 class="kartu__judul">${makanan.nama}</h3>
      <p>${makanan.deskripsi}</p>
      <div class="kartu__detail">
        <span>${makanan.asal}</span>
        <span>${makanan.jenis}</span>
      </div>
    </div>
    <div class="kartu__kaki">
      <strong>${formatRating(makanan.rating)}</strong>
      <span>Pilihan #${nomor}</span>
    </div>
  `;

  return article;
}

function renderDaftar(data) {
  if (!galeriMakanan) return;
  galeriMakanan.textContent = ""; // Kosongkan wadah sebelum rendering

  if (data.length === 0) {
    if (pesanKosong) pesanKosong.hidden = false;
  } else {
    if (pesanKosong) pesanKosong.hidden = true;
    data.forEach((makanan, index) => {
      galeriMakanan.append(buatKartu(makanan, index + 1));
    });
  }
}

// 4. EVENT DELEGATION UNTUK FILTER KATEGORI (Lembar C)
if (filterContainer) {
  filterContainer.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;

    Array.from(filterContainer.children).forEach((btn) => btn.classList.remove("aktif"));
    tombol.classList.add("aktif");

    const kategori = tombol.dataset.kategori;
    if (kategori === "semua") {
      renderDaftar(daftarMakanan);
    } else {
      const hasilFilter = daftarMakanan.filter(
        (m) => m.asal.toLowerCase() === kategori.toLowerCase()
      );
      renderDaftar(hasilFilter);
    }
  });
}

// 5. EVENT SUBMIT FORM & VALIDASI (Lembar D)
if (formMakanan) {
  formMakanan.addEventListener("submit", (event) => {
    event.preventDefault();

    const nama = inputNama ? inputNama.value.trim() : "";
    const asal = inputAsal ? inputAsal.value.trim() : "";
    const rating = inputRating ? Number(inputRating.value) : 0;

    let valid = true;

    if (!nama) {
      if (galatNama) galatNama.style.display = "block";
      valid = false;
    } else {
      if (galatNama) galatNama.style.display = "none";
    }

    if (!asal) {
      if (galatAsal) galatAsal.style.display = "block";
      valid = false;
    } else {
      if (galatAsal) galatAsal.style.display = "none";
    }

    if (isNaN(rating) || rating < 1 || rating > 5) {
      if (galatRating) galatRating.style.display = "block";
      valid = false;
    } else {
      if (galatRating) galatRating.style.display = "none";
    }

    if (!valid) return;

    // Tambah makanan baru
    daftarMakanan.push({
      nama: nama,
      asal: asal,
      jenis: "Makanan utama",
      rating: rating,
      favorit: false,
      deskripsi: `${nama} adalah makanan yang saya tambahkan ke daftar.`
    });

    renderDaftar(daftarMakanan);
    updateInfo();
    formMakanan.reset();
  });
}

// 6. INISIALISASI AWAL
updateInfo();
renderDaftar(daftarMakanan);