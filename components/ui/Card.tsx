
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ children, className = '', onClick }) => {
  const baseStyle = "bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg dark:shadow-2xl transition-all duration-300";
  return (
    <div className={`${baseStyle} ${className}`} onClick={onClick}>
      {children}
    </div>
  );
};
