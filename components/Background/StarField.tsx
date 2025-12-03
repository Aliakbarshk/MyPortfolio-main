import React, { useEffect, useRef } from 'react';

/**
 * StarField Component (Enhanced with Sci-Fi & Batman Elements)
 * 
 * Renders:
 * 1. Starfield background
 * 2. Moving perspective grid (Sci-Fi floor)
 * 3. Flying Bats (Atmospheric element)
 */
const StarField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    
    // Entity Interfaces
    interface Star {
      x: number;
      y: number;
      size: number;
      speed: number;
      brightness: number;
    }
    
    interface Bat {
      x: number;
      y: number;
      size: number;
      speed: number;
      flapOffset: number;
    }

    let stars: Star[] = [];
    let bats: Bat[] = [];
    let gridOffset = 0;

    // Resize canvas to fill the window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initEntities();
    };

    // Initialize entities
    const initEntities = () => {
      // Init Stars
      stars = [];
      const numStars = Math.floor((canvas.width * canvas.height) / 4000);
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2,
          speed: Math.random() * 0.2 + 0.05,
          brightness: Math.random(),
        });
      }

      // Init Bats (Fewer bats for subtlety)
      bats = [];
      const numBats = Math.floor(canvas.width / 300); 
      for (let i = 0; i < numBats; i++) {
        bats.push({
          x: Math.random() * canvas.width,
          y: Math.random() * (canvas.height * 0.6), // Keep bats in upper 60%
          size: Math.random() * 0.5 + 0.5, // Scale
          speed: Math.random() * 1 + 0.5,
          flapOffset: Math.random() * 100,
        });
      }
    };

    const drawBat = (bat: Bat, time: number) => {
      ctx.save();
      ctx.translate(bat.x, bat.y);
      ctx.scale(bat.size, bat.size);
      
      // Flap animation
      const flapY = Math.sin(time * 0.1 + bat.flapOffset) * 5;

      ctx.fillStyle = '#1a1a1a'; // Dark bat color
      ctx.beginPath();
      // Simple Bat Silhouette
      ctx.moveTo(0, 0);
      ctx.quadraticCurveTo(10, -10 + flapY, 20, 0); // Right wing top
      ctx.quadraticCurveTo(10, 5, 0, 10); // Right wing bottom
      ctx.quadraticCurveTo(-10, 5, -20, 0); // Left wing bottom
      ctx.quadraticCurveTo(-10, -10 + flapY, 0, 0); // Left wing top
      ctx.fill();
      ctx.restore();
    };

    const drawGrid = () => {
      const h = canvas.height;
      const w = canvas.width;
      
      ctx.save();
      // Grid fades out towards the top
      const gradient = ctx.createLinearGradient(0, h * 0.5, 0, h);
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
      gradient.addColorStop(1, 'rgba(50, 50, 80, 0.2)');
      
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1;

      // Vertical perspective lines
      const fov = 300;
      const centerX = w / 2;
      const centerY = h / 2;
      
      // Moving Horizontal Lines (Floor effect)
      for (let i = 0; i < 20; i++) {
         const y = h - ((i * 40 + gridOffset) % (h / 2));
         // Only draw bottom half
         if (y > centerY) {
             ctx.beginPath();
             ctx.moveTo(0, y);
             ctx.lineTo(w, y);
             ctx.stroke();
         }
      }

      // Angled Vertical Lines
      for (let i = -10; i <= 10; i++) {
        ctx.beginPath();
        // Simple perspective approximation
        const x1 = centerX + i * 100; // Bottom spread
        const x2 = centerX + i * 10;  // Horizon convergence (vanishing point)
        
        ctx.moveTo(x1, h);
        ctx.lineTo(x2, centerY);
        ctx.stroke();
      }

      ctx.restore();
    };

    // Main animation loop
    let time = 0;
    const draw = () => {
      time++;
      // Clear with slight trail for motion blur feel? No, standard clear.
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 1. Draw Stars
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness})`;
        ctx.fill();

        star.brightness += (Math.random() - 0.5) * 0.05;
        if (star.brightness < 0) star.brightness = 0;
        if (star.brightness > 1) star.brightness = 1;

        star.y -= star.speed;
        if (star.y < 0) {
          star.y = canvas.height;
          star.x = Math.random() * canvas.width;
        }
      });

      // 2. Draw Sci-Fi Grid
      gridOffset += 0.5;
      drawGrid();

      // 3. Draw Bats
      bats.forEach((bat) => {
        drawBat(bat, time);
        bat.x += bat.speed;
        bat.y += Math.sin(time * 0.05) * 0.5; // Slight bobbing

        // Reset if off screen
        if (bat.x > canvas.width + 50) {
          bat.x = -50;
          bat.y = Math.random() * (canvas.height * 0.6);
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
};

export default StarField;