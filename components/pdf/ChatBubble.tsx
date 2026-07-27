"use client";

import { useState } from "react";

import { ChatMessage } from "@/types/chat";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type ChatBubbleProps = {
  message: ChatMessage;
};

export default function ChatBubble({
  message,
}: ChatBubbleProps) {
  const isUser = message.role === "user";

  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(message.content);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-2xl rounded-2xl px-5 py-4 ${
          isUser
            ? "bg-primary text-white shadow-md"
            : "border border-border bg-white text-text shadow-sm"
        }`}
      >
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-white">
            {isUser ? "Y" : "I"}
          </div>

          <div className="flex-1">
            <p className="mb-2 text-sm font-semibold">
              {isUser ? "You" : "Iris"}
            </p>

            <div className="prose prose-sm max-w-none dark:prose-invert">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {message.content}
              </ReactMarkdown>
            </div>

            {!isUser && (
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => void handleCopy()}
                  className="rounded-lg border border-border px-3 py-1 text-sm transition hover:bg-slate-100"
                >
                  {copied ? "✅ Copied!" : "📋 Copy"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}