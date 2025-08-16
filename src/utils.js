

/**
 * Robust URL cleaner that handles various URL formats from AI responses
 * @param {string} url - The URL to clean
 * @returns {string|null} Cleaned URL or null if invalid
 */
export function cleanUrl(url) {
  if (!url) return null;

  try {
    // Try parsing directly
    const u = new URL(url.trim());
    return u.toString();
  } catch (e) {
    // Fallback: AI sometimes returns "example.com" without scheme
    try {
      const fixed = "https://" + url.trim().replace(/^https?:\/\//, "");
      const u = new URL(fixed);
      return u.toString();
    } catch {
      return null; // can't be fixed
    }
  }
}

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