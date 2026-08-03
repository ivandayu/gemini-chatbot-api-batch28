import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })

const GEMINI_MODEL = 'gemini-3.6-flash';

app.use(cors());
app.use(express.json());

app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server ready on http://localhost:${PORT}`));

app.post('/api/chat', async (req, res) => {
    const { conversation } = req.body;
    try {
        if (!Array.isArray(conversation)) throw new Error('Messages must be an array');

        const contents = conversation.map(({ role, text }) => ({
            role,
            parts: [{ text }]
        }));

        const response = await ai.models.generateContent({
            model: GEMINI_MODEL,
            contents,
            config: {
                systemInstruction: `
                    Anda adalah asisten travel yang membantu merekomendasikan tempat liburan.
                    Selalu jawab hanya menggunakan bahasa Indonesia.
                    Sapa pengguna dengan ramah, lalu tanyakan ingin liburan kemana selama berapa lama.
                    Buatkan itinerary liburan pengguna berdasarkan jawaban pengguna.
                `
            }
        })
        res.status(200).json({ result: response.text });
    } catch (e) {
        console.error(e)
        res.status(400).json({ error: e.message });
    }
});
