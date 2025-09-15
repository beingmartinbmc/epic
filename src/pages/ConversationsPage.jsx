import React, { useState, useEffect } from 'react';
import { useGuidance } from '../hooks/useGuidance.js';
import './ConversationsPage.css';

const ConversationsPage = () => {
  const { conversations, conversationsLoading, pagination, fetchConversations } = useGuidance();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchConversations(currentPage, 20, 'timestamp', 'desc');
  }, [currentPage, fetchConversations]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

  const getSourceIcon = (optionChosen) => {
    const icons = {
      'BHAGAVAD_GITA': '🕉️',
      'VEDAS': '📜',
      'QURAN': '☪️',
      'BIBLE': '✝️',
      'GURU_GRANTH_SAHIB': '☬',
      'TRIPITAKA': '☸️',
      'DHAMMAPADA': '🌸',
      'TAO_TE_CHING': '☯️',
      'ANALECTS_OF_CONFUCIUS': '📚',
      'TALMUD': '✡️',
      'AVESTA': '🔥',
      'ALL': '🌟'
    };
    return icons[optionChosen] || '📖';
  };

  const getSourceName = (optionChosen) => {
    const names = {
      'BHAGAVAD_GITA': 'Bhagavad Gita',
      'VEDAS': 'The Vedas',
      'QURAN': 'Holy Quran',
      'BIBLE': 'Holy Bible',
      'GURU_GRANTH_SAHIB': 'Guru Granth Sahib',
      'TRIPITAKA': 'The Tripitaka',
      'DHAMMAPADA': 'The Dhammapada',
      'TAO_TE_CHING': 'Tao Te Ching',
      'ANALECTS_OF_CONFUCIUS': 'Analects of Confucius',
      'TALMUD': 'The Talmud',
      'AVESTA': 'The Avesta',
      'ALL': 'All Sacred Texts'
    };
    return names[optionChosen] || 'Unknown Source';
  };

  // Function to format the AI response for better readability
  const formatAIResponse = (response) => {
    if (!response) return null;

    // Check if the response contains structured format (QUOTE:, SOURCE:, etc.)
    if (response.includes('QUOTE:') && response.includes('SOURCE:')) {
      return response.split('\n').map((line, index) => {
        const trimmedLine = line.trim();
        if (!trimmedLine) return null;
        
        if (trimmedLine.startsWith('QUOTE:')) {
          return (
            <div key={index} className="formatted-quote">
              <div className="quote-label">Quote:</div>
              <blockquote className="quote-text">
                {trimmedLine.substring(6).trim()}
              </blockquote>
            </div>
          );
        } else if (trimmedLine.startsWith('SOURCE:')) {
          return (
            <div key={index} className="formatted-source">
              <div className="source-label">Source:</div>
              <div className="source-text">{trimmedLine.substring(7).trim()}</div>
            </div>
          );
        } else if (trimmedLine.startsWith('REFERENCE_URL:')) {
          const url = trimmedLine.substring(14).trim();
          return (
            <div key={index} className="formatted-reference">
              <div className="reference-label">Reference:</div>
              <a 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="reference-link"
              >
                <i className="fas fa-external-link-alt"></i> View Reference
              </a>
            </div>
          );
        } else if (trimmedLine.startsWith('CONTEXT:')) {
          return (
            <div key={index} className="formatted-context">
              <div className="context-label">Context:</div>
              <div className="context-text">{trimmedLine.substring(8).trim()}</div>
            </div>
          );
        } else if (trimmedLine.startsWith('SUMMARY:')) {
          return (
            <div key={index} className="formatted-summary">
              <div className="summary-label">Summary:</div>
              <div className="summary-text">{trimmedLine.substring(8).trim()}</div>
            </div>
          );
        } else {
          return (
            <div key={index} className="formatted-text">{trimmedLine}</div>
          );
        }
      });
    } else {
      // Fallback for non-structured responses
      return <div className="formatted-text">{response}</div>;
    }
  };

  return (
    <div className="conversations-page">
      <div className="conversations-page-header">
        <h1>Recent Conversations</h1>
        <p>Explore your past spiritual guidance sessions</p>
        <p className="community-note">
          🌟 Join thousands of seekers who are finding wisdom and guidance through these sacred texts
        </p>
      </div>

      {conversationsLoading ? (
        <div className="conversations-loading">
          <div className="spinner"></div>
          <p>Loading conversations...</p>
        </div>
      ) : (
        <>
          <div className="conversations-list">
            {conversations.map((conversation) => (
              <div key={conversation._id} className="conversation-card">
                <div className="conversation-header">
                  <div className="conversation-source">
                    <span className="source-icon">{getSourceIcon(conversation.optionChosen)}</span>
                    <span className="source-name">{getSourceName(conversation.optionChosen)}</span>
                  </div>
                  <div className="conversation-timestamp">
                    {formatTimestamp(conversation.timestamp)}
                  </div>
                </div>
                
                <div className="conversation-content">
                  <div className="user-question">
                    <strong>Question:</strong>
                    <p>{conversation.userInput}</p>
                  </div>
                  
                  <div className="ai-response">
                    <strong>Guidance:</strong>
                    <div className="formatted-response">
                      {formatAIResponse(conversation.aiResponse)}
                    </div>
                  </div>
                </div>

                <div className="conversation-meta">
                  <span className="model-info">
                    <i className="fas fa-robot"></i>
                    {conversation.model}
                  </span>
                  {conversation.usage && (
                    <span className="usage-info">
                      <i className="fas fa-chart-bar"></i>
                      {conversation.usage.total_tokens} tokens
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {pagination && (
            <div className="conversations-pagination">
              <button 
                className="pagination-btn"
                onClick={() => handlePageChange(pagination.prevPage)}
                disabled={!pagination.hasPrevPage}
              >
                <i className="fas fa-chevron-left"></i>
                Previous
              </button>
              
              <span className="pagination-info">
                Page {pagination.currentPage} of {pagination.totalPages}
                ({pagination.totalCount} total conversations)
              </span>
              
              <button 
                className="pagination-btn"
                onClick={() => handlePageChange(pagination.nextPage)}
                disabled={!pagination.hasNextPage}
              >
                Next
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ConversationsPage;
