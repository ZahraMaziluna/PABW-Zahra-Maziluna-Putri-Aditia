import { reactive } from 'vue'
import { KATEGORI_SEMUA } from './data.js'

export const state = reactive({
  makananList: [],
  kategoriAktif: KATEGORI_SEMUA,
  temaGelap: window.matchMedia('(prefers-color-scheme: dark)').matches,
  sedangMemuat: true,
})

export function aturMakananList(makananList) {
  state.makananList = makananList
  state.sedangMemuat = false

  const kategoriTersedia = makananList.some(
    (item) => item.asal.toLowerCase() === state.kategoriAktif.toLowerCase(),
  )
  if (state.kategoriAktif !== KATEGORI_SEMUA && !kategoriTersedia) {
    state.kategoriAktif = KATEGORI_SEMUA
  }
}

export function pilihKategori(kategori) {
  const kategoriValid =
    kategori === KATEGORI_SEMUA ||
    state.makananList.some(
      (item) => item.asal.toLowerCase() === kategori.toLowerCase(),
    )
  if (!kategoriValid) {
    throw new RangeError(`Kategori makanan tidak dikenal: ${kategori}`)
  }

  state.kategoriAktif = kategori
}

export function tambahMakanan(makanan) {
  state.makananList.push(makanan)
}

export function aturUlang() {
  state.kategoriAktif = KATEGORI_SEMUA
}

export function aturTemaGelap(temaGelap) {
  state.temaGelap = temaGelap
}
