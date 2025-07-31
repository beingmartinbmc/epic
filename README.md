# Epic Frontend

Frontend for the Epic Religious Guidance Application - A spiritual guidance application that provides wisdom from sacred religious texts.

## 🌟 Features

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
- **The Vedas** - Ancient Hindu scriptures
- **Holy Quran** - Islamic guidance and teachings
- **Holy Bible** - Christian spiritual wisdom
- **Guru Granth Sahib** - Sikh teachings and wisdom
- **The Tripitaka** - Buddhist scriptures and teachings
- **All Sacred Texts** - Universal spiritual guidance from multiple traditions

### 🎨 Themed Interface
Each sacred text has its own visual theme:
- Hindu theme for Bhagavad Gita & Vedas
- Islamic theme for Quran
- Christian theme for Bible
- Sikh theme for Guru Granth Sahib
- Buddhist theme for Tripitaka
- Universal theme for all texts

### 💾 Intelligent Caching
- Caches responses to improve performance
- Reduces API calls for repeated questions
- Cache monitoring and management tools

## 🚀 Getting Started

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

## 🌐 Deployment

This frontend is deployed on **GitHub Pages** and automatically builds on every push to the main branch.

## 🔗 Backend Integration

This frontend connects to the Epic Backend API deployed on Vercel. The API endpoint is configured in `src/app.js`.

## 🛠️ Technology Stack

- **Framework**: Vanilla JavaScript (ES6+)
- **Build Tool**: Vite
- **Styling**: CSS3 with Bootstrap 5
- **Icons**: Font Awesome
- **Language Detection**: Multiple libraries for accuracy
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
epic-frontend/
├── src/
│   ├── app.js              # Main application logic
│   ├── prompts.js          # AI prompts configuration
│   ├── cache.js            # Caching functionality
│   ├── utils.js            # Utility functions
│   ├── config.js           # Configuration settings
│   └── styles.css          # Styling
├── index.html              # Main HTML file
├── vite.config.js          # Vite configuration
└── package.json            # Dependencies and scripts
```

## 🔧 Configuration

The API endpoint is configured in `src/app.js`:

```javascript
const API_CONFIG = {
    OPENAI_PROXY_URL: 'https://your-backend-url.vercel.app/api/openai-proxy'
};
```

## 📄 License

This project is licensed under the MIT License.
