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
                    <p>{conversation.aiResponse}</p>
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
