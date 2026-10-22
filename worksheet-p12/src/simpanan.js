import { KATEGORI_SEMUA } from './data.js'

const KUNCI_SIMPANAN = 'pabw-p11'
const VERSI_SIMPANAN = 2

function hapusSimpanan() {
  try {
    localStorage.removeItem(KUNCI_SIMPANAN)
  } catch (error) {
    console.error('Simpanan WS11 tidak dapat dihapus.', error)
  }
}

export function muat() {
  let teks
  try {
    teks = localStorage.getItem(KUNCI_SIMPANAN)
  } catch (error) {
    console.error('Simpanan WS11 tidak dapat dibaca; nilai bawaan digunakan.', error)
    return null
  }

  if (teks === null) return null

  let isi
  try {
    isi = JSON.parse(teks)
  } catch (error) {
    console.warn('Simpanan WS11 rusak dan akan dihapus.', error)
    hapusSimpanan()
    return null
  }

  if (
    isi === null ||
    typeof isi !== 'object' ||
    Array.isArray(isi) ||
    isi.versi !== VERSI_SIMPANAN ||
    ![KATEGORI_SEMUA, 'Indonesia', 'Jepang'].includes(isi.kategoriAktif)
  ) {
    console.warn('Versi atau bentuk simpanan WS11 tidak sesuai; nilai bawaan digunakan.')
    hapusSimpanan()
    return null
  }

  return isi
}

export function simpan({ kategoriAktif }) {
  const isi = {
    versi: VERSI_SIMPANAN,
    kategoriAktif,
  }

  try {
    localStorage.setItem(KUNCI_SIMPANAN, JSON.stringify(isi))
  } catch (error) {
    console.error('Pilihan kategori tidak dapat disimpan.', error)
  }
}
