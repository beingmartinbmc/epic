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

  return (
    <>
      <div id="quotesSection" className="quotes-section" style={{ display: 'block' }}>
        <div className="quotes-header">
          <h5><i className="fas fa-quote-left"></i> Sacred Wisdom</h5>
        </div>
        <div id="quotesGrid" className="quotes-grid">
          <div className="quote-card">
            <div 
              className="quote-text"
              dangerouslySetInnerHTML={{ __html: response.replace(/\n/g, '<br/>') }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ResponseSection; 