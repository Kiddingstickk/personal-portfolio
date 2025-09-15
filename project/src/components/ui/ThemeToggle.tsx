import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
      } ${className}`}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun size={20} className="animate-fadeIn" />
      ) : (
        <Moon size={20} className="animate-fadeIn" />
      )}
    </button>
  );
};

export default ThemeToggle;