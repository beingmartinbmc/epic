import { clearCache, getCacheStats } from './cache.js';

// Cache monitor elements
const elements = {
    validEntries: document.getElementById('validEntries'),
    latestCache: document.getElementById('latestCache'),
    clearBtn: document.getElementById('clearCacheBtn'),
    refreshBtn: document.getElementById('refreshStatsBtn')
};

// Update cache statistics
function updateCacheStats() {
    const stats = getCacheStats();
    
    elements.validEntries.textContent = stats.validEntries;
    elements.latestCache.textContent = stats.newestEntry ? 
        new Date(stats.newestEntry).toLocaleString() : 
        'No entries';
}

// Initialize cache stats
updateCacheStats();

// Handle cache clear button
elements.clearBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to clear all cached responses?')) {
        clearCache();
        updateCacheStats();
    }
});

// Handle refresh button
elements.refreshBtn.addEventListener('click', () => {
    updateCacheStats();
    // Add a brief animation to show refresh
    elements.refreshBtn.classList.add('rotating');
    setTimeout(() => {
        elements.refreshBtn.classList.remove('rotating');
    }, 500);
}); 