/*import { google } from "@ai-sdk/google";
import { streamText } from "ai";
 
export const maxDuration = 30;
 
export async function POST(req: Request) {
  const { messages } = await req.json();
  const result = streamText({
    model: google("gemini-2.0-flash"),
    messages,
  });
  return result.toDataStreamResponse();
}
*/

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { message } = await req.json();

  try {
    // Make API call to Google Gemini (change the URL and authentication if needed)
    const res = await fetch('https://api.google.com/v1/gemini/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GEMINI_API_KEY}`, // Use your Gemini API key here
      },
      body: JSON.stringify({
        prompt: message, // Send the user message as a prompt to Gemini
        model: 'gemini-1.5', // Specify the model, adjust accordingly
      }),
    });

    const data = await res.json();

    // Handle error if any
    if (data.error) {
      return NextResponse.json({ reply: `Error: ${data.error.message}` });
    }

    // Return the generated response from Gemini API
    return NextResponse.json({ reply: data.generated_text || "No response" });
  } catch (err) {
    return NextResponse.json({ reply: 'Error fetching AI response' });
  }
}

