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


    
    // Simple language detection using character sets
    function detectLanguageSimple(text) {
        if (!text || text.trim().length === 0) return { language: 'en', confidence: 0 };
        
        const textLower = text.toLowerCase();
        
        // Hindi/Devanagari script detection
        if (/[\u0900-\u097F]/.test(text)) {
            return { language: 'hi', confidence: 0.9 };
        }
        
        // Arabic script detection
        if (/[\u0600-\u06FF]/.test(text)) {
            return { language: 'ar', confidence: 0.9 };
        }
        
        // Chinese characters detection
        if (/[\u4E00-\u9FFF]/.test(text)) {
            return { language: 'zh', confidence: 0.9 };
        }
        
        // Japanese characters detection
        if (/[\u3040-\u309F\u30A0-\u30FF]/.test(text)) {
            return { language: 'ja', confidence: 0.9 };
        }
        
        // Korean characters detection
        if (/[\uAC00-\uD7AF]/.test(text)) {
            return { language: 'ko', confidence: 0.9 };
        }
        
        // Thai characters detection
        if (/[\u0E00-\u0E7F]/.test(text)) {
            return { language: 'th', confidence: 0.9 };
        }
        
        // Russian characters detection
        if (/[\u0400-\u04FF]/.test(text)) {
            return { language: 'ru', confidence: 0.9 };
        }
        
        // Greek characters detection
        if (/[\u0370-\u03FF]/.test(text)) {
            return { language: 'el', confidence: 0.9 };
        }
        
        // Hebrew characters detection
        if (/[\u0590-\u05FF]/.test(text)) {
            return { language: 'he', confidence: 0.9 };
        }
        
        // Common Spanish words (example, similar for French, German, Italian, Portuguese, Dutch)
        const spanishWords = ['hola', 'gracias', 'por favor', 'buenos días', 'buenas noches', 'adiós', 'sí', 'no', 'me', 'te', 'se', 'que', 'de', 'la', 'el', 'un', 'una', 'y', 'o', 'pero', 'como', 'cuando', 'donde', 'quien', 'que', 'cual', 'cuyo', 'cuyas', 'cuyos', 'cuyas'];
        const spanishCount = spanishWords.filter(word => {
            // Use word boundaries to avoid false matches
            const regex = new RegExp(`\\b${word}\\b`, 'i');
            return regex.test(textLower);
        }).length;
        if (spanishCount >= 2) {
            return { language: 'es', confidence: 0.8 };
        }
        
        // Common French words
        const frenchWords = ['bonjour', 'merci', 's\'il vous plaît', 'au revoir', 'oui', 'non', 'je', 'tu', 'il', 'elle', 'nous', 'vous', 'ils', 'elles', 'le', 'la', 'les', 'un', 'une', 'des', 'et', 'ou', 'mais', 'comme', 'quand', 'où', 'qui', 'que', 'quoi', 'dont', 'duquel', 'de laquelle'];
        const frenchCount = frenchWords.filter(word => {
            // Use word boundaries to avoid false matches
            const regex = new RegExp(`\\b${word}\\b`, 'i');
            return regex.test(textLower);
        }).length;
        if (frenchCount >= 2) {
            return { language: 'fr', confidence: 0.8 };
        }
        
        // Common German words
        const germanWords = ['hallo', 'danke', 'bitte', 'auf wiedersehen', 'ja', 'nein', 'ich', 'du', 'er', 'sie', 'es', 'wir', 'ihr', 'sie', 'der', 'die', 'das', 'ein', 'eine', 'und', 'oder', 'aber', 'wie', 'wann', 'wo', 'wer', 'was', 'welcher', 'welche', 'welches'];
        const germanCount = germanWords.filter(word => {
            // Use word boundaries to avoid false matches
            const regex = new RegExp(`\\b${word}\\b`, 'i');
            return regex.test(textLower);
        }).length;
        if (germanCount >= 2) {
            return { language: 'de', confidence: 0.8 };
        }
        
        // Common Italian words
        const italianWords = ['ciao', 'grazie', 'prego', 'arrivederci', 'sì', 'no', 'io', 'tu', 'lui', 'lei', 'noi', 'voi', 'loro', 'il', 'la', 'lo', 'gli', 'le', 'un', 'una', 'e', 'o', 'ma', 'come', 'quando', 'dove', 'chi', 'che', 'cosa', 'quale'];
        const italianCount = italianWords.filter(word => {
            // Use word boundaries to avoid false matches
            const regex = new RegExp(`\\b${word}\\b`, 'i');
            return regex.test(textLower);
        }).length;
        if (italianCount >= 2) {
            return { language: 'it', confidence: 0.8 };
        }
        
        // Common Portuguese words - using word boundaries to avoid false matches
        const portugueseWords = ['olá', 'obrigado', 'por favor', 'adeus', 'sim', 'não', 'eu', 'tu', 'ele', 'ela', 'nós', 'vós', 'eles', 'elas', 'um', 'uma', 'e', 'ou', 'mas', 'como', 'quando', 'onde', 'quem', 'que', 'o que', 'qual'];
        const portugueseCount = portugueseWords.filter(word => {
            // Use word boundaries to avoid false matches like "to" matching "o"
            const regex = new RegExp(`\\b${word}\\b`, 'i');
            return regex.test(textLower);
        }).length;
        if (portugueseCount >= 2) {
            return { language: 'pt', confidence: 0.8 };
        }
        
        // Common Dutch words
        const dutchWords = ['hallo', 'dank je', 'alsjeblieft', 'tot ziens', 'ja', 'nee', 'ik', 'jij', 'hij', 'zij', 'het', 'wij', 'jullie', 'zij', 'de', 'het', 'een', 'en', 'of', 'maar', 'hoe', 'wanneer', 'waar', 'wie', 'wat', 'welke'];
        const dutchCount = dutchWords.filter(word => {
            // Use word boundaries to avoid false matches
            const regex = new RegExp(`\\b${word}\\b`, 'i');
            return regex.test(textLower);
        }).length;
        if (dutchCount >= 2) {
            return { language: 'nl', confidence: 0.8 };
        }
        
        // Default to English
        return { language: 'en', confidence: 0.5 };
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

        // Check if user message has less than 5 words
        const wordCount = userMessage.split(/\s+/).filter(word => word.length > 0).length;
        if (wordCount < 5) {
            showError('Please type more details. Share at least 5 words about your situation so I can provide meaningful guidance.');
            return;
        }

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

        // Use simple language detection
        const detectionResult = detectLanguageSimple(userMessage);
        const detectedLanguage = detectionResult.language;
        const confidence = detectionResult.confidence;

        let langInstruction = 'IMPORTANT: Respond in English.';
        if (detectedLanguage !== 'und' && detectedLanguage !== 'en' && confidence > 0.3) {
            const langName = LANG_NAME_MAP[detectedLanguage];
            if (langName) {
                langInstruction = `IMPORTANT: Respond in ${langName}. The user wrote in ${langName}, so provide your ENTIRE response (quotes, context, and summary) in ${langName}. TRANSLATE THE QUOTES INTO ${langName} - do not keep quotes in English.`;
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
            
            // Format reference based on the source type
            let reference;
            if (bookName.toLowerCase().includes('guru granth sahib') || bookName.toLowerCase().includes('granth')) {
                reference = `Ang ${chapter}`;
            } else {
                reference = `${chapter}:${verse}`;
            }
            
            const referenceUrl = getReferenceUrl(bookName, reference);
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
