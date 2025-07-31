import { useEffect } from 'react';

// Theme mapping for different sacred texts
const THEME_MAPPING = {
  'BHAGAVAD_GITA': 'theme-hindu',
  'VEDAS': 'theme-hindu',
  'QURAN': 'theme-islamic',
  'BIBLE': 'theme-christian',
  'GURU_GRANTH_SAHIB': 'theme-sikh',
  'TRIPITAKA': 'theme-buddhist',
  'ALL': 'theme-universal'
};

export const useTheme = (selectedText) => {
  useEffect(() => {
    const updateTheme = (text) => {
      const body = document.body;
      body.className = ''; // Clear existing themes
      body.classList.add(THEME_MAPPING[text] || 'theme-universal');
    };

    updateTheme(selectedText);
  }, [selectedText]);
}; 