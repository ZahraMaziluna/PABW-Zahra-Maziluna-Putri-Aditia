// js/api.js - Lapisan Pengambil Data
const ALAMAT_API = "./makanan.json";

export async function ambilMakanan() {
  try {
    const respons = await fetch(ALAMAT_API);
    if (!respons.ok) {
      throw new Error(`Status HTTP: ${respons.status}`);
    }
    const data = await respons.json();
    return data;
  } catch (galat) {
    console.error("Terjadi kesalahan pada fetch:", galat.message);
    throw galat;
  }
}