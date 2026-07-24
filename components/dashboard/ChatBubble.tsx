type ChatBubbleProps = {
  message: string;
  isUser?: boolean;
};

export default function ChatBubble({
  message,
  isUser = false,
}: ChatBubbleProps) {
  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-xl rounded-2xl px-5 py-4 shadow-sm ${
          isUser
            ? "bg-primary text-white"
            : "border border-border bg-white text-heading"
        }`}
      >
        {message}
      </div>
    </div>
  );
}