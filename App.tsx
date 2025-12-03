import React, { useState } from 'react';
import StarField from './components/Background/StarField';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import TechStack from './components/Sections/TechStack';
import Interests from './components/Sections/Interests';
import Footer from './components/Layout/Footer';
import BatmanSignal from './components/UI/BatmanSignal';
import CursorEffect from './components/UI/CursorEffect';

/**
 * App Component
 * 
 * Main entry point for the portfolio.
 * Manages global state like the "Batman Signal" theme toggle.
 */
const App: React.FC = () => {
  const [signalActive, setSignalActive] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Background Effect */}
      <StarField />
      
      {/* Interactive Cursor Light & Follower */}
      <CursorEffect />
      
      {/* Navigation */}
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <TechStack />
        <Interests />
      </main>

      {/* Contact Section */}
      <section id="contact" className="py-32 container mx-auto px-4 text-center relative z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/5 to-transparent pointer-events-none"></div>
        
        <h2 className="text-4xl brand-font mb-6 text-white">READY TO INITIATE?</h2>
        <p className="text-gray-400 mb-10 max-w-xl mx-auto text-lg">
          Whether it's creating the next big tutorial series, designing a premium website, or crafting professional 3D AI animations for Horizon Corp, 
          I am always ready for the next mission.
        </p>
        
        {/* Contact Action Button */}
        <a 
          href="mailto:aliakbarskk05@gmail.com" 
          className="inline-block px-12 py-5 bg-yellow-500 text-black font-black text-xl rounded-sm hover:bg-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] tracking-widest uppercase clip-path-slant"
        >
          Send Message
        </a>
      </section>

      <Footer />
      
      {/* Interactive Theme Toggle */}
      <BatmanSignal 
        isActive={signalActive} 
        toggle={() => setSignalActive(!signalActive)} 
      />
      
      {/* Global Overlay Tint when signal is active */}
      <div className={`fixed inset-0 pointer-events-none transition-opacity duration-1000 z-0 ${signalActive ? 'opacity-30 bg-blue-900 mix-blend-overlay' : 'opacity-0'}`}></div>
      
      {/* Vignette Overlay for cinematic look */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] z-0"></div>
    </div>
  );
};

export default App;