import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
  active?: boolean;
}

export const Link: React.FC<LinkProps> = ({ href, children, mobile = false, active = false }) => {
  const baseClasses = "transition-all duration-300 font-medium";
  
  const desktopClasses = active 
    ? "text-gold-500 hover:text-gold-400" 
    : "text-cream-100 hover:text-gold-500";
  
  const mobileClasses = active
    ? "text-gold-500 text-lg hover:text-gold-400"
    : "text-cream-100 text-lg hover:text-gold-500";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const hash = href === '/' ? '' : href.replace('/', '#');
    window.location.hash = hash;
  };

  return (
    <a 
      href={`#${href.replace('/', '')}`}
      onClick={handleClick}
      className={`${baseClasses} ${mobile ? mobileClasses : desktopClasses}`}
    >
      {children}
    </a>
  );
};