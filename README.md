# Divine Spiritual Guidance

A beautiful web application that provides spiritual guidance and quotes from various religious texts using OpenAI's GPT-4 API.

## Features

- Beautiful, responsive UI with dynamic themes based on selected religious text
- Real-time spiritual guidance from multiple sacred texts:
  - Bhagavad Gita
  - Holy Quran
  - Holy Bible
  - Guru Granth Sahib
  - All texts combined
- Dynamic theme switching with appropriate religious symbols
- Animated background with floating religious symbols
- Mobile-responsive design
- Thoughtful summaries and contextual translations

## Setup

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd religious-guide-js
   ```

2. Configure your OpenAI API key:
   - Open `src/app.js`
   - Find the line: `const OPENAI_API_KEY = '';`
   - Add your OpenAI API key

3. Serve the application:
   You can use any static file server. Here are a few options:

   Using Python:
   ```bash
   # Python 3
   python -m http.server 8000
   ```

   Using Node.js:
   ```bash
   # Install serve globally
   npm install -g serve
   # Start the server
   serve src
   ```

   Using PHP:
   ```bash
   php -S localhost:8000
   ```

4. Open your browser and navigate to:
   - `http://localhost:8000` (or whatever port you configured)

## Security Note

⚠️ The current implementation exposes the OpenAI API key in the frontend code. For production use, you should:

1. Move the API calls to a backend server
2. Store the API key securely in environment variables
3. Implement proper rate limiting and error handling
4. Add user authentication if needed

## Deployment

You can deploy this application to any static hosting service:

- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting
- AWS S3 + CloudFront

Remember to secure your API key as mentioned in the security note above.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 