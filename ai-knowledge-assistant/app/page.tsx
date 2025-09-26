"use client";

import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    setResult("");
    try {
      const res = await fetch("/api/generateEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      setResult(data.email);
    } catch (err) {
      setResult("❌ Error generating email");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        AI Email Assistant
      </h1>

      <textarea
        className="w-full p-3 border rounded-lg"
        rows={4}
        placeholder="Enter the email context (e.g., Write a follow-up email for job application)"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={handleGenerate}
        disabled={loading}
        className="w-full mt-3 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Generating..." : "Generate Email"}
      </button>

      {result && (
        <div className="mt-4 p-4 border rounded-lg bg-white whitespace-pre-line">
          {result}
        </div>
      )}
    </main>
  );
}
