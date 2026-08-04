

```markdown
# 🤖 Gemini Chatbot API (Batch 28)

Aplikasi Chatbot berbasis Web API yang mengintegrasikan layanan **Google Gemini AI** untuk memproses pesan teks, menjawab pertanyaan, dan berinteraksi secara cerdas secara *real-time*.

---

## 🚀 Fitur Utama

- **Integrasi Google Gemini AI:** Memanfaat fungsi LLM (*Large Language Model*) canggih dari Google Gemini.
- **RESTful API Endpoint:** Komunikasi data yang cepat dan terstruktur menggunakan format JSON.
- **Keamanan API Key:** Manajemen kredensial API menggunakan variabel lingkungan (*environment variables*).
- **Penanganan Eror (Error Handling):** Menangani respons gagal dari API atau masalah koneksi secara aman.

---

## 🛠️ Teknologi yang Digunakan

- **Language / Runtime:** Node.js / Python *(sesuaikan dengan stack yang digunakan)*
- **Framework:** Express.js (Node.js) / FastAPI / Flask (Python)
- **AI SDK:** `@google/generative-ai` atau `google-generativeai`
- **Environment Management:** dotenv

---

## 💻 Cara Menjalankan Proyek di Lokal

### 1. Clone Repositori
```bash
git clone [https://github.com/ivandayu/gemini-chatbot-api-batch28.git](https://github.com/ivandayu/gemini-chatbot-api-batch28.git)
cd gemini-chatbot-api-batch28

```

### 2. Install Dependensi

#### Jika menggunakan Node.js:

```bash
npm install

```

#### Jika menggunakan Python:

```bash
pip install -r requirements.txt

```

### 3. Konfigurasi API Key Gemini

1. Dapatkan **Gemini API Key** melalui [Google AI Studio](https://aistudio.google.com/).
2. Buat file `.env` di folder utama proyek dan masukkan API Key Anda:
```env
GEMINI_API_KEY=masukkan_api_key_gemini_anda_di_sini
PORT=5000

```



> ⚠️ **Catatan Keamanan:** Pastikan file `.env` sudah masuk ke dalam `.gitignore` agar API Key Anda tidak terekspos ke repositori publik.

### 4. Jalankan Aplikasi

#### Untuk Node.js:

```bash
npm start
# atau menggunakan nodemon:
npm run dev

```

#### Untuk Python:

```bash
python main.py
# atau jika menggunakan uvicorn (FastAPI):
uvicorn main:app --reload

```

---

## 📡 Contoh Penggunaan Endpoint API

### `POST /api/chat`

Mengirimkan pesan ke AI dan menerima jawaban.

**Request Body:**

```json
{
  "message": "Halo Gemini, jelaskan secara singkat apa itu API!"
}

```

**Response:**

```json
{
  "status": "success",
  "reply": "API (Application Programming Interface) adalah penghubung yang memungkinkan dua aplikasi untuk saling berkomunikasi dan bertukar data..."
}

```

---

## 👤 Penulis

Dibuat oleh **[M Ivan Dayu Estiawan](https://www.google.com/search?q=https://github.com/ivandayu)**.

---

## 📄 Lisensi

Proyek ini dibuat untuk keperluan pembelajaran dan pengembangan.
