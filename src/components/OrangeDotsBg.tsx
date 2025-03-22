import React, { useEffect, useRef } from 'react';

interface Dot {
  x: number;
  y: number;
  z: number;
  size: number;
  speedX: number;
  speedY: number;
  speedZ: number;
}

const OrangeDotsBg: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Create more dots for a richer animation
    const dots = Array.from({ length: 100 }, () => {
      // Start all dots from the center
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const angle = Math.random() * Math.PI * 2; // Random angle
      const distance = Math.random() * 100; // Random distance from center
      
      return {
        x: centerX + Math.cos(angle) * distance,
        y: centerY + Math.sin(angle) * distance,
        z: Math.random() * 1000,
        size: Math.random() * 5 + 3, // Larger dots
        speedX: (Math.random() - 0.5) * 1.2, // Faster movement
        speedY: (Math.random() - 0.5) * 1.2,
        speedZ: Math.random() * 0.2 + 0.1
      };
    });
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw dots
      dots.forEach(dot => {
        // Update position with smoother movement
        dot.x += dot.speedX;
        dot.y += dot.speedY;
        dot.z -= dot.speedZ;
        
        // Reset if dot is too close or out of screen
        if (dot.z <= 0 || dot.x < 0 || dot.x > canvas.width || dot.y < 0 || dot.y > canvas.height) {
          dot.z = 1000;
          // Reset to center with random angle
          const centerX = canvas.width / 2;
          const centerY = canvas.height / 2;
          const angle = Math.random() * Math.PI * 2;
          const distance = Math.random() * 100;
          dot.x = centerX + Math.cos(angle) * distance;
          dot.y = centerY + Math.sin(angle) * distance;
        }
        
        // Calculate size based on z position with enhanced depth effect
        const scale = 1000 / (1000 + dot.z);
        const size = dot.size * scale * 6; // Larger size multiplier
        
        // Draw dot with enhanced gradient
        const gradient = ctx.createRadialGradient(
          dot.x, dot.y, 0,
          dot.x, dot.y, size
        );
        
        // Enhanced opacity and color variation with brighter colors
        const opacity = Math.min(1, scale * 4); // Increased opacity
        const hue = 24 + (Math.random() - 0.5) * 3; // Less color variation for more consistent orange
        gradient.addColorStop(0, `hsla(${hue}, 100%, 70%, ${opacity})`); // Increased lightness
        gradient.addColorStop(1, `hsla(${hue}, 100%, 70%, 0)`);
        
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

export default OrangeDotsBg;
