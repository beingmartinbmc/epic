import React from 'react';

const Footer = () => {
  return (
    <div className="powered-by-footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="http://s01.flagcounter.com/more/xG" target="_blank" rel="noopener noreferrer" className="footer-link">
            <i className="fas fa-chart-line"></i>
            View Analytics
          </a>
        </div>
        
        <div className="footer-copyright">
          <p>
            © 2025 <a href="https://beingmartinbmc.github.io/Portfolio/#/" target="_blank" rel="noopener noreferrer" className="portfolio-link">Ankit</a>. Made with passion and creativity. Powered by Love and AI.
          </p>
        </div>
      </div>
      
      {/* Hidden flag counter for tracking */}
      <img src="https://s01.flagcounter.com/count2/xG/bg_FFFFFF/txt_000000/border_CCBC87/columns_2/maxflags_10/viewers_0/labels_0/pageviews_0/flags_0/percent_0/" alt="" style={{ display: 'none' }} />
    </div>
  );
};

export default Footer; 