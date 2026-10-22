<script setup>
import { aturTemaGelap, state } from '../state.js'

defineProps({
  profil: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <header class="header">
    <div class="header-inner">
      <div class="judul-header">
        <h1>{{ profil.judul }}</h1>
        <p>{{ profil.deskripsi }}</p>
      </div>
      <div class="header-tools">
        <nav class="nav-menu">
          <a href="#daftar-makanan">Daftar Makanan</a>
          <a href="#tambah-makanan">Tambah Makanan</a>
          <a href="#tentang-saya">Tentang Saya</a>
        </nav>
        <div class="pengaturan-tema">
          <input
            id="tema"
            class="pengalih-tema"
            type="checkbox"
            :checked="state.temaGelap"
            @change="aturTemaGelap($event.target.checked)"
          >
          <label for="tema" class="tombol-tema">
            {{ state.temaGelap ? '☀️ Tema terang' : '🌙 Tema gelap' }}
          </label>
        </div>
      </div>
    </div>
  </header>
</template>
