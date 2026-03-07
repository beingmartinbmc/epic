import React, { useState, useMemo, useCallback } from 'react';

// Helper function to get source descriptions - moved before component to fix hoisting
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
    case 'TAO_TE_CHING':
      return 'The fundamental text of Taoism, containing the teachings of Lao Tzu on harmony, balance, and natural living.';
    case 'ANALECTS_OF_CONFUCIUS':
      return 'The collection of sayings and ideas attributed to Confucius, focusing on ethics, education, and social harmony.';
    case 'DHAMMAPADA':
      return 'A collection of verses from the Buddhist canon, containing the essence of Buddha\'s teachings on wisdom and ethical living.';
    case 'UPANISHADS':
      return 'Ancient Hindu philosophical texts that explore the nature of reality, consciousness, and spiritual knowledge.';
    case 'TALMUD':
      return 'The central text of Rabbinic Judaism, containing discussions, debates, and interpretations of Jewish law and ethics.';
    case 'AVESTA':
      return 'The sacred texts of Zoroastrianism, containing the teachings of Zarathustra on truth, goodness, and ethical living.';
    case 'ALL':
      return 'Wisdom from all major spiritual traditions and sacred texts.';
    default:
      return '';
  }
};

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

  // Memoize character count calculations
  const characterData = useMemo(() => {
    const characterCount = userInput.length;
    const maxCharacters = 1000;
    const characterPercentage = (characterCount / maxCharacters) * 100;
    return { characterCount, maxCharacters, characterPercentage };
  }, [userInput]);

  // Memoize theme-specific placeholder text
  const placeholderText = useMemo(() => {
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
      case 'TAO_TE_CHING':
        return "Seek harmony and balance through the wisdom of the Tao Te Ching...";
      case 'ANALECTS_OF_CONFUCIUS':
        return "Find ethical guidance and wisdom from the Analects of Confucius...";
      case 'DHAMMAPADA':
        return "Meditate on your questions and seek wisdom from the Dhammapada...";
      case 'UPANISHADS':
        return "Explore consciousness and spiritual knowledge through the Upanishads...";
      case 'TALMUD':
        return "Seek wisdom and ethical guidance from the Talmud...";
      case 'AVESTA':
        return "Find truth and goodness through the teachings of the Avesta...";
      default:
        return "Tell me about your feelings, struggles, or what's on your mind for divine guidance...";
    }
  }, [selectedText]);

  // Memoize theme-specific icon
  const themeIcon = useMemo(() => {
    switch (selectedText) {
      case 'BHAGAVAD_GITA':
      case 'VEDAS':
      case 'UPANISHADS':
        return 'fas fa-om';
      case 'QURAN':
        return 'fas fa-star-and-crescent';
      case 'BIBLE':
        return 'fas fa-cross';
      case 'GURU_GRANTH_SAHIB':
        return '☬';
      case 'TRIPITAKA':
      case 'DHAMMAPADA':
        return 'fas fa-dharmachakra';
      case 'TAO_TE_CHING':
        return '☯️';
      case 'ANALECTS_OF_CONFUCIUS':
        return '📚';
      case 'TALMUD':
        return '✡️';
      case 'AVESTA':
        return '🔥';
      default:
        return 'fas fa-heart';
    }
  }, [selectedText]);

  // Memoize source description
  const sourceDescription = useMemo(() => {
    return getSourceDescription(selectedText);
  }, [selectedText]);

  // Memoize event handlers
  const handleInputChange = useCallback((e) => {
    const value = e.target.value;
    if (value.length <= characterData.maxCharacters) {
      setUserInput(value);
    }
  }, [characterData.maxCharacters, setUserInput]);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
    setShowCharacterCount(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
    if (userInput.length === 0) {
      setShowCharacterCount(false);
    }
  }, [userInput.length]);

  return (
    <form id="guidanceForm" onSubmit={onSubmit} className="enhanced-form">
      <div className="form-group">
        <label htmlFor="userMessage" className="form-label">
          <i className={themeIcon}></i> 
          Share your heart's journey
          {showCharacterCount && (
            <span className="character-count">
              {characterData.characterCount}/{characterData.maxCharacters}
            </span>
          )}
        </label>
        
        <div className="textarea-container" style={{
          position: 'relative'
        }}>
          <textarea
            id="userMessage"
            value={userInput}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={placeholderText}
            className={`form-control ${isFocused ? 'focused' : ''}`}
            rows="3"
            required
            style={{
              resize: 'vertical',
              minHeight: '80px',
              transition: 'var(--transition-smooth)'
            }}
          />
          
          {/* Character count indicator */}
          {showCharacterCount && (
            <div className="character-indicator" style={{
              position: 'absolute',
              bottom: '10px',
              right: '12px',
              fontSize: '0.75rem',
              color: characterData.characterPercentage > 90 ? 'var(--divine-purple)' : '#9ca3af',
              transition: 'color 0.2s ease'
            }}>
              {characterData.characterCount}
            </div>
          )}
          
          {/* Progress bar for character count */}
          {showCharacterCount && (
            <div className="character-progress" style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '2px',
              background: 'rgba(0, 0, 0, 0.04)',
              borderRadius: '0 0 var(--radius-md) var(--radius-md)',
              overflow: 'hidden'
            }}>
              <div style={{
                width: `${characterData.characterPercentage}%`,
                height: '100%',
                background: characterData.characterPercentage > 90 
                  ? 'var(--divine-purple)' 
                  : 'var(--divine-gradient)',
                transition: 'width 0.3s ease',
                borderRadius: '0 0 var(--radius-md) var(--radius-md)'
              }} />
            </div>
          )}
        </div>
        
        {/* Helpful tips */}
        <div className="form-tips" style={{
          marginTop: '0.5rem',
          fontSize: '0.8rem',
          color: '#9ca3af',
          fontStyle: 'normal'
        }}>
          💡 Be specific about your situation for more personalized guidance
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="selectedText" className="form-label">
          <i className="fas fa-book-open"></i> Choose your sacred source
        </label>
        
        <div className="select-container" style={{
          position: 'relative'
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
            <option value="UPANISHADS">🧘 Upanishads</option>
            <option value="QURAN">☪️ Holy Quran</option>
            <option value="BIBLE">✝️ Holy Bible</option>
            <option value="TALMUD">✡️ The Talmud</option>
            <option value="GURU_GRANTH_SAHIB">☬ Guru Granth Sahib</option>
            <option value="TRIPITAKA">☸️ The Tripitaka</option>
            <option value="DHAMMAPADA">🌸 The Dhammapada</option>
            <option value="TAO_TE_CHING">☯️ Tao Te Ching</option>
            <option value="ANALECTS_OF_CONFUCIUS">📚 Analects of Confucius</option>
            <option value="AVESTA">🔥 The Avesta</option>
            <option value="ALL">🌟 All Sacred Texts</option>
          </select>
          
          {/* Custom select arrow */}
          <div className="select-arrow" style={{
            position: 'absolute',
            right: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            pointerEvents: 'none'
          }}>
            <i className="fas fa-chevron-down" style={{
              color: '#9ca3af',
              fontSize: '0.75rem'
            }}></i>
          </div>
        </div>
        
        {/* Source description */}
        {selectedText && (
          <div className="source-description" style={{
            marginTop: '0.5rem',
            padding: '0.6rem 0.85rem',
            background: 'rgba(0, 0, 0, 0.02)',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.8rem',
            color: '#6b7280',
            border: '1px solid rgba(0, 0, 0, 0.04)',
            lineHeight: '1.5'
          }}>
            {getSourceDescription(selectedText)}
          </div>
        )}
      </div>

      <button 
        type="submit" 
        className={`divine-btn ${isLoading ? 'loading' : ''}`} 
        disabled={isLoading || characterData.characterCount === 0}
      >
        {isLoading ? (
          <>
            <div className="btn-loading-spinner" style={{
              display: 'inline-block',
              width: '14px',
              height: '14px',
              border: '2px solid rgba(255,255,255,0.3)',
              borderTop: '2px solid white',
              borderRadius: '50%',
              animation: 'spin 0.8s linear infinite',
              marginRight: '8px'
            }}></div>
            Seeking wisdom...
          </>
        ) : (
          <>
            <i className="fas fa-search" style={{ marginRight: '6px', fontSize: '0.85rem' }}></i>
            Seek Divine Guidance
          </>
        )}
      </button>
    </form>
  );
});

export default GuidanceForm; 