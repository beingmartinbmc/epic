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
        bottom: '24px',
        right: '24px',
        width: '40px',
        height: '40px',
        borderRadius: '12px',
        background: '#fff',
        border: '1px solid rgba(0, 0, 0, 0.08)',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
        cursor: 'pointer',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.2s ease',
        animation: 'fadeInUp 0.2s ease-out'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
      }}
      aria-label="Scroll to top"
    >
      <i 
        className="fas fa-chevron-up" 
        style={{
          color: '#6b7280',
          fontSize: '0.85rem',
          transition: 'color 0.2s ease'
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