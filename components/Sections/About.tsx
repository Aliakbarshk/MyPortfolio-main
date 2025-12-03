import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, User, Brain, Rocket, PenTool } from 'lucide-react';

/**
 * About Component
 * 
 * Displays personal information and details about Horizon Corp.
 * Updated to include additional services and AI tools.
 * Added interactive animations to lists.
 */
const About: React.FC = () => {
  
  const services = [
    "Web Design & Dev",
    "3D AI Animation",
    "Bulk Video Production",
    "Photo & Graphic Design",
    "Video Editing"
  ];

  const aiTools = [
    'Grok', 'ChatGPT', 'Gemini', 'DeepSeek', 'Perplexity', 'Claude', 'Kimi'
  ];

  return (
    <section id="about" className="py-24 relative z-10 bg-black/50">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold brand-font inline-block border-b-2 border-yellow-500 pb-2">
            ABOUT ME
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Column 1: Personal Bio (The Person) */}
          <div className="lg:col-span-2 space-y-8">
            <div className="p-8 bg-gray-900/50 border border-gray-800 rounded-lg relative overflow-hidden group hover:border-gray-600 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <User size={120} />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-yellow-500">01.</span> THE ORIGIN
              </h3>
              
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                I am <strong className="text-white">Shaikh Ali Akbar</strong>, an inventor at heart and a developer by trade. 
                My journey isn't just about writing code; it's about <span className="text-yellow-500 italic">creating experiences</span>. 
                With 4 years of coding expertise, I've built a reputation for solving complex problems with creative solutions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-black/40 rounded border border-gray-800">
                  <Brain className="text-purple-400 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm text-gray-200 uppercase">Curious Mind</h4>
                    <p className="text-xs text-gray-500 mt-1">Constantly learning new technologies and exploring the cosmos.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-black/40 rounded border border-gray-800">
                  <PenTool className="text-green-400 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm text-gray-200 uppercase">Storyteller</h4>
                    <p className="text-xs text-gray-500 mt-1">Writing stories and crafting narratives that captivate.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Capability Section */}
            <div className="p-8 bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-lg">
               <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-blue-500">02.</span> AI INTEGRATION
              </h3>
              <p className="text-gray-400 mb-6">
                I seamlessly integrate AI into my workflow, using advanced models to enhance productivity and creativity.
              </p>
              <div className="flex flex-wrap gap-3">
                {aiTools.map((ai, index) => (
                  <motion.span 
                    key={ai} 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.2)", borderColor: "#3b82f6" }}
                    className="cursor-pointer px-4 py-2 bg-blue-900/10 border border-blue-500/30 text-blue-400 text-sm font-mono rounded-full transition-colors"
                  >
                    {ai}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Professional Work (The Enterprise) */}
          <div className="relative">
            <div className="h-full p-8 bg-gray-900 border-2 border-yellow-500/20 rounded-lg flex flex-col relative overflow-hidden transition-all hover:border-yellow-500/40 hover:shadow-[0_0_30px_rgba(234,179,8,0.1)]">
              {/* Background Glow Effect */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-500/10 blur-3xl rounded-full"></div>
              
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="text-yellow-500" size={28} />
                <h3 className="text-xl font-bold brand-font tracking-wider">MY AGENCY</h3>
              </div>

              <div className="text-center mb-8 relative z-10">
                 <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="inline-block p-4 rounded-full border border-gray-700 bg-black mb-4 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                 >
                    <Rocket className="text-white w-8 h-8" />
                 </motion.div>
                 <h2 className="text-3xl font-black text-white brand-font">HORIZON CORP</h2>
                 <div className="text-yellow-500 text-xs font-bold tracking-[0.2em] uppercase mt-1">Founder & Owner</div>
              </div>

              <p className="text-gray-400 text-sm mb-6 text-center leading-relaxed">
                We specialize in high-volume digital production for creators and businesses who need scale without compromising quality.
              </p>

              <div className="space-y-3 mt-auto">
                <h4 className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-2">Our Services</h4>
                {services.map((service, idx) => (
                  <motion.div 
                    key={service}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-3 bg-black/50 border border-gray-800 rounded text-sm text-gray-300 flex justify-between items-center hover:border-yellow-500/50 hover:text-white transition-colors cursor-default"
                  >
                    <span>{service}</span>
                    <span className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_5px_lime] animate-pulse"></span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-800 text-center">
                <p className="text-xs text-gray-600 font-mono">STATUS: OPERATIONAL</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;