"use client";
import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(result);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

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
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Multi-layered Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Primary animated layer */}
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-transparent to-purple-500/20 animate-gradient-shift"></div>
        
        {/* Secondary overlay */}
        <div className="absolute inset-0 bg-gradient-to-bl from-cyan-400/10 via-transparent to-pink-400/10 animate-gradient-shift-reverse"></div>
        
        {/* Animated mesh pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-mesh-move"></div>
        </div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-500/25 to-cyan-500/25 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/2 left-3/4 w-48 h-48 bg-gradient-to-r from-violet-500/35 to-purple-500/35 rounded-full blur-2xl animate-float-fast"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 transform rotate-45 animate-rotate-slow"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-br from-pink-400/25 to-purple-500/25 transform rotate-12 animate-pulse-glow"></div>
        
        {/* Particle effects */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-white/40 rounded-full animate-particle-${i + 1}`}
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
                animationDelay: `${i * 0.5}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Glass morphism overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px]"></div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-6 right-6 z-50 animate-slide-in-right">
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-4 rounded-xl shadow-2xl border border-green-400/30 backdrop-blur-md">
            <div className="flex items-center">
              <span className="mr-3 text-2xl">✅</span>
              <div>
                <p className="font-bold">Copied Successfully!</p>
                <p className="text-sm opacity-90">Email copied to clipboard</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <main className="relative z-10 w-full max-w-5xl mx-auto p-6 py-16">
        {/* Enhanced Header Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="relative inline-block mb-8">
            {/* Icon container with multiple layers */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur-xl opacity-60 animate-pulse-glow"></div>
              <div className="relative flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-500">
                <span className="text-4xl animate-bounce-subtle">📧</span>
                {/* Orbiting elements */}
                <div className="absolute inset-0 animate-spin-slow">
                  <div className="absolute -top-2 left-1/2 w-3 h-3 bg-cyan-400 rounded-full transform -translate-x-1/2 animate-pulse"></div>
                  <div className="absolute top-1/2 -right-2 w-2 h-2 bg-pink-400 rounded-full transform -translate-y-1/2 animate-pulse delay-500"></div>
                </div>
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent animate-text-shimmer">
            AI Email Assistant
          </h1>
          <div className="relative">
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Generate professional, personalized emails in seconds with cutting-edge AI technology
            </p>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-text-highlight"></div>
          </div>
        </div>

        {/* Enhanced Main Content Card */}
        <div className="relative group">
          {/* Card glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500 animate-pulse-border"></div>
          
          <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 md:p-12 shadow-2xl transform hover:scale-[1.02] transition-all duration-700 hover:shadow-purple-500/25">
            {/* Input Section */}
            <div className="mb-10">
              <label className="block text-xl font-bold text-white mb-6 flex items-center">
                <span className="mr-3 text-2xl animate-sparkle">✨</span>
                <span className="bg-gradient-to-r from-cyan-200 to-purple-200 bg-clip-text text-transparent">
                  Describe your email context
                </span>
              </label>
              
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/50 to-purple-500/50 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <textarea
                  className="relative w-full p-6 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl focus:border-cyan-400/60 focus:ring-4 focus:ring-cyan-400/20 transition-all duration-500 resize-none text-white placeholder-gray-300 hover:bg-white/15 group-hover:shadow-2xl"
                  rows={6}
                  placeholder="e.g., Write a follow-up email for job application, Create a thank you note for client meeting, Draft a professional inquiry about partnership opportunities..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />
              </div>
            </div>

            {/* Enhanced Generate Button */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-60 animate-pulse-glow"></div>
              <button
                onClick={handleGenerate}
                disabled={loading || !prompt.trim()}
                className="relative w-full overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-6 px-8 rounded-2xl font-bold text-xl shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-500 group hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500"
              >
                {/* Button animation overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-pink-400/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                
                <div className="relative flex items-center justify-center">
                  {loading ? (
                    <>
                      <div className="relative mr-4">
                        <div className="w-8 h-8 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <div className="absolute inset-0 w-8 h-8 border-3 border-transparent border-t-cyan-400 rounded-full animate-spin animate-reverse"></div>
                      </div>
                      <span className="animate-pulse text-xl">Generating your email...</span>
                    </>
                  ) : (
                    <>
                      <span className="mr-4 text-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">📤</span>
                      <span className="group-hover:tracking-wider transition-all duration-300">
                        Generate Professional Email
                      </span>
                    </>
                  )}
                </div>
              </button>
            </div>

            {/* Enhanced Loading Animation */}
            {loading && (
              <div className="mt-10 flex justify-center items-center space-x-4">
                <div className="flex space-x-2">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-3 h-3 rounded-full animate-wave"
                      style={{
                        backgroundColor: ['#06b6d4', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981'][i],
                        animationDelay: `${i * 0.2}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            )}

            {/* Enhanced Result Section */}
            {result && (
              <div className="mt-12 animate-slide-in-up">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="relative mr-4">
                      <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse-success"></div>
                      <div className="absolute inset-0 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                      Generated Email
                    </h3>
                  </div>
                  
                  {/* Copy Button - Moved to top right */}
                  <button
                    onClick={handleCopy}
                    className="group relative overflow-hidden px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-md border border-white/20"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></div>
                    <span className="relative flex items-center font-semibold">
                      <span className="mr-2 text-lg">📋</span>
                      Copy
                    </span>
                  </button>
                </div>
                
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-2xl border-2 border-white/20 shadow-inner">
                    <div className="prose max-w-none">
                      <pre className="whitespace-pre-line font-sans text-gray-200 leading-relaxed text-lg">
                        {result}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Enhanced Features Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {[
            { icon: "⚡", title: "Lightning Fast", desc: "Generate emails in seconds ", color: "from-yellow-400 to-orange-500" },
            { icon: "🎯", title: "Precise & Professional", desc: "Tailored to your specific context", color: "from-purple-400 to-pink-500" },
            { icon: "✨", title: "Improved usability", desc: "Every click should feel effortless", color: "from-green-400 to-cyan-500" }
          ].map((feature, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r opacity-0 group-hover:opacity-50 rounded-2xl blur transition-all duration-500" 
                   style={{background: `linear-gradient(135deg, ${feature.color.split(' ')[1]}, ${feature.color.split(' ')[3]})`}}></div>
              <div className="relative text-center p-8 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 transform">
                <div className="text-5xl mb-6 animate-bounce-subtle" style={{animationDelay: `${idx * 0.2}s`}}>
                  {feature.icon}
                </div>
                <h3 className={`font-bold text-xl mb-3 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Enhanced Custom Styles */}
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { transform: translateX(-50%) translateY(-50%) rotate(0deg); }
          50% { transform: translateX(-30%) translateY(-30%) rotate(180deg); }
        }
        
        @keyframes gradient-shift-reverse {
          0%, 100% { transform: translateX(-50%) translateY(-50%) rotate(180deg); }
          50% { transform: translateX(-70%) translateY(-70%) rotate(0deg); }
        }
        
        @keyframes mesh-move {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translateY(-10px) rotate(180deg); }
          50% { transform: translateY(10px) rotate(0deg); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.1); }
        }
        
        @keyframes rotate-slow {
          from { transform: rotate(45deg); }
          to { transform: rotate(405deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes text-shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes text-highlight {
          0%, 100% { transform: translateX(-100%); opacity: 0; }
          50% { transform: translateX(0); opacity: 0.3; }
        }
        
        @keyframes pulse-border {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        @keyframes sparkle {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.2) rotate(180deg); }
        }
        
        @keyframes wave {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes pulse-success {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.8; }
        }
        
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slide-in-up {
          from { opacity: 0; transform: translateY(50px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        ${[1,2,3,4,5,6].map(i => `
          @keyframes particle-${i} {
            0%, 100% { transform: translateY(0) translateX(0) scale(0); opacity: 0; }
            10% { transform: translateY(-20px) translateX(10px) scale(1); opacity: 1; }
            90% { transform: translateY(-100px) translateX(-20px) scale(1); opacity: 0.5; }
          }
        `).join('')}
        
        .animate-gradient-shift { animation: gradient-shift 8s ease-in-out infinite; }
        .animate-gradient-shift-reverse { animation: gradient-shift-reverse 10s ease-in-out infinite; }
        .animate-mesh-move { animation: mesh-move 6s linear infinite; }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-reverse { animation: float-reverse 8s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
        .animate-rotate-slow { animation: rotate-slow 20s linear infinite; }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .animate-bounce-subtle { animation: bounce-subtle 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .animate-text-shimmer { 
          background-size: 200% 200%; 
          animation: text-shimmer 3s ease-in-out infinite; 
        }
        .animate-text-highlight { animation: text-highlight 4s ease-in-out infinite; }
        .animate-pulse-border { animation: pulse-border 2s ease-in-out infinite; }
        .animate-sparkle { animation: sparkle 2s ease-in-out infinite; }
        .animate-wave { animation: wave 1.5s ease-in-out infinite; }
        .animate-pulse-success { animation: pulse-success 2s ease-in-out infinite; }
        .animate-slide-in-up { animation: slide-in-up 0.8s ease-out; }
        .animate-slide-in-right { animation: slide-in-right 0.5s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out; }
        .animate-reverse { animation-direction: reverse; }
        
        ${[1,2,3,4,5,6].map(i => `
          .animate-particle-${i} { animation: particle-${i} 4s ease-in-out infinite; }
        `).join('')}
      `}</style>
    </div>
  );
}