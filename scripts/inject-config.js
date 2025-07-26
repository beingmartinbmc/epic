import fs from 'fs';
import path from 'path';

const API_URL = process.env.OPENAI_PROXY_URL;

if (!API_URL) {
  console.error('❌ OPENAI_PROXY_URL is not set.');
  process.exit(1);
}

const indexPath = path.resolve('dist/index.html');

try {
  let indexHtml = fs.readFileSync(indexPath, 'utf-8');

  // Prevent duplicate injection
  if (indexHtml.includes('window.API_CONFIG')) {
    console.log('🔎 API_CONFIG already injected, skipping');
    process.exit(0);
  }

  const configScript = `\n<script>\nwindow.API_CONFIG = {\n    OPENAI_PROXY_URL: '${API_URL}'\n};\n</script>\n`;

  // Insert right before the first script tag so it loads before app code
  indexHtml = indexHtml.replace('<!-- inject:config -->', configScript);

  fs.writeFileSync(indexPath, indexHtml);
  console.log('✅ OPENAI_PROXY_URL injected into dist/index.html');
} catch (err) {
  console.error('❌ Failed to inject OPENAI_PROXY_URL:', err);
  process.exit(1);
}
