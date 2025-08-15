import React, { useEffect, useRef, useMemo, useCallback } from 'react';

const BreathingBackground = React.memo(({ theme = 'universal' }) => {
  const canvasRef = useRef(null);

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

  // Memoized animation setup function
  const setupAnimation = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let time = 0;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Pre-calculate some values for better performance
    const colors = gradients[theme];
    const centerX1 = canvas.width * 0.3;
    const centerX2 = canvas.width * 0.7;
    const centerY = canvas.height * 0.5;

    // Animation loop optimized for 60 FPS
    const animate = () => {
      time += 0.01;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Simple breathing effect with pre-calculated values
      const breathScale = 1 + Math.sin(time * 0.5) * 0.08;
      const radius = 120 * breathScale;

      // Draw only 2 circles with simplified gradients
      for (let i = 0; i < 2; i++) {
        const x = i === 0 ? centerX1 : centerX2;
        const y = centerY + Math.sin(time + i) * 20;
        
        // Simplified gradient with fewer color stops
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, colors[0]);
        gradient.addColorStop(0.5, colors[1]);
        gradient.addColorStop(1, colors[2]);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [theme, gradients]);

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
        zIndex: 0,
        opacity: 0.8
      }}
    />
  );
});

BreathingBackground.displayName = 'BreathingBackground';

export default BreathingBackground; 