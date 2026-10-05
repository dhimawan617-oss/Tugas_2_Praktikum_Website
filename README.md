# Yupien's-Wear

Website sederhana bertema toko fashion, dibuat sebagai Tugas 2 mata kuliah Praktikum Pemrograman Web, semester 3. Websitenya terdiri dari 3 halaman: Login, Home, dan Profile Developer.

> Project ini dibuat untuk memenuhi tugas praktikum, sekaligus latihan menyusun struktur halaman dengan HTML, CSS (termasuk Bootstrap), dan JavaScript dasar untuk interaktivitas seperti dark mode dan logout.

## Studi Kasus

Website ini mensimulasikan tampilan sebuah toko fashion online bernama "Yupien's-Wear". Pengguna diharuskan **login** terlebih dahulu sebelum masuk ke halaman **Home**, yang menampilkan daftar produk dalam bentuk tabel. Dari halaman Home, pengguna juga bisa mengakses halaman **Profile** untuk melihat informasi developer website, serta melakukan **logout** untuk kembali ke halaman login.

## Halaman Website

| Halaman | File | Deskripsi |
|---|---|---|
| Login | `index.html` | Form masuk dengan input email & password |
| Home | `home.html` | Menampilkan tabel data produk, navbar, dark mode, dan logout |
| Profile | `profile.html` | Menampilkan profil developer (foto, perkenalan, pengalaman, sosmed) |

## Struktur CSS

Setiap halaman punya file CSS-nya masing-masing:

- `style.css` → khusus halaman Login
- `home.css` → khusus halaman Home
- `profile.css` → khusus halaman Profile

CSS dipisah per halaman karena tiap halaman punya layout yang cukup berbeda — Login berbentuk card di tengah layar, Home punya navbar dan tabel, sedangkan Profile punya layout panjang dengan beberapa section. Memisahkan file CSS per halaman bikin tiap file lebih fokus dan lebih gampang ditelusuri saat ada yang perlu diubah atau diperbaiki.

Di `home.css` juga ada dua class tambahan buatan sendiri, yaitu `table-light-custom` dan `table-dark-custom`, yang dipakai untuk mengatur warna tabel saat dark mode diaktifkan — karena class bawaan Bootstrap (`table-light`/`table-dark`) warnanya sudah tetap dan tidak bisa disesuaikan.

## Alur Interaksi

- 1 Login berhasil mengarahkan ke halaman Home
- 1 Home menampilkan tabel Produk dan tombol untuk menuju Profile
- 1 Home memiliki toggle Dark Mode yang mengubah warna background, teks, dan tabel sekaligus
- 1 Home memiliki tombol Log Out yang mengonfirmasi sebelum mengarahkan kembali ke Login

## Cara Menjalankan

1. Clone atau download repo ini ke laptop kamu
2. Buka folder project di code editor (contoh: VS Code)
3. Jalankan `index.html` menggunakan Live Server, atau buka langsung lewat browser
4. Isi form login (validasi masih sebatas tampilan, belum terhubung ke database)
5. Jelajahi halaman Home dan Profile

## Struktur Folder

```
yupiens-wear/
├── index.html
├── home.html
├── profile.html
├── style.css
├── home.css
├── profile.css
├── script.js
├── Foto.jpeg
└── README.md
```

## Tools

- **HTML & CSS** — struktur dan styling halaman
- **Bootstrap 5** — navbar, tabel, grid
- **Bootstrap Icons** — ikon navigasi & sosial media
- **JavaScript** — logika dark mode dan logout
