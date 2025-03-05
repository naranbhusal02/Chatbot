import React, { useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';
import { Message } from '../types';
import { motion } from 'framer-motion';
import { Bot, MessageSquare } from 'lucide-react';

interface ChatContainerProps {
  messages: Message[];
  isLoading: boolean;
}

const ChatContainer: React.FC<ChatContainerProps> = ({ messages, isLoading }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.length === 0 ? (
        <div className="h-full flex flex-col items-center justify-center text-center p-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-md"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 p-0.5">
              <div className="w-full h-full rounded-xl glass-morphism flex items-center justify-center">
                <Bot className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Welcome to Gemini AI
            </h2>
            <p className="text-purple-300 mb-6">
              Ask me anything! I can help with information, creative tasks, coding, and more.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              {[
                "What's the difference between AI and ML?",
                "Write a short poem about technology",
                "Explain quantum computing to a 10-year-old",
                "Help me debug this React code..."
              ].map((suggestion, i) => (
                <div 
                  key={i}
                  className="glass-morphism p-3 cursor-pointer hover:bg-white/10 transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-purple-400 group-hover:text-purple-300" />
                    <span className="text-purple-200 group-hover:text-white transition-colors">
                      {suggestion}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      ) : (
        <>
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          {isLoading && (
            <div className="flex justify-center p-4">
              <div className="dot-typing"></div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </>
      )}
    </div>
  );
};

export default ChatContainer