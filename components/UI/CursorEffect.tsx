import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * CursorEffect Component
 * 
 * Adds a high-tech interactive layer to the mouse cursor.
 * Features:
 * 1. Flashlight/Spotlight glow that illuminates the background.
 * 2. Tactical targeting ring that follows the cursor with precision.
 * 
 * Note: Hidden on touch devices (md:block) to prevent UX issues.
 */
const CursorEffect: React.FC = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring configuration for the sharp cursor follower (The Ring)
  // High stiffness for snappy response
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Spring configuration for the ambient glow (The Light)
  // Lower stiffness/higher damping for a "heavy", fluid trailing effect
  const glowSpringConfig = { damping: 40, stiffness: 200 };
  const glowXSpring = useSpring(cursorX, glowSpringConfig);
  const glowYSpring = useSpring(cursorY, glowSpringConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* 
        Ambient Light Glow 
        Uses mix-blend-screen to "light up" the dark background elements
        z-30 ensures it sits above standard content but below the navbar 
      */}
      <motion.div
        className="fixed top-0 left-0 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[80px] pointer-events-none z-30 hidden md:block mix-blend-screen"
        style={{
          x: glowXSpring,
          y: glowYSpring,
          translateX: "-50%",
          translateY: "-50%",
          background: 'radial-gradient(circle, rgba(234, 179, 8, 0.15) 0%, rgba(234, 179, 8, 0.05) 40%, transparent 70%)',
        }}
      />
      
      {/* 
        Core Hotspot 
        Brighter center for the flashlight effect
      */}
      <motion.div
        className="fixed top-0 left-0 w-[150px] h-[150px] bg-yellow-400/10 rounded-full blur-2xl pointer-events-none z-30 hidden md:block mix-blend-screen"
        style={{
          x: glowXSpring,
          y: glowYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* 
        Tactical Cursor Ring 
        Sits on top of everything (z-[100])
      */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-yellow-500/60 rounded-full flex items-center justify-center pointer-events-none z-[100] hidden md:flex backdrop-blur-[1px]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div className="w-1 h-1 bg-yellow-500 rounded-full shadow-[0_0_5px_rgba(234,179,8,1)]" />
      </motion.div>
    </>
  );
};

export default CursorEffect;