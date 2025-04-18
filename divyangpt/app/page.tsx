
 import { Assistant } from "./assistant";

export default function Home() {
  return <Assistant />;
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
