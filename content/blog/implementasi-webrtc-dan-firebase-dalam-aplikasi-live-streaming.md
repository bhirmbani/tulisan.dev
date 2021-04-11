---
path: implementasi-webrtc-dan-firebase-dalam-aplikasi-live-streaming
date: 2021-04-11T03:09:56.158Z
title: Implementasi WebRTC dan Firebase dalam aplikasi live streaming
description: >-
  Sepuluh langkah sederhana menerapkan WebRTC dan Firebase untuk membuat
  aplikasi live streaming.
---
![meeting daring](/assets/chris-montgomery-smgtvepind4-unsplash.jpg "meeting daring")

Photo by <a href="https://unsplash.com/@cwmonty?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Chris Montgomery</a> on <a href="https://unsplash.com/s/photos/online-meeting?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

Saat pandemi covid 19, aplikasi seperti google meet dan zoom semakin banyak digunakan karena kebijakan kerja dari rumah.

Dari sudut pandang insinyur sisi depan atau biasa disebut _front end engineer_, gimana sih cara membuat aplikasi aliran langsung atau _live streaming_ seperti itu?

**WebRTC**

Secara sederhana, webRTC bisa diartikan sebagai protokol standar yang digunakan oleh peramban jaringan untuk berkomunikasi dengan peramban jaringan lain secara waktu nyata (_realtime_).

**Firebase**

Firebase adalah layanan yang memudahkan pekerjaan insinyur jaringan (IJ). Sebagai IJ, firebase memudahkan pekerjaan karena bisa tinggal pakai tanpa bikin dari awal. Layanan firebase yang akan digunakan adalah **realtime database** atau **firestore** untuk mendengarkan jika ada perubahan di database secara waktu nyata.

**Cara kerja**

1. Browser meminta akses kamera web (webcam) dan atau mikrofon kepada user
2. User memberikan akses
3. Peramban menampilkan apa yang dilihat oleh kamera web
4. Buat `peer connection` server dengan menggunakan WebRTC
5. Buat `offer candidate` dan simpan datanya
6. Lakukan `signaling`
7. Buat `answer candidate`
8. Samakan `answer candidate` dengan `offer candidate`
9. Jika sama, koneksi `peer_connection` akan tersambung
10. tampilkan apa yang dilihat oleh kamera web dari sisi lain

Sepuluh langkah di atas adalah cara kerja sederhana menerapkan webRTC dan firebase untuk membangun aplikasi aliran langsung sederhana.

Penasaran dengan langkah lebih detail dan contoh kode nya? Tunggu artikel selanjutnya.
