const CACHE_KEY = 'religious_guidance_cache';
const CACHE_EXPIRY = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
const MAX_CACHE_ITEMS = 50; // Maximum number of items to keep in cache

/**
 * Calculates similarity between two strings
 * @param {string} str1 
 * @param {string} str2 
 * @returns {number} Similarity score between 0 and 1
 */
function calculateSimilarity(str1, str2) {
    const words1 = str1.toLowerCase().split(/\s+/);
    const words2 = str2.toLowerCase().split(/\s+/);
    
    // Create sets of unique words
    const set1 = new Set(words1);
    const set2 = new Set(words2);
    
    // Calculate intersection
    const intersection = new Set([...set1].filter(x => set2.has(x)));
    
    // Calculate Jaccard similarity
    const union = new Set([...set1, ...set2]);
    return intersection.size / union.size;
}

/**
 * Checks if a response contains repetitive quotes
 * @param {Object} response Response object with quotes array
 * @returns {boolean} True if response appears repetitive
 */
function isRepetitiveResponse(response) {
    if (!response.quotes || response.quotes.length < 2) return false;
    
    // Check for common repetitive patterns
    const sources = response.quotes.map(q => q.source);
    const uniqueSources = new Set(sources);
    
    // If more than 60% of quotes are from the same source, consider it repetitive
    if (uniqueSources.size / sources.length < 0.4) return true;
    
    // Check for specific repetitive quotes from all sacred texts
    const repetitivePatterns = [
        // Bhagavad Gita - commonly overused verses
        'Bhagavad Gita 2:48',
        'Bhagavad Gita 2:47',
        'Bhagavad Gita 3:35',
        'Bhagavad Gita 4:7',
        'Bhagavad Gita 4:8',
        'Bhagavad Gita 9:27',
        'Bhagavad Gita 18:66',
        
        // Bible - commonly overused verses
        'John 3:16',
        'Psalm 23',
        'Matthew 6:33',
        'Matthew 11:28',
        'Philippians 4:13',
        'Jeremiah 29:11',
        
        // Quran - commonly overused verses
        'Quran 1:1',
        'Quran 2:255',
        'Quran 2:286',
        'Quran 55:1',
        'Quran 112:1',
        
        // Guru Granth Sahib - commonly overused verses
        'Guru Granth Sahib 1:1',
        'Guru Granth Sahib 62:3',
        'Guru Granth Sahib 1:2',
        
        // Vedas - commonly overused verses
        'Rigveda 1:1:1',
        'Atharvaveda 10:8:44'
    ];
    
    const repetitiveCount = sources.filter(source => 
        repetitivePatterns.some(pattern => source.includes(pattern))
    ).length;
    
    // If more than 40% are known repetitive quotes, consider it repetitive
    return repetitiveCount / sources.length > 0.4;
}

/**
 * Gets cache data from localStorage
 * @returns {Array} Array of cache entries
 */
function getCacheData() {
    try {
        const cache = localStorage.getItem(CACHE_KEY);
        return cache ? JSON.parse(cache) : [];
    } catch (error) {
        console.warn('Error reading from cache:', error);
        return [];
    }
}

/**
 * Saves cache data to localStorage
 * @param {Array} cache Array of cache entries
 */
function saveCacheData(cache) {
    try {
        // Sort by timestamp and limit size
        const trimmedCache = cache
            .sort((a, b) => b.timestamp - a.timestamp)
            .slice(0, MAX_CACHE_ITEMS);
        
        localStorage.setItem(CACHE_KEY, JSON.stringify(trimmedCache));
    } catch (error) {
        console.warn('Error saving to cache:', error);
    }
}

/**
 * Finds a similar cached response
 * @param {string} selectedText Religious text selection
 * @param {string} userMessage User's query
 * @param {number} similarityThreshold Minimum similarity score to consider a match
 * @returns {Object|null} Cached response or null if no match found
 */
export function findCachedResponse(selectedText, userMessage, similarityThreshold = 0.7) {
    const cache = getCacheData();
    const now = Date.now();
    
    // Clean expired entries
    const validCache = cache.filter(entry => {
        return (now - entry.timestamp) < CACHE_EXPIRY;
    });
    
    if (validCache.length !== cache.length) {
        saveCacheData(validCache);
    }
    
    // Find best matching entry
    let bestMatch = null;
    let highestSimilarity = 0;
    
    for (const entry of validCache) {
        if (entry.selectedText === selectedText) {
            const similarity = calculateSimilarity(entry.userMessage, userMessage);
            if (similarity > similarityThreshold && similarity > highestSimilarity) {
                // Check if the cached response is not repetitive
                if (!isRepetitiveResponse(entry.response)) {
                    highestSimilarity = similarity;
                    bestMatch = entry;
                }
            }
        }
    }
    
    return bestMatch ? bestMatch.response : null;
}

/**
 * Saves a response to the cache
 * @param {string} selectedText Religious text selection
 * @param {string} userMessage User's query
 * @param {Object} response Response data to cache
 */
export function cacheResponse(selectedText, userMessage, response) {
    // Don't cache repetitive responses
    if (isRepetitiveResponse(response)) {
        return;
    }
    
    const cache = getCacheData();
    
    // Add new entry
    cache.push({
        selectedText,
        userMessage,
        response,
        timestamp: Date.now()
    });
    
    saveCacheData(cache);
}

/**
 * Clears all cached responses
 */
export function clearCache() {
    try {
        localStorage.removeItem(CACHE_KEY);
    } catch (error) {
        console.warn('Error clearing cache:', error);
    }
}

/**
 * Gets all cache entries for display
 * @returns {Array} Array of cache entries with formatted data
 */
export function getAllCacheEntries() {
    const cache = getCacheData();
    const now = Date.now();
    
    return cache
        .filter(entry => (now - entry.timestamp) < CACHE_EXPIRY)
        .sort((a, b) => b.timestamp - a.timestamp)
        .map(entry => ({
            ...entry,
            formattedTime: new Date(entry.timestamp).toLocaleString(),
            timeAgo: getTimeAgo(entry.timestamp),
            isExpired: false
        }));
}

/**
 * Gets expired cache entries
 * @returns {Array} Array of expired cache entries
 */
export function getExpiredCacheEntries() {
    const cache = getCacheData();
    const now = Date.now();
    
    return cache
        .filter(entry => (now - entry.timestamp) >= CACHE_EXPIRY)
        .sort((a, b) => b.timestamp - a.timestamp)
        .map(entry => ({
            ...entry,
            formattedTime: new Date(entry.timestamp).toLocaleString(),
            timeAgo: getTimeAgo(entry.timestamp),
            isExpired: true
        }));
}

/**
 * Calculates time ago from timestamp
 * @param {number} timestamp 
 * @returns {string} Formatted time ago string
 */
function getTimeAgo(timestamp) {
    const now = Date.now();
    const diff = now - timestamp;
    
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    return 'Just now';
}

/**
 * Gets cache statistics
 * @returns {Object} Cache statistics
 */
export function getCacheStats() {
    const cache = getCacheData();
    const now = Date.now();
    
    const validEntries = cache.filter(entry => (now - entry.timestamp) < CACHE_EXPIRY);
    const expiredEntries = cache.filter(entry => (now - entry.timestamp) >= CACHE_EXPIRY);
    
    return {
        totalEntries: cache.length,
        validEntries: validEntries.length,
        expiredEntries: expiredEntries.length,
        oldestEntry: cache.length > 0 ? new Date(Math.min(...cache.map(e => e.timestamp))) : null,
        newestEntry: cache.length > 0 ? new Date(Math.max(...cache.map(e => e.timestamp))) : null,
        cacheSize: JSON.stringify(cache).length // Approximate size in bytes
    };
} 