import React from 'react';
import { Mail, Instagram, Linkedin } from 'lucide-react';

/**
 * Footer Component
 * 
 * Contains social media links and copyright information.
 * Updated to include Instagram, LinkedIn, and Email links.
 */
const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-black border-t border-gray-800 relative z-10">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-2xl font-bold brand-font mb-2">SHAIKH ALI AKBAR</h2>
        <p className="text-gray-500 text-sm mb-6">Founder of Horizon Corp</p>
        
        {/* Social Media Links */}
        <div className="flex gap-6 mb-8">
          {/* Instagram */}
          <a 
            href="https://www.instagram.com/horizoncorp25/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-pink-500 transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>

          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/aliakbar-shaikh-b79090299/?originalSubdomain=in" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-blue-500 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>

          {/* Email */}
          <a 
            href="mailto:aliakbarskk05@gmail.com" 
            className="text-gray-400 hover:text-green-400 transition-colors"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* Copyright & Credits */}
        <div className="text-center space-y-2">
            <p className="text-gray-700 text-[10px] uppercase tracking-widest">
              Designed & Developed by Shaikh Ali Akbar
            </p>
            <p className="text-gray-800 text-[10px]">
              © {new Date().getFullYear()} Horizon Corp.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;