import React, { useState, useEffect } from 'react';

const SpiritualLoader = ({ isLoading, theme = 'universal' }) => {
  const [currentSymbol, setCurrentSymbol] = useState(0);
  const [progress, setProgress] = useState(0);

  // Spiritual symbols for different themes
  const symbols = {
    universal: ['🕉️', '☮️', '✨', '🌟', '💫'],
    hindu: ['🕉️', '🌸', '🌺', '🌼', '✨'],
    islamic: ['☪️', '⭐', '🌙', '✨', '🌟'],
    christian: ['✝️', '🕊️', '⭐', '✨', '🌟'],
    sikh: ['☬', '🌸', '✨', '🌟', '💫'],
    buddhist: ['☸️', '🌸', '🌺', '✨', '🌟']
  };

  // Loading messages for different themes
  const messages = {
    universal: [
      'Seeking divine wisdom...',
      'Connecting with sacred knowledge...',
      'Meditating on ancient texts...',
      'Channeling spiritual guidance...',
      'Awakening inner wisdom...'
    ],
    hindu: [
      'Meditating on the Bhagavad Gita...',
      'Seeking guidance from the Vedas...',
      'Connecting with divine consciousness...',
      'Awakening the Atman...',
      'Embracing Dharma...'
    ],
    islamic: [
      'Reflecting on the Holy Quran...',
      'Seeking Allah\'s guidance...',
      'Meditating on divine wisdom...',
      'Connecting with spiritual truth...',
      'Embracing Islamic teachings...'
    ],
    christian: [
      'Reflecting on the Holy Bible...',
      'Seeking God\'s guidance...',
      'Meditating on divine wisdom...',
      'Connecting with spiritual truth...',
      'Embracing Christian teachings...'
    ],
    sikh: [
      'Meditating on the Guru Granth Sahib...',
      'Seeking guidance from the Gurus...',
      'Connecting with divine wisdom...',
      'Awakening spiritual consciousness...',
      'Embracing Sikh teachings...'
    ],
    buddhist: [
      'Meditating on the Tripitaka...',
      'Seeking enlightenment...',
      'Connecting with Buddha\'s wisdom...',
      'Awakening mindfulness...',
      'Embracing the Eightfold Path...'
    ]
  };

  useEffect(() => {
    if (!isLoading) {
      setProgress(0);
      return;
    }

    const symbolInterval = setInterval(() => {
      setCurrentSymbol(prev => (prev + 1) % symbols[theme].length);
    }, 800);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) return prev;
        return prev + Math.random() * 10;
      });
    }, 200);

    return () => {
      clearInterval(symbolInterval);
      clearInterval(progressInterval);
    };
  }, [isLoading, theme, symbols]);

  if (!isLoading) return null;

  return (
    <div className="spiritual-loader" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(255, 255, 255, 0.95)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
      backdropFilter: 'blur(10px)',
      animation: 'fadeIn 0.3s ease-out'
    }}>
      {/* Animated background circles */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'conic-gradient(from 0deg, transparent, var(--divine-gold), transparent)',
        animation: 'rotate 3s linear infinite',
        opacity: 0.1
      }} />
      
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'conic-gradient(from 180deg, transparent, var(--divine-purple), transparent)',
        animation: 'rotate 2s linear infinite reverse',
        opacity: 0.1
      }} />

      {/* Main loader content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        background: 'rgba(255, 255, 255, 0.8)',
        padding: '3rem',
        borderRadius: '20px',
        backdropFilter: 'blur(15px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
        animation: 'loaderFloat 3s ease-in-out infinite'
      }}>
        {/* Symbol container */}
        <div style={{
          position: 'relative',
          marginBottom: '2rem'
        }}>
          <div className="loader-symbol" style={{
            fontSize: '4rem',
            animation: 'spiritualFloat 2s ease-in-out infinite',
            filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))'
          }}>
            {symbols[theme][currentSymbol]}
          </div>
          
          {/* Orbiting particles */}
          {[0, 1, 2].map(i => (
            <div key={i} style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'var(--divine-gold)',
              transform: `translate(-50%, -50%) rotate(${i * 120}deg) translateY(-60px)`,
              animation: `orbit ${2 + i * 0.5}s linear infinite`,
              opacity: 0.6
            }} />
          ))}
        </div>
        
        {/* Progress bar */}
        <div style={{
          width: '200px',
          height: '4px',
          background: 'rgba(0, 0, 0, 0.1)',
          borderRadius: '2px',
          margin: '0 auto 1.5rem',
          overflow: 'hidden',
          position: 'relative'
        }}>
          <div style={{
            width: `${progress}%`,
            height: '100%',
            background: 'var(--divine-gradient)',
            borderRadius: '2px',
            transition: 'width 0.3s ease',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
              animation: 'shimmer 1.5s ease-in-out infinite'
            }} />
          </div>
        </div>
        
        {/* Loading text */}
        <div className="loader-text" style={{
          fontSize: '1.5rem',
          color: 'var(--divine-dark)',
          fontWeight: 500,
          textAlign: 'center',
          animation: 'spiritualPulse 2s ease-in-out infinite',
          marginBottom: '0.5rem'
        }}>
          {messages[theme][currentSymbol % messages[theme].length]}
        </div>
        
        {/* Subtitle */}
        <div className="loader-subtitle" style={{
          fontSize: '1rem',
          color: 'var(--divine-purple)',
          opacity: 0.8,
          fontStyle: 'italic'
        }}>
          {Math.round(progress)}% complete
        </div>
      </div>
    </div>
  );
};

export default SpiritualLoader; 