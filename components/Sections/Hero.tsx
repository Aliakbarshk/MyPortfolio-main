import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ChevronDown, User } from 'lucide-react';

// Glitch Text Effect Component
const GlitchText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="relative inline-block group">
      <span className="relative z-10">{text}</span>
      {/* Red/Blue channels for glitch effect on hover */}
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-yellow-500 opacity-0 group-hover:opacity-70 group-hover:translate-x-[2px] transition-all duration-100 animate-pulse">{text}</span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-blue-500 opacity-0 group-hover:opacity-70 group-hover:-translate-x-[2px] transition-all duration-100 animate-pulse delay-75">{text}</span>
    </div>
  );
};

/**
 * Hero Component
 * 
 * The landing section of the website.
 * Features a 3D interactive tilt card and staggered text animations.
 * Updated: Replaced image with User icon.
 * Updated: Added Background Bat-Signal Watermark
 */
const Hero: React.FC = () => {
  // Motion values for 3D Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 50 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  // Track mouse movement over the card container
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXVal = e.clientX - rect.left;
    const mouseYVal = e.clientY - rect.top;
    const xPct = mouseXVal / width - 0.5;
    const yPct = mouseYVal / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  // Reset tilt on mouse leave
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden pt-20">
      
      {/* Background Bat-Symbol Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] z-0 overflow-hidden">
        <svg
          viewBox="0 0 100 60"
          className="w-[150vw] h-[150vw] md:w-[80vw] md:h-[80vw] fill-white animate-pulse-slow"
          style={{ animationDuration: '8s' }}
        >
          <path d="M50 10 C 60 10, 65 0, 75 0 C 85 0, 95 15, 100 25 C 90 35, 80 30, 75 35 C 70 40, 65 55, 50 60 C 35 55, 30 40, 25 35 C 20 30, 10 35, 0 25 C 5 15, 15 0, 25 0 C 35 0, 40 10, 50 10 Z" />
        </svg>
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content with Staggered Animation */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10 order-2 lg:order-1"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-yellow-500 animate-pulse rounded-full"></span>
            <span className="text-yellow-500 font-bold tracking-[0.3em] uppercase text-xs">System Online</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-4 leading-tight">
            I AM <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">
              <GlitchText text="SHAIKH" /> <GlitchText text="ALI" /> <GlitchText text="AKBAR" />
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed"
          >
            A relentless inventor and creative developer. I bridge the gap between imagination and reality through code, AI, and content creation.
            <br/>
            <span className="text-sm mt-2 block text-gray-500">Founder of <strong className="text-yellow-500">Horizon Corp</strong></span>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <button 
              onClick={() => scrollTo('skills')}
              className="px-8 py-3 bg-white text-black font-bold text-lg rounded-sm hover:bg-yellow-400 hover:scale-105 transition-all duration-300 clip-path-slant"
            >
              View Arsenal
            </button>
            <button 
              onClick={() => scrollTo('about')}
              className="px-8 py-3 bg-transparent border border-gray-700 text-white font-bold text-lg rounded-sm hover:border-yellow-400 hover:text-yellow-400 hover:shadow-[0_0_20px_rgba(234,179,8,0.2)] transition-all duration-300"
            >
              Analyze Profile
            </button>
          </motion.div>
        </motion.div>

        {/* 3D Interactive Card */}
        <div className="relative perspective-1000 order-1 lg:order-2 flex justify-center py-10" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-full max-w-[380px] aspect-[4/5] bg-gray-900 rounded-2xl border border-gray-800 shadow-2xl relative group"
          >
            {/* Holographic Border */}
            <div className="absolute inset-0 rounded-2xl border border-yellow-500/20 group-hover:border-yellow-500/50 transition-colors duration-500" style={{ transform: "translateZ(20px)" }}></div>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8" style={{ transform: "translateZ(60px)" }}>
              {/* Profile Icon Container */}
              <div className="w-32 h-32 rounded-full border-2 border-dashed border-yellow-500/50 p-1 mb-6 relative flex items-center justify-center bg-black/50">
                 {/* Standard User Icon replaced photo */}
                 <User size={64} className="text-gray-400 group-hover:text-yellow-500 transition-colors duration-500" />
                 
                 {/* Scanner Line Animation */}
                 <div className="absolute top-0 left-0 w-full h-full rounded-full border border-transparent border-t-yellow-500 animate-spin opacity-50"></div>
                 <div className="absolute top-0 left-0 w-full h-1 bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,1)] animate-scan opacity-30 rounded-full"></div>
              </div>

              <h3 className="text-2xl font-bold brand-font text-center text-white">SHAIKH ALI AKBAR</h3>
              <p className="text-yellow-500 tracking-widest text-xs font-bold mt-2 uppercase">Developer • Creator • Founder</p>
              
              <div className="w-full h-px bg-gray-800 my-6"></div>

              <div className="grid grid-cols-2 gap-4 w-full">
                 <div className="text-center">
                    <div className="text-2xl font-bold text-white brand-font">4+</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-wider">Years Exp</div>
                 </div>
                 <div className="text-center">
                    <div className="text-2xl font-bold text-white brand-font">∞</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-wider">Curiosity</div>
                 </div>
              </div>
            </div>
            
            {/* Decorative Tech Elements on Card */}
            <div className="absolute top-6 right-6 flex gap-1" style={{ transform: "translateZ(40px)" }}>
               <div className="w-1 h-1 bg-red-500 rounded-full animate-ping"></div>
               <div className="w-1 h-1 bg-red-500 rounded-full"></div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 text-gray-800 pointer-events-none brand-font text-9xl font-black opacity-20 select-none">
              SA
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.button 
        onClick={() => scrollTo('about')}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 hover:text-yellow-500 transition-colors"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
};

export default Hero;