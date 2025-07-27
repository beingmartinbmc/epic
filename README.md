# Religious Guide JS

A spiritual guidance application that provides wisdom from sacred religious texts including the Bhagavad Gita, Quran, Bible, and Guru Granth Sahib.

## Features

### 🌍 Multi-Language Support
The application automatically detects the user's input language and responds in the same language. This ensures a personalized experience for users worldwide.

**Supported Languages:**
- **Indic Languages**: Hindi, Bengali, Punjabi, Gujarati, Marathi, Telugu, Tamil, Urdu, Nepali, Sinhala
- **European Languages**: Spanish, French, German, Portuguese, Italian, Dutch, Swedish, Danish, Norwegian, Finnish, Polish, Czech, Slovak, Hungarian, Romanian, Bulgarian, Croatian, Serbian, Slovenian, Estonian, Latvian, Lithuanian, Maltese, Greek
- **Asian Languages**: Japanese, Korean, Chinese, Thai, Vietnamese, Indonesian, Malay, Filipino, Burmese, Khmer, Lao
- **Middle Eastern**: Arabic, Hebrew, Turkish
- **African Languages**: Swahili, Amharic, Hausa, Yoruba, Igbo
- **And many more...**

**Language Detection Libraries Used:**
1. **Mozilla Language Detection** - Primary detector with high accuracy
2. **CLD3 (Compact Language Detector)** - Fallback detector for better coverage
3. **Franc-min** - Lightweight fallback for edge cases

### 📚 Sacred Texts Integration
- **Bhagavad Gita** - Hindu spiritual wisdom
- **Holy Quran** - Islamic guidance and teachings
- **Holy Bible** - Christian spiritual wisdom
- **Guru Granth Sahib** - Sikh teachings and wisdom
- **All Texts** - Universal spiritual guidance from multiple traditions

### 🎨 Themed Interface
Each sacred text has its own visual theme:
- Hindu theme for Bhagavad Gita
- Islamic theme for Quran
- Christian theme for Bible
- Sikh theme for Guru Granth Sahib
- Universal theme for all texts

### 💾 Intelligent Caching
- Caches responses to improve performance
- Reduces API calls for repeated questions
- Cache monitoring and management tools

## Getting Started

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start Development Server:**
   ```bash
   npm run dev
   ```

3. **Build for Production:**
   ```bash
   npm run build
   ```

## Language Detection Testing

You can test the language detection functionality using the included test file:

```bash
# Open the test file in your browser
open test-language-detection.html
```

This will allow you to:
- Test language detection with various languages
- See which detector is being used
- Verify confidence levels
- Test the response language mapping

## API Configuration

The application uses a proxy API for OpenAI integration. Configure the API endpoint in `src/app.js`:

```javascript
const API_CONFIG = {
    OPENAI_PROXY_URL: 'your-api-endpoint-here'
};
```

## Project Structure

```
religious-guide-js/
├── src/
│   ├── app.js              # Main application logic
│   ├── prompts.js          # AI prompts configuration
│   ├── cache.js            # Caching functionality
│   ├── utils.js            # Utility functions
│   ├── config.js           # Configuration settings
│   └── styles.css          # Styling
├── api/
│   └── openai-proxy.js     # API proxy implementation
├── index.html              # Main HTML file
├── test-language-detection.html  # Language detection test
└── package.json            # Dependencies and scripts
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test the language detection with various languages
5. Submit a pull request

## License

This project is licensed under the MIT License.
