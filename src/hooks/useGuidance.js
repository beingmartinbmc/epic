import { useState } from 'react';
import prompts from '../prompts.js';
import { getReferenceUrl, parseSource } from '../utils.js';

const API_CONFIG = {
  OPENAI_PROXY_URL: 'https://epic-backend-1fms2ays2-beingmartinbmcs-projects.vercel.app/api/openai-proxy'
};

// Prompt mapping for different sacred texts
const PROMPT_MAPPING = {
  'BHAGAVAD_GITA': prompts.userPrompts.bhagavadGita,
  'VEDAS': prompts.userPrompts.vedas,
  'QURAN': prompts.userPrompts.quran,
  'BIBLE': prompts.userPrompts.bible,
  'GURU_GRANTH_SAHIB': prompts.userPrompts.guruGranthSahib,
  'TRIPITAKA': prompts.userPrompts.tripitaka,
  'ALL': prompts.userPrompts.allTexts
};

export const useGuidance = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState('');

  // Process response to add clickable links
  const processResponseWithLinks = (content) => {
    // Split content into paragraphs
    const paragraphs = content.split('\n\n');
    
    return paragraphs.map((paragraph, index) => {
      // Check if paragraph contains a SOURCE line
      if (paragraph.includes('SOURCE:')) {
        const lines = paragraph.split('\n');
        const processedLines = lines.map(line => {
          if (line.startsWith('SOURCE:')) {
            const sourceText = line.replace('SOURCE:', '').trim();
            // Parse the source to extract book name and reference
            const { bookName, chapter, verse } = parseSource(sourceText);
            const reference = verse ? `${chapter}:${verse}` : chapter;
            const url = getReferenceUrl(bookName, reference);
            if (url) {
              return `SOURCE: <a href="${url}" target="_blank" rel="noopener noreferrer">${sourceText}</a>`;
            }
          }
          return line;
        });
        return processedLines.join('\n');
      }
      return paragraph;
    }).join('\n\n');
  };

  const seekGuidance = async (userInput, selectedText) => {
    if (!userInput.trim()) return;

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
          ]
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const content = data.choices[0].message.content;
      
      // Process the response to add clickable references
      const processedContent = processResponseWithLinks(content);
      setResponse(processedContent);
    } catch (error) {
      console.error('Error:', error);
      setResponse('Sorry, there was an error processing your request. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    response,
    seekGuidance
  };
}; 