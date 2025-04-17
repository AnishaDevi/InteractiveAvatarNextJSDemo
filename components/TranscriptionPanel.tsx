"use client";

type Message = {
  sender: "User" | "Bot";
  text: string;
};

export default function TranscriptionPanel({ messages }: { messages: Message[] }) {
  return (
    <div className="w-1/4 h-full bg-white p-4 overflow-y-auto border-l border-gray-300">
      <h2 className="text-xl font-semibold mb-4">Transcription</h2>
      <div className="space-y-3">
        {messages.length === 0 && (
          <p className="text-gray-400">No transcriptions yet...</p>
        )}
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded-md ${
              msg.sender === "Bot" ? "bg-indigo-50 text-indigo-700" : "bg-gray-100 text-gray-800"
            }`}
          >
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
    </div>
  );
}
