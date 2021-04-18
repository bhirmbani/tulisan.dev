---
path: mengenal-graphql
date: 2021-04-18T13:05:39.064Z
title: Mengenal GraphQL
description: Tulisan singkat tentang GraphQL dan REST API
---
Seorang insinyur ujung depan akan sering meminta data dari belakang yang disimpan di basis data (_database_). Protokol umum yang sering dipakai adalah REST API.

Tulisan ini akan membahas cara lain untuk mendapatkan data dari basis data yang dibutuhkan aplikasi dengan tatap muka. Lebih spesifik, tulisan ini akan membahas secara singkat tentang GraphQL.

Kalau REST API mengandalkan banyak endpoint untuk mendapatkan data dari basis data, GraphQL cuma butuh skema.

Contoh berikut terjadi di REST API saat mendapatkan data satu pengguna:

```
GET /user/${id}

{
  "id": 221,
  "name": "John Doe",
  "age": "12"
}
```

Yang ini contoh untuk mendapatkan postingan satu pengguna:

```
GET /user/${id}/post

{
  "posts": [
    {
     "title": "How to be a rockstar engineer",
     "created_at": "12-12-2021",
     "description": "Yeha..",
     "comments: [...]
    }
  ],
}
```

Misalkan halaman aplikasi kita tidak butuh field `comments`. Ini namanya _overfetching_.

Ada lagi yang namanya _underfetching_. Misal, kita butuh pengikut dari suatu pengguna. di REST API yang harus dilakukan adalah `GET /user` lalu `GET /user/${id}/followers`.

```
GET /user/${id}/followers

{
  "followers": [
    {
     "id": "ossas",
     "name": "Joni",
     "address": {...},
     "birthday: [...]
    }
  ],
}
```

Enter GraphQL.

Dengan GraphQL, cukup definisikan skemanya. Mengikuti contoh yang sama, maka:

```
// user schema 

type User {
  id: number
  name: String
  age: String
  posts: [Post]
}

// post schema

type Post {
  title: String
  created_at: String
  description: String
  comments: [Comment]
}

// comment schema

type Comment {
  ...
}
```

Lalu klien tinggal meminta data apa yang dibutuhkan. Misal:

```
query {
  User (id: "221") {
  name
  posts {
    title
  }
  followers(last: 3) {
    name
  }
```

Maka aplikasi akan dapat data:

```
{
  "data": {
    "User": {
      "name": "Joni",
      "posts": [
        { "title": "How to be a rockstar engineer" } 
      ],
      "followers": [
        { "name": "Jono" },
        { "name": "Fulan" },
        { "name": "Fulana" }
      ]
    }
  }
}
```

Lewat satu query maka klien akan dapat data yang diinginkan.

GraphQL cocok dipakai jika aplikasi yang kita bangun memiliki banyak servis dimana tiap servis punya server dan database berbeda. Tidak semua pembuatan aplikasi tatap muka cocok dengan GraphQL, terutama aplikasi yang masih dalam tahap MVP (_minimum viable product_).

Penasaran dengan langkah selanjutnya untuk memulai implementasi GraphQL. Tunggu tulisan selanjutnya.

Reference: <https://www.howtographql.com/basics/1-graphql-is-the-better-rest/>
