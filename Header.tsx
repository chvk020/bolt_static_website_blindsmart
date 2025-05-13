import React, { useState, useEffect } from 'react';
import { Menu, X, Blinds } from 'lucide-react';
import { Link } from './Link';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || '';
      setCurrentPath(hash);
    };

    document.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial path check

    return () => {
      document.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-purple-800 bg-opacity-95 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Blinds className="h-8 w-8 text-gold-500" />
            <span className="text-xl font-bold text-cream-100">
              BlindSmart
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" active={currentPath === ''}>Home</Link>
            <Link href="/about" active={currentPath === 'about'}>About</Link>
            <Link href="/products" active={currentPath === 'products'}>Products</Link>
            <Link href="/contact" active={currentPath === 'contact'}>Contact</Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-cream-100 hover:text-gold-500 focus:outline-none focus:text-gold-500"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-purple-800 bg-opacity-95">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" mobile active={currentPath === ''}>Home</Link>
              <Link href="/about" mobile active={currentPath === 'about'}>About</Link>
              <Link href="/products" mobile active={currentPath === 'products'}>Products</Link>
              <Link href="/contact" mobile active={currentPath === 'contact'}>Contact</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;