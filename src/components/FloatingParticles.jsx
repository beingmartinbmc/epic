import React, { useEffect, useRef, useCallback } from 'react';

const FloatingParticles = ({ theme = 'universal' }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const lastTimeRef = useRef(0);

  // Spiritual symbols for different themes
  const symbols = {
    universal: ['🕉️', '☮️', '✨', '🌟', '💫'],
    hindu: ['🕉️', '🌸', '🌺', '🌼', '✨'],
    islamic: ['☪️', '⭐', '🌙', '✨', '🌟'],
    christian: ['✝️', '🕊️', '⭐', '✨', '🌟'],
    sikh: ['☬', '🌸', '✨', '🌟', '💫'],
    buddhist: ['☸️', '🌸', '🌺', '✨', '🌟']
  };

  // Performance optimization: Throttled resize handler
  const throttledResize = useCallback(() => {
    if (animationRef.current) {
      clearTimeout(animationRef.current);
    }
    animationRef.current = setTimeout(() => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    }, 100);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let isVisible = true;

    // Performance optimization: Check if tab is visible
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
      if (!isVisible) {
        cancelAnimationFrame(animationId);
      }
    };

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', throttledResize);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Optimized Particle class
    class Particle {
      constructor() {
        this.symbol = symbols[theme][Math.floor(Math.random() * symbols[theme].length)];
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 15 + 8; // Reduced size range
        this.speedX = Math.random() * 0.3 - 0.15; // Reduced speed
        this.speedY = Math.random() * 0.3 - 0.15;
        this.opacity = Math.random() * 0.4 + 0.2; // Reduced opacity
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 0.3 - 0.15; // Reduced rotation speed
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;

        // Wrap around edges
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.font = `${this.size}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(this.symbol, 0, 0);
        ctx.restore();
      }
    }

    // Reduced particle count for better performance
    const particles = Array.from({ length: 8 }, () => new Particle()); // Reduced from 15 to 8

    // Performance optimization: Throttled animation loop
    const animate = (currentTime) => {
      if (!isVisible) return;

      // Throttle to 30 FPS for better performance
      if (currentTime - lastTimeRef.current < 33) {
        animationId = requestAnimationFrame(animate);
        return;
      }
      lastTimeRef.current = currentTime;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      window.removeEventListener('resize', throttledResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationId);
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, [theme, throttledResize]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1
      }}
    />
  );
};

export default React.memo(FloatingParticles); 