import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Film, Gamepad2, Star, Telescope } from 'lucide-react';

const movies = [
  { title: "Interstellar", genre: "Sci-Fi", rating: "10/10" },
  { title: "Fight Club", genre: "Psychological", rating: "9.5/10" },
  { title: "Pursuit of Happyness", genre: "Drama", rating: "10/10" },
  { title: "Wolf of Wall Street", genre: "Biographical", rating: "9/10" },
  { title: "3 Idiots", genre: "Comedy/Drama", rating: "9.5/10" },
  { title: "Drive", genre: "Neo-Noir", rating: "9.5/10" },
];

const games = [
  { title: "Red Dead Redemption 2", platform: "Open World", rating: "Masterpiece" },
  { title: "Ghost of Tsushima", platform: "Action", rating: "Visual Art" },
  { title: "GTA V", platform: "Open World", rating: "Classic" },
  { title: "Hitman Series", platform: "Stealth", rating: "Tactical" },
  { title: "BGMI", platform: "Battle Royale", rating: "Competitive" },
];

/**
 * TiltCard Component
 * 
 * A reusable card component that tilts in 3D based on mouse position.
 * Uses framer-motion's useMotionValue and useTransform for performant animations.
 */
const TiltCard: React.FC<{ item: any; color: string; icon: React.ReactNode }> = ({ item, color, icon }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring physics for smooth tilt effect
  const mouseX = useSpring(x, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 50 });

  // Map mouse position to rotation degrees
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXVal = e.clientX - rect.left;
    const mouseYVal = e.clientY - rect.top;
    x.set(mouseXVal / width - 0.5);
    y.set(mouseYVal / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative p-6 rounded-xl border backdrop-blur-sm cursor-pointer min-h-[160px] flex flex-col justify-between
        ${color === 'yellow' ? 'bg-yellow-900/10 border-yellow-500/30' : 'bg-blue-900/10 border-blue-500/30'}`}
    >
       {/* Gloss Effect */}
       <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-xl pointer-events-none" style={{ transform: "translateZ(20px)" }}></div>
       
       <div style={{ transform: "translateZ(30px)" }}>
         <div className="flex justify-between items-start mb-4">
            <h3 className={`text-xl font-bold text-white group-hover:text-transparent bg-clip-text bg-gradient-to-r ${color === 'yellow' ? 'from-yellow-400 to-yellow-200' : 'from-blue-400 to-blue-200'}`}>
              {item.title}
            </h3>
            <div className={`${color === 'yellow' ? 'text-yellow-500' : 'text-blue-500'}`}>{icon}</div>
         </div>
       </div>

       <div style={{ transform: "translateZ(20px)" }} className="flex justify-between items-end">
          <span className="text-sm text-gray-400 font-mono">{item.genre || item.platform}</span>
          <div className="flex items-center gap-1 text-xs font-bold px-2 py-1 rounded bg-black/50 border border-gray-700">
             <Star size={10} className="fill-yellow-500 text-yellow-500" />
             {item.rating}
          </div>
       </div>
    </motion.div>
  );
};

// Special Cosmos Section
const CosmosSection: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    className="p-8 border border-purple-500/30 bg-purple-900/10 rounded-xl backdrop-blur-md max-w-4xl mx-auto"
  >
    <div className="flex items-center gap-4 mb-6 border-b border-purple-500/20 pb-4">
       <Telescope size={32} className="text-purple-400" />
       <h3 className="text-3xl font-bold text-white brand-font">THE GREAT UNKNOWN</h3>
    </div>
    
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="text-gray-300 space-y-4 leading-relaxed italic text-lg font-light">
        <p>
          "In the silence of the cosmos, I find perspective. My journey into <span className="text-purple-400 font-medium">astrophotography</span> is an attempt to capture the echoes of the universe using just a smartphone—proving that you don't need a Hubble to witness the infinite."
        </p>
        <p>
          I am deeply compelled by the mysteries of <span className="text-white">time dilation</span>, the event horizons of <span className="text-white">black holes</span>, and the potential for life beyond our blue marble. It is a humbling study of our place in the dark, vast expanse.
        </p>
      </div>
      
      <div className="space-y-4">
         <div className="bg-black/40 p-4 rounded border border-purple-500/20 hover:border-purple-500/50 transition-all cursor-crosshair">
            <h4 className="text-purple-400 font-bold uppercase text-sm mb-1">Observation Target: MARS</h4>
            <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
               <div className="h-full w-[70%] bg-red-500"></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">Analyzing potential habitability...</p>
         </div>
         <div className="bg-black/40 p-4 rounded border border-purple-500/20 hover:border-purple-500/50 transition-all cursor-crosshair">
            <h4 className="text-purple-400 font-bold uppercase text-sm mb-1">Theory: TIME DILATION</h4>
            <p className="text-xs text-gray-400">Exploring the relativity of existence near massive gravitational fields.</p>
         </div>
         <div className="bg-black/40 p-4 rounded border border-purple-500/20 hover:border-purple-500/50 transition-all cursor-crosshair">
            <h4 className="text-purple-400 font-bold uppercase text-sm mb-1">Equipment: MOBILE LENS</h4>
            <p className="text-xs text-gray-400">Capturing photons from distant galaxies.</p>
         </div>
      </div>
    </div>
  </motion.div>
);

const Interests: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'movies' | 'games' | 'cosmos'>('movies');

  return (
    <section id="interests" className="py-24 relative overflow-hidden bg-black/80">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center brand-font">INTERESTS</h2>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button 
            onClick={() => setActiveTab('movies')}
            className={`flex items-center gap-2 px-6 py-3 rounded-sm border transition-all duration-300 font-bold tracking-wider uppercase
              ${activeTab === 'movies' 
                ? 'bg-yellow-500 text-black border-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.4)]' 
                : 'bg-transparent text-gray-500 border-gray-800 hover:border-gray-600'}`}
          >
            <Film size={18} /> Cinema
          </button>
          <button 
             onClick={() => setActiveTab('games')}
             className={`flex items-center gap-2 px-6 py-3 rounded-sm border transition-all duration-300 font-bold tracking-wider uppercase
              ${activeTab === 'games' 
                ? 'bg-blue-600 text-white border-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.4)]' 
                : 'bg-transparent text-gray-500 border-gray-800 hover:border-gray-600'}`}
          >
            <Gamepad2 size={18} /> Simulation
          </button>
          <button 
             onClick={() => setActiveTab('cosmos')}
             className={`flex items-center gap-2 px-6 py-3 rounded-sm border transition-all duration-300 font-bold tracking-wider uppercase
              ${activeTab === 'cosmos' 
                ? 'bg-purple-600 text-white border-purple-600 shadow-[0_0_20px_rgba(147,51,234,0.4)]' 
                : 'bg-transparent text-gray-500 border-gray-800 hover:border-gray-600'}`}
          >
            <Telescope size={18} /> Cosmos
          </button>
        </div>

        <div className="perspective-1000 max-w-6xl mx-auto min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === 'cosmos' ? (
               <CosmosSection key="cosmos" />
            ) : (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {(activeTab === 'movies' ? movies : games).map((item, index) => (
                  <TiltCard 
                    key={item.title} 
                    item={item} 
                    color={activeTab === 'movies' ? 'yellow' : 'blue'}
                    icon={activeTab === 'movies' ? <Film size={16} /> : <Gamepad2 size={16} />} 
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Interests;