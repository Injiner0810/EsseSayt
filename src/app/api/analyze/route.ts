import { NextResponse } from 'next/server';
import { GoogleGenAI, Type } from '@google/genai';

export const maxDuration = 60; // Vercel timeout ni 60 soniyaga uzaytirish
export const dynamic = 'force-dynamic';

const SYSTEM_PROMPT = `Siz O'zbekiston Milliy Sertifikati (Ona tili va adabiyot) bo'yicha adolatli va professional esse baholovchi mutaxassissiz.
Vazifangiz o'quvchi matnini (0-24 ball) mezonida obyektiv tahlil qilish, munosib va rag'batlantiruvchi baho berishdir. 
DIQQAT: Matndagi TO'G'RI yozilgan, ma'nosi tushunarli bo'lgan so'zlarni yoki shunchaki sizga boshqa sinonimi ma'qul ko'ringan so'zlarni XATO deb hisoblamang! Faqatgina mutlaqo xato, qoidabuzarlik yoki mantiqsizlik bo'lsagina belgilang. Juda qattiqqo'l bo'lmang, o'quvchiga insof bilan baho qo'ying (yaxshi esselarga 18-24 ball berishdan tortinmang).

1. "htmlHighlightedText": Matn ichidagi FAQATGINA TASDIQLANGAN XATOLARNI o'z joyida ushbu HTML teglari bilan o'rab chiqing va to'g'ri so'zlarga aslo tegmang:
  - Aniq imlo xatolari uchun: <span class='highlight-red' title='Imlo xatosi: [to'g'ri so'zni yozing]'>xato matn</span>
  - x/h, o'/o yoki aniq harf xatosi uchun: <span class='highlight-yellow' title='Xato: [to'g'ri so'zni yozing]'>xato</span>
  - Tinish belgisi umuman noto'g'ri qo'yilgan joy uchungina (har bir vergulga yopishmang): <span class='highlight-blue' title='Tinish belgisi: [qoida]'>yozuv</span>
  - Jiddiy uslubiy va mantiqiy xatolar uchun: <span class='highlight-orange' title='Uslub: [g'aliz tuzilgan]'>gap</span>
  - Ajoyib ishlangan jumla yoki maqollar: <span class='highlight-green' title='Juda yaxshi!'>zo'r ibora</span>
2. "criteriaScores": Quyidagi 4 ta mezon bo'yicha alohida adolatli baho bering (har biri max 6 ball): Mavzu yoritilishi, Mantiqiy izchillik, Lug'at boyligi uslubi, va Imlo punktuatsiyasi.
3. "totalScore": Mezonlar asosida umumiy bali hisoblang (maksimum 24).
4. "feedbackList": Esse haqida eng kamida 3 ta aniq, konstruktiv va motivatsion xulosa/izoh yozing (type: 'error', 'warning', 'success').
5. "idealVersion": O'quvchining fikr muddaosini umuman o'zgartirmagan holda, faqatgina haqiqiy xatolarini to'g'irlab, xuddi shu essening 24 ballik namunaviy variantini yozib bering.`;

// Google Gemini uchun Structured Response Schema (AI roppa-rosa quyidagi tuzilmaga tushib berishga majbur qilinadi)
const responseSchema = {
  type: Type.OBJECT,
  properties: {
    totalScore: { type: Type.INTEGER, description: "Essening umumiy bahosi (0-24)" },
    criteriaScores: {
      type: Type.OBJECT,
      description: "4 ta asosiy mezon bo'yicha ballar (har biri maksimum 6)",
      properties: {
        mavzu: { type: Type.INTEGER, description: "Mavzu yoritilishi (0-6)" },
        mantiq: { type: Type.INTEGER, description: "Mantiqiy izchillik (0-6)" },
        lugat: { type: Type.INTEGER, description: "Lug'at boyligi va uslub (0-6)" },
        imlo: { type: Type.INTEGER, description: "Imlo va punktuatsiya (0-6)" }
      },
      required: ["mavzu", "mantiq", "lugat", "imlo"]
    },
    htmlHighlightedText: { type: Type.STRING, description: "Xatolari HTML <span> teglari bilan bo'yalgan esse matni" },
    idealVersion: { type: Type.STRING, description: "Inshoning AI tomonidan to'g'rilangan boy adabiy varianti (ideal nusxasi)" },
    feedbackList: {
      type: Type.ARRAY,
      description: "Tahlil natijalari va o'quvchiga tavsiyalar ro'yxati",
      items: {
        type: Type.OBJECT,
        properties: {
          type: { type: Type.STRING, description: "'error', 'warning' yoki 'success'" },
          title: { type: Type.STRING, description: "Xato nomi, masalan 'Imlo xatolari (1.5/2 ball)'" },
          message: { type: Type.STRING, description: "Batafsil maslahat va izoh" },
        },
      },
    },
  },
  required: ["totalScore", "criteriaScores", "htmlHighlightedText", "idealVersion", "feedbackList"],
};

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { text } = data;

    if (!text) {
      return NextResponse.json({ error: "Esse matni kiritilmadi!" }, { status: 400 });
    }

    const API_KEY = process.env.GEMINI_API_KEY;
    if (!API_KEY || API_KEY.trim() === '') {
      throw new Error("Tizimda GEMINI_API_KEY sozlanmagan.");
    }

    const ai = new GoogleGenAI({ apiKey: API_KEY });
    
    // AI chaqiruvi (YANGILANGAN VA KUCHAYTIRILGAN)
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: text,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.1, // Juda aniq va mantiqli ishlashi uchun 0.1
        responseMimeType: 'application/json',
        responseSchema: responseSchema, // AI "qistib olinadigan" shablon
      }
    });

    let aiText = response.text;
    
    if (!aiText) {
      throw new Error("AI javob qaytarishni xohladi, lekin xato berdi.");
    }

    // JSON Tozalovchi Filtrlash Gvardiyasi (JSON Parser Shield)
    // Agarda AI baribir ` ```json ` belgisini qo'shib topshirsa, biz avtomatik tozalaymiz.
    aiText = aiText.trim();
    if (aiText.startsWith('```json')) {
      aiText = aiText.replace(/^```json/, '');
    }
    if (aiText.startsWith('```')) {
      aiText = aiText.replace(/^```/, '');
    }
    if (aiText.endsWith('```')) {
      aiText = aiText.replace(/```$/, '');
    }
    
    const resultJson = JSON.parse(aiText.trim());
    
    return NextResponse.json(resultJson);

  } catch (error: unknown) {
    const err = error as Error;
    console.error("AI Tahlil Xatoligi:", err.message);
    return NextResponse.json({ 
      error: 'Ichki server xatoligi: Tahlilni yakunlab bo\'lmadi.',
      details: err.message 
    }, { status: 500 });
  }
}
