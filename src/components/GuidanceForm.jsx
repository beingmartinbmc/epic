import React, { useState, useMemo } from 'react';

const GuidanceForm = React.memo(({ 
  userInput, 
  setUserInput, 
  selectedText, 
  onTextChange, 
  onSubmit, 
  isLoading 
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showCharacterCount, setShowCharacterCount] = useState(false);

  // Character count calculation
  const characterCount = useMemo(() => userInput.length, [userInput]);
  const maxCharacters = 1000;
  const characterPercentage = (characterCount / maxCharacters) * 100;

  // Get theme-specific placeholder text
  const getPlaceholderText = () => {
    switch (selectedText) {
      case 'BHAGAVAD_GITA':
        return "Share your thoughts, struggles, or questions for guidance from the Bhagavad Gita...";
      case 'VEDAS':
        return "Seek wisdom from the ancient Vedas. What's on your mind?";
      case 'QURAN':
        return "Reflect on your journey and seek guidance from the Holy Quran...";
      case 'BIBLE':
        return "Share your heart and find comfort in the teachings of the Holy Bible...";
      case 'GURU_GRANTH_SAHIB':
        return "Connect with the wisdom of the Guru Granth Sahib. What guidance do you seek?";
      case 'TRIPITAKA':
        return "Meditate on your questions and seek enlightenment from the Tripitaka...";
      default:
        return "Tell me about your feelings, struggles, or what's on your mind for divine guidance...";
    }
  };

  // Get theme-specific icon
  const getThemeIcon = () => {
    switch (selectedText) {
      case 'BHAGAVAD_GITA':
      case 'VEDAS':
        return 'fas fa-om';
      case 'QURAN':
        return 'fas fa-star-and-crescent';
      case 'BIBLE':
        return 'fas fa-cross';
      case 'GURU_GRANTH_SAHIB':
        return '☬';
      case 'TRIPITAKA':
        return 'fas fa-dharmachakra';
      default:
        return 'fas fa-heart';
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value.length <= maxCharacters) {
      setUserInput(value);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
    setShowCharacterCount(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (characterCount === 0) {
      setShowCharacterCount(false);
    }
  };

  return (
    <form id="guidanceForm" onSubmit={onSubmit} className="enhanced-form">
      <div className="form-group">
        <label htmlFor="userMessage" className="form-label">
          <i className={getThemeIcon()}></i> 
          Share your heart's journey
          {showCharacterCount && (
            <span className="character-count">
              {characterCount}/{maxCharacters}
            </span>
          )}
        </label>
        
        <div className="textarea-container" style={{
          position: 'relative',
          transition: 'var(--transition-smooth)'
        }}>
          <textarea
            id="userMessage"
            value={userInput}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={getPlaceholderText()}
            className={`form-control ${isFocused ? 'focused' : ''}`}
            rows="5"
            required
            style={{
              resize: 'vertical',
              minHeight: '120px',
              transition: 'var(--transition-smooth)'
            }}
          />
          
          {/* Character count indicator */}
          {showCharacterCount && (
            <div className="character-indicator" style={{
              position: 'absolute',
              bottom: '10px',
              right: '15px',
              fontSize: '0.8rem',
              color: characterPercentage > 90 ? 'var(--divine-purple)' : 'var(--divine-dark)',
              opacity: 0.7,
              transition: 'var(--transition-smooth)'
            }}>
              {characterCount}
            </div>
          )}
          
          {/* Progress bar for character count */}
          {showCharacterCount && (
            <div className="character-progress" style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: 'rgba(0, 0, 0, 0.1)',
              borderRadius: '0 0 15px 15px',
              overflow: 'hidden'
            }}>
              <div style={{
                width: `${characterPercentage}%`,
                height: '100%',
                background: characterPercentage > 90 
                  ? 'var(--divine-purple)' 
                  : 'var(--divine-gradient)',
                transition: 'width 0.3s ease',
                borderRadius: '0 0 15px 15px'
              }} />
            </div>
          )}
        </div>
        
        {/* Helpful tips */}
        <div className="form-tips" style={{
          marginTop: '0.5rem',
          fontSize: '0.9rem',
          color: 'var(--divine-purple)',
          opacity: 0.8,
          fontStyle: 'italic'
        }}>
          💡 Tip: Be specific about your situation for more personalized guidance
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="selectedText" className="form-label">
          <i className="fas fa-book-open"></i> Choose your sacred source
        </label>
        
        <div className="select-container" style={{
          position: 'relative',
          transition: 'var(--transition-smooth)'
        }}>
          <select
            id="selectedText"
            value={selectedText}
            onChange={onTextChange}
            className="form-select"
            required
          >
            <option value="">Select divine wisdom...</option>
            <option value="BHAGAVAD_GITA">🕉️ Bhagavad Gita</option>
            <option value="VEDAS">📜 The Vedas</option>
            <option value="QURAN">☪️ Holy Quran</option>
            <option value="BIBLE">✝️ Holy Bible</option>
            <option value="GURU_GRANTH_SAHIB">☬ Guru Granth Sahib</option>
            <option value="TRIPITAKA">☸️ The Tripitaka</option>
            <option value="ALL">🌟 All Sacred Texts</option>
          </select>
          
          {/* Custom select arrow */}
          <div className="select-arrow" style={{
            position: 'absolute',
            right: '15px',
            top: '50%',
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
            transition: 'var(--transition-smooth)'
          }}>
            <i className="fas fa-chevron-down" style={{
              color: 'var(--divine-purple)',
              fontSize: '0.9rem'
            }}></i>
          </div>
        </div>
        
        {/* Source description */}
        {selectedText && (
          <div className="source-description" style={{
            marginTop: '0.5rem',
            padding: '0.8rem',
            background: 'rgba(212, 175, 55, 0.1)',
            borderRadius: '8px',
            fontSize: '0.9rem',
            color: 'var(--divine-dark)',
            border: '1px solid rgba(212, 175, 55, 0.2)',
            animation: 'fadeInUp 0.3s ease-out'
          }}>
            <strong>Selected:</strong> {getSourceDescription(selectedText)}
          </div>
        )}
      </div>

      <button 
        type="submit" 
        className={`divine-btn ${isLoading ? 'loading' : ''}`} 
        disabled={isLoading || characterCount === 0}
        style={{
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {isLoading ? (
          <>
            <div className="btn-loading-spinner" style={{
              display: 'inline-block',
              width: '16px',
              height: '16px',
              border: '2px solid transparent',
              borderTop: '2px solid white',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              marginRight: '8px'
            }}></div>
            Seeking divine wisdom...
          </>
        ) : (
          <>
            <i className="fas fa-search"></i> 
            Seek Divine Guidance
          </>
        )}
      </button>
    </form>
  );
});

// Helper function to get source descriptions
const getSourceDescription = (selectedText) => {
  switch (selectedText) {
    case 'BHAGAVAD_GITA':
      return 'The sacred Hindu scripture containing the teachings of Lord Krishna to Arjuna on the battlefield of Kurukshetra.';
    case 'VEDAS':
      return 'The oldest sacred texts of Hinduism, containing hymns, philosophy, and spiritual knowledge.';
    case 'QURAN':
      return 'The holy book of Islam, containing the revelations of Allah to Prophet Muhammad (PBUH).';
    case 'BIBLE':
      return 'The sacred text of Christianity, containing the Old and New Testaments with teachings of Jesus Christ.';
    case 'GURU_GRANTH_SAHIB':
      return 'The central religious scripture of Sikhism, containing the teachings of the Sikh Gurus.';
    case 'TRIPITAKA':
      return 'The sacred texts of Buddhism, containing the teachings of Gautama Buddha and his disciples.';
    case 'ALL':
      return 'Wisdom from all major spiritual traditions and sacred texts.';
    default:
      return '';
  }
};

export default GuidanceForm; 