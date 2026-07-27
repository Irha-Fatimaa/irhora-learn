import { ChatMessage } from "@/types/chat";

type ChatBubbleProps = {
  message: ChatMessage;
};

export default function ChatBubble({
  message,
}: ChatBubbleProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex ${
        isUser
          ? "justify-end"
          : "justify-start"
      }`}
    >
      <div
        className={`max-w-2xl rounded-2xl px-5 py-4 shadow-sm ${
          isUser
  ? "bg-primary text-white shadow-md"
  : "border border-border bg-white text-text shadow-sm"
        }`}
      >
       <div className="flex items-start gap-3">
  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-white">
    {isUser ? "Y" : "I"}
  </div>

  <div className="flex-1">
    <p className="mb-2 text-sm font-semibold">
      {isUser ? "You" : "Iris"}
    </p>

    <div className="whitespace-pre-wrap">
      {message.content}
    </div>
  </div>
</div>
      </div>
    </div>
  );
}