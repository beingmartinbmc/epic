import React, { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { getReferenceUrl, parseSource } from '../utils.js';

// Memoized parsing function to avoid recreating on every render
const parseResponse = (response) => {
  if (!response) return { quotes: [], summary: '' };
  
  const quotes = [];
  let summary = '';
  let currentQuote = {};

  // Use more efficient string splitting
  const lines = response.split('\n');
  const lineCount = lines.length;
  
  for (let i = 0; i < lineCount; i++) {
    const line = lines[i].trim();
    
    if (!line) continue;

    // Use startsWith for better performance than regex
    if (line.startsWith('QUOTE:')) {
      // If we have a previous quote, save it
      if (currentQuote.quote) {
        quotes.push({ ...currentQuote });
      }
      // Start new quote
      currentQuote = {
        quote: line.substring(6).trim() // More efficient than replace
      };
    } else if (line.startsWith('SOURCE:')) {
      currentQuote.source = line.substring(7).trim();
    } else if (line.startsWith('CONTEXT:')) {
      currentQuote.context = line.substring(8).trim();
    } else if (line.startsWith('SUMMARY:')) {
      // Extract summary and continue reading until we hit another section or end
      let summaryText = line.substring(8).trim();
      let j = i + 1;
      while (j < lineCount) {
        const nextLine = lines[j].trim();
        if (nextLine && (nextLine.startsWith('QUOTE:') || nextLine.startsWith('SOURCE:') || nextLine.startsWith('CONTEXT:'))) {
          break;
        }
        if (nextLine) {
          summaryText += ' ' + nextLine;
        }
        j++;
      }
      summary = summaryText.trim();
      i = j - 1; // Adjust index to continue from where we left off
    } else if (line.startsWith('"') && line.endsWith('"')) {
      // Handle quoted text without QUOTE: prefix
      if (currentQuote.quote) {
        quotes.push({ ...currentQuote });
      }
      currentQuote = {
        quote: line
      };
    } else if (currentQuote.quote && !currentQuote.source && line.includes(':')) {
      // Try to identify source from context - use includes for better performance
      if (line.includes('Bhagavad Gita') || line.includes('Quran') || line.includes('Bible') || 
          line.includes('Rigveda') || line.includes('Guru Granth Sahib') || line.includes('Tripitaka')) {
        currentQuote.source = line;
      } else {
        currentQuote.context = line;
      }
    } else if (currentQuote.quote && !currentQuote.context && line.length > 50) {
      // Long lines are likely context
      currentQuote.context = line;
    }
  }

  // Add the last quote if it exists
  if (currentQuote.quote) {
    quotes.push(currentQuote);
  }

  // If no structured quotes found, try alternative parsing
  if (quotes.length === 0) {
    const sections = response.split('\n\n');
    const sectionCount = sections.length;
    
    for (let i = 0; i < sectionCount; i++) {
      const section = sections[i];
      const sectionLines = section.split('\n');
      const quoteData = {};
      
      for (let j = 0; j < sectionLines.length; j++) {
        const trimmedLine = sectionLines[j].trim();
        if (trimmedLine.startsWith('"') && trimmedLine.endsWith('"')) {
          quoteData.quote = trimmedLine;
        } else if (trimmedLine.includes(':')) {
          quoteData.source = trimmedLine;
        } else if (trimmedLine.length > 30) {
          quoteData.context = trimmedLine;
        }
      }
      
      if (quoteData.quote) {
        quotes.push(quoteData);
      }
    }
  }

  return { quotes, summary };
};

const ResponseSection = React.memo(({ response, isLoading }) => {
  const [expandedQuotes, setExpandedQuotes] = useState(new Set());

  // Memoize the parsed response to avoid re-parsing on every render
  const parsedData = useMemo(() => {
    return parseResponse(response);
  }, [response]);

  // Memoize quote processing to avoid recalculation
  const processedQuotes = useMemo(() => {
    return parsedData.quotes.map(quote => {
      const { source, chapter, verse } = parseSource(quote.source || '');
      const referenceUrl = getReferenceUrl(source, `${chapter}:${verse}`);
      
      return {
        ...quote,
        parsedSource: source,
        chapter,
        verse,
        referenceUrl,
        isExpanded: expandedQuotes.has(quote.quote)
      };
    });
  }, [parsedData.quotes, expandedQuotes]);

  // Memoized toggle function
  const toggleQuote = useCallback((quote) => {
    setExpandedQuotes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(quote)) {
        newSet.delete(quote);
      } else {
        newSet.add(quote);
      }
      return newSet;
    });
  }, []);

  // Auto-expand first quote when response loads
  useEffect(() => {
    if (processedQuotes.length > 0 && expandedQuotes.size === 0) {
      setExpandedQuotes(new Set([processedQuotes[0].quote]));
    }
  }, [processedQuotes.length, expandedQuotes.size]);

  if (isLoading) {
    return (
      <div className="response-section">
        <div className="response-loading">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading guidance...</span>
          </div>
          <p className="mt-3">Seeking divine wisdom...</p>
        </div>
      </div>
    );
  }

  if (!response) {
    return (
      <div className="response-section">
        <div className="response-placeholder">
          <div className="placeholder-icon">🙏</div>
          <h3>Seek Divine Guidance</h3>
          <p>Share your question or concern, and receive wisdom from sacred texts.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="response-section">
      {/* Quotes Section */}
      {processedQuotes.length > 0 && (
        <div className="quotes-section">
          <h3 className="quotes-title">Sacred Wisdom</h3>
          {processedQuotes.map((quote, index) => (
            <div key={`${index}-${quote.quote.substring(0, 50)}`} className="quote-card">
              <div className="quote-content">
                <blockquote className="quote-text">
                  "{quote.quote}"
                </blockquote>
                
                <div className="quote-meta">
                  <span className="quote-source">{quote.parsedSource}</span>
                  {quote.chapter && quote.verse && (
                    <span className="quote-reference">
                      {quote.chapter}:{quote.verse}
                    </span>
                  )}
                  {quote.referenceUrl && (
                    <a 
                      href={quote.referenceUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="quote-link"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  )}
                </div>

                {quote.context && (
                  <div className="quote-context">
                    <button 
                      className="context-toggle"
                      onClick={() => toggleQuote(quote.quote)}
                    >
                      {quote.isExpanded ? 'Hide Context' : 'Show Context'}
                      <i className={`fas fa-chevron-${quote.isExpanded ? 'up' : 'down'}`}></i>
                    </button>
                    
                    {quote.isExpanded && (
                      <div className="context-content">
                        {quote.context}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Summary Section */}
      {parsedData.summary && (
        <div className="summary-section">
          <h3 className="summary-title">Guidance Summary</h3>
          <div className="summary-content">
            {parsedData.summary}
          </div>
        </div>
      )}
    </div>
  );
});

ResponseSection.displayName = 'ResponseSection';

export default ResponseSection; 