import { useState, useCallback, useRef } from 'react';
import prompts from '../prompts.js';

const API_CONFIG = {
  OPENAI_PROXY_URL: 'https://epic-backend-myxdxwn4m-beingmartinbmcs-projects.vercel.app/api/openai-proxy'
};

// Prompt mapping for different sacred texts
const PROMPT_MAPPING = {
  'BHAGAVAD_GITA': prompts.userPrompts.bhagavadGita,
  'VEDAS': prompts.userPrompts.vedas,
  'QURAN': prompts.userPrompts.quran,
  'BIBLE': prompts.userPrompts.bible,
  'GURU_GRANTH_SAHIB': prompts.userPrompts.guruGranthSahib,
  'TRIPITAKA': prompts.userPrompts.tripitaka,
  'TAO_TE_CHING': prompts.userPrompts.taoTeChing,
  'ANALECTS_OF_CONFUCIUS': prompts.userPrompts.analectsOfConfucius,
  'DHAMMAPADA': prompts.userPrompts.dhammapada,
  'UPANISHADS': prompts.userPrompts.upanishads,
  'TALMUD': prompts.userPrompts.talmud,
  'AVESTA': prompts.userPrompts.avesta,
  'ALL': prompts.userPrompts.allTexts
};

// Debounce utility function
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const useGuidance = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState('');
  const abortControllerRef = useRef(null);

  const seekGuidance = useCallback(async (userInput, selectedText) => {
    if (!userInput.trim()) return;

    // Cancel any ongoing request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    // Create new abort controller
    abortControllerRef.current = new AbortController();

    setIsLoading(true);
    setResponse('');

    try {
      const response = await fetch(API_CONFIG.OPENAI_PROXY_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            {
              role: 'system',
              content: prompts.system.prompt
            },
            {
              role: 'user',
              content: `${PROMPT_MAPPING[selectedText]}\n\nUser's situation: ${userInput}`
            }
          ],
          userInput: userInput, // Send raw input for language detection
          selectedText: selectedText
        }),
        signal: abortControllerRef.current.signal
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const content = data.choices[0].message.content;
      
      // Set the raw response - processing will be done in the component
      setResponse(content);
    } catch (error) {
      if (error.name === 'AbortError') {
        // Request was cancelled, don't show error
        return;
      }
      console.error('Error:', error);
      setResponse('Sorry, there was an error processing your request. Please try again.');
    } finally {
      setIsLoading(false);
      abortControllerRef.current = null;
    }
  }, []);

  // Debounced version for real-time features
  const debouncedSeekGuidance = useCallback(
    debounce(seekGuidance, 300),
    [seekGuidance]
  );

  return {
    isLoading,
    response,
    seekGuidance,
    debouncedSeekGuidance
  };
}; 