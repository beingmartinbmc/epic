# Epic - Divine Guidance Application

A React-based frontend application that provides spiritual guidance from sacred texts across multiple religions and languages.

## Features

- **Multi-Religious Support**: Bhagavad Gita, Vedas, Quran, Bible, Guru Granth Sahib, Tripitaka, Tao Te Ching, Analects of Confucius, Dhammapada, Upanishads, Talmud, and Avesta
- **Multi-Language Support**: English, Hindi, Spanish, Portuguese, French, German, Arabic, Punjabi, Urdu, and more
- **Four Guidance Modes**: Seek Guidance, Understand, Reflect, and Ask Me (Socratic) — see below
- **Crisis-Aware Compassion**: Detects acute distress and responds with human warmth and real-world help, never a verse-dump
- **Intellectual Humility**: Every substantive response is accompanied by a transparency disclaimer
- **Interactive UI**: Breathing background animations, floating particles, and spiritual loader
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Performance Optimized**: Lazy loading, code splitting, and efficient rendering

## Guidance Philosophy

Epic is built around a few deliberate principles:

- **Lead with the human, not the verse.** When a message signals acute distress
  or crisis, the app responds first with compassion and concrete real-world
  resources (helplines, support links) instead of parsing scripture into quotes.
- **Meet people where they are.** Four distinct modes let a user choose between
  comfort, learning, contemplation, and self-inquiry.
- **Stay humble.** Substantive responses carry a transparency disclaimer making
  clear this is reflective guidance, not authoritative religious ruling.

### Guidance Modes

| Mode | Button | What it does |
|------|--------|--------------|
| **Guidance** | Seek Guidance | Warm, personalized reflections rooted in scripture for your situation |
| **Understand** | Understand | Educational answers about religious teachings, concepts, and history |
| **Reflect** | Reflect | A single passage to sit with quietly, plus an open question to carry |
| **Socratic** | Ask Me | Returns the questions a tradition might gently ask you, instead of answers |

## Technology Stack

### Core Technologies
1. **React 18** - Modern React with hooks and functional components
2. **Vite** - Fast build tool and development server
3. **Bootstrap 5** - Responsive UI framework
4. **FontAwesome** - Icon library

### Language Detection
1. **Franc-all** - Comprehensive language detection for multiple scripts
2. **JSON-based mappings** - Efficient book name translations

### Performance Features
1. **Code Splitting** - Lazy loading of components and chunks
2. **Service Worker** - Caching and offline functionality
3. **Canvas Optimizations** - Hardware-accelerated animations
4. **Memoization** - React.memo and useMemo for performance
5. **Bundle Optimization** - Tree shaking and minification

## Installation

```bash
# Clone the repository
git clone <repository-url>
cd epic

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/          # React components
│   ├── BreathingBackground.jsx
│   ├── FloatingParticles.jsx
│   ├── GuidanceForm.jsx
│   ├── ResponseSection.jsx
│   └── ...
├── hooks/              # Custom React hooks
│   ├── useGuidance.js
│   └── useTheme.js
├── styles/             # CSS stylesheets
├── data/               # Static data files
│   └── book-name-mappings.json
├── test/               # Test setup (jsdom + jest-dom)
├── crisisDetection.js  # Crisis-language detection + compassionate message
├── utils.js            # Utility functions
├── prompts.js          # AI prompts configuration (per-mode prompts)
└── App.jsx             # Main application component
```

## Performance Optimizations

### Bundle Size
- **Code Splitting**: Separate chunks for React, UI libraries, and app logic
- **Lazy Loading**: ResponseSection component loaded on demand
- **Tree Shaking**: Unused code eliminated during build
- **Minification**: Aggressive code and CSS minification

### Runtime Performance
- **Memoization**: Components and expensive calculations cached
- **Canvas Optimization**: Hardware acceleration for animations
- **Debouncing**: Input handlers optimized for performance
- **Caching**: Service worker for static assets and API responses

### Memory Management
- **Component Cleanup**: Proper cleanup of event listeners and animations
- **Efficient Parsing**: Optimized response parsing algorithms
- **Memory Monitoring**: Performance metrics tracking

## Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run clean` - Clean build directory
- `npm test` - Run the test suite once
- `npm run test:watch` - Run tests in watch mode
- `npm run coverage` - Run tests with a coverage report

### Testing

The project uses [Vitest](https://vitest.dev/) with
[@testing-library/react](https://testing-library.com/) and a jsdom environment.

```bash
npm test
```

Coverage includes:
- **Crisis detection** — language matching and the compassionate response shape
- **`resolveMode`** — prompt/system selection across all four modes
- **`GuidanceForm`** — the four-mode toggle (render, active state, callbacks)
- **`ResponseSection`** — crisis support card, humility disclaimer, and normal
  scripture parsing

Tests run automatically in CI (`.github/workflows/ci.yml`) on every push and
pull request, and gate the GitHub Pages deploy (`.github/workflows/deploy.yml`).

### Performance Monitoring
The application includes built-in performance monitoring:
- Parse time tracking
- Render time optimization
- API call performance
- Memory usage monitoring

## Deployment

The application is optimized for deployment on Vercel, Netlify, or any static hosting service. The build process creates optimized static files in the `dist/` directory.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details.
