import React from 'react';

const Header = ({ selectedText }) => {
  const getHeaderContent = (text) => {
    switch (text) {
      case 'BHAGAVAD_GITA':
        return {
          icon: 'fas fa-om',
          title: 'Hindu Wisdom',
          subtitle: 'Sacred guidance from the Bhagavad Gita'
        };
      case 'VEDAS':
        return {
          icon: 'fas fa-om',
          title: 'Vedic Wisdom',
          subtitle: 'Sacred guidance from the Vedas'
        };
      case 'QURAN':
        return {
          icon: 'fas fa-star-and-crescent',
          title: 'Islamic Wisdom',
          subtitle: 'Sacred guidance from the Holy Quran'
        };
      case 'BIBLE':
        return {
          icon: 'fas fa-cross',
          title: 'Christian Wisdom',
          subtitle: 'Sacred guidance from the Holy Bible'
        };
      case 'GURU_GRANTH_SAHIB':
        return {
          icon: '☬',
          title: 'Sikh Wisdom',
          subtitle: 'Sacred guidance from the Guru Granth Sahib'
        };
      case 'TRIPITAKA':
        return {
          icon: 'fas fa-dharmachakra',
          title: 'Buddhist Wisdom',
          subtitle: 'Sacred guidance from the Tripitaka'
        };
      case 'ALL':
      default:
        return {
          icon: '🕉️',
          title: 'Divine Wisdom',
          subtitle: 'Sacred guidance from ancient texts'
        };
    }
  };

  const headerContent = getHeaderContent(selectedText);

  return (
    <div className="divine-header">
      <div className="header-content">
        <h1 className="divine-title">
          {headerContent.icon.startsWith('fas') ? (
            <i className={headerContent.icon}></i>
          ) : (
            <span className="unicode-icon">{headerContent.icon}</span>
          )}
          <span>{headerContent.title}</span>
        </h1>
        <p className="divine-subtitle">{headerContent.subtitle}</p>
      </div>
    </div>
  );
};

export default Header; 