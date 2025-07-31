import React from 'react';

const Footer = () => {
  return (
    <div className="powered-by-footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-item">
            <i className="fas fa-brain"></i>
            <span>Powered by GPT-4.1</span>
          </div>
        </div>
        
        <div className="footer-section">
          <div className="footer-item">
            <i className="fas fa-user-circle"></i>
            <a href="https://beingmartinbmc.github.io/Portfolio/#/" target="_blank" rel="noopener noreferrer">
              About the Author
            </a>
          </div>
        </div>
        
        <div className="footer-section">
          <div className="footer-item">
            <i className="fas fa-globe-americas"></i>
            <a href="http://s01.flagcounter.com/more/xG" target="_blank" rel="noopener noreferrer" title="Global Wisdom Seekers">
              Global Reach
            </a>
          </div>
        </div>
      </div>
      
      {/* Hidden flag counter for tracking */}
      <img src="https://s01.flagcounter.com/count2/xG/bg_FFFFFF/txt_000000/border_CCBC87/columns_2/maxflags_10/viewers_0/labels_0/pageviews_0/flags_0/percent_0/" alt="" style={{ display: 'none' }} />
    </div>
  );
};

export default Footer; 