
# 🔐 Aplikasi Enkripsi Hibrida: XOR + Caesar Cipher

Aplikasi web sederhana yang mendemonstrasikan implementasi sistem enkripsi berlapis (hibrida) dengan menggabungkan dua algoritma kriptografi klasik dan modern: **Caesar Cipher** dan **XOR Cipher**. Proyek ini diimplementasikan menggunakan arsitektur full-stack berbasis Node.js.

## ✨ Fitur Utama

* **Enkripsi Dua Lapis:** Pesan dienkripsi secara berurutan: Caesar Cipher diikuti dengan XOR Cipher.
* **Dua Kunci Terpisah:** Menggunakan kunci numerik (`caesarKey`) dan kunci teks/string (`xorKey`), meningkatkan kompleksitas.
* **Dekripsi Simetris:** Mampu membalikkan proses enkripsi secara akurat (XOR Dekripsi, lalu Caesar Dekripsi).
* **Antarmuka Pengguna Intuitif:** Antarmuka web yang sederhana untuk memasukkan pesan dan kunci.

## ⚙️ Landasan Algoritma

Proses enkripsi dan dekripsi mengikuti urutan yang ketat:

| Operasi | Algoritma | Kunci |
| :--- | :--- | :--- |
| **Enkripsi Lapis 1** | Caesar Cipher (Substitusi pergeseran) | Kunci Numerik |
| **Enkripsi Lapis 2** | XOR Cipher (Bitwise) | Kunci Teks |
| **Dekripsi Lapis 1** | XOR Dekripsi (Operasi XOR) | Kunci Teks |
| **Dekripsi Lapis 2** | Caesar Dekripsi (Pergeseran balik) | Kunci Numerik |

## 💻 Teknologi yang Digunakan

* **Backend:** Node.js, Express.js
* **Frontend:** HTML5, CSS3, JavaScript (Fetch API)

## 🚀 Panduan Instalasi dan Menjalankan Proyek

Ikuti langkah-langkah di bawah ini untuk menginstal dan menjalankan aplikasi secara lokal di sistem Anda.

### Prasyarat

Pastikan Anda telah menginstal **Node.js** dan **npm (Node Package Manager)**.

### Langkah 1: Inisialisasi Proyek

1.  Buat direktori proyek baru dan masuk ke dalamnya.
    ```bash
    mkdir xor-caesar-app
    cd xor-caesar-app
    ```
2.  Buat file `package.json` dan instal `express`.
    ```bash
    npm init -y
    npm install express
    ```

### Langkah 2: Struktur File

Pastikan Anda memiliki struktur file dan folder sesuai dengan kode yang diberikan:

````

xor-caesar-app/
├── server.js
└── public/
├── index.html
├── script.js
└── style.css

````

### Langkah 3: Menjalankan Server

1.  Jalankan file `server.js` menggunakan Node:
    ```bash
    node server.js
    ```
2.  Anda akan melihat pesan di konsol yang mengindikasikan server berjalan:
    ```
    Server running at http://localhost:3000
    ```

### Langkah 4: Akses Aplikasi

1.  Buka *browser* web 
2.  Akses alamat: `http://localhost:3000`

Anda sekarang dapat menggunakan antarmuka untuk mencoba berbagai kombinasi pesan, Kunci Caesar, dan Kunci XOR.

## 🗂️ Detail Implementasi Kriptografi

### Caesar Cipher

* Implementasi hanya berlaku untuk karakter alfabet (a-z, A-Z).
* Karakter non-alfabet (seperti spasi, angka, tanda baca) dilewatkan tanpa enkripsi.

### XOR Cipher

* Menggunakan operasi `charCodeAt(0)` untuk mendapatkan nilai ASCII/Unicode dari karakter.
* Mekanisme **Repeating Key XOR** digunakan: jika kunci XOR lebih pendek dari pesan, kunci akan diulang (modulo panjang kunci) untuk mencocokkan panjang pesan.

.
````
