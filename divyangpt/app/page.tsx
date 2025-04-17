/*
 import { Assistant } from "./assistant";

export default function Home() {
  return <Assistant />;
} 
*/
'use client';

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput("");
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-screen">
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-white dark:bg-gray-900">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className="p-3 rounded-md bg-gray-200 dark:bg-gray-800 text-black dark:text-white w-fit max-w-[80%]"
          >
            {msg}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900">
        <div className="flex gap-2">
          <input
            className="flex-1 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}


/*
'use client';

import { useState } from 'react';

export default function Home() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, input]);
    setInput('');
  };

  return (
    <div className="min-h-screen w-full max-w-2xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4 text-center">DivyanGPT</h1>

      <div className="space-y-3 mb-6">
        {messages.map((msg, index) => (
          <div key={index} className="bg-gray-200 p-3 rounded">
            {msg}
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <input
          type="text"
          className="flex-1 border px-4 py-2 rounded"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}
*/
/*
'use client';

import { useState } from 'react';

export default function Home() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, input]);
    setInput('');
  };

  return (
    <div className="min-h-screen w-full max-w-3xl mx-auto px-4 sm:px-6 py-6 flex flex-col">
      <h1 className="text-xl sm:text-2xl font-bold text-center mb-6">
        DivyanGPT
      </h1>

      <div className="flex-1 overflow-y-auto max-h-[70vh] space-y-4 mb-6 border rounded p-4 bg-gray-50 shadow-sm">
        {messages.map((msg, index) => (
          <div
            key={index}
            className="bg-white p-3 rounded border text-sm sm:text-base"
          >
            {msg}
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          className="flex-1 p-3 border rounded text-sm sm:text-base"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-3 rounded text-sm sm:text-base"
        >
          Send
        </button>
      </div>
    </div>
  );
}
*/
