<script setup>
import { ref } from 'vue'

const emit = defineEmits(['submit'])
const nama = ref('')
const asal = ref('')
const rating = ref('')

function tambah() {
  emit('submit', {
    nama: nama.value,
    asal: asal.value,
    rating: rating.value,
  })
  nama.value = ''
  asal.value = ''
  rating.value = ''
}
</script>

<template>
  <form @submit.prevent="tambah">
    <div class="form-group">
      <label for="nama">Nama Makanan</label>
      <input id="nama" v-model="nama" type="text" required>
    </div>
    <div class="form-group">
      <label for="asal">Asal</label>
      <input id="asal" v-model="asal" type="text" required>
    </div>
    <div class="form-group">
      <label for="rating">Rating (1-5)</label>
      <input
        id="rating"
        v-model="rating"
        type="number"
        min="1"
        max="5"
        step="0.1"
        required
      >
    </div>
    <button type="submit" class="btn-submit">Tambah Makanan</button>
  </form>
</template>
