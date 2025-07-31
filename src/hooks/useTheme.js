import { useEffect, useCallback, useMemo } from 'react';

export const useTheme = (selectedText) => {
  // Memoize theme mapping to avoid recreating on every render
  const themeMapping = useMemo(() => ({
    'BHAGAVAD_GITA': 'theme-hindu',
    'VEDAS': 'theme-hindu',
    'QURAN': 'theme-islamic',
    'BIBLE': 'theme-christian',
    'GURU_GRANTH_SAHIB': 'theme-sikh',
    'TRIPITAKA': 'theme-buddhist',
    'ALL': 'theme-universal'
  }), []);

  // Memoize the update function
  const updateTheme = useCallback((text) => {
    const body = document.body;
    body.className = ''; // Clear existing themes
    body.classList.add(themeMapping[text] || 'theme-universal');
  }, [themeMapping]);

  useEffect(() => {
    updateTheme(selectedText);
  }, [selectedText, updateTheme]);
}; 