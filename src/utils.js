/**
 * Language mappings for book names
 */
import bookNameMappingsData from './data/book-name-mappings.json';

const BOOK_NAME_MAPPINGS = bookNameMappingsData;

// Simple cache for book name normalization
const bookNameCache = new Map();

// Performance monitoring utilities
const performanceMetrics = {
  parseTimes: [],
  renderTimes: [],
  apiCallTimes: []
};

// Performance monitoring functions
export const performanceMonitor = {
  startTimer: (name) => {
    return performance.now();
  },
  
  endTimer: (name, startTime) => {
    const duration = performance.now() - startTime;
    if (performanceMetrics[name]) {
      performanceMetrics[name].push(duration);
      // Keep only last 100 measurements
      if (performanceMetrics[name].length > 100) {
        performanceMetrics[name].shift();
      }
    }
    return duration;
  },
  
  getAverageTime: (name) => {
    const times = performanceMetrics[name] || [];
    if (times.length === 0) return 0;
    return times.reduce((sum, time) => sum + time, 0) / times.length;
  },
  
  logMetrics: () => {
    console.log('Performance Metrics:', {
      averageParseTime: performanceMonitor.getAverageTime('parseTimes'),
      averageRenderTime: performanceMonitor.getAverageTime('renderTimes'),
      averageApiCallTime: performanceMonitor.getAverageTime('apiCallTimes')
    });
  }
};

// Debounce utility for performance optimization
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle utility for performance optimization
export const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

/**
 * Normalizes a book name by translating it to English if it's in another language
 * @param {string} bookName - The book name in any language
 * @returns {string} The English book name
 */
function normalizeBookName(bookName) {
  if (!bookName) return '';
  
  // Check cache first
  if (bookNameCache.has(bookName)) {
    return bookNameCache.get(bookName);
  }
  
  // First check if it's already in English
  const englishBookNames = Object.values(BOOK_NAME_MAPPINGS);
  if (englishBookNames.includes(bookName)) {
    bookNameCache.set(bookName, bookName);
    return bookName;
  }
  
  // Check if it's a translated name and return the English equivalent
  const result = BOOK_NAME_MAPPINGS[bookName] || bookName;
  bookNameCache.set(bookName, result);
  return result;
}




/**
 * Formats reference display with proper nomenclature for each sacred text
 * @param {string} bookName - The book name
 * @param {string} chapter - The chapter number
 * @param {string} verse - The verse number
 * @returns {string} Formatted reference string
 */
export function formatReferenceDisplay(bookName, chapter, verse) {
  if (!bookName || !chapter) return '';
  
  const normalizedBookName = normalizeBookName(bookName).toLowerCase();
  
  // Bhagavad Gita
  if (normalizedBookName.includes('bhagavad gita') || normalizedBookName.includes('gita')) {
    return `Adhya ${chapter}${verse ? `, Shlok ${verse}` : ''}`;
  }
  
  // Quran
  if (normalizedBookName.includes('quran') || normalizedBookName.includes('surah')) {
    return `Surah ${chapter}${verse ? `, Ayah ${verse}` : ''}`;
  }
  
  // Bible
  if (normalizedBookName.includes('bible') || normalizedBookName.includes('genesis') || 
      normalizedBookName.includes('matthew') || normalizedBookName.includes('john') ||
      normalizedBookName.includes('psalms') || normalizedBookName.includes('proverbs')) {
    return `Chapter ${chapter}${verse ? `, Verse ${verse}` : ''}`;
  }
  
  // Guru Granth Sahib
  if (normalizedBookName.includes('guru granth sahib') || normalizedBookName.includes('granth')) {
    return `Ang ${chapter}`;
  }
  
  // Vedas
  if (normalizedBookName.includes('rigveda') || normalizedBookName.includes('yajurveda') || 
      normalizedBookName.includes('samaveda') || normalizedBookName.includes('atharvaveda')) {
    return `Mandala ${chapter}${verse ? `, Sukta ${verse}` : ''}`;
  }
  
  // Upanishads
  if (normalizedBookName.includes('upanishad')) {
    // Handle dot notation for Upanishads (e.g., "6.14.2" becomes "Chapter 6, Section 14, Verse 2")
    if (verse && verse.includes('.')) {
      const parts = verse.split('.');
      if (parts.length === 2) {
        return `Chapter ${chapter}, Section ${parts[0]}, Verse ${parts[1]}`;
      } else if (parts.length === 3) {
        return `Chapter ${chapter}, Section ${parts[0]}, Subsection ${parts[1]}, Verse ${parts[2]}`;
      }
    }
    return `Chapter ${chapter}${verse ? `, Verse ${verse}` : ''}`;
  }
  
  // Tripitaka
  if (normalizedBookName.includes('tripitaka') || normalizedBookName.includes('tipitaka')) {
    return `Sutta ${chapter}${verse ? `, Verse ${verse}` : ''}`;
  }
  
  // Tao Te Ching
  if (normalizedBookName.includes('tao te ching') || normalizedBookName.includes('dao de jing')) {
    return `Chapter ${chapter}`;
  }
  
  // Analects of Confucius
  if (normalizedBookName.includes('analects') || normalizedBookName.includes('confucius')) {
    return `Book ${chapter}${verse ? `, Chapter ${verse}` : ''}`;
  }
  
  // Dhammapada
  if (normalizedBookName.includes('dhammapada')) {
    return `Chapter ${chapter}${verse ? `, Verse ${verse}` : ''}`;
  }
  
  // Talmud
  if (normalizedBookName.includes('talmud')) {
    return `Tractate ${chapter}${verse ? `, Chapter ${verse}` : ''}`;
  }
  
  // Avesta
  if (normalizedBookName.includes('yasna')) {
    return `Yasna ${chapter}${verse ? `, Verse ${verse}` : ''}`;
  }
  
  if (normalizedBookName.includes('yasht')) {
    return `Yasht ${chapter}${verse ? `, Verse ${verse}` : ''}`;
  }
  
  if (normalizedBookName.includes('visperad')) {
    return `Visperad ${chapter}${verse ? `, Verse ${verse}` : ''}`;
  }
  
  if (normalizedBookName.includes('vendidad')) {
    return `Vendidad ${chapter}${verse ? `, Verse ${verse}` : ''}`;
  }
  
  if (normalizedBookName.includes('khordeh avesta') || normalizedBookName.includes('khordeh')) {
    return `Khordeh Avesta`;
  }
  
  if (normalizedBookName.includes('gathas')) {
    return `Gathas ${chapter}${verse ? `, Verse ${verse}` : ''}`;
  }
  
  if (normalizedBookName.includes('avesta')) {
    return `Avesta ${chapter}${verse ? `, Verse ${verse}` : ''}`;
  }
  
  // Default format
  return `${chapter}${verse ? `:${verse}` : ''}`;
}

/**
 * Extracts chapter and verse from a source string
 * @param {string} source - The source string (e.g., "Bhagavad Gita 2:47")
 * @returns {{bookName: string, chapter: string, verse: string}} The extracted components
 */
export function parseSource(source) {
  if (!source) return { bookName: '', chapter: '', verse: '' };

  // If the source contains a comma, try to extract the specific Veda part
  if (/the vedas/i.test(source) && /,/.test(source)) {
    // e.g. 'The Vedas, Rig Veda 10.129.1'
    const parts = source.split(',');
    // Try to find the part that matches a Veda pattern
    for (let part of parts) {
      part = part.trim();
      const vedaPattern = /^(Rig\s*-?\s*Veda|Yajur\s*-?\s*Veda|Sama\s*-?\s*Veda|Atharva\s*-?\s*Veda|Rigveda|Yajurveda|Samaveda|Atharvaveda)\s*(\d+)(?:\.(\d+))?(?:\.(\d+))?/i;
      const vedasMatch = part.match(vedaPattern);
      if (vedasMatch) {
        const bookName = vedasMatch[1];
        const chapter = vedasMatch[2];
        const verse = vedasMatch[3] ? (vedasMatch[4] ? `${vedasMatch[3]}.${vedasMatch[4]}` : vedasMatch[3]) : '';
        return { bookName, chapter, verse };
      }
    }
  }

  // Handle Guru Granth Sahib Ang format (e.g., "Guru Granth Sahib Ang 786")
  const angMatch = source.match(/^(.*?)\s+(?:Ang|अंग)\s*(\d+)/i);
  if (angMatch) {
    const bookName = angMatch[1].trim();
    const chapter = angMatch[2];
    return { bookName, chapter, verse: '' };
  }

  // Handle Veda format with dot notation (e.g., "Rig Veda 10.85.23")
  const vedaMatch = source.match(/^(Rig\s*-?\s*Veda|Yajur\s*-?\s*Veda|Sama\s*-?\s*Veda|Atharva\s*-?\s*Veda|Rigveda|Yajurveda|Samaveda|Atharvaveda)\s*(\d+)(?:\.(\d+))?(?:\.(\d+))?/i);
  if (vedaMatch) {
    const bookName = vedaMatch[1];
    const chapter = vedaMatch[2];
    const verse = vedaMatch[3] ? (vedaMatch[4] ? `${vedaMatch[3]}.${vedaMatch[4]}` : vedaMatch[3]) : '';
    return { bookName, chapter, verse };
  }

  // Handle Avesta format with dot notation (e.g., "Yasna 30.2", "Yasht 17.14")
  const avestaMatch = source.match(/^(Yasna|Yasht|Visperad|Vendidad|Gathas|Khordeh\s+Avesta)\s*(\d+)(?:\.(\d+))?/i);
  if (avestaMatch) {
    const bookName = avestaMatch[1];
    const chapter = avestaMatch[2];
    const verse = avestaMatch[3] || '';
    return { bookName, chapter, verse };
  }

  // Handle Upanishad format with dot notation (e.g., "Chandogya Upanishad 6.14.2", "Brihadaranyaka Upanishad 4.4.22")
  const upanishadMatch = source.match(/^(Brihadaranyaka|Chandogya|Taittiriya|Aitareya|Kena|Katha|Isha|Mundaka|Mandukya|Prashna|Shvetashvatara|Kaushitaki|Maitri|Narada|Paramahamsa|Jabala|Kaivalya|Vajrasuchika|Tejobindu|Nadabindu|Dhyanabindu|Brahmabindu|Atmabodha|Sarvasara|Aruneya|Maitreya|Brahmana|Vajrasuchika|Yogatattva|Hamsa|Garbha|Narayana|Paramahamsa|Advayataraka|Rama|Rahasyatraya|Muktika|Shariraka|Akshi|Ekakshara|Annapurna|Surya|Akshamalika|Adhyatma|Savitri|Atma|Prasna|Garbha|Mahavakya|Sandilya|Paingala|Bhikshuka|Turiyatita|Yajnavalkya|Satyayaniya|Muktika|Niralamba|Sarasvatirahasya|Bahvricha|Muktika|Rama|Rahasyatraya|Muktika|Shariraka|Akshi|Ekakshara|Annapurna|Surya|Akshamalika|Adhyatma|Savitri|Atma|Prasna|Garbha|Mahavakya|Sandilya|Paingala|Bhikshuka|Turiyatita|Yajnavalkya|Satyayaniya|Muktika|Niralamba|Sarasvatirahasya|Bahvricha)\s+Upanishad\s*(\d+)(?:\.(\d+))?(?:\.(\d+))?/i);
  if (upanishadMatch) {
    const bookName = upanishadMatch[1] + ' Upanishad';
    const chapter = upanishadMatch[2];
    const verse = upanishadMatch[3] ? (upanishadMatch[4] ? `${upanishadMatch[3]}.${upanishadMatch[4]}` : upanishadMatch[3]) : '';
    return { bookName, chapter, verse };
  }

  // Handle standard format (e.g., "Bhagavad Gita 2:47")
  const standardMatch = source.match(/^(.*?)\s+(\d+)(?::(\d+))?$/);
  if (standardMatch) {
    const bookName = standardMatch[1].trim();
    const chapter = standardMatch[2];
    const verse = standardMatch[3] || '';
    return { bookName, chapter, verse };
  }

  // If no pattern matches, return the source as bookName
  return { bookName: source.trim(), chapter: '', verse: '' };
} 