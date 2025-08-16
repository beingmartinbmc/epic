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
 * Generates a reference URL for a religious quote based on its source and reference numbers
 * @param {string} source - The source text (e.g., "Bhagavad Gita", "Quran", etc.)
 * @param {string} reference - The chapter:verse reference
 * @returns {string|null} The reference URL or null if no valid URL can be generated
 */
export function getReferenceUrl(source, reference) {
  if (!source || !reference) return null;

  // Normalize the source to handle translated book names
  const normalizedSource = normalizeBookName(source);
  const normalized = normalizedSource.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Handle different reference formats
  let chapter, verse;
  
  // Check if it's a Guru Granth Sahib Ang reference (e.g., "Ang 786" or "अंग 1")
  const angMatch = reference.match(/(?:Ang|अंग)\s*(\d+)/i);
  if (angMatch) {
    chapter = angMatch[1];
    verse = null;
  } else if (/^\d+\.\d+(?:\.\d+)?$/.test(reference)) {
    // Handle dot notation for Vedas (e.g., 10.85.23)
    const parts = reference.split('.');
    chapter = parts[0];
    verse = parts.slice(1).join('.') || null;
  } else {
    // Standard chapter:verse format
    const [chapterRaw, verseRaw] = reference.split(':').map(part => part.trim());
    if (!chapterRaw) return null;
    
    chapter = chapterRaw.replace(/[^0-9]/g, '');
    verse = verseRaw ? verseRaw.replace(/[^0-9]/g, '') : null;
  }

  // Quran Aliases - Handle both English and transliterated names
  const quranAliases = ['quran', 'alquran', 'alqur\'an', 'koran', 'surah', 'sura', 'holyquran', 'सूरह', 'सूरा'];
  if (quranAliases.some(alias => normalized.includes(alias)) || 
      normalizedSource.toLowerCase().includes('surah') || 
      normalizedSource.toLowerCase().includes('sura')) {
    if (!verse) return null;
    return `https://quran.com/${chapter}/${verse}`;
  }

  // Bhagavad Gita Aliases
  const gitaAliases = ['bhagavadgita', 'gita', 'bhagwatgita', 'shrimadbhagavadgita', 'bhagavad', 'भगवद गीता', 'भगवद', 'गीता'];
  if (gitaAliases.some(alias => normalized.includes(alias))) {
    if (!verse) return null;
    return `https://bhagavadgita.io/chapter/${chapter}/verse/${verse}`;
  }

  // Guru Granth Sahib - Handle both English and transliterated names
  const ggsAliases = ['granth', 'guru', 'sahib', 'gurugranthsahib', 'गुरु ग्रंथ साहिब', 'गुरु', 'ग्रंथ', 'साहिब'];
  if (ggsAliases.some(alias => normalized.includes(alias)) || 
      normalizedSource.toLowerCase().includes('guru granth sahib') ||
      normalizedSource.toLowerCase().includes('गुरु ग्रंथ साहिब')) {
    // For Guru Granth Sahib, the chapter is the Ang (page) number
    return `https://www.searchgurbani.com/guru-granth-sahib/ang/${chapter}`;
  }

  // Vedas - Check for exact matches first, then aliases
  const vedaAliases = ['rigveda', 'yajurveda', 'samaveda', 'atharvaveda'];

  for (const veda of vedaAliases) {
    if (normalized.includes(veda)) {
      if (!chapter) return null;

      if (veda === 'rigveda') {
        if (!chapter || !verse) return null;
        // Rigveda format: rv{book}{hymn}.htm (book padded to 3 digits, hymn padded to 2 digits)
        // For "Rigveda 10.71.1", we want Book 10, Hymn 71, so rv10071.htm
        const paddedBook = String(chapter).padStart(3, '0');
        const paddedHymn = String(verse).padStart(2, '0');
        
        // Known hymn counts for each book (approximate)
        const bookHymnCounts = {
          1: 191, 2: 43, 3: 62, 4: 58, 5: 87, 6: 75, 7: 104, 8: 103, 9: 114, 10: 99
        };
        
        // If the hymn number exceeds the known count for that book, link to book index
        if (bookHymnCounts[parseInt(chapter)] && parseInt(verse) > bookHymnCounts[parseInt(chapter)]) {
          return `https://www.sacred-texts.com/hin/rigveda/rvi${String(chapter).padStart(2, '0')}.htm`;
        }
        
        return `https://www.sacred-texts.com/hin/rigveda/rv${paddedBook}${paddedHymn}.htm`;
      }

      if (veda === 'atharvaveda') {
        const padded = String(chapter).padStart(2, '0');
        return `https://www.sacred-texts.com/hin/av/avbook${padded}.htm`;
      }

      if (veda === 'samaveda') {
        if (!chapter) return null;
        const padded = String(chapter).padStart(2, '0');
        return `https://www.sacred-texts.com/hin/sv/sv${padded}.htm`;
      }

      if (veda === 'yajurveda') {
        if (!chapter) return null;
        const padded = String(chapter).padStart(2, '0');
        return `https://www.sacred-texts.com/hin/yv/yv${padded}.htm`;
      }
    }
  }

  // Bible detection using book names and fallback on "bible" keyword
  // Handle both English and transliterated names
  const bibleBooksRegex = /\b(genesis|exodus|leviticus|numbers|deuteronomy|joshua|judges|ruth|samuel|kings|chronicles|ezra|nehemiah|esther|job|psalms?|proverbs?|ecclesiastes|songofsolomon|isaiah|jeremiah|lamentations|ezekiel|daniel|hosea|joel|amos|obadiah|jonah|micah|nahum|habakkuk|zephaniah|haggai|zechariah|malachi|matthew|mark|luke|john|acts|romans|corinthians|galatians|ephesians|philippians|colossians|thessalonians|timothy|titus|philemon|hebrews|james|peter|jude|revelation|यूलूसेज|यूहन्ना|मत्ती|मरकुस|लूका|प्रेरितों|रोमियों|कुरिन्थियों|गलातियों|इफिसियों|फिलिप्पियों|कुलुस्सियों|थिस्स्सलुनीकियों|तीमुथियुस|तीतुस|फिलेमोन|इब्रानियों|याकूब|पतरस|यहूदा|प्रकाशितवाक्य)\b/i;

  if (bibleBooksRegex.test(normalizedSource) || 
      normalized.includes('bible') || 
      normalized.includes('holybible') ||
      normalizedSource.toLowerCase().includes('यूलूसेज')) {
    
    const cleanSource = normalizedSource.replace(/\b(Holy\s)?Bible\b/i, '').trim();
    // Remove "The" from the beginning of Bible book names
    const cleanBookName = cleanSource.replace(/^The\s+/i, '');
    const formattedRef = verse ? `${chapter}:${verse}` : chapter;
    
    // Handle transliterated book names
    const bookNameMap = {
      'यूलूसेज': 'Judges',
      'यूहन्ना': 'John',
      'मत्ती': 'Matthew',
      'मरकुस': 'Mark',
      'लूका': 'Luke',
      'प्रेरितों': 'Acts',
      'रोमियों': 'Romans',
      'कुरिन्थियों': 'Corinthians',
      'गलातियों': 'Galatians',
      'इफिसियों': 'Ephesians',
      'फिलिप्पियों': 'Philippians',
      'कुलुस्सियों': 'Colossians',
      'थिस्स्सलुनीकियों': 'Thessalonians',
      'तीमुथियुस': 'Timothy',
      'तीतुस': 'Titus',
      'फिलेमोन': 'Philemon',
      'इब्रानियों': 'Hebrews',
      'याकूब': 'James',
      'पतरस': 'Peter',
      'यहूदा': 'Jude',
      'प्रकाशितवाक्य': 'Revelation'
    };
    
    let book = cleanBookName;
    for (const [hindi, english] of Object.entries(bookNameMap)) {
      if (cleanBookName.includes(hindi)) {
        book = english;
        break;
      }
    }
    
    const formattedBook = book.replace(/\s+/g, '+');
    return `https://www.biblegateway.com/passage/?search=${formattedBook}+${formattedRef}`;
  }

  // Buddhist Texts - Tripitaka, Nikayas, and other Buddhist scriptures
  const sourceLower = normalizedSource.toLowerCase();
  if (sourceLower.includes('tripitaka') || sourceLower.includes('tipitaka') || sourceLower.includes('त्रिपिटक') || sourceLower.includes('तीपिटक')) {
    // Sutta Pitaka
    if (sourceLower.includes('sutta') || sourceLower.includes('sutta pitaka') || sourceLower.includes('सुत्त पिटक')) {
      if (!chapter || !verse) return null;
      return `https://www.dhammatalks.org/suttas/`;
    }
    
    // Vinaya Pitaka
    if (sourceLower.includes('vinaya') || sourceLower.includes('vinaya pitaka') || sourceLower.includes('विनय पिटक')) {
      if (!chapter || !verse) return null;
      return `https://www.dhammatalks.org/vinaya/`;
    }
    
    // Abhidhamma Pitaka
    if (sourceLower.includes('abhidhamma') || sourceLower.includes('abhidhamma pitaka') || sourceLower.includes('अभिधम्म पिटक')) {
      if (!verse) return null;
      return `https://www.dhammatalks.org/suttas/`;
    }
    
    // General Tripitaka fallback
    if (sourceLower.includes('tripitaka') || sourceLower.includes('tipitaka') || sourceLower.includes('त्रिपिटक') || sourceLower.includes('तीपिटक')) {
      return `https://www.dhammatalks.org/suttas/`;
    }
  }

  // Tao Te Ching
  const taoTeChingAliases = ['taoteching', 'tao te ching', 'daodejing', 'dao de jing', 'laozi', 'lao tzu', '道德经', '老子'];
  if (taoTeChingAliases.some(alias => normalized.includes(alias)) || 
      normalizedSource.toLowerCase().includes('tao te ching') ||
      normalizedSource.toLowerCase().includes('dao de jing')) {
    if (!chapter) return null;
    return `https://ctext.org/dao-de-jing/zh?enodeid=${chapter}`;
  }

  // Analects of Confucius
  const confuciusAliases = ['analects', 'confucius', 'lunyu', 'lun yu', '论语', '孔子'];
  if (confuciusAliases.some(alias => normalized.includes(alias)) || 
      normalizedSource.toLowerCase().includes('analects of confucius') ||
      normalizedSource.toLowerCase().includes('lunyu')) {
    if (!chapter || !verse) return null;
    return `https://ctext.org/analects/zh?enodeid=${chapter}.${verse}`;
  }

  // Upanishads
  const upanishadAliases = ['upanishad', 'upanishads', 'उपनिषद', 'उपनिषद्'];
  const upanishadNames = ['brihadaranyaka', 'chandogya', 'taittiriya', 'aitareya', 'kena', 'katha', 'isha', 'mundaka', 'mandukya', 'prashna', 'shvetashvatara', 'kaushitaki', 'maitri'];
  
  for (const upanishad of upanishadNames) {
    if (normalized.includes(upanishad)) {
      if (!chapter) return null;
      return `https://www.sacred-texts.com/hin/upan/${upanishad}.htm`;
    }
  }
  
  if (upanishadAliases.some(alias => normalized.includes(alias))) {
    if (!chapter) return null;
    return `https://www.sacred-texts.com/hin/upan/`;
  }

  // Talmud
  const talmudAliases = ['talmud', 'gemara', 'תלמוד', 'גמרא'];
  const talmudTractates = ['berakhot', 'shabbat', 'eruvin', 'pesachim', 'yoma', 'sukkah', 'beitzah', 'rosh hashanah', 'taanit', 'megillah', 'moed katan', 'chagigah', 'yevamot', 'ketubot', 'nedarim', 'nazir', 'sotah', 'gittin', 'kiddushin', 'bava kamma', 'bava metzia', 'bava batra', 'sanhedrin', 'makkot', 'shevuot', 'avodah zarah', 'horayot', 'zevachim', 'menachot', 'chullin', 'bekhorot', 'arakhin', 'temurah', 'keritot', 'meilah', 'tamid', 'middot', 'niddah'];
  
  for (const tractate of talmudTractates) {
    if (normalized.includes(tractate)) {
      if (!chapter) return null;
      return `https://www.sefaria.org/${tractate}.${chapter}`;
    }
  }
  
  if (talmudAliases.some(alias => normalized.includes(alias))) {
    if (!chapter) return null;
    return `https://www.sefaria.org/Talmud`;
  }

  // Avesta
  const avestaAliases = ['avesta', 'zoroastrian', 'zoroastrianism', 'gathas', 'yasna', 'visperad', 'vendidad', 'yashts', 'khordeh avesta'];
  
  // Check for specific Avesta text types
  if (normalized.includes('yasna')) {
    if (!chapter) return null;
    return `https://www.avesta.org/yasna/yasna${chapter}.htm`;
  }
  
  if (normalized.includes('yasht') || normalized.includes('yashts')) {
    if (!chapter) return null;
    return `https://www.avesta.org/yasht/yasht${chapter}.htm`;
  }
  
  if (normalized.includes('visperad')) {
    if (!chapter) return null;
    return `https://www.avesta.org/visperad/visperad${chapter}.htm`;
  }
  
  if (normalized.includes('vendidad')) {
    if (!chapter) return null;
    return `https://www.avesta.org/vendidad/vendidad${chapter}.htm`;
  }
  
  if (normalized.includes('khordeh avesta') || normalized.includes('khordeh')) {
    return `https://www.avesta.org/ka/`;
  }
  
  if (normalized.includes('gathas')) {
    return `https://www.avesta.org/gathas/`;
  }
  
  // General Avesta fallback
  if (avestaAliases.some(alias => normalized.includes(alias))) {
    if (!chapter) return null;
    return `https://www.avesta.org/`;
  }

  return null; // Unknown
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