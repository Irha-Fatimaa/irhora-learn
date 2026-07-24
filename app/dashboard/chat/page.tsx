import ChatBubble from "@/components/dashboard/ChatBubble";
import ChatInput from "@/components/dashboard/ChatInput";
import SuggestionCard from "@/components/dashboard/SuggestionCard";

export default function ChatPage() {
  return (
    <div className="flex h-[calc(100vh-9rem)] flex-col">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-heading">
          Chat with Iris
        </h1>

        <p className="mt-2 text-muted">
          Ask questions, summarize notes, or generate quizzes.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <SuggestionCard title="Summarize my Biology notes" />
        <SuggestionCard title="Generate a quiz from Chapter 5" />
        <SuggestionCard title="Explain recursion with examples" />
      </div>

      <div className="mt-8 flex-1 space-y-5 overflow-y-auto">
        <ChatBubble message="Hi! I'm Iris. How can I help you today?" />

        <ChatBubble
          isUser
          message="Explain machine learning in simple words."
        />

        <ChatBubble message="Machine learning is a type of AI where computers learn patterns from data instead of being explicitly programmed." />
      </div>

      <div className="mt-6">
        <ChatInput />
      </div>
    </div>
  );
}