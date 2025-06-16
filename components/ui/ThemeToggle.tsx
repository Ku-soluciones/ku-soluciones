
import React from 'react';
import { useTheme } from '../../hooks/useTheme';

// Basic SVG Icons for Sun and Moon
const SunIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-6.364-.386 1.591-1.591M3 12h2.25m.386-6.364 1.591 1.591M12 12a2.25 2.25 0 0 0-2.25 2.25c0 1.242.666 2.085 1.5 2.61V12Z" />
     <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a2.25 2.25 0 0 1-2.25-2.25c0-1.242.666-2.085 1.5-2.61V12Z" />
     <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a2.25 2.25 0 0 0 2.25-2.25c0-1.242-.666-2.085-1.5-2.61V12Z" />
     <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a2.25 2.25 0 0 1 2.25 2.25c0 1.242-.666 2.085-1.5 2.61V12Z" />
     <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a2.25 2.25 0 0 0-2.25 2.25 4.5 4.5 0 0 0 4.5 0 2.25 2.25 0 0 0-2.25-2.25Z" />
  </svg>
);

const MoonIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
  </svg>
);


export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-pomegranate-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
      aria-label={theme === 'light' ? "Switch to dark mode" : "Switch to light mode"}
    >
      {theme === 'light' ? (
        <MoonIcon className="w-6 h-6" />
      ) : (
        <SunIcon className="w-6 h-6 text-yellow-400" />
      )}
    </button>
  );
};
