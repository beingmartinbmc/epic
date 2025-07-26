import fs from 'fs';
import path from 'path';

const configScript = `
<script>
window.API_CONFIG = {
    OPENAI_PROXY_URL: '${process.env.OPENAI_PROXY_URL || ''}',
    OPENAI_API_KEY: '${process.env.OPENAI_API_KEY || ''}',
    OPENAI_MODEL: '${process.env.OPENAI_MODEL || 'gpt-4o-mini'}',
    OPENAI_TEMPERATURE: ${process.env.OPENAI_TEMPERATURE || '0.7'},
    OPENAI_TOKEN: ${process.env.OPENAI_TOKEN || '2000'}
};
</script>
`;

// Read the built index.html
const indexPath = path.resolve('dist/index.html');
let indexHtml = fs.readFileSync(indexPath, 'utf-8');

// Insert the config script before the first <script> tag
indexHtml = indexHtml.replace('<script', configScript + '<script');

// Write back the modified file
fs.writeFileSync(indexPath, indexHtml); 