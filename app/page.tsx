"use client";

import { useEffect, useState } from "react";
import InteractiveAvatar from "@/components/InteractiveAvatar";
import TranscriptionPanel from "@/components/TranscriptionPanel";

declare global {
  interface Window {
    webkitSpeechRecognition: any;
    SpeechRecognition: any;
  }
}

type Message = {
  sender: "User" | "Bot";
  text: string;
};

export default function App() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const SpeechRecognition =
      typeof window !== "undefined" &&
      (window.SpeechRecognition || window.webkitSpeechRecognition);
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.lang = "en-US";

    recognition.onresult = (event: any) => {
      const transcript = event.results[event.results.length - 1][0].transcript;
      setMessages((prev) => [...prev, { sender: "User", text: transcript }]);

      // Automatically respond as bot
      const reply = `You said: "${transcript}"`;
      const utterance = new SpeechSynthesisUtterance(reply);
      window.speechSynthesis.speak(utterance);
      setMessages((prev) => [...prev, { sender: "Bot", text: reply }]);
    };

    recognition.start();
    return () => recognition.stop();
  }, []);

  return (
    <div className="w-screen h-screen flex flex-row">
      <div className="w-3/4 h-full flex items-center justify-center bg-gray-100 text-gray-800">
      <InteractiveAvatar />
      </div>
      <TranscriptionPanel messages={messages} />
    </div>
  );
}



