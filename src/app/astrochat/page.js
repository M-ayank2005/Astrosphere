'use client'
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import Navbar2 from "@/components/Navbar2";

function AstrologyChat() {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const [input, setInput] = useState("");
  const [ready, setReady] = useState(false);
  const [answer, setAnswer] = useState("");
  const [history, setHistory] = useState([]);
  const [isInitialState, setIsInitialState] = useState(true);
  const chatEndRef = useRef(null);
  const historyRef = useRef([]);

  const SYSTEM_PROMPTS = [
    "You are AstroSphere AI, a friendly and professional astrology assistant.",
    "Engage in natural conversation while being insightful and informative.",
    "Use markdown for formatting and emojis for a warm and engaging tone.",
    "You can discuss horoscopes, zodiac signs, relationships, compatibility, and other astrology topics.",
    "Provide thoughtful, accurate insights tailored to the user's needs.",
    "Start conversations casually and be adaptable to the user's tone.",
    "Encourage users to explore their zodiac traits and how astrology connects to their life experiences."
  ];

  const cleanResponse = (responseText) => {
    let cleaned = responseText.replace(/^[\*:]+/, '').trim();
    return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
  };

  const generateInitialGreeting = () => {
    const greetings = [
      "Hello! 🌌 I'm AstroSphere AI, your astrology companion. How can I help you today?",
      "Hi there! ✨ Welcome to AstroSphere AI. Ask me anything about your zodiac or relationships!",
      "Hey! 🌠 Ready to dive into the stars? I'm here to chat about astrology, signs, or anything cosmic!"
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
  };

  useEffect(() => {
    setAnswer("Initializing AstroSphere AI...");

    const p1 = SYSTEM_PROMPTS.join(" ") + 
      " Prepare to interact naturally with the user.";
    const p3 = "Acknowledge your role and be ready for a friendly, insightful conversation.";

    async function generateInitial() {
      try {
        const response = await axios({
          url: `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`,
          method: "post",
          headers: { "Content-Type": "application/json" },
          data: {
            contents: [{ role: "user", parts: [{ text: p1 }] }],
          },
        });

        const botResponse = cleanResponse(
          response.data.candidates[0].content.parts[0].text
        );
        historyRef.current.push(
          { role: "user", text: p1 },
          { role: "bot", text: botResponse }
        );

        await generateInitial3();
      } catch (error) {
        console.error("Initialization error:", error);
        setAnswer("Failed to initialize. Please try again.");
      }
    }
    
    async function generateInitial3() {
      const prompt = `${historyRef.current
        .map((entry) => `${entry.role}: ${entry.text}`)
        .join("\n")}\nUser: ${p3}`;
      try {
        const response = await axios({
          url: `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`,
          method: "post",
          headers: { "Content-Type": "application/json" },
          data: {
            contents: [{ role: "user", parts: [{ text: prompt }] }],
          },
        });

        const botResponse = cleanResponse(
          response.data.candidates[0].content.parts[0].text
        );
        historyRef.current.push(
          { role: "user", text: p3 },
          { role: "bot", text: generateInitialGreeting() }
        );

        setHistory([...historyRef.current]);
        setInput("");
        setAnswer("Ready to chat!");
        setReady(true);
      } catch (error) {
        console.error("Initialization error:", error);
        setAnswer("Failed to initialize. Please try again.");
      }
    }

    generateInitial();
  }, []);

  async function handleSendMessage() {
    if (!ready) {
      alert("Please wait while the AI is preparing...");
      return;
    }
    if (!input.trim()) {
      alert("Please enter a message before sending.");
      return;
    }

    // Set initial state to false when first message is sent
    if (isInitialState) {
      setIsInitialState(false);
    }

    setAnswer("");

    const prompt = `Conversation Context:
${history
  .map((entry) => `${entry.role}: ${entry.text}`)
  .join("\n")}
User: ${input}

Respond in a friendly, natural manner. Use markdown for formatting if needed. Add emojis to make the conversation engaging.`;

    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`,
        method: "post",
        headers: { "Content-Type": "application/json" },
        data: {
          contents: [{ role: "user", parts: [{ text: prompt }] }],
        },
      });

      const botResponse = cleanResponse(
        response.data.candidates[0].content.parts[0].text
      );
      setAnswer("");
      setHistory((prevHistory) => [
        ...prevHistory,
        { role: "user", text: input },
        { role: "bot", text: botResponse },
      ]);
      setInput("");
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      setAnswer("An error occurred. Please try again.");
      alert('Something went wrong. Please rephrase your request.');
    }
  }

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const MarkdownComponents = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <SyntaxHighlighter
          style={materialDark}
          language={match[1]}
          PreTag="div"
          className="rounded-lg overflow-x-auto"
          {...props}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code 
          className={`${className} bg-gray-100 text-red-600 px-1 rounded`} 
          {...props}
        >
          {children}
        </code>
      );
    },
    strong: ({ children }) => (
      <strong className="font-bold text-emerald-700">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-emerald-600">{children}</em>
    ),
    h1: ({ children }) => (
      <h1 className="text-2xl font-bold text-emerald-700 mb-4 border-b pb-2">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-xl font-semibold text-emerald-600 mb-3 border-b pb-1">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg font-medium text-emerald-500 mb-2">{children}</h3>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-3 pl-4 space-y-1">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-3 pl-4 space-y-1">{children}</ol>
    ),
    p: ({ children }) => (
      <p className="leading-relaxed text-gray-700">{children}</p>
    ),
    a: ({ node, ...props }) => (
      <a
        {...props}
        className="text-emerald-600 hover:underline hover:text-emerald-800"
        target="_blank"
        rel="noopener noreferrer"
      />
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-emerald-500 pl-4 py-2 my-4 bg-gray-50 italic">
        {children}
      </blockquote>
    ),
  };

  return (
    <div className="flex flex-col h-screen">
    <Navbar2 />
    <div className="flex flex-col h-screen mt-10 pt-2 bg-gray-50">
      {/* Initial State Header */}
      {isInitialState && (
        <div className="flex-1 flex flex-col justify-center items-center text-center p-6 bg-gray-50">
          <div className="max-w-2xl w-full bg-white shadow-xl rounded-2xl p-8 space-y-6">
            <div className="flex flex-col items-center">
              <h1 className="text-4xl font-bold text-emerald-600 mb-4">AstroSphere AI</h1>
              <p className="text-xl text-gray-600 mb-6">Your Cosmic Companion for Astrological Insights</p>
            </div>
            
            <div className="text-center text-gray-700 space-y-4">
              <p>🌟 Explore your zodiac sign</p>
              <p>✨ Uncover relationship compatibility</p>
              <p>🔮 Gain personalized astrological guidance</p>
            </div>
            
            <div className="text-sm text-gray-500">
              Powered by Gemini AI
            </div>
          </div>
        </div>
      )}

      {/* Chat Container */}
      {!isInitialState && (
       
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-white">
           <div className="rounded-lg bg-yellow-100 shadow-md z-10">
          <div className="max-w-4xl mx-auto p-4 text-center text-emerald-600 font-bold text-xl">
            AstroSphere AI 
          </div>
        </div>
          {history.slice(4).map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] p-4 rounded-2xl shadow-md ${
                  message.role === "user"
                    ? "bg-gray-900 bg-opacity-40 text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                <ReactMarkdown
                  components={MarkdownComponents}
                  remarkPlugins={[remarkGfm]}
                  className="prose max-w-full"
                >
                  {message.text}
                </ReactMarkdown>
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>
      )}

      {/* Input Area */}
      <div className="bg-white border-t shadow-inner p-4">
        <div className="max-w-4xl mx-auto flex space-x-4">
          <input
            type="text"
            className="flex-1 p-3 border border-gray-300 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
            placeholder="Ask about your zodiac sign, health, compatibility or relationships... 🌟"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <button
            onClick={handleSendMessage}
            className="bg-emerald-300 text-gray-700 px-6 py-3 rounded-xl hover:bg-emerald-700 transition-colors"
          >
            Send
          </button>
        </div>
        {answer && (
          <p className="text-center text-sm text-gray-500 mt-2">{answer}</p>
        )}
      </div>
    </div>
    </div>
  );
}

export default AstrologyChat;