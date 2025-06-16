
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyle = "font-notosans text-sm font-semibold uppercase tracking-wide py-3 px-6 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900";

  const primaryStyle = "bg-pomegranate-600 hover:bg-pomegranate-700 text-white dark:bg-pomegranate-500 dark:hover:bg-pomegranate-600 focus:ring-pomegranate-500";
  const secondaryStyle = "border-2 border-pomegranate-500 text-pomegranate-600 hover:bg-pomegranate-500 hover:text-white dark:border-pomegranate-400 dark:text-pomegranate-400 dark:hover:bg-pomegranate-400 dark:hover:text-gray-900 focus:ring-pomegranate-500 dark:focus:ring-pomegranate-400";

  const styles = variant === 'primary' ? primaryStyle : secondaryStyle;

  return (
    <button className={`${baseStyle} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
};
