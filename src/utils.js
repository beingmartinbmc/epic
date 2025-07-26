/**
 * Generates a reference URL for a religious quote based on its source and reference numbers
 * @param {string} source - The source text (e.g., "Bhagavad Gita", "Quran", etc.)
 * @param {string} reference - The chapter:verse reference
 * @returns {string|null} The reference URL or null if no valid URL can be generated
 */
export function getReferenceUrl(source, reference) {
    if (!source || !reference) return null;

    const normalized = source.toLowerCase().replace(/[^a-z0-9]/g, '');

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
    const gitaAliases = ['bhagavadgita', 'gita', 'bhagwatgita', 'shrimadbhagavadgita', 'bhagavad'];
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

    if (bibleBooksRegex.test(source) || normalized.includes('bible') || normalized.includes('holybible')) {
        const cleanSource = source.replace(/\b(Holy\s)?Bible\b/i, '').trim();
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

    return {
        bookName: matches[1].trim(),
        chapter: matches[2] || matches[4] || '',
        verse: matches[3] || matches[5] || ''
    };
} 