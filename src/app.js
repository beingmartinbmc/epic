import prompts from './prompts.js';
import { getReferenceUrl, parseSource } from './utils.js';
import { findCachedResponse, cacheResponse, clearCache, getCacheStats } from './cache.js';

const API_CONFIG = window.API_CONFIG || {};

// Get your API key from environment variable or configuration

// Theme mapping
const THEME_MAPPING = {
    'BHAGAVAD_GITA': 'theme-hindu',
    'QURAN': 'theme-islamic',
    'BIBLE': 'theme-christian',
    'GURU_GRANTH_SAHIB': 'theme-sikh',
    'ALL': 'theme-universal'
};

// Prompt mapping
const PROMPT_MAPPING = {
    'BHAGAVAD_GITA': prompts.userPrompts.bhagavadGita,
    'QURAN': prompts.userPrompts.quran,
    'BIBLE': prompts.userPrompts.bible,
    'GURU_GRANTH_SAHIB': prompts.userPrompts.guruGranthSahib,
    'ALL': prompts.userPrompts.allTexts
};

// UI Elements
const form = document.getElementById('guidanceForm');
const loadingSpinner = document.getElementById('loadingSpinner');
const errorMessage = document.getElementById('errorMessage');
const quotesSection = document.getElementById('quotesSection');
const quotesGrid = document.getElementById('quotesGrid');
const summarySection = document.getElementById('summarySection');
const summaryText = document.getElementById('summaryText');
const selectedText = document.getElementById('selectedText');
const container = document.querySelector('.divine-container');

// Cache monitor elements
const cacheMonitor = {
    count: document.getElementById('cacheCount'),
    validEntries: document.getElementById('validEntries'),
    latestCache: document.getElementById('latestCache'),
    clearBtn: document.getElementById('clearCacheBtn')
};

// Update cache statistics
function updateCacheStats() {
    const stats = getCacheStats();
    
    if (cacheMonitor.count) {
        cacheMonitor.count.textContent = stats.validEntries;
    }
    if (cacheMonitor.validEntries) {
        cacheMonitor.validEntries.textContent = stats.validEntries;
    }
    if (cacheMonitor.latestCache) {
        cacheMonitor.latestCache.textContent = stats.newestEntry ? 
            new Date(stats.newestEntry).toLocaleTimeString() : 
            'No entries';
    }
}

// Initialize cache stats
updateCacheStats();

// Handle cache clear button
if (cacheMonitor.clearBtn) {
    cacheMonitor.clearBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent tooltip from closing immediately
        clearCache();
        updateCacheStats();
    });
}

// Auto-update cache stats every minute
setInterval(updateCacheStats, 60000);

// Handle theme changes
selectedText.addEventListener('change', (e) => {
    // Remove all theme classes
    Object.values(THEME_MAPPING).forEach(theme => {
        container.classList.remove(theme);
    });
    
    // Add selected theme
    const newTheme = THEME_MAPPING[e.target.value] || 'theme-universal';
    container.classList.add(newTheme);
    
    // Update header content
    updateHeaderContent(e.target.value);
});

function updateHeaderContent(selectedValue) {
    const titleIcon = document.querySelector('.divine-title i');
    const titleText = document.querySelector('.divine-title span');
    const subtitle = document.querySelector('.divine-subtitle');
    
    let iconClass = 'fas fa-om';
    let title = 'Divine Wisdom';
    let subtitleText = 'Sacred guidance from ancient texts';
    
    switch(selectedValue) {
        case 'BHAGAVAD_GITA':
            iconClass = 'fas fa-om';
            title = 'Hindu Wisdom';
            subtitleText = 'Sacred guidance from the Bhagavad Gita';
            break;
        case 'QURAN':
            iconClass = 'fas fa-star-and-crescent';
            title = 'Islamic Guidance';
            subtitleText = 'Blessed guidance from the Holy Quran';
            break;
        case 'BIBLE':
            iconClass = 'fas fa-cross';
            title = 'Christian Wisdom';
            subtitleText = 'Sacred wisdom from the Holy Bible';
            break;
        case 'GURU_GRANTH_SAHIB':
            iconClass = 'fas fa-khanda';
            title = 'Sikh Wisdom';
            subtitleText = 'Divine wisdom from the Guru Granth Sahib';
            break;
    }
    
    titleIcon.className = iconClass;
    titleText.textContent = title;
    subtitle.textContent = subtitleText;
}

// Handle form submission
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const userMessage = document.getElementById('userMessage').value;
    const selectedText = document.getElementById('selectedText').value;
    
    // Show loading state
    loadingSpinner.style.display = 'block';
    errorMessage.style.display = 'none';
    quotesSection.style.display = 'none';
    summarySection.style.display = 'none';
    
    try {
        // Check cache first
        let response = findCachedResponse(selectedText, userMessage);
        let fromCache = !!response;
        
        if (!response) {
            // If not in cache, make API call
            response = await getReligiousGuidance(userMessage, selectedText);
            // Cache the response
            cacheResponse(selectedText, userMessage, response);
            // Update cache stats
            updateCacheStats();
        }
        
        displayGuidance(response, fromCache);
    } catch (error) {
        showError(error.message);
    } finally {
        loadingSpinner.style.display = 'none';
    }
});

async function getReligiousGuidance(userMessage, selectedText) {
    const textPrompt = PROMPT_MAPPING[selectedText] || prompts.userPrompts.allTexts;
    const userPrompt = `${textPrompt}\n\nUser's situation: ${userMessage}`;

    // Use proxy URL or fallback to local endpoint
    const API_URL = API_CONFIG.OPENAI_PROXY_URL || '/api/openai-proxy';
    
    // Debug logging
    console.log('API_CONFIG:', window.API_CONFIG);
    console.log('Using API URL:', API_URL);
    
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            messages: [
                { role: 'system', content: prompts.system.prompt },
                { role: 'user', content: userPrompt }
            ]
        })
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error?.message || prompts.errors.serviceUnavailable);
    }

    return parseOpenAIResponse(await response.json());
}

function parseOpenAIResponse(data) {
    try {
        const content = data.choices[0].message.content;
        
        const quotes = [];
        const lines = content.split('\n');
        let currentQuote = null;
        let summary = '';
        
        for (let line of lines) {
            line = line.trim();
            if (!line) continue;
            
            if (line.startsWith('QUOTE:')) {
                if (currentQuote) {
                    quotes.push(currentQuote);
                }
                currentQuote = {
                    text: line.substring('QUOTE:'.length).trim(),
                    source: '',
                    translation: ''
                };
            } else if (line.startsWith('SOURCE:') && currentQuote) {
                currentQuote.source = line.substring('SOURCE:'.length).trim();
            } else if (line.startsWith('CONTEXT:') && currentQuote) {
                currentQuote.translation = line.substring('CONTEXT:'.length).trim();
            } else if (line.startsWith('SUMMARY:')) {
                summary = line.substring('SUMMARY:'.length).trim();
            }
        }
        
        if (currentQuote) {
            quotes.push(currentQuote);
        }
        
        if (!summary) {
            summary = prompts.fallbackSummaries.default;
        }
        
        return {
            quotes,
            summary
        };
    } catch (error) {
        console.error('Error parsing response:', error);
        throw new Error(prompts.errors.noResponse);
    }
}

function displayGuidance(guidance, fromCache = false) {
    // Display quotes
    quotesGrid.innerHTML = guidance.quotes.map(quote => {
        const { source, text, translation } = quote;
        const { bookName, chapter, verse } = parseSource(source);
        const referenceUrl = getReferenceUrl(bookName, `${chapter}:${verse}`);
        
        return `
            <div class="quote-card">
                <div class="quote-text">${text}</div>
                <div class="quote-source">
                    <i class="fas fa-book"></i>
                    ${referenceUrl ? 
                        `<a href="${referenceUrl}" target="_blank" rel="noopener noreferrer">${source}</a>` :
                        source
                    }
                </div>
                ${translation ? `
                    <div class="quote-context">
                        <span class="context-label">Context</span>
                        <div class="context-text">${translation}</div>
                    </div>
                ` : ''}
            </div>
        `;
    }).join('');
    
    // Display summary
    summaryText.textContent = guidance.summary;
    
    // Show sections
    quotesSection.style.display = 'block';
    summarySection.style.display = 'block';
}

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}

// Auto-resize textarea
const textarea = document.getElementById('userMessage');
textarea.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = Math.min(this.scrollHeight, 200) + 'px';
}); 