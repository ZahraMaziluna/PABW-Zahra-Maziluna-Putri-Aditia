// js/events.js - Pemasangan Event Listeners
import { state, setKategoriAktif, tambahMakananBaru, aturUlangState } from "./state.js";
import { elements, render } from "./dom.js";

export function pasangPendengar() {
  // Delegasi Event Filter Kategori
  if (elements.barisFilter) {
    elements.barisFilter.addEventListener("click", (event) => {
      const tombol = event.target.closest("button[data-kategori]");
      if (!tombol) return;

      const kategori = tombol.dataset.kategori;
      setKategoriAktif(kategori);
      render(state);
    });
  }

  // Tombol Reset LocalStorage
  if (elements.btnReset) {
    elements.btnReset.addEventListener("click", () => {
      aturUlangState();
      render(state);
    });
  }

  // Event Submit Form
  if (elements.formMakanan) {
    elements.formMakanan.addEventListener("submit", (event) => {
      event.preventDefault();

      const nama = elements.inputNama ? elements.inputNama.value.trim() : "";
      const asal = elements.inputAsal ? elements.inputAsal.value.trim() : "";
      const rating = elements.inputRating ? Number(elements.inputRating.value) : 0;

      let valid = true;

      if (!nama) {
        if (elements.galatNama) elements.galatNama.style.display = "block";
        valid = false;
      } else {
        if (elements.galatNama) elements.galatNama.style.display = "none";
      }

      if (!asal) {
        if (elements.galatAsal) elements.galatAsal.style.display = "block";
        valid = false;
      } else {
        if (elements.galatAsal) elements.galatAsal.style.display = "none";
      }

      if (isNaN(rating) || rating < 1 || rating > 5) {
        if (elements.galatRating) elements.galatRating.style.display = "block";
        valid = false;
      } else {
        if (elements.galatRating) elements.galatRating.style.display = "none";
      }

      if (!valid) return;

      tambahMakananBaru({
        nama: nama,
        asal: asal,
        jenis: "Makanan utama",
        rating: rating,
        favorit: false,
        deskripsi: `${nama} adalah makanan yang ditambahkan ke daftar.`
      });

      render(state);
      elements.formMakanan.reset();
    });
  }
}