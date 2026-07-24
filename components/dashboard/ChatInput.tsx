import { Paperclip, Send } from "lucide-react";

export default function ChatInput() {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-border bg-white p-3 shadow-sm">
      <button
        className="rounded-lg p-2 transition hover:bg-slate-100"
        aria-label="Attach file"
      >
        <Paperclip size={20} />
      </button>

      <input
        type="text"
        placeholder="Ask Iris anything..."
        className="flex-1 bg-transparent outline-none"
      />

      <button
        className="rounded-xl bg-primary p-3 text-white transition hover:opacity-90"
        aria-label="Send message"
      >
        <Send size={18} />
      </button>
    </div>
  );
}