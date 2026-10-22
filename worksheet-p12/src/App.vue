<script setup>
import { computed, onMounted, reactive, watch } from 'vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'
import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import { fetchMakanan } from './api.js'
import { buatMakanan } from './data.js'
import { aturUlang, aturMakananList, state } from './state.js'
import { muat, simpan } from './simpanan.js'

const profil = Object.freeze({
  judul: 'Makanan Favorit Saya',
  deskripsi: 'Daftar makanan yang paling saya sukai.',
})

const makananFavorit = computed(() =>
  [...state.makananList].sort((a, b) => Number(b.rating) - Number(a.rating))[0],
)

const ratingTertinggi = computed(() => makananFavorit.value?.rating ?? '-')

function tambahMakanan(data) {
  const id =
    Math.max(0, ...state.makananList.map((makanan) => Number(makanan.id) || 0)) +
    1
  state.makananList.push(buatMakanan({ ...data, id }))
}

function aturUlangPilihan() {
  aturUlang()
}

onMounted(async () => {
  const isi = muat()
  if (isi) state.kategoriAktif = isi.kategoriAktif

  watch(
    () => state.kategoriAktif,
    (kategoriAktif) => simpan({ kategoriAktif }),
    { immediate: true },
  )

  const makanan = await fetchMakanan()
  aturMakananList(makanan)
})
</script>

<template>
  <KepalaProfil :profil="profil" />

  <main class="layout-container">
    <aside class="sidebar-stack">
      <section class="section-card panel-halaman">
        <h2>Tentang Halaman</h2>
        <p>
          Halaman ini berisi makanan yang saya sukai beserta asal, jenis, dan
          penilaiannya.
        </p>
        <p>Favorit utama <strong>{{ makananFavorit?.nama ?? '-' }}</strong></p>
        <p>Jumlah makanan <strong>{{ state.makananList.length }}</strong></p>
        <p>Rating tertinggi <strong>{{ ratingTertinggi }}{{ ratingTertinggi === '-' ? '' : ' / 5' }}</strong></p>
      </section>

      <section id="tips-makanan" class="section-card tips-card">
        <h2>Tips Makanan</h2>
        <ul>
          <li>Pilih makanan yang beragam agar menu harian lebih bervariasi.</li>
          <li>Perhatikan kebersihan makanan dan tempat makan.</li>
          <li>Sesuaikan porsi dengan kebutuhan dan jangan lupa minum air putih.</li>
        </ul>
      </section>
    </aside>

    <div class="main-content">
      <section id="daftar-makanan" class="section-card">
        <h2>Daftar Makanan</h2>
        <TombolFilter @reset="aturUlangPilihan" />
        <DaftarProyek />
      </section>

      <section id="tambah-makanan" class="section-card">
        <h2>Tambah Makanan</h2>
        <FormKontak @submit="tambahMakanan" />
      </section>
    </div>
  </main>

  <section id="tentang-saya" class="section-card tentang-saya">
    <h2>Tentang Saya</h2>
    <p>
      Saya Zahra Maziluna Putri Aditia, Mahasiswa Informatika. Halaman ini berisi
      makanan yang saya sukai beserta asal, jenis, dan penilaiannya.
    </p>
    <p>NIM: 25523246</p>
  </section>
</template>
