import React from 'react';

interface FeatureIconProps {
  type: 'pricing' | 'speed' | 'support' | 'target' | 'security' | 'scalability' | 'logistics' | 'retail' | 'manufacturing' | 'services';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const FeatureIcon: React.FC<FeatureIconProps> = ({
  type,
  size = 'md',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const getIcon = () => {
    switch (type) {
      case 'pricing':
        // Lucide "calculator" icon - Professional business calculator for pricing
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${sizeClasses[size]} ${className}`}>
            <rect width="16" height="20" x="4" y="2" rx="2"/>
            <line x1="8" x2="16" y1="6" y2="6"/>
            <line x1="16" x2="16" y1="14" y2="18"/>
            <path d="M16 10h.01"/>
            <path d="M12 10h.01"/>
            <path d="M8 10h.01"/>
            <path d="M12 14h.01"/>
            <path d="M8 14h.01"/>
            <path d="M12 18h.01"/>
            <path d="M8 18h.01"/>
          </svg>
        );
      case 'speed':
        // Lucide "timer" icon - Professional timer for fast implementation
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${sizeClasses[size]} ${className}`}>
            <line x1="10" x2="14" y1="2" y2="2"/>
            <line x1="12" x2="15" y1="14" y2="11"/>
            <circle cx="12" cy="14" r="8"/>
          </svg>
        );
      case 'support':
        // Lucide "user-check" icon - Professional local support
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${sizeClasses[size]} ${className}`}>
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <polyline points="16,11 18,13 22,9"/>
          </svg>
        );
      case 'target':
        // Lucide "map-pin" icon - Professional Chilean market targeting
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${sizeClasses[size]} ${className}`}>
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
        );
      case 'security':
        // Lucide "shield-check" icon - Professional security
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${sizeClasses[size]} ${className}`}>
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
            <path d="m9 12 2 2 4-4"/>
          </svg>
        );
      case 'scalability':
        // Lucide "trending-up" icon - Professional scalability/growth
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${sizeClasses[size]} ${className}`}>
            <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/>
            <polyline points="16,7 22,7 22,13"/>
          </svg>
        );
      case 'logistics':
        // Lucide "package" icon - Professional logistics/shipping
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${sizeClasses[size]} ${className}`}>
            <path d="m7.5 4.27 9 5.15"/>
            <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
            <path d="m3.3 7 8.7 5 8.7-5"/>
            <path d="M12 22V12"/>
          </svg>
        );
      case 'retail':
        // Lucide "store" icon - Professional retail store
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${sizeClasses[size]} ${className}`}>
            <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/>
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
            <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/>
            <path d="M2 7h20"/>
            <path d="M22 7v3a2 2 0 0 1-2 2v0a2.18 2.18 0 0 1-2-2v0a2.18 2.18 0 0 1-2 2v0a2.18 2.18 0 0 1-2-2v0a2.18 2.18 0 0 1-2 2v0a2.18 2.18 0 0 1-2-2v0a2.18 2.18 0 0 1-2 2v0a2 2 0 0 1-2-2V7"/>
          </svg>
        );
      case 'manufacturing':
        // Lucide "settings" icon - Professional manufacturing/industry settings
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${sizeClasses[size]} ${className}`}>
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
        );
      case 'services':
        // Lucide "building" icon - Professional business services
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${sizeClasses[size]} ${className}`}>
            <rect width="16" height="20" x="4" y="2" rx="2" ry="2"/>
            <path d="M9 22v-4h6v4"/>
            <path d="M8 6h.01"/>
            <path d="M16 6h.01"/>
            <path d="M12 6h.01"/>
            <path d="M12 10h.01"/>
            <path d="M12 14h.01"/>
            <path d="M16 10h.01"/>
            <path d="M16 14h.01"/>
            <path d="M8 10h.01"/>
            <path d="M8 14h.01"/>
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${sizeClasses[size]} ${className}`}>
            <circle cx="12" cy="12" r="10"/>
          </svg>
        );
    }
  };

  return getIcon();
};

export default FeatureIcon;