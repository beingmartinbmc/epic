window.addEventListener('DOMContentLoaded', async () => {
    const API_CONFIG = {
        OPENAI_PROXY_URL: 'https://religious-guide-j983g9ivu-beingmartinbmcs-projects.vercel.app/api/openai-proxy'
    };

    const promptsModule = await import('./prompts.js');
    const utils = await import('./utils.js');
    const cache = await import('./cache.js');

    const prompts = promptsModule.default;
    const { getReferenceUrl, parseSource } = utils;
    const { findCachedResponse, cacheResponse, clearCache, getCacheStats } = cache;

    let mozillaLangDetector;
    let cld3Detector;
    let francDetector;
    
    try {
        const { LangDetect } = await import('https://esm.sh/@mozilla/language-detection');
        mozillaLangDetector = new LangDetect();
    } catch (e) {
        console.warn('Mozilla language detection unavailable:', e);
    }
    
    try {
        const { LanguageDetector } = await import('cld3-asm');
        cld3Detector = new LanguageDetector();
    } catch (e) {
        console.warn('CLD3 language detection unavailable:', e);
    }
    
    try {
        const franc = await import('franc-min');
        francDetector = franc.default;
    } catch (e) {
        console.warn('Franc language detection unavailable:', e);
    }

    const THEME_MAPPING = {
        'BHAGAVAD_GITA': 'theme-hindu',
        'QURAN': 'theme-islamic',
        'BIBLE': 'theme-christian',
        'GURU_GRANTH_SAHIB': 'theme-sikh',
        'ALL': 'theme-universal'
    };

    const PROMPT_MAPPING = {
        'BHAGAVAD_GITA': prompts.userPrompts.bhagavadGita,
        'QURAN': prompts.userPrompts.quran,
        'BIBLE': prompts.userPrompts.bible,
        'GURU_GRANTH_SAHIB': prompts.userPrompts.guruGranthSahib,
        'ALL': prompts.userPrompts.allTexts
    };

    const form = document.getElementById('guidanceForm');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const errorMessage = document.getElementById('errorMessage');
    const quotesSection = document.getElementById('quotesSection');
    const quotesGrid = document.getElementById('quotesGrid');
    const summarySection = document.getElementById('summarySection');
    const summaryText = document.getElementById('summaryText');
    const selectedText = document.getElementById('selectedText');
    const container = document.querySelector('.divine-container');
    const cacheMonitor = {
        count: document.getElementById('cacheCount'),
        validEntries: document.getElementById('validEntries'),
        latestCache: document.getElementById('latestCache'),
        clearBtn: document.getElementById('clearCacheBtn')
    };

    function updateCacheStats() {
        const stats = getCacheStats();
        if (cacheMonitor.count) cacheMonitor.count.textContent = stats.validEntries;
        if (cacheMonitor.validEntries) cacheMonitor.validEntries.textContent = stats.validEntries;
        if (cacheMonitor.latestCache) {
            cacheMonitor.latestCache.textContent = stats.newestEntry ? new Date(stats.newestEntry).toLocaleTimeString() : 'No entries';
        }
    }

    updateCacheStats();
    if (cacheMonitor.clearBtn) {
        cacheMonitor.clearBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            clearCache();
            updateCacheStats();
        });
    }
    setInterval(updateCacheStats, 60000);

    selectedText.addEventListener('change', (e) => {
        Object.values(THEME_MAPPING).forEach(theme => container.classList.remove(theme));
        const newTheme = THEME_MAPPING[e.target.value] || 'theme-universal';
        container.classList.add(newTheme);
        updateHeaderContent(e.target.value);
    });

    function updateHeaderContent(selectedValue) {
        const titleIcon = document.querySelector('.divine-title i');
        const titleText = document.querySelector('.divine-title span');
        const subtitle = document.querySelector('.divine-subtitle');
        let iconClass = 'fas fa-om';
        let title = 'Divine Wisdom';
        let subtitleText = 'Sacred guidance from ancient texts';
        switch (selectedValue) {
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

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const userMessage = document.getElementById('userMessage').value.trim();
        const selectedTextValue = document.getElementById('selectedText').value;

        loadingSpinner.style.display = 'block';
        errorMessage.style.display = 'none';
        quotesSection.style.display = 'none';
        summarySection.style.display = 'none';

        try {
            let response = findCachedResponse(selectedTextValue, userMessage);
            let fromCache = !!response;

            if (!response) {
                response = await getReligiousGuidance(userMessage, selectedTextValue);
                cacheResponse(selectedTextValue, userMessage, response);
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

        const LANG_NAME_MAP = {
            hi: 'Hindi', es: 'Spanish', fr: 'French', de: 'German', ar: 'Arabic', bn: 'Bengali',
            pa: 'Punjabi', gu: 'Gujarati', mr: 'Marathi', te: 'Telugu', ta: 'Tamil', ur: 'Urdu',
            pt: 'Portuguese', it: 'Italian', ja: 'Japanese', ko: 'Korean', ru: 'Russian', tr: 'Turkish',
            zh: 'Chinese', 'zh-CN': 'Chinese', 'zh-TW': 'Chinese', 'zh-HK': 'Chinese',
            nl: 'Dutch', sv: 'Swedish', da: 'Danish', no: 'Norwegian', fi: 'Finnish',
            pl: 'Polish', cs: 'Czech', sk: 'Slovak', hu: 'Hungarian', ro: 'Romanian',
            bg: 'Bulgarian', hr: 'Croatian', sr: 'Serbian', sl: 'Slovenian', et: 'Estonian',
            lv: 'Latvian', lt: 'Lithuanian', mt: 'Maltese', el: 'Greek', he: 'Hebrew',
            th: 'Thai', vi: 'Vietnamese', id: 'Indonesian', ms: 'Malay', fil: 'Filipino',
            sw: 'Swahili', am: 'Amharic', ha: 'Hausa', yo: 'Yoruba', ig: 'Igbo',
            ne: 'Nepali', si: 'Sinhala', my: 'Burmese', km: 'Khmer', lo: 'Lao'
        };

        let detectedLanguage = 'en';
        let confidence = 0;

        // Try Mozilla detector first
        if (mozillaLangDetector) {
            try {
                const results = mozillaLangDetector.detect(userMessage || '');
                if (results && results.length > 0) {
                    detectedLanguage = results[0].language;
                    confidence = results[0].confidence || 0;
                }
            } catch (e) {
                console.warn('Mozilla language detection error:', e);
            }
        }

        // Fallback to CLD3 if Mozilla failed or confidence is low
        if ((detectedLanguage === 'und' || confidence < 0.5) && cld3Detector) {
            try {
                const result = cld3Detector.detect(userMessage || '');
                if (result && result.language && result.language !== 'und') {
                    detectedLanguage = result.language;
                    confidence = result.probability || 0;
                }
            } catch (e) {
                console.warn('CLD3 language detection error:', e);
            }
        }

        // Fallback to Franc if both failed
        if ((detectedLanguage === 'und' || confidence < 0.3) && francDetector) {
            try {
                const result = francDetector(userMessage || '');
                if (result && result !== 'und') {
                    detectedLanguage = result;
                    confidence = 0.5; // Franc doesn't provide confidence
                }
            } catch (e) {
                console.warn('Franc language detection error:', e);
            }
        }

        let langInstruction = 'IMPORTANT: Respond in English.';
        if (detectedLanguage !== 'und' && detectedLanguage !== 'en' && confidence > 0.3) {
            const langName = LANG_NAME_MAP[detectedLanguage];
            if (langName) {
                langInstruction = `IMPORTANT: Respond in ${langName}. The user wrote in ${langName}, so provide your entire response (quotes, context, and summary) in ${langName}.`;
            }
        }

        const userPrompt = `${textPrompt}\n\nUser's situation: ${userMessage}`;

        const response = await fetch(API_CONFIG.OPENAI_PROXY_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                messages: [
                    { role: 'system', content: `${prompts.system.prompt}\n\n${langInstruction}` },
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
                    if (currentQuote) quotes.push(currentQuote);
                    currentQuote = { text: line.substring(6).trim(), source: '', translation: '' };
                } else if (line.startsWith('SOURCE:') && currentQuote) {
                    currentQuote.source = line.substring(7).trim();
                } else if (line.startsWith('CONTEXT:') && currentQuote) {
                    currentQuote.translation = line.substring(8).trim();
                } else if (line.startsWith('SUMMARY:')) {
                    summary = line.substring(8).trim();
                }
            }

            if (currentQuote) quotes.push(currentQuote);
            if (!summary) summary = prompts.fallbackSummaries.default;

            return { quotes, summary };
        } catch (error) {
            console.error('Error parsing response:', error);
            throw new Error(prompts.errors.noResponse);
        }
    }

    function displayGuidance(guidance, fromCache = false) {
        quotesGrid.innerHTML = guidance.quotes.map(quote => {
            const { source, text, translation } = quote;
            const { bookName, chapter, verse } = parseSource(source);
            const referenceUrl = getReferenceUrl(bookName, `${chapter}:${verse}`);
            return `
        <div class="quote-card">
          <div class="quote-text">${text}</div>
          <div class="quote-source">
            <i class="fas fa-book"></i>
            ${referenceUrl ? `<a href="${referenceUrl}" target="_blank" rel="noopener noreferrer">${source}</a>` : source}
          </div>
          ${translation ? `
            <div class="quote-context">
              <span class="context-label">Context</span>
              <div class="context-text">${translation}</div>
            </div>` : ''}
        </div>
      `;
        }).join('');

        summaryText.textContent = guidance.summary;
        quotesSection.style.display = 'block';
        summarySection.style.display = 'block';
    }

    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
    }

    const textarea = document.getElementById('userMessage');
    textarea.addEventListener('input', function () {
        this.style.height = 'auto';
        this.style.height = Math.min(this.scrollHeight, 200) + 'px';
    });
});
