"use client";

import { useEffect, useState } from "react";

import Button from "../ui/Button";
import ChatHistory from "./ChatHistory";

import { ChatMessage } from "@/types/chat";

type PdfChatProps = {
  pdfText: string;
  initialPrompt?: string;
};

export default function PdfChat({
  pdfText,
  initialPrompt = "",
}: PdfChatProps) {
  const [question, setQuestion] = useState("");

  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!initialPrompt) return;

    setQuestion(initialPrompt);

    void askIris(initialPrompt);
  }, [initialPrompt]);

  async function askIris(prompt?: string) {
    const finalQuestion = prompt ?? question;

    if (!finalQuestion.trim()) return;

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: finalQuestion,
    };

    setMessages((prev) => [...prev, userMessage]);

    setQuestion("");

    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: `
You are Iris.

Use ONLY the uploaded PDF below.

If the answer cannot be found in the uploaded PDF, reply:

"I couldn't find that information in the uploaded notes."

Uploaded PDF:

${pdfText}

Student Question:

${finalQuestion}
`,
        }),
      });

      const data = await response.json();

      const aiMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: data.reply,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch {
      const errorMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: "Sorry, something went wrong.",
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-heading">
        Chat with Iris
      </h2>

      <div className="mt-6 max-h-[500px] space-y-5 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="rounded-xl bg-slate-50 p-6 text-center text-muted">
            👋 Ask Iris anything about your uploaded PDF.
          </div>
        ) : (
          <ChatHistory messages={messages} />
        )}

        {loading && (
          <div className="rounded-xl bg-slate-100 p-4">
            🤖 Iris is thinking...
          </div>
        )}
      </div>

      <textarea
        rows={4}
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask anything about your uploaded notes..."
        className="mt-6 w-full rounded-xl border border-border p-4"
      />

      <Button
        className="mt-4"
        disabled={loading}
        onClick={() => void askIris()}
      >
        {loading ? "Thinking..." : "Ask Iris"}
      </Button>
    </div>
  );
}