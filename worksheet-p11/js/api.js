export async function fetchMakanan() {
  try {
    const response = await fetch('./data/makanan.json');
    if (!response.ok) throw new Error('Gagal memuat data dari server.');
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    return [];
  }
}