import React, { useEffect, useRef, useCallback } from 'react';

const BreathingBackground = ({ theme = 'universal' }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const lastTimeRef = useRef(0);

  // Theme-specific gradient colors
  const gradients = {
    universal: [
      'rgba(235, 188, 121, 0.3)',
      'rgba(210, 235, 210, 0.2)',
      'rgba(190, 190, 230, 0.3)',
      'rgba(170, 198, 235, 0.2)',
      'rgba(235, 190, 205, 0.3)'
    ],
    hindu: [
      'rgba(255, 153, 51, 0.3)',
      'rgba(255, 107, 107, 0.2)',
      'rgba(78, 205, 196, 0.3)',
      'rgba(255, 228, 181, 0.2)'
    ],
    islamic: [
      'rgba(34, 139, 34, 0.3)',
      'rgba(0, 100, 0, 0.2)',
      'rgba(50, 205, 50, 0.3)',
      'rgba(144, 238, 144, 0.2)'
    ],
    christian: [
      'rgba(65, 105, 225, 0.3)',
      'rgba(25, 25, 112, 0.2)',
      'rgba(135, 206, 235, 0.3)',
      'rgba(176, 196, 222, 0.2)'
    ],
    sikh: [
      'rgba(255, 215, 0, 0.3)',
      'rgba(218, 165, 32, 0.2)',
      'rgba(255, 183, 0, 0.3)',
      'rgba(255, 228, 181, 0.2)'
    ],
    buddhist: [
      'rgba(255, 165, 0, 0.3)',
      'rgba(139, 69, 19, 0.2)',
      'rgba(210, 105, 30, 0.3)',
      'rgba(255, 228, 181, 0.2)'
    ]
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
    let time = 0;
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

    // Performance optimization: Reduced animation complexity
    const animate = (currentTime) => {
      if (!isVisible) return;

      // Throttle to 30 FPS for better performance
      if (currentTime - lastTimeRef.current < 33) {
        animationId = requestAnimationFrame(animate);
        return;
      }
      lastTimeRef.current = currentTime;

      time += 0.005; // Reduced speed for better performance
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Simplified breathing effect
      const breathScale = 1 + Math.sin(time * 0.3) * 0.05; // Reduced amplitude
      const breathOpacity = 0.3 + Math.sin(time * 0.3) * 0.05;

      // Reduced number of circles for better performance
      for (let i = 0; i < 2; i++) { // Reduced from 3 to 2
        const centerX = canvas.width * (0.3 + i * 0.4);
        const centerY = canvas.height * 0.5;
        const radius = 150 * breathScale * (1 + i * 0.2); // Reduced size

        // Create gradient
        const gradient = ctx.createRadialGradient(
          centerX, centerY, 0,
          centerX, centerY, radius
        );

        const colors = gradients[theme];
        colors.forEach((color, index) => {
          const opacity = parseFloat(color.match(/[\d.]+\)/)[0]) * breathOpacity;
          const adjustedColor = color.replace(/[\d.]+\)/, `${opacity})`);
          gradient.addColorStop(index / (colors.length - 1), adjustedColor);
        });

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.fill();
      }

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
        zIndex: -2
      }}
    />
  );
};

export default React.memo(BreathingBackground); 