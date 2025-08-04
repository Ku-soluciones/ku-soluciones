import React from 'react';

const AnimatedShapes: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden -z-10">
    <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-gradient-to-br from-pomegranate-500 via-pomegranate-400 to-pomegranate-600 opacity-30 dark:opacity-20 rounded-full blur-xl animate-pulse" />
    <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-gradient-to-tl from-pomegranate-600 via-pomegranate-500 to-pomegranate-700 opacity-25 dark:opacity-15 rounded-lg blur-lg animate-pulse rotate-45" />
    <div className="absolute top-1/2 left-1/3 w-28 h-28 border-4 border-pomegranate-400 dark:border-pomegranate-300 rounded-full animate-ping opacity-40 blur-sm" />
  </div>
);

export default AnimatedShapes; 