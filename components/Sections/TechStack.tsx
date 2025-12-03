import React from 'react';
import { motion } from 'framer-motion';

// Skills Configuration
const skills = {
  code: ['HTML5', 'CSS3', 'React JS', 'Tailwind', 'Express JS', 'MongoDB'],
  creative: ['CapCut', 'After Effects', 'Photoshop', 'Graphic Design'],
  ai: ['Prompt Engineering', 'LLM Interaction', 'Workflow Automation']
};

// Animated Progress Bar Component
const TechBar: React.FC<{ name: string; percentage: number; color: string }> = ({ name, percentage, color }) => (
  <div className="mb-4">
    <div className="flex justify-between text-xs font-bold text-gray-400 mb-1 font-mono uppercase">
      <span>{name}</span>
      <span>{percentage}%</span>
    </div>
    <div className="h-1.5 bg-gray-800 w-full overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className={`h-full ${color} shadow-[0_0_8px_currentColor] relative`}
      >
        <div className="absolute right-0 top-0 h-full w-1 bg-white opacity-50"></div>
      </motion.div>
    </div>
  </div>
);

/**
 * TechStack Component
 * 
 * Displays technical and creative skills in a "System Arsenal" themed layout.
 * Uses decorative elements to mimic a HUD (Heads Up Display).
 */
const TechStack: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-black relative border-y border-gray-900 overflow-hidden">
      {/* Background Grid & Scanline Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(30,30,30,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(30,30,30,0.5)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/5 to-transparent h-[20px] w-full animate-scan pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-bold brand-font text-white mb-2">SYSTEM ARSENAL</h2>
          <div className="h-1 w-24 bg-yellow-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          {/* Coding Panel */}
          <div className="bg-gray-900/30 border border-gray-800 p-6 backdrop-blur-sm relative group">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-500"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-500"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-500"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-500"></div>
            
            <h3 className="text-cyan-400 font-bold brand-font text-xl mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-400 rounded-sm animate-spin"></span> DEV_PROTOCOLS
            </h3>
            {skills.code.map((s, i) => (
              <TechBar key={s} name={s} percentage={90 - (i * 5)} color="bg-cyan-500" />
            ))}
          </div>

          {/* Creative Panel */}
          <div className="bg-gray-900/30 border border-gray-800 p-6 backdrop-blur-sm relative group">
             <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-yellow-500"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-yellow-500"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-yellow-500"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-yellow-500"></div>
            
            <h3 className="text-yellow-500 font-bold brand-font text-xl mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-500 rounded-sm animate-pulse"></span> CREATIVE_SUITE
            </h3>
            {skills.creative.map((s, i) => (
              <TechBar key={s} name={s} percentage={95 - (i * 8)} color="bg-yellow-500" />
            ))}
          </div>

          {/* AI Panel */}
          <div className="bg-gray-900/30 border border-gray-800 p-6 backdrop-blur-sm relative group">
             <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-purple-500"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-purple-500"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-purple-500"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-purple-500"></div>
            
            <h3 className="text-purple-500 font-bold brand-font text-xl mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-sm"></span> AI_SYNTHESIS
            </h3>
            {skills.ai.map((s, i) => (
              <TechBar key={s} name={s} percentage={98 - (i * 2)} color="bg-purple-500" />
            ))}
            
            <div className="mt-8 p-3 bg-purple-900/20 border border-purple-500/30 rounded text-xs text-purple-300 font-mono">
              > Analyzing patterns... <br/>
              > Optimizing workflows... <br/>
              > Human-AI Bridge established.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechStack;