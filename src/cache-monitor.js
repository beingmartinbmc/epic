import { clearCache, getCacheStats, getAllCacheEntries } from './cache.js';

// Cache monitor elements
const elements = {
    validEntries: document.getElementById('validEntries'),
    latestCache: document.getElementById('latestCache'),
    clearBtn: document.getElementById('clearCacheBtn'),
    refreshBtn: document.getElementById('refreshStatsBtn'),
    validCount: document.getElementById('validCount'),
    validEntriesContainer: document.getElementById('validEntries')
};

// Update cache statistics
function updateCacheStats() {
    const stats = getCacheStats();
    
    elements.validEntries.textContent = stats.validEntries;
    elements.latestCache.textContent = stats.newestEntry ? 
        new Date(stats.newestEntry).toLocaleString() : 
        'No entries';
}

// Update cache entries display
function updateCacheEntries() {
    const validEntries = getAllCacheEntries();
    
    // Update count
    elements.validCount.textContent = validEntries.length;
    
    // Display cache entries
    elements.validEntriesContainer.innerHTML = validEntries.length > 0 ? 
        validEntries.map(entry => createEntryCard(entry)).join('') :
        '<div class="no-entries">No cache entries found.</div>';
}

// Create entry card HTML
function createEntryCard(entry) {
    const sourceText = getSourceTextName(entry.selectedText);
    const truncatedInput = entry.userMessage.length > 100 ? 
        entry.userMessage.substring(0, 100) + '...' : 
        entry.userMessage;
    
    return `
        <div class="cache-entry-card">
            <div class="entry-header">
                <div class="entry-source">
                    <i class="fas fa-book"></i>
                    <span>${sourceText}</span>
                </div>
                <div class="entry-time">
                    <i class="fas fa-clock"></i>
                    <span>${entry.timeAgo}</span>
                </div>
            </div>
            <div class="entry-content">
                <div class="entry-input">
                    <strong>User Input:</strong>
                    <p>${truncatedInput}</p>
                </div>
                <div class="entry-response">
                    <strong>Response:</strong>
                    <p>${entry.response.summary || 'Response available'}</p>
                </div>
            </div>
            <div class="entry-actions">
                <button class="entry-action-btn" onclick="viewFullEntry('${entry.timestamp}')">
                    <i class="fas fa-eye"></i>
                    View Full
                </button>
                <button class="entry-action-btn danger" onclick="deleteEntry('${entry.timestamp}')">
                    <i class="fas fa-trash"></i>
                    Delete
                </button>
            </div>
        </div>
    `;
}

// Get source text name
function getSourceTextName(selectedText) {
    const sourceMap = {
        'BHAGAVAD_GITA': 'Bhagavad Gita',
        'QURAN': 'Holy Quran',
        'BIBLE': 'Holy Bible',
        'GURU_GRANTH_SAHIB': 'Guru Granth Sahib',
        'ALL': 'All Sacred Texts'
    };
    return sourceMap[selectedText] || selectedText;
}

// Initialize cache monitor
function initCacheMonitor() {
    updateCacheStats();
    updateCacheEntries();
}

// Initialize
initCacheMonitor();

// Handle cache clear button
elements.clearBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to clear all cached responses?')) {
        clearCache();
        updateCacheStats();
        updateCacheEntries();
    }
});

// Handle refresh button
elements.refreshBtn.addEventListener('click', () => {
    updateCacheStats();
    updateCacheEntries();
    // Add a brief animation to show refresh
    elements.refreshBtn.classList.add('rotating');
    setTimeout(() => {
        elements.refreshBtn.classList.remove('rotating');
    }, 500);
});



// Global functions for entry actions
window.viewFullEntry = function(timestamp) {
    const cache = JSON.parse(localStorage.getItem('religious_guidance_cache') || '[]');
    const entry = cache.find(e => e.timestamp.toString() === timestamp);
    
    if (entry) {
        const fullText = `
Source: ${getSourceTextName(entry.selectedText)}
Time: ${new Date(entry.timestamp).toLocaleString()}

User Input:
${entry.userMessage}

Response:
${JSON.stringify(entry.response, null, 2)}
        `;
        alert(fullText);
    }
};

window.deleteEntry = function(timestamp) {
    if (confirm('Are you sure you want to delete this cache entry?')) {
        const cache = JSON.parse(localStorage.getItem('religious_guidance_cache') || '[]');
        const filteredCache = cache.filter(e => e.timestamp.toString() !== timestamp);
        localStorage.setItem('religious_guidance_cache', JSON.stringify(filteredCache));
        updateCacheStats();
        updateCacheEntries();
    }
}; 