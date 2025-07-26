import fs from 'fs';
import path from 'path';

const CONFIG_PATH = path.resolve('dist/index.html');
const OPENAI_PROXY_URL = process.env.OPENAI_PROXY_URL;

if (!OPENAI_PROXY_URL) {
    throw new Error('❌ OPENAI_PROXY_URL not set in environment variables');
}

const scriptTag = `<script>
window.API_CONFIG = {
  OPENAI_PROXY_URL: "${OPENAI_PROXY_URL}"
};
</script>`;

let html = fs.readFileSync(CONFIG_PATH, 'utf8');

if (html.includes('window.API_CONFIG')) {
    console.log('✅ API_CONFIG already injected.');
} else {
    html = html.replace('</head>', `${scriptTag}\n</head>`);
    fs.writeFileSync(CONFIG_PATH, html);
    console.log('✅ API_CONFIG injected successfully.');
}