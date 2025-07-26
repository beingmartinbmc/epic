/**
 * Generates a reference URL for a religious quote based on its source and reference numbers
 * @param {string} source - The source text (e.g., "Bhagavad Gita", "Quran", etc.)
 * @param {string} reference - The chapter:verse reference
 * @returns {string|null} The reference URL or null if no valid URL can be generated
 */
export function getReferenceUrl(source, reference) {
    if (!source || !reference) return null;

    const sourceLower = source.toLowerCase();
    const [chapter, verse] = reference.split(':').map(part => part.trim());
    
    if (!chapter) return null;

    // Handle Quran references
    if (sourceLower.includes('quran') || sourceLower.includes('koran')) {
        if (!verse) return null;
        // Format: https://quran.com/2/255
        return `https://quran.com/${chapter}/${verse}`;
    }
    
    // Handle Bhagavad Gita references
    if (sourceLower.includes('bhagavad') || sourceLower.includes('gita')) {
        if (!verse) return null;
        // Clean up chapter and verse numbers to ensure they're just numbers
        const cleanChapter = chapter.replace(/[^0-9]/g, '');
        const cleanVerse = verse.replace(/[^0-9]/g, '');
        // Format: https://bhagavadgita.io/chapter/2/verse/47
        return `https://bhagavadgita.io/chapter/${cleanChapter}/verse/${cleanVerse}`;
    }
    
    // Handle Guru Granth Sahib references
    if (sourceLower.includes('guru') || sourceLower.includes('granth') || sourceLower.includes('sahib')) {
        // Format: https://www.searchgurbani.com/guru-granth-sahib/ang/{page}
        // The chapter in this case represents the Ang (page number)
        const cleanPage = chapter.replace(/[^0-9]/g, '');
        return `https://www.searchgurbani.com/guru-granth-sahib/ang/${cleanPage}`;
    }
    
    // Handle Bible references
    if (source && chapter) {
        // Clean up source to remove "Bible" if present and any extra spaces
        const cleanSource = source.replace(/\s*bible\s*/i, '').trim();
        // Format: https://www.biblegateway.com/passage/?search=John+3:16
        const reference = verse ? `${chapter}:${verse}` : chapter;
        return `https://www.biblegateway.com/passage/?search=${cleanSource.replace(/\s+/g, '+')}+${reference}`;
    }
    
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