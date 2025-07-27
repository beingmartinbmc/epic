/**
 * Language mappings for book names
 */
/**
 * Language mappings for book names
 */
const BOOK_NAME_MAPPINGS = {
    // Hindi - Bible
    'मत्ती': 'Matthew',
    'मरकुस': 'Mark',
    'लूका': 'Luke',
    'यूहन्ना': 'John',
    'प्रेरितों': 'Acts',
    'रोमियों': 'Romans',
    'कुरिन्थियों': 'Corinthians',
    'गलातियों': 'Galatians',
    'इफिसियों': 'Ephesians',
    'कुलुस्सियों': 'Colossians',
    'थिस्सलुनीकियों': 'Thessalonians',
    'तीतुस': 'Titus',
    'इब्रानियों': 'Hebrews',
    'याकूब': 'James',
    'प्रकाशितवाक्य': 'Revelation',

    // Hindi - Gita
    'भगवद गीता': 'Bhagavad Gita',
    'श्रीमद्भगवद्गीता': 'Bhagavad Gita',

    // Hindi - Quran
    'क़ुरआन': 'Quran',
    'क़ुरान': 'Quran',
    'कुरान': 'Quran',

    // Hindi - Guru Granth Sahib
    'गुरु ग्रंथ साहिब': 'Guru Granth Sahib',

    // Spanish - Bible
    'Mateo': 'Matthew',
    'Juan': 'John',
    'Hechos': 'Acts',
    'Corintios': 'Corinthians',
    'Efesios': 'Ephesians',
    'Colosenses': 'Colossians',
    'Tesalonicenses': 'Thessalonians',
    'Hebreos': 'Hebrews',
    'Santiago': 'James',
    'Apocalipsis': 'Revelation',

    // Spanish - Gita
    'El Bhagavad Gita': 'Bhagavad Gita',

    // Spanish - Quran
    'Corán': 'Quran',

    // Portuguese - Bible
    'Mateus': 'Matthew',
    'Marcos': 'Mark',
    'Lucas': 'Luke',
    'João': 'John',
    'Atos': 'Acts',
    'Romanos': 'Romans',
    'Coríntios': 'Corinthians',
    'Gálatas': 'Galatians',
    'Efésios': 'Ephesians',
    'Colossenses': 'Colossians',
    'Tessalonicenses': 'Thessalonians',
    'Tito': 'Titus',
    'Hebreus': 'Hebrews',
    'Tiago': 'James',
    'Apocalipse': 'Revelation',

    // Portuguese - Gita
    'Bhagavad Gita': 'Bhagavad Gita',

    // Portuguese - Quran
    'Alcorão': 'Quran',

    // Portuguese - Guru Granth Sahib
    'Guru Granth Sahib': 'Guru Granth Sahib',

    // French - Bible
    'Matthieu': 'Matthew',
    'Marc': 'Mark',
    'Luc': 'Luke',
    'Jean': 'John',
    'Actes': 'Acts',
    'Romains': 'Romans',
    'Corinthiens': 'Corinthians',
    'Galates': 'Galatians',
    'Éphésiens': 'Ephesians',
    'Colossiens': 'Colossians',
    'Thessaloniciens': 'Thessalonians',
    'Tite': 'Titus',
    'Hébreux': 'Hebrews',
    'Jacques': 'James',
    'Apocalypse': 'Revelation',

    // French - Gita
    'La Bhagavad Gita': 'Bhagavad Gita',

    // French - Quran
    'Coran': 'Quran',

    // French - Guru Granth Sahib
    'Le Guru Granth Sahib': 'Guru Granth Sahib',

    // German - Bible
    'Matthäus': 'Matthew',
    'Markus': 'Mark',
    'Lukas': 'Luke',
    'Johannes': 'John',
    'Apostelgeschichte': 'Acts',
    'Römer': 'Romans',
    'Korinther': 'Corinthians',
    'Galater': 'Galatians',
    'Epheser': 'Ephesians',
    'Kolosser': 'Colossians',
    'Thessalonicher': 'Thessalonians',
    'Titus': 'Titus',
    'Hebräer': 'Hebrews',
    'Jakobus': 'James',
    'Offenbarung': 'Revelation',

    // German - Gita
    'Die Bhagavad Gita': 'Bhagavad Gita',

    // German - Quran
    'Koran': 'Quran',

    // German - Guru Granth Sahib
    'Der Guru Granth Sahib': 'Guru Granth Sahib',


    // English - Quran
    'Quran': 'Quran',
    'The Quran': 'Quran',

    // English - Guru Granth Sahib
    'The Guru Granth Sahib': 'Guru Granth Sahib'
};


/**
 * Normalizes a book name by translating it to English if it's in another language
 * @param {string} bookName - The book name in any language
 * @returns {string} The English book name
 */
function normalizeBookName(bookName) {
    if (!bookName) return '';
    
    // First check if it's already in English
    const englishBookNames = Object.values(BOOK_NAME_MAPPINGS);
    if (englishBookNames.includes(bookName)) {
        return bookName;
    }
    
    // Check if it's a translated name and return the English equivalent
    return BOOK_NAME_MAPPINGS[bookName] || bookName;
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

    const [chapterRaw, verseRaw] = reference.split(':').map(part => part.trim());
    if (!chapterRaw) return null;

    const chapter = chapterRaw.replace(/[^0-9]/g, '');
    const verse = verseRaw ? verseRaw.replace(/[^0-9]/g, '') : null;

    // Quran Aliases
    const quranAliases = ['quran', 'alquran', 'alqur’an', 'koran', 'surah', 'sura', 'holyquran'];
    if (quranAliases.some(alias => normalized.includes(alias))) {
        if (!verse) return null;
        return `https://quran.com/${chapter}/${verse}`;
    }

    // Bhagavad Gita Aliases
    const gitaAliases = ['bhagavadgita', 'gita', 'bhagwatgita', 'shrimadbhagavadgita', 'bhagavad', 'भगवद गीता', 'भगवद', 'गीता'];
    if (gitaAliases.some(alias => normalized.includes(alias))) {
        if (!verse) return null;
        return `https://bhagavadgita.io/chapter/${chapter}/verse/${verse}`;
    }

    // Guru Granth Sahib
    const ggsAliases = ['granth', 'guru', 'sahib', 'gurugranthsahib'];
    if (ggsAliases.some(alias => normalized.includes(alias))) {
        return `https://www.searchgurbani.com/guru-granth-sahib/ang/${chapter}`;
    }

    // Bible detection using book names and fallback on "bible" keyword
    const bibleBooksRegex = /\b(genesis|exodus|leviticus|numbers|deuteronomy|joshua|judges|ruth|samuel|kings|chronicles|ezra|nehemiah|esther|job|psalms?|proverbs?|ecclesiastes|songofsolomon|isaiah|jeremiah|lamentations|ezekiel|daniel|hosea|joel|amos|obadiah|jonah|micah|nahum|habakkuk|zephaniah|haggai|zechariah|malachi|matthew|mark|luke|john|acts|romans|corinthians|galatians|ephesians|philippians|colossians|thessalonians|timothy|titus|philemon|hebrews|james|peter|jude|revelation)\b/i;

    if (bibleBooksRegex.test(normalizedSource) || normalized.includes('bible') || normalized.includes('holybible')) {
        const cleanSource = normalizedSource.replace(/\b(Holy\s)?Bible\b/i, '').trim();
        const formattedRef = verse ? `${chapterRaw}:${verseRaw}` : chapterRaw;
        const book = cleanSource.replace(/\s+/g, '+');
        return `https://www.biblegateway.com/passage/?search=${book}+${formattedRef}`;
    }

    return null; // Unknown
}


/**
 * Extracts chapter and verse from a source string
 * @param {string} source - The source string (e.g., "Bhagavad Gita 2:47")
 * @returns {{bookName: string, chapter: string, verse: string}} The extracted components
 */
export function parseSource(source) {
    if (!source) return { bookName: '', chapter: '', verse: '' };

    // Match patterns like "Book Name 2:47" or "Book Name Chapter 2 Verse 47"
    const matches = source.match(/^(.*?)(?:\s+(\d+):(\d+)|(?:\s+Chapter\s+(\d+)\s+Verse\s+(\d+)))$/i);
    
    if (!matches) return { bookName: source, chapter: '', verse: '' };

    // Normalize the book name to handle translated names
    const bookName = normalizeBookName(matches[1].trim());

    return {
        bookName: bookName,
        chapter: matches[2] || matches[4] || '',
        verse: matches[3] || matches[5] || ''
    };
} 