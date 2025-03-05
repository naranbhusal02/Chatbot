import React from 'react';
import { Bot, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

interface ChatHeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-4 flex items-center justify-between border-b border-white/10"
    >
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-purple-600/30 p-0.5">
          <div className="w-full h-full rounded-2xl glass-morphism flex items-center justify-center">
            <Bot className="w-6 h-6 text-purple-300" />
          </div>
        </div>
        <div>
          <h1 className="font-bold text-xl text-white">
            Gemini AI
          </h1>
          <p className="text-xs text-gray-400">Powered by Google's Gemini Pro</p>
        </div>
      </div>
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-xl glass-morphism hover:bg-white/10 transition-colors"
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {darkMode ? (
          <Sun className="w-5 h-5 text-purple-300" />
        ) : (
          <Moon className="w-5 h-5 text-purple-300" />
        )}
      </button>
    </motion.div>
  );
};

export default ChatHeader