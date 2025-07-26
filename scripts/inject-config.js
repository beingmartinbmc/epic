// scripts/inject-config.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const OPENAI_PROXY_URL = process.env.OPENAI_PROXY_URL;

if (!OPENAI_PROXY_URL) {
    console.error('❌ Missing OPENAI_PROXY_URL env variable.');
    process.exit(1);
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const indexPath = path.resolve(__dirname, '../dist/index.html');

let html = fs.readFileSync(indexPath, 'utf-8');

// Inject global config before </head>
const injectedScript = `
  <script>
    window.API_CONFIG = {
      OPENAI_PROXY_URL: "${OPENAI_PROXY_URL}"
    };
  </script>
`;

if (html.includes('window.API_CONFIG')) {
    console.log('⚠️  API_CONFIG already exists in index.html');
} else {
    html = html.replace('</head>', `${injectedScript}\n</head>`);
    fs.writeFileSync(indexPath, html);
    console.log('✅ Injected OPENAI_PROXY_URL into index.html');
}