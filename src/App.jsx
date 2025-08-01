import React, { useState, useCallback } from 'react';
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

  const { isLoading, response, seekGuidance } = useGuidance();
  useTheme(selectedText);

  // Get theme name for visual components
  const getThemeName = useCallback(() => {
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

  // Handle text selection change - memoized with useCallback
  const handleTextChange = useCallback((event) => {
    setSelectedText(event.target.value);
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
  }, [userInput, selectedText, seekGuidance]);

  // Notification management
  const addNotification = useCallback((message, type = 'info') => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message, type }]);
  }, []);

  const removeNotification = useCallback((id) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  }, []);

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
      <div className="divine-container theme-universal">
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

          <ResponseSection response={response} isLoading={isLoading} />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App; 