/**
 * Generates a reference URL for a religious quote based on its source and reference numbers
 * @param {string} source - The source text (e.g., "Bhagavad Gita", "Quran", etc.)
 * @param {string} reference - The chapter:verse reference
 * @returns {string|null} The reference URL or null if no valid URL can be generated
 */
export function getReferenceUrl(source, reference) {
    if (!source || !reference) return null;

    // Normalize the source string to improve matching. Remove punctuation/whitespace for easier substring checks.
    const sourceLower = source.toLowerCase();
    const sourceNormalized = sourceLower.replace(/[^a-z0-9]/g, '');
    const [chapter, verse] = reference.split(':').map(part => part.trim());
    
    if (!chapter) return null;

    // Handle Quran references – be lenient on apostrophes/dashes (e.g., "Qur'an", "al-quran")
    if (sourceNormalized.includes('quran') || sourceNormalized.includes('koran') || sourceNormalized.includes('surah') || sourceNormalized.includes('sura')) {
        if (!verse) return null;
        // Format: https://quran.com/2/255
        return `https://quran.com/${chapter}/${verse}`;
    }
    
    // Handle Bhagavad Gita references
    if (sourceNormalized.includes('bhagavad') || sourceNormalized.includes('gita')) {
        if (!verse) return null;
        // Clean up chapter and verse numbers to ensure they're just numbers
        const cleanChapter = chapter.replace(/[^0-9]/g, '');
        const cleanVerse = verse.replace(/[^0-9]/g, '');
        // Format: https://bhagavadgita.io/chapter/2/verse/47
        return `https://bhagavadgita.io/chapter/${cleanChapter}/verse/${cleanVerse}`;
    }
    
    // Handle Guru Granth Sahib references
    if (sourceNormalized.includes('guru') || sourceNormalized.includes('granth') || sourceNormalized.includes('sahib')) {
        // Format: https://www.searchgurbani.com/guru-granth-sahib/ang/{page}
        // The chapter in this case represents the Ang (page number)
        const cleanPage = chapter.replace(/[^0-9]/g, '');
        return `https://www.searchgurbani.com/guru-granth-sahib/ang/${cleanPage}`;
    }
    
    // Handle Bible references – default fallback when we detect a probable Bible book or the word "bible"
    // List of common Bible book names/abbreviations (not exhaustive but covers most use-cases)
    const bibleBooksPattern = /\b(genesis|exodus|leviticus|numbers|deuteronomy|joshua|judges|ruth|samuel|kings|chronicles|ezra|nehemiah|esther|job|psalm|psalms|proverb|proverbs|ecclesiastes|song\sof\ssolomon|isaiah|jeremiah|lamentations|ezekiel|daniel|hosea|joel|amos|obadiah|jonah|micah|nahum|habakkuk|zephaniah|haggai|zechariah|malachi|matthew|mark|luke|john|acts|romans|corinthians|galatians|ephesians|philippians|colossians|thessalonians|timothy|titus|philemon|hebrews|james|peter|jude|revelation)\b/i;

    if (bibleBooksPattern.test(source) || sourceLower.includes('bible')) {
        // Clean up source to remove "Bible" if present and any extra spaces
        const cleanSource = source.replace(/\s*bible\s*/i, '').trim();
        // Format: https://www.biblegateway.com/passage/?search=John+3:16
        const reference = verse ? `${chapter}:${verse}` : chapter;
        return `https://www.biblegateway.com/passage/?search=${cleanSource.replace(/\s+/g, '+')}+${reference}`;
    }

    // Unknown or unsupported source
    return null;
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