import React from 'react';

const ResponseSection = ({ response, isLoading }) => {
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

  // Improved parsing logic to handle different response formats
  const parseResponse = (text) => {
    const quotes = [];
    let summary = '';
    let currentQuote = {};

    // Split by lines and process each line
    const lines = text.split('\n');
    
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
        summary = line.replace('SUMMARY:', '').trim();
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
      const sections = text.split('\n\n');
      sections.forEach(section => {
        const sectionLines = section.split('\n');
        const quoteData = {};
        
        sectionLines.forEach(line => {
          const trimmedLine = line.trim();
          if (trimmedLine.startsWith('QUOTE:')) {
            quoteData.quote = trimmedLine.replace('QUOTE:', '').trim();
          } else if (trimmedLine.startsWith('SOURCE:')) {
            quoteData.source = trimmedLine.replace('SOURCE:', '').trim();
          } else if (trimmedLine.startsWith('CONTEXT:')) {
            quoteData.context = trimmedLine.replace('CONTEXT:', '').trim();
          } else if (trimmedLine.startsWith('SUMMARY:')) {
            summary = trimmedLine.replace('SUMMARY:', '').trim();
          }
        });
        
        if (quoteData.quote) {
          quotes.push(quoteData);
        }
      });
    }

    return { quotes, summary };
  };

  const { quotes, summary } = parseResponse(response);

  return (
    <>
      {/* Quotes Section */}
      {quotes.length > 0 && (
        <div id="quotesSection" className="quotes-section" style={{ display: 'block' }}>
          <div className="quotes-header">
            <h5><i className="fas fa-quote-left"></i> Sacred Wisdom</h5>
          </div>
          <div id="quotesGrid" className="quotes-grid">
            {quotes.map((quote, index) => (
              <div key={index} className="quote-card">
                <div className="quote-text">
                  {quote.quote}
                </div>
                {quote.source && (
                  <div className="quote-source-container">
                    <div className="quote-source">
                      <i className="fas fa-book"></i>
                      <span>{quote.source}</span>
                    </div>
                  </div>
                )}
                {quote.context && (
                  <div className="quote-context">
                    <span className="context-label">Context</span>
                    <div className="context-text">{quote.context}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Summary Section */}
      {summary && (
        <div className="summary-section" style={{ marginTop: '2rem' }}>
          <div className="summary-header" style={{ textAlign: 'center', marginBottom: '1.5rem', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '2px', background: 'var(--divine-gradient)', transform: 'translateY(-50%)', zIndex: 1 }}></div>
            <h5 style={{ color: 'var(--divine-dark)', margin: 0, background: 'white', padding: '0 2rem', position: 'relative', zIndex: 2, display: 'inline-block' }}>
              <i className="fas fa-lightbulb" style={{ color: 'var(--divine-gold)', marginRight: '0.5rem', animation: 'glow 2s ease-in-out infinite alternate' }}></i>
              <span style={{ fontWeight: 600, letterSpacing: '1px' }}>SPIRITUAL SUMMARY</span>
            </h5>
          </div>
          <div className="summary-content" style={{ background: 'linear-gradient(135deg, var(--divine-cream) 0%, #FFF8F0 100%)', borderRadius: '20px', padding: '2.5rem', border: '3px solid var(--divine-light-gold)', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'var(--divine-gradient)' }}></div>
            <div style={{ position: 'absolute', top: '1rem', right: '1rem', fontSize: '3rem', color: 'var(--divine-gold)', opacity: 0.1 }}>
              <i className="fas fa-om"></i>
            </div>
            <div style={{ position: 'relative', zIndex: 2 }}>
              <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'var(--divine-dark)', margin: 0, textAlign: 'justify', fontWeight: 500, textShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>{summary}</p>
            </div>
          </div>
        </div>
      )}

      {/* Fallback for raw text if parsing didn't work */}
      {quotes.length === 0 && !summary && (
        <div className="guidance-container" style={{ marginTop: '3rem', background: 'linear-gradient(135deg, var(--divine-cream) 0%, #FFF8F0 100%)', borderRadius: '20px', padding: '2.5rem', border: '2px solid var(--divine-light-gold)', position: 'relative', overflow: 'hidden' }}>
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
};

export default ResponseSection; 