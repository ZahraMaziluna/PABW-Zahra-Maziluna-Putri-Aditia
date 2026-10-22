<script setup>
import { computed } from 'vue'
import { KATEGORI_SEMUA, formatRating } from '../data.js'
import { state } from '../state.js'

const makananTampil = computed(() => {
  if (state.kategoriAktif === KATEGORI_SEMUA) return state.makananList
  return state.makananList.filter(
    (makanan) =>
      makanan.asal.toLowerCase() === state.kategoriAktif.toLowerCase(),
  )
})

function urlGambar(nama) {
  return `/${encodeURI(nama)}`
}
</script>

<template>
  <p v-if="state.sedangMemuat" id="status-makanan" class="status-msg" role="status">
    Memuat daftar makanan...
  </p>
  <p v-else-if="makananTampil.length === 0" id="status-makanan" class="status-msg" role="status">
    Belum ada makanan pada kategori ini.
  </p>
  <div v-else class="makanan-grid" aria-live="polite">
    <article v-for="makanan in makananTampil" :key="makanan.id" class="card">
      <img
        v-if="makanan.gambar"
        :src="urlGambar(makanan.gambar)"
        :alt="`Foto ${makanan.nama}`"
        loading="lazy"
      >
      <div class="card-body">
        <span class="badge">
          {{ makanan.favorit ? 'Favorit utama' : makanan.jenis }}
        </span>
        <h3>{{ makanan.nama }}</h3>
        <p class="deskripsi-makanan">{{ makanan.deskripsi }}</p>
        <p class="asal">Asal: {{ makanan.asal }} · {{ makanan.jenis }}</p>
        <p class="rating">{{ formatRating(makanan.rating) }}</p>
      </div>
    </article>
  </div>
</template>
