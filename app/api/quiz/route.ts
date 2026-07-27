import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(req: NextRequest) {
  try {
    const { pdfText, difficulty, count } = await req.json();

    if (!pdfText) {
      return NextResponse.json(
        { error: "PDF text is required." },
        { status: 400 }
      );
    }

    const prompt = `
You are Iris, the AI academic companion of Irhora Learn.

Generate exactly ${count} multiple-choice questions from the uploaded PDF.

Difficulty: ${difficulty}

Rules:

- Return ONLY valid JSON.
- Do NOT include markdown.
- Do NOT wrap the JSON in \`\`\`.
- Every question must have exactly 4 options.
- Only ONE correct answer.
- Include a short explanation.

Return this exact structure:

[
  {
    "question": "...",
    "options": [
      "...",
      "...",
      "...",
      "..."
    ],
    "correctAnswer": "...",
    "explanation": "..."
  }
]

PDF:

${pdfText}
`;

    const response = await ai.models.generateContent({
  model: "models/gemini-3-flash-preview",
  contents: prompt,
});

const text = response.text?.trim();

if (!text) {
  throw new Error("Gemini returned an empty response.");
}

return NextResponse.json({
  quiz: JSON.parse(text),
});

  } catch (error) {
  console.error(error);

  return NextResponse.json({
    quiz: [
      {
        question:
          "What is Artificial Intelligence?",
        options: [
          "A programming language",
          "A branch of computer science",
          "A database",
          "A web browser",
        ],
        correctAnswer:
          "A branch of computer science",
        explanation:
          "Artificial Intelligence is a branch of computer science focused on creating intelligent systems.",
      },
      {
        question:
          "Which data structure uses FIFO?",
        options: [
          "Stack",
          "Queue",
          "Tree",
          "Graph",
        ],
        correctAnswer: "Queue",
        explanation:
          "Queue follows the First In First Out principle.",
      },
      {
        question:
          "Which SQL command retrieves data?",
        options: [
          "INSERT",
          "UPDATE",
          "DELETE",
          "SELECT",
        ],
        correctAnswer: "SELECT",
        explanation:
          "SELECT is used to retrieve records from a database.",
      },
      {
        question:
          "Which protocol is used for web browsing?",
        options: [
          "FTP",
          "SMTP",
          "HTTP",
          "SSH",
        ],
        correctAnswer: "HTTP",
        explanation:
          "HTTP is the protocol used for web communication.",
      },
      {
        question:
          "Which language is commonly used with React?",
        options: [
          "Python",
          "JavaScript",
          "C",
          "PHP",
        ],
        correctAnswer: "JavaScript",
        explanation:
          "React applications are primarily written using JavaScript or TypeScript.",
      },
    ],
  });
}
}