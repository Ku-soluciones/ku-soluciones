import React from 'react';
import SocialIcon from './SocialIcon';

interface SocialLink {
  type: 'whatsapp' | 'linkedin' | 'instagram' | 'facebook' | 'youtube' | 'twitter' | 'github' | 'telegram' | 'phone' | 'email';
  href: string;
}

interface SocialIconGroupProps {
  links: SocialLink[];
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'filled' | 'outline' | 'minimal';
  spacing?: 'tight' | 'normal' | 'loose';
  className?: string;
}

const SocialIconGroup: React.FC<SocialIconGroupProps> = ({
  links,
  size = 'md',
  variant = 'filled',
  spacing = 'normal',
  className = ''
}) => {
  const spacingClasses = {
    tight: 'space-x-2',
    normal: 'space-x-4',
    loose: 'space-x-6'
  };

  return (
    <div className={`flex items-center ${spacingClasses[spacing]} ${className}`}>
      {links.map((link, index) => (
        <SocialIcon
          key={`${link.type}-${index}`}
          type={link.type}
          href={link.href}
          size={size}
          variant={variant}
          className={className}
        />
      ))}
    </div>
  );
};

export default SocialIconGroup;