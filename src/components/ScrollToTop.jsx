import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="scroll-to-top"
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(15px)',
        border: '1px solid rgba(212, 175, 55, 0.3)',
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        animation: 'fadeInUp 0.3s ease-out'
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = 'translateY(-5px) scale(1.1)';
        e.target.style.boxShadow = '0 15px 35px rgba(212, 175, 55, 0.3)';
        e.target.style.background = 'rgba(255, 255, 255, 0.95)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'translateY(0) scale(1)';
        e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
        e.target.style.background = 'rgba(255, 255, 255, 0.9)';
      }}
      aria-label="Scroll to top"
    >
      <i 
        className="fas fa-chevron-up" 
        style={{
          color: 'var(--divine-gold)',
          fontSize: '1.2rem',
          transition: 'transform 0.3s ease'
        }}
      />
      
      {/* Tooltip */}
      <div style={{
        position: 'absolute',
        bottom: '100%',
        right: '50%',
        transform: 'translateX(50%)',
        background: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        padding: '0.5rem 0.8rem',
        borderRadius: '6px',
        fontSize: '0.8rem',
        whiteSpace: 'nowrap',
        opacity: 0,
        pointerEvents: 'none',
        transition: 'opacity 0.3s ease',
        marginBottom: '8px'
      }}
      onMouseEnter={(e) => {
        e.target.style.opacity = '1';
      }}
      onMouseLeave={(e) => {
        e.target.style.opacity = '0';
      }}
      >
        Scroll to top
        <div style={{
          position: 'absolute',
          top: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          border: '4px solid transparent',
          borderTopColor: 'rgba(0, 0, 0, 0.8)'
        }} />
      </div>
    </button>
  );
};

export default ScrollToTop; 