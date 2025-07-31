import React from 'react';

const GuidanceForm = React.memo(({ 
  userInput, 
  setUserInput, 
  selectedText, 
  onTextChange, 
  onSubmit, 
  isLoading 
}) => {
  return (
    <form id="guidanceForm" onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="userMessage" className="form-label">
          <i className="fas fa-heart"></i> Share your heart's journey
        </label>
        <textarea
          id="userMessage"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Tell me about your feelings, struggles, or what's on your mind..."
          className="form-control"
          rows="5"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="selectedText" className="form-label">
          <i className="fas fa-book-open"></i> Choose your sacred source
        </label>
        <select
          id="selectedText"
          value={selectedText}
          onChange={onTextChange}
          className="form-select"
          required
        >
          <option value="">Select divine wisdom...</option>
          <option value="BHAGAVAD_GITA">Bhagavad Gita</option>
          <option value="VEDAS">The Vedas</option>
          <option value="QURAN">Holy Quran</option>
          <option value="BIBLE">Holy Bible</option>
          <option value="GURU_GRANTH_SAHIB">Guru Granth Sahib</option>
          <option value="TRIPITAKA">The Tripitaka</option>
          <option value="ALL">All Sacred Texts</option>
        </select>
      </div>

      <button type="submit" className="divine-btn" disabled={isLoading}>
        <i className="fas fa-search"></i> {isLoading ? 'Seeking divine wisdom...' : 'Seek Divine Guidance'}
      </button>
    </form>
  );
});

export default GuidanceForm; 