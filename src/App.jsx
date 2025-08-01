import React, { useState, useCallback, useMemo, useEffect } from 'react';
import Header from './components/Header';
import GuidanceForm from './components/GuidanceForm';
import ResponseSection from './components/ResponseSection';
import Footer from './components/Footer';
import BreathingBackground from './components/BreathingBackground';
import FloatingParticles from './components/FloatingParticles';
import SpiritualLoader from './components/SpiritualLoader';
import NotificationToast from './components/NotificationToast';
import ScrollToTop from './components/ScrollToTop';
import { useGuidance } from './hooks/useGuidance';
import { useTheme } from './hooks/useTheme';
import './styles.css';

function App() {
  const [selectedText, setSelectedText] = useState('ALL');
  const [userInput, setUserInput] = useState('');
  const [notifications, setNotifications] = useState([]);
  const [showBackgroundEffects, setShowBackgroundEffects] = useState(true);

  const { isLoading, response, seekGuidance } = useGuidance();
  useTheme(selectedText);

  // Performance optimization: Memoize theme name
  const themeName = useMemo(() => {
    switch (selectedText) {
      case 'BHAGAVAD_GITA':
      case 'VEDAS':
        return 'hindu';
      case 'QURAN':
        return 'islamic';
      case 'BIBLE':
        return 'christian';
      case 'GURU_GRANTH_SAHIB':
        return 'sikh';
      case 'TRIPITAKA':
        return 'buddhist';
      default:
        return 'universal';
    }
  }, [selectedText]);

  // Performance optimization: Toggle background effects based on performance
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setShowBackgroundEffects(false);
      } else {
        // Check if device is low-end
        const isLowEndDevice = navigator.hardwareConcurrency <= 4 || 
                              navigator.deviceMemory <= 4;
        setShowBackgroundEffects(!isLowEndDevice);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Initial check
    const isLowEndDevice = navigator.hardwareConcurrency <= 4 || 
                          navigator.deviceMemory <= 4;
    setShowBackgroundEffects(!isLowEndDevice);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

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

  // Performance optimization: Memoize background components
  const backgroundComponents = useMemo(() => {
    if (!showBackgroundEffects) return null;
    
    return (
      <>
        <BreathingBackground theme={themeName} />
        <FloatingParticles theme={themeName} />
      </>
    );
  }, [showBackgroundEffects, themeName]);

  return (
    <>
      {/* Visual Background Components - Conditionally rendered for performance */}
      {backgroundComponents}
      
      {/* Spiritual Loader Overlay */}
      <SpiritualLoader isLoading={isLoading} theme={themeName} />
      
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
      
      {/* Main Application Container */}
      <div className="divine-background">
        <div className="divine-container">
          <Header selectedText={selectedText} />
          
          <GuidanceForm
            userInput={userInput}
            setUserInput={setUserInput}
            selectedText={selectedText}
            onTextChange={handleTextChange}
            onSubmit={handleSubmit}
            isLoading={isLoading}
          />
          
          <ResponseSection response={response} isLoading={isLoading} />
          
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App; 