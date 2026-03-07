import React, { useState, useEffect } from 'react';

const NotificationToast = ({ message, type = 'info', duration = 4000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, 300);
  };

  if (!isVisible) return null;

  const getIcon = () => {
    switch (type) {
      case 'success':
        return 'fas fa-check-circle';
      case 'error':
        return 'fas fa-exclamation-circle';
      case 'warning':
        return 'fas fa-exclamation-triangle';
      case 'info':
      default:
        return 'fas fa-info-circle';
    }
  };

  const getColor = () => {
    switch (type) {
      case 'success':
        return 'var(--divine-gold)';
      case 'error':
        return '#ff6b6b';
      case 'warning':
        return '#ffa500';
      case 'info':
      default:
        return 'var(--divine-purple)';
    }
  };

  const getBackground = () => {
    switch (type) {
      case 'success':
        return 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(255, 255, 255, 0.9) 100%)';
      case 'error':
        return 'linear-gradient(135deg, rgba(255, 107, 107, 0.1) 0%, rgba(255, 255, 255, 0.9) 100%)';
      case 'warning':
        return 'linear-gradient(135deg, rgba(255, 165, 0, 0.1) 0%, rgba(255, 255, 255, 0.9) 100%)';
      case 'info':
      default:
        return 'linear-gradient(135deg, rgba(139, 90, 150, 0.1) 0%, rgba(255, 255, 255, 0.9) 100%)';
    }
  };

  return (
    <div
      className={`notification-toast ${isExiting ? 'exiting' : ''}`}
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: getBackground(),
        backdropFilter: 'blur(12px)',
        border: `1px solid ${getColor()}25`,
        borderRadius: '14px',
        padding: '0.85rem 1.25rem',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)',
        zIndex: 10000,
        minWidth: '280px',
        maxWidth: '380px',
        fontFamily: 'var(--font-body)',
        transform: isExiting ? 'translateX(100%)' : 'translateX(0)',
        opacity: isExiting ? 0 : 1,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        animation: 'slideInRight 0.3s ease-out'
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '0.8rem'
      }}>
        <div style={{
          color: getColor(),
          fontSize: '1rem',
          marginTop: '0.1rem',
          flexShrink: 0
        }}>
          <i className={getIcon()}></i>
        </div>
        
        <div style={{
          flex: 1,
          minWidth: 0
        }}>
          <div style={{
            fontWeight: 600,
            color: 'var(--divine-dark)',
            marginBottom: '0.15rem',
            fontSize: '0.85rem'
          }}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </div>
          <div style={{
            color: '#4a5568',
            fontSize: '0.8rem',
            lineHeight: 1.5
          }}>
            {message}
          </div>
        </div>
        
        <button
          onClick={handleClose}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--divine-dark)',
            cursor: 'pointer',
            padding: '0.2rem',
            borderRadius: '50%',
            width: '24px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease',
            flexShrink: 0
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(0, 0, 0, 0.1)';
            e.target.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'none';
            e.target.style.transform = 'scale(1)';
          }}
        >
          <i className="fas fa-times" style={{ fontSize: '0.8rem' }}></i>
        </button>
      </div>
      
      {/* Progress bar */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'rgba(0, 0, 0, 0.04)',
        borderRadius: '0 0 14px 14px',
        overflow: 'hidden'
      }}>
        <div style={{
          width: '100%',
          height: '100%',
          background: getColor(),
          borderRadius: '0 0 14px 14px',
          animation: 'progressShrink 4s linear forwards'
        }} />
      </div>
    </div>
  );
};

export default NotificationToast; 