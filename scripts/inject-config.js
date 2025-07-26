import fs from 'fs';
import path from 'path';

// Get the API URL from environment or use the Vercel URL as fallback
const API_URL = process.env.OPENAI_PROXY_URL || 'https://religious-guide-cjzb7vck2-beingmartinbmcs-projects.vercel.app/api/openai-proxy';

console.log('Injecting API config...');
console.log('API URL:', API_URL);

const configScript = `
<script>
window.API_CONFIG = {
    OPENAI_PROXY_URL: '${API_URL}'
};
</script>
`;

try {
    // Read the built index.html
    const indexPath = path.resolve('dist/index.html');
    console.log('Reading file:', indexPath);
    
    let indexHtml = fs.readFileSync(indexPath, 'utf-8');
    console.log('Original file length:', indexHtml.length);

    // Insert the config script before the first <script> tag
    indexHtml = indexHtml.replace('<script', configScript + '<script');
    console.log('Modified file length:', indexHtml.length);

    // Write back the modified file
    fs.writeFileSync(indexPath, indexHtml);
    console.log('Config injection complete!');

    // Verify the injection
    const finalContent = fs.readFileSync(indexPath, 'utf-8');
    if (finalContent.includes(API_URL)) {
        console.log('Verification: API URL found in final file ✅');
    } else {
        console.error('Verification: API URL not found in final file ❌');
        process.exit(1);
    }
} catch (error) {
    console.error('Error injecting config:', error);
    process.exit(1);
} 