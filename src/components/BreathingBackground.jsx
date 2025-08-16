import React, { useEffect, useRef, useMemo, useCallback } from 'react';

const BreathingBackground = React.memo(({ theme = 'universal' }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  // Memoized theme-specific colors to prevent recreation on every render
  const gradients = useMemo(() => ({
    universal: [
      'rgba(235, 188, 121, 0.15)',
      'rgba(190, 190, 230, 0.15)',
      'rgba(235, 190, 205, 0.15)'
    ],
    hindu: [
      'rgba(255, 153, 51, 0.15)',
      'rgba(255, 107, 107, 0.15)',
      'rgba(255, 228, 181, 0.15)'
    ],
    islamic: [
      'rgba(34, 139, 34, 0.15)',
      'rgba(50, 205, 50, 0.15)',
      'rgba(144, 238, 144, 0.15)'
    ],
    christian: [
      'rgba(65, 105, 225, 0.15)',
      'rgba(135, 206, 235, 0.15)',
      'rgba(176, 196, 222, 0.15)'
    ],
    sikh: [
      'rgba(255, 215, 0, 0.15)',
      'rgba(255, 183, 0, 0.15)',
      'rgba(255, 228, 181, 0.15)'
    ],
    buddhist: [
      'rgba(255, 165, 0, 0.15)',
      'rgba(210, 105, 30, 0.15)',
      'rgba(255, 228, 181, 0.15)'
    ],
    taoist: [
      'rgba(34, 139, 34, 0.15)',
      'rgba(0, 100, 0, 0.15)',
      'rgba(144, 238, 144, 0.15)'
    ],
    confucian: [
      'rgba(139, 0, 0, 0.15)',
      'rgba(220, 20, 60, 0.15)',
      'rgba(255, 228, 225, 0.15)'
    ],
    jewish: [
      'rgba(0, 0, 128, 0.15)',
      'rgba(25, 25, 112, 0.15)',
      'rgba(176, 196, 222, 0.15)'
    ],
    zoroastrian: [
      'rgba(255, 215, 0, 0.15)',
      'rgba(255, 165, 0, 0.15)',
      'rgba(255, 228, 181, 0.15)'
    ]
  }), []);

  // Memoized animation setup function with performance optimizations
  const setupAnimation = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let time = 0;

    // Set canvas size with device pixel ratio optimization
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
    };

    resizeCanvas();
    
    // Debounced resize handler for better performance
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 100);
    };
    window.addEventListener('resize', handleResize);

    // Pre-calculate values for better performance
    const colors = gradients[theme];
    const centerX1 = canvas.width * 0.3;
    const centerX2 = canvas.width * 0.7;
    const centerY = canvas.height * 0.5;

    // Optimized animation loop with requestAnimationFrame
    const animate = () => {
      time += 0.01;
      
      // Clear canvas efficiently
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Simplified breathing effect with pre-calculated values
      const breathScale = 1 + Math.sin(time * 0.5) * 0.08;
      const radius = 120 * breathScale;

      // Draw only 2 circles with simplified gradients for better performance
      for (let i = 0; i < 2; i++) {
        const x = i === 0 ? centerX1 : centerX2;
        const y = centerY + Math.sin(time + i) * 20;
        
        // Simplified gradient with fewer color stops
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, colors[i]);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [theme, gradients]);

  // Setup animation on mount and theme change
  useEffect(() => {
    const cleanup = setupAnimation();
    return cleanup;
  }, [setupAnimation]);

  return (
    <canvas
      ref={canvasRef}
      className="breathing-background"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  );
});

BreathingBackground.displayName = 'BreathingBackground';

export default BreathingBackground; 