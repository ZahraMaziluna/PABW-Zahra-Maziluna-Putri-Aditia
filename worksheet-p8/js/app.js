// ==================================================
// PABW PERTEMUAN 8
// JavaScript Modern ES6+
// Topik: Makanan Favorit Saya
// ==================================================


// ==================================================
// B. DATA PROFIL
// ==================================================

const profil = {

  nama: "Zahra Maziluna Putri Aditia",

  nim: "25523246",

  peran: "Mahasiswa Informatika",

  topik: "Makanan Favorit Saya",

  deskripsi:
    "Halaman ini berisi makanan yang saya sukai beserta asal, jenis, dan penilaian saya.",

  keahlian: [
    "Mencoba makanan baru",
    "Mengenali cita rasa makanan",
    "Memberikan penilaian makanan"
  ]

};


// ==================================================
// B. NILAI ANGKA
// ==================================================

const jumlahProyek = 3;


// ==================================================
// B. LET
// ==================================================

let pilihanAktif = "semua";


// ==================================================
// D. ARRAY OF OBJECT
// DATA MAKANAN
// ==================================================

const daftarMakanan = [

  {
    nama: "Mie Ayam Bakso",

    asal: "Indonesia",

    jenis: "Makanan utama",

    rating: 5,

    favorit: true,

    deskripsi:
      "Mie ayam dengan tambahan bakso yang menjadi makanan favorit saya."
  },


  {
    nama: "Nasi Goreng",

    asal: "Indonesia",

    jenis: "Makanan utama",

    rating: 4,

    favorit: false,

    deskripsi:
      "Nasi goreng merupakan makanan sederhana yang tetap menjadi salah satu makanan favorit saya."
  },


  {
    nama: "Udon",

    asal: "Jepang",

    jenis: "Makanan utama",

    rating: 4,

    favorit: false,

    deskripsi:
      "Udon adalah mie khas Jepang dengan tekstur tebal dan kenyal."
  }

];


// ==================================================
// D. ARRAY OF OBJECT
// DAFTAR PROYEK
// ==================================================

const daftarProyek = [

  {
    judul: "Halaman Makanan Favorit",

    tahun: 2026,

    selesai: true
  },


  {
    judul: "Daftar Review Makanan",

    tahun: 2026,

    selesai: true
  },


  {
    judul: "Eksplorasi Makanan Baru",

    tahun: 2026,

    selesai: false
  }

];


// ==================================================
// C. FUNGSI MURNI 1
// Pembuat kalimat perkenalan
// ==================================================

function buatPerkenalan({ nama, peran }) {

  return `${nama} — ${peran}`;

}


// ==================================================
// C. FUNGSI MURNI 2
// Pemformat daftar keahlian
// ==================================================

const formatKeahlian = (daftar) => {

  return daftar.join(" · ");

};


// ==================================================
// FUNGSI TAMBAHAN
// Memformat rating makanan
// ==================================================

function formatRating(rating) {

  return `Rating ${rating}/5`;

}


// ==================================================
// B. TEMPLATE LITERAL
// ==================================================

const kalimatTentangSaya =
  `Saya ${profil.nama}, ${profil.peran}. ${profil.deskripsi}`;


// ==================================================
// B. NULLISH COALESCING
// ??
//
// Kalau profil.makananFavorit tidak ada,
// gunakan makanan pertama.
// ==================================================

const makananFavorit =
  profil.makananFavorit
  ?? daftarMakanan[0]?.nama
  ?? "Belum ada makanan favorit";


// ==================================================
// B. OPTIONAL CHAINING
// ?.
//
// profil.alamat belum dibuat.
// Optional chaining membuat kode aman.
// ==================================================

const kotaProfil =
  profil.alamat?.kota
  ?? "Kota belum diisi";


// ==================================================
// REFERENSI ELEMENT DOM
// ==================================================

const galeriMakanan =
  document.querySelector("#galeri-makanan");

const formMakanan =
  document.querySelector("#form-makanan");

const inputNama =
  document.querySelector("#nama-makanan");

const inputAsal =
  document.querySelector("#asal-makanan");

const inputRating =
  document.querySelector("#rating");


// ==================================================
// MENGISI IDENTITAS DARI JAVASCRIPT
// ==================================================

document.title =
  profil.topik;


document.querySelector(
  "#nama-halaman"
).textContent =
  profil.topik;


document.querySelector(
  "#deskripsi-header"
).textContent =
  "Daftar makanan yang paling saya sukai.";


document.querySelector(
  "#deskripsi-halaman"
).textContent =
  profil.deskripsi;


document.querySelector(
  "#deskripsi-daftar"
).textContent =
  `Berikut ${daftarMakanan.length} makanan yang saya sukai.`;


// ==================================================
// TENTANG SAYA
// ==================================================

document.querySelector(
  "#tentang-saya-teks"
).textContent =
  kalimatTentangSaya;


// ==================================================
// FOOTER
// ==================================================

document.querySelector(
  "#footer-teks"
).textContent =
  `${profil.nama} · ${profil.nim} · 2026`;


// ==================================================
// C. MENJALANKAN DUA FUNGSI MURNI
// ==================================================

console.log(
  "Perkenalan:",
  buatPerkenalan(profil)
);


console.log(
  "Keahlian:",
  formatKeahlian(profil.keahlian)
);


// ==================================================
// D. CONSOLE.TABLE
// SESUAI YANG DIMINTA WORKSHEET
// ==================================================

console.table(
  profil.keahlian
);


console.table(
  daftarProyek
);


// ==================================================
// D. MAP
// Mengambil nama makanan
// ==================================================

const namaMakanan =
  daftarMakanan.map(
    (makanan) => makanan.nama
  );


console.log(
  "Hasil map:"
);

console.table(
  namaMakanan
);


// ==================================================
// D. FILTER
// Mengambil makanan dengan rating >= 4
// ==================================================

const makananRatingTinggi =
  daftarMakanan.filter(
    (makanan) =>
      makanan.rating >= 4
  );


console.log(
  "Hasil filter:"
);

console.table(
  makananRatingTinggi
);


// ==================================================
// D. FIND
// Mencari satu makanan
// ==================================================

const makananDicari =
  daftarMakanan.find(
    (makanan) =>
      makanan.nama === "Mie Ayam Bakso"
  );


console.log(
  "Hasil find:"
);

console.log(
  makananDicari
);


// ==================================================
// D. FILTER DAFTAR PROYEK
// ==================================================

const selesai =
  daftarProyek.filter(
    (proyek) =>
      proyek.selesai
  );


console.log(
  "Proyek yang selesai:"
);

console.table(
  selesai
);


// ==================================================
// D. FIND DAFTAR PROYEK
// ==================================================

const katalog =
  daftarProyek.find(
    (proyek) =>
      proyek.judul ===
      "Daftar Review Makanan"
  );


console.log(
  "Hasil find proyek:"
);

console.log(
  katalog
);


// ==================================================
// D. SPREAD + SORT
//
// Array asli TIDAK diubah.
// ==================================================

const makananTerurut =
  [...daftarMakanan].sort(
    (a, b) =>
      b.rating - a.rating
  );


console.log(
  "Makanan berdasarkan rating:"
);

console.table(
  makananTerurut
);


console.log(
  "Data asli setelah sort:"
);

console.table(
  daftarMakanan
);


// ==================================================
// D. SPREAD OBJECT
// ==================================================

const salinanProfil = {
  ...profil
};


console.log(
  "Salinan profil:"
);

console.log(
  salinanProfil
);


// ==================================================
// FUNGSI MEMBUAT KARTU MAKANAN
// ==================================================

function buatKartuMakanan(
  makanan,
  nomor
) {

  const label =
    makanan.favorit
      ? "Favorit"
      : "Enak";


  return `

    <article
      class="kartu ${makanan.favorit ? "sorotan" : ""}"
    >

      <div class="kartu__isi">

        <span class="badge">
          ${label}
        </span>

        <h3 class="kartu__judul">
          ${makanan.nama}
        </h3>

        <p>
          ${makanan.deskripsi}
        </p>

        <div class="kartu__detail">

          <span>
            ${makanan.asal}
          </span>

          <span>
            ${makanan.jenis}
          </span>

        </div>

      </div>


      <div class="kartu__kaki">

        <strong>
          ${formatRating(makanan.rating)}
        </strong>

        <span>
          Pilihan #${nomor}
        </span>

      </div>

    </article>

  `;

}


// ==================================================
// MENAMPILKAN KARTU MAKANAN
// MENGGUNAKAN MAP
// ==================================================

function tampilkanMakanan(data) {

  const kartuMakanan =
    data.map(
      (makanan, index) =>
        buatKartuMakanan(
          makanan,
          index + 1
        )
    );


  galeriMakanan.innerHTML =
    kartuMakanan.join("");

}


tampilkanMakanan(
  daftarMakanan
);


// ==================================================
// SIDEBAR
// ==================================================

const favoritUtama =
  daftarMakanan.find(
    (makanan) =>
      makanan.favorit
  );


document.querySelector(
  "#favorit-utama"
).textContent =
  favoritUtama?.nama
  ?? "Belum ada";


document.querySelector(
  "#jumlah-makanan"
).textContent =
  `${daftarMakanan.length} makanan`;


const ratingTertinggi =
  Math.max(
    ...daftarMakanan.map(
      (makanan) =>
        makanan.rating
    )
  );


document.querySelector(
  "#rating-tertinggi"
).textContent =
  `${ratingTertinggi}/5`;


document.querySelector(
  "#caption-gambar"
).textContent =
  `${makananFavorit}, makanan yang paling saya sukai.`;


// ==================================================
// E. FORM TAMBAH MAKANAN
// ==================================================

formMakanan.addEventListener(
  "submit",
  (event) => {

    event.preventDefault();


    const nama =
      inputNama.value.trim();


    const asal =
      inputAsal.value.trim();


    // INPUT VALUE SELALU STRING
    // DIUBAH MENJADI NUMBER
    const rating =
      Number(
        inputRating.value
      );


    console.log(
      "Input nama:",
      nama
    );


    console.log(
      "Input asal:",
      asal
    );


    console.log(
      "Input rating:",
      rating
    );


    // Validasi
    if (
      nama === "" ||
      asal === "" ||
      Number.isNaN(rating)
    ) {

      return;

    }


    if (
      rating < 1 ||
      rating > 5
    ) {

      return;

    }


    // ==================================================
    // OBJECT MAKANAN BARU
    // ==================================================

    const makananBaru = {

      nama: nama,

      asal: asal,

      jenis: "Makanan utama",

      rating: rating,

      favorit: false,

      deskripsi:
        `${nama} adalah makanan yang saya tambahkan ke daftar.`

    };


    // ==================================================
    // MENAMBAHKAN DATA
    // ==================================================

    daftarMakanan.push(
      makananBaru
    );


    // ==================================================
    // RENDER ULANG
    // ==================================================

    tampilkanMakanan(
      daftarMakanan
    );


    // ==================================================
    // UPDATE SIDEBAR
    // ==================================================

    document.querySelector(
      "#jumlah-makanan"
    ).textContent =
      `${daftarMakanan.length} makanan`;


    const ratingBaru =
      Math.max(
        ...daftarMakanan.map(
          (makanan) =>
            makanan.rating
        )
      );


    document.querySelector(
      "#rating-tertinggi"
    ).textContent =
      `${ratingBaru}/5`;


    // ==================================================
    // RESET FORM
    // ==================================================

    formMakanan.reset();

  }
);


// ==================================================
// INFORMASI DEBUGGING
// ==================================================

console.log(
  "================================"
);

console.log(
  "PABW Pertemuan 8 berhasil."
);

console.log(
  "Topik:",
  profil.topik
);

console.log(
  "Jumlah makanan:",
  daftarMakanan.length
);

console.log(
  "Jumlah proyek:",
  jumlahProyek
);

console.log(
  "Pilihan aktif:",
  pilihanAktif
);

console.log(
  "Kota profil:",
  kotaProfil
);

console.log(
  "================================"
);