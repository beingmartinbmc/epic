import React, { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { getReferenceUrl, parseSource } from '../utils.js';

const ResponseSection = React.memo(({ response, isLoading }) => {
  const [expandedQuotes, setExpandedQuotes] = useState(new Set());

  // Memoize the parsed response to avoid re-parsing on every render
  const parsedData = useMemo(() => {
    if (!response) return { quotes: [], summary: '' };
    
    const quotes = [];
    let summary = '';
    let currentQuote = {};

    // Split by lines and process each line
    const lines = response.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      if (!line) continue;

      if (line.startsWith('QUOTE:')) {
        // If we have a previous quote, save it
        if (currentQuote.quote) {
          quotes.push({ ...currentQuote });
        }
        // Start new quote
        currentQuote = {
          quote: line.replace('QUOTE:', '').trim()
        };
      } else if (line.startsWith('SOURCE:')) {
        currentQuote.source = line.replace('SOURCE:', '').trim();
      } else if (line.startsWith('CONTEXT:')) {
        currentQuote.context = line.replace('CONTEXT:', '').trim();
      } else if (line.startsWith('SUMMARY:')) {
        // Extract summary and continue reading until we hit another section or end
        let summaryText = line.replace('SUMMARY:', '').trim();
        let j = i + 1;
        while (j < lines.length) {
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
        // Try to identify source from context
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
      sections.forEach(section => {
        const sectionLines = section.split('\n');
        const quoteData = {};
        
        sectionLines.forEach(line => {
          const trimmedLine = line.trim();
          if (trimmedLine.startsWith('"') && trimmedLine.endsWith('"')) {
            quoteData.quote = trimmedLine;
          } else if (trimmedLine.includes(':')) {
            quoteData.source = trimmedLine;
          } else if (trimmedLine.length > 30) {
            quoteData.context = trimmedLine;
          }
        });
        
        if (quoteData.quote) {
          quotes.push(quoteData);
        }
      });
    }

    return { quotes, summary };
  }, [response]);

  // Memoize the toggle function to prevent unnecessary re-renders
  const toggleQuote = useCallback((quoteIndex) => {
    setExpandedQuotes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(quoteIndex)) {
        newSet.delete(quoteIndex);
      } else {
        newSet.add(quoteIndex);
      }
      return newSet;
    });
  }, []);

  // Lazy load quotes for better performance
  const [visibleQuotes, setVisibleQuotes] = useState(5);
  const loadMoreQuotes = useCallback(() => {
    setVisibleQuotes(prev => Math.min(prev + 5, parsedData.quotes.length));
  }, [parsedData.quotes.length]);

  // Show load more button if there are more quotes to display
  const hasMoreQuotes = visibleQuotes < parsedData.quotes.length;

  // Intersection Observer for auto-loading
  const loadMoreRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMoreQuotes) {
          loadMoreQuotes();
        }
      },
      { threshold: 0.1 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [hasMoreQuotes, loadMoreQuotes]);

  if (isLoading) {
    return (
      <div id="loadingSpinner" className="loading" style={{ display: 'block' }}>
        <div className="spinner"></div>
        <p>Seeking divine wisdom...</p>
      </div>
    );
  }

  if (!response) {
    return null;
  }

  // Simple quote processing without useMemo
  const processedQuotes = parsedData.quotes.map(quote => {
    const processedQuote = { ...quote };
    
    if (quote.source) {
      try {
        const { bookName, chapter, verse } = parseSource(quote.source);
        const reference = verse ? `${chapter}:${verse}` : chapter;
        const url = getReferenceUrl(bookName, reference);
        processedQuote.sourceUrl = url;
      } catch (error) {
        console.warn('Error processing quote source:', error);
        processedQuote.sourceUrl = null;
      }
    }
    
    return processedQuote;
  });

  const toggleQuoteExpansion = (index) => {
    setExpandedQuotes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <>
      {/* Quotes Section */}
      {processedQuotes.length > 0 && (
        <div id="quotesSection" className="quotes-section" style={{ display: 'block' }}>
          <div className="quotes-header">
            <h5>
              <i className="fas fa-quote-left" style={{ 
                color: 'var(--divine-gold)', 
                marginRight: '0.5rem',
                animation: 'quoteIconPulse 2s ease-in-out infinite'
              }}></i> 
              Sacred Wisdom
            </h5>
          </div>
          <div id="quotesGrid" className="quotes-grid">
            {processedQuotes.map((quote, index) => {
              const isExpanded = expandedQuotes.has(index);
              const hasContext = quote.context && quote.context.length > 100;
              
              return (
                <div 
                  key={index} 
                  className="quote-card enhanced-quote-card"
                  style={{
                    animation: `fadeInUp ${0.3 + index * 0.1}s ease-out`,
                    animationFillMode: 'both'
                  }}
                >
                  <div className="quote-text">
                    {quote.quote}
                  </div>
                  
                  {quote.source && (
                    <div className="quote-source-container">
                      <div className="quote-source">
                        <i className="fas fa-book"></i>
                        {quote.sourceUrl ? (
                          <a href={quote.sourceUrl} target="_blank" rel="noopener noreferrer">
                            {quote.source}
                          </a>
                        ) : (
                          <span>{quote.source}</span>
                        )}
                      </div>
                    </div>
                  )}
                  
                  {quote.context && (
                    <div className="quote-context enhanced-context">
                      <span className="context-label">
                        <i className="fas fa-info-circle" style={{ marginRight: '0.5rem' }}></i>
                        Context
                      </span>
                      <div className="context-text">
                        {hasContext && !isExpanded ? (
                          <>
                            {quote.context.substring(0, 100)}...
                            <button
                              onClick={() => toggleQuoteExpansion(index)}
                              style={{
                                background: 'none',
                                border: 'none',
                                color: 'var(--divine-purple)',
                                cursor: 'pointer',
                                textDecoration: 'underline',
                                marginLeft: '0.5rem',
                                fontSize: '0.9rem'
                              }}
                            >
                              Read more
                            </button>
                          </>
                        ) : (
                          <>
                            {quote.context}
                            {hasContext && (
                              <button
                                onClick={() => toggleQuoteExpansion(index)}
                                style={{
                                  background: 'none',
                                  border: 'none',
                                  color: 'var(--divine-purple)',
                                  cursor: 'pointer',
                                  textDecoration: 'underline',
                                  marginLeft: '0.5rem',
                                  fontSize: '0.9rem'
                                }}
                              >
                                Show less
                              </button>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  )}
                  
                  {/* Quote actions */}
                  <div className="quote-actions" style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    gap: '1rem',
                    marginTop: '1rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(0, 0, 0, 0.1)'
                  }}>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(quote.quote);
                        // You could add a notification here
                      }}
                      style={{
                        background: 'none',
                        border: '1px solid var(--divine-gold)',
                        borderRadius: '20px',
                        padding: '0.5rem 1rem',
                        color: 'var(--divine-gold)',
                        cursor: 'pointer',
                        fontSize: '0.8rem',
                        transition: 'var(--transition-smooth)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = 'var(--divine-gold)';
                        e.target.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'none';
                        e.target.style.color = 'var(--divine-gold)';
                      }}
                    >
                      <i className="fas fa-copy"></i>
                      Copy
                    </button>
                    
                    {quote.sourceUrl && (
                      <a
                        href={quote.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          background: 'none',
                          border: '1px solid var(--divine-purple)',
                          color: 'var(--divine-purple)',
                          cursor: 'pointer',
                          fontSize: '0.8rem',
                          transition: 'var(--transition-smooth)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          textDecoration: 'none',
                          borderRadius: '20px',
                          padding: '0.5rem 1rem'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = 'var(--divine-purple)';
                          e.target.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'none';
                          e.target.style.color = 'var(--divine-purple)';
                        }}
                      >
                        <i className="fas fa-external-link-alt"></i>
                        Source
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Summary Section */}
      {parsedData.summary && (
        <div className="summary-section enhanced-summary" style={{ 
          marginTop: '2rem',
          animation: 'fadeInUp 0.5s ease-out'
        }}>
          <div className="summary-header" style={{ textAlign: 'center', marginBottom: '1.5rem', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '2px', background: 'var(--divine-gradient)', transform: 'translateY(-50%)', zIndex: 1 }}></div>
            <h5 style={{ color: 'var(--divine-dark)', margin: 0, background: 'white', padding: '0 2rem', position: 'relative', zIndex: 2, display: 'inline-block' }}>
              <i className="fas fa-lightbulb" style={{ 
                color: 'var(--divine-gold)', 
                marginRight: '0.5rem', 
                animation: 'glow 2s ease-in-out infinite alternate' 
              }}></i>
              <span style={{ fontWeight: 600, letterSpacing: '1px' }}>SPIRITUAL SUMMARY</span>
            </h5>
          </div>
          <div className="summary-content" style={{ 
            background: 'linear-gradient(135deg, var(--divine-cream) 0%, #FFF8F0 100%)', 
            borderRadius: '20px', 
            padding: '2.5rem', 
            border: '3px solid var(--divine-light-gold)', 
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)', 
            position: 'relative', 
            overflow: 'hidden',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'var(--divine-gradient)' }}></div>
            <div style={{ position: 'absolute', top: '1rem', right: '1rem', fontSize: '3rem', color: 'var(--divine-gold)', opacity: 0.1 }}>
              <i className="fas fa-om"></i>
            </div>
            <div style={{ position: 'relative', zIndex: 2 }}>
              <p style={{ 
                fontSize: '1.2rem', 
                lineHeight: 1.8, 
                color: 'var(--divine-dark)', 
                margin: 0, 
                textAlign: 'justify', 
                fontWeight: 500, 
                textShadow: '0 1px 2px rgba(0,0,0,0.05)' 
              }}>
                {parsedData.summary}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Fallback for raw text if parsing didn't work */}
      {processedQuotes.length === 0 && !parsedData.summary && (
        <div className="guidance-container enhanced-guidance" style={{ 
          marginTop: '3rem', 
          background: 'linear-gradient(135deg, var(--divine-cream) 0%, #FFF8F0 100%)', 
          borderRadius: '20px', 
          padding: '2.5rem', 
          border: '2px solid var(--divine-light-gold)', 
          position: 'relative', 
          overflow: 'hidden',
          backdropFilter: 'blur(10px)',
          animation: 'fadeInUp 0.3s ease-out'
        }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'var(--divine-gradient)' }}></div>
          <div className="guidance-header">
            <div className="guidance-icon">
              <i className="fas fa-om"></i>
            </div>
            <h3 className="guidance-title">Divine Guidance</h3>
            <p className="guidance-subtitle">Sacred wisdom for your journey</p>
          </div>
          <div 
            className="guidance-text"
            dangerouslySetInnerHTML={{ 
              __html: response
                .replace(/QUOTE:/g, '<span class="quote-marker">QUOTE:</span>')
                .replace(/SOURCE:/g, '<span class="source-marker">SOURCE:</span>')
                .replace(/CONTEXT:/g, '<span class="context-marker">CONTEXT:</span>')
                .replace(/SUMMARY:/g, '<span class="summary-marker">SUMMARY:</span>')
                .replace(/\n/g, '<br/>')
            }}
          />
        </div>
      )}
    </>
  );
});

export default ResponseSection; 