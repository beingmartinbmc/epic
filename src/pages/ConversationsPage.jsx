import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useGuidance } from '../hooks/useGuidance.js';
import './ConversationsPage.css';

const SACRED_TEXTS = [
  { value: '', label: 'All Books' },
  { value: 'BHAGAVAD_GITA', label: 'Bhagavad Gita', icon: '🕉️' },
  { value: 'VEDAS', label: 'The Vedas', icon: '📜' },
  { value: 'QURAN', label: 'Holy Quran', icon: '☪️' },
  { value: 'BIBLE', label: 'Holy Bible', icon: '✝️' },
  { value: 'GURU_GRANTH_SAHIB', label: 'Guru Granth Sahib', icon: '☬' },
  { value: 'TRIPITAKA', label: 'The Tripitaka', icon: '☸️' },
  { value: 'DHAMMAPADA', label: 'The Dhammapada', icon: '🌸' },
  { value: 'TAO_TE_CHING', label: 'Tao Te Ching', icon: '☯️' },
  { value: 'ANALECTS_OF_CONFUCIUS', label: 'Analects of Confucius', icon: '📚' },
  { value: 'UPANISHADS', label: 'The Upanishads', icon: '📖' },
  { value: 'TALMUD', label: 'The Talmud', icon: '✡️' },
  { value: 'AVESTA', label: 'The Avesta', icon: '🔥' }
];

const TIME_RANGES = [
  { value: 'all', label: 'All Time' },
  { value: 'today', label: 'Today' },
  { value: '7d', label: 'Last 7 Days' },
  { value: '30d', label: 'Last 30 Days' },
  { value: 'custom', label: 'Custom Range' }
];

const ConversationsPage = () => {
  const { conversations, conversationsLoading, pagination, fetchConversations } = useGuidance();
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedIds, setExpandedIds] = useState(new Set());
  const [selectedBook, setSelectedBook] = useState('');
  const [timeRange, setTimeRange] = useState('all');
  const [customFrom, setCustomFrom] = useState('');
  const [customTo, setCustomTo] = useState('');

  const toggleExpand = (id) => {
    setExpandedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  useEffect(() => {
    fetchConversations(currentPage, 20, 'timestamp', 'desc', buildFilters());
  }, [currentPage, selectedBook, timeRange, customFrom, customTo, fetchConversations]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleFilterChange = (setter) => (event) => {
    setter(event.target.value);
    setCurrentPage(1);
    setExpandedIds(new Set());
  };

  const clearFilters = () => {
    setSelectedBook('');
    setTimeRange('all');
    setCustomFrom('');
    setCustomTo('');
    setCurrentPage(1);
    setExpandedIds(new Set());
  };

  const buildFilters = () => {
    const filters = {};
    if (selectedBook) {
      filters.book = selectedBook;
    }

    const now = new Date();
    if (timeRange === 'today') {
      const from = new Date(now);
      from.setHours(0, 0, 0, 0);
      filters.from = from.toISOString();
    } else if (timeRange === '7d') {
      filters.from = daysAgoIso(7);
    } else if (timeRange === '30d') {
      filters.from = daysAgoIso(30);
    } else if (timeRange === 'custom') {
      if (customFrom) {
        filters.from = dateInputToIso(customFrom, 'start');
      }
      if (customTo) {
        filters.to = dateInputToIso(customTo, 'end');
      }
    }

    return filters;
  };

  const daysAgoIso = (days) => {
    const date = new Date();
    date.setDate(date.getDate() - days);
    return date.toISOString();
  };

  const dateInputToIso = (dateValue, boundary) => {
    const date = new Date(`${dateValue}T00:00:00`);
    if (boundary === 'end') {
      date.setHours(23, 59, 59, 999);
    }
    return date.toISOString();
  };

  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

  const getBookMeta = (book) => {
    return SACRED_TEXTS.find((item) => item.value === book) || { label: 'Sacred Text', icon: '📖' };
  };

  const getPrimaryBook = (conversation) => {
    const books = conversation.books || [];
    if (books.length === 0) {
      return conversation.optionChosen || '';
    }
    if (books.length > 1) {
      return 'ALL';
    }
    return books[0];
  };

  const getSourceIcon = (conversation) => {
    const primaryBook = getPrimaryBook(conversation);
    return primaryBook === 'ALL' ? '🌟' : getBookMeta(primaryBook).icon;
  };

  const getSourceName = (conversation) => {
    const books = conversation.books || [];
    if (books.length > 1) {
      return 'Multiple Sacred Texts';
    }
    const primaryBook = getPrimaryBook(conversation);
    return primaryBook === 'ALL' ? 'All Sacred Texts' : getBookMeta(primaryBook).label;
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
      <div className="conversations-page-nav">
        <Link to="/" className="back-link">
          <i className="fas fa-arrow-left"></i>
          Back to Home
        </Link>
      </div>

      <div className="conversations-page-header">
        <h1>Recent Conversations</h1>
        <p>Explore past spiritual guidance sessions from the community</p>
      </div>

      <div className="conversation-filters" aria-label="Conversation filters">
        <div className="filter-field">
          <label htmlFor="book-filter">Book</label>
          <select
            id="book-filter"
            value={selectedBook}
            onChange={handleFilterChange(setSelectedBook)}
          >
            {SACRED_TEXTS.map((book) => (
              <option key={book.value || 'all'} value={book.value}>
                {book.label}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-field">
          <label htmlFor="time-filter">Time Range</label>
          <select
            id="time-filter"
            value={timeRange}
            onChange={handleFilterChange(setTimeRange)}
          >
            {TIME_RANGES.map((range) => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>
        </div>

        {timeRange === 'custom' && (
          <>
            <div className="filter-field">
              <label htmlFor="from-filter">From</label>
              <input
                id="from-filter"
                type="date"
                value={customFrom}
                onChange={handleFilterChange(setCustomFrom)}
              />
            </div>

            <div className="filter-field">
              <label htmlFor="to-filter">To</label>
              <input
                id="to-filter"
                type="date"
                value={customTo}
                onChange={handleFilterChange(setCustomTo)}
              />
            </div>
          </>
        )}

        <button className="clear-filters-btn" type="button" onClick={clearFilters}>
          Clear Filters
        </button>
      </div>

      {conversationsLoading ? (
        <div className="conversations-loading">
          <div className="spinner"></div>
          <p>Loading conversations...</p>
        </div>
      ) : (
        <>
          <div className="conversations-list">
            {conversations.map((conversation) => {
              const isExpanded = expandedIds.has(conversation._id);
              return (
                <div key={conversation._id} className="conversation-card">
                  <button
                    className="conversation-toggle"
                    onClick={() => toggleExpand(conversation._id)}
                    aria-expanded={isExpanded}
                  >
                    <div className="conversation-toggle-left">
                      <span className="source-icon">{getSourceIcon(conversation)}</span>
                      <div className="conversation-toggle-text">
                        <span className="source-name">{getSourceName(conversation)}</span>
                        <p className="question-preview">{conversation.userInput}</p>
                      </div>
                    </div>
                    <div className="conversation-toggle-right">
                      <span className="conversation-timestamp">
                        {formatTimestamp(conversation.timestamp)}
                      </span>
                      <i className={`fas fa-chevron-down expand-icon ${isExpanded ? 'expanded' : ''}`}></i>
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="conversation-body">
                      <div className="ai-response">
                        <strong>Guidance:</strong>
                        <div className="formatted-response">
                          {formatAIResponse(conversation.aiResponse)}
                        </div>
                      </div>

                      <div className="conversation-meta">
                        {(conversation.books || []).slice(0, 4).map((book) => (
                          <span key={book} className="book-chip">
                            {getBookMeta(book).label}
                          </span>
                        ))}
                        {(conversation.books || []).length > 4 && (
                          <span className="book-chip">
                            +{conversation.books.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {!conversations.length && (
            <div className="empty-conversations">
              No conversations match these filters.
            </div>
          )}

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
