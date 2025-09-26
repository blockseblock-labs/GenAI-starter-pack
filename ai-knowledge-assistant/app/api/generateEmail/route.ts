import { NextRequest, NextResponse } from "next/server";
import ollama from "ollama";

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    const response = await ollama.chat({
      model: "llama3",
      messages: [
        {
          role: "system",
          content: "You are a helpful AI that writes professional and polite emails.",
        },
        { role: "user", content: prompt },
      ],
    });

    return NextResponse.json({ email: response.message.content });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to generate email" },
      { status: 500 }
    );
  }
}
