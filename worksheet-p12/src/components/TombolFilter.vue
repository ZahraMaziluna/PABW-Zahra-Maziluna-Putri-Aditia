<script setup>
import { computed } from 'vue'
import { KATEGORI_SEMUA } from '../data.js'
import { pilihKategori, state } from '../state.js'

defineEmits(['reset'])

const kategori = ['semua', 'Indonesia', 'Jepang']
const jumlahTampil = computed(() => {
  if (state.kategoriAktif === KATEGORI_SEMUA) return state.makananList.length
  return state.makananList.filter(
    (makanan) =>
      makanan.asal.toLowerCase() === state.kategoriAktif.toLowerCase(),
  ).length
})
</script>

<template>
  <p id="info-kategori" aria-live="polite">
    {{ state.sedangMemuat
      ? 'Memuat daftar makanan...'
      : `Menampilkan ${jumlahTampil} dari ${state.makananList.length} makanan — ${state.kategoriAktif}` }}
  </p>
  <div class="filter-bar" aria-label="Filter makanan">
    <div class="filter-buttons">
      <button
        v-for="pilihan in kategori"
        :key="pilihan"
        type="button"
        class="btn-filter"
        :class="{ active: state.kategoriAktif === pilihan }"
        :aria-pressed="state.kategoriAktif === pilihan"
        @click="pilihKategori(pilihan)"
      >
        {{ pilihan === 'semua' ? 'Semua' : pilihan }}
      </button>
    </div>
    <button type="button" class="btn-reset" @click="$emit('reset')">
      Atur Ulang
    </button>
  </div>
</template>
