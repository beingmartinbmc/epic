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
    buddhist: ['☸️', '🌸', '🌺', '✨', '🌟'],
    taoist: ['☯️', '🌿', '🍃', '🌱', '✨'],
    confucian: ['📚', '🏛️', '🎓', '📖', '✨'],
    jewish: ['✡️', '🕯️', '📜', '🕍', '✨'],
    zoroastrian: ['🔥', '☀️', '⭐', '🌟', '✨']
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
    ],
    taoist: [
      'Following the Tao...',
      'Embracing natural harmony...',
      'Seeking effortless action...',
      'Connecting with the Way...',
      'Awakening to simplicity...'
    ],
    confucian: [
      'Studying the Analects...',
      'Cultivating virtue...',
      'Seeking moral wisdom...',
      'Connecting with ancient teachings...',
      'Embracing ethical living...'
    ],
    jewish: [
      'Studying the Talmud...',
      'Seeking Jewish wisdom...',
      'Connecting with ancient teachings...',
      'Embracing ethical living...',
      'Awakening to community values...'
    ],
    zoroastrian: [
      'Reflecting on the Avesta...',
      'Seeking truth and goodness...',
      'Connecting with ancient wisdom...',
      'Embracing ethical dualism...',
      'Awakening to environmental stewardship...'
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
      background: 'rgba(250, 248, 244, 0.92)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
      backdropFilter: 'blur(12px)',
      animation: 'fadeIn 0.2s ease-out'
    }}>
      {/* Subtle animated ring */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        border: '2px solid transparent',
        borderTopColor: 'rgba(102, 126, 234, 0.15)',
        animation: 'rotate 4s linear infinite'
      }} />

      {/* Main loader content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        background: 'rgba(255, 255, 255, 0.85)',
        padding: '2.5rem 3rem',
        borderRadius: 'var(--radius-xl)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(0, 0, 0, 0.06)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)'
      }}>
        {/* Symbol container */}
        <div style={{
          position: 'relative',
          marginBottom: '1.5rem'
        }}>
          <div className="loader-symbol" style={{
            fontSize: '3rem',
            animation: 'spiritualFloat 2.5s ease-in-out infinite',
            filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.06))'
          }}>
            {symbols[theme][currentSymbol]}
          </div>
        </div>
        
        {/* Progress bar */}
        <div style={{
          width: '160px',
          height: '3px',
          background: 'rgba(0, 0, 0, 0.06)',
          borderRadius: '2px',
          margin: '0 auto 1.25rem',
          overflow: 'hidden'
        }}>
          <div style={{
            width: `${progress}%`,
            height: '100%',
            background: 'var(--divine-gradient)',
            borderRadius: '2px',
            transition: 'width 0.3s ease'
          }} />
        </div>
        
        {/* Loading text */}
        <div className="loader-text" style={{
          fontSize: '1rem',
          color: 'var(--divine-dark)',
          fontWeight: 500,
          textAlign: 'center',
          marginBottom: '0.35rem',
          fontFamily: 'var(--font-body)'
        }}>
          {messages[theme][currentSymbol % messages[theme].length]}
        </div>
        
        {/* Subtitle */}
        <div className="loader-subtitle" style={{
          fontSize: '0.8rem',
          color: '#9ca3af',
          fontFamily: 'var(--font-body)'
        }}>
          {Math.round(progress)}%
        </div>
      </div>
    </div>
  );
};

export default SpiritualLoader; 