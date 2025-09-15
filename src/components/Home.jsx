import React, { useState, useCallback, Suspense, lazy } from 'react';
import Header from './Header';
import GuidanceForm from './GuidanceForm';
import Footer from './Footer';
import BreathingBackground from './BreathingBackground';
import FloatingParticles from './FloatingParticles';
import SpiritualLoader from './SpiritualLoader';
import NotificationToast from './NotificationToast';
import ScrollToTop from './ScrollToTop';
import { useGuidance } from '../hooks/useGuidance';
import { useTheme } from '../hooks/useTheme';
import '../styles/index.css';

// Lazy load heavy components
const ResponseSection = lazy(() => import('./ResponseSection'));

// Loading fallback component
const ResponseSectionFallback = () => (
  <div className="response-section-loading">
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

function Home() {
  const [selectedText, setSelectedText] = useState('ALL');
  const [userInput, setUserInput] = useState('');
  const [notifications, setNotifications] = useState([]);

  const { isLoading, response, seekGuidance } = useGuidance();
  useTheme(selectedText);

  // Get theme name for visual components
  const getThemeName = useCallback(() => {
    switch (selectedText) {
      case 'BHAGAVAD_GITA':
      case 'VEDAS':
      case 'UPANISHADS':
        return 'hindu';
      case 'QURAN':
        return 'islamic';
      case 'BIBLE':
        return 'christian';
      case 'GURU_GRANTH_SAHIB':
        return 'sikh';
      case 'TRIPITAKA':
      case 'DHAMMAPADA':
        return 'buddhist';
      case 'TAO_TE_CHING':
        return 'taoist';
      case 'ANALECTS_OF_CONFUCIUS':
        return 'confucian';
      case 'TALMUD':
        return 'jewish';
      case 'AVESTA':
        return 'zoroastrian';
      default:
        return 'universal';
    }
  }, [selectedText]);

  // Handle text selection change - memoized with useCallback
  const handleTextChange = useCallback((event) => {
    setSelectedText(event.target.value);
  }, []);

  // Notification management - moved before handleSubmit to fix circular dependency
  const addNotification = useCallback((message, type = 'info') => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message, type }]);
  }, []);

  const removeNotification = useCallback((id) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  }, []);

  // Handle form submission - memoized with useCallback
  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    
    if (!userInput.trim()) {
      addNotification('Please enter your question or concern', 'warning');
      return;
    }

    // Check if user input has at least 5 words
    const wordCount = userInput.trim().split(/\s+/).filter(word => word.length > 0).length;
    if (wordCount < 5) {
      addNotification('Please share more details. At least 5 words are needed to provide meaningful guidance.', 'warning');
      return;
    }

    if (!selectedText) {
      addNotification('Please select a sacred source', 'warning');
      return;
    }

    try {
      await seekGuidance(userInput, selectedText);
      addNotification('Divine guidance received successfully!', 'success');
    } catch (error) {
      addNotification('Failed to receive guidance. Please try again.', 'error');
    }
  }, [userInput, selectedText, seekGuidance, addNotification]);

  return (
    <>
      {/* Visual Background Components */}
      <BreathingBackground theme={getThemeName()} />
      <FloatingParticles theme={getThemeName()} />
      
      {/* Spiritual Loader Overlay */}
      <SpiritualLoader isLoading={isLoading} theme={getThemeName()} />
      
      {/* Notification Toasts */}
      {notifications.map((notification, index) => (
        <NotificationToast
          key={notification.id}
          message={notification.message}
          type={notification.type}
          onClose={() => removeNotification(notification.id)}
          style={{
            top: `${20 + index * 80}px`
          }}
        />
      ))}
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
      
      <div className="divine-background"></div>
      <div className="divine-container">
        <Header selectedText={selectedText} />

        <div className="divine-content">
          <GuidanceForm
            userInput={userInput}
            setUserInput={setUserInput}
            selectedText={selectedText}
            onTextChange={handleTextChange}
            onSubmit={handleSubmit}
            isLoading={isLoading}
          />

          {/* Lazy loaded ResponseSection with Suspense */}
          <Suspense fallback={<ResponseSectionFallback />}>
            <ResponseSection response={response} isLoading={isLoading} selectedText={selectedText} />
          </Suspense>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
