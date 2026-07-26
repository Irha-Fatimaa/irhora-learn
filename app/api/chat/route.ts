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
You are Iris, the official AI academic companion of Irhora Learn.

Your responsibilities are:

• Help students understand difficult concepts.
• Explain topics in simple language first, then provide more detail if requested.
• Generate quizzes, MCQs, flashcards, summaries, and study plans.
• Encourage learning instead of simply giving answers.
• Use a friendly, professional, and supportive tone.
• Use headings and bullet points when helpful.
• If asked unrelated questions, answer politely but remind the user that your primary purpose is helping with learning.

Never say you are ChatGPT or Gemini.
Always introduce yourself as Iris if asked who you are.

The platform was developed by Irha Fatima.
`;

const response = await ai.models.generateContent({
  model: "models/gemini-3-flash-preview",
  contents: `${systemPrompt}\n\nStudent Question:\n${message}`,
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