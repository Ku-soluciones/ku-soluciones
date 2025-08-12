import React from 'react';
// @ts-ignore
// @ts-ignore
import {
    siReact,
    siTypescript,
    siTailwindcss,
    siNextdotjs,
    siNodedotjs,
    siPython,
    siPostgresql,
    siMongodb,
    siDocker,
    siGit,
    siFigma,
    siJira,
    siSlack,
    siNotion,
} from 'simple-icons/icons';


interface TechIconProps {
    type:
        | 'react' | 'typescript' | 'tailwind' | 'nextjs' | 'nodejs' | 'python'
        | 'postgresql' | 'mongodb' | 'aws' | 'docker' | 'git' | 'cicd'
        | 'figma' | 'jira' | 'slack' | 'notion' | 'performance' | 'security' | 'scalability';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
}

const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
} as const;

const BRAND_ICONS = {
    react: siReact,
    typescript: siTypescript,
    tailwind: siTailwindcss,
    nextjs: siNextdotjs,
    nodejs: siNodedotjs,
    python: siPython,
    postgresql: siPostgresql,
    mongodb: siMongodb,
    docker: siDocker,
    git: siGit,
    figma: siFigma,
    jira: siJira,
    slack: siSlack,
    notion: siNotion,
} as const;

const TechIcon: React.FC<TechIconProps> = ({ type, size = 'md', className = '' }) => {
    // Conceptuales (no marcas): dejo SVGs simples en gris
    if (type === 'performance') {
        return (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                 className={`${sizeClasses[size]} text-gray-500 dark:text-gray-400 ${className}`}
                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Performance">
                <path d="m22 12-4-4-6 6-4-4-6 6" />
            </svg>
        );
    }

    if (type === 'security') {
        return (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                 className={`${sizeClasses[size]} text-gray-500 dark:text-gray-400 ${className}`}
                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Security">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
        );
    }

    if (type === 'scalability') {
        return (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                 className={`${sizeClasses[size]} text-gray-500 dark:text-gray-400 ${className}`}
                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Scalability">
                <path d="M3 3v18h18" />
                <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
            </svg>
        );
    }

    if (type === 'cicd') {
        return (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                 className={`${sizeClasses[size]} text-gray-500 dark:text-gray-400 ${className}`}
                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="CI/CD">
                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                <path d="M21 3v5h-5" />
                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                <path d="M8 16H3v5" />
            </svg>
        );
    }

    // AWS - Logo oficial exacto en gris
    if (type === 'aws') {
        return (
            <svg viewBox="0 0 304 182" xmlns="http://www.w3.org/2000/svg"
                 className={`${sizeClasses[size]} text-gray-500 dark:text-gray-400 ${className}`}
                 fill="currentColor" aria-label="AWS">
                <g>
                    {/* Letra "a" */}
                    <path d="M86.4 66.4c0 3.7.4 6.7 1.1 8.9.8 2.2 1.8 4.6 3.2 7.2.5.8.7 1.6.7 2.3 0 1-.6 2-1.9 3l-6.3 4.2c-.9.6-1.8.9-2.6.9-1 0-2-.5-3-1.4-1.4-1.5-2.6-3.1-3.6-4.7-1-1.7-2-3.6-3.1-5.9-7.8 9.2-17.6 13.8-29.4 13.8-8.4 0-15.1-2.4-20-7.2s-7.4-11.2-7.4-19.2c0-8.5 3-15.4 8.9-20.6s14.2-7.8 24.5-7.8c3.4 0 6.9.3 10.6.8 3.7.5 7.5 1.3 11.5 2.2v-7.3c0-7.6-1.6-12.9-4.7-16-3.2-3.1-8.6-4.6-16.3-4.6-3.5 0-7.1.4-10.8 1.3s-7.3 2-10.8 3.4c-1.6.7-2.8 1.1-3.5 1.3s-1.2.3-1.6.3c-1.4 0-2.1-1-2.1-3.1v-4.9c0-1.6.2-2.8.7-3.5s1.4-1.4 2.8-2.1c3.5-1.8 7.7-3.3 12.6-4.5 4.9-1.3 10.1-1.9 15.6-1.9 11.9 0 20.6 2.7 26.2 8.1 5.5 5.4 8.3 13.6 8.3 24.6v32.4zm-40.6 15.2c3.3 0 6.7-.6 10.3-1.8s6.8-3.4 9.5-6.4c1.6-1.9 2.8-4 3.4-6.4s1-5.3 1-8.7v-4.2c-2.9-.7-6-1.3-9.2-1.7s-6.3-.6-9.4-.6c-6.7 0-11.6 1.3-14.9 4s-4.9 6.5-4.9 11.5c0 4.7 1.2 8.2 3.7 10.6 2.4 2.5 5.9 3.7 10.5 3.7z"/>
                    
                    {/* Letra "w" corregida */}
                    <path d="M126.1 92c-1.8 0-3-.3-3.8-1-.8-.6-1.5-2-2.1-3.9L96.7 27.7c-.6-2-.9-3.3-.9-4 0-1.6.8-2.5 2.4-2.5h9.8c1.9 0 3.2.3 3.9 1 .8.6 1.4 2 2 3.9l16.8 66.2 15.6-66.2c.5-2 1.1-3.3 1.9-3.9s2.2-1 4-1h8c1.9 0 3.2.3 4 1 .8.6 1.5 2 1.9 3.9l15.8 67.1 17.3-67.1c.6-2 1.3-3.3 2-3.9.8-.6 2.1-1 3.9-1h9.3c1.6 0 2.5.8 2.5 2.5 0 .5-.1 1-.2 1.6s-.3 1.4-.7 2.5l-24.1 77.3c-.6 2-1.4 3.3-2.1 3.9s-2.1 1-3.8 1h-8.6c-1.9 0-3.2-.3-4-1s-1.5-2-1.9-4L156 43l-15.4 44c-.5 2-1.1 3.3-1.9 4-.8.7-2.2 1-4 1h-8.6z"/>
                    
                    {/* Letra "s" */}
                    <path d="M254.6 94.7c-5.2 0-10.4-.6-15.4-1.8s-8.9-2.5-11.5-4c-1.6-.9-2.7-1.9-3.1-2.8s-.6-1.9-.6-2.8v-5.1c0-2.1.8-3.1 2.3-3.1.6 0 1.2.1 1.8.3s1.5.6 2.5 1c3.4 1.5 7.1 2.7 11 3.5 4 .8 7.9 1.2 11.9 1.2 6.3 0 11.2-1.1 14.6-3.3s5.2-5.4 5.2-9.5c0-2.8-.7-5.1-2.2-6.9s-4.4-3.6-8.6-5.4l-12.3-3.9c-6.2-2-10.7-4.9-13.6-8.7s-4.3-8.1-4.3-12.9c0-3.7.8-7.1 2.3-10.1s3.5-5.6 6.1-7.8 5.6-4 9.2-5.3 7.4-1.9 11.5-1.9c2.3 0 4.6.2 6.9.5s4.4.7 6.5 1.1 3.9.9 5.7 1.5 3.2 1.1 4.2 1.6c1.4.8 2.4 1.6 3 2.5s.9 2.2.9 3.9v4.7c0 2.1-.8 3.2-2.3 3.2-.8 0-2.1-.4-3.8-1.2-5.7-2.6-12.1-3.9-19.2-3.9-5.7 0-10.2.9-13.3 2.8s-4.7 4.8-4.7 8.9c0 2.8.8 5.2 2.4 7.1s4.9 3.8 9.5 5.6l12.1 3.8c6.1 1.9 10.5 4.7 13.3 8.3s4.1 7.7 4.1 12.2c0 3.8-.8 7.2-2.4 10.4s-3.6 5.9-6.3 8.1-5.8 4-9.4 5.3c-3.6 1.4-7.4 2.1-11.4 2.1z"/>
                    
                    {/* Sonrisa de AWS - flecha curva característica */}
                    <path d="M273.5 143.7c-32.9 24.3-80.7 37.2-121.8 37.2-57.6 0-109.5-21.3-148.7-56.7-3.1-2.8-.3-6.6 3.4-4.4 42.4 24.6 94.7 39.5 148.8 39.5 36.5 0 76.6-7.6 113.5-23.2 5.5-2.5 10.2 3.6 4.8 7.6z"/>
                    <path d="M287.2 128.1c-4.2-5.4-27.8-2.6-38.5-1.3-3.2.4-3.7-2.4-.8-4.5 18.8-13.2 49.7-9.4 53.3-5 3.6 4.5-1 35.4-18.6 50.2-2.7 2.3-5.3 1.1-4.1-1.9 4-9.9 12.9-32.2 8.7-37.5z"/>
                </g>
            </svg>
        );
    }

    // Marcas reales con Simple Icons (monocromo gris)
    const icon = (BRAND_ICONS as any)[type];
    if (icon?.path) {
        return (
            <svg
                role="img"
                aria-label={icon.title}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className={`${sizeClasses[size]} text-gray-500 dark:text-gray-400 ${className}`}
                fill="currentColor"
            >
                <title>{icon.title}</title>
                <path d={icon.path} />
            </svg>
        );
    }

    // Fallback
    return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
             className={`${sizeClasses[size]} text-gray-500 dark:text-gray-400 ${className}`}
             fill="none" stroke="currentColor" strokeWidth="2" aria-label="Icon">
            <circle cx="12" cy="12" r="10" />
        </svg>
    );
};

export default TechIcon;
