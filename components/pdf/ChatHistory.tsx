import { ChatMessage } from "@/types/chat";
import ChatBubble from "./ChatBubble";

type ChatHistoryProps = {
  messages: ChatMessage[];
};

export default function ChatHistory({
  messages,
}: ChatHistoryProps) {
  return (
    <div className="space-y-5">
      {messages.map((message) => (
        <ChatBubble
          key={message.id}
          message={message}
        />
      ))}
    </div>
  );
}