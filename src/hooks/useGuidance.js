import { useState, useCallback, useRef } from 'react';
import prompts from '../prompts.js';

const API_CONFIG = {
  OPENAI_PROXY_URL: 'https://ai-gateway-production-0388.up.railway.app/api/v1/openai-proxy',
  CONVERSATIONS_URL: 'https://ai-gateway-production-0388.up.railway.app/api/v1/conversations'
};

const OPENAI_MODEL = 'gpt-4.1-nano';
const OPENAI_MAX_TOKENS = 1000;

// Prompt mapping for different sacred texts - guidance mode
const GUIDANCE_PROMPT_MAPPING = {
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

// Prompt mapping for different sacred texts - understand mode
const UNDERSTAND_PROMPT_MAPPING = {
  'BHAGAVAD_GITA': prompts.understandPrompts.bhagavadGita,
  'VEDAS': prompts.understandPrompts.vedas,
  'QURAN': prompts.understandPrompts.quran,
  'BIBLE': prompts.understandPrompts.bible,
  'GURU_GRANTH_SAHIB': prompts.understandPrompts.guruGranthSahib,
  'TRIPITAKA': prompts.understandPrompts.tripitaka,
  'TAO_TE_CHING': prompts.understandPrompts.taoTeChing,
  'ANALECTS_OF_CONFUCIUS': prompts.understandPrompts.analectsOfConfucius,
  'DHAMMAPADA': prompts.understandPrompts.dhammapada,
  'UPANISHADS': prompts.understandPrompts.upanishads,
  'TALMUD': prompts.understandPrompts.talmud,
  'AVESTA': prompts.understandPrompts.avesta,
  'ALL': prompts.understandPrompts.allTexts
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
  const [conversations, setConversations] = useState([]);
  const [conversationsLoading, setConversationsLoading] = useState(false);
  const [pagination, setPagination] = useState(null);
  const abortControllerRef = useRef(null);

  const clearResponse = useCallback(() => {
    setResponse('');
  }, []);

  const saveConversation = useCallback(async ({ userInput, aiResponse, timestamp, book }) => {
    try {
      await fetch(API_CONFIG.CONVERSATIONS_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          userInput,
          aiResponse,
          timestamp,
          book
        })
      });
    } catch (error) {
      console.error('Error saving conversation:', error);
    }
  }, []);

  const seekGuidance = useCallback(async (userInput, selectedText, mode = 'guidance') => {
    if (!userInput.trim()) return;

    // Cancel any ongoing request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    // Create new abort controller
    abortControllerRef.current = new AbortController();

    setIsLoading(true);
    setResponse('');

    // Select prompts based on mode
    const isUnderstand = mode === 'understand';
    const systemPrompt = isUnderstand ? prompts.understandSystem.prompt : prompts.system.prompt;
    const promptMapping = isUnderstand ? UNDERSTAND_PROMPT_MAPPING : GUIDANCE_PROMPT_MAPPING;
    const userPrefix = isUnderstand ? "User's question" : "User's situation";
    const askedAt = new Date().toISOString();

    try {
      const response = await fetch(API_CONFIG.OPENAI_PROXY_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          model: OPENAI_MODEL,
          maxTokens: OPENAI_MAX_TOKENS,
          messages: [
            {
              role: 'system',
              content: systemPrompt
            },
            {
              role: 'user',
              content: `${promptMapping[selectedText]}\n\n${userPrefix}: ${userInput}`
            }
          ]
        }),
        signal: abortControllerRef.current.signal
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const content = data.choices?.[0]?.message?.content;

      if (!content) {
        throw new Error('OpenAI proxy response did not include message content');
      }
      
      // Set the raw response - processing will be done in the component
      setResponse(content);
      saveConversation({
        userInput,
        aiResponse: content,
        timestamp: askedAt,
        book: selectedText
      });
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
  }, [saveConversation]);

  // Fetch conversations with pagination
  const fetchConversations = useCallback(async (page = 1, limit = 20, sort = 'timestamp', order = 'desc', filters = {}) => {
    setConversationsLoading(true);
    
    try {
      const url = new URL(API_CONFIG.CONVERSATIONS_URL);
      url.searchParams.append('page', page.toString());
      url.searchParams.append('limit', limit.toString());
      url.searchParams.append('sort', sort);
      url.searchParams.append('order', order);
      if (filters.book) {
        url.searchParams.append('book', filters.book);
      }
      if (filters.from) {
        url.searchParams.append('from', filters.from);
      }
      if (filters.to) {
        url.searchParams.append('to', filters.to);
      }

      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setConversations(data.conversations || []);
      setPagination(data.pagination || null);
    } catch (error) {
      console.error('Error fetching conversations:', error);
      setConversations([]);
      setPagination(null);
    } finally {
      setConversationsLoading(false);
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
    clearResponse,
    seekGuidance,
    debouncedSeekGuidance,
    conversations,
    conversationsLoading,
    pagination,
    fetchConversations
  };
}; 