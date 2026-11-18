# Warung Nasi Bu Eni — Website Katalog Makanan

Website katalog makanan statis untuk Warung Nasi Bu Eni. Dibuat dengan HTML5, CSS3, JavaScript Vanilla, Bootstrap Icons, dan Google Fonts Poppins. Tidak memakai PHP, framework JavaScript, atau database.

## Status Pengerjaan

Pengerjaan dilakukan bertahap:

- [x] **Tahap 1** — Struktur folder dan file proyek
- [x] **Tahap 2** — Navbar dan Hero Section
- [x] **Tahap 3** — Kategori dan katalog makanan
- [x] **Tahap 4** — Fitur pencarian dan filter kategori
- [x] **Tahap 5** — Integrasi WhatsApp
- [ ] **Tahap 6** — Tentang Kami, kontak, dan footer
- [ ] **Tahap 7** — Responsive design dan pengujian akhir

## Cara Menjalankan

1. Buka Visual Studio Code.
2. Buka folder `warung-nasi-bu-eni`.
3. Pasang ekstensi **Live Server** jika belum ada.
4. Klik kanan `index.html`, lalu pilih **Open with Live Server**.
5. Website akan terbuka di browser melalui `http://127.0.0.1:5500`.

Pastikan komputer terhubung ke internet saat pertama kali dibuka agar font Poppins dan Bootstrap Icons dapat dimuat.

## Struktur Folder

```text
warung-nasi-bu-eni/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
└── assets/
    ├── icons/
    │   └── favicon.svg
    └── images/
        ├── about/
        ├── hero/
        ├── menu/
        └── placeholder/
```

## Data yang Mudah Diubah

Semua data utama tersimpan di `js/script.js`.

### Daftar Menu

`MENU_ITEMS` berisi 25 menu. Setiap menu memiliki:

```js
{
    id: "ayam-bakar",
    name: "Ayam Panggang",
    category: "ayam",
    description: "Deskripsi singkat menu.",
    price: 30000,
    image: "assets/images/menu/ayam-panggang.jpeg",
    alt: "Ayam panggang khas Indonesia",
    isPlaceholder: false
}
```

### Kategori

`CATEGORIES` berisi 8 kategori. Button kategori dibuat otomatis dari array ini.

### Nomor WhatsApp

Semua tombol pemesanan memakai satu variabel di `js/script.js`:

```js
const WHATSAPP_NUMBER = "628xxxxxxxxxx";
```

Ganti nilai tersebut dengan nomor warung, format `628xxxxxxxxxx` tanpa tanda `+`, spasi, atau tanda hubung.

Selama nomor masih placeholder, tombol **Pesan Sekarang** tidak membuka WhatsApp. Sebagai gantinya, muncul toast pemberitahuan bahwa nomor belum diatur. Tombol tetap merespons agar tidak terlihat rusak.

### Pesan Otomatis

Fungsi `buildOrderMessage(menu)` membuat pesan seperti berikut:

```text
Halo Kak Bu Eni,

Saya ingin memesan:
Nama menu: Ayam Panggang
Harga: Rp 30.000 (harga contoh)

Mohon info ketersediaannya. Terima kasih.
```

Fungsi `openWhatsApp(message)` memakai `https://wa.me/<nomor>?text=<pesan>`. Pesan umum tersedia lewat `buildContactMessage()` dan dipakai oleh tombol WhatsApp di bagian kontak maupun di footer.

### Bagian Kontak dan Footer

Bagian kontak dan footer mengambil data dari satu objek `CONTACT` di `js/script.js`:

```js
const CONTACT = {
    whatsapp: WHATSAPP_NUMBER,
    address: "Warung Nasi Bu Eni, Jl. Terusan Dusun 5, Bandar Setia, Kec. Percut Sei Tuan, Medan, Sumatera Utara 20371",
    hours: "06.00 - 12.00 WIB",
    mapsQuery: "3.6328014,98.7513123",
    mapsEmbedUrl: "https://www.google.com/maps?cid=13447350492832997488&output=embed",
    mapsLinkUrl: "https://maps.app.goo.gl/RDZDmt1LAMd37f129",
    qrImage: "assets/icons/qr.jpeg"
};
```

Ubah `address` dan `hours` bila data berubah. `mapsEmbedUrl` memakai CID tempat Google Maps (`13447350492832997488`) agar peta langsung menyorot warung yang benar, bukan sekadar titik pusat pratinjau. `mapsQuery` berisi koordinat pin sebenarnya (`3.6328014,98.7513123`) dan dipakai sebagai fallback jika `mapsEmbedUrl` kosong. `mapsLinkUrl` adalah tautan "Buka di Google Maps". Ganti `qrImage` jika file QR diganti. Tahun pada copyright diisi otomatis dari `new Date().getFullYear()`.

### Warna dan Font

Buka `css/style.css`, lalu ubah variabel di dalam `:root`, misalnya:

```css
--color-primary: #124734;
--color-cream: #fbf6ec;
--color-accent: #f28c28;
```

### Foto Menu

Foto menu tersimpan di `assets/images/menu/`. Untuk menu yang belum memiliki foto asli, tersedia placeholder di `assets/images/placeholder/` dan kartu akan diberi label **Foto contoh**.

Jika file foto tidak ditemukan, gambar otomatis diganti dengan `menu-fallback.svg`.

## Catatan Penting

Semua harga di `MENU_ITEMS` adalah **harga contoh** dan bukan harga resmi Warung Nasi Bu Eni. Data alamat dan jam operasional juga akan dibuat mudah diubah pada tahap berikutnya.

Daftar awal memuat 24 menu secara tertulis. Sesuai konfirmasi, **Ayam Gulai** ditambahkan sebagai menu ke-25 dengan foto `gulai-padang.jpg`.

## Pengujian Tahap 5

- Buka website dengan Live Server.
- Klik tombol **Pesan Sekarang** pada salah satu menu.
- Karena nomor masih placeholder, harus muncul toast "Nomor WhatsApp belum diatur...".
- Pastikan toast hilang otomatis setelah beberapa detik.
- Ganti sementara `WHATSAPP_NUMBER` dengan nomor valid, misalnya `6281234567890`.
- Klik tombol **Pesan Sekarang** lagi; tab WhatsApp harus terbuka.
- Pastikan pesan berisi sapaan kepada Kak Bu Eni, nama menu, dan harga beserta keterangan harga contoh.
- Kembalikan nomor ke `628xxxxxxxxxx` setelah selesai menguji.
- Coba pesan setelah pencarian atau filter kategori; tombol tetap harus bekerja.
- Pastikan tidak ada error JavaScript di Console.

## Pengujian Footer

- Pastikan footer tampil di bawah katalog dengan latar hijau tua.
- Cek logo **WARUNG NASI BU ENI** terbaca jelas di footer.
- Klik tautan navigasi footer; halaman harus menggulir ke bagian yang sesuai.
- Klik nomor WhatsApp di footer; harus muncul toast karena nomor masih placeholder.
- Pastikan alamat dan jam operasional menampilkan nilai dari objek `CONTACT`.
- Pastikan tahun copyright sesuai tahun berjalan.
- Klik **Kembali ke atas**; halaman harus kembali ke hero.
- Lihat pada lebar ponsel dan desktop; kolom footer harus menyesuaikan.
