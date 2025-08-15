import React, { useEffect, useRef, useMemo, useCallback } from 'react';

const FloatingParticles = React.memo(({ theme = 'universal' }) => {
  const canvasRef = useRef(null);

  // Memoized symbols to prevent recreation on every render
  const symbols = useMemo(() => ({
    universal: ['✨', '🌟'],
    hindu: ['🕉️', '🌸'],
    islamic: ['☪️', '⭐'],
    christian: ['✝️', '🕊️'],
    sikh: ['☬', '🌸'],
    buddhist: ['☸️', '🌸']
  }), []);

  // Memoized Particle class to prevent recreation
  const ParticleClass = useMemo(() => {
    return class Particle {
      constructor(symbolArray) {
        this.symbolArray = symbolArray;
        this.reset();
      }

      reset() {
        this.symbol = this.symbolArray[Math.floor(Math.random() * this.symbolArray.length)];
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.size = Math.random() * 12 + 10;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
        this.opacity = Math.random() * 0.3 + 0.3;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = (Math.random() - 0.5) * 0.4;
      }

      update(canvasWidth, canvasHeight) {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;

        // Wrap around edges with simplified logic
        if (this.x > canvasWidth) this.x = 0;
        if (this.x < 0) this.x = canvasWidth;
        if (this.y > canvasHeight) this.y = 0;
        if (this.y < 0) this.y = canvasHeight;
      }

      draw(ctx) {
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
    };
  }, []);

  // Memoized animation setup function
  const setupAnimation = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create particle pool with memoized class
    const symbolArray = symbols[theme];
    const particlePool = Array.from({ length: 6 }, () => new ParticleClass(symbolArray));

    // Pre-calculate canvas bounds for better performance
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    // Optimized animation loop for 60 FPS
    const animate = () => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      
      // Update and draw particles with minimal calculations
      particlePool.forEach(particle => {
        particle.update(canvasWidth, canvasHeight);
        particle.draw(ctx);
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [theme, symbols, ParticleClass]);

  useEffect(() => {
    const cleanup = setupAnimation();
    return cleanup;
  }, [setupAnimation]);

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
        zIndex: 1,
        opacity: 0.7
      }}
    />
  );
});

FloatingParticles.displayName = 'FloatingParticles';

export default FloatingParticles; 