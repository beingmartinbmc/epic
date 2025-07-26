# Religious Guide JS

A spiritual guidance application that provides wisdom from sacred religious texts including the Bhagavad Gita, Quran, Bible, and Guru Granth Sahib.

## Features

- 🕉️ Multi-religious text support
- 🤖 AI-powered spiritual guidance
- 🎨 Beautiful, responsive UI with religious themes
- 🔒 Secure API architecture
- 💾 Intelligent local caching
- 📱 Mobile-friendly design

## Architecture

This application uses a secure two-tier architecture:

- **Frontend**: Static site hosted on GitHub Pages
- **Backend**: Serverless API proxy on Vercel

### Security Features

✅ **Secure API Architecture**: OpenAI API key is stored server-side only  
✅ **No Secrets in Frontend**: Client never has access to sensitive credentials  
✅ **Environment Variables**: All sensitive data managed through secure environment variables  
✅ **Automatic Security Scanning**: CI/CD pipeline checks for exposed secrets  
✅ **Clean Git History**: No API keys in repository history  

## Setup

### Prerequisites

- Node.js 18+ 
- npm or yarn
- OpenAI API key
- Vercel account (for API deployment)

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/religious-guide-js.git
   cd religious-guide-js
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   - `http://localhost:5173` (Vite dev server)

### Production Deployment

#### 1. Deploy API Proxy to Vercel

```bash
# Deploy to Vercel
vercel

# Set environment variables
vercel env add OPENAI_API_KEY
vercel env add OPENAI_MODEL
vercel env add OPENAI_TEMPERATURE
vercel env add OPENAI_TOKEN
```

#### 2. Configure GitHub Secrets

Add your Vercel API endpoint as a GitHub secret:
- Go to Repository Settings > Secrets and variables > Actions
- Add `OPENAI_PROXY_URL` with your Vercel deployment URL

#### 3. Deploy Frontend

The frontend automatically deploys to GitHub Pages via GitHub Actions when you push to main.

## Technology Stack

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Build Tool**: Vite
- **Backend**: Vercel Serverless Functions
- **AI**: OpenAI GPT API
- **Hosting**: GitHub Pages + Vercel
- **CI/CD**: GitHub Actions

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details. # Trigger redeploy
# Trigger redeploy
# Trigger redeploy for frontend
# Trigger redeploy for frontend
# Trigger redeploy for frontend after restoring inject-config.js
