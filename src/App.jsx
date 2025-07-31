import React, { useState } from 'react';
import Header from './components/Header';
import GuidanceForm from './components/GuidanceForm';
import ResponseSection from './components/ResponseSection';
import Footer from './components/Footer';
import { useGuidance } from './hooks/useGuidance';
import { useTheme } from './hooks/useTheme';
import './styles.css';

function App() {
  const [selectedText, setSelectedText] = useState('ALL');
  const [userInput, setUserInput] = useState('');

  const { isLoading, response, seekGuidance } = useGuidance();
  useTheme(selectedText);

  // Handle text selection change
  const handleTextChange = (event) => {
    setSelectedText(event.target.value);
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    await seekGuidance(userInput, selectedText);
  };

  return (
    <>
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