
=
# ✈️ Liburan Yuk — Gemini AI Travel Chatbot

**Liburan Yuk** adalah aplikasi chatbot berbasis web yang menggunakan **Google Gemini AI** untuk membantu pengguna merencanakan liburan.

Chatbot dirancang sebagai **asisten travel** yang dapat berinteraksi dengan pengguna menggunakan Bahasa Indonesia, menanyakan tujuan dan durasi perjalanan, kemudian membantu membuat rekomendasi serta itinerary liburan berdasarkan percakapan pengguna.

Project ini dibuat menggunakan **Node.js**, **Express.js**, **Google Gemini API**, serta frontend sederhana menggunakan **HTML, CSS, dan JavaScript**.

---

# 📌 Fitur Utama

* 🤖 Integrasi dengan **Google Gemini AI**
* ✈️ Chatbot bertema rekomendasi liburan
* 🗓️ Membantu membuat itinerary perjalanan
* 💬 Mendukung percakapan berkelanjutan
* 🇮🇩 Respons chatbot menggunakan Bahasa Indonesia
* 🌐 REST API menggunakan Express.js
* 🧪 Endpoint API dapat diuji menggunakan Postman
* 🎨 Tampilan frontend berbasis HTML, CSS, dan JavaScript
* 🌓 Memiliki pilihan tampilan Classic dan Neon
* ⏳ Loading animation ketika menunggu jawaban Gemini
* 📝 Mendukung tampilan sederhana Markdown dari respons AI
* 🔐 API Key disimpan menggunakan environment variable

---

# 🛠️ Teknologi yang Digunakan

| Teknologi         | Fungsi                                |
| ----------------- | ------------------------------------- |
| Node.js           | Runtime JavaScript untuk backend      |
| Express.js        | Web server dan REST API               |
| Google Gemini API | AI untuk menghasilkan respons chatbot |
| @google/genai     | SDK untuk berkomunikasi dengan Gemini |
| dotenv            | Membaca environment variable          |
| CORS              | Mengatur akses Cross-Origin           |
| HTML              | Struktur halaman frontend             |
| CSS               | Tampilan aplikasi                     |
| JavaScript        | Logika chatbot pada browser           |
| Postman           | Pengujian endpoint backend            |

---

# 📁 Struktur Project

```text
gemini-chatbot-api-batch28/
│
├── public/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── .env
├── .gitignore
├── index.js
├── package.json
└── README.md
```

Penjelasan:

### `index.js`

File utama backend.

File ini bertanggung jawab untuk:

* Menjalankan server Express
* Membaca API Key Gemini
* Menyediakan folder `public`
* Membuat endpoint `POST /api/chat`
* Mengirim percakapan pengguna ke Gemini
* Mengembalikan jawaban Gemini ke frontend

### `public/index.html`

Berisi struktur utama halaman chatbot seperti:

* Judul **Liburan Yuk Chatbot**
* Area percakapan
* Input pesan
* Tombol kirim

### `public/script.js`

Berisi logika frontend seperti:

* Mengambil pesan pengguna
* Menyimpan riwayat percakapan
* Mengirim request ke backend
* Menampilkan jawaban Gemini
* Loading animation
* Render Markdown
* Pergantian tema Classic/Neon
* Quick Action

### `public/style.css`

Mengatur tampilan chatbot seperti:

* Chat bubble
* Warna halaman
* Layout chatbot
* Tombol
* Loading animation
* Classic/Neon theme

---

# ⚙️ Cara Instalasi

## 1. Clone Repository

Clone repository menggunakan Git:

```bash
git clone https://github.com/ivandayu/gemini-chatbot-api-batch28.git
```

Masuk ke folder project:

```bash
cd gemini-chatbot-api-batch28
```

---

## 2. Install Dependencies

Pastikan **Node.js** dan **npm** sudah terinstall.

Kemudian jalankan:

```bash
npm install
```

Perintah tersebut akan menginstall dependency project:

```text
@google/genai
cors
dotenv
express
```

---

# 🔑 3. Konfigurasi Gemini API Key

Buat file:

```text
.env
```

di root project.

Struktur project menjadi:

```text
gemini-chatbot-api-batch28/
├── public/
├── .env
├── index.js
├── package.json
└── README.md
```

Kemudian isi `.env`:

```env
GEMINI_API_KEY=API_KEY_GEMINI_ANDA
PORT=3000
```

Ganti:

```text
API_KEY_GEMINI_ANDA
```

dengan API Key Gemini yang valid.

> ⚠️ **Penting:** Jangan upload file `.env` ke GitHub karena berisi API Key pribadi. Pastikan `.env` sudah dimasukkan ke `.gitignore`.

---

# ▶️ 4. Menjalankan Server

Jalankan:

```bash
node index.js
```

Apabila berhasil, terminal akan menampilkan:

```text
Server ready on http://localhost:3000
```

Server sekarang dapat diakses melalui:

```text
http://localhost:3000
```

---

# 🔧 BACKEND

Backend aplikasi berada pada file:

```text
index.js
```

Backend dibuat menggunakan **Express.js** dan menggunakan Google Gemini melalui package:

```javascript
import { GoogleGenAI } from '@google/genai';
```

Gemini diinisialisasi menggunakan API Key dari `.env`:

```javascript
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});
```

Dengan cara tersebut API Key tidak perlu ditulis langsung di source code.

---

# 📡 Endpoint API

Project memiliki endpoint utama:

```http
POST /api/chat
```

Endpoint digunakan untuk mengirim percakapan dari pengguna menuju Gemini.

Backend mengambil data:

```javascript
const { conversation } = req.body;
```

Artinya request harus memiliki property:

```text
conversation
```

yang berbentuk array.

---

# 🧪 Pengujian Backend Menggunakan Postman

Sebelum menggunakan frontend, backend dapat diuji terlebih dahulu menggunakan **Postman**.

Pastikan server sudah berjalan:

```bash
node index.js
```

---

## 1. Buat Request Baru

Buka Postman kemudian pilih:

```text
POST
```

Masukkan URL:

```text
http://localhost:3000/api/chat
```

---

## 2. Pilih Body

Masuk ke:

```text
Body
→ raw
→ JSON
```

---

## 3. Masukkan Request JSON

Contoh request pertama:

```json
{
  "conversation": [
    {
      "role": "user",
      "text": "Saya ingin liburan"
    }
  ]
}
```

Kemudian klik:

```text
Send
```

---

# 📥 Response Backend

Jika berhasil, server akan memberikan response seperti:

```json
{
  "result": "Halo! Senang bisa membantu merencanakan liburan Anda. Anda ingin liburan ke mana dan selama berapa lama?"
}
```

Isi jawaban dapat berbeda karena dihasilkan oleh Gemini AI.

---

# 🔄 Menguji Percakapan Lanjutan di Postman

Backend mendukung riwayat percakapan.

Contohnya pengguna sebelumnya mengatakan:

```text
Saya ingin liburan
```

dan Gemini menanyakan tujuan liburan.

Request berikutnya dapat dibuat seperti:

```json
{
  "conversation": [
    {
      "role": "user",
      "text": "Saya ingin liburan"
    },
    {
      "role": "model",
      "text": "Anda ingin liburan ke mana dan selama berapa lama?"
    },
    {
      "role": "user",
      "text": "Saya ingin ke Bali selama 3 hari"
    }
  ]
}
```

Gemini kemudian dapat membuat rekomendasi atau itinerary berdasarkan konteks percakapan tersebut.

---

# 🧠 System Instruction Gemini

Pada backend terdapat `systemInstruction` yang menentukan karakter dan tugas chatbot.

Konsep instruksi yang digunakan adalah:

```text
Anda adalah asisten travel yang membantu merekomendasikan tempat liburan.

Selalu jawab hanya menggunakan bahasa Indonesia.

Sapa pengguna dengan ramah, lalu tanyakan ingin liburan kemana selama berapa lama.

Buatkan itinerary liburan pengguna berdasarkan jawaban pengguna.
```

Dengan instruksi tersebut, Gemini diarahkan agar berperan sebagai **asisten travel**, bukan chatbot umum.

---

# 🎨 FRONTEND

Frontend berada di folder:

```text
public/
```

dengan tiga file utama:

```text
public/
├── index.html
├── script.js
└── style.css
```

Express menyediakan folder tersebut menggunakan:

```javascript
app.use(express.static('public'));
```

Oleh karena itu ketika membuka:

```text
http://localhost:3000
```

Express secara otomatis menampilkan:

```text
public/index.html
```

---

# 🌐 1. `index.html`

File `index.html` merupakan struktur halaman chatbot.

Bagian utama halaman terdiri dari:

```html
<h1>Liburan Yuk Chatbot</h1>
```

untuk judul aplikasi.

Kemudian:

```html
<div id="chat-box" class="chat-box"></div>
```

digunakan sebagai tempat menampilkan percakapan pengguna dengan chatbot.

Sedangkan:

```html
<form id="chat-form">
```

digunakan sebagai form untuk mengirim pesan.

---

# 💻 2. `script.js`

File ini merupakan bagian utama logika frontend.

Pertama frontend membuat array:

```javascript
const conversation = [];
```

Array tersebut digunakan untuk menyimpan seluruh riwayat percakapan.

Ketika pengguna mengirim pesan:

```javascript
conversation.push({
    role: 'user',
    text: userMessage
});
```

Pesan akan dimasukkan ke riwayat percakapan.

---

# 📤 Mengirim Pesan ke Backend

Frontend menggunakan `fetch()`:

```javascript
const response = await fetch('/api/chat', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ conversation })
});
```

Frontend mengirim:

```json
{
    "conversation": [...]
}
```

menuju:

```text
POST /api/chat
```

---

# 📥 Menerima Jawaban Backend

Backend mengembalikan:

```json
{
    "result": "jawaban dari Gemini"
}
```

Frontend mengambil jawaban melalui:

```javascript
const reply = data.result;
```

Kemudian jawaban Gemini dimasukkan kembali ke riwayat percakapan:

```javascript
conversation.push({
    role: 'model',
    text: reply
});
```

Dengan demikian percakapan sebelumnya tetap dikirim ke Gemini sehingga chatbot dapat memahami konteks percakapan.

---

# 🎨 3. `style.css`

File `style.css` bertanggung jawab terhadap tampilan chatbot.

Beberapa komponen yang diatur antara lain:

```text
.container
.chat-box
.message
.message.user
.message.bot
.theme-toggle
.quick-actions
.loading-dots
```

Frontend memiliki dua pilihan tema:

```text
Classic
Neon
```

Pergantian tema dilakukan menggunakan JavaScript dengan mengubah:

```javascript
document.body.dataset.theme
```

---

# 🔄 Alur Kerja Aplikasi

Secara sederhana alur aplikasi adalah:

```text
Pengguna
   │
   ▼
public/index.html
   │
   ▼
public/script.js
   │
   │ POST /api/chat
   ▼
Express Server
(index.js)
   │
   ▼
Google Gemini API
   │
   ▼
Express Server
   │
   │ JSON Response
   ▼
script.js
   │
   ▼
Chat Box
   │
   ▼
Pengguna melihat jawaban
```

---

# 📝 Contoh Alur Penggunaan

### 1. Pengguna membuka aplikasi

```text
http://localhost:3000
```

### 2. Pengguna menulis:

```text
Saya ingin liburan.
```

### 3. Frontend menyimpan:

```json
{
  "role": "user",
  "text": "Saya ingin liburan."
}
```

### 4. Frontend mengirim conversation ke:

```text
POST /api/chat
```

### 5. Backend menerima conversation.

### 6. Backend mengubah conversation ke format Gemini.

### 7. Backend mengirim data ke Gemini AI.

### 8. Gemini membaca `systemInstruction` dan percakapan.

### 9. Gemini memberikan jawaban.

### 10. Backend mengirim:

```json
{
  "result": "..."
}
```

### 11. Frontend menampilkan jawaban ke chat box.

### 12. Percakapan berikutnya tetap membawa history sebelumnya.

---

# 🧪 Contoh Skenario Chatbot

**User:**

```text
Saya ingin liburan.
```

**Chatbot:**

```text
Halo! Tentu, saya siap membantu merencanakan liburan Anda.
Anda ingin liburan ke mana dan selama berapa lama?
```

**User:**

```text
Saya ingin ke Bali selama 3 hari.
```

**Chatbot:**

```text
Berikut rekomendasi itinerary liburan 3 hari di Bali:

Hari 1
- Tiba di Bali
- Check-in hotel
- Mengunjungi Pantai Kuta
- Menikmati sunset

Hari 2
- Mengunjungi Ubud
- Tegallalang Rice Terrace
- Monkey Forest
- Wisata kuliner

Hari 3
- Mengunjungi tempat oleh-oleh
- Bersiap kembali pulang
```

Respons sebenarnya dapat berbeda karena jawaban dibuat secara dinamis oleh Gemini AI.

---

# 🔐 Keamanan

Jangan pernah menuliskan Gemini API Key langsung pada:

```javascript
const apiKey = "API_KEY_ASLI";
```

Gunakan `.env`:

```env
GEMINI_API_KEY=API_KEY_ANDA
```

dan akses menggunakan:

```javascript
process.env.GEMINI_API_KEY
```

Pastikan `.gitignore` memiliki:

```gitignore
.env
node_modules/
```

---

# ⚠️ Troubleshooting

## Server tidak berjalan

Pastikan dependencies sudah terinstall:

```bash
npm install
```

Kemudian:

```bash
node index.js
```

---

## Gemini tidak memberikan response

Periksa file:

```text
.env
```

Pastikan:

```env
GEMINI_API_KEY=API_KEY_YANG_VALID
```

Setelah mengubah `.env`, restart server.

---

## Postman Error 400

Pastikan request menggunakan:

```text
POST
```

dan:

```text
Body → raw → JSON
```

Format body harus menggunakan `conversation`:

```json
{
  "conversation": [
    {
      "role": "user",
      "text": "Saya ingin liburan ke Bandung"
    }
  ]
}
```

Bukan:

```json
{
  "message": "Saya ingin liburan"
}
```

---

## Frontend tidak tampil

Pastikan server Express sudah berjalan.

Kemudian buka:

```text
http://localhost:3000
```

Jangan membuka `index.html` menggunakan file explorer apabila ingin menguji komunikasi frontend dengan backend.

---

# 📚 Konsep yang Dipelajari

Project ini menerapkan beberapa konsep pengembangan aplikasi web, yaitu:

* REST API
* HTTP Request dan Response
* Method POST
* JSON
* Asynchronous JavaScript
* Fetch API
* Express.js
* Environment Variable
* API Integration
* Generative AI
* Conversation History
* Frontend dan Backend Integration

---

# 👨‍💻 Author

**M. Ivan Dayu Estiawan**

Project:

`gemini-chatbot-api-batch28`

Dibuat sebagai project pembelajaran implementasi **Google Gemini API** menggunakan **Node.js, Express.js, HTML, CSS, dan JavaScript**.



[1]: https://github.com/ivandayu/gemini-chatbot-api-batch28/tree/main/public "gemini-chatbot-api-batch28/public at main · ivandayu/gemini-chatbot-api-batch28 · GitHub"
