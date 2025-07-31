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

  // Parse the response to extract quotes, sources, and context
  const parseResponse = (text) => {
    const sections = text.split('\n\n');
    const quotes = [];
    let summary = '';

    sections.forEach(section => {
      const lines = section.split('\n');
      const quoteData = {};

      lines.forEach(line => {
        if (line.startsWith('QUOTE:')) {
          quoteData.quote = line.replace('QUOTE:', '').trim();
        } else if (line.startsWith('SOURCE:')) {
          quoteData.source = line.replace('SOURCE:', '').trim();
        } else if (line.startsWith('CONTEXT:')) {
          quoteData.context = line.replace('CONTEXT:', '').trim();
        } else if (line.startsWith('SUMMARY:')) {
          summary = line.replace('SUMMARY:', '').trim();
        } else if (line.trim() && !quoteData.quote && !quoteData.source && !quoteData.context) {
          // This might be the main guidance text
          if (!quoteData.quote) {
            quoteData.quote = line.trim();
          }
        }
      });

      if (quoteData.quote) {
        quotes.push(quoteData);
      }
    });

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
                .replace(/\n/g, '<br/>')
            }}
          />
        </div>
      )}
    </>
  );
};

export default ResponseSection; 