# Epic - Divine Guidance Application

A React-based frontend application that provides spiritual guidance from sacred texts across multiple religions and languages.

## Features

- **Multi-Religious Support**: Bhagavad Gita, Vedas, Quran, Bible, Guru Granth Sahib, Tripitaka, Tao Te Ching, Analects of Confucius, Dhammapada, Upanishads, Talmud, and Avesta
- **Multi-Language Support**: English, Hindi, Spanish, Portuguese, French, German, Arabic, Punjabi, Urdu, and more
- **Interactive UI**: Breathing background animations, floating particles, and spiritual loader
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Performance Optimized**: Lazy loading, code splitting, and efficient rendering

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
├── utils.js            # Utility functions
├── prompts.js          # AI prompts configuration
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
