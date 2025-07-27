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
    'फिलिप्पियों': 'Philippians',
    'कुलुस्सियों': 'Colossians',
    'थिस्सलुनीकियों': 'Thessalonians',
    'तिमुथियुस': 'Timothy',
    'तीतुस': 'Titus',
    'फिलेमोन': 'Philemon',
    'इब्रानियों': 'Hebrews',
    'याकूब': 'James',
    'पतरस': 'Peter',
    'यहूदा': 'Jude',
    'प्रकाशितवाक्य': 'Revelation',
    'उत्पत्ति': 'Genesis',
    'निर्गम': 'Exodus',
    'लैव्यव्यवस्था': 'Leviticus',
    'गिनती': 'Numbers',
    'व्यवस्थाविवरण': 'Deuteronomy',
    'यहोशू': 'Joshua',
    'न्यायियों': 'Judges',
    'रूत': 'Ruth',
    'शमूएल': 'Samuel',
    'राजाओं': 'Kings',
    'इतिहास': 'Chronicles',
    'एज्रा': 'Ezra',
    'नहेमायाह': 'Nehemiah',
    'एस्तर': 'Esther',
    'अय्यूब': 'Job',
    'भजन संहिता': 'Psalms',
    'नीतिवचन': 'Proverbs',
    'सभोपदेशक': 'Ecclesiastes',
    'श्रेष्ठगीत': 'Song of Solomon',
    'यशायाह': 'Isaiah',
    'यिर्मयाह': 'Jeremiah',
    'विलापगीत': 'Lamentations',
    'यहेजकेल': 'Ezekiel',
    'दानिय्येल': 'Daniel',
    'होशे': 'Hosea',
    'योएल': 'Joel',
    'आमोस': 'Amos',
    'ओबद्याह': 'Obadiah',
    'योना': 'Jonah',
    'मीखाह': 'Micah',
    'नहूम': 'Nahum',
    'हबकूक': 'Habakkuk',
    'सपन्याह': 'Zephaniah',
    'हाग्गै': 'Haggai',
    'जकर्याह': 'Zechariah',
    'मलाकी': 'Malachi',

    // Hindi - Gita
    'भगवद गीता': 'Bhagavad Gita',
    'श्रीमद्भगवद्गीता': 'Bhagavad Gita',
    'गीता': 'Bhagavad Gita',
    'भगवद्गीता': 'Bhagavad Gita',
    'श्रीमद्भगवद गीता': 'Bhagavad Gita',

    // Hindi - Quran
    'क़ुरआन': 'Quran',
    'क़ुरान': 'Quran',
    'कुरान': 'Quran',
    'कुरआन': 'Quran',
    'पवित्र कुरान': 'Quran',
    'कुरान शरीफ': 'Quran',

    // Hindi - Guru Granth Sahib
    'गुरु ग्रंथ साहिब': 'Guru Granth Sahib',
    'गुरु ग्रंथ': 'Guru Granth Sahib',
    'ग्रंथ साहिब': 'Guru Granth Sahib',
    'गुरु ग्रंथ साहिब जी': 'Guru Granth Sahib',

    // Spanish - Bible
    'Mateo': 'Matthew',
    'Juan': 'John',
    'Hechos': 'Acts',
    'Corintios': 'Corinthians',
    'Efesios': 'Ephesians',
    'Colosenses': 'Colossians',
    'Tesalonicenses': 'Thessalonians',
    'Timoteo': 'Timothy',
    'Filemón': 'Philemon',
    'Hebreos': 'Hebrews',
    'Santiago': 'James',
    'Apocalipsis': 'Revelation',
    'Génesis': 'Genesis',
    'Éxodo': 'Exodus',
    'Deuteronomio': 'Deuteronomy',
    'Jueces': 'Judges',
    'Proverbios': 'Proverbs',
    'Eclesiastés': 'Ecclesiastes',
    'Cantares': 'Song of Solomon',
    'Jeremías': 'Jeremiah',
    'Lamentaciones': 'Lamentations',
    'Oseas': 'Hosea',
    'Abdías': 'Obadiah',
    'Jonás': 'Jonah',
    'Miqueas': 'Micah',
    'Nahúm': 'Nahum',
    'Sofonías': 'Zephaniah',
    'Hageo': 'Haggai',
    'Zacarías': 'Zechariah',
    'Malaquías': 'Malachi',

    // Spanish - Gita
    'El Bhagavad Gita': 'Bhagavad Gita',

    // Spanish - Quran
    'Corán': 'Quran',
    'El Corán': 'Quran',
    'Corán Sagrado': 'Quran',
    'El Corán Sagrado': 'Quran',

    // Spanish - Guru Granth Sahib
    'El Guru Granth Sahib': 'Guru Granth Sahib',

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
    'Filipenses': 'Philippians',
    'Colossenses': 'Colossians',
    'Tessalonicenses': 'Thessalonians',
    'Timóteo': 'Timothy',
    'Tito': 'Titus',
    'Filemom': 'Philemon',
    'Hebreus': 'Hebrews',
    'Tiago': 'James',
    'Pedro': 'Peter',
    'Apocalipse': 'Revelation',
    'Gênesis': 'Genesis',
    'Êxodo': 'Exodus',
    'Levítico': 'Leviticus',
    'Números': 'Numbers',
    'Deuteronômio': 'Deuteronomy',
    'Juízes': 'Judges',
    'Rute': 'Ruth',
    'Salmos': 'Psalms',
    'Provérbios': 'Proverbs',
    'Eclesiastes': 'Ecclesiastes',
    'Cânticos': 'Song of Solomon',
    'Isaías': 'Isaiah',
    'Jeremias': 'Jeremiah',
    'Lamentações': 'Lamentations',
    'Ezequiel': 'Ezekiel',
    'Oséias': 'Hosea',
    'Amós': 'Amos',
    'Obadias': 'Obadiah',
    'Miquéias': 'Micah',
    'Naum': 'Nahum',
    'Habacuque': 'Habakkuk',
    'Sofonias': 'Zephaniah',
    'Ageu': 'Haggai',
    'Zacarias': 'Zechariah',
    'Malaquias': 'Malachi',

    // Portuguese - Gita
    'O Bhagavad Gita': 'Bhagavad Gita',
    'A Gita': 'Bhagavad Gita',

    // Portuguese - Quran
    'Alcorão': 'Quran',
    'O Alcorão': 'Quran',
    'Alcorão Sagrado': 'Quran',
    'O Alcorão Sagrado': 'Quran',

    // Portuguese - Guru Granth Sahib
    'O Guru Granth Sahib': 'Guru Granth Sahib',

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
    'Philippiens': 'Philippians',
    'Colossiens': 'Colossians',
    'Thessaloniciens': 'Thessalonians',
    'Timothée': 'Timothy',
    'Tite': 'Titus',
    'Philémon': 'Philemon',
    'Hébreux': 'Hebrews',
    'Jacques': 'James',
    'Pierre': 'Peter',
    'Apocalypse': 'Revelation',
    'Genèse': 'Genesis',
    'Exode': 'Exodus',
    'Lévitique': 'Leviticus',
    'Nombres': 'Numbers',
    'Deutéronome': 'Deuteronomy',
    'Josué': 'Joshua',
    'Juges': 'Judges',
    'Psaumes': 'Psalms',
    'Proverbes': 'Proverbs',
    'Ecclésiaste': 'Ecclesiastes',
    'Cantique': 'Song of Solomon',
    'Ésaïe': 'Isaiah',
    'Jérémie': 'Jeremiah',
    'Ézéchiel': 'Ezekiel',
    'Osée': 'Hosea',
    'Joël': 'Joel',
    'Abdias': 'Obadiah',
    'Jonas': 'Jonah',
    'Michée': 'Micah',
    'Habacuc': 'Habakkuk',
    'Sophonie': 'Zephaniah',
    'Aggée': 'Haggai',
    'Zacharie': 'Zechariah',
    'Malachie': 'Malachi',

    // French - Gita
    'Le Bhagavad Gita': 'Bhagavad Gita',
    'La Gita': 'Bhagavad Gita',

    // French - Quran
    'Coran': 'Quran',
    'Le Coran': 'Quran',
    'Coran Sacré': 'Quran',
    'Le Coran Sacré': 'Quran',

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
    'Philipper': 'Philippians',
    'Kolosser': 'Colossians',
    'Thessalonicher': 'Thessalonians',
    'Timotheus': 'Timothy',
    'Hebräer': 'Hebrews',
    'Jakobus': 'James',
    'Petrus': 'Peter',
    'Judas': 'Jude',
    'Offenbarung': 'Revelation',
    '1. Mose': 'Genesis',
    '2. Mose': 'Exodus',
    '3. Mose': 'Leviticus',
    '4. Mose': 'Numbers',
    '5. Mose': 'Deuteronomy',
    'Josua': 'Joshua',
    'Richter': 'Judges',
    'Rut': 'Ruth',
    'Psalmen': 'Psalms',
    'Sprüche': 'Proverbs',
    'Prediger': 'Ecclesiastes',
    'Hohelied': 'Song of Solomon',
    'Jesaja': 'Isaiah',
    'Jeremia': 'Jeremiah',
    'Klagelieder': 'Lamentations',
    'Hesekiel': 'Ezekiel',
    'Obadja': 'Obadiah',
    'Jona': 'Jonah',
    'Micha': 'Micah',
    'Habakuk': 'Habakkuk',
    'Zefanja': 'Zephaniah',
    'Sacharja': 'Zechariah',
    'Maleachi': 'Malachi',

    // German - Gita
    'Die Bhagavad Gita': 'Bhagavad Gita',
    'Die Gita': 'Bhagavad Gita',

    // German - Quran
    'Der Koran': 'Quran',
    'Heiliger Koran': 'Quran',
    'Der Heilige Koran': 'Quran',

    // German - Guru Granth Sahib
    'Der Guru Granth Sahib': 'Guru Granth Sahib',

    // English - Bible
    'Matthew': 'Matthew',
    'Mark': 'Mark',
    'Luke': 'Luke',
    'John': 'John',
    'Acts': 'Acts',
    'Romans': 'Romans',
    'Corinthians': 'Corinthians',
    'Galatians': 'Galatians',
    'Ephesians': 'Ephesians',
    'Philippians': 'Philippians',
    'Colossians': 'Colossians',
    'Thessalonians': 'Thessalonians',
    'Timothy': 'Timothy',
    'Titus': 'Titus',
    'Philemon': 'Philemon',
    'Hebrews': 'Hebrews',
    'James': 'James',
    'Peter': 'Peter',
    'Jude': 'Jude',
    'Revelation': 'Revelation',
    'Genesis': 'Genesis',
    'Exodus': 'Exodus',
    'Leviticus': 'Leviticus',
    'Numbers': 'Numbers',
    'Deuteronomy': 'Deuteronomy',
    'Joshua': 'Joshua',
    'Judges': 'Judges',
    'Ruth': 'Ruth',
    'Psalms': 'Psalms',
    'Proverbs': 'Proverbs',
    'Ecclesiastes': 'Ecclesiastes',
    'Song of Solomon': 'Song of Solomon',
    'Isaiah': 'Isaiah',
    'Jeremiah': 'Jeremiah',
    'Lamentations': 'Lamentations',
    'Ezekiel': 'Ezekiel',
    'Daniel': 'Daniel',
    'Hosea': 'Hosea',
    'Joel': 'Joel',
    'Amos': 'Amos',
    'Obadiah': 'Obadiah',
    'Jonah': 'Jonah',
    'Micah': 'Micah',
    'Nahum': 'Nahum',
    'Habakkuk': 'Habakkuk',
    'Zephaniah': 'Zephaniah',
    'Haggai': 'Haggai',
    'Zechariah': 'Zechariah',
    'Malachi': 'Malachi',

    // English - Gita
    'Bhagavad Gita': 'Bhagavad Gita',
    'Bhagwat Gita': 'Bhagavad Gita',
    'Bhagwad Gita': 'Bhagavad Gita',
    'Shrimad Bhagavad Gita': 'Bhagavad Gita',
    'The Bhagavad Gita': 'Bhagavad Gita',
    'Gita': 'Bhagavad Gita',

    // English - Quran
    'Quran': 'Quran',
    'Al-Quran': 'Quran',
    'Al-Qur\'an': 'Quran',
    'Koran': 'Quran',
    'Holy Quran': 'Quran',
    'The Quran': 'Quran',
    'The Holy Quran': 'Quran',

    // English - Guru Granth Sahib
    'Guru Granth Sahib': 'Guru Granth Sahib',
    'Guru Granth': 'Guru Granth Sahib',
    'Granth Sahib': 'Guru Granth Sahib',
    'Adi Granth': 'Guru Granth Sahib',
    'The Guru Granth Sahib': 'Guru Granth Sahib',

    // Arabic - Quran
    'القرآن': 'Quran',
    'القرآن الكريم': 'Quran',
    'القرآن المجيد': 'Quran',
    'كتاب الله': 'Quran',

    // Punjabi - Guru Granth Sahib
    'ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ': 'Guru Granth Sahib',
    'ਗੁਰੂ ਗ੍ਰੰਥ': 'Guru Granth Sahib',
    'ਗ੍ਰੰਥ ਸਾਹਿਬ': 'Guru Granth Sahib',
    'ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ': 'Guru Granth Sahib',

    // Urdu - Quran
    'قرآن': 'Quran',
    'قرآن پاک': 'Quran',
    'قرآن مجید': 'Quran',

    // Hindi - Vedas
    'वेद': 'Vedas',
    'ऋग्वेद': 'Rigveda',
    'यजुर्वेद': 'Yajurveda',
    'सामवेद': 'Samaveda',
    'अथर्ववेद': 'Atharvaveda',
    // English - Vedas (with and without space)
    'Rigveda': 'Rigveda',
    'Rig Veda': 'Rigveda',
    'Yajurveda': 'Yajurveda',
    'Yajur Veda': 'Yajurveda',
    'Samaveda': 'Samaveda',
    'Sama Veda': 'Samaveda',
    'Atharvaveda': 'Atharvaveda',
    'Atharva Veda': 'Atharvaveda'
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

    // Handle different reference formats
    let chapter, verse;
    
    // Check if it's a Guru Granth Sahib Ang reference (e.g., "Ang 786")
    const angMatch = reference.match(/Ang\s+(\d+)/i);
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
                // Rigveda format: rv{book}{hymn}.htm (both zero-padded to 3 digits)
                const paddedBook = String(chapter).padStart(3, '0');
                const paddedHymn = String(verse).padStart(3, '0');
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
    const bibleBooksRegex = /\b(genesis|exodus|leviticus|numbers|deuteronomy|joshua|judges|ruth|samuel|kings|chronicles|ezra|nehemiah|esther|job|psalms?|proverbs?|ecclesiastes|songofsolomon|isaiah|jeremiah|lamentations|ezekiel|daniel|hosea|joel|amos|obadiah|jonah|micah|nahum|habakkuk|zephaniah|haggai|zechariah|malachi|matthew|mark|luke|john|acts|romans|corinthians|galatians|ephesians|philippians|colossians|thessalonians|timothy|titus|philemon|hebrews|james|peter|jude|revelation)\b/i;

    if (bibleBooksRegex.test(normalizedSource) || normalized.includes('bible') || normalized.includes('holybible')) {
        const cleanSource = normalizedSource.replace(/\b(Holy\s)?Bible\b/i, '').trim();
        const formattedRef = verse ? `${chapter}:${verse}` : chapter;
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
                let rawBook = vedasMatch[1].replace(/\s*-?\s*/g, '').toLowerCase();
                let bookName = '';
                if (rawBook.startsWith('rig')) bookName = 'Rigveda';
                else if (rawBook.startsWith('yajur')) bookName = 'Yajurveda';
                else if (rawBook.startsWith('sama')) bookName = 'Samaveda';
                else if (rawBook.startsWith('atharva')) bookName = 'Atharvaveda';
                const chapter = vedasMatch[2] || '';
                let verse = vedasMatch[3] || '';
                if (vedasMatch[4]) verse += '.' + vedasMatch[4];
                return { bookName, chapter, verse };
            }
        }
    }

    // Accept both 'Rigveda 10.129.2' and 'Rig Veda 10.129.2' and similar for other Vedas
    const vedaPattern = /^(Rig\s*-?\s*Veda|Yajur\s*-?\s*Veda|Sama\s*-?\s*Veda|Atharva\s*-?\s*Veda|Rigveda|Yajurveda|Samaveda|Atharvaveda)\s*(\d+)(?:\.(\d+))?(?:\.(\d+))?/i;
    const vedasMatch = source.match(vedaPattern);
    if (vedasMatch) {
        let rawBook = vedasMatch[1].replace(/\s*-?\s*/g, '').toLowerCase();
        let bookName = '';
        if (rawBook.startsWith('rig')) bookName = 'Rigveda';
        else if (rawBook.startsWith('yajur')) bookName = 'Yajurveda';
        else if (rawBook.startsWith('sama')) bookName = 'Samaveda';
        else if (rawBook.startsWith('atharva')) bookName = 'Atharvaveda';
        const chapter = vedasMatch[2] || '';
        let verse = vedasMatch[3] || '';
        if (vedasMatch[4]) verse += '.' + vedasMatch[4];
        return { bookName, chapter, verse };
    }

    // Existing patterns
    const matches = source.match(/^(.*?)(?:\s+(\d+):(\d+)|(?:\s+Chapter\s+(\d+)\s+Verse\s+(\d+))|(?:\s+Ang\s+(\d+)))$/i);
    if (!matches) return { bookName: source, chapter: '', verse: '' };

    // Normalize the book name to handle translated names
    const bookName = normalizeBookName(matches[1].trim());

    return {
        bookName: bookName,
        chapter: matches[2] || matches[4] || matches[6] || '',
        verse: matches[3] || matches[5] || ''
    };
} 