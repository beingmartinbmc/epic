import React, { useEffect, useRef } from 'react';

const BreathingBackground = ({ theme = 'universal' }) => {
  const canvasRef = useRef(null);

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

  useEffect(() => {
    const canvas = canvasRef.current;
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

    // Animation loop
    const animate = () => {
      time += 0.01;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create breathing effect
      const breathScale = 1 + Math.sin(time * 0.5) * 0.1;
      const breathOpacity = 0.3 + Math.sin(time * 0.5) * 0.1;

      // Draw multiple gradient circles with breathing effect
      for (let i = 0; i < 3; i++) {
        const centerX = canvas.width * (0.3 + i * 0.2);
        const centerY = canvas.height * (0.4 + Math.sin(time + i) * 0.1);
        const radius = 200 * breathScale * (1 + i * 0.3);

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

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [theme]);

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
        zIndex: 0
      }}
    />
  );
};

export default BreathingBackground; 