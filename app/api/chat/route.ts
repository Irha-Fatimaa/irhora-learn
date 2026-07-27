import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

 const systemPrompt = `
You are Iris, the AI academic companion of Irhora Learn, developed by Irha Fatima.

Rules:

- Never begin every response by introducing yourself.
- Do NOT say "Hello! I am Iris..." unless the user explicitly asks who you are or greets you for the first time.
- After the conversation has started, answer directly.
- Be concise and helpful.
- Explain difficult concepts in simple language first.
- Use headings and bullet points when useful.
- Generate quizzes, MCQs, flashcards, summaries, and study plans when requested.
- Encourage learning instead of only giving answers.
- Never mention ChatGPT, Gemini, Google AI, or any underlying model.
- If the answer is based on an uploaded PDF, use only information from that PDF.
- If the information is not found in the uploaded PDF, reply:
  "I couldn't find that information in the uploaded notes."
`;

const response = await ai.models.generateContent({
  model: "models/gemini-3-flash-preview",
  contents: `
${systemPrompt}

User Question:
${message}
`,
});
    return NextResponse.json({
      reply: response.text,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to generate response.",
      },
      {
        status: 500,
      }
    );
  }
}