import fs from 'fs';
import path from 'path';

const configScript = `
<script>
window.API_CONFIG = {
    OPENAI_PROXY_URL: '${process.env.OPENAI_PROXY_URL || ''}'
};
</script>
`;

// Read the built index.html
const indexPath = path.resolve('dist/src/index.html');
let indexHtml = fs.readFileSync(indexPath, 'utf-8');

// Insert the config script before the first <script> tag
indexHtml = indexHtml.replace('<script', configScript + '<script');

// Write back the modified file
fs.writeFileSync(indexPath, indexHtml); 