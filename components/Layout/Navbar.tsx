import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

/**
 * Navbar Component
 * 
 * Sticky navigation bar that handles smooth scrolling to sections.
 * Changes appearance when scrolled.
 */
const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll event to toggle navbar background style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation Links configuration
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' }, // Simpler naming
    { name: 'Skills', href: '#skills' }, // Simpler naming
    { name: 'Interests', href: '#interests' },
  ];

  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false); // Close mobile menu if open
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-gray-800 py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        {/* Brand / Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="p-2 bg-yellow-500 rounded text-black font-bold group-hover:bg-white transition-colors">
            <Terminal size={20} />
          </div>
          {/* Updated Logo Text to 'ALI' as requested */}
          <div className="text-xl md:text-2xl font-bold brand-font tracking-tighter text-white">
            ALI<span className="text-yellow-500 group-hover:text-white transition-colors">.DEV</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="relative text-gray-400 hover:text-white transition-colors text-sm font-medium uppercase tracking-widest group py-2"
            >
              {link.name}
              {/* Underline animation */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          
          {/* Connect Button */}
          <a 
            href="mailto:aliakbarskk05@gmail.com"
            className="px-5 py-2 border border-yellow-500/50 text-yellow-500 text-xs font-bold uppercase tracking-widest hover:bg-yellow-500 hover:text-black transition-all duration-300 rounded-sm"
          >
            Connect with me
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="md:hidden text-white hover:text-yellow-500 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-gray-800 transition-all duration-500 overflow-hidden ${mobileMenuOpen ? 'max-h-[400px]' : 'max-h-0'}`}>
        <div className="flex flex-col p-6 gap-2">
           {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-gray-300 hover:text-yellow-500 py-3 border-b border-gray-800 font-brand text-lg tracking-widest uppercase"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="mailto:aliakbarskk05@gmail.com"
            className="text-yellow-500 font-bold py-4 uppercase tracking-widest"
          >
            Connect with me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;