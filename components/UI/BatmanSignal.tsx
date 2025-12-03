import React from 'react';
import { motion } from 'framer-motion';

interface BatmanSignalProps {
  isActive: boolean;
  toggle: () => void;
}

const BatmanSignal: React.FC<BatmanSignalProps> = ({ isActive, toggle }) => {
  return (
    <button
      onClick={toggle}
      className="fixed bottom-8 right-8 z-50 group"
      aria-label="Toggle Signal"
    >
      <div className={`relative w-16 h-16 rounded-full border-2 transition-all duration-500 flex items-center justify-center overflow-hidden
        ${isActive ? 'bg-yellow-500/10 border-yellow-500 shadow-[0_0_30px_rgba(234,179,8,0.6)]' : 'bg-gray-900/80 border-gray-700 hover:border-gray-500'}`}
      >
        {/* Pulse Ring when inactive to suggest clicking */}
        {!isActive && (
           <div className="absolute inset-0 rounded-full border border-yellow-500/30 animate-ping opacity-75"></div>
        )}

        {/* Simplified Bat Shape Representation using SVG */}
        <svg
          viewBox="0 0 100 60"
          className={`w-10 h-6 transition-all duration-500 relative z-10 ${isActive ? 'fill-yellow-500' : 'fill-gray-500 group-hover:fill-gray-300'}`}
        >
          <path d="M50 10 C 60 10, 65 0, 75 0 C 85 0, 95 15, 100 25 C 90 35, 80 30, 75 35 C 70 40, 65 55, 50 60 C 35 55, 30 40, 25 35 C 20 30, 10 35, 0 25 C 5 15, 15 0, 25 0 C 35 0, 40 10, 50 10 Z" />
        </svg>
      </div>
      
      {/* Light Beam Effect */}
      {isActive && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 0.3, height: '100vh' }}
          className="absolute bottom-1/2 left-1/2 -translate-x-1/2 w-[200px] bg-gradient-to-t from-yellow-500/30 to-transparent blur-3xl pointer-events-none -z-10 origin-bottom"
          style={{ transform: 'translateX(-50%) rotate(0deg)' }}
        />
      )}
    </button>
  );
};

export default BatmanSignal;